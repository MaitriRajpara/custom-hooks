import { useState } from "react";

export const useClipboard = (timeout = 2000) => {
  const [isCopied, setIsCopied] = useState(false);

  const copy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), timeout);
    } catch (err) {
      console.error("Failed to copy text:", err);
      setIsCopied(false);
    }
  };

  return { copy, isCopied };
};
