import { useState } from "react";

function useUndoRedo(initialValue) {
  const [past, setPast] = useState([]);
  const [present, setPresent] = useState(initialValue);
  const [future, setFuture] = useState([]);

  const setState = (newValue) => {
    setPast((prev) => [...prev, present]);
    setPresent(newValue);
    setFuture([]);
  };

  const undo = () => {
    if (past.length === 0) return;
    const previous = past[past.length - 1];
    const newPast = past.slice(0, past.length - 1);
    setPast(newPast);
    setFuture((f) => [present, ...f]);
    setPresent(previous);
  };

  const redo = () => {
    if (future.length === 0) return;
    const next = future[0];
    const newFuture = future.slice(1);
    setPast((p) => [...p, present]);
    setPresent(next);
    setFuture(newFuture);
  };

  return [present, setState, undo, redo];
}

export default useUndoRedo;
