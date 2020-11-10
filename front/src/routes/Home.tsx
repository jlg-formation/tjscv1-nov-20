import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <h1>Gérer vos stocks efficacement !</h1>
      <Link to="/stock">
        <button className="primary">Voir le stock</button>
      </Link>
    </main>
  );
}

export default Home;
