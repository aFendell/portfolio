import React from "react";

import { experienceData } from "@/data/experience";
import Timeline from "./Timeline";
import { Muted, Title } from "@/components/ui/Typography";

const Experience = () => {
  const { title, subtitle, jobs } = experienceData;

  return (
    <section className="pb-12">
      <Muted>{subtitle}</Muted>
      <Title className="mb-12">{title}</Title>
      <Timeline items={jobs} />
    </section>
  );
};

export default Experience;
