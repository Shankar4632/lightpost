import { SITE } from "../config/site";
import SEO from "../components/SEO";
import PageHeader from "../components/PageHeader";

export default function Terms() {
  return (
    <>
      <SEO title={`Terms of Service | ${SITE.name}`} description={`Terms for quotes, payments, material and workmanship guarantee from ${SITE.name}.`} path="/terms" />
      <PageHeader title="Terms of service" crumbs={[{ name: "Home", path: "/" }, { name: "Terms", path: "/terms" }]} />
      <section className="py-14 sm:py-20">
        <div className="container-x prose-site">
          <p><em>Plain-language summary of how we work. Your written quote has the final terms for your job. Review with your own adviser before publishing.</em></p>
          <h2>Installation only</h2>
          <p>{SITE.name} provides installation services. We don't manufacture or sell poles, lights, batteries or fencing material. Product warranties come from the manufacturer or dealer.</p>
          <h2>Quotes</h2>
          <p>Quotes are written, itemised, and valid for 15 days. Prices can change if the site conditions differ from what was seen at the visit, for example rock under the surface or a changed boundary. We'll tell you before doing any extra work.</p>
          <h2>Material bought on your behalf</h2>
          <p>Billed at the dealer's rate with the dealer's bill attached. Payment for this material is due before purchase.</p>
          <h2>Payments</h2>
          <p>Labour is paid in stages, as stated in the quote, with the balance due on handover.</p>
          <h2>Workmanship guarantee</h2>
          <p>We guarantee our workmanship — foundations, tensioning, wiring and earthing — for 12 months from handover. This doesn't cover damage from vehicles, theft, flooding, third-party digging, or changes made by others.</p>
          <h2>Site access and permissions</h2>
          <p>You're responsible for boundary clarity, permissions for road cutting or public land, and safe access to the site.</p>
        </div>
      </section>
    </>
  );
}
