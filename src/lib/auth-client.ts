import { createAuthClient } from "better-auth/react";
import {
  inferAdditionalFields,
  emailOTPClient,
} from "better-auth/client/plugins";
import type { auth } from "./auth";

export const authClient = createAuthClient({
  baseURL: process.env.BASE_URL,
  plugins: [inferAdditionalFields<typeof auth>(), emailOTPClient()],
});

export const {
  signUp,
  signIn,
  useSession,
  forgetPassword,
  emailOtp,
  verifyEmail,
} = authClient;
