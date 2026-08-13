import { useEffect } from "react";
import ArticleLayout from "./ArticleLayout";
import { ArticleData } from "../../editorial/types";
import { generateArticleSchema } from "../../editorial/schema";

interface ArticleItemPageProps {
  article: ArticleData;
  onNavigate: (targetId: string) => void;
}

export default function ArticleItemPage({ article, onNavigate }: ArticleItemPageProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.articleSchema = article.id;
    script.textContent = generateArticleSchema(article, window.location.origin);
    document.head.appendChild(script);
    return () => script.remove();
  }, [article.id]);

  return <ArticleLayout article={article} onNavigate={onNavigate} />;
}
