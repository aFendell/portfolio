import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";

import chameleon from "../../../public/images/chameleon1.webp";
import { heroData } from "@/data/hero";
import { Button } from "@/components/ui/Button";
import { HeroTitle, Subtitle } from "../ui/Typography";

const Hero = () => {
  const { title, subtitle } = heroData;

  return (
    <section
      id="home"
      className="flex flex-col items-center gap-3 motion-safe:animate-reveal sm:flex-row sm:justify-around sm:gap-8">
      <Image
        alt="chameleon profile picture"
        src={chameleon}
        className="h-32 w-32 rounded-full object-cover shadow-xl sm:h-56 sm:w-56"
        quality={100}
        placeholder="blur"
      />
      <div className="">
        <HeroTitle>{title}</HeroTitle>
        <Subtitle className="max-w-96 whitespace-pre-line text-pretty text-2xl">
          {subtitle}
        </Subtitle>
        <Button
          className="mt-14 flex divide-violet-50 text-violet-50 neon-violet motion-safe:animate-soft-pulse sm:mt-16"
          asChild>
          <Link href="#contact">
            Contact me
            <MoveRight
              size={20}
              className="ms-4 motion-safe:animate-bounce-right"
            />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
