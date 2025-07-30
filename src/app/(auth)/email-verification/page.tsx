import EmailVerificationForm from "@/components/auth/EmailVerificationForm";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { Mail } from "lucide-react";

const EmailVerification = () => {
  return (
    <div className="flex h-full w-full items-center justify-center py-10">
      <MaxWidthWrapper className="flex h-full w-full max-w-3xl items-center justify-center px-5">
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border">
            <Mail className="text-primary size-10" />
          </div>
          <h2 className="text-center text-lg font-semibold sm:text-2xl">
            Please verify your email
          </h2>

          <EmailVerificationForm />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default EmailVerification;
