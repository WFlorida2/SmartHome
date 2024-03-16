// Import React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom/client";

// Import CSS file for styling
import "./index.css";

// Import main component App
import App from "./App";

// Import reportWebVitals for monitoring web performance
import reportWebVitals from "./reportWebVitals";

// Create a root to render the application into
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the main App component wrapped in StrictMode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Call reportWebVitals to measure web performance
reportWebVitals();
