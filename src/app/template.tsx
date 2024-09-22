"use client";

import { motion } from "framer-motion";
import React, { ReactNode } from "react";

export default function template({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97, filter: "blur(10px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      {children}
    </motion.div>
  );
}
