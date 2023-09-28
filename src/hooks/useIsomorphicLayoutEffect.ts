import { useEffect, useLayoutEffect } from "react";

// Hook that decide which effect to use based on the environment

// useLayoutEffect is used on the server side
// useEffect is used on the client side

// How to use:
// import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
// ...
// useIsomorphicLayoutEffect(() => {
//   // do something
// }, []);

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export { useIsomorphicLayoutEffect };
