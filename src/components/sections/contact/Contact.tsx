import React from "react";
import { Linkedin, Mail } from "lucide-react";
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
      <ul className="mt-8 flex justify-center gap-8">
        <li>
          <Button variant="outline" size="icon">
            <Link href="malito:fendell.assaf@gmail.com">
              <Mail className="h4 w-4" />
            </Link>
          </Button>
        </li>
        <li>
          <Button variant="outline" size="icon">
            <Link href="https://www.linkedin.com/in/afendell/">
              <Linkedin className="h4 w-4" />
            </Link>
          </Button>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
