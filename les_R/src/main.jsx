import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AffichageProvider } from "./Context/affichageContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AffichageProvider>
      <App />
    </AffichageProvider>
  </StrictMode>,
);
