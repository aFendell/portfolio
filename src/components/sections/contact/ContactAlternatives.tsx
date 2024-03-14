import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

import { Button } from "@/components/ui/Button";

const ContactAlternatives = () => {
  return (
    <ul className="mt-6 flex justify-center gap-5">
      <li className="neon-neutral">
        <Button variant="outline" size="icon" asChild>
          <Link href="mailto:fendell.assaf@gmail.com">
            <Mail className="h4 w-4" />
          </Link>
        </Button>
      </li>
      <li className="neon-neutral">
        <Button variant="outline" size="icon" asChild>
          <Link href="https://www.linkedin.com/in/afendell/" target="_blank">
            <Linkedin className="h4 w-4" />
          </Link>
        </Button>
      </li>
      <li className="neon-neutral">
        <Button variant="outline" size="icon" asChild>
          <Link href="https://github.com/aFendell/" target="_blank">
            <Github className="h4 w-4" />
          </Link>
        </Button>
      </li>
    </ul>
  );
};

export default ContactAlternatives;
