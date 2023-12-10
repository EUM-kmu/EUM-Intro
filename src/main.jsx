import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import GlobalStyles from "./GlobalStyle.jsx";
import "./index.css";
import { HealthCheckConfig } from "@webscopeio/react-health-check";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HealthCheckConfig
    value={{
      services: [
        {
          name: "healthCheck",
          url: "/health",
        },
      ],
      onSuccess: ({ service, timestamp }) => {
        console.log(
          `Service "${service.name}" is available since "${timestamp}" 🎉`
        );
      },
      onError: ({ service, timestamp }) => {
        console.log(
          `Service "${service.name}" is not available since "${timestamp}" 😔`
        );
      },
    }}
  >
    <GlobalStyles />
    <App />
  </HealthCheckConfig>
);
