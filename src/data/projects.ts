import { type StaticImageData } from "next/image";

import taskManager from "../../public/images/task-manager-modal-1.png";
import bookingManager from "../../public/images/booking-manager-1.png";
import nextTwitter from "../../public/images/next-twitter-2.png";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  imageUrl: StaticImageData;
  gitLink: string;
};

type ProjectsData = {
  title: string;
  subtitle: string;
  projects: Project[];
};

export const projectsData: ProjectsData = {
  title: "Projects",
  subtitle: "Top",
  projects: [
    {
      title: "Task Manager",
      description:
        "A full stack Task manager project. It combines the power of NestJS (node) for the backend and React for the frontend. Turborepo is helping to streamline development and builds. Postgresql docker container presist data through development, while in production data is presisted via a managed postgresql DB. It features full fledged auth, and form validation.",
      tags: [
        "React",
        "TypeScript",
        "TailwindCSS",
        "Axios",
        "TanStack Query",
        "React-Hook-Form",
        "Zod",
        "NestJS",
        "PostgreSQL",
        "TypeORM",
        "Docker",
        "Turborepo",
        "Passport.js",
        "bcrypt",
      ],
      imageUrl: taskManager,
      gitLink: "https://github.com/aFendell/task-manager",
    },
    {
      title: "Booking Manager",
      description:
        "A full stack apointments booking app. NestJS combined with PostgreSQL DB provides the BE while React combined with Tanstack Query and Tailwind provides the frontend. Turborepo ties it all together into a single repo.",
      tags: [
        "React",
        "TypeScript",
        "TailwindCSS",
        "Axios",
        "TanStack Query",
        "React-Hook-Form",
        "Zod",
        "NestJS",
        "PostgreSQL",
        "TypeORM",
        "Docker",
        "Turborepo",
      ],
      imageUrl: bookingManager,
      gitLink: "https://github.com/aFendell/booking-manager",
    },
    {
      title: "NextTwitter",
      description:
        "A full stack, Twitter (currently 'X') clone app, build with Next.js providing both the backend and the frontend, Tailwind for styling, Next-Auth for authentication, a PostgreSQL database combined with Prisma ORM. TRPC and Tanstack/React-Query connect between the BE and FE.",
      tags: [
        "React",
        "TypeScript",
        "TailwindCSS",
        "TanStack Query",
        "Next.js",
        "Next-Auth",
        "Zod",
        "TRPC",
        "Prisma",
      ],
      imageUrl: nextTwitter,
      gitLink: "https://github.com/aFendell/next-twitter",
    },
  ],
};
