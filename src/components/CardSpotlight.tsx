"use client"
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent, ReactNode } from "react";

export default function CardSpotlight({ children, classes }: { children: ReactNode, classes? : string }) {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      className={`group relative max-w-xl h-full rounded-xl border border-white/10 bg-white bg-opacity-10 px-8 p-5 shadow-2xl max-[600px]:w-full ${classes}`}
      onMouseMove={handleMouseMove}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      whileHover={{ scale: 1.01 }}

    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              300px circle at ${mouseX}px ${mouseY}px,
              rgba(167, 15, 58, 0.25),
              transparent 80%
            )
          `,
        }}
      />
      {children}
    </motion.div>
  )
}