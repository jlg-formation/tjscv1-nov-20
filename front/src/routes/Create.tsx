import React from "react";

import "./Create.scss";

function Create() {
  return (
    <main className="create">
      <h1>Ajouter un article</h1>
      <form>
        <label>
          <div>Nom</div>
          <input type="text" />
        </label>
        <label>
          <div>Prix</div>
          <input type="number" min="0" step="0.01" />
        </label>
        <label>
          <div>Quantité</div>
          <input type="number" min="0" step="1" />
        </label>
        <button className="primary">Ajouter</button>
      </form>
    </main>
  );
}

export default Create;
