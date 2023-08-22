// This hook updates state after certain amount of time, usefull when user change value frequently, for example item count
import { useEffect, useState } from "react";

const useDebouncedState = (initialState, delay = 500) => {
  const [state, setState] = useState(initialState);
  const [debouncedState, setDebouncedState] = useState(initialState);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedState(state);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [state, delay]);

  return [debouncedState, setState];
};

export default useDebouncedState;

/**
 * USAGE
 *
 * const [counter, setCounter] = useDebouncedState(0);
 *
 *
 * <div className="app">
 *   <button onClick={() => setCounter((x) => x + 1)}>+1</button>
 *   {counter}
 *   <button onClick={() => setCounter((x) => x - 1)}>-1</button>
 * </div>
 *
 */
