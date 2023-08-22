// This hook creates listener and its benifits that it removes the listener on unmount
import { useEffect } from "react";

const useEventListener = (eventName, handler) => {
  useEffect(() => {
    // Add the event listener
    window.addEventListener(eventName, handler);

    // Remove the event listener on cleanup
    return () => {
      window.removeEventListener(eventName, handler);
    };
  }, [eventName, handler]);
};

export default useEventListener;

/**
 * USAGE
 *
 * function handleClick() {
 *   console.log("Clicked!");
 * }
 * useEventListener("click", handleClick);
 *
 */
