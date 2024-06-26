import * as React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ChakraProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>
);
