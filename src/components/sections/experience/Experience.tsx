import React from "react";

import { experienceData } from "@/data/experience";
import Timeline from "./Timeline";
import { Muted, SectionTitle } from "@/components/ui/Typography";

const Experience = () => {
  const { title, subtitle, jobs } = experienceData;

  return (
    <section id="experience">
      <Muted>{subtitle}</Muted>
      <SectionTitle>{title}</SectionTitle>
      <Timeline items={jobs} />
    </section>
  );
};

export default Experience;
