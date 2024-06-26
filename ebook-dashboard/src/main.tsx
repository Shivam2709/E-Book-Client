import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import router from "./router";
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from "./DarkTheme/themeProvider";

const queryclient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryclient}>
      <ToastContainer />
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
      </ThemeProvider>
      
    </QueryClientProvider>
  </React.StrictMode>
);
