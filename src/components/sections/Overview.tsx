import React from "react";
import { overviewData } from "@/data/overview";
import { P, SectionTitle } from "../ui/Typography";

const Overview = () => {
  const { title, subtitle } = overviewData;
  return (
    <section>
      <SectionTitle>{title}</SectionTitle>
      <P>{subtitle}</P>
    </section>
  );
};

export default Overview;
