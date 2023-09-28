import { useEffect, useState } from "react";

// Returns `true` or `false` when viewport size changes
// !!!! Use only where there is no possibility to use CSS media queries !!!!

// How to use:
// import { useMediaQuery } from "@/hooks/useMediaQuery";
// ...
// const isDesktop = useMediaQuery("(min-width: 864px)");
// ...
// isDesktop && <p>I am visible only on desktop</p>
// ...
//

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;
