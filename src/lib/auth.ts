import { betterAuth, string } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),

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
