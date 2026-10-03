import { SITE } from "../config/site";
import { breadcrumbSchema } from "../lib/schema";
import SEO from "../components/SEO";
import PageHeader from "../components/PageHeader";
import CTABand from "../components/CTABand";

export default function About() {
  const crumbs = [{ name: "Home", path: "/" }, { name: "About us", path: "/about" }];
  const years = new Date().getFullYear() - SITE.foundedYear;
  return (
    <>
      <SEO
        title={`About ${SITE.name} | Lighting & Fencing Installers in ${SITE.city}`}
        description={`${SITE.name} has installed street lights, solar lights and fencing around ${SITE.city} since ${SITE.foundedYear}. Our own crews, installation only, 12-month workmanship guarantee.`}
        path="/about"
        jsonLd={breadcrumbSchema(crumbs)}
      />
      <PageHeader title={`About ${SITE.name}, installers in ${SITE.city}`} crumbs={crumbs}
        intro={`${years}+ years of putting up poles, lights and fences around ${SITE.city}. Same crews, same way of working.`} />

      <section className="py-14 sm:py-20">
        <div className="container-x grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="prose-site text-lg">
            <p>
              We started in {SITE.foundedYear} as a two-person crew doing electrical fitting for a local contractor. Most of the jobs we got called back to
              weren't about the light. A pole had leaned, a cable had been dug through, a fence had gone slack after the rains. So we started doing the whole
              installation ourselves, foundation to switch-on.
            </p>
            <p>
              Today we run separate crews for lighting and fencing. Lighting crews include a licensed electrician on every job. Fencing crews carry their own
              wire pullers, augers and mixers, so we don't depend on site equipment.
            </p>
            <h2>What we don't do</h2>
            <p>
              We don't manufacture or trade poles, lights or wire. That's deliberate. It means we've no reason to push one brand, and you can buy
              material wherever you get the best price. If you'd like us to buy it, we hand you the dealer's bill.
            </p>
            <h2>How we work</h2>
            <ul>
              <li>Every quote is written and itemised. Labour and material are listed separately.</li>
              <li>Concrete gets its full curing time, even when the customer is in a hurry. We'll explain why on site.</li>
              <li>The person who visits your site is the person who runs the job.</li>
              <li>Workmanship is guaranteed for 12 months. If something we did fails, we come back and fix it.</li>
            </ul>
          </div>
          <aside className="h-fit bg-white p-6">
            <h2 className="font-display text-2xl font-semibold">The business</h2>
            <dl className="mt-4 space-y-3 text-[15px]">
              <div><dt className="text-asphalt/60">Working since</dt><dd className="font-semibold">{SITE.foundedYear}</dd></div>
              <div><dt className="text-asphalt/60">Based in</dt><dd className="font-semibold">{SITE.address.locality}, {SITE.address.region}</dd></div>
              <div><dt className="text-asphalt/60">Coverage</dt><dd className="font-semibold">About 150 km around {SITE.city}</dd></div>
              <div><dt className="text-asphalt/60">Hours</dt><dd className="font-semibold">{SITE.hours}</dd></div>
              <div><dt className="text-asphalt/60">Phone</dt><dd><a href={`tel:${SITE.phoneHref}`} className="font-semibold text-wire">{SITE.phone}</a></dd></div>
            </dl>
          </aside>
        </div>
      </section>
      <CTABand />
    </>
  );
}
