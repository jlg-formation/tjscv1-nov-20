import { Article } from "../interfaces/Article";

export class ArticleService {
  articles: Article[] = this.getArticles();
  setArticle!: React.Dispatch<React.SetStateAction<Article[]>>;

  configure(setArticle: React.Dispatch<React.SetStateAction<Article[]>>) {
    this.setArticle = setArticle;
  }

  addArticle(article: Article) {
    this.articles.push(article);
    this.save();
  }

  remove(selectedArticles: Article[]) {
    console.log("remove from articleService", selectedArticles);
    this.articles = this.articles.filter((a) => !selectedArticles.includes(a));
    this.save();
  }

  save() {
    this.articles = [...this.articles];
    this.setArticle(this.articles);
    localStorage.setItem("articles", JSON.stringify(this.articles));
  }

  getArticles(): Article[] {
    const str = localStorage.getItem("articles");
    if (!str) {
      return [];
    }
    return JSON.parse(str) as Article[];
  }
}
