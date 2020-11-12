import React from "react";
import { ArticleService } from "../services/ArticleService";

export const ArticleContext = React.createContext(new ArticleService());
