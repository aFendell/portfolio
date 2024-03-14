import React from "react";
import { Linkedin, Mail, Github } from "lucide-react";

import { contactData } from "@/data/contact";
import { Muted, SectionTitle } from "@/components/ui/Typography";
import ContactForm from "./ContactForm";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import ContactAlternatives from "./ContactAlternatives";

const Contact = () => {
  const { title, subtitle } = contactData;

  return (
    <section id="contact">
      <Muted>{subtitle}</Muted>
      <SectionTitle>{title}</SectionTitle>
      <ContactForm />
      <ContactAlternatives />
    </section>
  );
};

export default Contact;
