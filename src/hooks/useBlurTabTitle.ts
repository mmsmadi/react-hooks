import { useEffect } from "react";

const originalTitle = document.title;

const useBlurTabTitle = (title) => {
  const handleBlur = () => {
    document.title = title;
  };
  const handleFocus = () => {
    document.title = originalTitle;
  };

  useEffect(() => {
    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleFocus);

    return () => {
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleFocus);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useBlurTabTitle;

/**
 * USAGE
 *
 * useBlurTabTitle("Come back :(");
 *
 */
