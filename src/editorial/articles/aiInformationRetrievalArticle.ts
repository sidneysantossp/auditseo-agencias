import { ArticleData } from "../types";
import { SIDNEY_AUTHOR, AUDIT_PUBLISHER } from "../registry";

export const aiInformationRetrievalArticle: ArticleData = {
  id: "AUDITSEO-ARTICLE-AISEARCH-008",
  slug: "/guias/recuperacao-de-informacao-ai-search",
  title: "Recuperação de informação em AI Search: fontes, contexto e conhecimento",
  subtitle: "Como pensar a recuperação de informação em sistemas de AI Search sem presumir arquiteturas universais. Entenda Information Retrieval, RAG, Grounding, indexação, corpora e os limites do que conseguimos observar externamente.",
  description: "Guia canônico da AUDITSEO sobre Information Retrieval e RAG em AI Search, separando conceitos gerais, implementações documentadas e limites metodológicos de observação.",
  status: "PUBLISHED",
  type: "SUPPORTING",
  cluster: "AI_SEARCH",
  secondaryClusters: ["SEARCH_INTELLIGENCE", "ENTITY_AUTHORITY", "SEO"],
  author: SIDNEY_AUTHOR,
  publisher: AUDIT_PUBLISHER,
  datePublished: "2026-08-14",
  dateModified: "2026-08-14",
  readingTime: "18 min",
  featuredImage: {
    src: "/images/guides/recuperacao-de-informacao-ai-search/featured.webp",
    alt: "Representação abstrata de fluxos de recuperação léxica e semântica convergindo para uma camada central de síntese.",
    width: 1200,
    height: 630,
  },
  parent: { title: "AI Search", href: "/guias/ai-search" },
  previous: { title: "AI Overviews: Como a Busca Generativa Está Mudando a SERP", href: "/guias/ai-overviews" },
  related: [
    { title: "AI Search", href: "/guias/ai-search", tag: "Guia" },
    { title: "AI Overviews", href: "/guias/ai-overviews", tag: "Guia" },
    { title: "Entity Authority", href: "/guias/o-que-e-entidade-seo", tag: "Guia" },
    { title: "Search Intelligence", href: "/guias/search-intelligence", tag: "Guia" },
  ],
  evidence: ["AUDITSEO-OBS-001", "AUDITSEO-OBS-002"],
  commercialRelation: { title: "Diagnóstico de Autoridade e AI Search", href: "/diagnostico" },
  topicGraph: {
    id: "AUDITSEO-ARTICLE-AISEARCH-008",
    type: "SUPPORTING",
    cluster: "AI_SEARCH",
    secondaryClusters: ["SEARCH_INTELLIGENCE", "ENTITY_AUTHORITY", "SEO"],
    primaryEntity: "Information Retrieval",
    relatedEntities: ["RAG", "Grounding", "Corpus", "Index", "Query Fan-out", "Sidney Santos"],
    parent: "/guias/ai-search",
    previous: "/guias/ai-overviews",
    evidenceLinks: ["AUDITSEO-OBS-001", "AUDITSEO-OBS-002"],
    commercialRelation: "/diagnostico",
    status: "PUBLISHED",
  },
  sections: [
    {
      id: "introducao",
      title: "1. Introdução: o problema anterior à resposta gerada",
      level: 2,
      content: `<p>Uma resposta generativa exibe o produto final de um processo complexo. Quando o usuário digita uma consulta, a interface apresenta um texto coeso, acompanhado opcionalmente de notas de rodapé, carrosséis ou links de apoio. No entanto, para compreender como essa resposta foi construída, precisamos separar duas perguntas fundamentais que frequentemente aparecem misturadas nas discussões de mercado:</p><ol class=\"space-y-2 list-decimal list-inside my-4\"><li><strong>Que informação estava disponível para o sistema compor a resposta?</strong></li><li><strong>Como essa informação foi processada, combinada e redigida na interface?</strong></li></ol><p>O primeiro problema pertence ao território da <strong>recuperação de informação</strong> (Information Retrieval). O segundo envolve geração e síntese de linguagem. Misturar as duas etapas gera a maior parte das simplificações que observamos atualmente, como a crença de que otimizar para LLMs consiste apenas em escrever textos persuasivos ou manipular prompt templates.</p><p>Para mim, a tese que orienta nossa análise na AUDITSEO é direta:</p><blockquote class=\"border-l-4 border-amber-500 pl-4 my-4 italic text-neutral-300\"><strong>Antes de uma resposta generativa existir, há um problema anterior: quais informações o sistema conseguiu recuperar para compor o contexto. Mas retrieval não é um mecanismo único, e plataformas diferentes podem acessar dados de maneiras distintas.</strong></blockquote><p>Neste guia, desdobramos os conceitos fundamentais de Information Retrieval, RAG (Retrieval-Augmented Generation), indexação, corpora, recuperação léxica e semântica, e os limites metodológicos daquilo que conseguimos observar externamente em ecossistemas de AI Search.</p>`,
    },
    {
      id: "information-retrieval-definition",
      title: "2. O que é Information Retrieval (IR)?",
      level: 2,
      content: `<p>Para evitar confusões conceituais, é preciso recorrer à base acadêmica e técnica do campo. <strong>Information Retrieval (IR)</strong> não é uma invenção recente da era dos modelos generativos; é uma disciplina consolidada da ciência da computação e da ciência da informação [4].</p><div class=\"bg-neutral-900 border border-neutral-800 p-6 rounded-lg my-6\"><h3 class=\"text-amber-500 font-bold mb-3 font-mono text-sm uppercase tracking-wider\">Definição Editorial — Information Retrieval</h3><p class=\"text-sm leading-relaxed text-neutral-300\">Information Retrieval é o campo que estuda processos de localizar e recuperar informação relevante (documentos, passagens, entidades ou dados estruturados) a partir de uma coleção ou espaço de informação diante de uma necessidade informacional expressa por uma consulta [4].</p></div><p>Em sistemas tradicionais de busca, o objetivo principal do IR era retornar uma lista ordenada de documentos (URLs) indexados com base em correspondência de termos e relevância algorítmica. Em ecossistemas de <strong>AI Search</strong>, o papel do IR mudou de figura: ele continua localizando documentos ou passagens, mas o resultado dessa recuperação não é exibido apenas como link; ele é repassado como contexto adicional para alimentar um modelo gerador [3].</p>`,
    },
    {
      id: "retrieval-generation-synthesis-grounding",
      title: "3. Retrieval vs. Generation vs. Synthesis vs. Grounding",
      level: 2,
      content: `<p>Um dos equívocos mais frequentes no ecossistema de otimização orgânica é tratar termos técnicos como sinônimos intercambiáveis. Na governança de evidências da AUDITSEO, separamos rigorosamente quatro funções distintas:</p><ul class=\"space-y-3 my-4\"><li><strong>Retrieval (Recuperação):</strong> O processo de varrer um índice, base vetorial ou corpus para selecionar candidatos (documentos, passagens ou trechos) relevantes à consulta [3] [4].</li><li><strong>Generation (Geração):</strong> A capacidade do modelo de linguagem de produzir texto com base em seus parâmetros e nos tokens fornecidos [3].</li><li><strong>Synthesis (Síntese):</strong> O ato de combinar, reconciliar e organizar passagens recuperadas em um texto coeso e direto para o usuário.</li><li><strong>Grounding (Aterramento):</strong> O mecanismo técnico que vincula a geração a fontes externas ou trechos recuperados, reduzindo alucinações ao condicionar a resposta ao contexto fornecido [3].</li></ul><p>Confundir recuperação com geração é o equivalente a supor que a biblioteca de uma universidade (o corpus e o sistema de busca) escreve os livros que os pesquisadores publicam. O sistema de recuperação fornece o material bruto; o modelo gerador formula o texto com base nesse material e em seu treinamento prévio.</p>`,
    },
    {
      id: "rag-paradigm",
      title: "4. O que é RAG (Retrieval-Augmented Generation)?",
      level: 2,
      content: `<p>O paradigma de <strong>Retrieval-Augmented Generation (RAG)</strong>, formalizado por Patrick Lewis e colaboradores no paper seminal de 2020 (Meta AI / NYU) [3], resolve uma limitação inerente dos grandes modelos de linguagem: a estanqueidade de seu conhecimento paramétrico e a propensão a gerar alucinações quando confrontados com fatos atualizados ou específicos.</p><p>Em termos arquiteturais gerais, uma pipeline de RAG opera em duas fases principais:</p><ol class=\"space-y-2 list-decimal list-inside my-4\"><li><strong>Fase de Recuperação:</strong> Diante de uma consulta, um componente de recuperação busca passagens em um corpus externo indexado [3].</li><li><strong>Fase de Geração:</strong> O modelo de linguagem recebe a consulta original combinada com as passagens recuperadas injetadas no prompt, gerando uma resposta fundamentada nesses documentos [3].</li></ol><p>Documentações oficiais de motores como o Google Search confirmam que funcionalidades baseadas em resumos generativos utilizam abordagens de aterramento e recuperação sobre o índice central de busca, garantindo que a resposta parta de evidências reais da web [1] [2].</p>`,
    },
    {
      id: "rag-not-ai-search",
      title: "5. RAG ≠ AI Search inteiro",
      level: 2,
      content: `<p>Um erro conceitual recorrente no mercado é tratar <strong>RAG</strong> como sinônimo de <strong>AI Search</strong>. RAG é uma técnica arquitetural de integração entre recuperação e geração de texto [3]. AI Search é um ecossistema comercial e de experiência de usuário que abrange interfaces de busca, assistentes conversacionais, motores answer-first, indexação em larga escala, representação de entidades, políticas de citação e governança de exibição.</p><p>Além disso, nem todo produto de busca generativa opera exclusivamente por meio de uma pipeline RAG clássica. Algumas superfícies combinam conhecimento paramétrico profundo com ferramentas de execução de código, bases de conhecimento proprietárias ou múltiplas chamadas de API em cascata. Reduzir AI Search a uma simples arquitetura RAG desconsidera a complexidade de produto e as restrições de interface observadas em campo.</p>`,
    },
    {
      id: "rag-not-search-engine",
      title: "6. RAG ≠ Search Engine",
      level: 2,
      content: `<p>Da mesma forma, <strong>RAG</strong> não equivale a um <strong>Search Engine</strong> (mecanismo de busca). Um mecanismo de busca é um sistema complexo de engenharia projetado para rastrear (crawl), indexar, calcular autoridade, resolver desambiguação de entidades, classificar bilhões de documentos e responder a consultas em milissegundos.</p><p>Uma pipeline RAG pode ser construída sobre uma base de dados interna de uma empresa contendo apenas quinhentos documentos PDF, sem qualquer relação com a web aberta. Portanto, um motor de busca pode utilizar técnicas de RAG em sua camada de apresentação (como nas AI Overviews), mas um sistema RAG isolado não constitui, por si só, um mecanismo de busca global.</p>`,
    },
    {
      id: "parametric-vs-retrieved",
      title: "7. Knowledge Parametric vs. Retrieved Context",
      level: 2,
      content: `<p>Quando analisamos uma resposta gerada por inteligência artificial, enfrentamos uma bifurcação conceitual importante:</p><ul class=\"space-y-3 my-4\"><li><strong>Conhecimento Paramétrico (Parametric Knowledge):</strong> Informações codificadas nos pesos e nas conexões internas do modelo durante seu treinamento prévio [3].</li><li><strong>Contexto Recuperado (Retrieved Context):</strong> Informações externas injetadas dinamicamente no prompt no momento da consulta [3].</li></ul><p>Em modelos proprietários de mercado (como os que alimentam assistentes comerciais ou motores de busca), a resposta gerada é frequentemente o resultado de uma fusão opaca entre o que o modelo já "sabia" parametricamente e o que foi recuperado de última hora pela infraestrutura de busca. Para analistas de Search Intelligence, isso impõe um limite severo: em sistemas fechados, não temos como decompor matematicamente qual proporção da resposta veio do parâmetro do modelo e qual proporção veio do documento recuperado.</p>`,
    },
    {
      id: "corpus-and-indexes",
      title: "8. De onde a informação pode ser recuperada? Corpora e Índices",
      level: 2,
      content: `<p>O espaço de onde a informação é extraída em um sistema de recuperação é denominado <strong>corpus</strong> (ou coleção) [4]. Diferentes superfícies de AI Search operam sobre corpora distintos:</p><ul class=\"space-y-3 my-4\"><li><strong>Índice Web Global:</strong> O vasto repositório de páginas rastreadas pela infraestrutura central do motor de busca [1] [2].</li><li><strong>Bases Vetoriais Especializadas:</strong> Coleções de documentos fatiados e convertidos em embeddings para recuperação semântica em ambientes corporativos ou verticais.</li><li><strong>Bases de Conhecimento Estruturadas:</strong> Grafos de conhecimento, tabelas e diretórios de entidades curados.</li><li><strong>Repositórios Conectados e Ferramentas:</strong> APIs externas, calculadoras, bases de clima ou feeds de notícias em tempo real acessados via function calling.</li></ul><p>Afirmar que todas as plataformas de AI Search utilizam exatamente o mesmo corpus ou o mesmo índice é um erro metodológico. O comportamento de recuperação varia de acordo com a natureza da coleção indexada.</p>`,
    },
    {
      id: "lexical-vs-semantic",
      title: "9. Lexical vs. Semantic Retrieval",
      level: 2,
      content: `<p>Os sistemas modernos de recuperação combinam diferentes abordagens para localizar candidatos relevantes:</p><ul class=\"space-y-3 my-4\"><li><strong>Recuperação Léxica (Lexical Retrieval):</strong> Baseada na correspondência exata ou aproximada de termos (ex: algoritmos clássicos como BM25 e TF-IDF). Excelente para encontrar nomes próprios, códigos, siglas e termos específicos [4].</li><li><strong>Recuperação Semântica (Semantic Retrieval):</strong> Baseada na similaridade de vetores (embeddings) em espaços de alta dimensão, capturando intenções conceituas mesmo quando os termos exatos não coincidem no texto [3].</li><li><strong>Abordagens Híbridas (Hybrid Retrieval):</strong> A prática padrão na indústria de combinar pontuações léxicas e semânticas por meio de re-rankers (cross-encoders), maximizando a precisão na seleção de passagens.</li></ul><p>Compreender essa dualidade explica por que otimizar apenas o vocabulário (SEO léxico) ou apenas a abstração semântica é insuficiente; a marca precisa ser encontrada tanto pela correspondência exata de suas entidades quanto pela coesão de seu contexto semântico.</p>`,
    },
    {
      id: "query-expansion-fan-out",
      title: "10. Query Expansion e Query Fan-out",
      level: 2,
      content: `<p>Quando uma consulta do usuário chega a um sistema avançado de AI Search, ela raramente é processada de forma estática. Documentações técnicas e observações de mercado apontam para mecanismos como:</p><ul class=\"space-y-3 my-4\"><li><strong>Query Expansion (Expansão de Consulta):</strong> O sistema enriquece a consulta original com sinônimos, entidades relacionadas e termos correlatos para ampliar o leque de documentos recuperados [4].</li><li><strong>Query Fan-out (Disparo Concorrente):</strong> O sistema desmembra uma pergunta complexa em múltiplas subconsultas paralelas, buscando diferentes facetas, perspectivas ou fontes complementares antes de consolidar o contexto [1] [2].</li></ul><p>Essa dinâmica explica por que uma única consulta aparente pode disparar fluxos de recuperação em direções imprevistas, exigindo que o conteúdo institucional seja claro o suficiente para ser capturado em diferentes recortes de subconsultas.</p>`,
    },
    {
      id: "unknown-and-boundaries",
      title: "11. Limites de observação externa e o território do Unknown",
      level: 2,
      content: `<p>Em conformidade com a nossa política de <em>Evidence Governance</em>, é imperativo declarar o que permanece no território do desconhecido (<strong>Unknown</strong>):</p><ul class=\"space-y-3 my-4\"><li>Não temos acesso aos pesos internos dos modelos de re-ranking proprietários.</li><li>Não podemos inspecionar o código fonte ou os limiares de corte (thresholds) das bases vetoriais dos sistemas comerciais.</li><li>Não existe fórmula mágica garantida para forçar a inclusão de uma página no contexto recuperado de um LLM fechado.</li></ul><p>O trabalho de Search Intelligence consiste em auditar a realidade observável, e não em inventar os segredos da caixa preta algorítmica.</p>`,
    },
    {
      id: "auditseo-retrieval-model",
      title: "12. O Modelo Editorial AUDITSEO de Retrieval",
      level: 2,
      content: `<p>Para organizar nossa análise, estruturamos o **Modelo Editorial AUDITSEO de Retrieval**:</p><div class=\"bg-neutral-900 border border-neutral-800 p-6 rounded-lg my-6 font-mono text-xs text-amber-500/90 space-y-2\"><div>QUERY (Consulta do Usuário)</div><div>↓</div><div>INFORMATION NEED (Necessidade Informacional)</div><div>↓</div><div>INFORMATION ACCESS (Acesso Inicial / Índice)</div><div>↓</div><div>CANDIDATE RETRIEVAL (Recuperação Léxica / Semântica / Híbrida)</div><div>↓</div><div>CONTEXT AVAILABLE (Contexto Injetado na Pipeline)</div><div>↓</div><div>GENERATION / SYNTHESIS (Geração e Formatação da Resposta)</div><div>↓</div><div>REPRESENTATION (Representação Final da Entidade)</div><div>↓</div><div>SOURCE / CITATION (Fontes e Citações Visíveis na Interface)</div></div><p><em>Este framework organiza a análise editorial da AUDITSEO e não representa necessariamente a arquitetura interna proprietária de nenhuma plataforma de mercado.</em></p>`,
    },
    {
      id: "web-document-index-corpus-model",
      title: "11. Web, documento, índice, corpus e modelo não são a mesma coisa",
      level: 2,
      content: `<p>Uma fonte importante de confusão em AI Search é a mistura de camadas que têm funções diferentes. A <strong>web</strong> é o espaço amplo de páginas, arquivos e recursos publicados. Um <strong>documento</strong> é uma unidade dentro desse espaço: uma página, um PDF, um registro, uma passagem ou uma entrada estruturada. Um <strong>índice</strong> é uma estrutura criada para localizar e organizar candidatos recuperáveis; ele não é a IA e não é todo o corpus disponível. Um <strong>corpus</strong> é a coleção sobre a qual um sistema pode operar, que pode ser a web indexada, um conjunto empresarial, uma base de conhecimento ou um repositório conectado. Um <strong>modelo</strong> é o componente que transforma entradas em uma saída, usando parâmetros e contexto conforme sua arquitetura.</p><p>Um documento pode existir na web sem estar em determinado índice. Um índice pode conter uma representação parcial de um documento. Um corpus pode ser privado e não ter relação com a web aberta. Um modelo pode responder com conhecimento paramétrico mesmo quando nenhum documento foi recuperado. E uma plataforma pode combinar todas essas camadas de maneiras que não são integralmente observáveis externamente. Essa distinção é mais útil do que dizer genericamente que a IA “pesquisou na internet”.</p>`,
    },
    {
      id: "embeddings-vector-hybrid",
      title: "12. Embeddings, vector search e hybrid retrieval",
      level: 2,
      content: `<p><strong>Embeddings</strong> são representações numéricas aprendidas que podem capturar relações úteis entre itens em determinado espaço vetorial. Um embedding não é uma entidade, não é significado absoluto e não é uma explicação completa de como um sistema interpreta uma página. Ele é uma representação que permite calcular proximidades segundo o objetivo e o modelo que a produziram.</p><p>Na <strong>vector search</strong>, o sistema procura itens próximos em um espaço vetorial, geralmente usando nearest neighbors ou approximate nearest neighbors para tornar a busca viável em grandes coleções. Esse mecanismo pode ajudar a encontrar passagens semanticamente relacionadas mesmo quando não existe coincidência literal de palavras. Ainda assim, proximidade vetorial não equivale a verdade, qualidade, autoridade ou intenção humana compreendida como um leitor compreenderia.</p><p>O <strong>hybrid retrieval</strong> combina sinais lexicais, semânticos e outras regras de filtragem ou ordenação. A recuperação lexical continua útil para nomes, códigos, siglas e expressões exatas; a semântica pode ampliar o campo de candidatos; filtros e re-ranking podem alterar o conjunto final. Esse é um conceito geral de engenharia de IR, não uma declaração de que todas as plataformas de AI Search utilizam a mesma arquitetura híbrida. Onde a documentação específica termina, a classificação correta é desconhecida.</p>`,
    },
    {
      id: "query-rewriting-grounding",
      title: "13. Query rewriting, expansion, fan-out e grounding",
      level: 2,
      content: `<p>Uma consulta não precisa ser encaminhada ao sistema exatamente como foi digitada. Em Information Retrieval, <strong>query rewriting</strong> e <strong>query expansion</strong> descrevem transformações que podem adicionar termos, entidades, sinônimos ou relações para representar melhor uma necessidade informacional. Em uma pergunta complexa, um sistema pode dividir a necessidade em subproblemas e procurar diferentes facetas. Esse problema conceitual é o que o termo <strong>query fan-out</strong> ajuda a nomear.</p><p>Quando uma plataforma documenta explicitamente uma forma de fan-out ou expansão, a classificação deve ser específica: <strong>DOCUMENTADO — GOOGLE</strong>, por exemplo, e não universal AI Search. A existência de uma documentação oficial sobre uma superfície não autoriza generalizar para ChatGPT, Gemini, Perplexity ou qualquer outro produto sem fonte primária correspondente.</p><p><strong>Grounding</strong> também precisa ser lido no contexto de cada sistema. Em nível geral, significa apoiar uma saída em informação ou contexto externo. O termo pode ter definição operacional específica em uma plataforma. Grounding não é sinônimo de citation: uma geração pode usar contexto recuperado sem exibir o documento na interface, e uma citação visível é uma propriedade do output, não um log completo da arquitetura.</p>`,
    },
    {
      id: "source-vs-retrieval-trace",
      title: "14. Source visível não é documento recuperado nem retrieval trace",
      level: 2,
      content: `<p>Uma das teses centrais deste artigo é simples: <strong>ver três fontes na interface não significa que apenas três documentos participaram do processo</strong>. A interface pode exibir um subconjunto de links, um domínio representativo ou uma seleção editorial de apoio. Ela não precisa mostrar todos os candidatos recuperados, os documentos descartados, os trechos utilizados, as chamadas intermediárias ou a ordem interna de filtragem.</p><p>Por isso, <strong>VISIBLE SOURCES ≠ FULL RETRIEVAL TRACE</strong>. A source que o usuário vê pode ter relação semântica com a resposta, mas não necessariamente representa todo o contexto que condicionou a geração. Da mesma forma, um documento pode ter sido candidato e não aparecer como citation. Sem logs internos da plataforma, não possuímos um retrieval trace completo. Uma citation prepara uma investigação de atribuição para o #009; ela não encerra a investigação de retrieval neste artigo.</p><p>Também não devemos confundir retrieval com seleção. Retrieval pode significar acesso e geração de candidatos; selection/ranking pode filtrar ou ordenar; display é o que efetivamente chega à interface. Esse fluxo é um modelo analítico útil, não uma pipeline universal comprovada para todas as superfícies.</p>`,
    },
    {
      id: "retrieval-observability-boundary",
      title: "15. AUDITSEO Retrieval Observability Boundary",
      level: 2,
      content: `<p>Para trabalhar com responsabilidade sem acesso a logs proprietários, propomos o framework editorial <strong>AUDITSEO Retrieval Observability Boundary</strong>. Ele divide a análise em três zonas, evitando que uma captura visual seja apresentada como inspeção de sistema.</p><div class=\"grid md:grid-cols-3 gap-4 my-6\"><div class=\"bg-neutral-900 border border-neutral-800 p-5 rounded-lg\"><h3 class=\"text-amber-500 font-bold mb-3\">VISIBLE</h3><p class=\"text-sm text-neutral-300\">Query, resposta, fontes exibidas, citations, links, entidades mencionadas e estado da interface.</p></div><div class=\"bg-neutral-900 border border-neutral-800 p-5 rounded-lg\"><h3 class=\"text-amber-500 font-bold mb-3\">PARTIALLY INFERABLE</h3><p class=\"text-sm text-neutral-300\">Relação entre uma afirmação e uma fonte visível, alinhamento de conteúdo, mudança entre repetições e contexto aparente.</p></div><div class=\"bg-neutral-900 border border-neutral-800 p-5 rounded-lg\"><h3 class=\"text-amber-500 font-bold mb-3\">NOT GENERALLY OBSERVABLE</h3><p class=\"text-sm text-neutral-300\">Todos os candidatos, scores internos, pesos de reranking, documentos descartados, embeddings e contexto completo de geração.</p></div></div><p>O valor do framework está na fronteira, não na promessa de ultrapassá-la. Quando a interface permite avançar um passo, avançamos. Onde ela termina, começa a nossa incerteza declarada.</p>`,
    },
    {
      id: "entity-role-not-vector",
      title: "16. Entity ≠ Vector: como Entity Authority entra na análise",
      level: 2,
      content: `<p>Uma entidade conceitual não deve ser tratada como sinônimo de embedding ou vector. Uma entidade é uma unidade de identidade e referência: pessoa, organização, produto, local, evento ou tópico. Um embedding é uma representação numérica produzida por determinado modelo e objetivo. Sistemas podem representar conceitos por grafos, campos estruturados, texto, identificadores, embeddings ou combinações. Dizer que “a entidade é um vetor no LLM” substitui uma distinção útil por uma metáfora que não pode ser auditada.</p><p>O cluster de <strong>Entity Authority</strong> ajuda a organizar perguntas sobre identidade, atributos, relações e associações temáticas. O guia de <a href=\"/guias/entity-home\">Entity Home</a> trata a página controlada como fonte de identidade e contexto, não como retrieval anchor ou fonte RAG canônica. <a href=\"/guias/desambiguacao-de-entidades\">Desambiguação</a> ajuda a formular o problema de resolver uma necessidade informacional ambígua; não prova qual técnica interna a plataforma utilizou. <a href=\"/guias/consistencia-de-entidade\">Consistência</a> permite registrar conflitos entre fontes; não afirma como o sistema os resolve.</p><p>Autoria e corroboração também têm funções de contexto e proveniência. <a href=\"/guias/autoria-seo\">Autoria</a> conecta produtor do conhecimento e publisher; <a href=\"/guias/corroboracao-de-entidade\">Corroboração</a> ajuda a mapear informação distribuída compatível. Nenhuma dessas relações deve ser publicada como garantia de retrieval, seleção ou citação.</p>`,
    },
    {
      id: "observation-interpretation",
      title: "17. O que as Observations #001 e #002 permitem dizer",
      level: 2,
      content: `<p>A <a href=\"/estudos-busca-ia/reconhecimento-de-entidade-por-contexto\">Observation #001</a> pode demonstrar que uma mudança de contexto influencia a representação observada de uma entidade. Ela é classificada como <strong>OBSERVADO</strong>, não como prova de um mecanismo de retrieval. A <a href=\"/estudos-busca-ia/entidade-correta-atributo-incorreto-ai-search\">Observation #002</a> pode demonstrar um estado de entidade correta com atributo incorreto.</p><p>Esse resultado observado não revela qual etapa interna falhou. O problema poderia estar em retrieval, seleção da fonte, conhecimento paramétrico, síntese, resolução de atributo ou em uma combinação dessas camadas. Sem acesso ao trace, a classificação correta é <strong>UNKNOWN</strong>. A força metodológica está em preservar a diferença entre constatar um output e atribuir uma causa interna.</p>`,
    },
    {
      id: "external-retrieval-framework",
      title: "18. Como eu investigaria retrieval sem acesso ao trace",
      level: 2,
      content: `<p>Uma das coisas que mais me incomodam na discussão de AI Search é ver o output sendo usado como se fosse um log do sistema. Para investigar retrieval externamente, eu seguiria um protocolo de Search Intelligence que registra o que é visível e explicita o que não pode ser concluído:</p><div class=\"bg-neutral-900 border border-neutral-800 p-6 rounded-lg my-6 font-mono text-xs text-amber-500/90 space-y-2\"><div>OBSERVE</div><div>↓</div><div>CAPTURE</div><div>↓</div><div>COMPARE</div><div>↓</div><div>SOURCE MAP</div><div>↓</div><div>REPEAT</div><div>↓</div><div>CLASSIFY</div><div>↓</div><div>INFER CAUTIOUSLY</div></div><p>O registro externo deve incluir <strong>QUERY, SYSTEM, SURFACE, DATE, ANSWER, VISIBLE SOURCES, SOURCE DOMAINS, SOURCE TYPES, SOURCE/ANSWER ALIGNMENT, ORGANIZATION/ENTITY PRESENT, ATTRIBUTE ACCURACY, REPEAT OBSERVATION, SOURCE CHANGE, ANSWER CHANGE e LIMITATIONS</strong>. Isso produz uma matriz comparável de observação, mas não revela todo o retrieval trace. O objetivo é melhorar a qualidade da inferência, não fingir acesso que não temos.</p>`,
    },
    {
      id: "retrieval-evidence-levels",
      title: "19. Retrieval Evidence Levels",
      level: 2,
      content: `<p>Para evitar transformar eventos de interface em score, usamos uma escala qualitativa de evidência:</p><ol class=\"space-y-3 list-decimal list-inside my-4\"><li><strong>Level 0 — UNKNOWN:</strong> Não há evidência suficiente para afirmar o evento.</li><li><strong>Level 1 — VISIBLE SOURCE:</strong> A interface exibe uma source ou link de apoio.</li><li><strong>Level 2 — CONTENT ALIGNMENT:</strong> Existe relação observável entre a resposta e o conteúdo da source.</li><li><strong>Level 3 — PLATFORM DOCUMENTATION:</strong> A plataforma documenta explicitamente determinado comportamento ou arquitetura.</li><li><strong>Level 4 — CONTROLLED SYSTEM / LOG ACCESS:</strong> Um ambiente controlado ou logs permitem observar retrieval diretamente.</li></ol><p>Essa escala não é retrieval score, RAG readiness score, AI retrievability score ou vector authority score. Ela apenas comunica a proximidade entre uma afirmação e a evidência disponível.</p>`,
    },
    {
      id: "retrieval-citation-visibility",
      title: "20. Retrieval ≠ Citation ≠ Visibility",
      level: 2,
      content: `<p><strong>Information may be retrieved ≠ information is cited.</strong> Um conteúdo pode participar do contexto sem ser exibido como citation. Da mesma forma, <strong>cited source ≠ only source retrieved</strong>. Uma fonte visível pode ser uma parte do conjunto de documentos, não a totalidade da cadeia.</p><p>Retrieval também não equivale automaticamente a visibilidade comercial. Uma organização pode ser representada sem source oficial visível; uma página pode ser source sem que a marca seja o tema central da resposta; uma citation pode gerar nenhum clique. Medição completa de visibilidade em AI Search pertence ao escopo planejado do #010. Este artigo prepara as distinções, mas não cria um KPI ou uma metodologia completa de measurement.</p><p>O #009 deverá aprofundar citation e source attribution. Por isso, aqui tratamos apenas da fronteira necessária: grounding pode existir sem citation, visible source não é trace e retrieval não é uma garantia de presença comercial.</p>`,
    },
    {
      id: "controlled-foundations",
      title: "21. O que eu faria no site: Controlled Foundations",
      level: 2,
      content: `<p>Eu não venderia “retrieval optimization” como uma promessa operacional. O que existe sob controle são <strong>Controlled Foundations</strong>: informação acessível, indexabilidade quando aplicável, conteúdo claro, arquitetura estruturada, precisão factual, clareza de entidade, consistência de fontes, informação original, autoria, links internos e marcação legível por máquina quando apropriada.</p><p>Dados estruturados podem tornar informações explicitamente estruturadas e ajudar sistemas compatíveis a interpretar o conteúdo conforme a documentação específica. Isso não autoriza a fórmula schema → retrieval ou schema → citation. A publicação de informação original também pode aumentar a utilidade da página e a diferenciação da fonte, mas não permite afirmar um direct retrieval boost. A recomendação segura é construir páginas que expliquem o que realmente existe, quem produz o conhecimento, qual é a relação com a organização e em que contexto a informação é válida.</p><p>Esses fundamentos são controláveis; a inclusão em uma resposta, a source selection e a redação final continuam dependentes da superfície e do contexto da consulta. Não são garantias.</p>`,
    },
    {
      id: "retrieval-decision-model",
      title: "22. Retrieval Decision Model: como classificar um claim",
      level: 2,
      content: `<p>Antes de publicar uma afirmação sobre retrieval, eu aplicaria o seguinte modelo de decisão:</p><div class=\"bg-neutral-900 border border-neutral-800 p-6 rounded-lg my-6 font-mono text-xs text-amber-500/90 space-y-2\"><div>QUESTION: o que estou tentando afirmar?</div><div>↓</div><div>GENERAL IR CONCEPT? — YES → citar literatura técnica.</div><div>↓ NO</div><div>PLATFORM-SPECIFIC CLAIM? — YES → exigir documentação oficial específica.</div><div>↓ NO</div><div>PUBLICLY OBSERVABLE? — YES → classificar OBSERVADO.</div><div>↓ NO</div><div>CONTROLLED TEST? — YES → classificar TESTADO.</div><div>↓ NO</div><div>INFERENCE ONLY → declarar INFERIDO.</div></div><p>Esse modelo ajuda a separar uma explicação técnica geral de um claim sobre o Google, um sistema proprietário ou uma observação empírica. Quando a evidência não permite avançar, não preencheremos a lacuna com autoridade retórica.</p>`,
    },
    {
      id: "myth-audit",
      title: "23. Afirmações sobre retrieval em AI Search que eu trataria com cautela",
      level: 2,
      content: `<p>Algumas frases aparecem com frequência no mercado, mas não resistem a uma governança de evidências cuidadosa:</p><ul class=\"space-y-3 my-4\"><li><strong>“Tudo é vector search.”</strong> — Não estabelecido. Retrieval pode combinar sinais léxicos, semânticos, filtros e outros componentes.</li><li><strong>“Keywords não importam.”</strong> — Não estabelecido. Recuperação semântica não elimina necessariamente correspondência lexical, nomes próprios e termos exatos.</li><li><strong>“Schema alimenta diretamente o LLM.”</strong> — Unsupported sem documentação específica.</li><li><strong>“Entity Home vira a fonte principal da IA.”</strong> — Unsupported. Ela é uma fonte controlada de identidade e contexto no nosso modelo editorial.</li><li><strong>“RAG sempre cita aquilo que recuperou.”</strong> — Unsupported. Grounding e citation são camadas diferentes.</li><li><strong>“A fonte citada é necessariamente a fonte mais usada.”</strong> — Unsupported. Visible source não é full retrieval trace.</li><li><strong>“Quanto mais entities, maior a chance de retrieval.”</strong> — Unsupported. Entidade não é sinônimo de vector e quantidade não prova relevância.</li><li><strong>“LLMS.txt controla retrieval.”</strong> — Não publicar como requisito sem documentação oficial vigente.</li></ul><p>Um framework didático pode organizar perguntas; ele não pode ser reescrito como arquitetura comprovada. Eu prefiro separar uma arquitetura didática de uma arquitetura documentada.</p>`,
    },
    {
      id: "evidence-boundary-research-questions",
      title: "24. Evidence Boundary e Research Questions planejadas",
      level: 2,
      content: `<p><strong>O que sabemos:</strong> conceitos técnicos consolidados de Information Retrieval e RAG; documentação específica do Google quando explicitamente citada; distinção entre retrieval, generation, synthesis e grounding.</p><p><strong>O que conseguimos observar:</strong> consultas, respostas, sources, citations, links, mudanças entre repetições, entidades, atributos e relações limitadas entre resposta e source.</p><p><strong>O que não sabemos:</strong> retrieval trace completo, pesos, pool de candidatos, reranking interno, contexto integral, candidatos descartados e contribuição exata do modelo ou da source.</p><p>As perguntas seguintes permanecem apenas planejadas, sem nova coleta nesta fase: <strong>RQ-RET-001</strong>, sobre estabilidade entre sources visíveis e conteúdo da resposta; <strong>RQ-RET-002</strong>, sobre alinhamento semântico entre source e afirmações; e <strong>RQ-RET-003</strong>, sobre variação de sources em reformulações próximas da mesma necessidade informacional.</p>`,
    },
    {
      id: "references",
      title: "25. Referências e classificação das fontes",
      level: 2,
      content: `<p>As referências abaixo sustentam os claims técnicos sensíveis e são mantidas separadas por classe de fonte. A documentação de uma plataforma não é convertida em fato universal de AI Search; papers técnicos fundamentam conceitos gerais; as Observations da AUDITSEO fundamentam apenas os findings observados em seus próprios contextos.</p><ol class=\"space-y-3 list-decimal list-inside\"><li><a href=\"https://developers.google.com/search/docs/fundamentals/ai-optimization-guide\" target=\"_blank\" rel=\"noreferrer\">Google Search Central — Optimizing your website for generative AI features on Google Search</a> — DOCUMENTADO — GOOGLE.</li><li><a href=\"https://developers.google.com/search/docs/appearance/ai-features\" target=\"_blank\" rel=\"noreferrer\">Google Search Central — AI features and your website</a> — DOCUMENTADO — GOOGLE.</li><li><a href=\"https://arxiv.org/abs/2005.11401\" target=\"_blank\" rel=\"noreferrer\">Lewis et al. — Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks</a> — RESEARCH PAPER.</li><li><a href=\"https://nlp.stanford.edu/IR-book/\" target=\"_blank\" rel=\"noreferrer\">Manning, Raghavan & Schütze — Introduction to Information Retrieval</a> — PRIMARY TECHNICAL DOCUMENTATION.</li><li><a href=\"/estudos-busca-ia\">AUDITSEO Search Intelligence Lab</a> — AUDITSEO OBSERVATION; Findings #001 e #002 classificados como OBSERVADO.</li></ol>`,
    },
    {
      id: "source-access-multistage-retrieval",
      title: "26. Source access e multi-stage retrieval: um modelo analítico, não uma revelação interna",
      level: 2,
      content: `<p>O acesso a uma fonte pode ocorrer em mais de um estágio conceitual. Um sistema pode começar gerando candidatos amplos, aplicar filtros de idioma ou tipo de documento, ordenar resultados por sinais de relevância e, somente depois, reordenar passagens para fornecer contexto à geração. Em Information Retrieval, é comum discutir candidate generation, filtering, ranking e reranking como funções diferentes de uma arquitetura possível [4].</p><p>Esse modelo ajuda a organizar a pergunta que estamos fazendo: um documento estava acessível? Foi candidato? Foi selecionado para contexto? Foi exibido como source? A resposta visível não resolve todas essas perguntas. Sem documentação específica ou logs de um sistema controlado, não podemos afirmar que uma plataforma comercial percorreu exatamente essa sequência, nem que um documento visível foi o vencedor de um único ranking linear.</p><p>O ganho prático está em não reduzir “source access” a “a página apareceu”. Uma informação pode estar disponível no corpus e ainda não aparecer na resposta. Um domínio pode aparecer na interface sem que conheçamos todos os trechos usados. Uma fonte pode ser tecnicamente acessível, mas não relevante para aquela necessidade informacional. Essas possibilidades são razões para registrar estados separados em vez de procurar um fator universal de retrieval. A pergunta madura não é “qual truque garante acesso?”, mas “qual camada estou descrevendo, qual evidência sustenta a afirmação e o que permanece desconhecido?”. Essa troca de pergunta reduz o risco de vender uma hipótese como método operacional. É também o que permite conversar com líderes de marketing sem sacrificar a precisão técnica: o desconhecido é declarado, o observável é registrado e a decisão continua apoiada em fundamentos que a organização consegue revisar.</p>`,
    },
    {
      id: "conclusao",
      title: "27. Conclusão: a recuperação como fundação da visibilidade",

      level: 2,
      content: `<p>A recuperação de informação em AI Search não substitui os fundamentos do SEO tradicional; ela os expande para uma nova camada de processamento de texto, entidades e contexto. Compreender a diferença entre retrieval, generation, synthesis e grounding permite que agências e marcas analisem a visibilidade com maturidade técnica.</p><p>Para agências que desejam auditar como suas marcas são recuperadas e representadas em ambientes de busca generativa, convidamos a conhecer nossa solução de <a href="/diagnostico">Diagnóstico de Autoridade</a> ou a explorar as investigações empíricas em andamento no <a href="/estudos-busca-ia">Search Intelligence Lab</a>.</p>`,
    },
  ],
  faq: [
    {
      question: "Information Retrieval é a mesma coisa que SEO?",
      answer: "Não. Information Retrieval é o campo científico e técnico que estuda a recuperação de dados em coleções. SEO é a prática comercial e técnica de otimizar páginas para motores de busca. SEO utiliza conceitos de IR, mas opera em um escopo mais amplo de mercado [4]."
    },
    {
      question: "O que significa Grounding em AI Search?",
      answer: "Grounding (ou aterramento) é o mecanismo que vincula a resposta gerada por um modelo de linguagem a fontes externas ou trechos recuperados, reduzindo alucinações ao condicionar o texto a evidências factuais [3]."
    },
    {
      question: "Por que RAG não é sinônimo de AI Search?",
      answer: "RAG é uma técnica específica de arquitetura de IA que combina recuperação e geração. AI Search é o ecossistema completo de descoberta, superfícies de interface, motores de busca, representação de entidades e experiência do usuário."
    }
  ],
};
