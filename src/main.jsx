import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Modal from "react-modal";
import "modern-normalize";
import "./index.css";
import App from "./App";

Modal.setAppElement("#root");

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
