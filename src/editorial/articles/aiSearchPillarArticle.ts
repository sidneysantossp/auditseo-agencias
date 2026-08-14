import { ArticleData } from "../types";
import { SIDNEY_AUTHOR, AUDIT_PUBLISHER } from "../registry";

export const aiSearchPillarArticle: ArticleData = {
  id: "AUDITSEO-PILLAR-AI-SEARCH-001",
  slug: "/guias/ai-search",
  title: "AI Search: como a inteligência artificial está mudando a busca e a descoberta de informação",
  subtitle: "AI Search amplia a descoberta orgânica para ambientes em que sistemas podem recuperar, combinar e sintetizar informações em respostas generativas. Entenda como observar presença, representação, fontes, citações e consistência sem confundir hipótese com funcionamento interno comprovado.",
  description: "Guia canônico da AUDITSEO sobre AI Search, cobrindo a evolução das experiências generativas, o modelo editorial de análise, a ponte com Entity Authority e a disciplina de Evidence Governance.",
  status: "PUBLISHED",
  type: "GUIDE",
  cluster: "AI_SEARCH",
  secondaryClusters: ["SEO", "SEARCH_INTELLIGENCE"],
  author: SIDNEY_AUTHOR,
  publisher: AUDIT_PUBLISHER,
  datePublished: "2026-08-13",
  dateModified: "2026-08-13",
  readingTime: "16 min",
  featuredImage: {
    src: "/images/guides/ai-search/featured.webp",
    alt: "Representação abstrata de nós de conhecimento e síntese em inteligência artificial",
    width: 1200,
    height: 630,
  },
  parent: { title: "AI Search", href: "/guias/ai-search" },
  previous: { title: "Corroboração de Entidade", href: "/guias/corroboracao-de-entidade" },
  next: { title: "AI Overviews", href: "/guias/ai-overviews" },
  related: [
    { title: "Entity Authority", href: "/guias/entity-authority", tag: "Guia" },
    { title: "Search Intelligence Lab", href: "/estudos-busca-ia", tag: "Lab" },
  ],
  evidence: ["AUDITSEO-OBS-001", "AUDITSEO-OBS-002"],
  commercialRelation: { title: "Autoridade de Entidade", href: "/solucoes/autoridade-de-entidade" },
  topicGraph: {
    id: "AUDITSEO-PILLAR-AI-SEARCH-001",
    type: "GUIDE",
    cluster: "AI_SEARCH",
    secondaryClusters: ["SEO", "SEARCH_INTELLIGENCE"],
    primaryEntity: "AI Search",
    relatedEntities: ["Sidney Santos", "AUDITSEO", "Search Intelligence", "Entity Authority", "AI Overviews"],
    parent: "/guias/ai-search",
    previous: "/guias/corroboracao-de-entidade",
    next: "/guias/ai-overviews",
    evidenceLinks: ["AUDITSEO-OBS-001", "AUDITSEO-OBS-002"],
    commercialRelation: "/solucoes/autoridade-de-entidade",
    status: "PUBLISHED",
  },
  sections: [
    {
      id: "introducao",
      title: "A mudança no objeto observado: de links a respostas sintéticas",
      level: 2,
      content: `Durante muito tempo, acompanhar busca orgânica significava observar documentos, posições, snippets e páginas de resultado. Esse modelo continua relevante e constitui a base operacional do SEO tradicional.

Mas quando uma interface passa a produzir uma resposta sintética antes, ao lado ou no lugar de parte dos resultados tradicionais, o objeto da análise muda. Já não queremos observar apenas qual URL apareceu, mas também qual entidade foi representada, quais atributos apareceram, que organização foi associada, quais fontes foram apresentadas e se essa representação permanece consistente ao repetir a observação.

Para mim, esta é uma das mudanças mais interessantes de AI Search: ela não elimina o problema de busca; ela adiciona novas camadas observáveis. O desafio de mercado deixou de ser apenas a disputa por posições em uma listagem estática e passou a envolver a compreensão de como sistemas generativos interpretam, sintetizam e apresentam entidades, relações e evidências.`,
    },
    {
      id: "o-que-e-ai-search",
      title: "O que é AI Search?",
      level: 2,
      content: `Para estruturar nossa análise, definimos **AI Search** de maneira operacional através do nosso modelo editorial:

> **AI Search é o conjunto de experiências de busca e descoberta em que sistemas utilizam recursos de inteligência artificial para interpretar consultas, recuperar informações, sintetizar respostas, organizar fontes ou representar entidades em formatos que vão além da lista tradicional de resultados.**

Essa definição organiza o território editorial da AUDITSEO. Ela não representa uma arquitetura interna única compartilhada por todas as plataformas de mercado. Diferentes superfícies (como Google AI Overviews, assistentes conversacionais, motores answer-first e interfaces generativas integradas) operam com arquiteturas, interfaces e restrições distintas.`,
    },
    {
      id: "nao-existe-uma-unica-ai-search",
      title: "Não existe uma única AI Search: o mapa de superfícies observáveis",
      level: 2,
      content: `Um dos erros mais comuns ao analisar a busca generativa é tratá-la como um bloco monolítico. Na prática, observamos múltiplos ambientes com comportamentos divergentes:

1. **Google AI Overviews**: Resumos generativos integrados na SERP tradicional, acompanhados de carrosséis de fontes visíveis e links orgânicos concomitantes.
2. **Assistentes Conversacionais (ChatGPT, Claude, Gemini)**: Interfaces puramente conversacionais baseadas em diálogo, onde o acesso à web pode ocorrer via ferramentas de busca em tempo real ou recuperação em bases pré-indexadas.
3. **Motores Answer-First (Perplexity, Copilot)**: Plataformas focadas em síntese direta com citação explícita por notas de rodapé ou links de domínio em cada afirmação.
4. **Sistemas com ou sem Citações Visíveis**: Ambientes em que a citação é mandatória por design e outros em que a menção à marca ocorre de forma integrada ao texto sem link direto.

Tratar todos esses sistemas como se obedecessem a um único comportamento de ranqueamento é um equívoco metodológico. A análise exige separar sempre o sistema, a superfície, a consulta, a data e o estado da sessão.`,
    },
    {
      id: "busca-tradicional-vs-experiencia-generativa",
      title: "Busca tradicional vs. experiência generativa: continuidade e expansão",
      level: 2,
      content: `Eu não vejo AI Search como uma substituição limpa e imediata do SEO tradicional. Vejo como uma expansão do conjunto de superfícies que precisamos monitorar e compreender.

Enquanto a SERP tradicional organiza documentos por relevância algorítmica e exibe links, títulos e snippets estruturados, a experiência generativa agrupa múltiplos fluxos: ela pode recuperar documentos, extrair passagens, combiná-las em um texto coeso, associar entidades a Sidney Santos ou à AUDITSEO e exibir fontes de apoio. 

No entanto, os fundamentos técnicos da web continuam operando. O rastreamento (*crawling*), a indexação, a acessibilidade técnica, a clareza semântica e a estruturação de dados permanecem como pré-requisitos fundamentais para que qualquer sistema acesse o conteúdo de uma página. O que muda é que a exibição final deixa de ser um mero espelho de metadados para se tornar uma síntese algorítmica.`,
    },
    {
      id: "search-intelligence",
      title: "Por que olhar AI Search através de Search Intelligence",
      level: 2,
      content: `Na AUDITSEO, abordamos esse território através do método de **Search Intelligence**, que fundamenta nossa governança de evidências:

- **Observe**: Monitorar o comportamento real das superfícies de busca sem viés de torcida.
- **Capture**: Registrar capturas, consultas, data, locale e respostas textuais completas.
- **Classify**: Separar o que é documentado oficialmente pelas plataformas, o que é observado em campo e o que constitui inferência analítica.
- **Compare**: Cruzar dados entre diferentes sistemas e repetições temporais para medir volatilidade.
- **Interpret**: Avaliar o impacto na representação da entidade e da organização.
- **Decide**: Orientar decisões estratégicas de arquitetura de conteúdo e presença digital.
- **Re-measure**: Acompanhar a estabilidade da representação ao longo do tempo.

Começamos sempre pela observação empírica dos fatos antes de ditar qualquer otimização ou recomendação tática.`,
    },
    {
      id: "modelo-editorial-auditseo",
      title: "O Modelo Editorial AUDITSEO de AI Search",
      level: 2,
      content: `Para organizar a análise de como a informação flui em ambientes generativos, estruturamos o **Modelo Editorial AUDITSEO**. 

> *Este modelo organiza a análise editorial da AUDITSEO. Ele não afirma representar a arquitetura interna proprietária de nenhuma plataforma específica.*

1. **Query**: A consulta digitada ou formulada pelo usuário, contendo termos, entidades, sinais de intenção e contexto.
2. **Information Access / Retrieval**: O acesso ou recuperação de dados, seja por meio de índices tradicionais, bases vetoriais, grounding ou conhecimento pré-treinado.
3. **Entity / Source Candidates**: A seleção prévia de entidades e candidatos textuais relevantes para a consulta.
4. **Synthesis**: A formulação do texto generativo que combina passagens, resolve ambiguidades e redige a resposta.
5. **Representation**: A forma como a entidade, seus atributos, sua organização vinculada e seu contexto são retratados no texto final.
6. **Attribution / Citation**: A inclusão eventual de links, notas de rodapé ou menções explícitas às fontes utilizadas.
7. **User Experience**: A forma como o usuário consome a resposta na interface (SERP, chat ou app).
8. **Observation**: O registro sistemático do resultado obtido por analistas de Search Intelligence.
9. **Measurement**: A consolidação de métricas multidimensionais de presença, acurácia e estabilidade.`,
    },
    {
      id: "entity-authority-bridge",
      title: "A ponte com Entity Authority: representação vs. presença",
      level: 2,
      content: `O mini-cluster anterior de **Entity Authority** estabeleceu que a visibilidade em sistemas modernos depende de como uma entidade está estruturada na web. No contexto de AI Search, essa fundação se conecta diretamente à análise de representação:

- **Entity**: Quem ou o que está sendo representado na resposta.
- **Entity Home**: A fonte controlada de identidade canônica que fornece o contexto primário.
- **Disambiguation**: A capacidade do sistema de distinguir a entidade correta entre homônimos (como demonstramos na *Observation #001* do Search Intelligence Lab).
- **Consistency**: A integridade de atributos e marcos temporais (evidenciada na *Observation #002* sobre o ano de fundação).
- **Authorship**: A conexão clara entre o produtor do conhecimento, o conteúdo e a organização editora.
- **Corroboration**: O suporte distribuído por fontes externas independentes que sustentam as declarações feitas sobre a marca.

Um dos aprendizados mais críticos de nossa pesquisa é que **Entity Presence** (a marca aparecer na resposta) não equivale a **Entity Representation Correctness** (a marca ser descrita com acurácia). Uma IA pode mencionar uma organização, mas recuperar um atributo obsoleto, um serviço descontinuado ou um fundador incorreto.`,
    },
    {
      id: "framework-de-representacao",
      title: "O Framework de Representação de Entidades em AI Search",
      level: 2,
      content: `Para auditar o comportamento de respostas generativas em relação a uma entidade, utilizamos o seguinte framework de verificação:

- **Entity Found?** (Sim / Não) — A entidade foi localizada ou mencionada pelo sistema?
- **Correct Entity?** (Sim / Não / Incerto) — Trata-se da entidade correta, sem confusão de homônimos?
- **Correct Organization?** (Sim / Não / Incerto) — A organização associada está correta?
- **Attributes Correct?** (Sim / Não / Parcial) — Dados como fundação, liderança, localização ou escopo estão corretos?
- **Topic Association Correct?** (Sim / Não / Incerto) — A entidade aparece vinculada ao cluster temático adequado?
- **Source / Citation Present?** (Sim / Não / N/A) — Há menção explícita ou link para uma fonte proprietária?
- **Stable Over Time?** (Sim / Não / Desconhecido) — A representação se mantém estável ao repetir a consulta em diferentes momentos?`,
    },
    {
      id: "evidencia-do-lab",
      title: "Evidências empíricas do Search Intelligence Lab",
      level: 2,
      content: `Nossas análises são lastreadas por investigações reais publicadas no **Search Intelligence Lab**:

- **Observation #001** (/estudos-busca-ia/reconhecimento-de-entidade-por-contexto): Demonstra como a alteração de contexto temático influencia diretamente a desambiguação correta de uma entidade por sistemas de recuperação e IA.
- **Observation #002** (/estudos-busca-ia/entidade-correta-atributo-incorreto-ai-search): Analisa o fenômeno crítico em que a IA reconhece perfeitamente a entidade e a organização, mas recupera um atributo temporal conflitante (2009 vs. 2013).

Esses registros provam que a presença visível em um resumo gerado por IA exige monitoramento contínuo da acurácia semântica.`,
    },
    {
      id: "o-que-nao-sabemos",
      title: "O que não sabemos: limites metodológicos e mitos",
      level: 2,
      content: `Em consonância com nossa política de *Evidence Governance*, é essencial declarar abertamente os limites do que é possível afirmar sobre AI Search:

- **Não conhecemos os pesos internos** de ranqueamento, indexação ou seleção de fontes dos modelos proprietários.
- **Não existe causalidade automática** entre o uso de schema markup e a garantia absoluta de citação em um AI Overview.
- **A citação visível (Citation)** não equivale empiricamente a um atestado de autoridade ou preferência algorítmica perene.
- **A estabilidade de uma resposta** não pode ser inferida a partir de uma única consulta isolada.

Evitamos dogmas do tipo "use schema e será citado" ou "Entity Home garante AI Overview". O trabalho de Search Intelligence consiste em auditar a realidade observável, e não em propagar fórmulas mágicas.`,
    },
    {
      id: "conclusao-e-proximos-passos",
      title: "Próximos passos no ecossistema de AI Search",
      level: 2,
      content: `Este Pillar estabelece a fundação conceitual e metodológica para o ecossistema de AI Search da AUDITSEO. Nosso roadmap prevê a expansão gradual com supporting contents dedicados a AI Overviews (#007), recuperação de informação e RAG (#008), análise de citações e fontes (#009) e medição de visibilidade (#010).

Para agências e empresas que desejam auditar como suas marcas, entidades e atributos estão sendo representados em ecossistemas de busca generativa, convidamos a conhecer nossa solução comercial de [Autoridade de Entidade](/solucoes/autoridade-de-entidade) ou a explorar nossos estudos empíricos no [Search Intelligence Lab](/estudos-busca-ia).`,
    },
  ],
  faq: [
    {
      question: "AI Search substitui o SEO tradicional?",
      answer: "Não. AI Search expande a descoberta orgânica para interfaces generativas, mas os fundamentos técnicos de crawling, indexação, acessibilidade e estruturação semântica continuam essenciais para que os sistemas acessem o conteúdo.",
    },
    {
      question: "O que é o Modelo Editorial AUDITSEO de AI Search?",
      answer: "É uma estrutura conceitual proprietária para organizar a análise de como as consultas são processadas, sintetizadas e apresentadas em respostas de IA, servindo como base para auditorias de Search Intelligence.",
    },
    {
      question: "Qual a diferença entre presença e representação correta em AI Search?",
      answer: "Presença significa que a marca ou entidade foi mencionada na resposta. Representação correta significa que a entidade foi descrita com acurácia em seus atributos, liderança, relações e contexto temático.",
    },
  ],
};
