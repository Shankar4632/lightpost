import { Link } from "react-router-dom";
import { SITE } from "../config/site";
import { SERVICES } from "../data/services";
import { breadcrumbSchema } from "../lib/schema";
import SEO from "../components/SEO";
import PageHeader from "../components/PageHeader";
import ServiceCard from "../components/ServiceCard";
import CTABand from "../components/CTABand";

const PICK = [
  ["Society or factory road with power nearby", "street-light-fitting"],
  ["Farm road, village road, or no meter yet", "solar-light-fitting"],
  ["Plot, factory or school boundary you want to see through", "chain-link-fencing"],
  ["Farmland or a large open plot on a budget", "pole-concrete-fencing"],
];

export default function Services() {
  const crumbs = [{ name: "Home", path: "/" }, { name: "Services", path: "/services" }];
  return (
    <>
      <SEO
        title={`Lighting & Fencing Installation Services in ${SITE.city} | ${SITE.name}`}
        description={`Street light fitting, solar light fitting, chain link fencing and concrete pole fencing installation in ${SITE.city}. Installation-only, with your material or ours at bill price.`}
        path="/services"
        jsonLd={breadcrumbSchema(crumbs)}
      />
      <PageHeader
        title={`Lighting and fencing installation services in ${SITE.city}`}
        intro="Four kinds of work, all installation. We don't manufacture poles, lights or wire, so we'll happily fit what you've already bought."
        crumbs={crumbs}
      />
      <section className="py-14 sm:py-20">
        <div className="container-x">
          <div className="grid gap-5 sm:grid-cols-2">
            {SERVICES.map((s) => <ServiceCard key={s.slug} service={s} headingLevel="h2" />)}
          </div>
        </div>
      </section>
      <section className="bg-white py-14 sm:py-20">
        <div className="container-x">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Not sure which one you need?</h2>
          <table className="mt-6 w-full max-w-3xl text-left">
            <caption className="sr-only">Which service fits which site</caption>
            <tbody>
              {PICK.map(([situation, slug]) => {
                const s = SERVICES.find((x) => x.slug === slug);
                return (
                  <tr key={slug} className="border-t border-concrete-300">
                    <td className="py-4 pr-6 text-asphalt/80">{situation}</td>
                    <td className="py-4"><Link to={`/services/${slug}`} className="font-semibold text-wire hover:underline">{s.name}</Link></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <p className="mt-6 text-asphalt/75">Still unsure? Send the inquiry with "Other / not sure yet" and describe the site. We'll suggest the option that fits your budget.</p>
        </div>
      </section>
      <CTABand />
    </>
  );
}
