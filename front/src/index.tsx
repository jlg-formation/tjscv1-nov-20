import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ArticleContext } from "./context/ArticleContext";
import { Article } from "./interfaces/Article";

const articles: Article[] = [
  { name: "Tournevis", price: 1.45, qty: 234 },
  { name: "Tournevis Cruciforme", price: 2.5, qty: 100 },
  { name: "Tondeuse à gazon", price: 100, qty: 15 },
  { name: "Pince", price: 10, qty: 3 },
];

ReactDOM.render(
  <React.StrictMode>
    <ArticleContext.Provider value={articles}>
      <App />
    </ArticleContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
