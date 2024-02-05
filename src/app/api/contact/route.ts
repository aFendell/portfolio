import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

import FeedbackEmail from "@/components/emails/FeedbackEmail";
import NewContactEmail from "@/components/emails/NewContactEmail";

export type MailPayload = {
  name: string;
  email: string;
  content: string;
};

const resend = new Resend(process.env.RESEND_API_KEY);

const sendFeedbackMail = async (props: MailPayload) => {
  const { name, email } = props;
  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [email],
      subject: "Thanks for reaching out!",
      react: FeedbackEmail({ name }),
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error });
  }
};

const sendContactDetailsMail = async (props: MailPayload) => {
  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["fendell.assaf@gmail.com"],
      subject: `New contact mail from ${props?.name}`,
      react: NewContactEmail(props),
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error });
  }
};

export async function POST(req: NextRequest, res: NextResponse) {
  const body: MailPayload = await req.json();

  try {
    const contactDetailsData = await sendContactDetailsMail(body);
    const feedbackData = await sendFeedbackMail(body);

    return NextResponse.json({ contactDetailsData, feedbackData });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error });
  }
}
