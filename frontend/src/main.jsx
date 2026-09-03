import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { SupportProvider } from "./context/SupportContext.jsx";
import { VolunteerProvider } from "./context/VolunteerContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SupportProvider>
      <VolunteerProvider>
        <App />
      </VolunteerProvider>
    </SupportProvider>
  </StrictMode>
);