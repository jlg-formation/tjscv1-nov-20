import React from "react";
import { Link } from "react-router-dom";

function Stock() {
  return (
    <main>
      <h1>Liste des articles</h1>
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
          <tr>
            <td className="name">Tournevis</td>
            <td className="price">1.45€</td>
            <td className="qty">234</td>
          </tr>
          <tr>
            <td className="name">Tournevis Cruciforme</td>
            <td className="price">11.00€</td>
            <td className="qty">10</td>
          </tr>
          <tr>
            <td className="name">Tondeuse à gazon</td>
            <td className="price">211.00€</td>
            <td className="qty">5</td>
          </tr>
          <tr>
            <td className="name">Pince</td>
            <td className="price">0.45€</td>
            <td className="qty">100</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}

export default Stock;
