import React from "react";

import { Article } from "../interfaces/Article";

const articles: Article[] = [];

export const ArticleContext = React.createContext(articles);
