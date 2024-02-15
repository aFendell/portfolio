import Image from "next/image";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/Card";
import { H3, P } from "@/components/ui/Typography";
import React from "react";
import Badge from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Project } from "@/data/projects";

const ProjectItem = ({ project }: { project: Project }) => {
  return (
    <Card className="mx-auto w-full max-w-2xl text-primary-foreground backdrop-blur-md neon-neutral">
      <CardHeader>
        <H3>{project.title}</H3>
      </CardHeader>
      <CardContent>
        <Image
          alt="project screen shot with code sample"
          src={project.imageUrl}
          className="rounded-lg"
          quality={100}
          placeholder="blur"
        />
        <P className="mt-3">{project.description}</P>
        <ul className="mt-3 flex flex-wrap justify-center gap-2 sm:justify-start">
          {project.tags.map((tag) => (
            <li key={tag}>
              <Badge size="sm" className="neon-neutral">
                {tag}
              </Badge>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button size="sm" variant="outline" asChild>
          <Link href={project.gitLink} target="_blank">
            Github
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectItem;
