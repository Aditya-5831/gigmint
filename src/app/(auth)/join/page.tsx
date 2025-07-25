import RoleSelectionComponent from "@/components/auth/RoleSelectionComponent";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const JoinPage = () => {
  return (
    <div className="flex h-full w-full items-center justify-center py-10">
      <MaxWidthWrapper className="flex h-full w-full flex-col items-center justify-center gap-5 px-5">
        <div className="justify-cente flex flex-col items-center gap-10">
          <h2 className="text-center text-xl font-bold sm:text-2xl">
            Join <span className="text-primary">Gigmint</span> as a Client or
            Freelancer
          </h2>
          <RoleSelectionComponent />
        </div>
        <p className="text-sm text-neutral-800">
          Already have an account?{" "}
          <Link href={"/sign-in"} className="text-primary underline">
            Log In
          </Link>
        </p>
      </MaxWidthWrapper>
    </div>
  );
};

export default JoinPage;
