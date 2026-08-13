import { ArticleData } from "../types";
import { SIDNEY_AUTHOR, AUDIT_PUBLISHER } from "../registry";

export const autoriaSeoArticle: ArticleData = {
  id: "AUDITSEO-ARTICLE-ENTITY-005",
  slug: "/guias/autoria-seo",
  title: "Autoria em SEO: como conectar conteúdo, especialista e organização",
  subtitle: "Uma assinatura no topo da página não constrói, sozinha, uma relação de autoria. Entenda como conectar pessoa, conteúdo, expertise, organização, pesquisa e dados estruturados em uma arquitetura editorial coerente.",
  description: "Guia profundo sobre autoria em SEO: a transição da byline visual para a arquitetura de entidades, conectando autores, corpus de conhecimento e organizações.",
  status: "PUBLISHED",
  type: "GUIDE",
  cluster: "ENTITY_AUTHORITY",
  secondaryClusters: ["SEO", "SEARCH_INTELLIGENCE", "AI_SEARCH"],
  author: SIDNEY_AUTHOR,
  publisher: AUDIT_PUBLISHER,
  datePublished: "2026-08-13",
  dateModified: "2026-08-13",
  readingTime: "18 min",
  featuredImage: {
    src: "/images/guides/autoria-seo/featured.webp",
    alt: "Representação visual de um autor conectado a conteúdos, organização, pesquisa e áreas de conhecimento.",
    width: 1200,
    height: 630,
  },
  parent: { title: "Autoridade de Entidade", href: "/guias/entity-authority" },
  previous: { title: "Entity Consistency: quando informações conflitantes fragmentam uma identidade", href: "/guias/consistencia-de-entidade" },
  related: [
    { title: "O que é uma entidade em SEO", href: "/guias/o-que-e-entidade-seo", tag: "Guia" },
    { title: "Entity Home", href: "/guias/entity-home", tag: "Guia" },
    { title: "Desambiguação de Entidades", href: "/guias/desambiguacao-de-entidades", tag: "Guia" },
    { title: "Entity Consistency", href: "/guias/consistencia-de-entidade", tag: "Guia" },
    { title: "Search Intelligence Lab", href: "/estudos-busca-ia", tag: "Lab" },
  ],
  evidence: ["AUDITSEO-OBS-001: Reconhecimento de entidade por contexto temático", "AUDITSEO-OBS-002: Atributos temporais em AI Overviews"],
  commercialRelation: { title: "Diagnóstico de Autoria e Autoridade", href: "/diagnostico" },
  topicGraph: {
    id: "AUDITSEO-ARTICLE-ENTITY-005",
    type: "GUIDE",
    cluster: "ENTITY_AUTHORITY",
    secondaryClusters: ["SEO", "SEARCH_INTELLIGENCE", "AI_SEARCH"],
    primaryEntity: "Autoria (SEO)",
    relatedEntities: ["Sidney Santos", "AUDITSEO", "Entity Home", "Knowledge Graph"],
    parent: "/guias/entity-authority",
    previous: "/guias/consistencia-de-entidade",
    next: "PLANNED",
    evidenceLinks: ["AUDITSEO-OBS-001", "AUDITSEO-OBS-002"],
    commercialRelation: "/diagnostico",
    status: "PUBLISHED",
  },
  sections: [
    {
      id: "introducao-arquitetura-autoria",
      title: "1. Da byline visual à arquitetura de entidades",
      level: 2,
      content: `<p>É relativamente simples colocar meu nome no topo deste artigo. Sidney Santos. Também é simples adicionar uma foto, algumas linhas de biografia e um link para uma página de autor. Mas nenhuma dessas ações, isoladamente, responde às perguntas que considero realmente importantes: Quem é esse Sidney Santos? É a mesma pessoa apresentada nos outros conteúdos? Qual é sua relação com a AUDITSEO? O que essa pessoa publicou? Sobre quais assuntos existe produção consistente? A organização que publica este artigo reconhece essa mesma relação? Os dados estruturados representam a mesma pessoa? E existe algo além da própria declaração de autoria sustentando essa associação?</p><p>É nesse ponto que autoria deixa de ser apenas um elemento visual da página e passa a fazer parte da arquitetura de entidades. Eu não considero uma assinatura evidência suficiente de expertise. O que me interessa é a relação entre quem assina, o que essa pessoa publica, o histórico que apresenta e o corpo de conhecimento que sustenta essa associação. Autoria não é apenas declarar quem escreveu um conteúdo. É construir uma relação coerente e verificável entre uma pessoa, aquilo que ela publica, os temas sobre os quais demonstra conhecimento e a organização responsável por esse conteúdo.</p>`,
    },
    {
      id: "autoria-relacao-entidades",
      title: "2. Autoria é uma relação entre entidades",
      level: 2,
      content: `<p>Quando olho um artigo, não penso apenas em quem aparece na byline. Penso no conjunto de relações que sustenta aquela assinatura. Na modelagem de dados moderna, Person (Pessoa), Article (Artigo) e Organization (Organização) são entidades distintas no grafo de conhecimento. Autoria, publicação e fundação são relações ou funções diferentes que conectam esses nós.</p><p>Como exploramos no guia <a href=\"/guias/o-que-e-entidade-seo\">O que é uma entidade em SEO</a>, uma entidade precisa ser distinguível dentro de um contexto. No caso da autoria, a relação se desdobra em múltiplas camadas: Person → author → Article; Organization → publisher → Article; Person → founder → Organization; e Person → publishes → Body of Knowledge. A coerência entre essas pontas é o que permite que motores de busca e sistemas de IA resolvam a identidade do autor com precisão, atribuindo-lhe a autoridade temática correspondente ao seu corpus de trabalho.</p>`,
    },
    {
      id: "byline-nao-arquitetura",
      title: "3. Byline não é arquitetura de autoria",
      level: 2,
      content: `<p>A byline — aquele pequeno bloco com nome e foto — é apenas a manifestação visível mais imediata da autoria. No entanto, muitos projetos de SEO falham ao acreditar que a byline resolve o problema da autoridade. Imagine um cenário onde um artigo assinado por "Sidney Santos" não possui uma página de autor dedicada, não menciona a organização, apresenta uma biografia divergente de outras páginas e possui um schema inconsistente. Para o motor de busca, esse sinal é fraco e ruidoso.</p><p>A verdadeira arquitetura de autoria exige que a byline esteja ancorada em uma <a href=\"/guias/entity-home\">Entity Home</a> canônica, onde a trajetória, as publicações e as relações do autor são organizadas de forma estruturada. Sem esse lastro, a assinatura visual é apenas texto morto, incapaz de transferir autoridade real para o conteúdo ou para a marca emissora.</p>`,
    },
    {
      id: "papeis-editoriais-distincao",
      title: "4. Autor, revisor, especialista e publisher não são a mesma coisa",
      level: 2,
      content: `<p>A precisão taxonômica é fundamental para a clareza da entidade. No ecossistema AUDITSEO, distinguimos claramente os papéis: o <strong>Author</strong> (Autor) é quem produz o raciocínio e a redação original; o <strong>Reviewer</strong> (Revisor) valida a precisão técnica; o <strong>Expert/Contributor</strong> fornece insights especializados; e o <strong>Publisher</strong> (Editor) é a organização responsável pela emissão do conhecimento. No caso deste guia, Sidney Santos atua como Author, enquanto a AUDITSEO atua como Publisher. Não atribuímos papéis falsos apenas para gerar sinais; a honestidade da relação é o que garante a consistência a longo prazo perante auditorias humanas e algorítmicas.</p>`,
    },
    {
      id: "autor-como-entidade",
      title: "5. O autor é uma entidade: atributos e corpus",
      level: 2,
      content: `<p>Uma entidade do tipo Person possui nome canônico, histórico profissional, afiliações, perfis oficiais e, crucialmente, um corpus de publicações. Antes de implementarmos qualquer schema, precisamos saber: qual pessoa específica está sendo representada? Como demonstramos na <a href=\"/estudos-busca-ia/reconhecimento-de-entidade-por-contexto\">Observação #001</a> do Lab, o reconhecimento de uma entidade depende da densidade de co-ocorrência entre o nome e os tópicos de especialidade.</p><p>Para Sidney Santos, esse corpus não é abstrato. Ele é composto fisicamente por este mini-cluster de guias sobre Entity Authority, pelas pesquisas publicadas no <a href=\"/estudos-busca-ia\">Search Intelligence Lab</a> e pelo histórico de atuação em SEO desde 2009. Essa massa crítica de conhecimento associado é o que sustenta a relação de autoria no grafo semântico.</p>`,
    },
    {
      id: "author-entity-home",
      title: "6. Uma página de autor precisa funcionar como Entity Home",
      level: 2,
      content: `<p>Uma página de autor que apenas repete uma mini biografia não resolve o problema de identidade. Ela deve ser estruturada como uma Entity Home completa (ex: <a href=\"/autor/sidney-santos\">/autor/sidney-santos</a>), organizando identidade, trajetória, organização, publicações, tópicos, perfis e relações. Ela é o hub central de verdade para aquela pessoa dentro do domínio.</p><p>Nesta página, a biografia editorial deve ser adaptada ao contexto sem perder a consistência factual. Sidney Santos pode ter uma bio focada em Search Intelligence para um artigo técnico e outra focada em estratégia de negócios para um portal corporativo, desde que os marcos fundamentais — como o ano de início em 2009 e a fundação da AUDITSEO — permaneçam idênticos, conforme discutido no guia de <a href=\"/guias/consistencia-de-entidade\">Entity Consistency</a>.</p>`,
    },
    {
      id: "cinco-camadas-autoria",
      title: "7. O Framework das Cinco Camadas de Autoria",
      level: 2,
      content: `<p>Para diagnosticar a maturidade da autoria em um projeto, utilizamos um modelo qualitativo de cinco camadas:</p><ul class=\"space-y-4\"><li><strong>1. Declared Authorship:</strong> A página simplesmente declara visualmente quem escreveu o conteúdo.</li><li><strong>2. Structured Authorship:</strong> Dados estruturados (JSON-LD) representam formalmente a relação entre o artigo e o autor.</li><li><strong>3. Connected Authorship:</strong> O autor, sua página de Entity Home, a organização e o conteúdo estão conectados por links bidirecionais e IDs únicos.</li><li><strong>4. Knowledge-Backed Authorship:</strong> Existe um corpo consistente de conhecimento (artigos, guias, pesquisas) que sustenta a expertise declarada.</li><li><strong>5. Externally Corroborated Authorship:</strong> Fontes externas e independentes sustentam e validam as relações e a autoridade da entidade.</li></ul><p>Este não é um score de ranking, mas um modelo diagnóstico para Search Intelligence. O objetivo é mover a marca da simples declaração para a corroboração sistêmica.</p>`,
    },
    {
      id: "pesquisa-propria-autoria",
      title: "8. Pesquisa própria: a camada superior da autoria",
      level: 2,
      content: `<p>A produção investigativa própria, como a realizada no <a href=\"/estudos-busca-ia\">Search Intelligence Lab</a>, adiciona uma camada de profundidade que a simples redação de artigos informativos não alcança. Quando um autor publica observações metodológicas (como as <a href=\"/estudos-busca-ia/reconhecimento-de-entidade-por-contexto\">Observações #001</a> e <a href=\"/estudos-busca-ia/entidade-correta-atributo-incorreto-ai-search\">#002</a>), ele não está apenas repetindo informações; ele está gerando ganho de informação (<em>information gain</em>) para o ecossistema.</p><p>Essa atividade investigativa vinculada à entidade Sidney Santos e à AUDITSEO cria um sinal de autoridade baseado em evidência, não apenas em opinião. No entanto, é vital manter a distinção: o Lab representa observação e metodologia, com suas devidas limitações, e não deve ser confundido com "prova absoluta" de algoritmos secretos.</p>`,
    },
    {
      id: "autoria-ai-search",
      title: "9. Autoria, E-E-A-T e o desafio do AI Search",
      level: 2,
      content: `<p>O problema da autoria torna-se ainda mais crítico em ambientes generativos. Quando um sistema de IA precisa representar quem produziu determinado conhecimento, que sinais públicos existem para relacionar pessoa, conteúdo e organização? Não afirmamos que o uso de schema garante citação em AI Overviews, mas a ausência de sinais estruturados certamente dificulta a recuperação correta dos atributos da entidade.</p><p>Autoria não deve ser tratada como um "hack de E-E-A-T". Um autor famoso assinando um conteúdo fraco não corrige a baixa qualidade do material. A combinação necessária para a autoridade moderna exige qualidade de conteúdo, clareza de entidade, evidência empírica, consistência de atributos e, futuramente, corroboração externa.</p>`,
    },
    {
      id: "conclusao-arquitetura-futuro",
      title: "10. Conclusão: a assinatura como porta de entrada",
      level: 2,
      content: `<p>Eu não acredito que autoria em SEO deva ser reduzida a uma foto, uma pequena biografia e uma propriedade author no schema. Esses elementos são úteis, mas são apenas partes visíveis de uma relação muito maior. Quando coloco meu nome neste artigo, essa assinatura precisa conseguir se conectar a uma pessoa identificável, a uma trajetória coerente, à AUDITSEO, aos outros conteúdos que publiquei e aos temas que venho investigando.</p><p>A assinatura diz quem escreveu. A arquitetura de autoria precisa ajudar a explicar quem é essa pessoa, qual sua relação com a publicação e que corpo de conhecimento existe por trás daquela assinatura. E então aparece a próxima pergunta: quem, além de nós mesmos, sustenta essas relações? Esse é o tema do nosso próximo guia: <strong>Corroboração de Entidade</strong> (Planned).</p>`,
    },
  ],
  faq: [
    {
      question: "O que é arquitetura de autoria em SEO?",
      answer: "É o conjunto de sinais visuais, estruturais (schema) e contextuais que conectam um autor a um conteúdo, a uma organização e a um corpo de conhecimento específico."
    },
    {
      question: "Por que a byline sozinha não é suficiente?",
      answer: "A byline é apenas um elemento visual. Sem uma Entity Home, dados estruturados consistentes e um corpus de conteúdo relacionado, o motor de busca tem dificuldade em validar a autoridade real do autor."
    },
    {
      question: "Como a pesquisa própria ajuda na autoria?",
      answer: "A produção de evidências empíricas e metodológicas gera ganho de informação real, demonstrando expertise prática que transcende a simples compilação de informações de terceiros."
    }
  ],
};
