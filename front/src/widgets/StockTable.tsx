import React from "react";
import { Article } from "../interfaces/Article";

import "./StockTable.scss";

const articles: Article[] = [
  { name: "Tournevis", price: 1.45, qty: 234 },
  { name: "Tournevis Cruciforme", price: 2.5, qty: 100 },
  { name: "Tondeuse à gazon", price: 100, qty: 15 },
  { name: "Pince", price: 10, qty: 3 },
];

function StockTable() {
  return (
    <table className="stock-table">
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
  );
}

export default StockTable;
