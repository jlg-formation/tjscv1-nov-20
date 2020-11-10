import React from "react";
import { Link } from "react-router-dom";
import StockTable from "../widgets/StockTable";

import "./Stock.scss";

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
        <StockTable />
      </div>
    </main>
  );
}

export default Stock;
