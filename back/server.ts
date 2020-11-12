import express from "express";
import serveIndex from "serve-index";
import cors from "cors";
import { Article } from "../front/src/interfaces/Article";

const app = express();
const port = 3500;
const www = "public";

let articles = [
  { id: "a1", name: "Tournevis xxx", price: 1.45, qty: 234 },
  { id: "a2", name: "Tournevis Cruciforme", price: 2.5, qty: 100 },
  { id: "a3", name: "Tondeuse à gazon", price: 100, qty: 15 },
  { id: "a4", name: "Pince", price: 10, qty: 3 },
] as Article[];

let lastId = 4;

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log("url", req.url);
  next();
});

app.get("/ws/articles", (req, res) => {
  res.json(articles);
});

app.post("/ws/articles", (req, res) => {
  const article = req.body as Article;
  lastId++;
  article.id = "a" + lastId;
  articles.push(article);
  res.status(201).json(article);
});

app.delete("/ws/articles", (req, res) => {
  const ids = req.body as string[];
  articles = articles.filter((a) => !ids.includes(a.id));
  res.status(204).end();
});

app.use(express.static(www));
app.use(serveIndex(www, { icons: true }));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
