import { ArticleData } from "./types";
import { CANONICAL_ORGANIZATION_ID, CANONICAL_PERSON_ID } from "./registry";

export function generateArticleSchema(article: ArticleData, siteUrl: string) {
  const articleUrl = `${siteUrl}${article.slug}`;

  const organization = {
    "@type": "Organization",
    "@id": CANONICAL_ORGANIZATION_ID,
    name: article.publisher.name,
    url: article.publisher.url,
    logo: {
      "@type": "ImageObject",
      url: article.publisher.logo,
    },
  };

  const person = {
    "@type": "Person",
    "@id": CANONICAL_PERSON_ID,
    name: article.author.name,
    url: article.author.url,
    jobTitle: article.author.jobTitle,
    worksFor: {
      "@id": CANONICAL_ORGANIZATION_ID,
    },
  };

  const breadcrumb = {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Início",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Guias",
        item: `${siteUrl}/guias`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: articleUrl,
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${articleUrl}#article`,
        isPartOf: {
          "@type": "WebPage",
          "@id": articleUrl,
        },
        headline: article.title,
        description: article.description,
        image: article.featuredImage.src,
        datePublished: article.datePublished,
        dateModified: article.dateModified,
        author: {
          "@id": CANONICAL_PERSON_ID,
        },
        publisher: {
          "@id": CANONICAL_ORGANIZATION_ID,
        },
        mainEntityOfPage: articleUrl,
      },
      person,
      organization,
      breadcrumb,
    ],
  };

  return JSON.stringify(articleSchema, null, 2);
}
