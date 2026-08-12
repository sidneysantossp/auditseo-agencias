import { ResearchItem } from "./researchTypes";
import { SIDNEY_AUTHOR, AUDIT_PUBLISHER } from "./registry";

export const researchItems: ResearchItem[] = [
  {
    id: "AUDITSEO-OBS-001",
    slug: "reconhecimento-de-entidade-por-contexto",
    route: "/estudos-busca-ia/reconhecimento-de-entidade-por-contexto",
    title: "Por que o Google reconhece uma pessoa para um tema e praticamente a ignora para outro?",
    subtitle: "Análise inicial das variações de associação de entidade baseadas em contexto temático e ambiguidade de nome na busca orgânica.",
    description: "Estudo observacional sobre como o mecanismo de busca resolve a identidade de uma entidade profissional (Sidney Santos) sob diferentes contextos temáticos (Search Intelligence vs. Entity Authority).",
    type: "OBSERVATION",
    status: "PUBLISHED",
    author: SIDNEY_AUTHOR,
    publisher: AUDIT_PUBLISHER,
    datePublished: "2026-08-12",
    dateModified: "2026-08-12",
    researchDate: "2026-Q2/Q3",
    featuredImage: {
      src: "/images/guides/proof/featured.webp",
      alt: "Representação conceitual de nós de conhecimento e contexto temático.",
      width: 1200,
      height: 630,
    },
    evidenceProfile: [
      {
        type: "OBSERVADO",
        statement: "Diferença substancial de reconhecimento e associação de entidade entre consultas contendo o termo 'Search Intelligence' versus 'Entity Authority'.",
        notes: "Amostra baseada em consultas T0 controladas.",
      },
      {
        type: "INFERIDO",
        statement: "Contextos temáticos com menor densidade de ruído homônimo facilitam a resolução da entidade pelo motor de busca.",
        limitations: "Não demonstra causalidade direta nem expõe pesos algorítmicos internos.",
      },
      {
        type: "RECOMENDADO",
        statement: "Construir e observar sinais consistentes e vinculados em Entity Homes para contextos estratégicos de alta ambiguidade.",
      },
    ],
    question: "Mudanças e especificidades de contexto temático alteram a capacidade de um motor de busca associar uma entidade humana a um tópico especializado?",
    context: "Durante o baseline T0 do Experimento #001, foram testadas queries contendo variações de tópicos associados à entidade Sidney Santos. Notou-se discrepância marcante na clareza da associação.",
    methodology: "Execução de consultas controladas (T0-Q01 a T0-Q08) em ambientes de busca e motores generativos, registrando a presença de perfis profissionais, menções corporativas e ruído de homônimos.",
    systemsObserved: ["Google Search", "Google AI Overviews"],
    queries: [
      { id: "T0-Q06", query: "Sidney Santos Search Intelligence", system: "Google Search", resultSummary: "Reconhecimento profissional claro e associação correta à AUDITSEO." },
      { id: "T0-Q07", query: "Sidney Santos Entity Authority", system: "Google Search", resultSummary: "Forte ruído de homônimos e baixa associação evidente com a entidade profissional." },
    ],
    observations: [
      "Consultas focadas em 'Search Intelligence' retornam Entity Home e associações corporativas consistentes.",
      "Consultas focadas em 'Entity Authority' sofrem dispersão por homônimos e falta de corpus histórico consolidado para esse termo específico no momento da observação.",
    ],
    findings: [
      "Entity recognition não ocorre de forma homogênea para todos os tópicos associados a uma pessoa.",
      "Name match isolado não garante Entity Resolution em tópicos competitivos ou genéricos.",
    ],
    limitations: [
      "Número limitado de consultas na amostra.",
      "O comportamento algorítmico varia por região, histórico de sessão e atualizações do motor.",
      "Não temos acesso aos mecanismos internos de pontuação ou pesos de fontes.",
      "Esta observação registra um fenômeno amostral e não demonstra causalidade linear.",
    ],
    interpretation: "A resolução de entidade em IA e busca orgânica depende criticamente da densidade de co-ocorrência entre o nome da pessoa e o conceito técnico tratado. Termos genéricos ou recém-explorados exigem infraestrutura semântica mais robusta para superar o ruído de homônimos.",
    recommendations: [
      "Mapear todos os clusters semânticos pretendidos para a Entity Home.",
      "Evitar supor que autoridade em um subnicho transfere-se automaticamente para outro sem evidência textual estruturada.",
    ],
    relatedArticles: [
      { title: "Article Design System V3 Proof", href: "/internal/article-v3-proof", status: "PUBLISHED" },
    ],
    relatedResearch: [
      { title: "Quando a IA reconhece a entidade certa, mas recupera o atributo errado", href: "/estudos-busca-ia/entidade-correta-atributo-incorreto-ai-search", status: "PUBLISHED" },
    ],
    topicRelations: ["Entity Recognition", "Entity Resolution", "Topic Association", "Disambiguation"],
    references: ["AUDITSEO Search Intelligence Lab — Baseline T0 Records"],
  },
  {
    id: "AUDITSEO-OBS-002",
    slug: "entidade-correta-atributo-incorreto-ai-search",
    route: "/estudos-busca-ia/entidade-correta-atributo-incorreto-ai-search",
    title: "Quando a IA reconhece a entidade certa, mas recupera o atributo errado",
    subtitle: "Análise da divergência entre a resolução correta de uma entidade e a recuperação imprecisa de atributos temporais em resumos generativos.",
    description: "Investigação sobre como motores generativos (AI Overviews) identificam corretamente a pessoa e a organização fundadora, mas falham na recuperação de atributos cronológicos (2009 vs. 2013).",
    type: "OBSERVATION",
    status: "PUBLISHED",
    author: SIDNEY_AUTHOR,
    publisher: AUDIT_PUBLISHER,
    datePublished: "2026-08-12",
    dateModified: "2026-08-12",
    researchDate: "2026-Q2/Q3",
    featuredImage: {
      src: "/images/guides/proof/featured.webp",
      alt: "Representação conceitual de resolução de entidades e atributos.",
      width: 1200,
      height: 630,
    },
    evidenceProfile: [
      {
        type: "OBSERVADO",
        statement: "Em consultas sobre a fundação da AUDITSEO, o Google AI Overview identificou corretamente Sidney Santos e a organização, mas apresentou o ano de 2013 em vez do ano canônico de 2009.",
        notes: "Capturado durante testes comparativos de IA generativa.",
      },
      {
        type: "INFERIDO",
        statement: "A presença histórica de menções secundárias conflitantes na web pode induzir motores generativos a sintetizar atributos incorretos mesmo com a entidade resolvida.",
      },
      {
        type: "RECOMENDADO",
        statement: "Auditar e unificar todas as menções de datas e marcos históricos em perfis controlados, Schema.org e comunicados externos.",
      },
    ],
    question: "Por que uma IA generativa pode acertar a pessoa e a relação corporativa, mas errar um atributo factual como o ano de início de atuação?",
    context: "Durante as consultas de validação (ex: 'Quem fundou a AUDITSEO?'), observou-se que a Entity Resolution e a Relation Resolution foram bem-sucedidas (Sidney Santos ↔ AUDITSEO ↔ Founder), porém o Attribute Resolution recuperou 2013 em vez de 2009.",
    methodology: "Análise sistemática das respostas geradas por IA para a query de fundação, cruzando o resultado com o histórico de menções públicas da marca na web.",
    systemsObserved: ["Google AI Overviews"],
    queries: [
      { id: "T0-Q05", query: "Quem fundou a AUDITSEO?", system: "Google AI Overviews", resultSummary: "Sidney Santos (correto), 2013 (atributo temporal divergente do canônico 2009)." },
    ],
    observations: [
      "Right Entity: Sidney Santos (Identificado com sucesso).",
      "Right Relation: Founder de AUDITSEO (Identificado com sucesso).",
      "Wrong Attribute: Início de SEO em 2013 (Incorreto frente ao dado canônico de 2009).",
    ],
    findings: [
      "Rigth Entity + Right Relation não garantem All Attributes Correct.",
      "Sinais temporais conflitantes em fontes secundárias exercem peso imprevisível na síntese de LLMs.",
    ],
    limitations: [
      "Não é possível determinar qual URL específica forneceu o peso para o ano de 2013.",
      "O comportamento de síntese de AI Overviews é dinâmico e pode se autocorrigir após intervenções de estruturação.",
      "O escopo desta observação restringe-se ao caso documentado da marca AUDITSEO.",
    ],
    interpretation: "A cadeia de processamento de motores generativos opera em camadas sucessivas: Entity Resolution → Relation Resolution → Attribute Resolution → Consistency. Um acerto nas primeiras camadas não imuniza o sistema contra falhas na recuperação de atributos granulares quando há divergência de dados na web.",
    recommendations: [
      "Estabelecer um inventário de atributos canônicos (datas, cargos, marcos).",
      "Monitorar a consistência de atributos em diretórios, redes e artigos corporativos.",
    ],
    relatedResearch: [
      { title: "Por que o Google reconhece uma pessoa para um tema e praticamente a ignora para outro?", href: "/estudos-busca-ia/reconhecimento-de-entidade-por-contexto", status: "PUBLISHED" },
    ],
    topicRelations: ["Entity Resolution", "Relation Resolution", "Attribute Resolution", "Entity Consistency"],
    references: ["AUDITSEO Search Intelligence Lab — Case Study #002"],
  },
  {
    id: "AUDITSEO-EXP-001",
    slug: "construcao-deliberada-de-entidade-profissional-sidney-santos",
    route: "/estudos-busca-ia/construcao-deliberada-de-entidade-profissional-sidney-santos",
    title: "Construção deliberada de uma entidade profissional na web: o experimento Sidney Santos",
    subtitle: "Registro metodológico do experimento longitudinal de medição de sinais, intervenções e evolução de Entity Resolution.",
    description: "Documento de trabalho interno (DRAFT) que registra o delineamento experimental, o conjunto de consultas T0, as dimensões monitoradas e o log de intervenções.",
    type: "EXPERIMENT",
    status: "DRAFT",
    author: SIDNEY_AUTHOR,
    publisher: AUDIT_PUBLISHER,
    datePublished: "2026-08-12",
    dateModified: "2026-08-12",
    researchDate: "2026-Q2/Q3",
    evidenceProfile: [
      {
        type: "TESTADO",
        statement: "Metodologia de captura de baseline T0 baseada em 8 queries controladas e 8 dimensões de entidade.",
      },
      {
        type: "INFERIDO",
        statement: "Intervenções estruturadas na Entity Home e em metadados podem influenciar a consistência de reconhecimento ao longo do tempo.",
      },
    ],
    question: "Mudanças deliberadas em sinais públicos podem alterar como uma entidade profissional é identificada e associada a uma organização e a determinados tópicos?",
    context: "Avaliação sistemática da presença digital de Sidney Santos sob a ótica de Search Intelligence e Entity Authority.",
    methodology: "Acompanhamento longitudinal dividido em fases: T0 (Baseline), Intervenção Estrutural, Período de Processamento (Wait) e T1 (Medição pós-intervenção).",
    systemsObserved: ["Google Search", "Google AI Overviews"],
    queries: [
      { id: "T0-Q01", query: "Sidney Santos SEO", system: "Google Search" },
      { id: "T0-Q02", query: "Quem é Sidney Santos SEO?", system: "Google Search" },
      { id: "T0-Q03", query: "Sidney Santos especialista em SEO", system: "Google Search" },
      { id: "T0-Q04", query: "Sidney Santos AUDITSEO", system: "Google Search" },
      { id: "T0-Q05", query: "Quem fundou a AUDITSEO?", system: "Google AI Overviews" },
      { id: "T0-Q06", query: "Sidney Santos Search Intelligence", system: "Google Search" },
      { id: "T0-Q07", query: "Sidney Santos Entity Authority", system: "Google Search" },
      { id: "T0-Q08", query: "AUDITSEO Sidney Santos", system: "Google Search" },
    ],
    observations: [
      "Resultados qualitativos classificados em YES, NO ou UNCLEAR para evitar scores compostos arbitrários.",
    ],
    findings: [
      "Experimento em andamento; medição T1 pendente de ciclo de processamento."
    ],
    limitations: [
      "DRAFT interno; não representa conclusão definitiva.",
      "Ausência de pontuação agregada (aggregate score) para evitar viés de métrica proprietária."
    ],
    interventions: [
      {
        id: "POST-T0-INT-001",
        title: "Identity & Positioning Consistency Alignment",
        type: "INTERVENTION",
        moment: "POST-T0",
        objective: "Alinhar identidade pública e posicionamento canônico.",
        description: "Padronização de marcos temporais (SEO desde 2009), vinculação explícita Person ↔ Organization, e publicação de artigos técnicos no Article Design System V3.",
      }
    ],
    relatedResearch: [
      { title: "Por que o Google reconhece uma pessoa para um tema e praticamente a ignora para outro?", href: "/estudos-busca-ia/reconhecimento-de-entidade-por-contexto", status: "PUBLISHED" },
    ],
    topicRelations: ["Entity Recognition", "Entity Resolution", "Experiment Design"],
    references: ["AUDITSEO Internal Research Registry — EXP-001"],
  },
  {
    id: "AUDITSEO-ANALYSIS-001",
    slug: "impacto-da-autoridade-de-entidade-nos-ai-overviews",
    route: "/estudos-busca-ia/impacto-da-autoridade-de-entidade-nos-ai-overviews",
    title: "O Impacto da Autoridade de Entidade nos AI Overviews",
    subtitle: "Registro de migração de análise histórica sobre citação em respostas geradas por inteligência artificial.",
    description: "Registro migratório interno (MIGRATION_PENDING) referente a análises anteriores sobre o comportamento de citação de entidades em AI Overviews.",
    type: "ANALYSIS",
    status: "MIGRATION_PENDING",
    author: SIDNEY_AUTHOR,
    publisher: AUDIT_PUBLISHER,
    datePublished: "2026-08-12",
    dateModified: "2026-08-12",
    evidenceProfile: [
      {
        type: "DOCUMENTADO",
        statement: "Registro de existência prévia de análise sobre AI Overviews e autoridade de entidade nos acervos de pesquisa da AUDITSEO.",
      }
    ],
    context: "Conteúdo original não integralmente preservado nos relatórios de recovery atuais.",
    limitations: [
      "Item mantido com status MIGRATION_PENDING / DRAFT interno.",
      "Nenhum texto fictício foi fabricado para preencher a lacuna histórica.",
    ],
    recommendations: [
      "Aguardar recuperação documental futura antes de reativar a rota pública."
    ],
    topicRelations: ["AI Overviews", "Entity Authority", "Citation Dynamics"],
    references: ["AUDITSEO Legacy Index — Analysis #001"],
  }
];
