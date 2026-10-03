import { Link } from "react-router-dom";
import { SITE } from "../config/site";
import { SERVICES } from "../data/services";
import { AREAS } from "../data/areas";
import Logo from "./Logo";
import { PhoneIcon, MailIcon, PinIcon } from "./Icons";

const Heading = ({ children }) => <h2 className="font-display text-lg font-semibold text-white">{children}</h2>;
const FLink = ({ to, children }) => (
  <li><Link to={to} className="text-concrete/70 hover:text-white">{children}</Link></li>
);

export default function Footer() {
  const a = SITE.address;
  return (
    <footer className="bg-asphalt text-concrete/80">
      <div className="container-x grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm">
            Installation-only contractor for street lights, solar lights, chain-link and concrete pole fencing in {SITE.city}.
            We don't manufacture. We install, properly.
          </p>
          {/* NAP block — keep identical to Google Business Profile */}
          <address className="mt-6 space-y-2.5 text-sm not-italic">
            <p className="flex gap-2.5"><PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-sodium" />
              <span><strong className="font-semibold text-white">{SITE.name}</strong><br />{a.street}, {a.locality}, {a.region} {a.postalCode}</span>
            </p>
            <p className="flex gap-2.5"><PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-sodium" /><a href={`tel:${SITE.phoneHref}`} className="hover:text-white">{SITE.phone}</a></p>
            <p className="flex gap-2.5"><MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-sodium" /><a href={`mailto:${SITE.email}`} className="break-all hover:text-white">{SITE.email}</a></p>
            <p className="pl-[26px] text-concrete/60">{SITE.hours}</p>
          </address>
        </div>

        <nav aria-label="Services">
          <Heading>Services</Heading>
          <ul className="mt-4 space-y-2 text-sm">
            {SERVICES.map((s) => <FLink key={s.slug} to={`/services/${s.slug}`}>{s.name} in {SITE.city}</FLink>)}
          </ul>
        </nav>

        <div>
          <Heading>Areas we cover</Heading>
          <ul className="mt-4 space-y-2 text-sm">
            {AREAS.map((ar) => <li key={ar.name}>{ar.name}</li>)}
            <li><Link to="/service-areas" className="text-sodium hover:underline">All service areas</Link></li>
          </ul>
        </div>

        <nav aria-label="Site">
          <Heading>Site</Heading>
          <ul className="mt-4 space-y-2 text-sm">
            <FLink to="/about">About us</FLink>
            <FLink to="/projects">Projects</FLink>
            <FLink to="/blog">Guides</FLink>
            <FLink to="/faq">FAQ</FLink>
            <FLink to="/contact">Contact</FLink>
            <FLink to="/privacy-policy">Privacy policy</FLink>
            <FLink to="/terms">Terms</FLink>
          </ul>
          <div className="mt-6 flex gap-4 text-sm">
            {Object.entries(SITE.social).map(([k, url]) => (
              <a key={k} href={url} target="_blank" rel="noopener noreferrer" className="capitalize text-concrete/70 hover:text-white">{k}</a>
            ))}
          </div>
        </nav>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-2 py-5 text-xs text-concrete/55 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {SITE.legalName}. All rights reserved.</p>
          <p>Installation services only. Product warranties are provided by manufacturers.</p>
        </div>
      </div>
    </footer>
  );
}
