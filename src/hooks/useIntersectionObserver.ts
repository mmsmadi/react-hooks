/* this hook used to detect if the div is within the screen (display port) */
import { useEffect, useState, useRef } from "react";

const useIntersectionObserver = (options = {}) => {
  const [entry, setEntry] = useState({});
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      setEntry(entries[0]);
    }, options);
    observer.observe(targetRef.current);
    return () => observer.disconnect();
  }, [options]);

  return [targetRef, entry];
};

export default useIntersectionObserver;

/**
 *
 *
 *   const App = () => {
 *      const Cards = () => {
 *        const [targetRef, entry] = useIntersectionObserver({
 *          threshold: 0.5,
 *        });
 *
 *        return (
 *          <div ref={targetRef} style={{ width: 200, height: 200, background: "gold" }}>
 *            <p>Intersection ratio: {entry.intersectionRatio}</p>
 *            <p>Is intersecting: {entry.isIntersecting ? "Yes" : "No"}</p>
 *          </div>
 *        );
 *      };
 *
 *      return (
 *        <div>
 *          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
 *            <Cards key={item} />
 *          ))}
 *        </div>
 *      );
 *   };
 *
 */
