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
import { useToast } from "@/hooks/useToast";
import { contactFormData } from "@/data/contact";

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
  message: z
    .string()
    .min(1, {
      message: "Message is required",
    })
    .max(500, { message: "Max 500 characters" }),
});

const defaultValues: MailPayload = {
  name: "",
  email: "",
  message: "",
};

const ContactForm = () => {
  const [isMutating, setIsMutating] = React.useState(false);
  const { toast } = useToast();
  const form = useForm<MailPayload>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const { notifications, title, btn } = contactFormData;

  const onSubmit = async (values: MailPayload) => {
    setIsMutating(true);
    form.reset();

    try {
      const response = await fetch("api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      toast({
        title: notifications?.success?.title,
        description: notifications?.success?.description,
      });
    } catch (error) {
      toast({
        title: notifications?.failure?.title,
        description: `${notifications?.failure?.description} ${JSON.stringify(error)}`,
        variant: "destructive",
      });
    }
    setIsMutating(false);
  };

  return (
    <Card className="mx-auto w-full max-w-96">
      <CardHeader>{title}</CardHeader>
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
              name="message"
              control={form.control}
              placeholder="Message"
              title="Message*"
            />
            <Button type="submit" disabled={isMutating}>
              {btn}
            </Button>
          </form>
        </FormProvider>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
