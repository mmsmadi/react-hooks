/* This hook helps dealing with local storage. */
import { useState, useEffect } from "react";

const useStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item !== null ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  }, [key, value]);

  return [value, setValue];
};

export default useStorage;

/**
 * USAGE
 *
 * const [count, setCount] = useStorage("count", 0);
 *
 * <p>Count: {count}</p>
 * <button onClick={() => setCount(count + 1)}>Increment</button>
 * <button onClick={() => setCount(count - 1)}>Decrement</button>
 *
 */
