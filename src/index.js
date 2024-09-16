import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="bg-gradient-to-r from-[#281b3d] via-[#180741] to-[#0D0424] bg-[#411c71] h-screen">
      <App />
    </div>
  </React.StrictMode>
);
