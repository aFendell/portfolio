import Image from "next/image";
import chameleon from "../../../public/images/chameleon1.webp";
import { introData } from "@/data/intro";
import { Button } from "@/components/ui/Button";

const Hero = () => {
  const { title, subtitle } = introData;

  return (
    <section className="flex flex-col items-center gap-3 sm:flex-row sm:justify-around sm:gap-8">
      <Image
        alt="chameleon profile picture"
        src={chameleon}
        className="h-24 w-24 rounded-full object-cover shadow-xl sm:h-40 sm:w-40"
        quality={100}
        placeholder="blur"
      />
      <div className="flex flex-col content-stretch gap-3 text-center sm:gap-6 sm:text-start">
        <h1 className="text-4xl font-bold sm:mb-auto sm:text-5xl sm:font-extrabold">
          {title}
        </h1>
        <p className="max-w-96 whitespace-pre-line text-pretty sm:text-xl">
          {subtitle}
        </p>
        <Button className="flex divide-violet-50 text-violet-50 neon-violet">
          Contact me &rarr;
        </Button>
      </div>
    </section>
  );
};

export default Hero;
