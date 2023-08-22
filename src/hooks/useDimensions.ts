/* This hook will return window layout sizes when size changes. */
import { useState, useEffect } from "react";

const useDimensions = () => {
  const [dimensions, setDimensions] = useState({
    outerWidth: window.outerWidth,
    innerWidth: window.innerWidth,
    outerHeight: window.outerHeight,
    innerHeight: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () =>
      setDimensions({
        outerWidth: window.outerWidth,
        innerWidth: window.innerWidth,
        outerHeight: window.outerHeight,
        innerHeight: window.innerHeight,
      });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return dimensions;
};

export default useDimensions;

/**
 * USAGE
 *
 * const dimensions = useDimensions();
 * console.log(
 *  dimensions.outerWidth,
 *  dimensions.innerWidth,
 *  dimensions.outerHeight,
 *  dimensions.innerHeight
 * )
 *
 */
