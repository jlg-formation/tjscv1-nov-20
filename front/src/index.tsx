import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ArticleContext, ArticleService } from "./context/ArticleContext";

ReactDOM.render(
  <React.StrictMode>
    <ArticleContext.Provider value={new ArticleService()}>
      <App />
    </ArticleContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
