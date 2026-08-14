# AUDITSEO — R12 AI Search Measurement

**Status do Gate:** **PASS — STOP GATE ACTIVE**  
**Article ID:** `AUDITSEO-ARTICLE-AISEARCH-010`  
**Tipo:** `SUPPORTING`  
**Rota:** `/guias/medir-visibilidade-ai-search`  
**Data:** 14 de agosto de 2026  

## 1. Source Truth Pre-Gate

| Campo | Resultado |
| :-- | :-- |
| Repositório local | `/home/ubuntu/auditseo-agencias` |
| Branch | `recovery/auditseo-editorial-v3` |
| Canonical recovery remote | `sidneysantossp/auditseo-agencias-recovery-persistence` |
| HEAD antes da implementação | `962f3b3026613fa9f394b9009e8f5ea8d49a8d53` |
| Remote HEAD antes da implementação | `962f3b3026613fa9f394b9009e8f5ea8d49a8d53` |
| Local / remote sync no pre-gate | **PASS** |
| R11 persistida | **PASS** |

O trabalho R12 partiu do HEAD remoto confirmado após o closeout R11. O primary remote não foi usado como fonte editorial paralela.

## 2. Publication Contract

| Campo | Resultado |
| :-- | :-- |
| H1 | Como medir visibilidade em AI Search |
| Canonical | `https://www.auditseo.com.br/guias/medir-visibilidade-ai-search` |
| Parent | `/guias/ai-search` |
| Previous | `/guias/citacoes-e-fontes-em-ai-search` |
| Next | **NONE** dentro do primeiro mini-cluster |
| Primary cluster | `AI_SEARCH` |
| Secondary clusters | `SEARCH_INTELLIGENCE`, `ENTITY_AUTHORITY`, `SEO` |
| Word count útil | **5.361 palavras** |
| Sections | **34** |
| FAQ entries | **3** |

O artigo foi registrado como `SUPPORTING`, incluído no registry central, recebeu route metadata, canonical, sitemap, schema editorial V3 e featured image canônica.

## 3. Audit #007–#009 First

O #010 foi construído depois da auditoria dos objetos anteriores. A herança editorial está explícita:

| Artigo | Observable objects reutilizados |
| :-- | :-- |
| #007 — AI Overviews | Resposta generativa, surface, fontes visíveis, interface versus mecanismo interno e variação de output |
| #008 — Information Retrieval | Retrieval, generation, grounding, source access, retrieval trace e Retrieval Observability Boundary |
| #009 — Citations & Attribution | Source, Citation, Mention, Attribution, Source Map, Claim Map, Entity Map e Answer-Source Alignment |
| #010 — R12 new ownership | Measurement Contract, Unit of Observation, Query Set, Denominator, Missingness, Measurement Pipeline, Metric Cards, multidimensional interpretation e KPI governance |

O artigo não redefine retrieval ou citation. Ele transforma objetos anteriores em dimensões de mensuração, preservando a separação entre observation, measurement, metric, KPI e score.

## 4. Source Foundation

A Source Foundation foi criada antes da redação em `qa/r12-ai-search-measurement-source-foundation.md`. Ela contém Source Registry, Claim Matrix, Metric Contract, numerator, denominator, inclusion rules, missing states, methodology e limitations.

| Source | Class | Claims suportados |
| :-- | :-- | :-- |
| Google Search Central — AI features measurement | OFFICIAL PLATFORM DOCUMENTATION | Como o Google descreve dados de AI features e limites de leitura no Search Console [1] |
| Google Search Console — Performance report | OFFICIAL PLATFORM DOCUMENTATION | Escopo do relatório de performance [2] |
| AUDITSEO Search Intelligence Lab | AUDITSEO OBSERVATION | Observations #001 e #002 em seus contextos reais [3] |
| AUDITSEO #007–#009 | AUDITSEO FRAMEWORK | Objetos anteriores integrados na mensuração [4] [5] |

Não foram adotadas métricas de vendors como padrão. `Share of Model` foi classificado como **MARKET TERM / METHODOLOGY-DEPENDENT**, não como KPI canônico.

## 5. Tese Central

A tese do artigo é: **visibilidade em AI Search não é uma única posição; é um conjunto de estados observáveis sobre presença, representação, associação, fontes, citations e estabilidade**. Antes de criar um KPI, é necessário declarar o que está sendo contado, em qual query set, sistema, surface e período.

A definição usada é explicitamente rotulada como **DEFINIÇÃO EDITORIAL AUDITSEO**, e não como termo científico universal: AI Search Visibility é o conjunto de estados observáveis que descrevem se e como uma entidade, organização, marca, conteúdo ou fonte aparece e é representada em superfícies generativas dentro de um protocolo definido de observação.

## 6. Measurement Model

O **AUDITSEO AI Search Measurement Model** é apresentado como modelo editorial, não como arquitetura interna de plataforma:

```text
QUERY × SYSTEM × SURFACE × DATE × ENTITY
↓
PRESENCE | REPRESENTATION | ACCURACY | ASSOCIATION | SOURCE
| CITATION | ATTRIBUTION | CONTEXT | STABILITY | VOLATILITY
```

As dimensões são separadas. Visibility não é ranking; citation é somente uma dimensão; presence não é positive representation; source presence não é authority. O framework usa estados qualitativos e métricas descritivas com denominador explícito.

## 7. Measurement Contract e Métricas

O artigo implementa o contrato que todo indicador deve declarar: metric name, question, unit of observation, query set, system, surface, period, numerator, denominator, inclusion rule, exclusion rule, missing state, limitations e business use.

| Métrica exemplificada | Pergunta | Denominador | Limitação declarada |
| :-- | :-- | :-- | :-- |
| Entity Presence Rate | Com que frequência a entidade aparece? | Observações elegíveis | Não mede acurácia, citation ou autoridade |
| Correct Representation Rate | Entity e atributos requeridos estão corretos? | Observações em que a entidade aparece | `NOT OBSERVABLE` não é erro automaticamente |
| Official Source Presence Rate | O domínio oficial aparece? | Observações elegíveis | Não é authority score ou endorsement |
| Citation Presence Rate | Existe citation explícita? | Respostas generativas elegíveis | Surfaces sem citation não são comparáveis sem disclaimer |
| Attribute Error Rate | Um atributo expresso está incorreto? | Observações em que o atributo foi expresso | Depende do atributo definido e verificável |
| Topic Association Coverage | A entidade aparece no tópico desejado? | Observações do topic cluster | É query-set dependent |

Nenhuma métrica foi publicada como score universal. `AI Visibility Score`, `GEO Score`, `AI Authority Score` e `Citation Score` são explicitamente rejeitados como output desta fase.

## 8. Query Set, Sample, Denominator e Missingness

O artigo diferencia query sets estáticos e dinâmicos, classes de query, weighting, sistemas, surfaces, locale, data, horário, sessão e personalização. Não é definido tamanho mínimo universal de amostra. A amostra depende de objetivo, diversidade, disponibilidade e nível de inferência.

A regra editorial central é **PERCENT OF WHAT?** Um valor como “60% de AI Visibility” é incompleto sem saber se o denominador contém todas as queries, apenas respostas generativas, observações com entidade presente ou respostas em que a AI Overview foi exibida.

`ZERO` não é `MISSING`. O artigo diferencia `NO GENERATIVE ANSWER`, `NO CITATIONS DISPLAYED`, `SYSTEM UNAVAILABLE`, `QUERY BLOCKED`, `NO ENTITY MENTION` e `UNKNOWN`. A ausência de citation deve ser codificada segundo o contrato da surface, nunca convertida automaticamente em zero.

## 9. Share of Model

O artigo dedica um capítulo próprio ao termo. Share of Model não é descartado, mas não é adotado cegamente. Brand mentions / all brand mentions, queries where brand appears / total queries e recommendations containing brand / recommendation queries produzem números diferentes.

Classificação AUDITSEO: **MARKET TERM / METHODOLOGY-DEPENDENT**. O termo pode ser usado apenas com definição operacional, query set, system, surface, período, numerator, denominator, inclusion rule, missing state e limitations. A analogia automática com Share of Voice foi rejeitada.

## 10. Multidimensionalidade e Causalidade

A matriz descritiva implementada mostra quatro estados: alta presença + alta acurácia; alta presença + baixa acurácia; baixa presença + alta acurácia; baixa presença + baixa acurácia. Esses rótulos são diagnósticos, não quadrantes de score.

O artigo também estabelece que uma mudança entre T0 e T1 não prova impacto de uma intervenção. Causalidade exigiria controles, repeatability, tratamento de confundidores e desenho experimental apropriado. As Observations #001 e #002 permanecem **OBSERVADO** e não foram usadas para criar novos claims causais.

## 11. Entity Authority Bridge

A ponte com Entity Authority conecta identity, disambiguation, consistency, authorship e corroboration à pergunta: **essas fundações estão refletidas corretamente nos outputs observados?** O artigo não pergunta se essas práticas causam citation. A #001 é usada para topic/context association; a #002 é usada para attribute accuracy, em que a entidade apareceu mas o atributo estava errado.

**NEW OBSERVATIONS = 0.**  
**NEW EXPERIMENTS = 0.**  
**NEW RESEARCH ITEMS = 0.**

## 12. Planned Research Questions

As questões permanecem planejadas:

| ID | Planned Research Question |
| :-- | :-- |
| RQ-MEA-001 | Quanto Entity Presence varia entre observações repetidas de um query set fixo? |
| RQ-MEA-002 | Quão estável é Attribute Accuracy entre sistemas e surfaces? |
| RQ-MEA-003 | Como Official Source Presence varia por query class? |
| RQ-MEA-004 | Quão diferentes são os resultados quando Share of Model usa denominadores distintos? |
| RQ-MEA-005 | Como missing states alteram a interpretação de Citation Presence Rate? |

Nenhuma pergunta foi executada como Observation, Experiment ou Research Item.

## 13. Visual QA Real

A inspeção foi executada com Chromium headless real em 1440×900, 1440×3000, 390×844 e 390×3000. Os achados estão em `qa/r12-visual-findings.md`.

| Check | Desktop | Mobile |
| :-- | :-- | :-- |
| Hero / H1 / subheadline | **PASS** | **PASS** |
| Featured image | **PASS** | **PASS** |
| Author / metadata | **PASS** | **PASS** |
| Reading progress | **PASS** | **PASS** |
| Sidebar / active TOC | **PASS** | N/A — mobile TOC |
| Sidebar internal scroll | **NONE** | N/A |
| Tables / definition blocks | **PASS** | **PASS** |
| Monospace frameworks | **PASS** | **PASS** |
| CTA / author / sharing | **PASS** | **PASS** |
| Horizontal overflow | **NONE** | **NONE** |

## 14. Featured Image

| Check | Resultado |
| :-- | :-- |
| Path | `public/images/guides/medir-visibilidade-ai-search/featured.webp` |
| Dimensions | `1200×630` |
| Concept | Matriz analítica multidimensional de observação e mensuração |
| Text / letters / logos | **NONE** |
| HTTP | **200 — image/webp** |
| ALT | Representação visual de matriz multidimensional de observação e mensuração em AI Search. |

## 15. Technical QA

| Check | Status |
| :-- | :-- |
| Build | **PASS** — `npm run build` |
| TypeScript / lint | **PASS** — `npm run lint` |
| Word count | **PASS** — 5.361 palavras úteis |
| Article ID / type | **PASS** — `AUDITSEO-ARTICLE-AISEARCH-010` / `SUPPORTING` |
| Registry | **PASS** |
| Route metadata | **PASS** |
| Sitemap | **PASS** |
| Route HTTP | **PASS** — `/guias/medir-visibilidade-ai-search` → `200` |
| Featured HTTP | **PASS** — `featured.webp` → `200` |
| Featured dimensions | **PASS** — 1200×630 |
| Canonical / schema | **PASS** — Article, Person, Organization, BreadcrumbList reutilizados |
| Broken links / hash placeholders | **PASS** — nenhum `href: "#"` |
| Next route | **PASS** — none, conforme contrato |
| Worktree before final commit | **CLEAN** |

O build produziu apenas o aviso não bloqueante de chunk JavaScript acima de 500 kB.

## 16. Publication Gate

**R12 = PASS.** O artigo #010 fecha metodologicamente o mini-cluster AI Search sem iniciar SEO vs GEO, Search Intelligence Lab Expansion, novas Observations, novos Experiments, measurement engine, tracking platform, dashboard, monitoring database ou score arbitrário.

A mensuração foi definida como aplicação consistente de regras sobre observações comparáveis. Métrica foi separada de KPI; KPI foi separado de score; presence foi separada de quality; citation foi separada de visibility; change foi separada de causalidade; zero foi separada de missing; Share of Model foi classificado como term-dependent.

O **STOP GATE está ativo**. O próximo movimento após R12 é a fase de **SYSTEM AUDIT**, não a criação automática de nova plataforma de monitoramento.

## 17. References

[1]: https://developers.google.com/search/docs/appearance/ai-features#measuring-the-performance-of-your-site "Google Search Central — Measuring the performance of your site in AI features"

[2]: https://support.google.com/webmasters/answer/7576553 "Google Search Console Help — Performance report"

[3]: /estudos-busca-ia "AUDITSEO — Search Intelligence Lab"

[4]: /guias/citacoes-e-fontes-em-ai-search "AUDITSEO — Citações e atribuição em respostas de IA"

[5]: /guias/recuperacao-de-informacao-ai-search "AUDITSEO — Recuperação de Informação em AI Search"
