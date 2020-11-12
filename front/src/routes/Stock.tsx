import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ArticleContext } from "../context/ArticleContext";
import { Article } from "../interfaces/Article";

import StockTable from "../widgets/StockTable";
import "./Stock.scss";

function Stock() {
  const articleService = useContext(ArticleContext);
  const [canSuppress, setCanSuppress] = React.useState(false);
  const [selectedArticles, setSelectedArticles] = React.useState(
    [] as Article[]
  );

  const suppress = () => {
    console.log("suppress");
    articleService.remove(selectedArticles);
  };

  return (
    <main className="stock">
      <h1>Liste des articles</h1>
      <div className="content">
        <nav>
          <Link to="/create">
            <button>Ajouter</button>
          </Link>
          {canSuppress && <button onClick={suppress}>Supprimer</button>}
        </nav>
        <StockTable
          articles={articleService.articles}
          setCanSuppress={setCanSuppress}
          setSelectedArticles={setSelectedArticles}
        />
      </div>
    </main>
  );
}

export default Stock;
