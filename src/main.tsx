import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { BrowserRouter } from "react-router";

import "./styles/reset.css";
import "./index.module.css";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
     <App/>
    </BrowserRouter>
  
  </StrictMode>,
);
