/* This hook will run if deps value changed only skipping on mount render. */
import { useEffect, useRef } from "react";

const useUpdateEffect = (func, deps) => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) func();
    else didMount.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

export default useUpdateEffect;

/**
 * USAGE
 *
 * useUpdateEffect(() => {
 *    alert(`Value has changed to: ${value}`);
 *  }, [value]);
 *
 */
