import Image from "next/image";
import chameleon from "../../../public/images/chameleon1.webp";
import { introData } from "@/data/intro";

const Intro = () => {
  const { title, subtitle } = introData;
  return (
    <section>
      <div className="flex flex-col items-center gap-2 sm:flex-row sm:items-stretch sm:gap-4">
        <Image
          alt="chameleon profile picture"
          src={chameleon}
          className="h-24 w-24 rounded-full object-cover shadow-xl sm:h-40 sm:w-40"
          priority={true}
          quality={100}
        />
        <div className="content-evenly text-center sm:flex sm:flex-col sm:text-start">
          <h1 className="text-4xl font-bold sm:mb-auto sm:text-5xl sm:font-extrabold">
            {title}
          </h1>
          <p className="max-w-96 whitespace-pre-line text-pretty sm:text-xl">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
