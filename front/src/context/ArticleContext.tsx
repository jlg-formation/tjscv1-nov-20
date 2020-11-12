import React from "react";
import { Article } from "../interfaces/Article";
import { ArticleService } from "../services/ArticleService";

export const ArticleContext = React.createContext({
  articleService: new ArticleService(),
  articles: [] as Article[],
});
