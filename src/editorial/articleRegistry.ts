import { ArticleData } from "./types";
import { entitySeoArticle } from "./articles/entitySeoArticle";
import { entityHomeArticle } from "./articles/entityHomeArticle";
import { entityDisambiguationArticle } from "./articles/entityDisambiguationArticle";
import { entityConsistencyArticle } from "./articles/entityConsistencyArticle";
import { autoriaSeoArticle } from "./articles/autoriaSeoArticle";
import { entityCorroborationArticle } from "./articles/entityCorroborationArticle";
import { aiSearchPillarArticle } from "./articles/aiSearchPillarArticle";
import { aiOverviewsArticle } from "./articles/aiOverviewsArticle";
import { aiInformationRetrievalArticle } from "./articles/aiInformationRetrievalArticle";
import { aiCitationsAttributionArticle } from "./articles/aiCitationsAttributionArticle";

export const articles: ArticleData[] = [
  entitySeoArticle,
  entityHomeArticle,
  entityDisambiguationArticle,
  entityConsistencyArticle,
  autoriaSeoArticle,
  entityCorroborationArticle,
  aiSearchPillarArticle,
  aiOverviewsArticle,
  aiInformationRetrievalArticle,
  aiCitationsAttributionArticle,
];
