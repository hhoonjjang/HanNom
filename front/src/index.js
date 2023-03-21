import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, useLocation } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
// import { ThemeProvider } from "@aws-amplify/ui-react";
// import { Amplify } from "aws-amplify";
// import "@aws-Amplify/ui-react/style.css";
// import { studioTheme } from "./ui-componets";
import axios from "axios";
// Amplify.configure(awsconfig);
import { store } from "./modules/store.js";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <ThemeProvider theme={studioTheme}>
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
  // </ThemeProvider>
);

reportWebVitals();
