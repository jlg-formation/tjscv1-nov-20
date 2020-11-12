import express from "express";
import serveIndex from "serve-index";
import cors from "cors";
import { Article } from "../front/src/interfaces/Article";

const app = express();
const port = 3500;
const www = "public";

const articles = [
  { name: "Tournevis xxx", price: 1.45, qty: 234 },
  { name: "Tournevis Cruciforme", price: 2.5, qty: 100 },
  { name: "Tondeuse à gazon", price: 100, qty: 15 },
  { name: "Pince", price: 10, qty: 3 },
] as Article[];

app.use(cors());

app.use((req, res, next) => {
  console.log("url", req.url);
  next();
});

app.get("/ws/articles", (req, res) => {
  res.json(articles);
});

app.use(express.static(www));
app.use(serveIndex(www, { icons: true }));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
