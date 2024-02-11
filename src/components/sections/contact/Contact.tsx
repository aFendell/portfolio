import React from "react";
import { Linkedin, Mail, Github } from "lucide-react";
import { contactData } from "@/data/contact";
import { Muted, Title } from "@/components/ui/Typography";
import ContactForm from "./ContactForm";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const Contact = () => {
  const { title, subtitle } = contactData;
  return (
    <section id="contact">
      <Muted>{subtitle}</Muted>
      <Title>{title}</Title>
      <ContactForm />
      <ul className="mt-5 flex justify-center gap-5">
        <li>
          <Button variant="outline" size="icon" asChild>
            <Link href="mailto:fendell.assaf@gmail.com" target="_blank">
              <Mail className="h4 w-4" />
            </Link>
          </Button>
        </li>
        <li>
          <Button variant="outline" size="icon" asChild>
            <Link href="https://www.linkedin.com/in/afendell/" target="_blank">
              <Linkedin className="h4 w-4" />
            </Link>
          </Button>
        </li>
        <li>
          <Button variant="outline" size="icon" asChild>
            <Link href="https://github.com/aFendell/" target="_blank">
              <Github className="h4 w-4" />
            </Link>
          </Button>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
