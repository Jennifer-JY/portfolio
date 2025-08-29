import type { ProjectCardProps } from "../components/ProjectCard";

export const projects: ProjectCardProps[] = [
  {
    title: "A Fintech App | Capstone Team Project (UNSW COMP3900) ",
    date: "Jun. 2025 ‑ Aug. 2025",
    role: "Software Developer/Engineer",
    description:
      "Built a client-facing wallet & bill-payments web app in a 6-person Agile team. Implemented KYC, unified one-off/recurring/scheduled payments with reminders and monthly-limit alerts, containerised the stack, and added tests/SQL procedures.",
    techStack: [
      "React",
      "Typescript",
      "Express js",
      "Tailwind",
      "PostgresSQL",
      "Firebase Authentication",
    ],
  },
  {
    date: "Jan. 2025 ‑ current",
    title: "PlanView ‑ A Calendar App | Personal Project",
    role: "Software Developer/Engineer",
    description:
      "A full‑stack calendar and todo application featuring a unique month‑plan view for organizing tasks, with rich‑text editing and authentication.",
    vercelLink: "https://planner-drab-two.vercel.app/",
    githubRepoLink: "https://github.com/Jennifer-JY/planner",
    imgRef: "/demo-planview.png",
    techStack: [
      "Next js",
      "Typescript",
      "Tailwind",
      "Prisma",
      "PostgresSQL",
      "TipTap",
      "Auth.js",
    ],
  },
  {
    date: "May. 2025 ‑ current",
    title: "Bookdrop – A Bookstore App | Personal Project",
    role: "Software Developer/Engineer",
    description:
      "Online bookstore with catalog browsing, cart, and order flow. Stripe webhooks confirm payments before orders are marked Paid. Authenticated sessions.",
    vercelLink: "https://bookstore-theta-one.vercel.app/",
    githubRepoLink: "https://github.com/Jennifer-JY/bookstore",
    imgRef: "/demo-bookstore.png",
    techStack: [
      "Next js",
      "Typescript",
      "Tailwind",
      "PostgresSQL",
      "Stripe API",
      "Auth.js",
    ],
  },
];
