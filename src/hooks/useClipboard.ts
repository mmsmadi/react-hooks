import { useState } from "react";

const useClipboard = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [value, setValue] = useState(null);

  const copyToClipboard = (text) => {
    setValue(text);
    navigator.clipboard.writeText(text).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 3000);
    });
  };

  return [isCopied, copyToClipboard, value];
};

export default useClipboard;

/**
 * USAGE
 *
 * const [isCopied, copyToClipboard, value] = useClipboard();
 *
 * <p onClick={() => copyToClipboard("Hello World")}>copy to board</p>
 * {isCopied && <p>Copied to clipboard!</p>}
 * {value && <p>Value copied: {value}</p>}
 *
 */
