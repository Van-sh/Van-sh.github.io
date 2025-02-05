import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";
import App from "./App.tsx";
import Blob from "./components/Blob.tsx";

import "./index.css";

createRoot(document.getElementById("root")!).render(
   <StrictMode>
      <Blob />
      <App />
      <ToastContainer position="top-center" autoClose={2000} newestOnTop theme="dark" />
   </StrictMode>,
);
