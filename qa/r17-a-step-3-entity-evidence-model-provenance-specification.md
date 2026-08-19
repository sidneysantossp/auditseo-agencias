# R17-A / STEP 3 — Entity Evidence Model & Provenance Specification

**Status do documento:** QA DOCUMENTATION ONLY  
**Autorização:** R17-A Step 3 — `AUTHORIZED / GO`  
**Escopo:** especificação documental, sem implementação, sem alteração de produto, registry, schema, rota, metadata pública, Vercel ou Production.  
**Artefato autorizado:** `qa/r17-a-step-3-entity-evidence-model-provenance-specification.md`

> Este documento descreve um modelo editorial AUDITSEO para representar evidências, findings e provenance reproduzível. Ele não descreve a arquitetura interna de Google, AI Overviews, ChatGPT Search, Perplexity ou qualquer outro sistema. Também não cria score, ranking, valor agregado de autoridade, mecanismo causal ou schema de produção.

## 1. Objective

O objetivo é especificar como a AUDITSEO deverá representar um **finding de Entity Authority** sem transformar autoridade em número, propriedade calculada ou mecanismo presumido. O modelo deve permitir que uma pessoa externa reconstrua de onde veio uma afirmação, qual observação a sustenta, em que contexto ela foi capturada, qual limitação permanece aberta e em que ponto a análise passou de evidência para interpretação ou recomendação.

O modelo é deliberadamente orientado à auditoria. Ele representa o que foi documentado, observado ou testado e torna explícito o que foi inferido ou recomendado. A presença correta de uma entidade, uma relação ou um atributo em uma resposta não autoriza, por si só, uma conclusão sobre autoridade, causalidade, confiança interna, ranking ou probabilidade de citação.

## 2. Design Principles

### 2.1 Separação epistemológica

`Evidence Item`, `Finding`, `Interpretation` e `Recommendation` são objetos conceitualmente distintos. Uma evidência registra uma fonte ou captura; um finding registra uma proposição delimitada; uma interpretação explica uma leitura possível; uma recomendação propõe uma ação. Nenhum objeto posterior pode ser promovido silenciosamente a uma camada anterior.

A taxonomia de governança permanece `DOCUMENTADO → OBSERVADO → TESTADO → INFERIDO → RECOMENDADO`. O modelo deve conservar também os estados de ausência: `UNKNOWN`, `NOT AVAILABLE`, `NOT ASSESSABLE` e `NOT DEMONSTRATED`, conforme o campo e a pergunta. Ausência de captura não equivale a ausência do fenômeno.

### 2.2 Provenance por finding

Todo finding deve apontar para um ou mais `Evidence Item` por identificador estável. A exceção permitida é um gap metodológico explicitamente marcado como tal, quando a proposição é registrada como pergunta aberta ou dependência de pesquisa, e não como verdade.

### 2.3 Contexto mínimo reproduzível

Uma observação de superfície deve conservar, quando relevante, query, query class, system, surface, data, hora, locale, país/localização, estado de sessão, entidade, organização, resposta, estados de entidade e atributo, sources, citations, attribution, notas, limitações e referência à captura bruta. A unidade editorial de observação é uma combinação de query, sistema, surface e contexto temporal; observações de sistemas ou momentos diferentes não devem ser misturadas automaticamente.

### 2.4 Evidência e inferência não se confundem

Uma captura de resposta demonstra um estado observável naquela query, naquele sistema e naquele momento. Não demonstra todo o pipeline, o conjunto de candidatos, a ordem de seleção, o peso interno de uma fonte, documentos descartados ou a causa de uma citação. A inferência deve ser rotulada como inferência e permanecer dentro da escala suportada pela evidência.

### 2.5 Sem autoridade calculada

São proibidos, neste Step 3, objetos ou campos que impliquem um valor agregado sem base demonstrada, incluindo `AI_AUTHORITY_SCORE`, `ENTITY_STRENGTH`, `Authority Score`, `Trust Score`, `Citation Score` ou equivalentes. `Entity Authority` é uma categoria metodológica e editorial, não um número resultante de soma, média ou ponderação implícita.

### 2.6 Provenance não é hierarquia automática

Uma fonte oficial, controlada externamente ou independente pode desempenhar papéis diferentes. `Primary`, `Supporting` e `Background` descrevem a relação da evidência com a proposição analisada; não são notas de qualidade nem uma ordem universal de confiança. A fonte canônica da organização ajuda a registrar a verdade declarada pelo ecossistema AUDITSEO, mas não prova sozinha o comportamento de uma plataforma externa.

### 2.7 Entity Object Contract

`Entity` é o objeto canônico ou observado ao qual um finding se refere. O modelo não trata `Authority` como um nó adicional nem como um valor calculado. Quando `Entity Authority` aparece, ele permanece uma categoria metodológica agregadora da AUDITSEO, ligada aos findings que a compõem.

| Campo conceitual | Obrigatoriedade | Função e limite |
|---|---|---|
| `entityId` | Obrigatório | Identificador interno estável ou identificador canônico disponível; não é score. |
| `type` | Obrigatório quando conhecido | Tipo editorial, como `PERSON`, `ORGANIZATION`, `PRODUCT`, `SERVICE` ou `TOPIC`; quando não conhecido, usar `UNKNOWN`. |
| `canonicalName` | Obrigatório quando houver referência canônica | Nome usado pela referência de identidade; não elimina variantes observadas. |
| `canonicalUrl` | Quando houver | URL canônica ou `NOT AVAILABLE`; não prova que uma plataforma a usou. |
| `knownVariants` | Quando relevante | Nomes, grafias ou aliases observados, sem inferir equivalência automática. |
| `scope` / `context` | Obrigatório para análise situada | Delimita país, idioma, tópico, query set, sistema, surface ou período. |
| `evidenceRefs` | Quando o objeto for observado | Evidências que sustentam a identificação ou a relação; um gap deve ser marcado explicitamente. |
| `limitations` | Quando aplicável | Ambiguidade, homônimos, referência incompleta ou ausência de acesso. |

A distinção entre `canonical entity` e `presented entity` deve ser mantida quando uma superfície apresentar uma entidade que precisa ser comparada à referência. `Entity Object` registra identidade e contexto; não registra autoridade, força, confiança ou preferência algorítmica.

### 2.8 Attribute Model

`Attribute` é uma propriedade verificável de uma entidade ou relação. Ele deve permanecer como objeto comparável, e não como um índice de qualidade. Um atributo pode ser cargo, relação organizacional, descrição, localização, data, especialidade ou outro predicado definido pelo escopo.

| Campo conceitual | Obrigatoriedade | Função e limite |
|---|---|---|
| `attributeId` | Obrigatório | Identificador do atributo dentro do finding; não é score. |
| `subjectEntityRef` | Obrigatório | Entidade à qual o atributo se refere. |
| `attributeType` / `predicate` | Obrigatório | Nome controlável do atributo, como `JOB_TITLE`, `FOUNDER_OF`, `START_DATE` ou `SPECIALTY`. |
| `canonicalValue` / `expectedValue` | Quando houver referência de comparação | Valor documentado ou canônico usado como comparação, com `provenanceRef`. |
| `observedValue` | Quando houver captura | Valor efetivamente observado na resposta, source ou documento. |
| `valueType` | Quando relevante | Tipo do valor: texto, data, relação, localização ou outro tipo explicitamente definido. |
| `status` | Obrigatório | Um dos estados `MATCH`, `CONFLICT`, `MISSING`, `UNCLEAR` ou `NOT_ASSESSABLE`. |
| `scope` / `validAt` | Quando aplicável | Contexto temporal, geográfico, query, system ou surface do valor. |
| `evidenceRefs` / `provenanceRefs` | Obrigatório, salvo gap explícito | Liga o atributo ao documento, captura, registry ou protocolo que permite sua revisão. |
| `limitations` | Quando aplicável | Registra conflito, acesso parcial, data desconhecida ou impossibilidade de comparação. |

`MATCH` significa alinhamento dentro da referência e do escopo declarados; `CONFLICT` significa divergência observável; `MISSING` significa que o valor esperado não foi encontrado no recorte; `UNCLEAR` significa que a leitura não pode ser classificada; `NOT_ASSESSABLE` significa que a evidência necessária está indisponível. Nenhum estado produz `attribute quality score` ou `authority score`.

### 2.9 Causalidade e arquitetura interna permanecem fora do modelo

O modelo pode registrar que duas condições apareceram juntas ou que um estado mudou entre observações. Não pode registrar como fato que uma intervenção causou essa mudança sem desenho experimental apropriado. Tampouco pode representar como arquitetura conhecida a cadeia `Entity Resolution → Relation Resolution → Attribute Resolution → Consistency`; essa cadeia permanece uma hipótese/modelo editorial inferencial quando utilizada para interpretar OBS-002.

## 3. Evidence Item

O `Evidence Item` é a unidade mínima de registro de uma fonte ou captura que pode ser consultada por outra pessoa. Ele não contém uma conclusão de autoridade. Ele conserva o conteúdo capturado, a referência, o contexto e as limitações.

| Campo conceitual | Obrigatoriedade | Função e limite |
|---|---|---|
| `evidenceId` | Obrigatório | Identificador estável da evidência; não é score nem prioridade. |
| `evidenceClass` | Obrigatório | Uma categoria de governança: `DOCUMENTADO`, `OBSERVADO`, `TESTADO`, `INFERIDO` ou `RECOMENDADO`. Evidência primária normalmente usa as três primeiras; interpretação e orientação não devem ser mascaradas como fonte. |
| `statement` | Obrigatório | Formulação curta do que a evidência permite descrever, sem extrapolar para mecanismo interno. |
| `sourceRef` / `provenanceRef` | Obrigatório, salvo gap explícito | URL, arquivo, captura, registro, protocolo ou referência reproduzível. |
| `capturedValue` | Obrigatório quando houver valor observado | Texto, atributo, relação, estado de presença, source/citation ou conteúdo efetivamente capturado. |
| `query` / `queryClass` | Quando aplicável | Delimita a pergunta e o universo da observação. |
| `system` / `surface` | Quando aplicável | Identifica a superfície observada sem misturar plataformas ou interfaces. |
| `date` / `time` / `locale` | Quando aplicável | Delimita a validade temporal e geográfica do recorte. |
| `entityRef` / `organizationRef` | Quando aplicável | Vincula o objeto observado a uma entidade canônica ou à entidade apresentada na resposta. |
| `rawCaptureRef` | Quando disponível | Referência a screenshot, transcrição ou registro bruto; a ausência deve ser marcada, não ocultada. |
| `limitations` | Obrigatório quando houver limitação conhecida | Explicita acesso indisponível, dinâmica da interface, amostra, ambiguidade, fonte inacessível ou falta de controle. |
| `notes` | Opcional | Registra contexto de revisão, discrepância ou decisão de classificação. |

A interface atual já expõe, para itens de pesquisa, `type`, `statement`, `source`, `limitations` e `notes`, além de query, sistema e resumo de resultado. O Step 3 formaliza a relação desses campos com uma provenance mais completa, sem alterar o renderer ou o tipo TypeScript existente.

### 3.1 Classes de evidência

| Classe | O que pode registrar | O que não pode afirmar sozinha |
|---|---|---|
| `DOCUMENTADO` | Regra, definição, registro canônico ou documentação pública identificável. | Que uma plataforma segue um mecanismo não descrito na documentação. |
| `OBSERVADO` | Estado capturado em uma query, resposta, fonte, relação, atributo ou superfície. | Causa, universalidade, estabilidade ou peso interno. |
| `TESTADO` | Resultado de protocolo controlado com escopo, unidade, comparação e limitações declarados. | Generalização fora do protocolo ou causalidade sem desenho adequado. |
| `INFERIDO` | Interpretação explicitamente derivada de observações e referências. | Promoção automática para fato, mecanismo interno ou arquitetura conhecida. |
| `RECOMENDADO` | Ação editorial ou de pesquisa proposta a partir de findings. | Garantia de resultado, citação, autoridade, ranking ou conversão. |

`INFERIDO` e `RECOMENDADO` são camadas analíticas, não substitutes para `sourceRef`. Uma recomendação pode referenciar findings e evidências, mas não pode se apresentar como evidência observada.

### 3.2 Evidence Item versus objetos analíticos

A interface e o registry atuais usam `EvidenceItem` como um contrato editorial de governança ligado a um `ResearchItem`. Esse contrato contém `type`, `statement`, `source`, `limitations` e `notes`, além de query, sistema e resumo de resultado quando disponíveis. O Step 3 não renomeia esse tipo, não cria um novo tipo TypeScript e não altera seu renderer. A expressão **Evidence Item** neste documento é a unidade lógica documental correspondente a esse registro de fonte ou captura.

A fronteira obrigatória é a seguinte:

| Objeto | Natureza | Pode conter | Não pode ser confundido com |
|---|---|---|---|
| `EvidenceItem` / Evidence Item | Fonte, captura ou registro documental reproduzível | `evidenceId`, classe editorial, source/reference, captured value, contexto, data/surface/query quando necessários e limitations | Finding, interpretação, recomendação ou conclusão de authority. |
| `Entity` | Objeto de identidade canônica ou apresentada | Identificador, tipo, nome canônico, URL, variantes, escopo e referências | Evidence source ou authority calculada. |
| `Attribute` | Propriedade verificável de uma entidade ou relação | Predicado, valor esperado/canônico, valor observado, tipo de valor, estado e provenance | Evidence Item; o atributo aponta para evidence. |
| `Relationship` | Ligação entre entidades ou entidade–objeto | Sujeito, predicado, objeto, estado declarado/documentado/observado e provenance | Evidence Item; proximidade textual não cria relação. |
| `Topic Association` | Associação temática situada em query set/contexto | Entidade, tópico, contexto, estado observado, evidenceRefs e limitation | Entity Authority global, Knowledge Graph interno ou reconhecimento universal. |
| `Finding` | Proposição analítica construída sobre evidence identificável | Subject/entity, scope, findingType, evidenceClass, evidenceRefs, statement, interpretation, limitations, recommendation e commercialEligibility | Captura bruta, source evidence ou mecanismo interno. |
| `Interpretation` | Leitura inferencial explicitamente derivada de findings/evidências | Hipótese, rationale, evidenceRefs, limitations e review state | Observação direta, documentação da plataforma ou arquitetura conhecida. |
| `Recommendation` | Orientação editorial ou pergunta de pesquisa | Ação, basisFindingRefs, evidenceRefs, scope, dependencies e limitations | Evidence source ou garantia comercial. |
| `Commercial Eligibility` | Classificação contextual do finding para uso comercial | Exatamente `YES`, `CONDITIONAL` ou `NO`, com rationale e limitations | Evidência, score, nível de confiança ou claim de resultado. |

O fluxo abaixo é uma relação de referência documental, não uma sequência causal nem uma arquitetura de sistema:

> `Entity / Attribute / Relationship / Topic Association` **referenciam** `Evidence Item`; `Finding` **agrega uma proposição sobre** esses objetos e referencia a mesma provenance; `Interpretation` **explica uma leitura** do finding; `Recommendation` **propõe uma ação** a partir do finding; `Commercial Eligibility` **classifica o uso comercial delimitado do finding**.

A distinção também resolve a ambiguidade do campo `type` do contrato legado. O renderer atual pode exibir `DOCUMENTADO`, `OBSERVADO`, `TESTADO`, `INFERIDO` ou `RECOMENDADO` como rótulo de governança. No modelo do Step 3, entretanto, `INFERIDO` e `RECOMENDADO` não são `source evidence`: são camadas analíticas que precisam apontar para Evidence Items ou findings de base. O rótulo legado não autoriza uma recomendação a fingir que é uma captura, nem uma inferência a fingir que é documentação externa.

As regras de fronteira são: `Evidence Item` sem `Finding` continua válido como registro documental não interpretado; `Finding` sem `evidenceRefs` somente pode existir como `EVIDENCE_GAP` explicitamente marcado; `Interpretation` sem evidence/finding é inválida; `Recommendation` sem finding é inválida; e `Commercial Eligibility` sem finding delimitado é `NO`, não uma evidência independente. Nenhuma dessas regras cria schema ou implementação neste Step.

## 4. Finding Model

O `Finding` é uma proposição auditável sobre uma entidade, relação, atributo, associação temática, consistência, corroboração, visibilidade ou citação. Ele é mais específico do que uma narrativa geral e deve poder ser reavaliado sem reescrever a evidência original.

| Campo conceitual | Conteúdo | Regra de governança |
|---|---|---|
| `findingId` | Identificador estável | Não codifica força, qualidade ou autoridade. |
| `subjectRef` | Pessoa, organização, produto, serviço ou tópico analisado | Deve distinguir a entidade canônica da entidade apresentada na resposta quando houver ambiguidade. |
| `findingType` | `IDENTITY`, `RELATION`, `ATTRIBUTE`, `TOPIC_ASSOCIATION`, `CONSISTENCY`, `CORROBORATION`, `VISIBILITY`, `CITATION` ou `RECOGNITION` | Rótulo editorial de análise; não taxonomia interna da plataforma. |
| `proposition` | Afirmação delimitada | Deve descrever um estado ou relação observável, não uma causa presumida. |
| `observedValue` / `expectedValue` | Valor capturado e, quando necessário, valor canônico ou esperado | A comparação deve declarar a referência que tornou o valor “esperado”. |
| `epistemicClass` | Classe de evidência aplicável | Preserva a diferença entre observado, testado e inferido. |
| `evidenceRefs` | Um ou mais `evidenceId` | Obrigatório, salvo gap explicitamente marcado. |
| `provenanceRefs` | Referências de origem e contexto | Permite reconstruir a captura e a fonte que foi consultada. |
| `status` | Estado descritivo, como `MATCH`, `MISMATCH`, `PRESENT`, `ABSENT`, `UNCLEAR`, `UNKNOWN`, `NOT ASSESSABLE` ou `NOT DEMONSTRATED` | Estados não devem ser convertidos em score ou ranking. |
| `commercialEligibility` | Obrigatório | Exatamente `YES`, `CONDITIONAL` ou `NO`; classifica elegibilidade comercial delimitada, não verdade epistemológica. |
| `limitations` | Limitações específicas do finding | Evita generalização indevida. |
| `reviewNote` | Nota de revisão ou conflito | Deve registrar overclaim, revisão pendente ou divergência sem apagar o dado original. |

Um finding não é uma conclusão sobre “a autoridade” da entidade. Por exemplo, `ENTITY_PRESENT` descreve presença observada; `ENTITY_CORRECT` descreve correspondência com a entidade de referência; `ATTRIBUTE_MISMATCH` descreve divergência de atributo. Nenhum desses estados é um indicador agregado de autoridade.

## 5. Relationship Model

O modelo de relacionamento distingue a existência de uma relação canônica, a relação observada em uma resposta e a interpretação editorial dessa relação. Uma relação não deve ser criada apenas porque dois nomes aparecem próximos.

| Relação editorial | Exemplo de estado | Provenance mínima | Limite |
|---|---|---|---|
| Pessoa → Organização | `FOUNDER_OF`, `AUTHORED_BY`, `ASSOCIATED_WITH` | Fonte ou registro que declara a relação; contexto da captura quando observada em uma superfície. | Não permite concluir que todos os sistemas resolvem a relação da mesma forma. |
| Entidade → Atributo | `HAS_ATTRIBUTE` | Valor capturado, referência canônica ou fonte acessível, data e limitações. | Mismatch temporal não demonstra qual documento causou a síntese. |
| Entidade → Tópico | `TOPIC_ASSOCIATION` | Query/contexto, resposta, entidade apresentada e regra de classificação. | Associação observada não equivale a autoridade temática ou reconhecimento universal. |
| Entidade → Source | `SOURCE_MENTIONED` / `SOURCE_OFFICIAL` / `SOURCE_EXTERNAL` | URL/domínio, papel editorial, query, system, surface e data. | Source visibility não equivale a entity presence, citation, endorsement ou preferência algorítmica. |
| Claim → Source | `CLAIM_SOURCE_ALIGNMENT` | Claim decomposta, source visível, conteúdo acessível e classificação de alinhamento. | Alinhamento observado não demonstra causalidade nem origem exclusiva do conhecimento. |

`TopicGraph` e `Knowledge Graph` permanecem conceitos diferentes. O primeiro pode ser usado como estrutura editorial para organizar tópicos, entidades e links de conteúdo. O segundo seria uma afirmação sobre uma estrutura de conhecimento de uma plataforma, que não é conhecida por este modelo. A relação editorial nunca deve ser descrita como acesso ao grafo interno.

## 6. Topic Association Model

`Topic Association` registra se uma entidade aparece conectada a um tópico dentro de um universo definido de queries, conteúdos ou referências. A unidade de análise deve declarar qual consulta, qual superfície, qual período e qual estado de entidade foram usados.

A associação pode ser classificada como `OBSERVED`, `NOT OBSERVED`, `UNCLEAR` ou `NOT ASSESSABLE`. `OBSERVED` significa que a associação apareceu no recorte; não significa que o sistema reconhece autoridade temática, que a associação é estável ou que o tópico foi escolhido por um mecanismo conhecido. Uma recomendação para ampliar ou clarificar a associação deve referenciar o finding e permanecer em `RECOMENDADO`.

A distinção obrigatória é:

> **Topical Association ≠ Entity Authority.** Uma entidade pode ser apresentada em um tópico sem que isso demonstre autoridade, e pode ter uma associação correta em um tópico sem transferência automática para outro.

## 7. Finding Model por camada

O modelo pode organizar findings por camada editorial, desde que nenhuma camada seja promovida silenciosamente:

| Camada | Pergunta | Estado possível | Não permite concluir |
|---|---|---|---|
| Identity | A entidade apresentada corresponde à referência? | `CORRECT`, `INCORRECT`, `UNCLEAR` | Autoridade, qualidade ou causa da seleção. |
| Relation | A relação pessoa–organização ou entidade–objeto aparece corretamente? | `CORRECT`, `INCORRECT`, `UNKNOWN` | Que a relação é resolvida da mesma forma internamente em outras superfícies. |
| Attribute | O valor factual está presente e alinhado à referência? | `CORRECT`, `PARTIAL`, `INCORRECT`, `NOT OBSERVABLE` | Qual fonte produziu o valor ou por que houve divergência. |
| Topic Association | A entidade aparece ligada ao tópico da query? | `OBSERVED`, `NOT OBSERVED`, `UNCLEAR` | Autoridade temática ou cobertura universal. |
| Consistency | O estado se mantém entre observações comparáveis? | `AGREEMENT`, `MISMATCH`, `UNKNOWN` | Causalidade, estabilidade futura ou arquitetura de sincronização. |
| Corroboration | Fontes independentes apresentam informação compatível? | `CORROBORATED`, `PARTIAL`, `CONFLICTING`, `NOT ASSESSABLE` | Consenso, verdade automática ou citation factor comprovado. |
| Visibility / Citation | A entidade, source ou citation aparece na interface? | `YES`, `NO`, `NOT AVAILABLE`, `UNCLEAR` | Retrieval trace, peso da fonte, endorsement ou recomendação. |

## 8. Provenance Model

`Provenance` é o conjunto de referências que permite reconstruir a origem, o contexto e a transformação de um finding. A provenance de uma observação deve ser separada da provenance de uma interpretação. A interpretação pode citar a observação, mas não deve ser apresentada como se fosse o documento original.

| Campo conceitual | Função |
|---|---|
| `provenanceId` | Identifica o registro de proveniência. |
| `sourceType` | Classifica a origem: `CANONICAL_REGISTRY`, `OFFICIAL_OWNED`, `CONTROLLED_EXTERNAL`, `INDEPENDENT_EXTERNAL`, `PLATFORM_DOCUMENTED`, `RAW_CAPTURE`, `RESEARCH_PROTOCOL` ou `EDITORIAL_ANALYSIS`. |
| `reference` | URL, caminho de arquivo, commit, query record, captura ou protocolo reproduzível. |
| `retrievedAt` / `capturedAt` | Data e hora da consulta, captura ou recuperação, quando disponíveis. |
| `queryContext` | Query, query class, system, surface, locale, sessão e condições relevantes. |
| `capturedValue` | Texto, atributo, relação, source, citation, resposta ou estado efetivamente registrado. |
| `canonicalComparison` | Referência usada para comparar o valor, quando houver; não implica que a plataforma tenha acesso a essa referência. |
| `transformationNotes` | Normalização, transcrição, recorte ou classificação aplicada depois da captura. |
| `accessState` | `ACCESSIBLE`, `PARTIAL`, `UNAVAILABLE`, `UNKNOWN` ou `NOT ASSESSABLE`. |
| `limitations` | Escopo da amostra, dinâmica, ausência de controle, fonte indisponível ou fator não observável. |
| `reviewState` | Estado da revisão editorial, incluindo `PENDING_REVIEW` para possíveis overclaims. |

A provenance não deve conter um campo de “peso” numérico da fonte. Se a análise precisar comparar fontes, deve registrar o papel editorial e a compatibilidade concreta com a claim. `Official`, `controlled external` e `independent external` são categorias relacionais; não são uma escala universal de confiança.

### 8.1 Source Map, Claim Map e Entity Map

O modelo reconhece três mapas analíticos complementares:

| Mapa | Objeto principal | Vínculos mínimos |
|---|---|---|
| `Source Map` | Domínio, URL ou documento | Tipo de fonte, entidade relacionada, query, data, system, citation visível e alinhamento. |
| `Claim Map` | Afirmação da resposta | Entidade, atributo/relação, source visível, citation, alignment, acurácia e limites. |
| `Entity Map` | Pessoa, organização, produto, serviço, tópico e publisher | Identificadores canônicos, relações declaradas e referências de evidência. |

Esses mapas tornam a análise auditável, mas não afirmam a provenance interna da plataforma. Uma source visível pode ser compatível com uma claim sem ser a origem exclusiva da informação. Quando o conteúdo não permite avaliar o vínculo, a classificação correta é `NOT ASSESSABLE`.

## 9. Primary vs Supporting vs Background Evidence

A classificação de papel deve responder à pergunta “como esta evidência participa da proposição?” e não “qual fonte é sempre melhor?”.

| Papel | Definição operacional | Exemplo | Limite |
|---|---|---|---|
| `PRIMARY` | Captura ou fonte diretamente usada para afirmar o estado analisado. | Resposta observada, página que declara o atributo, protocolo que registra a consulta. | Diretamente observado não significa causalmente explicativo. |
| `SUPPORTING` | Fonte adicional que corrobora, contextualiza ou permite comparar a proposição. | Referência externa compatível, segunda captura comparável ou documento que esclarece uma relação. | Corroboração não equivale a consenso. |
| `BACKGROUND` | Material contextual que orienta a leitura, mas não sustenta sozinho o finding. | Definição metodológica, documentação de plataforma ou contexto editorial. | Não deve ser citado como prova do evento observado. |

Uma fonte oficial pode ser `PRIMARY`, `SUPPORTING` ou `BACKGROUND` conforme a proposição. Uma fonte independente pode ocupar os mesmos papéis. A classificação não produz hierarquia de confiança nem cálculo de autoridade.

## 10. Limitations Model

Limitações devem ser objetos legíveis, ligados ao finding ou à provenance que afetam. O mínimo conceitual é registrar a categoria, a descrição, o impacto interpretativo e o estado de resolução.

| Categoria de limitação | Exemplo | Consequência obrigatória |
|---|---|---|
| Contexto incompleto | Locale, hora ou sessão não disponíveis | Não comparar como se as condições fossem idênticas. |
| Surface dinâmica | Interface, sources ou wording mudaram | Tratar a captura como estado temporal, não como regra permanente. |
| Acesso parcial | URL, citation ou documento indisponível | Usar `PARTIAL`, `UNKNOWN` ou `NOT ASSESSABLE`, nunca preencher por suposição. |
| Amostra restrita | Query set pequeno ou purposive | Limitar a conclusão ao recorte observado. |
| Confundidores | Query drift, concorrência, atualização, personalização | Não afirmar causalidade de uma intervenção sem teste apropriado. |
| Conflito de fontes | Valores canônicos e externos divergentes | Registrar mismatch e abrir questão de reconciliação; não apagar o conflito. |
| Mecanismo não observável | Peso, retrieval trace ou arquitetura interna desconhecidos | Manter o mecanismo como `UNKNOWN` ou hipótese explicitamente marcada. |

`ZERO` e `MISSING` não são intercambiáveis. Zero citations observadas significa que a interface permitiu verificar a ausência naquela captura; `NOT AVAILABLE` significa que o elemento não estava disponível ou não pôde ser acessado; `UNKNOWN` significa que a classificação não foi possível.

## 11. Recommendation Model

Uma `Recommendation` é uma orientação editorial ou de pesquisa, nunca uma evidência. Ela deve apontar para pelo menos um finding ou para uma pergunta aberta explícita. Não deve afirmar que a ação garantirá citação, autoridade, ranking, visibilidade ou conversão.

| Campo conceitual | Função |
|---|---|
| `recommendationId` | Identificador da orientação. |
| `action` | Ação controlável, como revisar uma data, preservar uma captura ou investigar uma relação. |
| `basisFindingRefs` | Findings que justificam a orientação. |
| `evidenceRefs` | Evidências consultadas, quando disponíveis. |
| `scope` | Entidade, relação, atributo, tópico, source, query set ou período afetado. |
| `expectedObservation` | Estado que deverá ser observado se uma nova pesquisa for realizada; não é promessa de resultado. |
| `dependencies` | Dados, acesso, protocolo ou revisão necessários. |
| `limitations` | O que a recomendação não pode assegurar. |
| `status` | `RECOMENDADO`, `PLANNED RESEARCH QUESTION` ou `HOLD`, conforme o caso. |

O modelo deve impedir conceitualmente **Recommendation sem Finding**. Se ainda não houver evidence reference, a recomendação deve ser apresentada como pergunta de pesquisa planejada ou gap, e não como conclusão comercial.

## 12. Validação contra OBS-001

### 12.1 Evidence Items preservados

OBS-001 contém uma amostra de consultas T0 controladas, incluindo `T0-Q06` (`Sidney Santos Search Intelligence`) e `T0-Q07` (`Sidney Santos Entity Authority`), com Google Search e Google AI Overviews indicados no registry. O modelo deve representar cada consulta e cada resultado como evidência contextual, sem colapsar consultas diferentes em uma propriedade universal da entidade.

A observação permitida é que houve diferença de reconhecimento e associação entre os contextos observados. A interpretação sobre densidade de coocorrência, ruído de homônimos ou facilitação de resolução deve permanecer `INFERIDO`, ligada às observações e acompanhada das limitações já registradas: amostra limitada, variação regional/de sessão/atualização e ausência de acesso a pesos internos.

### 12.2 Finding e interpretação

| Elemento | Tratamento no modelo |
|---|---|
| Diferença observada entre queries | `Finding` de `TOPIC_ASSOCIATION` / `RECOGNITION`, classe `OBSERVADO`, com `evidenceRefs` para T0-Q06/T0-Q07. |
| “Contexto facilita resolução” | `Interpretation` `INFERIDO`, não causal e não universal. |
| “Depende criticamente” | `POTENTIAL OVERCLAIM / NEEDS REVIEW`; não pode ser promovido a mecanismo demonstrado. |
| Recomendação de mapear clusters | `Recommendation` `RECOMENDADO`, vinculada ao finding, sem promessa de transferência de autoridade. |

O modelo, portanto, preserva `OBS-001 = fenômeno observacional contextual; causalidade = não demonstrada`.

## 13. Validação contra OBS-002

### 13.1 Evidence Items preservados

OBS-002 registra a consulta `T0-Q05` (“Quem fundou a AUDITSEO?”) em Google AI Overviews. O caso observado é: entidade correta, relação corporativa correta e atributo temporal divergente — 2013 na resposta em contraste com o valor canônico de 2009 registrado pela AUDITSEO. O valor canônico é uma referência de comparação do ecossistema; ele não prova qual fonte a plataforma usou.

O modelo deve separar os seguintes findings:

| Finding | Classe | Evidência e limite |
|---|---|---|
| Sidney Santos identificado | `OBSERVADO` | Captura de T0-Q05; descreve a entidade apresentada. |
| Relação fundador–AUDITSEO identificada | `OBSERVADO` | Captura e referência canônica; não revela mecanismo de relation resolution. |
| Atributo temporal divergente | `OBSERVADO` | Resposta observada com 2013 versus referência canônica de 2009. |
| Fontes secundárias conflitantes podem participar da divergência | `INFERIDO / NEEDS REVIEW` | Hipótese não demonstrada; não pode ser descrita como peso efetivamente exercido por fontes. |
| Cadeia Entity Resolution → Relation Resolution → Attribute Resolution → Consistency | `INFERIDO / MODEL EDITORIAL` | Modelo interpretativo da AUDITSEO; não arquitetura interna conhecida. |
| Unificar menções e marcos | `RECOMENDADO` | Orientação vinculada ao mismatch; não garante correção futura. |

A frase de que sinais conflitantes “exercem peso imprevisível” permanece potencial overclaim. A formulação aceitável é que fontes ou menções conflitantes **podem ser uma hipótese de investigação**, desde que a referência e a limitação sejam explicitadas. A formulação proibida é afirmar que uma fonte específica foi usada ou teve peso interno sem trace documentado.

### 13.2 Invariantes do modelo

O modelo deve impedir:

1. `OBSERVED_RECOGNITION` de ser convertido em `LOW ENTITY AUTHORITY`, porque a primeira é observação condicional e a segunda não é demonstrada.
2. Um `ATTRIBUTE_MISMATCH` de ser convertido em causalidade, penalidade, score ou diagnóstico universal.
3. A cadeia editorial de OBS-002 de ser publicada como arquitetura sequencial conhecida.
4. Uma recomendação de consistência de dados de ser apresentada como garantia de correção em AI Search.

## 14. Public Truth e elegibilidade comercial

A verdade epistemológica e a elegibilidade comercial devem permanecer separadas. O campo `commercialEligibility` usa exatamente três estados, sem um quarto estado implícito:

| Estado | Semântica AUDITSEO |
|---|---|
| `YES` | O finding é reproduzível e suficientemente delimitado para orientar a definição de um escopo comercial diagnóstico; não afirma autoridade nem promete resultado. |
| `CONDITIONAL` | O finding pode apoiar uma conversa comercial somente com escopo, protocolo, qualificadores, revisão de evidência e limitações explícitos; não promete resultado. |
| `NO` | O finding não pode ser usado como claim comercial ou promessa, por ausência de demonstração, extrapolação ou proibição metodológica. |

O modelo pode apoiar uma conversa comercial quando há findings reproduzíveis sobre identidade, relação, atributo, associação, source, citation ou consistência no escopo de um protocolo. Isso não autoriza promessa de resultado.

| Claim ou estado | Commercial Eligibility | Tratamento e limite |
|---|---|---|
| `OBSERVED_RECOGNITION` | `CONDITIONAL` | Descreve reconhecimento em contexto observado, sem universalidade. |
| `ENTITY_PRESENT` | `CONDITIONAL` | Presença na captura; não equivale a autoridade ou recomendação. |
| `ATTRIBUTE_MISMATCH` | `CONDITIONAL` | Pode justificar investigação factual delimitada, sem atribuir causa. |
| `LOW ENTITY AUTHORITY` | `NO` | Não demonstrado; não deve ser usado como finding sem método e evidência que o sustentem. |
| `Citation guarantee`, `authority score`, `ranking promise` | `NO` | Claims removidas/evitadas; não são autorizadas pelo modelo. |
| `Recommendation` | `CONDITIONAL` | Só existe quando vinculada a finding e limitações. |

O modelo não deve criar metadata pública, copy comercial, schema ou rota. A classificação acima é uma regra documental para impedir que um finding seja promovido indevidamente durante futura revisão.

## 15. Open Questions e Planned Research Questions

As lacunas abaixo permanecem abertas e não devem ser preenchidas por suposição:

| Questão aberta | Estado | Dependência |
|---|---|---|
| Qual política formal reconcilia o valor canônico do registry com uma fonte externa divergente? | `OPEN QUESTION` | Definição de autoridade editorial, data, escopo e procedimento de revisão. |
| Como os raw captures serão retidos, identificados e disponibilizados para auditoria futura? | `PLANNED RESEARCH QUESTION` | Política de armazenamento e acesso; não implementada neste Step. |
| Como marcar a diferença entre uma source inacessível e uma source que não foi exibida? | `PLANNED RESEARCH QUESTION` | Protocolo de captura e estados de missingness. |
| Qual granularidade mínima uma claim deve ter para permitir Claim Map e alignment? | `OPEN QUESTION` | Teste editorial com respostas e fontes reais, sem inferir pipeline interno. |
| Quando várias observações comparáveis podem sustentar `CONSISTENCY` ou `VOLATILITY`? | `PLANNED RESEARCH QUESTION` | Query set, período, repetição e critérios explícitos. |
| Como uma relação canônica deve ser diferenciada de uma relação apenas observada em uma superfície? | `OPEN QUESTION` | Convenção de identidade, relation status e provenance. |

Nenhuma nova Observation, Experiment, Research Item, score, KPI universal, arquitetura de sistema ou implementação foi criada neste documento.

## 16. Acceptance Criteria

O Step 3 documental é considerado conforme quando:

| Critério | Resultado desta especificação |
|---|---|
| Evidence Item, Finding e Provenance Rules foram definidos antes da validação dos casos | `PASS` |
| A fronteira entre Evidence Item legado e Entity, Attribute, Relationship, Topic Association, Finding, Interpretation, Recommendation e Commercial Eligibility está explícita | `PASS` |
| Cada finding possui caminho para provenance ou é explicitamente marcado como gap | `PASS` |
| Evidence e inference são objetos conceitualmente distintos | `PASS` |
| Observation, Interpretation e Recommendation permanecem separados | `PASS` |
| Primary, Supporting e Background Evidence não viram ranking de qualidade | `PASS` |
| Identity, Relation, Attribute, Topic Association, Consistency e Corroboration são distinguíveis | `PASS` |
| Source, citation, attribution e claim-source alignment não são colapsados | `PASS` |
| Missingness, UNKNOWN e NOT ASSESSABLE são preservados | `PASS` |
| OBS-001 permanece contextual e não causal | `PASS` |
| OBS-002 não é apresentada como mecanismo interno ou arquitetura conhecida | `PASS` |
| `AI_AUTHORITY_SCORE`, `ENTITY_STRENGTH` e equivalentes agregados são proibidos | `PASS` |
| `Commercial Eligibility` usa exclusivamente `YES`, `CONDITIONAL` ou `NO` | `PASS` |
| `Evidence Item` não é confundido com objeto analítico, source interna ou authority calculada | `PASS` |
| `OBSERVED_RECOGNITION` permanece condicional e “LOW ENTITY AUTHORITY” permanece `NOT DEMONSTRATED` | `PASS` |
| Nenhum código, schema, registry, rota, metadata pública, Vercel ou Production foi alterado | `PASS — a verificar no git status` |

## 17. Scope Boundary e próximo gate

Este documento não implementa os objetos descritos, não cria tabelas de banco, não altera interfaces de pesquisa e não modifica o registry. O modelo é uma especificação editorial para futura decisão de governança. O próximo gate não é iniciado por este documento e qualquer Step 4 permanece dependente de autorização explícita do GPT AUDITSEO.

## References

[1]: `../src/editorial/researchTypes.ts` — tipos atuais de `ResearchItem` e `EvidenceItem`, incluindo `DOCUMENTADO`, `OBSERVADO`, `TESTADO`, `INFERIDO` e `RECOMENDADO`.

[2]: `../src/editorial/researchRegistry.ts` — registros de OBS-001, OBS-002, EXP-001, OBS-003, OBS-004 e ANALYSIS-001, incluindo queries, observations, findings, limitations e interpretations.

[3]: `../src/editorial/registry.ts` — registry canônico de AUDITSEO, Sidney Santos, identificadores de organização e pessoa, URLs e declaração biográfica.

[4]: `../src/editorial/types.ts` — tipos editoriais de `AuthorRef`, `PublisherRef`, `TopicGraph` e `ArticleData`.

[5]: `../src/editorial/articles/aiCitationsAttributionArticle.ts` — distinções entre entity presence, source presence, citation, attribution, claim map, source map, entity map e alignment.

[6]: `../src/editorial/articles/aiMeasurementArticle.ts` — contrato de observação, contexto mínimo, missingness, dimensões descritivas, audit trail e separação entre medição e score.

[7]: `../src/components/research/ResearchPrimitives.tsx` — contrato atual de renderização de EvidenceItem, query set, limitations e intervenções.

[8]: `qa/r17-a-step-2-terminology-evidence-boundary-analysis.md` — corpus terminológico e Boundary Matrix aprovados no R17-A Step 2.
