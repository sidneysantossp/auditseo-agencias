import { ArticleData } from "../types";
import { SIDNEY_AUTHOR, AUDIT_PUBLISHER } from "../registry";

export const entityDisambiguationArticle: ArticleData = {
  id: "AUDITSEO-ARTICLE-ENTITY-003",
  slug: "/guias/desambiguacao-de-entidades",
  title: "Desambiguação de Entidades: como separar nomes iguais em grafos de conhecimento",
  subtitle: "Estratégias avançadas para resolver ambiguidades nominais e garantir que o motor de busca associe sua marca e autoridade à entidade correta.",
  description: "Guia técnico sobre desambiguação de entidades em SEO e AI Search: como combater o ruído de homônimos através de contexto, relações e dados estruturados.",
  status: "PUBLISHED",
  type: "GUIDE",
  cluster: "ENTITY_AUTHORITY",
  secondaryClusters: ["SEO", "SEARCH_INTELLIGENCE", "AI_SEARCH"],
  author: SIDNEY_AUTHOR,
  publisher: AUDIT_PUBLISHER,
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  readingTime: "15 min",
  featuredImage: {
    src: "/images/guides/desambiguacao-de-entidades/featured.webp",
    alt: "Representação visual de uma identidade central sendo diferenciada de múltiplos candidatos semelhantes através de relações e contexto.",
    width: 1200,
    height: 630,
  },
  parent: { title: "Autoridade de Entidade", href: "/guias/entity-authority" },
  previous: { title: "Entity Home", href: "/guias/entity-home" },
  next: { title: "Entity Consistency", href: "/guias/consistencia-de-entidade" },
  related: [
    { title: "O que é uma entidade em SEO", href: "/guias/o-que-e-entidade-seo", tag: "Guia" },
    { title: "Entity Consistency", href: "/guias/consistencia-de-entidade", tag: "Guia" },
    { title: "Search Intelligence Lab — Obs #001", href: "/estudos-busca-ia/reconhecimento-de-entidade-por-contexto", tag: "Lab" },
  ],
  evidence: ["AUDITSEO-OBS-001: Reconhecimento de entidade por contexto temático"],
  commercialRelation: { title: "Diagnóstico de Desambiguação e Autoridade", href: "/diagnostico" },
  topicGraph: {
    id: "AUDITSEO-ARTICLE-ENTITY-003",
    type: "GUIDE",
    cluster: "ENTITY_AUTHORITY",
    secondaryClusters: ["SEO", "SEARCH_INTELLIGENCE", "AI_SEARCH"],
    primaryEntity: "Desambiguação de Entidades",
    relatedEntities: ["Sidney Santos", "AUDITSEO", "Google Knowledge Graph"],
    parent: "/guias/entity-authority",
    previous: "/guias/entity-home",
    next: "/guias/consistencia-de-entidade",
    evidenceLinks: ["AUDITSEO-OBS-001"],
    commercialRelation: "/diagnostico",
    status: "PUBLISHED",
  },
  sections: [
    {
      id: "o-problema-da-ambiguidade",
      title: "1. O problema da ambiguidade nominal na web aberta",
      level: 2,
      content: `<p>Um nome identifica uma sequência de caracteres. Uma entidade precisa ser distinguida dentro de um contexto. Na internet contemporânea, a explosão de conteúdos gerados por inteligência artificial e a proliferação de homônimos tornaram a ambiguidade nominal um dos maiores gargalos para a visibilidade orgânica de profissionais e marcas especializados.</p><p>Quando um usuário realiza uma consulta contendo um nome próprio ou uma marca com termos comuns, os motores de busca enfrentam o desafio da <em>Entity Disambiguation</em> (desambiguação de entidades). Se o site corporativo ou a página de autor não fornecerem sinais contextuais robustos, o algoritmo agrupa erroneamente menções de diferentes pessoas sob o mesmo nó conceitual ou, pior, ignora a entidade por completo devido ao alto índice de ruído estatístico.</p>`,
    },
    {
      id: "entity-identification-resolution",
      title: "2. Entity Identification vs. Resolution vs. Attribute Resolution",
      level: 2,
      content: `<p>O ciclo de processamento semântico divide-se em etapas distintas. A <em>Entity Identification</em> detecta a menção a um nome no texto. A <em>Entity Resolution</em> determina qual entidade específica do grafo mundial corresponde àquela menção. Por fim, a <em>Attribute Resolution</em> recupera as propriedades associadas a essa entidade.</p><p>Como demonstramos na <a href=\"/estudos-busca-ia/reconhecimento-de-entidade-por-contexto\">Observação #001</a> do <a href=\"/estudos-busca-ia\">Search Intelligence Lab</a>, a variação de contexto temático altera drasticamente a clareza da associação. Consultas focadas em nichos específicos (como "Sidney Santos Search Intelligence") superam com facilidade o ruído de homônimos que afeta termos genéricos. O segredo para vencer a ambiguidade reside na densidade de co-ocorrência e na arquitetura de sinais secundários.</p>`,
    },
    {
      id: "context-signals-taxonomy",
      title: "3. Taxonomia de sinais contextuais para desambiguação",
      level: 2,
      content: `<p>Para que o motor de busca desambigue com precisão uma entidade, a página de origem e o ecossistema externo devem emitir sinais consistentes através de múltiplas dimensões complementares:</p><ul class=\"space-y-3\"><li><strong>Nome e Variações:</strong> Tratamento uniforme da forma canônica do nome em títulos, URLs e menções corporativas.</li><li><strong>Tipo Taxonômico:</strong> Definição explícita em schema (ex: <code>Person</code>, <code>Organization</code>).</li><li><strong>Organização Vinculada:</strong> Associação inequívoca entre a pessoa e a empresa (ex: Sidney Santos e AUDITSEO).</li><li><strong>Tópico de Atuação:</strong> Concentração de vocabulário semântico em torno de um subnicho especializado.</li><li><strong>Atributos Cronológicos:</strong> Marcos temporais auditáveis (anos de fundação, início de carreira).</li><li><strong>Relações Cruzadas:</strong> Links e menções compartilhadas com outras entidades de autoridade reconhecida.</li></ul>`,
    },
    {
      id: "mesas-de-controle-schema",
      title: "4. O papel do JSON-LD e da propriedade sameAs na desambiguação",
      level: 2,
      content: `<p>A engenharia de desambiguação não depende apenas de texto natural; ela exige rigor técnico em código. A implementação de dados estruturados em JSON-LD na Entity Home é a ferramenta mais direta para eliminar dúvidas algorítmicas.</p><p>Ao preencher a propriedade <code>sameAs</code> com URLs de perfis oficiais verificados em bases de dados públicas e enciclopédias, você fornece ao crawler uma rota de validação cruzada instantânea. O algoritmo cruza os dados da página com os perfis externos e, se houver concordância nas relações, a ambiguidade dissipa-se, consolidando a entidade no topo da hierarquia de respostas.</p>`,
    },
    {
      id: "audit-matrix-desambiguacao",
      title: "5. Matriz de auditoria e decisão para desambiguação de entidades",
      level: 2,
      content: `<p>Antes de investir em estratégias de conteúdo de alto volume, utilize esta matriz para auditar o grau de ambiguidade da sua entidade no mercado:</p><ul class=\"space-y-3\"><li><strong>O nome sofre de colisão homônima?</strong> Se sim, o ecossistema de conteúdo possui termos de suporte e co-ocorrências temáticas suficientes?</li><li><strong>A Entity Home está isolada?</strong> A página principal de autor ou organização diferencia claramente a marca de concorrentes homônimos?</li><li><strong>As fontes externas corroboram?</strong> Veículos e diretórios associam corretamente a pessoa à organização correta?</li></ul>`,
    },
  ],
  faq: [
    {
      question: "O que é desambiguação de entidades em SEO?",
      answer: "É o processo algorítmico pelo qual o motor de busca distingue uma pessoa ou marca específica entre vários homônimos na web."
    },
    {
      question: "Como os dados estruturados ajudam na desambiguação?",
      answer: "O JSON-LD declara explicitamente o tipo, os atributos e as conexões (como sameAs), permitindo validação cruzada imediata pelos crawlers."
    }
  ],
};
