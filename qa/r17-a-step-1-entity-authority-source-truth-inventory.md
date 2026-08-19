# R17-A / STEP 1 — ENTITY AUTHORITY SOURCE TRUTH INVENTORY

## Status do gate

Este documento executa exclusivamente o **Passo 1 autorizado** do briefing R17-A: inventariar o Source Truth atual de Entity Authority antes de propor qualquer arquitetura definitiva. Não houve alteração de código de produto, schema, componente, rota pública, registry editorial, Vercel ou Production.

A autorização vigente é `READ / ANALYZE / DESIGN / DOCUMENT QA ONLY`. Implementação de produto e publicação permanecem não autorizadas.

## Corpus examinado

| Superfície | Arquivo | Função observada no Source Truth |
|---|---|---|
| Identidade canônica | `src/editorial/registry.ts` | Define IDs, URLs e referências reutilizáveis de `AUDITSEO` e `Sidney Santos`. |
| Modelo editorial | `src/editorial/types.ts` | Define `AuthorRef`, `PublisherRef`, `TopicGraph` e `ArticleData`, incluindo entidades primárias, relações, evidências e relação comercial. |
| Registro de artigos | `src/editorial/articleRegistry.ts` | Agrega 11 registros editoriais publicados ou disponíveis para as superfícies de guias e AI Search. |
| Registro de pesquisa | `src/editorial/researchRegistry.ts` | Fonte dos itens do Search Intelligence Lab, com status, perguntas, contexto, método, sistemas observados, queries, observações, findings, limitações, recomendações, relações e referências. |
| Tipos de pesquisa | `src/editorial/researchTypes.ts` | Define tipos de pesquisa, status e a taxonomia obrigatória `DOCUMENTADO`, `OBSERVADO`, `TESTADO`, `INFERIDO`, `RECOMENDADO`. |
| Schema de pesquisa | `src/editorial/researchSchema.ts` | Emite JSON-LD de artigos de pesquisa, hub, autor, organização e breadcrumbs; o `graph` aqui é schema de publicação, não Knowledge Graph interno de buscador. |
| Entity Home pública | `src/components/SidneySantosPage.tsx` | Renderiza a superfície `/autor/sidney-santos`, injeta JSON-LD `Person`, vincula a organização `AUDITSEO` e apresenta expertise, método, temas e referências públicas. |
| Roteamento e metadados | `src/App.tsx` | Identifica as rotas públicas de entidade, guias, Lab, pesquisa e artigos e encaminha para seus renderizadores. |
| QA e governança | `qa/r4-entity-authority-report.md`, `qa/r5-authorship-report.md`, `qa/r6-corroboration-report.md`, `qa/r7-entity-authority-audit-report.md`, `qa/r7-1-persistence-report.md`, `qa/r8-ai-search-architecture-integrity-report.md`, `qa/r16-discovery-architecture-complete-report.md`, `qa/gpt-auditseo-integration-status.md` | Corpus histórico de auditoria, recovery, persistência e governança que contextualiza o estado atual sem alterar o Source Truth. |

## Identidade principal e referências canônicas

A fonte canônica de identidade editorial define:

| Elemento | Valor observado |
|---|---|
| Organização | `AUDITSEO` |
| Organization ID | `https://www.auditseo.com.br/#organization` |
| Organização URL | `https://www.auditseo.com.br` |
| Pessoa | `Sidney Santos` |
| Person ID | `https://www.auditseo.com.br/autor/sidney-santos#person` |
| Pessoa URL | `https://www.auditseo.com.br/autor/sidney-santos` |
| Cargo editorial | `Especialista em SEO e Search Intelligence` |
| Relação institucional declarada | Sidney Santos é fundador da AUDITSEO. |
| Marco biográfico declarado | Atua com SEO desde 2009. |

Esses valores são reutilizados por `AuthorRef`, `PublisherRef`, registros editoriais e geração de schema. O inventário registra a existência dessas declarações como Source Truth editorial; não as reclassifica como fato externo independentemente corroborado.

## Modelo estrutural existente

O modelo `TopicGraph` já contém campos para `primaryEntity`, `relatedEntities`, `cluster`, `secondaryClusters`, relações de navegação, `evidenceLinks`, `commercialRelation` e `status`. O modelo `ArticleData` contém `cluster`, `secondaryClusters`, autor, publisher, evidências, relação comercial, seções, FAQ e `topicGraph`.

Esse inventário não promove `TopicGraph` a uma arquitetura de Entity Evidence Graph. Ele apenas registra que o Source Truth já possui uma estrutura editorial de relações temáticas, evidências e fronteira comercial que deverá ser auditada em etapa posterior.

O modelo de pesquisa possui os seguintes campos relevantes para futura análise: `id`, `slug`, `route`, `type`, `status`, `evidenceProfile`, `question`, `context`, `methodology`, `systemsObserved`, `queries`, `observations`, `findings`, `limitations`, `interpretation`, `recommendations`, `interventions`, `relatedArticles`, `relatedResearch`, `topicRelations` e `references`.

A taxonomia de evidência está explicitamente modelada como `DOCUMENTADO`, `OBSERVADO`, `TESTADO`, `INFERIDO` e `RECOMENDADO`. A presença do tipo no schema não prova que cada item esteja epistemicamente correto; isso permanece objeto de QA.

## Pesquisa e observações existentes

O `researchRegistry.ts` contém os seguintes itens no corpus atual:

| ID | Tipo/status | Tema e limite observado |
|---|---|---|
| `AUDITSEO-OBS-001` | `OBSERVATION / PUBLISHED` | Reconhecimento de entidade por contexto. Registra diferença observada entre consultas relacionadas a `Search Intelligence` e `Entity Authority`; inclui limitação explícita de que não demonstra causalidade direta nem pesos internos. Deve permanecer evidência situada, não prova causal de autoridade temática. |
| `AUDITSEO-OBS-002` | `OBSERVATION / PUBLISHED` | Entidade correta e atributo incorreto em AI Search. Distingue `Right Entity`, `Right Relation` e `Wrong Attribute`; limita a inferência ao caso documentado e não expõe a fonte interna do erro. |
| `AUDITSEO-EXP-001` | `EXPERIMENT / DRAFT` | Experimento longitudinal de entidade profissional, com baseline T0 e medição T1 pendente. O registro usa resultados qualitativos `YES`, `NO` ou `UNCLEAR` para evitar score agregado e declara que não é conclusão definitiva. |
| `AUDITSEO-OBS-003` | `OBSERVATION / PUBLISHED` | Estabilidade de fontes em AI Search; registra recorrência e rotação de domínios em consultas repetidas, com limitações de amostra e ausência de logs internos. |
| `AUDITSEO-OBS-004` | `OBSERVATION / PUBLISHED` | Consistência de atributos entre sistemas de IA; registra acordo em identidade/relações e divergências pontuais em atributos temporais, sem presumir causa interna. |
| `AUDITSEO-ANALYSIS-001` | `ANALYSIS / MIGRATION_PENDING` | Registro migratório de análise histórica sobre autoridade de entidade e AI Overviews; o texto original não está integralmente preservado e o próprio item recomenda aguardar recuperação documental, sem fabricar conteúdo. |

O corpus contém relações explícitas entre entidades, tópicos, sistemas observados, queries, findings, limitações e referências. Essas relações não autorizam, isoladamente, concluir mecanismo interno, causalidade universal, reconhecimento garantido, citação, recomendação ou resultado comercial. O próprio corpus contém formulações que precisam permanecer inventariadas como inferenciais ou potencialmente excessivas, conforme a seção de revisão de evidência abaixo.

## Corpus editorial e associações temáticas

O `articleRegistry.ts` agrega 11 registros: `entitySeoArticle`, `entityHomeArticle`, `entityDisambiguationArticle`, `entityConsistencyArticle`, `autoriaSeoArticle`, `entityCorroborationArticle`, `aiSearchPillarArticle`, `aiOverviewsArticle`, `aiInformationRetrievalArticle`, `aiCitationsAttributionArticle` e `aiMeasurementArticle`.

O corpus cobre, em nível editorial, Entity SEO, Entity Home, desambiguação, consistência, autoria, corroboração, AI Search, AI Overviews, recuperação de informação, citações/atribuição e medição de visibilidade. O inventário registra cobertura temática; não afirma que todos os conteúdos estejam igualmente corroborados ou sem overclaims.

## Rotas identificadas

### Superfícies de identidade e entidade

| Rota | Papel observado |
|---|---|
| `/autor/sidney-santos` | Entity Home pública principal da pessoa canônica. |
| `/sidney-santos` | Alias normalizado para `/autor/sidney-santos`. |
| `/guias/o-que-e-entidade-seo` | Guia sobre entidades em SEO, identidades, nomes, conceitos e relações. |
| `/guias/entity-home` | Guia sobre fonte canônica controlada de identidade, biografia, atributos e conexões. |
| `/guias/desambiguacao-de-entidades` | Guia sobre nomes homônimos, contexto e relações. |
| `/guias/consistencia-de-entidade` | Guia sobre divergências factuais, temporais e unificação. |
| `/guias/autoria-seo` | Guia sobre conexão entre conteúdo, especialista e organização. |
| `/guias/corroboracao-de-entidade` | Guia sobre declaração, corroboração, taxonomia de fontes e gaps. |

### Superfícies de pesquisa

| Rota | Papel observado |
|---|---|
| `/estudos-busca-ia` | Hub público do Search Intelligence Lab, filtrado para itens `PUBLISHED` pelo renderizador. |
| `/estudos-busca-ia/reconhecimento-de-entidade-por-contexto` | Pesquisa `AUDITSEO-OBS-001`. |
| `/estudos-busca-ia/entidade-correta-atributo-incorreto-ai-search` | Pesquisa `AUDITSEO-OBS-002`. |
| `/estudos-busca-ia/construcao-deliberada-de-entidade-profissional-sidney-santos` | `AUDITSEO-EXP-001`, marcado `DRAFT` e `noindex,nofollow`. |
| `/estudos-busca-ia/estabilidade-de-fontes-em-ai-search` | Item `AUDITSEO-OBS-003` no registry, cuja rota deve ser reconciliada com a configuração pública observada em etapa própria. |
| `/estudos-busca-ia/consistencia-de-atributos-entre-sistemas-de-ia` | Item `AUDITSEO-OBS-004` no registry, cuja rota deve ser reconciliada com a configuração pública observada em etapa própria. |
| `/estudos-busca-ia/impacto-da-autoridade-de-entidade-nos-ai-overviews` | `AUDITSEO-ANALYSIS-001`, `MIGRATION_PENDING`, `noindex,nofollow`. |

### Superfícies AI Search relacionadas

| Rota | Papel observado |
|---|---|
| `/guias/ai-search` | Pilar de AI Search, descoberta generativa, representação de entidades e Search Intelligence. |
| `/guias/ai-overviews` | Guia sobre AI Overviews, respostas, entidades, fontes e limites de análise. |
| `/guias/recuperacao-de-informacao-ai-search` | Guia sobre retrieval, RAG, grounding, fontes e contexto. |
| `/guias/citacoes-e-fontes-em-ai-search` | Guia sobre fontes, citations, mentions e atribuição. |
| `/guias/medir-visibilidade-ai-search` | Guia sobre métricas e observabilidade sem scores arbitrários. |

### Superfícies comerciais/contextuais auditáveis

| Rota | Papel observado |
|---|---|
| `/diagnostico` | Fluxo diagnóstico que pode consumir findings, sujeito à governança comercial já estabelecida. |
| `/consultoria` e `/` | Superfícies de consultoria/home; incluídas no inventário por sua fronteira comercial, não como autorizadas para alteração neste gate. |
| `/seo-para-agencias` e `/parceria` | Superfícies de oferta a agências; incluídas apenas para mapear possível destino comercial de findings. |

## Entity Home pública: evidências e lacunas

`SidneySantosPage.tsx` injeta um objeto JSON-LD `Person` com nome, URL, cargo, descrição, relação `founder` com `AUDITSEO` e `knowsAbout` contendo SEO técnico, Search Intelligence, GEO, dados estruturados, autoridade digital e ambientes generativos de busca.

A superfície pública também apresenta expertise, áreas de estudo, método de trabalho e links editoriais. A metodologia pública explicita a separação entre documentação oficial, evidência, teste e opinião e evita promessas absolutas sobre ranking, tráfego ou aparição em IA.

Há uma lacuna documental declarada na seção **Referências públicas em organização**: participações, perfis externos, referências e releases permanecem como espaços reservados ou dependentes de confirmação. Isso deve ser tratado como gap de corroboration, não como falha causal nem como autorização para preencher URLs sem verificação.

Há também um placeholder explícito para fotografia oficial. O inventário registra-o como lacuna de asset/identidade visual, sem propor implementação.

## Achados preliminares de Source Truth

1. **Identidade canônica existente:** o projeto possui um registro editorial central para organização e pessoa, com IDs e URLs consistentes reutilizados em schema e conteúdo.
2. **Relações estruturais existentes:** `TopicGraph`, `evidenceLinks`, `relatedResearch`, `relatedArticles`, `topicRelations` e `commercialRelation` já organizam parte das relações entidade–tema–evidência–destino comercial.
3. **Evidência epistemológica modelada:** a pesquisa possui categorias formais e campos de limitações, mas a existência de um campo não substitui a auditoria do texto de cada claim.
4. **Observações heterogêneas:** o registry mistura observações publicadas, experimento em draft e análise em migração pendente; status e limitações precisam ser preservados em qualquer modelagem futura.
5. **Corroboração incompleta:** a Entity Home explicita que referências externas ainda estão em organização e aguardam confirmação.
6. **Divergência potencial de rota:** `researchRegistry.ts` contém OBS-003 e OBS-004, enquanto o recorte de `routeMetadata` examinado no `App.tsx` não mostrou suas entradas de metadata. Isso é uma divergência de Source Truth a ser confirmada por QA posterior, não uma conclusão sobre runtime.
7. **Fronteira comercial existente:** artigos e TopicGraph possuem relações comerciais, mas o briefing R17-A proíbe traduzir findings em promessa de ranking, AI visibility, citação ou resultado comercial.
8. **Sem score autorizado:** o registry de pesquisa demonstra uma alternativa qualitativa em pelo menos um experimento (`YES`, `NO`, `UNCLEAR`), coerente com a proibição de score agregado; não se propõe nova métrica neste passo.
9. **Overclaims não podem ser classificados como inexistentes:** OBS-001 e OBS-002 contêm formulações que excedem o que foi diretamente observado e devem permanecer marcadas para revisão documental.

## R17-A.1 — revisão explícita de evidência e claims

Esta seção foi adicionada após o veredito formal do GPT AUDITSEO. Ela não corrige os registros-fonte e não altera o produto; apenas classifica os riscos epistemológicos encontrados no inventário.

| Item do Source Truth | Formulação observada | Classificação obrigatória | Limite documental |
|---|---|---|---|
| `AUDITSEO-OBS-001` — `interpretation` | A resolução de entidade “depende criticamente” da densidade de coocorrência entre nome e conceito técnico. | `INFERENTIAL / NEEDS REVIEW / POTENTIAL OVERCLAIM` | A observação registra diferença entre contextos e ruído de homônimos, mas não demonstra dependência crítica nem causalidade linear. |
| `AUDITSEO-OBS-002` — `findings` | Sinais temporais conflitantes em fontes secundárias “exercem peso” na síntese de LLMs. | `POTENTIAL OVERCLAIM` | O caso documenta entidade/relação corretas e atributo temporal divergente; não identifica peso de fonte, mecanismo de síntese ou influência causal. |
| `AUDITSEO-OBS-002` — `interpretation` | Motores generativos operariam em camadas sucessivas `Entity Resolution → Relation Resolution → Attribute Resolution → Consistency`. | `POTENTIAL INTERNAL-MECHANISM CLAIM` | A sequência é uma hipótese editorial derivada do caso, não arquitetura interna universal demonstrada de buscadores ou LLMs. |

Esses itens permanecem como material de QA documental, não como conclusões estabelecidas. Qualquer etapa posterior deve preservar a distinção entre `OBSERVADO`, `INFERIDO` e `RECOMENDADO` e não pode corrigir o registro-fonte dentro deste gate sem autorização específica.

## Metadata pública marcada para revisão

O inventário também marca para revisão, sem corrigir neste gate, metadata pública que pode carregar overclaim ou pressuposto não demonstrado:

| Superfície | Claim/metadata observada | Classificação |
|---|---|---|
| `src/App.tsx` — `/guias/o-que-e-entidade-seo` | “como o Google e a IA resolvem identidades” | `NEEDS REVIEW / POSSIBLE INTERNAL-MECHANISM FRAMING`; descreve mecanismos de forma ampla demais para o corpus demonstrado. |
| `src/App.tsx` — `/guias/desambiguacao-de-entidades` | “como separar nomes iguais em grafos” | `NEEDS REVIEW`; “grafos” pode ser lido como estrutura interna de sistemas e não está aqui qualificado como modelo editorial AUDITSEO. |
| `src/App.tsx` — `/guias/geo-readiness` | `GEO Readiness` e “como preparar marcas para a nova busca” | `NEEDS REVIEW`; o termo é metadata pública e não deve ser tratado como estado mensurável, garantia ou capacidade demonstrada sem governança adicional. |

Esses itens foram apenas inventariados e classificados. Não houve edição de `src/App.tsx`, dos artigos, dos registries ou de qualquer componente.

## Persistência da primeira versão

A primeira versão do inventário e do briefing foi persistida em `main` no commit `8f0f8cd231bbcb6d343417a78ba1f6c6bd9ba7e5`. Esta revisão R17-A.1 deverá ser publicada em um novo commit e seu SHA final será reportado separadamente ao GPT AUDITSEO.

## Gaps e perguntas abertas

| Gap | Classificação atual | Conduta autorizada |
|---|---|---|
| Referências externas da Entity Home ainda não confirmadas | `OPEN QUESTION / NOT DEMONSTRATED` | Não preencher sem evidência verificável. |
| Corroboração externa da identidade e atributos | `OPEN QUESTION` | Mapear fontes e limites em etapa posterior. |
| Relação entre associação temática observada e reconhecimento | `NOT DEMONSTRATED` | Não derivar causalidade de OBS #001. |
| Coerência entre todos os registros, rotas e superfícies públicas | `OPEN QUESTION` | Reconciliar Source Truth/Public Truth antes de qualquer desenho definitivo. |
| Ausência de metadata explícita para algumas rotas de OBS-003/OBS-004 no recorte examinado | `OPEN QUESTION` | Confirmar com QA de roteamento, sem alterar App.tsx neste gate. |
| Elegibilidade comercial dos findings | `PLANNED RESEARCH QUESTION` | Definir limites documentais, sem alterar CTAs ou produto. |

## Limites deste Passo 1

Este documento não é a arquitetura definitiva do Entity Authority Framework. Não cria Entity Authority Graph como modelo interno de buscadores, não cria score, não altera Observation, não inicia nova pesquisa empírica, não corrige claims públicos e não autoriza publicação.

Toda inferência acima está explicitamente separada do que foi observado em arquivos e rotas. Onde a evidência não foi suficiente, o estado permanece `OPEN QUESTION`, `PLANNED RESEARCH QUESTION` ou `NOT DEMONSTRATED`.

## Critério de conclusão do Passo 1

O corpus inicial está inventariado com arquivos prioritários, registros de identidade, tipos de evidência, observações existentes, rotas identificadas, limites públicos, gaps e fronteiras comerciais. O próximo passo depende do closeout formal do R17-A; não há implementação autorizada neste gate.

## Reporte ao GPT AUDITSEO

O reporte formal do Step 1 foi submetido na conversa autenticada do GPT AUDITSEO após confirmação do usuário. No momento do registro, o GPT AUDITSEO iniciou o processamento da resposta; nenhum novo gate foi presumido.

## R17-A.1 — instruções recebidas do GPT AUDITSEO

O veredito formal recebido foi `NEEDS EVIDENCE COMPLETION`; o Step 2 permanece bloqueado. A instrução vinculante é `QA DOCUMENTATION ONLY`: persistir/verificar os dois arquivos QA, reportar o SHA exato, classificar a interpretação de OBS-001 como `INFERENTIAL / NEEDS REVIEW / POTENTIAL OVERCLAIM`, classificar o finding de OBS-002 sobre “exercem peso” como `POTENTIAL OVERCLAIM`, classificar a cadeia `Entity Resolution → Relation Resolution → Attribute Resolution → Consistency` como `POTENTIAL INTERNAL-MECHANISM CLAIM` e marcar metadata pública ampla para revisão sem corrigi-la neste gate.

## Reporte R17-A.1 enviado

O reporte corrigido foi submetido ao GPT AUDITSEO. Ele iniciou a validação do SHA `6d07bdbecb6635bc91e7e1daa3768cf97d0bdda5`, do escopo restrito a QA e da presença dos quatro pontos de overclaim/metadata antes de decidir se libera somente o Step 2 documental.

## Public Truth reconciliation pending

O GPT AUDITSEO registrou uma divergência entre a existência do commit/documento em `origin/main` e a visualização pública consultada por seus meios de verificação, que ainda retorna 404 para os caminhos QA. O inventário passa a classificar isso explicitamente como `Public Truth reconciliation pending`.

A presença no branch remoto verificado não deve ser tratada como prova suficiente de runtime ou de superfície pública. O crawl público da Entity Home também pode continuar exibindo elementos como `GEO & IA Readiness` e referências externas ainda em organização; isso deve ser reconciliado com Source Truth e Deployment Truth antes de qualquer conclusão sobre o estado público atual. O crawl não será tratado como prova definitiva de runtime sem essa reconciliação.

Esta anotação é exclusivamente documental: não corrige `researchRegistry.ts`, artigos, Entity Home, router ou qualquer produto.
