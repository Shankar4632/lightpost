import { Link } from "react-router-dom";
import { SITE } from "../config/site";
import { POSTS } from "../data/blog";
import { getService } from "../data/services";
import { breadcrumbSchema } from "../lib/schema";
import SEO from "../components/SEO";
import PageHeader from "../components/PageHeader";

const fmt = (d) => new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });

export default function Blog() {
  const crumbs = [{ name: "Home", path: "/" }, { name: "Guides", path: "/blog" }];
  return (
    <>
      <SEO
        title={`Street Light & Fencing Guides | ${SITE.name}, ${SITE.city}`}
        description="Practical guides on street light wattage, solar vs grid lighting, chain-link gauge and concrete pole fencing, written by the crew that installs them."
        path="/blog"
        jsonLd={breadcrumbSchema(crumbs)}
      />
      <PageHeader title="Guides on lighting and fencing installation" crumbs={crumbs}
        intro="What we tell customers on site, written down. Read these before you buy material." />
      <section className="py-14 sm:py-20">
        <div className="container-x">
          <ul className="divide-y divide-concrete-300 border-y border-concrete-300">
            {POSTS.map((p) => (
              <li key={p.slug}>
                <article className="grid gap-5 py-8 md:grid-cols-[240px_1fr] md:items-center">
                  <img src={p.image} alt={`${getService(p.service)?.name} guide illustration`} width="800" height="600" loading="lazy" decoding="async" className="aspect-[4/3] w-full bg-asphalt-700 object-cover" />
                  <div>
                    <p className="text-sm text-asphalt/60"><time dateTime={p.date}>{fmt(p.date)}</time>, {p.readMins} min read</p>
                    <h2 className="mt-1 font-display text-2xl font-semibold leading-tight sm:text-3xl">
                      <Link to={`/blog/${p.slug}`} className="hover:text-wire">{p.title}</Link>
                    </h2>
                    <p className="mt-2 max-w-prose text-asphalt/75">{p.description}</p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
