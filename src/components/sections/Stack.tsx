import { stackData } from "@/data/stack";
import { Muted, Title } from "@/components/ui/Typography";
import Badge from "@/components/ui/Badge";

const Stack = () => {
  const { title, subtitle, stack } = stackData;

  return (
    <section className="">
      <Muted>{subtitle}</Muted>
      <Title className="mb-12">{title}</Title>
      <ul className="flex flex-wrap justify-center gap-2 sm:gap-4">
        {stack.map((tech) => (
          <li key={tech}>
            <Badge variant="secondary" className="sm:px-3 sm:py-2 sm:text-base">
              {tech}
            </Badge>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Stack;
