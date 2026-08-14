# AUDITSEO — R11 Citations & Attribution in AI Search

**Status do Gate:** **PASS — STOP GATE ACTIVE**  
**Article ID:** `AUDITSEO-ARTICLE-AISEARCH-009`  
**Tipo:** `SUPPORTING`  
**Rota:** `/guias/citacoes-e-fontes-em-ai-search`  
**Data:** 14 de agosto de 2026  

## 1. Source Truth

| Campo | Resultado |
| :-- | :-- |
| Repositório local | `/home/ubuntu/auditseo-agencias` |
| Branch | `recovery/auditseo-editorial-v3` |
| Canonical recovery remote | `sidneysantossp/auditseo-agencias-recovery-persistence` |
| HEAD de origem R11 | `2e796ebbf3c3189ac23ab8814371e96ee6fbfd92` |
| Local / remote sync no pre-gate | **PASS** |
| R10 persistida | **PASS** |

A fase R11 partiu exatamente do HEAD remoto confirmado após o closeout de R10. O primary remote não foi usado como fonte editorial paralela. A implementação e o QA foram persistidos no commit `f5e83fe63c204e594cd1c264638e08515f1f4de6`; após o push, `backup/main` apontou para o mesmo hash.

## 2. R10 Audit First

O artigo #009 continua o #008 sem duplicá-lo integralmente. Os conceitos reutilizados são **Visible Source ≠ Full Retrieval Trace**, **Grounding ≠ Citation**, **Source Selection ≠ Retrieval**, **Retrieval Observability Boundary**, **Evidence Levels** e a regra de separar output observável de mecanismo interno. Esses conceitos aparecem apenas como ponte para o problema de citation e attribution.

O #009 não absorve a metodologia completa de measurement do #010, não cria Share of Model, não cria AI Visibility metric, não inicia Search Intelligence Lab Expansion e não introduz tracking, dashboard ou citation score. A nova propriedade editorial é a análise de **Source, Citation, Mention, Attribution, Entity Representation e Answer-Source Alignment**.

## 3. Publication Contract

| Campo | Resultado |
| :-- | :-- |
| H1 | Citações e atribuição em respostas de IA: o que conseguimos observar |
| Canonical | `https://www.auditseo.com.br/guias/citacoes-e-fontes-em-ai-search` |
| Parent | `/guias/ai-search` |
| Previous | `/guias/recuperacao-de-informacao-ai-search` |
| Next | #010 — **PLANNED**, sem placeholder publicado |
| Primary cluster | `AI_SEARCH` |
| Secondary clusters | `SEARCH_INTELLIGENCE`, `ENTITY_AUTHORITY`, `SEO` |
| Word count útil | **5.028** |

O artigo foi incluído no registry central, recebeu metadata de rota, canonical no comportamento padrão do Article Design System V3 e URL no sitemap.

## 4. Source Foundation

A fundação foi criada antes da redação em `qa/r11-citations-attribution-source-foundation.md`. O inventário foi ampliado com documentação atual acessada em 14 de agosto de 2026:

| Fonte | Classe | Sistema | Claims suportados |
| :-- | :-- | :-- | :-- |
| Google Search Central — AI features and your website | OFFICIAL PLATFORM DOCUMENTATION | Google AI Overviews / AI Mode | Links de apoio, query fan-out documentado e variação entre superfícies |
| OpenAI Help Center — ChatGPT Search | OFFICIAL PLATFORM DOCUMENTATION | ChatGPT Search | Inline citations, painel Sources, links e query rewriting documentados |
| Perplexity — Getting started with Perplexity | OFFICIAL PRODUCT DOCUMENTATION | Perplexity | Fontes e citations clicáveis conforme descrição da experiência |
| AUDITSEO Search Intelligence Lab | AUDITSEO OBSERVATION | Observations #001 e #002 | Representação sensível ao contexto e mismatch de atributos no contexto original |

**EXTERNAL STUDIES = 0.** Nenhum estudo de marketing foi usado como prova de mecanismo interno. Claims sobre sistemas foram mantidos system-specific, com data de acesso e limitações explícitas.

## 5. Evidence Governance

O artigo utiliza **DOCUMENTADO**, quando a fonte oficial ou técnica sustenta o claim; **OBSERVADO**, quando o evento aparece em uma captura ou Observation existente; **TESTADO**, reservado a protocolos controlados; **INFERIDO**, quando a interpretação é declarada; e **RECOMENDADO**, quando a orientação é controlável sem garantia causal.

As Observations #001 e #002 permanecem **OBSERVADO**. A #001 é utilizada para o contexto-sensitive representation; a #002 é utilizada para demonstrar que a entidade correta pode coexistir com um atributo incorreto. Nenhuma Observation foi reclassificada, ampliada ou transformada em citation experiment.

## 6. Required Information Gain

| Requirement | Status |
| :-- | :-- |
| Source ≠ Citation ≠ Mention ≠ Attribution | **PASS** |
| Five Observable States Model | **PASS** |
| Citation ≠ Authority | **PASS** |
| Citation ≠ Endorsement | **PASS** |
| Citation ≠ Retrieval Trace | **PASS** |
| Cited Source ≠ Only Knowledge Source | **PASS** |
| Source Order ≠ Importance | **PASS** |
| Number of Citations ≠ Quality | **PASS** |
| Entity Presence ≠ Source Presence | **PASS** |
| Official vs. Third-Party Taxonomy | **PASS** |
| Attribution Accuracy | **PASS** |
| Answer-Source Alignment Model | **PASS** |
| Claim Map | **PASS** |
| Source Map | **PASS** |
| Entity Map | **PASS** |
| Citation Typology | **PASS** |
| Source Diversity / Concentration / Repetition / Volatility | **PASS** |
| Citation Observation Framework | **PASS** |
| Citation Evidence Levels qualitativos | **PASS** |
| Source-Citation Observability Model | **PASS** |
| Citation Decision Model | **PASS** |
| Evidence Boundary | **PASS** |
| Myth Audit | **PASS** |

O artigo não cria Citation Authority Score, Source Trust Score, AI Citation Score, GEO Citation Score ou qualquer escala numérica de 0–100.

## 7. System-Specific Boundary

Google, ChatGPT e Perplexity são mencionados somente quando há documentação oficial adequada. Os claims permanecem delimitados ao sistema, à superfície, à data e ao tipo de interface documentados. Não foi criada uma tabela comparativa especulativa entre plataformas.

A documentação do Google declara que AI Overviews e AI Mode podem usar query fan-out e exibir links de apoio, mas também informa que as superfícies podem usar modelos e técnicas diferentes [5]. O Help Center da OpenAI descreve inline citations e o painel Sources em ChatGPT Search [6]. A documentação de produto da Perplexity descreve citations clicáveis [7]. Nenhum desses documentos revela o peso interno de uma source, o conjunto completo de candidatos ou a causa individual da citação.

## 8. Author POV e Argumento Central

A tese editorial permanece: **observar primeiro, inferir depois, não transformar output visível em retrieval trace**. O artigo afirma que uma citation é uma camada de interface e atribuição, não um log completo de retrieval. A voz autoral é deliberadamente contrária à analogia de citation como backlink 2.0 e recusa promessas de confiança, autoridade, ranking ou endorsement.

**AUTHOR POV = HIGH.**  
**ARGUMENT DEPTH = HIGH.**  
**INFORMATION GAIN = HIGH.**  
**UNSUPPORTED CAUSALITY = NONE.**

## 9. Topic Graph e Internal Links

O Pillar `/guias/ai-search` foi reconciliado para apontar ao #009. O #008 aponta para o #009 como próximo Supporting publicado. O #009 aponta para o parent e previous corretos, sem link quebrado para o #010.

A rota de Entity Authority foi mapeada para o guia canônico existente `/guias/o-que-e-entidade-seo`, e não para o alias inexistente `/guias/entity-authority`. Também foram incluídos links contextuais para Entity Home, desambiguação, consistência, autoria, corroboração, Search Intelligence Lab, Observations #001/#002, #008 e diagnóstico. **BROKEN LINKS = PASS.**

## 10. Planned Research Questions

Nenhuma pergunta foi executada. Foram registradas como **PLANNED**:

| ID | Pergunta |
| :-- | :-- |
| RQ-CIT-001 | Quão estável é o conjunto de sources visíveis para uma mesma query ao longo de observações repetidas? |
| RQ-CIT-002 | Com que frequência uma citation visível possui alinhamento direto com a claim que aparenta sustentar? |
| RQ-CIT-003 | Como a combinação entre official sources e independent external sources varia por classe de query? |
| RQ-CIT-004 | Uma reformulação semanticamente próxima altera o conjunto de sources visíveis? |

**NEW OBSERVATIONS = 0.**  
**NEW EXPERIMENTS = 0.**  
**NEW RESEARCH ITEMS = 0.**

## 11. Featured Image

| Check | Resultado |
| :-- | :-- |
| Path | `public/images/guides/citacoes-e-fontes-em-ai-search/featured.webp` |
| Dimensions | `1200×630` |
| Concept | Resposta generativa central conectada a múltiplas fontes e relações de atribuição |
| Text / letters / URLs / logos | **NONE** |
| HTTP | **200 — image/webp** |
| ALT | Representação visual de uma resposta generativa conectada a múltiplas fontes e relações de atribuição. |

## 12. Real Visual QA

A inspeção foi executada com navegador Chromium headless real em 1440×900, 1440×2600, 390×844 e 390×3000. As evidências estão em `qa/r11-screenshots/`, e os achados consolidados em `qa/r11-visual-findings.md`.

| Check | Desktop | Mobile |
| :-- | :-- | :-- |
| Hero e H1 | **PASS** | **PASS** |
| Featured image | **PASS** | **PASS** |
| Reading progress | **PASS** | **PASS** |
| Sidebar / active TOC | **PASS** | N/A — mobile TOC |
| Sidebar internal scroll | **NONE** | N/A |
| Tables | **PASS** | **PASS** |
| Frameworks / preformatted models | **PASS** | **PASS** |
| CTA / share / author | **PASS** | **PASS** |
| Horizontal overflow | **NONE** | **NONE** |

## 13. Technical QA

| Check | Status |
| :-- | :-- |
| Build | **PASS** — `npm run build` |
| TypeScript | **PASS** — `tsc --noEmit` |
| Lint | **PASS** — `npm run lint` |
| Route HTTP | **PASS** — `/guias/citacoes-e-fontes-em-ai-search` → `200` |
| Featured HTTP | **PASS** — `/images/guides/citacoes-e-fontes-em-ai-search/featured.webp` → `200` |
| Canonical | **PASS** |
| Article schema | **PASS** — Article, Person, Organization, BreadcrumbList reutilizados |
| Sitemap | **PASS** |
| Broken links | **PASS** |
| Hard refresh | **PASS** |
| Desktop | **PASS** |
| Mobile | **PASS** |

O build produziu somente o aviso não bloqueante de chunk JavaScript acima de 500 kB. Não houve erro de compilação ou tipagem.

## 14. Publication Gate

**R11 = PASS.** Source Truth está verificada; R10 foi auditada; a Source Foundation está registrada; documentação atual de plataformas foi qualificada; Source, Citation, Mention e Attribution foram separados; Citation não foi tratada como Authority, Endorsement, Retrieval Trace ou Backlink; Entity Presence não foi tratada como Source Presence; Answer-Source Alignment, Citation Typology, Source Map, Claim Map, Entity Map, Citation Evidence Levels, Source-Citation Observability Model e Citation Decision Model estão implementados; claims system-specific estão delimitados; a Evidence Boundary está explícita; não há causalidade não suportada; Article V3, visual QA e technical QA passaram.

O **STOP GATE está ativo**. Não iniciar #010, SEO vs GEO, Search Intelligence Lab Expansion, novas Observations, novos Experiments, citation score, GEO score, novo sistema de tracking, dashboard ou measurement engine sem validação explícita.

## 15. References

[1]: https://developers.google.com/search/docs/appearance/ai-features "Google Search Central — AI features and your website"

[2]: https://developers.google.com/search/docs/appearance/ai-features "Google Search Central — Controlling content in AI features"

[3]: https://help.openai.com/articles/9237897-chatgpt-search "OpenAI Help Center — ChatGPT Search"

[4]: https://www.perplexity.ai/hub/blog/getting-started-with-perplexity "Perplexity — Getting started with Perplexity"

[5]: https://developers.google.com/search/docs/appearance/ai-features "Google Search Central — AI features and your website"

[6]: https://help.openai.com/articles/9237897-chatgpt-search "OpenAI Help Center — ChatGPT Search"

[7]: https://www.perplexity.ai/hub/blog/getting-started-with-perplexity "Perplexity — Getting started with Perplexity"
