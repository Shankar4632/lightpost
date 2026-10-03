import { SITE } from "../config/site";
import { FAQ_GROUPS, ALL_FAQS } from "../data/faqs";
import { SERVICES } from "../data/services";
import { faqSchema, breadcrumbSchema } from "../lib/schema";
import SEO from "../components/SEO";
import PageHeader from "../components/PageHeader";
import FAQAccordion from "../components/FAQAccordion";
import CTABand from "../components/CTABand";

export default function FAQ() {
  const crumbs = [{ name: "Home", path: "/" }, { name: "FAQ", path: "/faq" }];
  const serviceFaqs = SERVICES.map((s) => ({ group: s.name, items: s.faqs }));
  const allItems = [...ALL_FAQS, ...serviceFaqs.flatMap((g) => g.items)];
  return (
    <>
      <SEO
        title={`FAQ: Street Light, Solar & Fencing Installation | ${SITE.name}`}
        description={`Answers on pricing, timelines, curing time, warranty and material for street light, solar light and fencing installation in ${SITE.city}.`}
        path="/faq"
        jsonLd={[faqSchema(allItems), breadcrumbSchema(crumbs)]}
      />
      <PageHeader title="Lighting and fencing installation FAQ" crumbs={crumbs}
        intro="The questions we're asked on almost every site visit." />
      <section className="py-14 sm:py-20">
        <div className="container-x max-w-4xl space-y-14">
          {[...FAQ_GROUPS, ...serviceFaqs].map((g) => (
            <div key={g.group}>
              <h2 className="mb-4 font-display text-3xl font-bold">{g.group}</h2>
              <FAQAccordion items={g.items} />
            </div>
          ))}
        </div>
      </section>
      <CTABand title="Didn't find your answer?" text="Ask us directly. Send the form or call, and you'll talk to the person who'd run your job." />
    </>
  );
}
