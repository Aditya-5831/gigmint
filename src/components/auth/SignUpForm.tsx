"use client";

import { emailOtp, signUp } from "@/lib/auth-client";
import {
  signUpFormSchema,
  SignUpFormValues,
} from "@/lib/validation/auth.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import Image from "next/image";
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
import CountrySelect from "./CountrySelect";
import { updateSearchParams } from "@/lib/utils";

const SignUpForm = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      country: "",
      password: "",
    },
  });

  const sendVerificationEmail = async (email: string) => {
    await emailOtp.sendVerificationOtp({
      email,
      type: "email-verification",
    });
  };

  const { mutate, isPending } = useMutation({
    mutationFn: (values: SignUpFormValues) =>
      signUp.email({
        name: `${values.firstName} ${values.lastName}`,
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
        country: values.country,
        role: searchParams.get("role") ?? "client",
      }),

    onSuccess: ({ data, error }) => {
      if (error) {
        toast.error(error.message);
      } else {
        sendVerificationEmail(data.user.email);

        form.reset();
        toast.success("Registration successful");

        const newQuery = updateSearchParams(searchParams.toString(), {
          email: data.user.email,
        });

        router.push(`/email-verification${newQuery}`);
      }
    },
  });

  const onSubmit = (values: SignUpFormValues) => {
    mutate(values);
  };

  return (
    <div className="my-10 h-full w-full space-y-6">
      <Button variant={"outline"} size={"lg"} className="w-full">
        <Image
          src={"/logos/google.png"}
          width={15}
          height={15}
          alt="google logo"
        />
        Continue with Google
      </Button>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <div className="flex items-center gap-3">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Jason" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Watson" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="JasonDev@gmail.com" />
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
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="*********" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <CountrySelect control={form.control} />
          <Button disabled={isPending} type="submit" className="w-full">
            {isPending ? (
              <Loader2 className="size-5 animate-spin text-white" />
            ) : (
              "Create my account"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default SignUpForm;
