import { useMemo, useState } from "react";
import { SITE } from "../config/site";
import { PROJECTS } from "../data/projects";
import { SERVICES } from "../data/services";
import { breadcrumbSchema } from "../lib/schema";
import SEO from "../components/SEO";
import PageHeader from "../components/PageHeader";
import ProjectCard from "../components/ProjectCard";
import CTABand from "../components/CTABand";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const crumbs = [{ name: "Home", path: "/" }, { name: "Projects", path: "/projects" }];
  const list = useMemo(() => (filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.service === filter)), [filter]);
  const options = ["All", ...SERVICES.map((s) => s.name)];

  return (
    <>
      <SEO
        title={`Projects: Street Light, Solar & Fencing Jobs in ${SITE.city} | ${SITE.name}`}
        description={`Photos and details of street light, solar light, chain link and concrete pole fencing installations we've completed in and around ${SITE.city}.`}
        path="/projects"
        jsonLd={breadcrumbSchema(crumbs)}
      />
      <PageHeader title={`Installation projects around ${SITE.city}`} crumbs={crumbs}
        intro="Real jobs, with the location and what was installed. Ask us for a reference from a site near you." />
      <section className="py-14 sm:py-20">
        <div className="container-x">
          <div role="group" aria-label="Filter projects by service" className="flex flex-wrap gap-2">
            {options.map((o) => (
              <button key={o} type="button" aria-pressed={filter === o} onClick={() => setFilter(o)}
                className={`btn-sm border ${filter === o ? "border-asphalt bg-asphalt text-white" : "border-concrete-300 bg-white text-asphalt hover:border-asphalt"}`}>
                {o}
              </button>
            ))}
          </div>
          <p className="mt-4 text-sm text-asphalt/65" aria-live="polite">Showing {list.length} project{list.length === 1 ? "" : "s"}</p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((p) => <ProjectCard key={p.id} project={p} />)}
          </div>
        </div>
      </section>
      <CTABand title="Have a similar job?" />
    </>
  );
}
