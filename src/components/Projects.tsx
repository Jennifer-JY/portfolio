import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <>
      <h2 className="flex items-center text-3xl font-extrabold leading-none mb-4">
        <span className="text-[#F06543]">Pro</span>
        <span className="text-gray-800">jects</span>
      </h2>
      <div className="grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </>
  );
}
