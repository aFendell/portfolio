import { stackData } from "@/data/stack";
import { Muted, Title } from "@/components/ui/Typography";
import StackItem from "./StackItem";

const Stack = () => {
  const { title, subtitle, stack } = stackData;

  return (
    <section id="stack">
      <Muted>{subtitle}</Muted>
      <Title className="mb-12">{title}</Title>
      <ul className="flex flex-wrap justify-center gap-2 sm:gap-4">
        {stack.map((tech, index) => (
          <StackItem key={tech} index={index} tech={tech} />
        ))}
      </ul>
    </section>
  );
};

export default Stack;
