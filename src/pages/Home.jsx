import { Link } from "react-router-dom";
import { SITE } from "../config/site";
import { SERVICES } from "../data/services";
import { PROJECTS } from "../data/projects";
import { TESTIMONIALS } from "../data/testimonials";
import { AREAS } from "../data/areas";
import { ALL_FAQS } from "../data/faqs";
import { POSTS } from "../data/blog";
import { localBusinessSchema } from "../lib/schema";
import SEO from "../components/SEO";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import ProjectCard from "../components/ProjectCard";
import TestimonialCard from "../components/TestimonialCard";
import FAQAccordion from "../components/FAQAccordion";
import CTABand from "../components/CTABand";
import SectionHeading from "../components/SectionHeading";

const STEPS = [
  { t: "You call or send the form", d: "Tell us roughly what you need. We call back the same working day." },
  { t: "Site visit", d: "Within 2 days. We measure, check soil and power supply, and mark pole or post positions with you." },
  { t: "Written quote", d: "Labour itemised per metre or per pole. Material, if we buy it, at the dealer's bill price." },
  { t: "Foundations, then curing", d: "Concrete footings first. They cure 5–7 days while we do cabling or other prep." },
  { t: "Installation and handover", d: "Poles up, mesh stretched or lights wired, then we test and walk the job with you." },
];

export default function Home() {
  return (
    <>
      <SEO
        title={`Street Light, Solar Light & Fencing Installation in ${SITE.city} | ${SITE.name}`}
        description={`Installation-only contractor in ${SITE.city} for LED street lights, solar street lights, chain link fencing and RCC concrete pole fencing. Free site visit, written quote, 12-month workmanship guarantee.`}
        path="/"
        jsonLd={localBusinessSchema()}
      />

      <Hero
        h1={`Street light, solar light and fencing installation in ${SITE.city}`}
        lead={`We put up poles, lights and fences for housing societies, factories, farms and panchayats around ${SITE.city}. We don't sell or manufacture anything. We do the installation — foundations, wiring, tensioning — and we do it so it's still standing straight in five years.`}
      />

      <section className="py-16 sm:py-24" aria-labelledby="services-h">
        <div className="container-x">
          <div id="services-h"><SectionHeading title="What we install" text="Four services, done by our own crews. Tap any one to see how the job runs and how long it takes." /></div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {SERVICES.map((s) => <ServiceCard key={s.slug} service={s} />)}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24" aria-labelledby="process-h">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <h2 id="process-h" className="font-display text-3xl font-bold leading-tight sm:text-[2.6rem]">How a job runs, start to finish</h2>
            <p className="mt-4 text-lg text-asphalt/75">
              Most jobs take one to two weeks from site visit to handover. Most of that time is concrete curing, and we don't cut it short.
              That's the difference between a fence that sags after one monsoon and one that doesn't.
            </p>
          </div>
          <ol className="space-y-0">
            {STEPS.map((s, i) => (
              <li key={s.t} className="grid grid-cols-[3rem_1fr] gap-4 border-t border-concrete-300 py-5 last:border-b">
                <span className="font-display text-4xl font-bold leading-none text-sodium-dark">{i + 1}</span>
                <div>
                  <h3 className="font-display text-xl font-semibold">{s.t}</h3>
                  <p className="mt-1 text-asphalt/75">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16 sm:py-24" aria-labelledby="install-only-h">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 id="install-only-h" className="font-display text-3xl font-bold leading-tight sm:text-[2.6rem]">Why we only do installation</h2>
            <div className="mt-4 space-y-4 text-asphalt/80">
              <p>
                A lot of companies that sell poles and lights treat installation as a free add-on. That's usually where corners get cut:
                shallow pits, no earthing, mesh tied before it's stretched.
              </p>
              <p>
                We only install, so the workmanship is what we're paid for. Buy material wherever you like and we'll put it up. If you'd rather
                not deal with dealers, we buy it for you and hand you the dealer's bill — no margin on top.
              </p>
            </div>
          </div>
          <dl className="grid gap-px overflow-hidden bg-concrete-300 sm:grid-cols-2">
            {[
              ["Foundations", "Every pole and post set in concrete, not rammed earth."],
              ["Earthing", "Pipe or plate earth on every lighting job, tested before handover."],
              ["Curing time", "5–7 days before load goes on. Written into every quote."],
              ["Guarantee", "12 months on workmanship. We come back and fix it."],
            ].map(([k, v]) => (
              <div key={k} className="bg-concrete p-6">
                <dt className="font-display text-xl font-semibold">{k}</dt>
                <dd className="mt-1 text-asphalt/75">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-concrete-200 py-16 sm:py-24" aria-labelledby="projects-h">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div id="projects-h"><SectionHeading title="Recent work" text={`A few jobs from around ${SITE.city} in the last year.`} /></div>
            <Link to="/projects" className="font-semibold underline underline-offset-4">See all projects</Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.slice(0, 3).map((p) => <ProjectCard key={p.id} project={p} />)}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24" aria-labelledby="reviews-h">
        <div className="container-x">
          <div id="reviews-h"><SectionHeading title="What customers say after the first monsoon" /></div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {TESTIMONIALS.map((t) => <TestimonialCard key={t.name} t={t} />)}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24" aria-labelledby="areas-h">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <h2 id="areas-h" className="font-display text-3xl font-bold leading-tight sm:text-[2.6rem]">Where we work</h2>
            <p className="mt-4 text-lg text-asphalt/75">{SITE.city} and about 150 km around it. Our crews travel with their own tools, so a farm 60 km out gets the same work as a society in town.</p>
            <Link to="/service-areas" className="mt-5 inline-block font-semibold underline underline-offset-4">Service areas in detail</Link>
          </div>
          <ul className="grid gap-x-8 sm:grid-cols-2">
            {AREAS.map((a) => (
              <li key={a.name} className="border-t border-concrete-300 py-3 font-medium">{a.name}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 sm:py-24" aria-labelledby="faq-h">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <h2 id="faq-h" className="font-display text-3xl font-bold leading-tight sm:text-[2.6rem]">Common questions</h2>
            <Link to="/faq" className="mt-4 inline-block font-semibold underline underline-offset-4">All FAQs</Link>
            <div className="mt-10">
              <h3 className="font-display text-xl font-semibold">Guides from the site</h3>
              <ul className="mt-3 space-y-3">
                {POSTS.slice(0, 3).map((p) => (
                  <li key={p.slug}><Link to={`/blog/${p.slug}`} className="text-wire underline-offset-4 hover:underline">{p.title}</Link></li>
                ))}
              </ul>
            </div>
          </div>
          <FAQAccordion items={ALL_FAQS.slice(0, 5)} />
        </div>
      </section>

      <CTABand />
    </>
  );
}
