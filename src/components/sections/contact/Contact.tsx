import { contactData } from "@/data/contact";
import { Muted, SectionTitle } from "@/components/ui/Typography";
import ContactAlternatives from "./ContactAlternatives";

const Contact = () => {
  const { title, subtitle } = contactData;

  return (
    <section id="contact" className="">
      <Muted className="sm:text-center">{subtitle}</Muted>
      <SectionTitle className="sm:mx-auto">{title}</SectionTitle>
      <ContactAlternatives />
    </section>
  );
};

export default Contact;
