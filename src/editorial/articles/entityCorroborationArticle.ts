import { ArticleData } from "../types";
import { SIDNEY_AUTHOR, AUDIT_PUBLISHER } from "../registry";

export const entityCorroborationArticle: ArticleData = {
  id: "AUDITSEO-ARTICLE-ENTITY-006",
  slug: "/guias/corroboracao-de-entidade",
  title: "Corroboração de Entidade: quando outras fontes ajudam a sustentar quem você é",
  subtitle: "Uma organização pode declarar sua identidade, seus especialistas e suas áreas de atuação. A questão seguinte é descobrir quais fontes externas também reconhecem essas relações — e como diferenciar corroboração real de simples repetição.",
  description: "Guia completo sobre corroboração de entidades em SEO e AI Search: a distinção entre declaração e corroboração, taxonomia de fontes externas e auditoria de gaps de autoridade.",
  status: "PUBLISHED",
  type: "GUIDE",
  cluster: "ENTITY_AUTHORITY",
  secondaryClusters: ["SEO", "SEARCH_INTELLIGENCE", "AI_SEARCH"],
  author: SIDNEY_AUTHOR,
  publisher: AUDIT_PUBLISHER,
  datePublished: "2026-08-13",
  dateModified: "2026-08-13",
  readingTime: "17 min",
  featuredImage: {
    src: "/images/guides/corroboracao-de-entidade/featured.webp",
    alt: "Representação visual de uma entidade sendo sustentada por diferentes fontes e relações externas.",
    width: 1200,
    height: 630,
  },
  parent: { title: "Autoridade de Entidade", href: "/guias/entity-authority" },
  previous: { title: "Autoria em SEO: como conectar conteúdo, especialista e organização", href: "/guias/autoria-seo" },
  related: [
    { title: "O que é uma entidade em SEO", href: "/guias/o-que-e-entidade-seo", tag: "Guia" },
    { title: "Entity Home", href: "/guias/entity-home", tag: "Guia" },
    { title: "Desambiguação de Entidades", href: "/guias/desambiguacao-de-entidades", tag: "Guia" },
    { title: "Entity Consistency", href: "/guias/consistencia-de-entidade", tag: "Guia" },
    { title: "Autoria em SEO", href: "/guias/autoria-seo", tag: "Guia" },
    { title: "Search Intelligence Lab", href: "/estudos-busca-ia", tag: "Lab" },
  ],
  evidence: ["AUDITSEO-OBS-001: Reconhecimento de entidade por contexto temático", "AUDITSEO-OBS-002: Atributos temporais em AI Overviews"],
  commercialRelation: { title: "Diagnóstico de Corroboração e Autoridade", href: "/diagnostico" },
  topicGraph: {
    id: "AUDITSEO-ARTICLE-ENTITY-006",
    type: "GUIDE",
    cluster: "ENTITY_AUTHORITY",
    secondaryClusters: ["SEO", "SEARCH_INTELLIGENCE", "AI_SEARCH"],
    primaryEntity: "Corroboração de Entidade",
    relatedEntities: ["Sidney Santos", "AUDITSEO", "External Sources", "Trust Signals"],
    parent: "/guias/entity-authority",
    previous: "/guias/autoria-seo",
    evidenceLinks: ["AUDITSEO-OBS-001", "AUDITSEO-OBS-002"],
    commercialRelation: "/diagnostico",
    status: "PUBLISHED",
  },
  sections: [
    {
      id: "introducao-declaracao-vs-corroboracao",
      title: "1. A fronteira entre declaração e corroboração",
      level: 2,
      content: `<p>Até aqui, boa parte do trabalho de Entity Authority que estamos construindo na AUDITSEO acontece dentro de propriedades que controlamos. Podemos definir que Sidney Santos atua com SEO desde 2009. Podemos conectar Sidney à AUDITSEO. Podemos estruturar uma página de autor. Podemos publicar artigos. Podemos organizar dados estruturados. Podemos construir um corpus de conhecimento. Tudo isso é importante. Mas existe uma pergunta que não conseguimos responder apenas olhando para o próprio site: quem, além de nós mesmos, sustenta essas relações? Essa é a fronteira que separa declaração de corroboração.</p><p>Uma entidade não ganha corroboração apenas porque repete a mesma informação em suas próprias propriedades. Corroboração começa quando fontes independentes ou externas também sustentam fatos, relações ou associações relevantes sobre essa entidade. Para mim, a distinção é clara: <strong>Declaration ≠ Corroboration</strong>. Mais do que isso, uma simples menção não é necessariamente corroboração, e corroboração não se traduz automaticamente em autoridade sem o devido contexto e consistência.</p>`,
    },
    {
      id: "definicao-corroboracao-entidade",
      title: "2. O que é Corroboração de Entidade?",
      level: 2,
      content: `<div class=\"bg-neutral-900 border border-neutral-800 p-6 my-8 rounded-lg\"><p class=\"text-xs font-bold text-amber-500 mb-2 tracking-widest uppercase\">Definição Editorial AUDITSEO</p><p class=\"text-xl text-neutral-200 italic\">Corroboração de Entidade é o conjunto de evidências externas ou independentes que reforçam fatos, relações, atributos ou associações temáticas sobre uma pessoa, organização, marca ou outra entidade.</p></div><p>Corroboração não exige que diferentes fontes usem a mesma frase ou copiem a mesma biografia. O que importa é a compatibilidade dos fatos. Se a AUDITSEO declara Sidney Santos como seu fundador, e uma fonte externa independente sustenta essa mesma relação, temos um sinal corroborativo. Se a fonte apenas repete o texto do site oficial, temos replicação, o que possui um peso semântico inferior na construção de confiança algorítmica.</p>`,
    },
    {
      id: "owned-claims-vs-external",
      title: "3. Owned Claims vs. External Corroboration",
      level: 2,
      content: `<p>No ecossistema de Search Intelligence, trabalhamos com três níveis de evidência. O primeiro é o <strong>Owned Claim</strong>, onde a própria pessoa ou organização declara algo (ex: "Sidney Santos atua com SEO desde 2009"). O segundo é a <strong>External Reference</strong>, onde uma fonte externa simplesmente menciona a entidade. O terceiro e mais valioso é a <strong>External Corroboration</strong>, onde a fonte externa sustenta ativamente um fato ou relação compatível.</p><p>A diferença entre existir uma menção e sustentar uma relação é o que define a força do grafo. Uma menção pode ser acidental ou ruidosa; a corroboração exige nexo causal. Quando uma publicação independente entrevista o fundador e identifica sua relação com a organização, ela está fornecendo uma corroboração muito mais relevante do que um diretório que apenas lista o nome da empresa em uma tabela genérica.</p>`,
    },
    {
      id: "corroboracao-factual-tematica",
      title: "4. Corroboração Factual vs. Temática",
      level: 2,
      content: `<p>Dividimos a corroboração em duas dimensões proprietárias. A <strong>Factual Corroboration</strong> sustenta fatos objetivos: quem é o fundador, qual a data de criação, onde a empresa está localizada e quais são seus produtos. A <strong>Thematic Corroboration</strong> sustenta a associação da entidade a temas específicos. Por exemplo, quando fontes externas associam Sidney Santos aos temas de SEO e Search Intelligence, ou a AUDITSEO ao tema de Entity Authority.</p><p>As duas formas podem e devem coexistir. Como demonstramos na <a href=\"/estudos-busca-ia/reconhecimento-de-entidade-por-contexto\">Observação #001</a> do Lab, a associação temática não é garantida apenas por declaração própria. O reconhecimento contextual é sensível à densidade de referências externas que sustentam a relação entre o especialista e o tópico de conhecimento.</p>`,
    },
    {
      id: "corroboracao-consistencia",
      title: "5. Corroboração e a armadilha da inconsistência",
      level: 2,
      content: `<p>Uma fonte externa não deve ser tratada automaticamente como verdade absoluta. Ela também pode estar desatualizada (stale), ser conflitante, incompleta ou simplesmente incorreta. Portanto, <strong>External ≠ Correct</strong>. A corroboração externa deve sempre passar por uma revisão de consistência.</p><p>Na <a href=\"/estudos-busca-ia/entidade-correta-atributo-incorreto-ai-search\">Observação #002</a>, vimos como atributos divergentes em fontes externas podem fragmentar a identidade de uma entidade perante sistemas de IA. A gestão de Entity Authority exige não apenas buscar novas referências, mas monitorar e reconciliar as menções existentes para garantir que o ecossistema digital não emita sinais contraditórios sobre marcos fundamentais da marca ou do autor.</p>`,
    },
    {
      id: "taxonomia-fontes-externas",
      title: "6. Taxonomia de fontes externas: onde a corroboração reside",
      level: 2,
      content: `<p>Nem todas as fontes possuem o mesmo valor corroborativo. Organizamos as referências em cinco categorias principais:</p><ul class=\"space-y-4\"><li><strong>Editorial Sources:</strong> Artigos, entrevistas, notícias e contribuições em veículos independentes.</li><li><strong>Professional Profiles:</strong> Plataformas profissionais e diretórios qualificados que validam a trajetória do especialista.</li><li><strong>Organizational References:</strong> Menções vindas de parceiros, eventos do setor e entidades institucionais.</li><li><strong>Research References:</strong> Citações em estudos, benchmarks e referências metodológicas.</li><li><strong>Public Data:</strong> Registros oficiais e bases de dados governamentais ou setoriais.</li></ul><p>É vital distinguir entre a contagem de fontes e a independência das fontes. Uma release distribuída em dezenas de sites pode parecer múltiplas fontes, mas se a origem é única e o conteúdo é idêntico, trata-se de distribuição, não de corroboração independente.</p>`,
    },
    {
      id: "corroboracao-nao-link-building",
      title: "7. Por que corroboração não é apenas 'Link Building'",
      level: 2,
      content: `<p>Eu não trataria corroboração como um novo nome para link building. O problema é mais amplo: estamos tentando entender quais fontes externas ajudam a sustentar fatos e relações sobre uma entidade. Um link pode ser parte de uma fonte corroborativa, mas um link sozinho não é corroboração automática. Da mesma forma, uma menção sem link (<em>unlinked mention</em>) ainda pode sustentar um fato relevante no grafo de conhecimento.</p><p>Da mesma forma, corroboração não é Digital PR automático. Publicar releases ou comprar matérias em portais de baixa autoridade pode gerar volume de distribuição, mas raramente constrói a independência e a confiança necessárias para a autoridade de entidade real. A corroboração legítima nasce da produção de conhecimento próprio que outros consideram digno de referência.</p>`,
    },
    {
      id: "auditoria-corroboracao-entidade",
      title: "8. Como realizar uma Entity Corroboration Audit",
      level: 2,
      content: `<p>Para avaliar a saúde da corroboração de uma marca, seguimos um protocolo de 10 etapas:</p><ol class=\"space-y-2\"><li>Definir a Entidade Canônica.</li><li>Definir os Fatos Canônicos (marcos, datas, relações).</li><li>Mapear as Relações Centrais.</li><li>Mapear as Declarações Próprias (Owned Claims).</li><li>Descobrir Referências Externas.</li><li>Classificar a Origem das Fontes.</li><li>Verificar a Independência das Fontes.</li><li>Verificar a Consistência dos Dados.</li><li>Identificar Gaps de Corroboração.</li><li>Priorizar a Reconciliação e Medir Novamente.</li></ol><p>Um <strong>Corroboration Gap</strong> existe quando uma relação estratégica importante — como a associação entre Sidney Santos e Entity Authority — é declarada e sustentada internamente, mas possui pouca ou nenhuma evidência externa observável. Identificar esses gaps é o primeiro passo para uma estratégia de autoridade baseada em Search Intelligence.</p>`,
    },
    {
      id: "corroboracao-ai-search",
      title: "9. Corroboração no horizonte do AI Search",
      level: 2,
      content: `<p>Em ambientes de busca generativa, a corroboração externa ganha um peso crítico. Quando um sistema precisa representar uma pessoa ou organização, ele sintetiza informações vindas de um ecossistema distribuído. A representação externa da marca dita como a IA irá descrever seus atributos e relações.</p><p>Como vimos nas observações do Lab, a resposta final da IA reflete a densidade e a consistência do ecossistema. Se a corroboração é fraca ou conflitante, a resposta gerada será ambígua ou incorreta. Portanto, a gestão de corroboração é, na prática, a gestão da identidade pública da organização perante a inteligência artificial.</p>`,
    },
    {
      id: "conclusao-fechamento-cluster",
      title: "10. Conclusão: o ecossistema além do domínio",
      level: 2,
      content: `<p>Até aqui, conseguimos controlar uma parte importante da arquitetura de uma entidade. Podemos dizer quem somos, definir relações, estruturar autoria, publicar conhecimento e manter nossos próprios dados consistentes. Mas a web não termina nas propriedades que controlamos. É por isso que considero corroboração uma camada indispensável de Entity Authority.</p><p>Ela nos obriga a sair da pergunta "o que estamos dizendo sobre nós mesmos?" e entrar em outra: "o que o restante do ecossistema também consegue sustentar?". A resposta nem sempre será completa; encontraremos referências, gaps e contradições. É exatamente aí que Search Intelligence deixa de ser apenas observação de ranking e passa a funcionar como leitura da identidade pública de uma organização. Este guia encerra nosso primeiro cluster sobre Autoridade de Entidade, consolidando a base necessária para marcas que desejam liderar na nova era da busca.</p>`,
    },
  ],
  faq: [
    {
      question: "Qual a diferença entre declaração e corroboração?",
      answer: "Declaração é o que a própria entidade afirma sobre si mesma em seus canais oficiais. Corroboração é quando fontes externas e independentes sustentam esses mesmos fatos e relações."
    },
    {
      question: "Uma menção sem link conta como corroboração?",
      answer: "Sim. Para o grafo de conhecimento, a sustentação de um fato ou relação é mais importante do que a presença de um hyperlink, embora o link facilite a descoberta e a navegação."
    },
    {
      question: "O que é um Corroboration Gap?",
      answer: "É quando uma informação estratégica sobre a marca é declarada internamente, mas não possui evidências externas que a confirmem na web aberta."
    }
  ],
};
