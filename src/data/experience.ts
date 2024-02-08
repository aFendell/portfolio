export type ExperienceIcon = "graduation" | "briefcase" | "code";

export type ExperienceItem = {
  id: string;
  title: string;
  company: string;
  description: string;
  icon: ExperienceIcon;
  date: string;
};

export const experienceData = {
  title: "Experience.",
  subtitle: "So far",
  jobs: [
    {
      id: "0",
      title: "Full-Stack Developer",
      company: "fendi.dev",
      description:
        "I'm currently a full-stack developer working as a freelancer. My stack includes React, TypeScript, Nest.js, Next.js, Tailwind, Styled-Components, TypeORM, Prisma, PostgreSQL and MongoDB. I'm open to full-time opportunities.",
      icon: "code",
      date: "2023 - present",
    },
    {
      id: "1",
      title: "Frontend Developer",
      company: "abra Web & Mobile",
      description:
        "Developing from the ground up two advanced, responsive, frontend applications, both \n communicating with the same backend and database via REST APIs. The first app is a backoffice \n app for managing a sports activities videos platform. The second app is the client’s app, \n allowing the user to preview, purchase, download and share videos.",
      icon: "briefcase",
      date: "2021 - 2023",
    },
    {
      id: "2",
      title: "Full stack development bootcamp",
      company: "Coding Academy",
      description:
        "I graduated after 6 months of intence, coding into the night, full stack bootcamp, and never stoped since.",
      icon: "graduation",
      date: "2021",
    },
  ] as ExperienceItem[],
};
