import { GraduationCap, Briefcase, Code2 } from 'lucide-react';

export const experienceData = [
  {
    title: 'Coding Academy Bootcamp',
    location: 'Israel, Central district',
    description:
      'I graduated after 6 months of intence, coding into the night, full stack bootcamp, and never stoped since.',
    icon: GraduationCap,
    date: '2021',
  },
  {
    title: 'Frontend Developer',
    location: 'Israel, Ramat-Gan',
    description:
      'Developing from the ground up two advanced, responsive, frontend applications, both \n communicating with the same backend and database via REST APIs. The first app is a backoffice \n app for managing a sports activities videos platform. The second app is the client’s app, \n allowing the user to preview, purchase, download and share videos.',
    icon: Briefcase,
    date: '2021 - 2023',
  },
  {
    title: 'Full-Stack Developer',
    location: 'Israel, Central district',
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, TypeScript, Nest.js, Next.js, Tailwind, Styled-Components, TypeORM, Prisma, PostgreSQL and MongoDB. I'm open to full-time opportunities.",
    icon: Code2,
    date: '2023 - present',
  },
] as const;
