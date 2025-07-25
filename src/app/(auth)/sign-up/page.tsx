import SignUpForm from "@/components/auth/SignUpForm";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import Link from "next/link";
import React from "react";

const SignUpPage = () => {
  return (
    <div className="flex h-full w-full items-center justify-center py-10">
      <MaxWidthWrapper className="flex h-full w-full max-w-xl items-center justify-center px-5">
        <div className="justify-cente flex flex-col items-center">
          <h2 className="text-center text-xl font-bold sm:text-2xl">
            Join <span className="text-primary">Gigmint — </span>Where Top
            Talent Meets Opportunity
          </h2>
          <SignUpForm />
          <p className="text-sm text-neutral-800">
            Already have an account?{" "}
            <Link href={"/sign-in"} className="text-primary underline">
              Log In
            </Link>
          </p>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default SignUpPage;
