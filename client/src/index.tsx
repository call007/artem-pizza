import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import React from "react";
import ReactDOM from "react-dom";
import { SkeletonTheme } from "react-loading-skeleton";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, useTheme } from "styled-components";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { store } from "./store";
import { GlobalStyles } from "./styles";
import { theme as staticTheme } from "./styles/theme";

Sentry.init({
  dsn: "https://bd8c58643e2244afaa46a6e31e91e60a@o1033219.ingest.sentry.io/6000000",
  integrations: [new Integrations.BrowserTracing()],
  release: process.env.REACT_APP_SENTRY_RELEASE,
  tracesSampleRate: 1.0,
});

function Root() {
  const theme = useTheme();

  return (
    <>
      <GlobalStyles />
      <SkeletonTheme
        baseColor={theme.colors.gray100}
        highlightColor={theme.colors.white}
        borderRadius=".875rem"
      >
        <App />
      </SkeletonTheme>
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={staticTheme}>
          <Root />
        </ThemeProvider>
      </BrowserRouter>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
