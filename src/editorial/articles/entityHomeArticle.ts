import { ArticleData } from "../types";
import { SIDNEY_AUTHOR, AUDIT_PUBLISHER } from "../registry";

export const entityHomeArticle: ArticleData = {
  id: "AUDITSEO-ARTICLE-ENTITY-002",
  slug: "/guias/entity-home",
  title: "Entity Home: por que uma entidade precisa de uma fonte canônica clara",
  subtitle: "Como estruturar a URL controlada de referência para pessoas e organizações, evitando a dispersão de sinais em ecossistemas de IA e busca orgânica.",
  description: "Guia estratégico sobre Entity Home: a importância de centralizar a identidade, biografia, atributos e conexões em uma URL canônica controlada.",
  status: "PUBLISHED",
  type: "GUIDE",
  cluster: "ENTITY_AUTHORITY",
  secondaryClusters: ["SEO", "SEARCH_INTELLIGENCE", "AI_SEARCH"],
  author: SIDNEY_AUTHOR,
  publisher: AUDIT_PUBLISHER,
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  readingTime: "12 min",
  featuredImage: {
    src: "/images/guides/entity-home/featured.webp",
    alt: "Representação visual de uma fonte central canonical hub conectada a pessoa, organização, documentos, perfis, relações e fontes.",
    width: 1200,
    height: 630,
  },
  parent: { title: "Autoridade de Entidade", href: "/guias/entity-authority" },
  previous: { title: "O que é uma entidade em SEO?", href: "/guias/o-que-e-entidade-seo" },
  next: { title: "Desambiguação de Entidades", href: "/guias/desambiguacao-de-entidades" },
  related: [
    { title: "O que é uma entidade em SEO", href: "/guias/o-que-e-entidade-seo", tag: "Guia" },
    { title: "Desambiguação de Entidades", href: "/guias/desambiguacao-de-entidades", tag: "Guia" },
    { title: "Entity Home de Sidney Santos", href: "/autor/sidney-santos", tag: "Entity Home" },
  ],
  evidence: ["AUDITSEO-OBS-001: Reconhecimento de entidade por contexto temático"],
  commercialRelation: { title: "Diagnóstico de Autoridade de Entidade", href: "/diagnostico" },
  topicGraph: {
    id: "AUDITSEO-ARTICLE-ENTITY-002",
    type: "GUIDE",
    cluster: "ENTITY_AUTHORITY",
    secondaryClusters: ["SEO", "SEARCH_INTELLIGENCE", "AI_SEARCH"],
    primaryEntity: "Entity Home",
    relatedEntities: ["Sidney Santos", "AUDITSEO", "Google Knowledge Graph"],
    parent: "/guias/entity-authority",
    previous: "/guias/o-que-e-entidade-seo",
    next: "/guias/desambiguacao-de-entidades",
    evidenceLinks: ["AUDITSEO-OBS-001"],
    commercialRelation: "/diagnostico",
    status: "PUBLISHED",
  },
  sections: [
    {
      id: "o-que-e-entity-home",
      title: "1. O conceito de Entity Home: a âncora de verdade controlada",
      level: 2,
      content: `<p>No vasto ecossistema da web, onde perfis de redes sociais, diretórios corporativos, menções em notícias e resenhas de terceiros fragmentam a presença digital de uma marca ou indivíduo, os motores de busca e modelos de linguagem necessitam de um ponto focal de autoridade. Esse ponto é a <em>Entity Home</em> — a URL primária e controlada onde a entidade define, de forma inequívoca e estruturada, quem é, quais são seus atributos e a quais outras entidades está conectada.</p><p>Eu uso a Entity Home como fonte de verdade controlada, mas não confundo isso com verdade universalmente propagada. A página oficial de autor ou o portal corporativo não detém o poder de ditar o que a web inteira diz sobre a marca, mas detém o poder absoluto de estabelecer a referência canônica que os crawlers utilizam para validação primária. Sem uma Entity Home clara, a identidade digital fica à mercê da interpretação aleatória de agregadores externos e resumos gerativos.</p>`,
    },
    {
      id: "entity-home-vs-homepage",
      title: "2. Entity Home vs. Homepage comercial: separando propósitos",
      level: 2,
      content: `<p>Um dos erros mais frequentes cometidos por agências e empresas é tratar a página inicial (homepage) comercial como a única Entity Home da organização. Embora a homepage cumpra um papel transacional e de conversão de leads, ela raramente oferece o aprofundamento semântico necessário para a resolução de entidade institucional ou de pessoas-chave.</p><p>Uma Entity Home dedicada — seja ela uma página biográfica rigorosa para fundadores e executivos (como <a href=\"/autor/sidney-santos\">/autor/sidney-santos</a>) ou uma página institucional detalhada sobre a organização — foca inteiramente em evidências contextuais, marcos históricos, credenciais verificáveis, dados estruturados JSON-LD e links para fontes corroboradas. Enquanto a homepage vende serviços, a Entity Home prova a existência, a biografia e a legitimidade da entidade perante o grafo de conhecimento.</p>`,
    },
    {
      id: "person-vs-org-entity-home",
      title: "3. Person Entity Home e Organization Entity Home na prática",
      level: 2,
      content: `<p>A arquitetura de uma Entity Home varia conforme a natureza da entidade representada. No caso de uma <em>Person Entity Home</em>, os elementos indispensáveis incluem a biografia cronológica auditável, o histórico de atuação profissional (marcos temporais consistentes, como a atuação em SEO desde 2009), afiliações organizacionais explícitas (ex: fundador da AUDITSEO) e links para publicações de autoria própria.</p><p>No caso de uma <em>Organization Entity Home</em>, o foco desloca-se para o propósito corporativo, liderança executiva, metodologia proprietária (como o Método S.I.G.N.A.L), portfólio de soluções e evidências de entrega. Em ambos os cenários, a página deve ser tratada como um ativo editorial de primeiríssima grandeza, desprovida de jargões vazios e repleta de sinais verificáveis que alimentem os crawlers de IA com dados limpos e estruturados.</p>`,
    },
    {
      id: "owned-vs-external-sources",
      title: "4. Owned media vs. External validation: o equilíbrio da autoridade",
      level: 2,
      content: `<p>Declarar atributos na Entity Home própria é o primeiro passo, mas nenhum motor de busca confia cegamente em declarações unilaterais. É aqui que entra a tensão entre mídia própria (<em>owned media</em>) e validação externa (<em>external validation</em>). O grafo de conhecimento opera com base em corroboração cruzada.</p><p>Se a sua Entity Home declara um conjunto de especialidades, mas nenhum veículo de imprensa, artigo técnico externo ou diretório verificado corrobora essas relações, o sistema classifica a alegação como de baixa confiança. A Entity Home fornece o molde estruturado, mas são as menções externas coerentes e o uso correto da propriedade <code>sameAs</code> que preenchem esse molde com autoridade real e duradoura.</p>`,
    },
    {
      id: "entity-home-audit-checklist",
      title: "5. Checklist prático para auditoria de Entity Home",
      level: 2,
      content: `<p>Para garantir que a sua Entity Home cumpra rigorosamente seu papel perante os algoritmos de busca e IA, verifique os seguintes itens:</p><ul class=\"space-y-3\"><li><strong>URL própria e estável:</strong> A página possui endereço permanente, sem redirecionamentos desnecessários ou parâmetros voláteis?</li><li><strong>Dados estruturados completos:</strong> O JSON-LD implementa o tipo correto (<code>Person</code> ou <code>Organization</code>) com biografia, imagem e <code>sameAs</code> validados?</li><li><strong>Relações explícitas:</strong> Os vínculos com outras entidades (como autoria de artigos ou fundação de empresas) estão descritos em texto natural e em código?</li><li><strong>Consistência temporal:</strong> As datas e marcos apresentados coincidem perfeitamente com o restante do ecossistema digital da marca?</li></ul>`,
    },
  ],
  faq: [
    {
      question: "O que é uma Entity Home?",
      answer: "É a URL primária controlada (como uma página biográfica ou institucional) onde uma entidade declara formalmente seus atributos, biografia e conexões canônicas."
    },
    {
      question: "Qual a diferença entre homepage e Entity Home?",
      answer: "A homepage é focada em conversão comercial e captação de clientes, enquanto a Entity Home concentra evidências de identidade, dados estruturados e validação semântica para motores de busca e IA."
    }
  ],
};
