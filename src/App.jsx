import { useState } from "react";
import useKeyPress from "./components/useKeyPress";
import { useEffect } from "react";
import useUndoRedo from "./components/useUndo";
import useIsOffline from "./components/useIsoffline";
import useResetState from "./components/useResetState";
import useToggle from "./components/useToggle";
import { useClipboard } from "./components/useClipboard";
import { useForm } from "./components/useForm";

function App() {
  const [text, setText, undo, redo] = useUndoRedo("Hello");
  const isEscPressed = useKeyPress("Escape");
  const isEnterPressed = useKeyPress("Enter");
  const isOffline = useIsOffline();
  const [count, setCount, reset] = useResetState(0);
  const [isVisible, toggleVisible] = useToggle();
  const [cliptext, setClipText] = useState("Hello, clipboard!");
  const { copy, isCopied } = useClipboard();
  const initialValues = {
    name: "",
    email: "",
  };

  const onSubmit = (formData) => {
    console.log("Submitted Data:", formData);
    alert("Form submitted!");
  };

  const { values, handleChange, handleSubmit, resetForm } = useForm(
    initialValues,
    onSubmit
  );

  const sectionStyle = {
    border: "4px solid black",
    borderRadius: "8px",
    padding: "1rem",
    marginBottom: "1rem",
  };

  return (
    <>
      <div>
        <div style={sectionStyle}>
          <h2>Reset</h2>
          <p>Count: {count}</p>
          <button onClick={() => setCount(count + 1)}>Increment</button>{" "}
          <button onClick={reset}>Reset</button>
        </div>

        <div style={sectionStyle}>
          <h2>Escape key</h2>
          <p>
            Press <strong>Escape</strong> or <strong>Enter</strong> to test:
          </p>

          {isEscPressed && (
            <div style={{ color: "red" }}>Escape key is pressed!</div>
          )}
          {isEnterPressed && (
            <div style={{ color: "green" }}>Enter key is pressed!</div>
          )}

          {!isEscPressed && !isEnterPressed && <p>No key pressed</p>}
        </div>

        <div style={sectionStyle}>
          <h2>Network Status</h2>
          {isOffline ? (
            <p style={{ color: "red" }}>You are currently offline.</p>
          ) : (
            <p style={{ color: "green" }}>You are online.</p>
          )}
        </div>

        <div style={sectionStyle}>
          <h2>Undo redo</h2>
          <p>{text}</p>
          <button onClick={() => setText(text + "1")}>Add</button>{" "}
          <button onClick={undo}>Undo</button>{" "}
          <button onClick={redo}>Redo</button>
        </div>
        <div style={sectionStyle}>
          <h2>useToggle</h2>
          <button onClick={toggleVisible}>
            {isVisible ? "Hide" : "Show"} Message
          </button>

          {isVisible && <p>Hello! This message is Maitri.</p>}
        </div>
        <div style={sectionStyle}>
          <h2>useClipboard</h2>
          <input
            type="text"
            value={cliptext}
            onChange={(e) => setClipText(e.target.value)}
          />
          <button onClick={() => copy(cliptext)}>
            {isCopied ? "Copied!" : "Copy"}
          </button>
        </div>
        <div style={sectionStyle}>
          <h2> useForm</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name:</label>
              <input
                name="name"
                value={values.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                name="email"
                value={values.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </div>
            <button type="submit">Submit</button>
            <button type="button" onClick={resetForm}>
              Reset
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
