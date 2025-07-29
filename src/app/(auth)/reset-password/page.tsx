import ResetPasswordForm from "@/components/auth/ResetPasswordForm";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";

const ResetPasswordPage = () => {
  return (
    <div className="flex h-full w-full items-center justify-center py-10">
      <MaxWidthWrapper className="flex h-full w-full max-w-xl items-center justify-center px-5">
        <div className="flex flex-col items-center justify-center gap-10">
          <h2 className="text-center text-xl font-semibold sm:text-3xl">
            Enter new Password
          </h2>

          <ResetPasswordForm />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default ResetPasswordPage;
