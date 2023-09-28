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
const viewport = { once: true, margin: "0px 0px -128px" };

export function FadeIn(
  props: React.ComponentPropsWithoutRef<typeof motion.div>
) {
  const prefersReducedMotion = useReducedMotion();
  const isInStaggerGroup = useContext(FadeInStaggerContext);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 24 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{
        duration: 0.9,
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
    />
  );
}

export function FadeInStagger({
  faster = false,
  ...props
}: React.ComponentPropsWithoutRef<typeof motion.div> & { faster?: boolean }) {
  return (
    <FadeInStaggerContext.Provider value={true}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        transition={{ staggerChildren: faster ? 0.12 : 0.2 }}
        {...props}
      />
    </FadeInStaggerContext.Provider>
  );
}
