"use client";

import { emailOtp } from "@/lib/auth-client";
import {
  resetPasswordFormSchema,
  ResetPasswordFormValues,
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
import { Input } from "../ui/input";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";

const ResetPasswordForm = () => {
  const form = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(resetPasswordFormSchema),
    defaultValues: {
      otp: "",
      password: "",
    },
  });

  const email = useSearchParams().get("email") ?? "";
  const router = useRouter();

  const { mutate, isPending } = useMutation({
    mutationFn: async (values: ResetPasswordFormValues) => {
      await emailOtp.resetPassword({
        email,
        otp: values.otp,
        password: values.password,

        fetchOptions: {
          onError: ({ error }) => {
            toast.error(error.message);
          },

          onSuccess: () => {
            toast.success("Password reset successfully.");
            router.push(`/sign-in`);
          },
        },
      });
    },
  });

  const onSubmit = (values: ResetPasswordFormValues) => {
    mutate(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-3">
        <p className="text-muted-foreground mb-5 text-sm">
          Enter code send to{" "}
          <span className="text-primary underline">{email}</span> to reset your
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
                      className="h-11 w-14 rounded-md border border-gray-400"
                    />
                    <InputOTPSlot
                      index={1}
                      className="ml-4 h-11 w-14 rounded-md border border-gray-400"
                    />
                    <InputOTPSlot
                      index={2}
                      className="ml-4 h-11 w-14 rounded-md border border-gray-400"
                    />
                    <InputOTPSlot
                      index={3}
                      className="ml-4 h-11 w-14 rounded-md border border-gray-400"
                    />
                    <InputOTPSlot
                      index={4}
                      className="ml-4 h-11 w-14 rounded-md border border-gray-400"
                    />
                    <InputOTPSlot
                      index={5}
                      className="ml-4 h-11 w-14 rounded-md border border-gray-400"
                    />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>New Password</FormLabel>
              <FormControl>
                <Input {...field} className="border-gray-400" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button disabled={isPending} type="submit" className="mt-5 w-full">
          {isPending ? (
            <Loader2 className="size-5 animate-spin text-white" />
          ) : (
            "Change password"
          )}
        </Button>
      </form>
    </Form>
  );
};

export default ResetPasswordForm;
