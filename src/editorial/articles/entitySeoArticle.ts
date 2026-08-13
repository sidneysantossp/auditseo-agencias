import { ArticleData } from "../types";
import { SIDNEY_AUTHOR, AUDIT_PUBLISHER } from "../registry";

export const entitySeoArticle: ArticleData = {
  id: "AUDITSEO-ARTICLE-ENTITY-001",
  slug: "/guias/o-que-e-entidade-seo",
  title: "O que é uma entidade em SEO?",
  subtitle: "Por que motores de busca e inteligência artificial abandonaram a dependência exclusiva de palavras-chave para mapear o mundo através de objetos distinguíveis.",
  description: "Guia completo sobre entidades em SEO: como o Google e a IA resolvem identidades, distinguem nomes de conceitos, estruturam relações e formam a base do Search Intelligence moderno.",
  status: "PUBLISHED",
  type: "GUIDE",
  cluster: "ENTITY_AUTHORITY",
  secondaryClusters: ["SEO", "SEARCH_INTELLIGENCE", "AI_SEARCH"],
  author: SIDNEY_AUTHOR,
  publisher: AUDIT_PUBLISHER,
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  readingTime: "14 min",
  featuredImage: {
    src: "/images/guides/o-que-e-entidade-seo/featured.webp",
    alt: "Representação visual de uma entidade central conectada a pessoas, organizações, conteúdos, temas, produtos e relações.",
    width: 1200,
    height: 630,
  },
  parent: { title: "Autoridade de Entidade", href: "/guias/entity-authority" },
  next: { title: "Entity Home: por que uma entidade precisa de uma fonte canônica clara", href: "/guias/entity-home" },
  related: [
    { title: "Entity Home", href: "/guias/entity-home", tag: "Guia" },
    { title: "Desambiguação de Entidades", href: "/guias/desambiguacao-de-entidades", tag: "Guia" },
    { title: "Search Intelligence Lab — Obs #001", href: "/estudos-busca-ia/reconhecimento-de-entidade-por-contexto", tag: "Lab" },
  ],
  evidence: ["AUDITSEO-OBS-001: Reconhecimento de entidade por contexto temático", "AUDITSEO-OBS-002: Atributos temporais em AI Overviews"],
  commercialRelation: { title: "Diagnóstico de Autoridade de Entidade", href: "/diagnostico" },
  topicGraph: {
    id: "AUDITSEO-ARTICLE-ENTITY-001",
    type: "GUIDE",
    cluster: "ENTITY_AUTHORITY",
    secondaryClusters: ["SEO", "SEARCH_INTELLIGENCE", "AI_SEARCH"],
    primaryEntity: "Entidade (SEO)",
    relatedEntities: ["Sidney Santos", "AUDITSEO", "Google Search", "AI Overviews"],
    parent: "/guias/entity-authority",
    next: "/guias/entity-home",
    evidenceLinks: ["AUDITSEO-OBS-001", "AUDITSEO-OBS-002"],
    commercialRelation: "/diagnostico",
    status: "PUBLISHED",
  },
  sections: [
    {
      id: "introducao-nome-vs-entidade",
      title: "1. Nome não é entidade: a primeira mudança mental no SEO moderno",
      level: 2,
      content: `<p>Durante mais de duas décadas, a otimização para motores de busca operou sob a premissa de que strings de texto — as palavras digitadas pelo usuário na barra de pesquisa — bastavam para conectar uma dúvida a uma resposta. O algoritmo contava termos, pesava densidades e correlacionava repetições exatas. No entanto, com a maturidade do processamento de linguagem natural e o advento da busca impulsionada por inteligência artificial, essa mecânica superficial tornou-se insuficiente. O buscador moderno deixou de ser um mero catalogador de palavras e passou a atuar como um construtor de mapas de conhecimento.</p><p>Para mim, essa é a primeira mudança mental importante: parar de confundir o nome da coisa com a coisa em si. <strong>Palavras são representações. Entidades são objetos distinguíveis dentro de um contexto.</strong> Um nome próprio, como "Sidney Santos", pode pertencer a um apresentador de televisão, a um médico, a um advogado ou a um especialista em SEO. O texto bruto é idêntico em todas as hipóteses; a entidade subjacente, contudo, é radicalmente distinta. Quando otimizamos para o ecossistema atual, o objetivo principal não é convencer um robô de que repetimos a palavra-chave o suficiente, mas sim fornecer sinais inequívocos de que a entidade representada por nossa marca, produto ou autor possui contornos únicos, atributos verificáveis e relações consistentes.</p>`,
    },
    {
      id: "entity-vs-keyword-vs-query",
      title: "2. Entity vs. Keyword vs. Query vs. Intent: desfazendo confusões conceituais",
      level: 2,
      content: `<p>A confusão entre esses quatro pilares do ecossistema de busca gera estratégias de conteúdo falhas e desperdício de esforço técnico. Uma <em>query</em> é o gatilho bruto inserido pelo usuário no campo de busca. Uma <em>keyword</em> é o construto estatístico utilizado por ferramentas legadas de SEO para estimar volume e concorrência. Uma <em>intent</em> (intenção) define o objetivo por trás da busca, seja ele informacional, transacional ou navegacional. Mas a <em>entidade</em> é o bloco fundamental de significado que ancora todos os outros três elementos em um grafo estruturado.</p><p>Quando um usuário digita "consultoria de SEO para agências", a query carrega uma intenção comercial complexa. Para o motor de busca, os termos utilizados apontam para entidades conceituais (Search Intelligence, Agências de Marketing, Otimização Orgânica) e entidades organizacionais (AUDITSEO). O papel do arquiteto de conteúdo e do estrategista de SEO é garantir que a marca e o autor apareçam não como uma resposta genérica baseada em correspondência de termos, mas como um nó central de alta confiabilidade dentro desse grafo semântico. A otimização baseada em entidades transcende a simples escolha de palavras-chave; ela exige a construção deliberada de um ecossistema de dados estruturados e menções coerentes que o motor de busca possa validar sem margem para ambiguidade.</p>`,
    },
    {
      id: "tipos-atributos-relacoes",
      title: "3. Tipos, atributos e relações: como o grafo semântico enxerga o mundo",
      level: 2,
      content: `<p>No modelo subjacente dos motores modernos, o conhecimento está organizado em um grafo onde cada entidade possui um tipo taxonômico, um conjunto de atributos e uma rede de relações bidirecionais. Uma pessoa, uma organização, um evento, um local ou um conceito abstrato ocupam posições específicas nessa malha. Os atributos descrevem propriedades intrínsecas — como data de fundação, cargo, localidade ou especialidade —, enquanto as relações conectam a entidade a outras entidades do ecossistema.</p><p>Consideremos a AUDITSEO: ela não é apenas um site com páginas indexadas, mas uma entidade do tipo <em>Organization</em>, cujos atributos incluem fundação no ano de 2009, atuação nacional e foco em Search Intelligence para agências. Sua principal relação estrutural é o vínculo com Sidney Santos na qualidade de fundador e autor principal (<em>Person</em>). Quando a inteligência artificial analisa a web, ela não busca apenas trechos isolados de texto; ela valida se os atributos declarados na página oficial coincidem com as menções corroboradas em fontes externas confiáveis. Se houver divergência entre o que a entidade afirma sobre si mesma e o que o restante da web corrobora, o grau de incerteza aumenta, prejudicando a recuperação em respostas generativas e AI Overviews.</p>`,
    },
    {
      id: "entity-resolution-contexto",
      title: "4. Entity Resolution e o papel crítico do contexto",
      level: 2,
      content: `<p>O processo pelo qual o motor de busca decide qual entidade específica corresponde a um termo ambíguo é chamado de <em>Entity Resolution</em> (resolução de entidade). Como demonstramos em nossas observações no <a href=\"/estudos-busca-ia\">Search Intelligence Lab</a>, a resolução de entidade não ocorre de forma homogênea para todos os tópicos associados a um indivíduo ou marca. Conforme evidenciado na <a href=\"/estudos-busca-ia/reconhecimento-de-entidade-por-contexto\">Observação #001</a>, o Google reconhece com alta consistência a associação de Sidney Santos ao termo "Search Intelligence", mas enfrenta forte dispersão por homônimos e menor densidade de corpus ao processar o termo mais genérico "Entity Authority".</p><p>Isso revela uma verdade operacional desconfortável para muitos profissionais de SEO: <strong>o contexto temático dita o sucesso da resolução.</strong> Se o conteúdo circundante não fornecer sinais semânticos densos, co-ocorrências de termos técnicos e vínculos estruturados, o motor de busca recorre a probabilidades genéricas, resultando em perda de visibilidade nos resumos gerados por IA. A clareza do contexto atua como um holofote que ilumina a entidade correta, separando-a do ruído inerente à web aberta.</p>`,
    },
    {
      id: "entity-home-structured-data",
      title: "5. Da Entity Home aos dados estruturados: acoplando sinais proprietários",
      level: 2,
      content: `<p>Para que uma entidade seja resolvida com facilidade, ela precisa de uma <em>Entity Home</em> — uma URL canônica controlada onde sua identidade, biografia, atributos e conexões são declarados de maneira inequívoca. No caso de uma pessoa, trata-se da página de autor (ex: <a href=\"/autor/sidney-santos\">/autor/sidney-santos</a>); no caso de uma empresa, a página institucional ou de governança. A Entity Home funciona como a âncora primária de verdade controlada.</p><p>No entanto, a mera declaração visual não basta para os crawlers avançados. É imprescindível o uso rigoroso de dados estruturados em formato JSON-LD, acoplando propriedades como <code>@type</code>, <code>name</code>, <code>jobTitle</code>, <code>worksFor</code> e, sobretudo, a propriedade <code>sameAs</code> para vincular perfis oficiais em enciclopédias, redes profissionais e diretórios verificados. O <code>sameAs</code> atua como uma ponte de validação cruzada, permitindo que o motor de busca cruze dados internos e externos para consolidar a autoridade da entidade de forma automatizada.</p>`,
    },
    {
      id: "caso-sidney-santos-auditseo",
      title: "6. O caso prático: a estruturação de entidade na AUDITSEO",
      level: 2,
      content: `<p>Na AUDITSEO, aplicamos nossa própria engenharia de entidades para blindar o posicionamento estratégico perante agências parceiras. O fundador, Sidney Santos, atua no mercado de otimização orgânica desde 2009. Ao longo dos anos, o maior desafio não foi apenas posicionar palavras-chave institucionais, mas garantir que o ecossistema de busca compreendesses o nexo causal entre a consultoria especializada, o método proprietário S.I.G.N.A.L e a autoria dos guias técnicos.</p><p>Ao unificar o grafo de conhecimento interno — onde cada artigo aponta para o autor canônico, que por sua vez aponta para a organização emissora, validada por estudos empíricos publicados no Lab —, criamos um ciclo fechado de autoridade semântica. Esse rigor estrutural é o que permite que marcas B2B de alto padrão alcancem previsibilidade orgânica mesmo em mercados altamente competitivos e dominados por ruído informacional.</p>`,
    },
    {
      id: "checklist-auditoria-entidade",
      title: "7. Checklist prático: como auditar a fundação de entidades do seu projeto",
      level: 2,
      content: `<p>Para encerrar este guia fundamental, sintetizamos os critérios essenciais que qualquer agência ou empresa deve auditar antes de investir em campanhas complexas de autoridade e tráfego orgânico:</p><ul class=\"space-y-3\"><li><strong>Identificação inequívoca:</strong> O nome da marca ou autor possui homônimos relevantes na web? O contexto ao redor isola o tema de forma correta?</li><li><strong>Entity Home estabelecida:</strong> Existe uma URL central controlada que sirva como fonte primária de verdade para a entidade?</li><li><strong>JSON-LD rigoroso:</strong> Os dados estruturados utilizam tipagem precisa e propriedades de ligação (<code>sameAs</code>)?</li><li><strong>Consistência de atributos:</strong> Datas, cargos, marcos históricos e relações corporativas estão idênticos em todas as menções públicas?</li><li><strong>Alinhamento com Search Intelligence:</strong> O conteúdo produz ganho de informação real ou apenas recicla definições genéricas de dicionário?</li></ul>`,
    },
  ],
  faq: [
    {
      question: "Qual a diferença entre palavra-chave e entidade em SEO?",
      answer: "Palavra-chave é uma string de texto contada estatisticamente por algoritmos legados. Entidade é um objeto distinguível com tipo, atributos e relações dentro de um grafo de conhecimento semântico."
    },
    {
      question: "Como o Google faz a resolução de uma entidade homônima?",
      answer: "O motor de busca utiliza sinais contextuais de co-ocorrência, dados estruturados (JSON-LD), links de referência externa e menções corroboradas para distinguir a identidade correta."
    },
    {
      question: "O que é uma Entity Home?",
      answer: "É a URL canônica controlada (como uma página de autor ou perfil institucional) onde a entidade declara formalmente seus atributos primários de identidade."
    }
  ],
};
