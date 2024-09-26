"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar } from "./ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { LoaderCircle } from "lucide-react";

export default function Header() {
  const { data: session, status } = useSession();
  const [initalLoading, setInitalLoading] = useState<boolean>(true);
  useEffect(() => {
    if (status !== "loading") {
      setInitalLoading(false);
    }
  }, [session, status]);
  return (
    <div className="fixed top-0 w-full h-16 bg-black z-10 border-b border-gray-100/30 p-3 flex justify-between items-center">
      <Link href="/">
        <h2 className="font-bold text-xl md:text-2xl">XAVIER-AI</h2>
      </Link>
      <div className="__menu">
        {initalLoading && status === "loading" ? (
          <LoaderCircle className="animate-spin" />
        ) : !session ? (
          <Button onClick={() => signIn("google")}>Login</Button>
        ) : (
          <div className="flex justify-center items-center gap-3">
            <Link href={"/profile"}>
              <Avatar className="flex gap-5 group ">
                <AvatarImage src={session?.user?.image || ""} />
                <AvatarFallback>{session.user?.name}</AvatarFallback>
              </Avatar>
            </Link>
            <Button variant={"destructive"} onClick={() => signOut()}>
              Logout
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
