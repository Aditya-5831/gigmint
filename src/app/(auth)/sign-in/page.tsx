import SignInForm from "@/components/auth/SignInForm";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import Link from "next/link";

const SignInPage = () => {
  return (
    <div className="flex h-full w-full items-center justify-center py-10">
      <MaxWidthWrapper className="flex h-full w-full max-w-xl items-center justify-center px-5">
        <div className="justify-cente flex flex-col items-center">
          <h2 className="text-center text-xl font-bold sm:text-2xl">
            Welcome back to <span className="text-primary">Gigmint</span>
          </h2>
          <SignInForm />
          <p className="text-sm text-neutral-800">
            Don't have an account?{" "}
            <Link href={"/join"} className="text-primary underline">
              Sign Up
            </Link>
          </p>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default SignInPage;
