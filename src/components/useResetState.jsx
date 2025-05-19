import { useState, useCallback, useRef } from "react";

function useResetState(initialValue) {
  const [state, setState] = useState(initialValue);
  const initialRef = useRef(initialValue);

  const reset = useCallback(() => {
    setState(initialRef.current);
  }, []);

  return [state, setState, reset];
}

export default useResetState;
