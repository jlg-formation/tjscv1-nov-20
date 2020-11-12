import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import { ArticleContext } from "../context/ArticleContext";

import "./Create.scss";

function Create() {
  const history = useHistory();

  const [name, setName] = React.useState("");
  const [nameTouched, setNameTouched] = React.useState(false);
  const [price, setPrice] = React.useState(0);
  const [priceTouched, setPriceTouched] = React.useState(false);
  const [qty, setQty] = React.useState(1);
  const [qtyTouched, setQtyTouched] = React.useState(false);

  const { articleService } = useContext(ArticleContext);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    articleService.addArticle({ name, price, qty });
    history.push("/stock");
  };

  const isEnabled = name.length >= 6 && price > 0 && qty > 0;

  return (
    <main className="create">
      <h1>Ajouter un article</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <div>Nom</div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => setNameTouched(true)}
          />
          <div className="error">
            {nameTouched && name.length < 6 && (
              <>Le nom doit faire au moins 6 caractères.</>
            )}
          </div>
        </label>
        <label>
          <div>Prix</div>
          <input
            type="number"
            min="0"
            step="0.01"
            value={price}
            onChange={(e) => setPrice(+e.target.value)}
            onBlur={() => setPriceTouched(true)}
          />
          <div className="error">
            {priceTouched && (price > 0 || <>Rien n'est gratuit.</>)}
          </div>
        </label>
        <label>
          <div>Quantité</div>
          <input
            type="number"
            min="0"
            step="1"
            value={qty}
            onChange={(e) => setQty(+e.target.value)}
            onBlur={() => setQtyTouched(true)}
          />
          <div className="error">
            {qtyTouched && (qty > 0 || <>La quantie doit être &gt; 0.</>)}
          </div>
        </label>
        <button disabled={!isEnabled} className="primary">
          Ajouter
        </button>
      </form>
    </main>
  );
}

export default Create;
