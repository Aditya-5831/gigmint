import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <nav className="sticky inset-x-0 top-0 z-[100] h-20 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg">
      <MaxWidthWrapper>
        <div className="flex h-full w-full items-center justify-between">
          <Image src={"/logo.png"} width={170} height={170} alt="logo" />
          <div className="flex items-center gap-2">
            <Button variant={"ghost"}>Sign in</Button>
            <div className="h-8 w-px bg-gray-200" />
            <Button>Sign up</Button>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
