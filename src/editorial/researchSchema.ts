import { ResearchItem } from "./researchTypes";

export function generateResearchSchema(item: ResearchItem, origin: string) {
  const canonicalUrl = `${origin}${item.route}`;
  const graph = [
    {
      "@type": "Article",
      "@id": `${canonicalUrl}#research`,
      url: canonicalUrl,
      headline: item.title,
      description: item.description,
      datePublished: item.datePublished,
      dateModified: item.dateModified,
      author: { "@id": item.author.personId },
      publisher: { "@id": item.publisher.organizationId },
      isPartOf: { "@id": `${origin}/estudos-busca-ia#lab` },
      keywords: [item.type, ...(item.topicRelations || [])],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${canonicalUrl}#breadcrumbs`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Search Intelligence Lab", item: `${origin}/estudos-busca-ia` },
        { "@type": "ListItem", position: 2, name: item.title, item: canonicalUrl },
      ],
    },
    {
      "@type": "CollectionPage",
      "@id": `${origin}/estudos-busca-ia#lab`,
      url: `${origin}/estudos-busca-ia`,
      name: "Search Intelligence Lab",
      publisher: { "@id": item.publisher.organizationId },
    },
    { "@type": "Person", "@id": item.author.personId, name: item.author.name, url: item.author.url },
    { "@type": "Organization", "@id": item.publisher.organizationId, name: item.publisher.name, url: item.publisher.url },
  ];

  return JSON.stringify({ "@context": "https://schema.org", "@graph": graph });
}

export function generateResearchHubSchema(items: ResearchItem[], origin: string) {
  const published = items.filter((item) => item.status === "PUBLISHED");
  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${origin}/estudos-busca-ia#lab`,
        url: `${origin}/estudos-busca-ia`,
        name: "Search Intelligence Lab",
        description: "Estudos e observações da AUDITSEO sobre busca, IA, entidades e autoridade.",
        hasPart: published.map((item) => ({ "@id": `${origin}${item.route}#research` })),
      },
      { "@type": "Person", "@id": "https://www.auditseo.com.br/autor/sidney-santos#person", name: "Sidney Santos", url: "https://www.auditseo.com.br/autor/sidney-santos" },
      { "@type": "Organization", "@id": "https://www.auditseo.com.br/#organization", name: "AUDITSEO", url: "https://www.auditseo.com.br/" },
    ],
  });
}
