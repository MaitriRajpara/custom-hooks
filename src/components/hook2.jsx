import React, { useState } from 'react';

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
}

function App2() {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div>
      <h2>Custom Hook: useCounter</h2>
      <h3>Count: {count}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}> Reset</button>
    </div>
  );
}

export default App2;
