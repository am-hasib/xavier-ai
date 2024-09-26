import { LoaderCircle } from "lucide-react";
import React from "react";

export default function loading() {
  return (
    <div className="col-span-full flex justify-center items-center">
      <LoaderCircle className="animate-spin" />
    </div>
  );
}
