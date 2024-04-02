import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";

const rootElement = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <div
      style={{
        minWidth: "fit-content",
      }}
    >
      <App />
    </div>
  </React.StrictMode>
);
