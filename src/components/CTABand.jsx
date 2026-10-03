import { SITE } from "../config/site";
import InquiryButton from "./InquiryButton";
import { PhoneIcon } from "./Icons";

export default function CTABand({ title = "Tell us about your site", text, service = "" }) {
  return (
    <section className="bg-sodium">
      <div className="container-x flex flex-col gap-6 py-12 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold text-asphalt sm:text-4xl">{title}</h2>
          <p className="mt-2 text-asphalt/85">
            {text || `Send the rough length or pole count and the location. We'll call back, fix a site visit in ${SITE.city}, and give you a written, itemised quote.`}
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <InquiryButton service={service} className="btn justify-center bg-asphalt text-white hover:bg-asphalt-600" />
          <a href={`tel:${SITE.phoneHref}`} className="btn justify-center border-2 border-asphalt text-asphalt hover:bg-asphalt hover:text-white">
            <PhoneIcon className="h-5 w-5" /> {SITE.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
