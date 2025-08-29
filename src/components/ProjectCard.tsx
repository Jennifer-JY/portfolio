import { ToolCard } from "./ToolCard";
import VercelIcon from "../icons/VercelIcon";
import GithubIcon from "../icons/GitHubIcon";
import { FaExternalLinkAlt } from "react-icons/fa";

export type ProjectCardProps = {
  date: string;
  title: string;
  role: string;
  description: string;
  vercelLink?: string;
  githubRepoLink?: string;
  imgRef?: string;
  techStack?: string[];
};

export function ProjectCard({
  date,
  title,
  role,
  description,
  vercelLink = "",
  githubRepoLink = "",
  imgRef = "",
  techStack,
}: ProjectCardProps) {
  return (
    <article className="flex flex-row justify-between w-full font-roboto items-center">
      <section className="mr-10 space-y-3">
        <time className="text-sm text-gray-500">{date}</time>
        <h2 className="font-bold text-xl">{title}</h2>
        <h3 className="italic text-gray-400">{role}</h3>
        <section className="inline-flex gap-2">
          {techStack?.map((t) => (
            <ToolCard toolName={t} />
          ))}
        </section>
        <p>{description}</p>
        <section className="flex flex-row items-center justify-start gap-4">
          {(vercelLink || githubRepoLink) && (
            <FaExternalLinkAlt color="#526bcc" />
          )}
          {vercelLink && (
            <a href={vercelLink} target="_blank" rel="noopener noreferrer">
              <VercelIcon />
            </a>
          )}
          {githubRepoLink && (
            <a href={githubRepoLink} target="_blank" rel="noopener noreferrer">
              <GithubIcon />
            </a>
          )}
        </section>
      </section>

      {imgRef && (
        <img src={imgRef} alt="demo" className="w-1/3 h-auto rounded-md" />
      )}
    </article>
  );
}
