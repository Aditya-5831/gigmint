"use server";

import RenderEmailMessage from "@/components/auth/RenderForgotPasswordEmail";
import transporter from "@/lib/email/nodemailer";
import { convert } from "html-to-text";

interface SendOTPProps {
  to: string;
  otp: string;
  subject: string;
}

export const sendOTP = async ({ otp, to, subject }: SendOTPProps) => {
  const html = await RenderEmailMessage({
    email: to,
    otp,
    type: subject,
  });

  const text = convert(html);

  const mailOptions = {
    from: `"Support" <${process.env.NODEMAILER_APP_USER}>`,
    to,
    subject,
    text,
    html,

    headers: {
      "X-Mailer": "Gigmint Mailer",
      "X-Priority": "3",
    },
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false, error: (error as Error).message };
  }
};
