/* This hook to get online status (if connected to internet) */
import { useState, useEffect } from "react";

const useOnlineStatus = () => {
  const [online, setOnline] = useState(navigator.onLine);

  const handleOnline = () => setOnline(true);
  const handleOffline = () => setOnline(false);

  useEffect(() => {
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return online;
};

export default useOnlineStatus;

/**
 * USAGE
 *
 * const isOnline = useOnlineStatus();
 * console.log(isOnline)
 *
 */
