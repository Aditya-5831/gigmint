import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import Link from "next/link";
import React from "react";

const ForgotPasswordPage = () => {
  return (
    <div className="flex h-full w-full items-center justify-center py-10">
      <MaxWidthWrapper className="flex h-full w-full max-w-xl items-center justify-center px-5">
        <div className="flex flex-col items-center justify-center gap-10">
          <h2 className="text-center text-xl font-semibold sm:text-3xl">
            Password recovery
          </h2>

          <p className="text-base text-gray-500">
            Enter a email address associated with your Gigmint account.
          </p>

          <ForgotPasswordForm />

          <Link href={"/sign-in"} className="text-primary font-medium">
            Back
          </Link>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default ForgotPasswordPage;
