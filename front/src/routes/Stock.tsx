import React from "react";
import { Link } from "react-router-dom";

function Stock() {
  return (
    <main>
      <h1>Liste des articles</h1>
      <Link to="/create">
        <button>Ajouter</button>
      </Link>
    </main>
  );
}

export default Stock;
