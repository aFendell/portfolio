import React from "react";
import { overviewData } from "@/data/overview";
import { Muted, Subtitle, Title } from "../ui/Typography";

const Overview = () => {
  const { title, subtitle, text } = overviewData;
  return (
    <section id="overview">
      <Muted>{subtitle}</Muted>
      <Title>{title}</Title>
      <Subtitle>{text}</Subtitle>
    </section>
  );
};

export default Overview;
