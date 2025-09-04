import React from "react";  
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // ⬅️ Add this
import App from "./App";
import ThemeContextProvider from "./theme/ThemeContent";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter> 
        <App />
    </BrowserRouter>
  </React.StrictMode>
);
