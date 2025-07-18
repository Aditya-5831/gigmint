import React, { ReactNode } from "react";

interface MaxWidthWrapperProps {
  children: ReactNode;
}

const MaxWidthWrapper = ({ children }: MaxWidthWrapperProps) => {
  return (
    <div className="max-w-screen-2xl sm:px-20 px-2.5 w-full h-full">
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
