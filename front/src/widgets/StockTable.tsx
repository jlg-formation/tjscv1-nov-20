import React from "react";
import { Article } from "../interfaces/Article";

import "./StockTable.scss";

function StockTable(props: { articles: Article[] }) {
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
        {props.articles.map((article, i) => (
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
