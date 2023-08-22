// This hook creates state variable with history of its previous values, avoid using it when you have large values
import { useEffect, useState } from "react";

let history = [];

const useStateHistory = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const setState = (newValue) => {
    history.push(value);

    setValue(newValue);
  };

  useEffect(() => {
    return () => {
      history = [];
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [value, setState, history];
};

export default useStateHistory;

/**
 * USAGE
 *
 * const [counter, setCounter, counterHistory] = useStateHistory(0);
 *
 *
 * <div className="app">
 *   <button onClick={() => setCounter((x) => x + 1)}>+1</button>
 *   {counter}
 *   <button onClick={() => setCounter((x) => x - 1)}>-1</button>
 *   <button onClick={() => console.log(counterHistory)}>counterHistory</button>
 * </div>
 *
 */
