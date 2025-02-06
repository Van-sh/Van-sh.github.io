import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import Blob from "./components/Blob.tsx";

import "./index.css";

createRoot(document.getElementById("root")!).render(
   <StrictMode>
      <Blob />
      <App />
   </StrictMode>,
);
