import { Link } from "react-router-dom";
import { SITE } from "../config/site";
import { AREAS, COVERAGE_NOTE } from "../data/areas";
import { SERVICES } from "../data/services";
import { breadcrumbSchema, localBusinessSchema } from "../lib/schema";
import SEO from "../components/SEO";
import PageHeader from "../components/PageHeader";
import CTABand from "../components/CTABand";
import { PinIcon } from "../components/Icons";

export default function ServiceAreas() {
  const crumbs = [{ name: "Home", path: "/" }, { name: "Service areas", path: "/service-areas" }];
  return (
    <>
      <SEO
        title={`Service Areas: ${SITE.city} & Surrounding Region | ${SITE.name}`}
        description={`We install street lights, solar lights, chain link and concrete pole fencing across ${SITE.city}, nearby industrial estates, townships, farmland and villages within about 150 km.`}
        path="/service-areas"
        jsonLd={[breadcrumbSchema(crumbs), localBusinessSchema()]}
      />
      <PageHeader title={`Areas we serve in and around ${SITE.city}`} crumbs={crumbs} intro={COVERAGE_NOTE} />
      <section className="py-14 sm:py-20">
        <div className="container-x">
          <ul className="grid gap-px bg-concrete-300 md:grid-cols-2">
            {AREAS.map((a) => (
              <li key={a.name} className="bg-concrete p-6">
                <h2 className="flex items-center gap-2 font-display text-2xl font-semibold"><PinIcon className="h-5 w-5 text-sodium-dark" />{a.name}</h2>
                <p className="mt-2 text-asphalt/75">{a.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="bg-white py-14 sm:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Outside the city?</h2>
            <p className="mt-4 text-asphalt/80">
              For farmland and village jobs we plan the visit around other work in the same direction, so travel costs stay low. Larger jobs —
              a whole farm boundary or a panchayat road — are worth the trip even further out.
            </p>
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Services in every area</h2>
            <ul className="mt-4 space-y-2">
              {SERVICES.map((s) => (
                <li key={s.slug}><Link to={`/services/${s.slug}`} className="font-semibold text-wire hover:underline">{s.name} in {SITE.city}</Link></li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <CTABand title="Is your site in range?" text="Send the location with your inquiry. We'll confirm within the day." />
    </>
  );
}
