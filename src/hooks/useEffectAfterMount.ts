// This hook runs after component is mounted, after useEffect, perfect for API calls if component is heavy and for animation
import { useEffect, useRef } from "react";

const useEffectAfterMount = (callback, deps) => {
  const isComponentMounted = useRef(false);

  useEffect(() => {
    if (isComponentMounted.current) {
      return callback();
    }
    isComponentMounted.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

export default useEffectAfterMount;

/**
 * USAGE
 *
 * useEffectAfterMount(() => {
 *   // API call
 * }, []);
 *
 *
 */
