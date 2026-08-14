import { ArticleData } from "../types";
import { SIDNEY_AUTHOR, AUDIT_PUBLISHER } from "../registry";

export const entityConsistencyArticle: ArticleData = {
  id: "AUDITSEO-ARTICLE-ENTITY-004",
  slug: "/guias/consistencia-de-entidade",
  title: "Entity Consistency: quando informações conflitantes fragmentam uma identidade",
  subtitle: "O impacto crítico de conflitos factuais, dados desatualizados e divergências temporais na recuperação de entidades por inteligência artificial.",
  description: "Guia profundo sobre consistência de entidades em SEO e AI Search: análise do caso real de atributos divergentes (2009 vs 2013) e estratégias de unificação.",
  status: "PUBLISHED",
  type: "GUIDE",
  cluster: "ENTITY_AUTHORITY",
  secondaryClusters: ["SEO", "SEARCH_INTELLIGENCE", "AI_SEARCH"],
  author: SIDNEY_AUTHOR,
  publisher: AUDIT_PUBLISHER,
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  readingTime: "16 min",
  featuredImage: {
    src: "/images/guides/consistencia-de-entidade/featured.webp",
    alt: "Representação visual de uma entidade central conectada a diferentes sinais e fontes, com reconciliação de atributos.",
    width: 1200,
    height: 630,
  },
  parent: { title: "Autoridade de Entidade", href: "/guias/o-que-e-entidade-seo" },
  previous: { title: "Desambiguação de Entidades", href: "/guias/desambiguacao-de-entidades" },
  next: { title: "Autoria em SEO: como conectar conteúdo, especialista e organização", href: "/guias/autoria-seo" },
  related: [
    { title: "Desambiguação de Entidades", href: "/guias/desambiguacao-de-entidades", tag: "Guia" },
    { title: "Entity Home", href: "/guias/entity-home", tag: "Guia" },
    { title: "Search Intelligence Lab — Obs #002", href: "/estudos-busca-ia/entidade-correta-atributo-incorreto-ai-search", tag: "Lab" },
  ],
  evidence: ["AUDITSEO-OBS-002: Atributos temporais incorretos em AI Overviews"],
  commercialRelation: { title: "Diagnóstico de Consistência e Autoridade", href: "/diagnostico" },
  topicGraph: {
    id: "AUDITSEO-ARTICLE-ENTITY-004",
    type: "GUIDE",
    cluster: "ENTITY_AUTHORITY",
    secondaryClusters: ["SEO", "SEARCH_INTELLIGENCE", "AI_SEARCH"],
    primaryEntity: "Entity Consistency",
    relatedEntities: ["Sidney Santos", "AUDITSEO", "Google AI Overviews"],
    parent: "/guias/o-que-e-entidade-seo",
    previous: "/guias/desambiguacao-de-entidades",
    next: "/guias/autoria-seo",
    evidenceLinks: ["AUDITSEO-OBS-002"],
    commercialRelation: "/diagnostico",
    status: "PUBLISHED",
  },
  sections: [
    {
      id: "o-problema-da-consistencia",
      title: "1. A ilusão da identidade estática: por que entidades sofrem fragmentação",
      level: 2,
      content: `<p>A construção de autoridade digital costuma ser tratada como um processo linear de acúmulo de links e menções. No entanto, à medida que uma marca ou profissional expande sua presença online, a probabilidade de surgirem conflitos factuais, dados desatualizados e divergências temporais em diretórios externos aumenta exponencialmente. Quando o ecossistema digital apresenta informações contraditórias, o motor de busca enfrenta um dilema de credibilidade.</p><p>Eu prefiro consistência factual a uniformidade textual. Não é necessário que todas as menções na web utilizem exatamente as mesmas palavras ou copiem a mesma biografia parágrafo por parágrafo; o que é inegociável é a integridade dos fatos fundamentais — datas de fundação, marcos de carreira, relações societárias e atribuições de autoria. Quando esses pilares entram em conflito, a inteligência artificial hesita ao sintetizar respostas em AI Overviews.</p>`,
    },
    {
      id: "cadeia-processamento-ia",
      title: "2. A cadeia de processamento: Entity → Relation → Attribute → Consistency",
      level: 2,
      content: `<p>Para compreender como a inconsistência prejudica o posicionamento, devemos analisar a cadeia lógica que os motores generativos utilizam. Em nosso <a href=\"/estudos-busca-ia\">Search Intelligence Lab</a>, documentamos detalhadamente esse comportamento na <a href=\"/estudos-busca-ia/entidade-correta-atributo-incorreto-ai-search\">Observação #002</a>. O sistema opera em camadas sucessivas:</p><ul class=\"space-y-3\"><li><strong>Entity Resolution:</strong> A pessoa é identificada corretamente (ex: Sidney Santos).</li><li><strong>Relation Resolution:</strong> A relação corporativa é reconhecida (ex: Fundador da AUDITSEO).</li><li><strong>Attribute Resolution:</strong> O sistema tenta recuperar atributos granulares (ex: ano de início de atuação em SEO).</li><li><strong>Consistency:</strong> Validação de conflitos entre fontes.</li></ul><p>O acerto nas primeiras camadas não imuniza o sistema contra falhas na recuperação de atributos quando há divergência de dados na web. No caso documentado, o AI Overview identificou perfeitamente a pessoa e a empresa, mas recuperou o ano de 2013 em vez do ano canônico de 2009 devido à presença de menções secundárias conflitantes na web aberta.</p>`,
    },
    {
      id: "conflitos-factuais-temporais",
      title: "3. Conflitos factuais e o peso de sinais temporais obsoletos",
      level: 2,
      content: `<p>Informações obsoletas em guest posts antigos, perfis abandonados em redes sociais ou diretórios desatualizados exercem um peso imprevisível na síntese de LLMs. Como os modelos ponderam volumes massivos de dados históricos, um dado incorreto repetido em várias fontes secundárias pode sobrepujar a declaração correta feita na Entity Home oficial.</p><p>Isso demonstra que a gestão de autoridade não se resume a criar conteúdo novo, mas a realizar auditorias cirúrgicas de limpeza e unificação de dados em toda a pegada digital da marca. A consistência temporal atua como um antídoto contra a alucinação de atributos em motores de busca baseados em IA.</p>`,
    },
    {
      id: "estrategias-unificacao-dados",
      title: "4. Estratégias práticas para restaurar a consistência de entidades",
      level: 2,
      content: `<p>Para reverter quadros de inconsistência e blindar a marca contra erros de atributo em AI Search, recomendamos a execução de quatro frentes operacionais:</p><ul class=\"space-y-3\"><li><strong>Inventário Canônico de Atributos:</strong> Documentar internamente todas as datas, marcos e cargos oficiais da organização e seus fundadores.</li><li><strong>Auditoria de Diretorios e Redes:</strong> Localizar perfis externos desatualizados e proceder à atualização ou remoção dos dados conflitantes.</li><li><strong>Reforço na Entity Home:</strong> Tornar os dados biográficos e históricos ainda mais evidentes e estruturados na página canônica controlada.</li><li><strong>Monitoramento Contínuo:</strong> Acompanhar regularmente as respostas geradas por IA (AI Overviews e chatbots) para identificar desvios factuais em tempo hábil.</li></ul>`,
    },
    {
      id: "matriz-auditoria-consistencia",
      title: "5. Matriz de auditoria de consistência semântica",
      level: 2,
      content: `<p>Utilize esta matriz periódica para avaliar se a sua entidade corre riscos de fragmentação factual:</p><ul class=\"space-y-3\"><li><strong>Atributos fundamentais unificados?</strong> As datas de início e marcos da empresa são idênticos no site, no LinkedIn e em artigos de imprensa?</li><li><strong>Relações de autoria claras?</strong> Todos os artigos técnicos apontam para a mesma Entity Home do autor?</li></ul>`,
    },
  ],
  faq: [
    {
      question: "O que é Entity Consistency?",
      answer: "É o grau de harmonia e ausência de conflitos factuais entre os atributos de uma entidade declarados em sua Entity Home e aqueles encontrados em toda a web."
    },
    {
      question: "Por que uma IA pode errar o ano de fundação de uma empresa mesmo acertando seu nome?",
      answer: "Porque a recuperação de atributos opera após a resolução de entidade; se houver menções secundárias conflitantes e obsoletas na web, o modelo pode sintetizar o dado incorreto."
    }
  ],
};
