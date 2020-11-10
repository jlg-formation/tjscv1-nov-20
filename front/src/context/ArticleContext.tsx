import React from "react";

import { Article } from "../interfaces/Article";

export class ArticleService {
  articles: Article[] = [
    { name: "Tournevis", price: 1.45, qty: 234 },
    { name: "Tournevis Cruciforme", price: 2.5, qty: 100 },
    { name: "Tondeuse à gazon", price: 100, qty: 15 },
    { name: "Pince", price: 10, qty: 3 },
  ];
  addArticle(article: Article) {
    this.articles.push(article);
  }
}

export const ArticleContext = React.createContext(new ArticleService());
