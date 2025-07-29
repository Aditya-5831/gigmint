"use server";

import RenderForgotPasswordEmail from "@/components/auth/RenderForgotPasswordEmail";
import transporter from "@/lib/email/nodemailer";

interface SendOTPProps {
  to: string;
  otp: string;
  subject: string;
  type: string;
}

export const sendOTP = async ({ otp, to, type }: SendOTPProps) => {
  const html = await RenderForgotPasswordEmail({
    email: to,
    otp,
  });

  const mailOptions = {
    from: `"Support" <${process.env.NODEMAILER_APP_USER}>`,
    to,
    subject: type,
    html,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false };
  }
};
