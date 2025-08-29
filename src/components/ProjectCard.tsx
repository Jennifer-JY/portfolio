import { ToolCard } from "./ToolCard";
import VercelIcon from "../icons/VercelIcon";
import GithubIcon from "../icons/GitHubIcon";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export type ProjectCardProps = {
  date: string;
  title: string;
  role: string;
  description: string;
  vercelLink?: string;
  githubRepoLink?: string;
  techStack?: string[];
};

export function ProjectCard({
  date,
  title,
  role,
  description,
  vercelLink = "",
  githubRepoLink = "",
  techStack,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ y: 12, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <article
        className="group relative w-full rounded-2xl border border-gray-200/70 bg-white/80 p-5 shadow-sm transition 
                 hover:-translate-y-0.5 hover:shadow-md focus-within:ring-2 focus-within:ring-[#4A90E2]/50"
      >
        <div className="space-y-3">
          <time className="flex items-center justify-between text-sm text-gray-500">
            {date}
          </time>

          <h2 className="text-xl font-semibold tracking-tight text-gray-900">
            {title}
          </h2>

          <h3 className="italic text-gray-400">{role}</h3>

          {!!techStack?.length && (
            <div className="flex flex-wrap gap-2">
              {techStack.map((t) => (
                <ToolCard key={t} toolName={t} />
              ))}
            </div>
          )}

          <p>{description}</p>

          <div className="flex items-center gap-3 pt-1">
            {(vercelLink || githubRepoLink) && (
              <FaExternalLinkAlt className="text-gray-400 transition group-hover:text-[#4A90E2]" />
            )}
            {vercelLink && (
              <a
                href={vercelLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live demo"
              >
                <VercelIcon />
              </a>
            )}
            {githubRepoLink && (
              <a
                href={githubRepoLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub repo"
              >
                <GithubIcon />
              </a>
            )}
          </div>
        </div>
      </article>
    </motion.article>
  );
}
