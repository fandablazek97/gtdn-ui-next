import { useEffect, useState } from "react";

// Component ensures that the component works only on the client side
// Sometimes it is necessary to use if there is a difference in UI between the client and the server
// -> (e.g. when loading a value from localStorage on the client and updating the UI accordingly)

// Note:
// - What we return when the function has not yet run (!mounted)... should serve as a placeholder
// and have the same dimensions and appearance as the mounted UI to prevent layout shift and flicker.

// How to use:
// import { useMounted } from "@/hooks/useMounted";
// const mounted = useMounted();
// ...
// if (!mounted) {
//   return null; // or <div>...</div>;
// }
// ...
// return <div>...</div>;

export function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted;
}
