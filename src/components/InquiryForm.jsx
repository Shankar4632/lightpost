import { useEffect, useId, useRef, useState } from "react";
import { SERVICE_OPTIONS } from "../data/services";
import { SITE } from "../config/site";
import { EMPTY_INQUIRY, validateInquiry, buildWhatsAppUrl, sendInquiryEmail } from "../lib/inquiry";
import { CheckIcon, WhatsAppIcon, PhoneIcon } from "./Icons";

const inputCls =
  "mt-1.5 block w-full rounded-[3px] border border-concrete-300 bg-white px-3 py-2.5 text-[16px] text-asphalt placeholder:text-steel focus:border-asphalt focus:outline-none focus:ring-2 focus:ring-sodium/60 aria-[invalid=true]:border-red-700";

function Field({ id, label, required, error, hint, children }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-asphalt">
        {label} {required ? <span className="text-red-700" aria-hidden="true">*</span> : <span className="font-normal text-steel-dark">(optional)</span>}
      </label>
      {children}
      {hint && !error && <p className="mt-1 text-xs text-steel-dark">{hint}</p>}
      {error && <p id={`${id}-err`} className="mt-1 text-sm text-red-700">{error}</p>}
    </div>
  );
}

/**
 * Inquiry flow on submit:
 *  1. validate name, phone, service
 *  2. open a blank tab synchronously (so popup blockers allow it)
 *  3. send the email via EmailJS
 *  4. point that tab at wa.me with the same data, so the user taps Send
 *  5. show the confirmation on screen
 */
export default function InquiryForm({ defaultService = "", onSubmitted }) {
  const uid = useId();
  const [values, setValues] = useState({ ...EMPTY_INQUIRY, service: defaultService });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | done
  const [result, setResult] = useState(null);
  const doneRef = useRef(null);

  useEffect(() => {
    setValues((v) => ({ ...v, service: defaultService || v.service }));
  }, [defaultService]);

  useEffect(() => {
    if (status === "done") doneRef.current?.focus();
  }, [status]);

  const set = (k) => (e) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const errs = validateInquiry(values);
    setErrors(errs);
    if (Object.keys(errs).length) {
      const firstKey = ["name", "phone", "service", "email"].find((k) => errs[k]);
      document.getElementById(`${uid}-${firstKey}`)?.focus();
      return;
    }

    const waUrl = buildWhatsAppUrl(values);
    // Opened before the await so the browser treats it as a user-initiated popup.
    const waTab = window.open("", "_blank");
    if (waTab) {
      waTab.opener = null;
      waTab.document.title = "Opening WhatsApp…";
    }

    setStatus("sending");
    let emailOk = true;
    try {
      await sendInquiryEmail(values);
    } catch (err) {
      console.error("EmailJS:", err);
      emailOk = false;
    }

    if (waTab) waTab.location.href = waUrl;
    setResult({ emailOk, waUrl, waOpened: Boolean(waTab), name: values.name.trim().split(" ")[0] });
    setStatus("done");
    onSubmitted?.();
  }

  function reset() {
    setValues({ ...EMPTY_INQUIRY, service: defaultService });
    setResult(null);
    setStatus("idle");
  }

  if (status === "done" && result) {
    return (
      <div ref={doneRef} tabIndex={-1} role="status" className="outline-none">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-wire text-white">
            <CheckIcon className="h-5 w-5" />
          </span>
          <div>
            <p className="font-display text-2xl font-semibold text-asphalt">Thanks, {result.name}. Inquiry sent.</p>
            <p className="mt-2 text-asphalt/80">
              {result.emailOk
                ? "We've got your details by email and will call you back within working hours, usually the same day."
                : "Your details couldn't be emailed just now, so please send them on WhatsApp or call us — that reaches us directly."}
            </p>
          </div>
        </div>
        <div className="mt-5 rounded-[3px] border border-concrete-300 bg-concrete p-4 text-sm text-asphalt/85">
          {result.waOpened
            ? "WhatsApp opened in a new tab with your message filled in. Tap Send there so it reaches us."
            : "Your browser blocked the WhatsApp tab. Use the button below to send the same message."}
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          <a href={result.waUrl} target="_blank" rel="noopener noreferrer" className="btn bg-wire text-white hover:bg-wire-dark">
            <WhatsAppIcon className="h-5 w-5" /> {result.waOpened ? "Open WhatsApp again" : "Send on WhatsApp"}
          </a>
          <a href={`tel:${SITE.phoneHref}`} className="btn border border-asphalt text-asphalt hover:bg-asphalt hover:text-white">
            <PhoneIcon className="h-5 w-5" /> Call {SITE.phone}
          </a>
          <button type="button" onClick={reset} className="btn text-asphalt underline underline-offset-4">
            Send another inquiry
          </button>
        </div>
      </div>
    );
  }

  const err = (k) => (errors[k] ? { "aria-invalid": true, "aria-describedby": `${uid}-${k}-err` } : {});

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field id={`${uid}-name`} label="Your name" required error={errors.name}>
          <input id={`${uid}-name`} className={inputCls} autoComplete="name" value={values.name} onChange={set("name")} {...err("name")} />
        </Field>
        <Field id={`${uid}-phone`} label="Phone / WhatsApp" required error={errors.phone}>
          <input id={`${uid}-phone`} type="tel" inputMode="tel" className={inputCls} autoComplete="tel" placeholder="98765 43210" value={values.phone} onChange={set("phone")} {...err("phone")} />
        </Field>
        <Field id={`${uid}-email`} label="Email" error={errors.email}>
          <input id={`${uid}-email`} type="email" className={inputCls} autoComplete="email" value={values.email} onChange={set("email")} {...err("email")} />
        </Field>
        <Field id={`${uid}-service`} label="Service needed" required error={errors.service}>
          <select id={`${uid}-service`} className={inputCls} value={values.service} onChange={set("service")} {...err("service")}>
            <option value="">Choose a service</option>
            {SERVICE_OPTIONS.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </Field>
      </div>
      <Field id={`${uid}-city`} label="City / area of the site">
        <input id={`${uid}-city`} className={inputCls} autoComplete="address-level2" placeholder={`e.g. ${SITE.city}, farm near…`} value={values.city} onChange={set("city")} />
      </Field>
      <Field id={`${uid}-message`} label="About the job" hint="Rough length in metres, number of poles, or whether you've bought material already — whatever you know.">
        <textarea id={`${uid}-message`} rows={4} className={inputCls} value={values.message} onChange={set("message")} />
      </Field>
      <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
        <button type="submit" disabled={status === "sending"} className="btn bg-sodium text-asphalt hover:bg-sodium-dark disabled:opacity-70">
          {status === "sending" ? "Sending inquiry…" : "Send inquiry"}
        </button>
        <p className="text-xs text-steel-dark">Sends to our email and opens WhatsApp with your details filled in.</p>
      </div>
    </form>
  );
}
