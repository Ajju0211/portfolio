"use client";
import { motion } from "framer-motion";

export default function MotionSection({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="w-full h-full p-2 flex flex-col gap-2"
    >
      {children}
    </motion.div>
  );
}
