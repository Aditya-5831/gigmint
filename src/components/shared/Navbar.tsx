import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <div className="w-full h-20 sticky inset-x-0 top-0 z-[100] backdrop-blur-lg bg-white/80 border-b border-gray-200">
      <MaxWidthWrapper>
        <div className="w-full h-full flex items-center justify-between">
          <Image src={"/logo.png"} width={170} height={170} alt="logo" />
          <div className="flex items-center gap-2">
            <Button variant={"ghost"}>Sign in</Button>
            <div className="w-px h-8 bg-gray-200" />
            <Button>Sign up</Button>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Navbar;
