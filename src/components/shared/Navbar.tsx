"use client";

import { useSession } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Navbar = () => {
  const { data } = useSession();
  console.log("session", data?.user);

  return (
    <nav className="sticky inset-x-0 top-0 z-[100] h-20 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg">
      <MaxWidthWrapper>
        <div className="flex h-full w-full items-center justify-between">
          <Image src={"/logo.png"} width={170} height={170} alt="logo" />
          <div className="flex items-center gap-2">
            <Link
              href={"/sign-in"}
              className={buttonVariants({ variant: "ghost" })}
            >
              Sign in
            </Link>
            <div className="h-8 w-px bg-gray-200" />
            <Link href={"/join"} className={buttonVariants()}>
              Sign up
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
