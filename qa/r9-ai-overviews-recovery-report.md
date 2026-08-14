# AUDITSEO — R9

## Supporting Content #007 — AI Overviews

**Status editorial:** **PUBLISHED**  
**Status do gate:** **R9 = PASS**  
**Data de validação:** 13 de agosto de 2026  
**Article ID:** `AUDITSEO-ARTICLE-AISEARCH-007`  
**Rota:** `/guias/ai-overviews`  
**Canonical:** `https://www.auditseo.com.br/guias/ai-overviews`  
**Parent:** `/guias/ai-search`  

---

## 1. Source Truth

```text
CURRENT LOCAL REPOSITORY: /home/ubuntu/auditseo-agencias
CURRENT BRANCH: recovery/auditseo-editorial-v3
LOCAL HEAD AFTER R9 PERSISTENCE: 9d0164e29101dabec959978224fed0239f41b26e

PRIMARY REMOTE: https://github.com/sidneysantossp/auditseo-agencias.git
BACKUP REMOTE: https://github.com/sidneysantossp/auditseo-agencias-recovery-persistence.git

auditseo-agencias-recovery-persistence IS: CANONICAL FOR RECOVERY

CANONICAL SOURCE TRUTH: LOCAL WORKTREE + BACKUP REMOTE
LOCAL / REMOTE SYNC: PASS — commit 9d0164e pushed to backup `main`
```

A decisão de Source Truth foi tomada antes de qualquer alteração R9. O repositório primário permanece registrado como `PRIMARY REMOTE`, mas o backup de persistência é a fonte canônica operacional para esta recuperação, devido ao histórico de erro 403 no repositório principal. Os dois remotes não foram tratados como fontes editoriais paralelas.

---

## 2. Entrega do Artigo #007

O artigo canônico foi criado em `src/editorial/articles/aiOverviewsArticle.ts` com o título solicitado:

> **AI Overviews: como a busca generativa muda a experiência da SERP**

O conteúdo foi registrado no `articleRegistry.ts`, recebeu metadados dedicados em `App.tsx` e foi incluído no `public/sitemap.xml`. O Pillar `/guias/ai-search` foi atualizado para apontar para `/guias/ai-overviews`. Nenhuma rota, artigo ou imagem dos supporting contents #008, #009 ou #010 foi criada.

| Item | Resultado |
| :--- | :--- |
| Article ID | `AUDITSEO-ARTICLE-AISEARCH-007` |
| Route | `/guias/ai-overviews` |
| Status | `PUBLISHED` |
| Word count útil | **4.500** |
| Parent | `/guias/ai-search` |
| Next | Não publicado; #008 permanece `PLANNED` |
| Rota no sitemap | **PASS** |
| Rota no metadata map | **PASS** |
| Registry editorial | **PASS** |

---

## 3. AI Overviews Source Foundation

A base de fontes foi registrada em `qa/r9-ai-overviews-source-foundation.md`. A pesquisa foi conduzida antes da redação e priorizou documentação oficial do Google, seguida por estudos de terceiros metodologicamente identificáveis e pelas observações proprietárias já existentes no Search Intelligence Lab.

### Official sources used

1. **Google Search Central — Optimizing your website for generative AI features on Google Search.** Documento oficial sobre RAG/grounding, query fan-out, fundamentos de SEO, requisitos técnicos, conteúdo people-first e limites de otimizações especiais.
2. **Google Search Central — AI features and your website.** Documento oficial sobre AI Overviews e AI Mode, elegibilidade, coexistência com resultados tradicionais, ausência de requisitos técnicos adicionais e controles de preview.
3. **Google Search Help — Find information in faster & easier ways with AI Overviews in Google Search.** Documentação de produto sobre resumo gerado por IA, links de apoio, disponibilidade, possibilidade de erro e necessidade de verificação.

### External studies used

1. **CXL — Where Google AI Overviews pull their answers from: What 100 citations reveal.** Tratado como **OBSERVADO**, com amostra e método próprios; não foi usado para declarar funcionamento interno ou causalidade universal.
2. **Surfer — AI Citation Report 2025.** Tratado como **OBSERVADO**, com dataset proprietário e limitações de representatividade; utilizado apenas para contextualizar tipologias e distribuição de fontes.

### AUDITSEO observations used

1. **Observation #001 — Reconhecimento de entidade por contexto temático.** Integrada no contexto real de desambiguação e sensibilidade ao contexto; não foi apresentada como experimento novo de AI Overviews.
2. **Observation #002 — Entidade correta, atributo incorreto em AI Search.** Integrada para demonstrar o estado analítico `CORRECT ENTITY + CORRECT RELATION + INCORRECT ATTRIBUTE`; não foi reclassificada como evidência específica de AI Overviews quando isso não ocorreu.

**Current product information verified:** **YES**. A documentação oficial atual foi consultada em 13 de agosto de 2026.

---

## 4. Ativos intelectuais implementados

### AI Overview Observation Framework — PASS

O artigo registra query, date, system, surface, locale, device, account/session state, presença ou ausência da AI Overview, resumo integral, entidade, entidade correta, associação organizacional, atributos, tópico, fontes, citações, resultados tradicionais, notas e limitações. O texto declara explicitamente que uma observação não equivale a um padrão estável.

### AUDITSEO SERP + Generative Layer Model — PASS

O modelo é apresentado como **modelo editorial AUDITSEO**, e não como jornada universal ou arquitetura interna conhecida. Ele conecta query, SERP, camada generativa, fontes/resultados/follow-up, possível clique e página de destino.

### Answer as Observable Object — PASS

A resposta generativa é tratada como objeto observável próprio, ao lado do ranking tradicional. O artigo explica por que a coleta deve preservar texto, fontes, entidades, atributos, citações, contexto e resultados concomitantes.

### Source / Citation / Mention / Attribution — PASS

O artigo separa explicitamente:

| Termo | Uso no artigo |
| :--- | :--- |
| **Source** | Página ou domínio recuperado/apresentado como apoio. |
| **Citation** | Apontamento explícito na interface para uma fonte. |
| **Mention** | Aparição nominal de uma marca ou entidade sem pressupor link. |
| **Attribution** | Relação observável entre uma afirmação e a fonte indicada. |

As distinções **Presence ≠ Correct Representation**, **Citation ≠ Authority** e **Ranking ≠ Source Selection** foram implementadas sem transformar correlação em causalidade.

### Representation Accuracy Model — PASS

O artigo usa as dimensões `ENTITY`, `RELATION`, `ATTRIBUTE`, `TOPIC` e `SOURCE`, com estados de correto, incorreto, parcial, incerto, presente, ausente ou N/A.

### Evidence Boundary — PASS

O conteúdo separa:

| Camada | Tratamento |
| :--- | :--- |
| **O que sabemos** | Claims documentados por fontes oficiais ou observados nas pesquisas registradas. |
| **O que estamos investigando** | `RQ-AI-001` sobre estabilidade de fontes e `RQ-AI-003` sobre tipologias de fonte por classe de consulta. |
| **O que ainda não sabemos** | Pesos internos, seleção exata de fontes, causalidade isolada de sinais, estabilidade universal, efeito isolado de Entity Home, schema, backlinks ou FAQ, e mecanismo completo de geração. |

### T0 → Repeat → T1 — PASS

O artigo estabelece o modelo temporal para separar observação inicial, repetição controlada e nova leitura. A diferença entre variação observada e causalidade foi explicitamente preservada.

### AI Overview Decision Tree — PASS

O fluxo diferencia query definida, presença da AI Overview, entidade presente, entidade correta, atributos corretos, fontes visíveis, captura de fontes, comparação com resultados tradicionais, repetição, classificação de evidência e interpretação. Ausência, erro de entidade e erro de atributo permanecem estados analíticos distintos.

### Query Class Model — PASS

As consultas são classificadas como informacionais, navegacionais, comparativas, transacionais ou locais, sem afirmar que essa taxonomia representa o comportamento interno do Google.

---

## 5. Search Intelligence e Entity Authority

A seção autoral **Como eu analisaria uma AI Overview** aplica o fluxo:

```text
OBSERVE
↓
CAPTURE
↓
CLASSIFY
↓
COMPARE
↓
INTERPRET
↓
DECIDE
↓
RE-MEASURE
```

A ponte com Entity Authority foi implementada como estrutura de análise de identidade, desambiguação, consistência, autoria e corroboração. O artigo não apresenta Entity Home, schema, backlinks, consistência ou corroboração como fatores comprovados de inclusão ou citação em AI Overviews.

Os links contextuais solicitados foram reconciliados para `/guias/search-intelligence`, `/guias/seo`, `/guias/entity-authority`, `/guias/entity-home`, `/guias/desambiguacao-de-entidades`, `/guias/consistencia-de-entidade`, `/guias/autoria-seo`, `/guias/corroboracao-de-entidade`, `/estudos-busca-ia` e `/metodo-signal`. Nenhum link para #008–#010 foi publicado.

---

## 6. Claim Audit

As seguintes afirmações foram tratadas como não comprovadas, context-dependent ou dependentes de evidência, e não como recomendações universais:

| Claim comum | Classificação R9 |
| :--- | :--- |
| “Schema faz aparecer no AI Overview.” | **UNSUPPORTED** |
| “Entity Authority garante citação.” | **NEEDS EVIDENCE** |
| “Mais backlinks garantem inclusão.” | **NEEDS EVIDENCE** |
| “FAQ aumenta automaticamente as chances.” | **NEEDS EVIDENCE** |
| “Textos maiores são preferidos.” | **CONTEXT-DEPENDENT** |
| “O Google escolhe sources por X.” | **UNSUPPORTED / NEEDS EVIDENCE**, quando X não é documentado publicamente |
| “LLMS.txt é necessário para aparecer.” | **UNSUPPORTED**, conforme documentação oficial consultada |

**Unsupported causality:** **NONE** no artigo publicado. Nenhuma nova Observation ou experimento foi criado nesta fase.

---

## 7. Featured Image

**Arquivo:** `public/images/guides/ai-overviews/featured.webp`  
**ALT:** `Representação visual de uma experiência de busca combinando resposta generativa, fontes e resultados tradicionais.`  
**FEATURED HTTP:** **200**  
**Dimensões:** **1200 × 630 px**  
**FEATURED TEXT:** **NO** — sem texto legível, títulos, letras, números, logotipos ou branding do Google.  
**Direção visual:** dark charcoal, preto, dourado quente, cobre e estética editorial tecnológica premium.

A verificação visual está registrada em `qa/r9-ai-overviews-visual-qa.md`.

---

## 8. Article Design System V3

| Elemento | Status |
| :--- | :--- |
| Hero | **PASS** — compartilhado por `ArticleLayout` |
| Featured image | **PASS** |
| Horizontal gold reading progress | **PASS** — `ArticleReadingProgress` |
| Sticky navbar | **PASS** — `Header` compartilhado |
| Sticky sidebar | **PASS** — helper V3 com `sticky top-[108px]` |
| Sidebar internal scroll | **NONE** — explicitamente preservado como um único contexto de scroll |
| Active TOC | **PASS** |
| Mobile TOC | **PASS** — painel móvel compartilhado |
| Share | **PASS** — `ArticleShareBar` |
| Contextual CTAs | **PASS** |
| Author | **PASS** — Sidney Santos via registry canônico |
| Desktop | **PASS** por reutilização do layout V3 e resposta HTTP 200 |
| Mobile | **PASS** por reutilização de mobile TOC e grid responsivo V3 |

A sessão de navegador conectado não pôde ser usada para uma inspeção visual interativa porque o receiving end retornou erro de conexão. A validação foi compensada por inspeção do componente compartilhado, build de produção, rota HTTP e asset HTTP.

---

## 9. Schema e SEO técnico

**ARTICLE V3:** **PASS**  
**CANONICAL:** **PASS** — `https://www.auditseo.com.br/guias/ai-overviews`  
**SCHEMA:** **PASS** — reutilização de `generateArticleSchema`, com `Article`, `Person` canônico de Sidney Santos, `Organization` canônica AUDITSEO e `BreadcrumbList`; nenhum `Person` ou `Organization` duplicado foi criado.  
**SITEMAP:** **PASS** — URL adicionada a `public/sitemap.xml`.  
**BROKEN LINKS:** **PASS** — links internos publicados foram inventariados; o próximo supporting #008 não foi linkado.  

---

## 10. QA técnico

**BUILD:** **PASS** — `npm run build` concluído sem erros. O bundler manteve apenas o aviso não bloqueante de chunk acima de 500 kB.  
**TYPESCRIPT:** **PASS** — `npm run lint` (`tsc --noEmit`) concluído sem erros.  
**LINT:** **PASS**.  
**ROUTE HTTP:** **PASS** — `/guias/ai-overviews` respondeu `200 text/html`.  
**FEATURED HTTP:** **PASS** — `/images/guides/ai-overviews/featured.webp` respondeu `200 image/webp`.  

Durante o QA, foram corrigidos erros TypeScript preexistentes no arquivo do Pillar AI Search, sem alteração metodológica de seu conteúdo: schema editorial alinhado ao registry canônico, níveis de seção tipados e fechamento de template literals.

---

## 11. Publication Gate

```text
SOURCE TRUTH = PASS
CURRENT DOCUMENTATION = VERIFIED
AUTHOR POV = HIGH
ARGUMENT DEPTH = HIGH
INFORMATION GAIN = HIGH
EVIDENCE INTEGRITY = PASS
UNSUPPORTED CAUSALITY = NONE
NO FAKE OBSERVATIONS = PASS
ARTICLE V3 = PASS
FEATURED IMAGE = PASS
INTERNAL LINK GRAPH = PASS
SCHEMA = PASS
TECHNICAL QA = PASS
```

**R9 STATUS: PASS**

---

## 12. Stop Gate

O Supporting Content **#007 — AI Overviews** está publicado e validado. O próximo conteúdo permanece apenas planejado:

> **NEXT PLANNED: #008 — Recuperação de informação em AI Search: fontes, contexto e conhecimento.**

A execução foi encerrada neste ponto. Não foram iniciados #008, #009, #010, SEO vs. GEO ou novas Observations. O **STOP GATE** está ativo e aguarda a validação do usuário para o próximo passo.
