import { render } from "@react-email/render";
import React from "react";
import ForgotPasswordEmail from "./ForgotPasswordEmail";

interface RenderForgotPasswordEmailProps {
  email: string;
  otp: string;
}

const RenderForgotPasswordEmail = async ({
  email,
  otp,
}: RenderForgotPasswordEmailProps): Promise<string> => {
  return render(<ForgotPasswordEmail email={email} otp={otp} />);
};

export default RenderForgotPasswordEmail;
