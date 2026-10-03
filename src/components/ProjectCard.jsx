import { SITE } from "../config/site";
import { PinIcon } from "./Icons";

export default function ProjectCard({ project }) {
  return (
    <figure className="group overflow-hidden bg-white">
      <div className="aspect-[4/3] overflow-hidden bg-asphalt-700">
        <img
          src={project.image}
          alt={`${project.service} installation – ${project.title}, ${project.location}, ${SITE.city}`}
          width="800"
          height="600"
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
      </div>
      <figcaption className="p-5">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="rounded-sm bg-wire px-2 py-1 font-semibold text-white">{project.service}</span>
          <span className="flex items-center gap-1 text-asphalt/70"><PinIcon className="h-3.5 w-3.5" />{project.location}</span>
        </div>
        <p className="mt-3 font-display text-xl font-semibold leading-tight text-asphalt">{project.title}</p>
        <p className="mt-1.5 text-sm text-asphalt/70">{project.detail}</p>
      </figcaption>
    </figure>
  );
}
