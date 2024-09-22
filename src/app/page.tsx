"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, filter: "blur(10px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.5 }}
      className="text-2xl md:text-5xl w-full h-dvh flex flex-col justify-center items-center"
    >
      XAVIER-AI
      <motion.p
        initial={{ opacity: 0, scale: 0.5, filter: "blur(10px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-5 font-light text-xl"
      >
        An Image Generator for free
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.5, filter: "blur(10px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <Link href={"/create"}>
          <Button className="mt-3 font-bold p-5 ">Start Creating</Button>
        </Link>
      </motion.div>
    </motion.div>
  );
}
