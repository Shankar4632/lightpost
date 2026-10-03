import { Link } from "react-router-dom";
import { SITE } from "../config/site";
import { getService } from "../data/services";
import { getPost } from "../data/blog";
import { serviceSchema, faqSchema, breadcrumbSchema } from "../lib/schema";
import SEO from "../components/SEO";
import PageHeader from "../components/PageHeader";
import InquiryButton from "../components/InquiryButton";
import FAQAccordion from "../components/FAQAccordion";
import CTABand from "../components/CTABand";
import { CheckIcon, PhoneIcon, SERVICE_ICONS } from "../components/Icons";

export default function ServiceDetail({ slug }) {
  const s = getService(slug);
  const path = `/services/${s.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: s.name, path },
  ];

  return (
    <>
      <SEO title={s.metaTitle} description={s.metaDescription} path={path} image={s.image}
        jsonLd={[serviceSchema(s), faqSchema(s.faqs), breadcrumbSchema(crumbs)]} />

      <PageHeader title={s.h1} crumbs={crumbs}>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <InquiryButton service={s.name} className="btn justify-center bg-sodium text-asphalt hover:bg-sodium-light" />
          <a href={`tel:${SITE.phoneHref}`} className="btn justify-center border-2 border-white/40 text-white hover:border-white">
            <PhoneIcon className="h-5 w-5" /> Call Now
          </a>
        </div>
      </PageHeader>

      <section className="py-14 sm:py-20">
        <div className="container-x grid gap-12 lg:grid-cols-[1.35fr_1fr]">
          <div className="space-y-4 text-lg text-asphalt/85">
            {s.intro.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}
          </div>
          <img src={s.image} alt={`${s.name} installation by ${SITE.name} in ${SITE.city}`} width="800" height="600"
            loading="lazy" decoding="async" className="w-full bg-asphalt-700 object-cover" />
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20" aria-labelledby="scope-h">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div>
            <h2 id="scope-h" className="font-display text-3xl font-bold sm:text-4xl">What's included</h2>
            <ul className="mt-6 space-y-3">
              {s.scope.map((x) => (
                <li key={x} className="flex gap-3"><CheckIcon className="mt-1 h-5 w-5 shrink-0 text-wire" /><span>{x}</span></li>
              ))}
            </ul>
            <p className="mt-6 border-l-4 border-sodium bg-concrete px-4 py-3 text-asphalt/85">
              <strong className="font-semibold">What you'll need to arrange:</strong> {s.clientSupplies}
            </p>
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Material we work with</h2>
            <ul className="mt-6 space-y-3">
              {s.specs.map((x) => <li key={x} className="border-t border-concrete-300 pt-3">{x}</li>)}
            </ul>
            <p className="mt-4 text-sm text-asphalt/65">We install it. We don't make it. Bring your own, or we'll buy it from local dealers at bill price.</p>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20" aria-labelledby="process-h">
        <div className="container-x">
          <h2 id="process-h" className="font-display text-3xl font-bold sm:text-4xl">How we do it</h2>
          <ol className="mt-8 grid gap-px bg-concrete-300 sm:grid-cols-2 lg:grid-cols-3">
            {s.process.map((st, i) => (
              <li key={st.title} className="bg-concrete p-6">
                <span className="font-display text-3xl font-bold text-sodium-dark">{i + 1}</span>
                <h3 className="mt-2 font-display text-xl font-semibold">{st.title}</h3>
                <p className="mt-1.5 text-asphalt/75">{st.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-asphalt py-14 text-white sm:py-20" aria-labelledby="time-h">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <h2 id="time-h" className="font-display text-3xl font-bold sm:text-4xl">How long it takes</h2>
            <p className="mt-3 text-concrete/75">Typical figures from our own jobs. Rain, rocky ground or late material delivery add time — we'll tell you upfront.</p>
          </div>
          <table className="w-full text-left">
            <caption className="sr-only">Typical timelines for {s.name}</caption>
            <thead><tr className="border-b border-white/20 text-sm text-concrete/60"><th className="py-2 font-medium">Job</th><th className="py-2 font-medium">Time</th></tr></thead>
            <tbody>
              {s.timeline.map((t) => (
                <tr key={t.job} className="border-b border-white/10">
                  <td className="py-4 pr-4">{t.job}</td>
                  <td className="py-4 font-display text-xl font-semibold text-sodium">{t.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="container-x grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Questions about {s.name.toLowerCase()}</h2>
            <div className="mt-6"><FAQAccordion items={s.faqs} /></div>
            <Link to="/faq" className="mt-4 inline-block font-semibold underline underline-offset-4">More questions answered</Link>
          </div>
          <aside className="space-y-8">
            <div>
              <h2 className="font-display text-2xl font-semibold">Read before you buy material</h2>
              <ul className="mt-3 space-y-2">
                {s.relatedBlog.map(getPost).filter(Boolean).map((p) => (
                  <li key={p.slug}><Link to={`/blog/${p.slug}`} className="text-wire hover:underline">{p.title}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-2xl font-semibold">Often booked together</h2>
              <ul className="mt-3 space-y-3">
                {s.relatedServices.map(getService).map((r) => {
                  const Icon = SERVICE_ICONS[r.icon];
                  return (
                    <li key={r.slug}>
                      <Link to={`/services/${r.slug}`} className="flex items-center gap-3 font-semibold hover:text-wire">
                        <Icon className="h-7 w-7 text-wire" /> {r.name} in {SITE.city}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <CTABand title={`Get a quote for ${s.name.toLowerCase()}`} service={s.name} />
    </>
  );
}
