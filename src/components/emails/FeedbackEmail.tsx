import React from "react";

import {
  Body,
  Container,
  Head,
  Html,
  Tailwind,
  Text,
  Heading,
} from "@react-email/components";
import { feedbackMailData } from "@/data/feedbackEmail";

type Props = {
  name: string;
};

const FeedbackEmail = ({ name }: Props) => {
  const { content, signature } = feedbackMailData;
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="max-auto my-12 bg-white font-sans">
          <Container className="rounded-lg p-8 text-center shadow-xl">
            <Heading className="pt-4 text-xl font-semibold">Hi {name}!</Heading>
            <Text className="whitespace-pre-line">{content}</Text>
            <Text className="whitespace-pre-line font-medium">{signature}</Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default FeedbackEmail;
