import { useEffect, useState } from "react";

function useKeyPress(targetKey) {
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    const downHandler = (e) => {
      if (e.key === targetKey) {
        setIsPressed(true);
      }
    };

    const upHandler = (e) => {
      if (e.key === targetKey) {
        setIsPressed(false);
      }
    };

    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, [targetKey]);

  return isPressed;
}

export default useKeyPress;
