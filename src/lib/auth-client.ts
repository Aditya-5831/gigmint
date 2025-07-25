import { createAuthClient } from "better-auth/react";
import { inferAdditionalFields } from "better-auth/client/plugins";
import type { auth } from "./auth";

export const authClient = createAuthClient({
  baseURL: process.env.BASE_URL,
  plugins: [inferAdditionalFields<typeof auth>()],
});

export const { signUp, signIn, useSession } = authClient;
