"use client";

import {
  signInFormSchema,
  SignInFormValues,
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
import { Loader2, Lock, User } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "@/lib/auth-client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const SignInForm = () => {
  const form = useForm<SignInFormValues>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  const { mutate, isPending } = useMutation({
    mutationFn: (values: SignInFormValues) =>
      signIn.email({
        email: values.email,
        password: values.password,
      }),

    onSuccess: (data) => {
      if (data.error) {
        toast.error(data.error.message);
      } else {
        form.reset();
        toast.success("Login successful.");
        router.push("/");
      }
    },
  });

  const onSubmit = (values: SignInFormValues) => {
    mutate(values);
  };

  return (
    <div className="my-10 flex h-full w-full items-center space-y-6">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-5"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <div className="relative flex items-center">
                    <User className="absolute left-4 size-5" />
                    <Input
                      {...field}
                      placeholder="Email"
                      className="h-10 pl-12"
                    />
                  </div>
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
                  <div className="relative flex items-center">
                    <Lock className="absolute left-4 size-4" />
                    <Input
                      {...field}
                      placeholder="password"
                      className="h-10 pl-12"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={isPending} className="w-full" type="submit">
            {isPending ? (
              <Loader2 className="size-5 animate-spin text-white" />
            ) : (
              "Log in"
            )}
          </Button>
          <div className="text-muted-foreground text-center">or</div>
          <Button variant={"outline"} size={"lg"} className="w-full">
            <Image
              src={"/logos/google.png"}
              width={15}
              height={15}
              alt="google logo"
            />
            Continue with Google
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default SignInForm;
