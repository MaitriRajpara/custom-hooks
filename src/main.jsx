import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/hook1.jsx";
import App2 from "./components/hook2.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <App2 />
  </StrictMode>
);
