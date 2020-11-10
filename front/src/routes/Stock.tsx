import React from "react";
import { Link } from "react-router-dom";

import { Article } from "../interfaces/Article";
import StockTable from "../widgets/StockTable";
import "./Stock.scss";

const articles: Article[] = [
  { name: "Tournevis", price: 1.45, qty: 234 },
  { name: "Tournevis Cruciforme", price: 2.5, qty: 100 },
  { name: "Tondeuse à gazon", price: 100, qty: 15 },
  { name: "Pince", price: 10, qty: 3 },
];

function Stock() {
  return (
    <main className="stock">
      <h1>Liste des articles</h1>
      <div className="content">
        <nav>
          <Link to="/create">
            <button>Ajouter</button>
          </Link>
        </nav>
        <StockTable articles={articles} />
      </div>
    </main>
  );
}

export default Stock;
