import { useEffect, useState } from "react";

// Debounce hook
// Debounce is a programming practice used to ensure that time-consuming tasks do not fire so often,
// that it stalls the performance of the web page.

// How to use:
//
// import useDebounce from "@/hooks/useDebounce";
// ...
// const debouncedValue = useDebounce(value, 500);
// ...
// return <div>{debouncedValue}</div>;

function useDebounce<T>(value: T, delay?: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
