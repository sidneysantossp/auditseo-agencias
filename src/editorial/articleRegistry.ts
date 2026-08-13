import { ArticleData } from "./types";
import { entitySeoArticle } from "./articles/entitySeoArticle";
import { entityHomeArticle } from "./articles/entityHomeArticle";
import { entityDisambiguationArticle } from "./articles/entityDisambiguationArticle";
import { entityConsistencyArticle } from "./articles/entityConsistencyArticle";

export const articles: ArticleData[] = [
  entitySeoArticle,
  entityHomeArticle,
  entityDisambiguationArticle,
  entityConsistencyArticle,
];
