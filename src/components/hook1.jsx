import React, { useState } from 'react';

function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  const toggle = () => setValue((prev) => !prev);
  return [value, toggle];
}

function App() {
  const [isVisible, toggleVisible] = useToggle();

  return (
    <div>
      <h2>Custom Hook: useToggle</h2>
      <button onClick={toggleVisible}>
        {isVisible ? 'Hide' : 'Show'} Message
      </button>

      {isVisible && (
        <p>
           Hello! This message is Maitri.
        </p>
      )}
    </div>
  );
}

export default App;
