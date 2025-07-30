import z from "zod";

export const signUpFormSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z.email(),
  country: z.string().min(1, "required"),
  password: z
    .string()
    .min(8, { message: "Password must be 8 characters long" }),
});

export const signInFormSchema = z.object({
  email: z.email(),
  password: z
    .string()
    .min(8, { message: "Password must be 8 characters long" }),
});

export const forgotPasswordFormSchema = z.object({
  email: z.email(),
});

export const resetPasswordFormSchema = z.object({
  otp: z.string().min(6, { message: "Invalid OTP." }),
  password: z
    .string()
    .min(8, { message: "Password must be 8 characters long." }),
});

export const emailVerificationFormSchema = z.object({
  otp: z.string().min(6, { message: "Invalid OTP." }),
});

export type SignUpFormValues = z.infer<typeof signUpFormSchema>;
export type SignInFormValues = z.infer<typeof signInFormSchema>;
export type ForgotPasswordFormValues = z.infer<typeof forgotPasswordFormSchema>;
export type ResetPasswordFormValues = z.infer<typeof resetPasswordFormSchema>;
export type EmailVerificationFormValues = z.infer<
  typeof emailVerificationFormSchema
>;
