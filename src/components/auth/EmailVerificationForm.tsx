"use client";

import { emailOtp } from "@/lib/auth-client";
import {
  emailVerificationFormSchema,
  EmailVerificationFormValues,
} from "@/lib/validation/auth.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";

const EmailVerificationForm = () => {
  const form = useForm<EmailVerificationFormValues>({
    resolver: zodResolver(emailVerificationFormSchema),
    defaultValues: {
      otp: "",
    },
  });

  const email = useSearchParams().get("email") ?? "";
  const router = useRouter();

  const { mutate, isPending } = useMutation({
    mutationFn: async (values: EmailVerificationFormValues) => {
      await emailOtp.verifyEmail({
        email,
        otp: values.otp,

        fetchOptions: {
          onError: ({ error }) => {
            toast.error(error.message);
          },

          onSuccess: () => {
            toast.success("Email verification successful.");
            router.push(`/sign-in`);
          },
        },
      });
    },
  });

  const onSubmit = (values: EmailVerificationFormValues) => {
    mutate(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col items-center justify-center space-y-3"
      >
        <p className="text-muted-foreground mb-5 text-center text-sm">
          Enter code send to{" "}
          <span className="text-primary underline">{email} </span> to reset your
          password
        </p>
        <FormField
          control={form.control}
          name="otp"
          render={({ field }) => (
            <FormItem>
              <FormLabel>One-Time Password</FormLabel>
              <FormControl>
                <InputOTP maxLength={6} {...field}>
                  <InputOTPGroup>
                    <InputOTPSlot
                      index={0}
                      className="h-12 w-12 rounded-md border border-gray-400"
                    />
                    <InputOTPSlot
                      index={1}
                      className="ml-4 h-11 w-12 rounded-md border border-gray-400"
                    />
                    <InputOTPSlot
                      index={2}
                      className="ml-4 h-11 w-12 rounded-md border border-gray-400"
                    />
                    <InputOTPSlot
                      index={3}
                      className="ml-4 h-11 w-12 rounded-md border border-gray-400"
                    />
                    <InputOTPSlot
                      index={4}
                      className="ml-4 h-11 w-12 rounded-md border border-gray-400"
                    />
                    <InputOTPSlot
                      index={5}
                      className="ml-4 h-11 w-12 rounded-md border border-gray-400"
                    />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button disabled={isPending} type="submit" className="mt-5 w-full">
          {isPending ? (
            <Loader2 className="size-5 animate-spin text-white" />
          ) : (
            "Verify email"
          )}
        </Button>
      </form>
    </Form>
  );
};

export default EmailVerificationForm;
