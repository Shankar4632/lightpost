import { Link } from "react-router-dom";
import { SERVICE_ICONS } from "./Icons";
import InquiryButton from "./InquiryButton";

export default function ServiceCard({ service, headingLevel = "h3" }) {
  const Icon = SERVICE_ICONS[service.icon];
  const H = headingLevel;
  return (
    <article className="flex flex-col border-t-4 border-asphalt bg-white p-6">
      <Icon className="h-10 w-10 text-wire" />
      <H className="mt-4 font-display text-2xl font-semibold text-asphalt">
        <Link to={`/services/${service.slug}`} className="hover:text-wire">{service.name}</Link>
      </H>
      <p className="mt-2 flex-1 text-asphalt/75">{service.short}</p>
      <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
        <InquiryButton service={service.name} className="btn-sm bg-sodium text-asphalt hover:bg-sodium-dark" />
        <Link to={`/services/${service.slug}`} className="text-sm font-semibold text-asphalt underline decoration-steel underline-offset-4 hover:decoration-asphalt">
          How we do it
        </Link>
      </div>
    </article>
  );
}
