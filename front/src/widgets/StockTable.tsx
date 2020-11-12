import React from "react";
import { Article } from "../interfaces/Article";

import "./StockTable.scss";

function StockTable(props: {
  articles: Article[];
  selectedArticles: Article[];
  setSelectedArticles: (value: Article[]) => void;
}) {
  const handleClick = (article: Article) => (
    e: React.MouseEvent<HTMLTableRowElement, MouseEvent>
  ) => {
    console.log("click", e, article);
    let newSelectedArticles;
    props.selectedArticles.includes(article)
      ? (newSelectedArticles = props.selectedArticles.filter(
          (a) => a !== article
        ))
      : (newSelectedArticles = [...props.selectedArticles, article]);

    props.setSelectedArticles(newSelectedArticles);
  };

  const isSelected = (article: Article) => {
    console.log("isSelected");
    return props.selectedArticles.includes(article) ? "selected" : "";
  };

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
          <tr
            key={i}
            onClick={handleClick(article)}
            className={isSelected(article)}
          >
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
