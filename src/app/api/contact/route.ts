import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

import FeedbackEmail from "@/components/emails/FeedbackEmail";
import NewContactEmail from "@/components/emails/NewContactEmail";

export type MailPayload = {
  name: string;
  email: string;
  message: string;
};

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendFeedbackMail(props: MailPayload) {
  const { name, email } = props;
  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: [email],
    subject: "Thanks for reaching out!",
    react: FeedbackEmail({ name }),
  });

  if (error) {
    console.error(error);
    return NextResponse.json(error);
  }

  return NextResponse.json(data, { status: 201 });
}

async function sendContactDetailsMail(props: MailPayload) {
  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: ["fendell.assaf@gmail.com"],
    subject: `New contact mail from ${props?.name}`,
    react: NewContactEmail(props),
  });

  if (error) {
    console.error(error);
    return NextResponse.json(error);
  }

  return NextResponse.json(data, { status: 201 });
}

export async function POST(req: NextRequest) {
  const body: MailPayload = await req.json();

  try {
    const contactDetailsRes = await sendContactDetailsMail(body);
    const contactDetailsData = await contactDetailsRes.json();

    if (!contactDetailsData.id) {
      return Response.json("Something went wrong :(", { status: 400 });
    }

    const feedbackRes = await sendFeedbackMail(body);
    const feedbackData = await feedbackRes.json();

    return Response.json({ contactDetailsData, feedbackData }, { status: 201 });
  } catch (error) {
    console.error(error);
    return Response.json({ error });
  }
}
