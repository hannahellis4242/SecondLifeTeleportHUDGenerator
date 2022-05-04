import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ModelContextProvider from "./store/ModelContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ModelContextProvider>
    <App />
  </ModelContextProvider>
);
