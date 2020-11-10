import React from "react";
import { Link } from "react-router-dom";
import { Article } from "../interfaces/Article";

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
        <table>
          <thead>
            <tr>
              <th className="name">Nom</th>
              <th className="price">Prix</th>
              <th className="qty">Quantité</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((article, i) => (
              <tr key={i}>
                <td className="name">{article.name}</td>
                <td className="price">{article.price.toFixed(2)} €</td>
                <td className="qty">{article.qty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default Stock;
