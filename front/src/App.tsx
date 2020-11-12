import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.scss";
import AppBody from "./AppBody";
import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";
import { ArticleContext } from "./context/ArticleContext";
import { HttpArticleService } from "./services/HttpArticleService";

const articleService = new HttpArticleService();

function App() {
  const [, setArticles] = React.useState(articleService.articles);
  articleService.configure(setArticles);
  return (
    <ArticleContext.Provider value={articleService}>
      <Router>
        <AppHeader />
        <AppBody />
        <AppFooter />
      </Router>
    </ArticleContext.Provider>
  );
}

export default App;
