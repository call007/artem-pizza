import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import { PizzaProvider } from "./context/PizzaContext";
import { IngredientsProvider } from "./context/IngredientsContext";

Sentry.init({
  dsn: "https://bd8c58643e2244afaa46a6e31e91e60a@o1033219.ingest.sentry.io/6000000",
  integrations: [new Integrations.BrowserTracing()],
  release: process.env.REACT_APP_SENTRY_RELEASE,
  tracesSampleRate: 1.0,
});

ReactDOM.render(
  <React.StrictMode>
    <IngredientsProvider>
      <PizzaProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PizzaProvider>
    </IngredientsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
