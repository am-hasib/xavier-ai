import React from "react";
import { LoaderCircle } from "lucide-react";
export default function laoding() {
  return (
    <div className="flex justify-center items-center w-full h-dvh ">
      <LoaderCircle className="animate-spin w-8" />{" "}
    </div>
  );
}
