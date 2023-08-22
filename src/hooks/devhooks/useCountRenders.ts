// this hook that counts the number of times a component has re-rendered
import { useEffect } from "react";

const useCountRenders = (label = "") => {
  const isDev = process.env.NODE_ENV === "development";

  useEffect(() => {
    if (!isDev) return;
    console.log(`[${label}] Component rendered ${label ? ":" : ""}`);
  });
};

export default useCountRenders;

/**
 * USAGE
 *
 * useCountRenders("App.js");
 */
