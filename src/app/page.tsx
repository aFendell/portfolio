import Hero from "@/components/sections/Hero";
import Overview from "@/components/sections/Overview";
import Experience from "@/components/sections/experience/Experience";
import Stack from "@/components/sections/Stack";
import Contact from "@/components/sections/contact/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Overview />
      <Experience />
      <Stack />
      <Contact />
    </>
  );
}
