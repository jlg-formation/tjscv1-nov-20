import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ArticleContext } from "../context/ArticleContext";

import StockTable from "../widgets/StockTable";
import "./Stock.scss";

function Stock() {
  const articleService = useContext(ArticleContext);
  const [canSuppress, setCanSuppress] = React.useState(false);
  return (
    <main className="stock">
      <h1>Liste des articles</h1>
      <div className="content">
        <nav>
          <Link to="/create">
            <button>Ajouter</button>
          </Link>
          {canSuppress && <button>Supprimer</button>}
        </nav>
        <StockTable
          articles={articleService.articles}
          setCanSuppress={setCanSuppress}
        />
      </div>
    </main>
  );
}

export default Stock;
