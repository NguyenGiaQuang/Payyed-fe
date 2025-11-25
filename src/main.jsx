import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

// CSS từ template
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/font-awesome/css/all.min.css";
import "./assets/vendor/owl.carousel/assets/owl.carousel.min.css";
import "./assets/css/stylesheet.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
