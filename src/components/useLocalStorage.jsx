import { useState } from "react";

function useLocalStorage(key, initialValue) {
  const [value, setValueState] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  const setValue = (val) => {
    setValueState(val);
    localStorage.setItem(key, JSON.stringify(val));
  };

  const removeValue = () => {
    localStorage.removeItem(key);
    setValueState(initialValue);
  };

  return [value, setValue, removeValue];
}

export default useLocalStorage;
