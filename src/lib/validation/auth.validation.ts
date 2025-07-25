import z from "zod";

export const signUpFormSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z.string().email(),
  country: z.string().min(1, "required"),
  password: z
    .string()
    .min(8, { message: "Password must be 8 characters long" }),
});

export const signInFormSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be 8 characters long" }),
});

export type SignUpFormValues = z.infer<typeof signUpFormSchema>;
export type SignInFormValues = z.infer<typeof signInFormSchema>;
