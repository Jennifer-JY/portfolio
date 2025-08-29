import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <>
      <h2 className="flex items-center text-3xl font-extrabold leading-none mb-4">
        <span className="text-[#F06543]">Pro</span>
        <span className="text-gray-800">jects</span>
      </h2>
      <div className="flex flex-col gap-y-16">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </>
  );
}
