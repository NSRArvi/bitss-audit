import { AuditRequestEmail } from "@/components/AuditRequestEmail";
import { Resend } from "resend";
import { render } from "@react-email/render";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const body = await req.json();
const { fullName,
    email,
    jobTitle,
    companyName,
    serviceInterest,
    contactMethod,
    contactHandle,
    additionalInfo,} = body


        const html = await render(
      <AuditRequestEmail
        fullName={fullName}
        email={email}
        jobTitle={jobTitle}
        companyName={companyName}
        serviceInterest={serviceInterest}
        contactMethod={contactMethod}
        contactHandle={contactHandle}
        additionalInfo={additionalInfo}
      />
    );

  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "bitss@bobosohomail.com",
      replyTo: email,
      subject: serviceInterest,
    html :html
    });

    return Response.json(data);
  } catch (error) {
    console.error("Resend Error:", error);
    return Response.json({ error }, { status: 500 });
  }
}