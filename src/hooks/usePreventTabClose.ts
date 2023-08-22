/* this hook prevent user closing tab, and asks before closing */
import { useEffect } from "react";

const usePreventTabClose = (preventClose = true) => {
  useEffect(() => {
    if (!preventClose) return;

    const handleBeforeUnload = (event: any) => {
      event.preventDefault();
      event.returnValue = "";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [preventClose]);
};

export default usePreventTabClose;

/**
 * USAGE
 *
 * usePreventTabClose();
 *
 * you can alsoe pass true or false to prevent or not
 *
 * usePreventTabClose(true);
 *
 */
