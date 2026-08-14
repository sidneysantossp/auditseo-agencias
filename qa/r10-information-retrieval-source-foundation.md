# AUDITSEO — R10 Information Retrieval Source Foundation

**Status:** **ESTABLISHED**  
**Data:** 14 de agosto de 2026  
**Cluster:** AI Search (`AI_SEARCH`)  
**Artigo Associado:** Supporting #008 — *Recuperação de informação em AI Search: fontes, contexto e conhecimento* (`AUDITSEO-ARTICLE-AISEARCH-008`)  

---

## 1. Objetivo e Escopo
Esta fundação estabelece as bases conceituais, documentações oficiais, papers técnicos e observações metodológicas para fundamentar o artigo **#008**. O objetivo é separar rigorosamente conceitos gerais de Information Retrieval (IR), Retrieval-Augmented Generation (RAG) e Grounding das especificidades arquiteturais e dos limites de observação externa em plataformas de AI Search.

---

## 2. Source Classes & Inventory

| ID | Fonte / Autoridade | URL / Referência | Source Class | Evidência Class |
| :-- | :-- | :-- | :-- | :-- |
| **[1]** | Google Search Central | [Optimizing for generative AI features](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) | OFFICIAL PLATFORM DOCUMENTATION | DOCUMENTADO — GOOGLE |
| **[2]** | Google Search Central | [AI features and your website](https://developers.google.com/search/docs/appearance/ai-features) | OFFICIAL PLATFORM DOCUMENTATION | DOCUMENTADO — GOOGLE |
| **[3]** | Lewis et al. (Meta AI / NYU) | [Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks (arXiv:2005.11401)](https://arxiv.org/abs/2005.11401) | RESEARCH PAPER | DOCUMENTADO |
| **[4]** | Manning, Raghavan, Schütze (Stanford) | [Introduction to Information Retrieval (Cambridge University Press)](https://nlp.stanford.edu/IR-book/) | PRIMARY TECHNICAL DOCUMENTATION | DOCUMENTADO |
| **[5]** | AUDITSEO Search Intelligence Lab | [Observações sobre acurácia e contexto em AI Search](/estudos-busca-ia) | AUDITSEO OBSERVATION | OBSERVADO |

---

## 3. Três Camadas Obrigatórias de Análise

### Camada A — Conceito Técnico Geral
- **Information Retrieval (IR):** O campo científico que estuda processos de localizar e recuperar informação relevante a partir de uma coleção ou espaço de informação diante de uma necessidade informacional [4].
- **RAG (Retrieval-Augmented Generation):** Paradigma que combina um componente de recuperação de documentos com um modelo gerador, permitindo que a resposta seja condicionada a trechos recuperados externamente [3].
- **Lexical vs. Semantic Retrieval:** Recuperação baseada em correspondência exata de termos (ex: BM25/TF-IDF) versus recuperação baseada em similaridade vetorial e embeddings semânticos.

### Camada B — Implementação Documentada
- **Google Search (AIO):** Documentação oficial confirma o uso de infraestrutura central de busca (índice global, ranking e crawling) combinada com mecanismos de grounding e query fan-out para alimentar resumos gerados [1] [2].
- **RAG Original:** O paper seminal de Lewis et al. (2020) define a arquitetura paramétrica + não-paramétrica (Dense Passage Retriever + BART) para tarefas de QA intensivas em conhecimento [3].

### Camada C — Mecanismo Não Observável (Unknown)
- **Pesos Internos e Scoring Proprietário:** Os algoritmos exatos de re-ranking (cross-encoder), seleção de trechos, pesos de embeddings e limiares de ativação em sistemas comerciais fechados permanecem **UNKNOWN** para observadores externos.

---

## 4. Tese Central e Limites Metodológicos
1. **Retrieval ≠ Generation ≠ Synthesis:** Recuperar não é gerar; gerar não é sintetizar; sintetizar não é garantir acurácia de atribuição.
2. **RAG ≠ AI Search Inteiro:** RAG é uma técnica de arquitetura de IA, enquanto AI Search abrange ecossistemas de descoberta, superfícies de interface, índices de busca, representação de entidades e experiência do usuário.
3. **Knowledge Parametric vs. Retrieved Context:** O comportamento de uma resposta depende de uma fronteira complexa entre o que o modelo codificou em seus parâmetros durante o treinamento e o que foi injetado dinamicamente via contexto recuperado. Em sistemas comerciais, essa decomposição não pode ser medida externamente de forma absoluta.


## 5. Claim Matrix

| Claim | Claim Type | Source | Evidence Class | System | Current? | Limitation | Can Publish? |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| Information Retrieval localiza informação relevante em uma coleção diante de uma necessidade informacional | GENERAL TECHNICAL CLAIM | [4] Introduction to Information Retrieval | DOCUMENTADO | Geral | Sim | Formulação conceitual, não comportamento de plataforma | Sim |
| RAG combina recuperação de informação e geração | GENERAL TECHNICAL CLAIM | [3] Lewis et al. | DOCUMENTADO | Geral | Sim | Paper descreve um sistema específico, não todos os produtos generativos | Sim |
| Uma camada de AI Search pode combinar funcionalidades generativas com o sistema de busca | SYSTEM-SPECIFIC CLAIM | [1] [2] Google Search Central | DOCUMENTADO — GOOGLE | Google Search | Sim, conforme documentação vigente consultada | Não generalizar para outros sistemas; a documentação não revela scores, candidatos descartados ou contexto completo | Sim, com rótulo de sistema |
| Query expansion, fan-out e hybrid retrieval são arquiteturas universais de todos os produtos de AI Search | UNKNOWN CLAIM | [1] [2] não sustentam universalidade | UNKNOWN | Não aplicável | Não | Não existe base primária única para a generalização | Não |
| Uma source visível representa toda a cadeia de retrieval | UNKNOWN CLAIM | Não disponível | UNKNOWN | Não aplicável | Não | Interface não é retrieval trace; faltam logs internos | Não |
| Entity Home é uma fonte controlada de identidade e contexto no modelo editorial AUDITSEO | AUDITSEO INFERENCE | Modelo editorial AUDITSEO | INFERIDO / RECOMENDADO | AUDITSEO | Sim | Não é garantia de retrieval ou citação | Sim, com rótulo editorial |
| Contexto pode influenciar a representação observada de uma entidade | AUDITSEO OBSERVATION | Observation #001 | OBSERVADO | Sistema observado no Lab | Sim, no dataset registrado | Não identifica o mecanismo interno causal | Sim, com escopo do dataset |
| Entidade correta pode coexistir com atributo incorreto na resposta observada | AUDITSEO OBSERVATION | Observation #002 | OBSERVADO | Sistema observado no Lab | Sim, no dataset registrado | Não permite atribuir falha a retrieval, seleção, conhecimento ou síntese | Sim, com escopo do dataset |

## 6. Unknown Claims que não serão publicados como fatos

Permanecem explicitamente desconhecidos o peso interno de uma página, o embedding específico usado por uma plataforma, a pontuação de reranking, a ordem completa de seleção, todos os candidatos recuperados, os documentos descartados, o contexto integral de geração e a contribuição exata de cada fonte visível. A ausência de acesso a esses elementos impede a construção de um retrieval score, RAG readiness score, AI retrievability score ou vector authority score.

Também não será publicado que schema garante retrieval ou citation, que Entity Home é uma fonte principal de uma IA, que backlinks garantem inclusão em contexto, que RAG é a arquitetura universal de AI Search, ou que uma citação visível prova a totalidade da recuperação. Esses claims estão fora da fronteira de evidência desta fase.

## 7. Research Dependencies e Planned Research Questions

A redação depende de quatro camadas: a literatura técnica de IR para conceitos gerais; o paper original de RAG para a definição do paradigma; documentação oficial do Google para claims específicos da superfície documentada; e as Observations #001 e #002 da AUDITSEO para os findings observados em seus próprios contextos. Não foram utilizados estudos externos de marketing como base principal, portanto **EXTERNAL STUDIES = 0**.

Perguntas úteis surgidas durante a análise são registradas apenas como research questions planejadas. **RQ-RET-001:** qual é a estabilidade entre sources visíveis e conteúdo da resposta quando queries são repetidas? **RQ-RET-002:** uma source visível permanece semanticamente alinhada às afirmações que aparenta apoiar? **RQ-RET-003:** quanto varia o conjunto de sources visíveis entre reformulações semanticamente próximas da mesma necessidade informacional? Todas permanecem em status **PLANNED**; nenhuma foi executada e nenhuma nova Observation ou Experiment foi criada.

## 8. Evidence Governance

O artigo #008 utiliza as cinco classes editoriais vigentes: **DOCUMENTADO**, quando há literatura técnica ou documentação oficial; **OBSERVADO**, quando o estado foi capturado no Search Intelligence Lab; **TESTADO**, reservado a protocolo controlado; **INFERIDO**, quando a conclusão é uma interpretação declarada; e **RECOMENDADO**, quando a orientação é uma prática controlável sem promessa causal. Nenhum conceito técnico geral foi automaticamente convertido em comportamento específico de plataforma.
