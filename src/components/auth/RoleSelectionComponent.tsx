"use client";

import { cn, updateSearchParams } from "@/lib/utils";
import { motion } from "framer-motion";
import { UserCog, UserLock } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/button";

const RoleSelectionComponent = () => {
  const searchParams = useSearchParams();
  const [role, setRole] = useState<"client" | "freelancer" | null>(null);
  const router = useRouter();

  const handleClick = () => {
    if (!role) return;

    const newQuery = updateSearchParams(searchParams.toString(), {
      role,
    });

    router.push(`/sign-up${newQuery}`);
  };

  const bounceprops = {
    whileTap: { scale: 0.95 },
    transition: { type: "spring" as const, stiffness: 500, damping: 30 },
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center gap-10 sm:flex-row">
        <motion.div
          {...bounceprops}
          onClick={() => setRole("client")}
          className={cn(
            "hover:border-primary flex aspect-square h-40 w-72 cursor-pointer flex-col items-center justify-center gap-3 rounded-lg border p-5 hover:border-2",
            role === "client"
              ? "border-primary border-2"
              : "border border-gray-400",
          )}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full border">
            <UserLock className="text-primary size-5" />
          </div>
          <h3 className="text-center text-lg text-pretty">
            I'am a client, hiring for a project
          </h3>
        </motion.div>
        <motion.div
          {...bounceprops}
          onClick={() => setRole("freelancer")}
          className={cn(
            "hover:border-primary flex aspect-square h-40 w-72 cursor-pointer flex-col items-center justify-center gap-3 rounded-lg border p-5 hover:border-2",
            role === "freelancer"
              ? "border-primary border-2"
              : "border border-gray-400",
          )}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full border">
            <UserCog className="text-primary size-5" />
          </div>
          <h3 className="text-center text-lg text-pretty">
            I'am a freelancer, looking for a work
          </h3>
        </motion.div>
      </div>
      <Button disabled={!role} className="mt-10 px-8" onClick={handleClick}>
        {role === "client"
          ? "Join as a Client"
          : role === "freelancer"
            ? "Apply as a Freelancer"
            : "Create Account"}
      </Button>
    </div>
  );
};

export default RoleSelectionComponent;
