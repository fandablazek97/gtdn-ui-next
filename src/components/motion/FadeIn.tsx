"use client";

import { motion, useReducedMotion } from "framer-motion";
import { createContext, useContext } from "react";

// How to use in stagger group:
// import { FadeIn, FadeInStagger } from "@/components/motion/FadeIn";
//
// <FadeInStagger>
//   <FadeIn>...</FadeIn>
//   <FadeIn>...</FadeIn>
//   <FadeIn>...</FadeIn>
// </FadeInStagger>

const FadeInStaggerContext = createContext(false);
const viewport = { once: true, margin: "0px 0px -200px" };

export function FadeIn({
  duration = 0.9,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof motion.div> & {
  duration?: number;
  children?: React.ReactNode;
}) {
  const prefersReducedMotion = useReducedMotion();
  const isInStaggerGroup = useContext(FadeInStaggerContext);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 24 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{
        duration: duration,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      {...(isInStaggerGroup
        ? {}
        : {
            initial: "hidden",
            whileInView: "visible",
            viewport,
          })}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function FadeInStagger({
  delay = 0.2,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof motion.div> & {
  delay?: number;
  children: React.ReactNode;
}) {
  return (
    <FadeInStaggerContext.Provider value={true}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        transition={{ staggerChildren: delay }}
        {...props}
      >
        {children}
      </motion.div>
    </FadeInStaggerContext.Provider>
  );
}
