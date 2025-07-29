import { sendOTP } from "@/app/(auth)/actions/send-otp-action";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { emailOTP } from "better-auth/plugins";
import { prisma } from "./prisma";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),

  plugins: [
    emailOTP({
      async sendVerificationOTP({ email, otp, type }) {
        let subject = "Your OTP Code";
        if (type === "forget-password") {
          subject = "Reset Password OTP";
          sendOTP({
            to: email,
            otp,
            subject: type,
            type: subject,
          });
        }
        if (type === "email-verification") {
          subject === "Email Verification OTP";
        }
      },
    }),
  ],

  emailAndPassword: {
    enabled: true,
  },

  user: {
    additionalFields: {
      firstName: {
        type: "string",
        input: true,
      },
      lastName: {
        type: "string",
        input: true,
      },
      country: {
        type: "string",
        input: true,
      },
      role: {
        type: "string",
        input: true,
      },
    },
  },
});
