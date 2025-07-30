import { render } from "@react-email/render";
import React from "react";
import EmailMessage from "./EmailMessage";

interface RenderForgotPasswordEmailProps {
  email: string;
  otp: string;
  type: string;
}

const RenderEmailMessage = async ({
  email,
  type,
  otp,
}: RenderForgotPasswordEmailProps): Promise<string> => {
  return render(<EmailMessage email={email} otp={otp} type={type} />);
};

export default RenderEmailMessage;
