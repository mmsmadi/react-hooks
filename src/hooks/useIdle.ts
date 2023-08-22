// This hook creates listeners on mouse move and keyboard press, if no move or press happen then will return false
import { useState, useEffect } from "react";

const useIdle = (onlineTimeout = 3) => {
  const [isOnline, setIsOnline] = useState(true);

  const handleActivity = () => {
    setIsOnline(true);

    let timeoutId;
    if (isOnline) {
      timeoutId = setTimeout(() => {
        setIsOnline(false);
        clearTimeout(timeoutId);
      }, onlineTimeout * 60 * 1000);
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleActivity);
    document.addEventListener("keydown", handleActivity);
    return () => {
      document.removeEventListener("mousemove", handleActivity);
      document.removeEventListener("keydown", handleActivity);
    };
  }, []);

  return isOnline;
};

export default useIdle;

/**
 * USAGE
 *
 * const isOnline = useIdle();
 * <div>You are {isOnline ? "online" : "offline"}</div>
 *
 */
