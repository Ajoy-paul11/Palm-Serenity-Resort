import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter, Route, Routes } from "react-router";
import PrivacyPolicy from "./components/PrivacyPolicy.jsx";
import Terms from "./components/Terms.jsx";
import Cookies from "./components/Cookies.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MantineProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<App />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<Terms />} />
          <Route path="/cookie-policy" element={<Cookies />}/>
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  </StrictMode>
);
