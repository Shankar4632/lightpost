import Breadcrumbs from "./Breadcrumbs";

export default function PageHeader({ title, intro, crumbs, children }) {
  return (
    <section className="relative overflow-hidden bg-asphalt text-white">
      <div className="mesh-bg pointer-events-none absolute inset-0 opacity-[0.07]" aria-hidden="true" />
      <div className="container-x relative py-12 sm:py-16">
        {crumbs && <Breadcrumbs crumbs={crumbs} />}
        <h1 className="mt-3 max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">{title}</h1>
        {intro && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-concrete/85">{intro}</p>}
        {children}
      </div>
    </section>
  );
}
