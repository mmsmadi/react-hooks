import { useEffect, useRef } from "react";

const useOnWindowScroll = (callback) => {
  const listener = useRef(null);

  useEffect(() => {
    listener.current = window.addEventListener("scroll", callback);

    return () => {
      window.removeEventListener("scroll", listener.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useOnWindowScroll;

/**
 * USAGE
 *
 * useOnWindowScroll(() => console.log(`scroll Y: ${window.pageYOffset}`));
 *
 */
