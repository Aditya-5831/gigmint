"use client";

import {
  forgotPasswordFormSchema,
  ForgotPasswordFormValues,
} from "@/lib/validation/auth.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useMutation } from "@tanstack/react-query";
import { forgetPassword } from "@/lib/auth-client";
import { toast } from "sonner";
import { useRouter, useSearchParams } from "next/navigation";
import { Loader2 } from "lucide-react";
import { updateSearchParams } from "@/lib/utils";

const ForgotPasswordForm = () => {
  const form = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordFormSchema),
    defaultValues: {
      email: "",
    },
  });

  const router = useRouter();

  const searchParams = useSearchParams();

  const { mutate, isPending } = useMutation({
    mutationFn: async (values: ForgotPasswordFormValues) => {
      const newQuery = updateSearchParams(searchParams.toString(), {
        email: values.email,
      });

      await forgetPassword.emailOtp({
        email: values.email,

        fetchOptions: {
          onError: ({ error }) => {
            form.reset();
            toast.error(error.message);
          },

          onSuccess: (ctx) => {
            console.log(ctx);
            form.reset();
            router.push(`/reset-password${newQuery}`);
          },
        },
      });
    },
  });

  const onSubmit = async (values: ForgotPasswordFormValues) => {
    mutate(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} className="border-gray-400" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isPending} type="submit" className="w-full">
          {isPending ? (
            <Loader2 className="size-5 animate-spin text-white" />
          ) : (
            "Continue"
          )}
        </Button>
      </form>
    </Form>
  );
};

export default ForgotPasswordForm;
