import React from "react";
import { overviewData } from "@/data/overview";
import { Muted, Subtitle, SectionTitle } from "../ui/Typography";

const Overview = () => {
  const { title, subtitle, text } = overviewData;
  return (
    <section id="overview">
      <Muted>{subtitle}</Muted>
      <SectionTitle>{title}</SectionTitle>
      <Subtitle>{text}</Subtitle>
    </section>
  );
};

export default Overview;
