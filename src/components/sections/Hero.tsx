import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";

import { heroData } from "@/data/hero";
import { HeroTitle, Subtitle } from "../ui/Typography";
import ActionButton from "../ui/ActionButton";

const Hero = () => {
  const { title, subtitle, img } = heroData;

  return (
    <section
      id="home"
      className="flex flex-col items-center gap-3 motion-safe:animate-reveal sm:flex-row sm:justify-around sm:gap-8">
      <Image
        alt="profile picture"
        src={img}
        className="h-32 w-32 rounded-full object-cover shadow-xl sm:h-56 sm:w-56"
        quality={100}
        placeholder="blur"
      />
      <div>
        <HeroTitle>{title}</HeroTitle>
        <Subtitle className="max-w-96 whitespace-pre-line text-pretty text-2xl">
          {subtitle}
        </Subtitle>
        <ActionButton className="mt-14">
          <Link className="flex items-center justify-center" href="#contact">
            Contact me
            <MoveRight
              size={20}
              className="ms-4 motion-safe:animate-bounce-right"
            />
          </Link>
        </ActionButton>
      </div>
    </section>
  );
};

export default Hero;
