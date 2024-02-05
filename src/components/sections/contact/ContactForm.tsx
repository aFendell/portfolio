"use client";
import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { MailPayload } from "@/app/api/contact/route";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { FormProvider } from "@/components/forms/Form";
import TextField from "@/components/forms/TextField";
import TextareaField from "@/components/forms/TextareaField";

const formSchema: z.ZodType<MailPayload> = z.object({
  name: z
    .string()
    .min(1, {
      message: "Name is required",
    })
    .max(30, { message: "Max 30 characters" }),

  email: z
    .string()
    .min(1, {
      message: "Email is required",
    })
    .email(),
  content: z
    .string()
    .min(1, {
      message: "Message is required",
    })
    .max(500, { message: "Max 500 characters" }),
});

const defaultValues: MailPayload = {
  name: "",
  email: "",
  content: "",
};

const ContactForm = () => {
  const form = useForm<MailPayload>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const onSubmit = async (values: MailPayload) => {
    try {
      const response = await fetch("api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      // TODO: Add success notification
      console.log(data);
    } catch (error) {
      // TODO: Add failure notification
      console.log("error: ", error);
    }
    form.reset();
  };

  return (
    <Card className="mx-auto w-full max-w-96">
      <CardHeader>Contact</CardHeader>
      <CardContent>
        <FormProvider {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col space-y-4">
            <TextField
              name="name"
              control={form.control}
              placeholder="Name"
              title="Name*"
            />
            <TextField
              name="email"
              control={form.control}
              placeholder="Email"
              title="Email*"
            />
            <TextareaField
              name="content"
              control={form.control}
              placeholder="Content"
              title="Content*"
            />
            <Button type="submit">Send</Button>
          </form>
        </FormProvider>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
