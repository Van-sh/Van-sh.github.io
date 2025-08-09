import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import Blob from "./components/Blob";

createRoot(document.getElementById("root")!).render(
   <StrictMode>
      <Blob />
      <App />
   </StrictMode>,
);
