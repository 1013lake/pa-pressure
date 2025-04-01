// app/api/contact/route.ts (Next.js App Router)
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const formData = await req.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  try {
    const { error } = await resend.emails.send({
      from: "Port Pressure <noreply@portpressure.alberni.dev>", // or a verified domain later
      to: "general_blake@hotmail.com", // your real inbox
      subject: `New message from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ success: false }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Unknown error:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
