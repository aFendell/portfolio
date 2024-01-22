import { stackData } from "@/data/stack";
import { Muted, Title } from "@/components/ui/Typography";

const Stack = () => {
  const { title, subtitle, stack } = stackData;

  return (
    <section className="pb-12">
      <Muted>{subtitle}</Muted>
      <Title className="mb-12">{title}</Title>
      <ul className="flex flex-wrap justify-center gap-2 sm:gap-4">
        {stack.map((tech) => (
          <li
            className="rounded-full bg-white px-2 py-1 font-medium text-gray-950 sm:px-3 sm:py-2 sm:text-xl"
            key={tech}>
            {tech}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Stack;
