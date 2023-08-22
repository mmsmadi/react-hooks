// this hook measures the performance of a specific part of your code and log the result
import { useEffect } from "react";

const usePerformanceMeasure = (label, callback) => {
  const isDev = process.env.NODE_ENV === "development";

  useEffect(() => {
    if (!isDev) return;

    console.time(label);
    callback?.();
    console.timeEnd(label);
  }, [label, callback, isDev]);
};

export default usePerformanceMeasure;

/**
 * USAGE
 *
 *
 * usePerformanceMeasure() has two params
 * the first is the label
 * the second is callback function for piece of code to measure its performance
 *
 * usePerformanceMeasure("validateForm", () => { Piece of code to measure its complexity});
 */
