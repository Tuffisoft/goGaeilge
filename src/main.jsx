import React from "react";
import ReactDOM from "react-dom/client";

// App component
import App from "./App.jsx";

// CSS
import "./index.css";

//react-router
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
