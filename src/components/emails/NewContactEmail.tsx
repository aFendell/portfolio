import React from "react";

import {
  Body,
  Container,
  Head,
  Html,
  Tailwind,
  Text,
  Heading,
  Hr,
} from "@react-email/components";
import { MailPayload } from "@/app/api/contact/route";

const NewContactEmail = (props: MailPayload) => {
  const { name, email, message } = props;

  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="max-auto my-12 bg-white font-sans">
          <Container className="rounded-lg p-8 text-center shadow-xl">
            <Heading className="pt-4 text-xl font-semibold">
              New Contact Mail
            </Heading>
            <Heading as="h2" className="pt-4 text-lg font-medium">
              Contact info
            </Heading>
            <Text className="">Name: {name}</Text>
            <Text className="">Email: {email}</Text>
            <Hr />
            <Heading as="h2" className="pt-4 text-lg font-medium">
              Content
            </Heading>
            <Text className="whitespace-pre-line">{message}</Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default NewContactEmail;
