import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ArticleContext } from "../context/ArticleContext";

import StockTable from "../widgets/StockTable";
import "./Stock.scss";

function Stock() {
  const articleService = useContext(ArticleContext);
  return (
    <main className="stock">
      <h1>Liste des articles</h1>
      <div className="content">
        <nav>
          <Link to="/create">
            <button>Ajouter</button>
          </Link>
        </nav>
        <StockTable articles={articleService.articles} />
      </div>
    </main>
  );
}

export default Stock;
