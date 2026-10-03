import { SITE } from "../config/site";
import { breadcrumbSchema, localBusinessSchema } from "../lib/schema";
import { whatsAppGeneralUrl } from "../lib/inquiry";
import SEO from "../components/SEO";
import PageHeader from "../components/PageHeader";
import InquiryForm from "../components/InquiryForm";
import { PhoneIcon, MailIcon, PinIcon, WhatsAppIcon } from "../components/Icons";

export default function Contact() {
  const crumbs = [{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }];
  const a = SITE.address;
  return (
    <>
      <SEO
        title={`Contact ${SITE.name} | Lighting & Fencing Installation in ${SITE.city}`}
        description={`Call ${SITE.phone}, WhatsApp us or send an inquiry for street light, solar light, chain link or concrete pole fencing installation in ${SITE.city}. Site visit within 2 days.`}
        path="/contact"
        jsonLd={[localBusinessSchema(), breadcrumbSchema(crumbs)]}
      />
      <PageHeader title={`Contact us for installation in ${SITE.city}`} crumbs={crumbs}
        intro="Fill in what you know. Rough length or pole count is enough to start. We call back to fix a site visit." />
      <section className="py-14 sm:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          <div className="bg-white p-6 sm:p-8">
            <h2 className="mb-6 font-display text-3xl font-bold">Send an inquiry</h2>
            <InquiryForm />
          </div>
          <aside className="space-y-8">
            <div>
              <h2 className="font-display text-2xl font-semibold">Reach us directly</h2>
              <address className="mt-4 space-y-4 not-italic">
                <a href={`tel:${SITE.phoneHref}`} className="flex items-center gap-3 font-semibold hover:text-wire"><PhoneIcon className="h-5 w-5 text-wire" />{SITE.phone}</a>
                <a href={whatsAppGeneralUrl()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-semibold hover:text-wire"><WhatsAppIcon className="h-5 w-5 text-wire" />WhatsApp {SITE.phone}</a>
                <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 break-all font-semibold hover:text-wire"><MailIcon className="h-5 w-5 shrink-0 text-wire" />{SITE.email}</a>
                <p className="flex gap-3"><PinIcon className="mt-1 h-5 w-5 shrink-0 text-wire" /><span><strong className="font-semibold">{SITE.name}</strong><br />{a.street}<br />{a.locality}, {a.region} {a.postalCode}</span></p>
              </address>
            </div>
            <div>
              <h2 className="font-display text-2xl font-semibold">Office hours</h2>
              <p className="mt-2 text-asphalt/80">{SITE.hours}. Crews are on site during the day, so calls after 5 pm get the quickest answer on detail.</p>
            </div>
            {SITE.mapEmbedUrl && (
              <iframe title={`Map to ${SITE.name}`} src={SITE.mapEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="aspect-[4/3] w-full border-0" />
            )}
          </aside>
        </div>
      </section>
    </>
  );
}
