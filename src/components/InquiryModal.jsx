import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useInquiry } from "../context/InquiryContext";
import InquiryForm from "./InquiryForm";
import { CloseIcon } from "./Icons";

export default function InquiryModal() {
  const { open, service, closeInquiry } = useInquiry();
  const panelRef = useRef(null);
  const lastFocus = useRef(null);

  useEffect(() => {
    if (!open) return;
    lastFocus.current = document.activeElement;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => panelRef.current?.querySelector("input,select,textarea,button")?.focus(), 50);

    const onKey = (e) => {
      if (e.key === "Escape") closeInquiry();
      if (e.key === "Tab" && panelRef.current) {
        const f = panelRef.current.querySelectorAll('a[href],button:not([disabled]),input,select,textarea,[tabindex]:not([tabindex="-1"])');
        if (!f.length) return;
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
      lastFocus.current?.focus?.();
    };
  }, [open, closeInquiry]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-end justify-center bg-asphalt/70 sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(e) => e.target === e.currentTarget && closeInquiry()}
        >
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="inquiry-title"
            className="max-h-[92vh] w-full overflow-y-auto rounded-t-md bg-white p-5 shadow-2xl sm:max-w-2xl sm:rounded-md sm:p-8"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
          >
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <h2 id="inquiry-title" className="font-display text-3xl font-semibold text-asphalt">Request an inquiry</h2>
                <p className="mt-1 text-sm text-asphalt/75">Tell us about the site. We call back to fix a visit, usually the same day.</p>
              </div>
              <button type="button" onClick={closeInquiry} className="rounded p-2 text-asphalt hover:bg-concrete focus-visible:outline focus-visible:outline-2 focus-visible:outline-sodium" aria-label="Close inquiry form">
                <CloseIcon className="h-6 w-6" />
              </button>
            </div>
            <InquiryForm defaultService={service} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
