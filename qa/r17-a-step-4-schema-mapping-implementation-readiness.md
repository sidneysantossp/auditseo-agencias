# R17-A / Step 4 — Schema Mapping & Implementation Readiness

**Status do documento:** documentação de QA e prontidão; sem implementação.

**Autorização:** `READ / ANALYZE / DESIGN / QA DOCUMENTATION ONLY`.

> Este documento mapeia o modelo conceitual aprovado nos Steps 2–3 contra os contratos reais atualmente existentes no repositório. Ele não cria schema, não altera tipos TypeScript, não modifica registries, renderer, rotas, metadata pública, Vercel ou Production. A finalidade é preparar uma decisão segura para um gate futuro, sem transformar uma especificação editorial em arquitetura de produção.

## 1. Objetivo e pergunta de decisão

O objetivo do Step 4 é determinar, para cada objeto do modelo de Entity Evidence e Provenance, o que pode ser reutilizado no estado atual, o que só pode ser reutilizado com restrições, o que possui dívida de compatibilidade, o que requer extensão futura, o que precisa ser separado conceitualmente e o que não deve ser mapeado para produção neste momento.

A pergunta operacional é: **quais contratos atuais sustentam apenas apresentação editorial e quais seriam insuficientes para representar provenance reproduzível, findings auditáveis, estados de atributo, relações situadas e elegibilidade comercial sem perda epistemológica?**

A conclusão deste relatório não é uma autorização de implementação. A recomendação final distingue prontidão documental de autorização para escrever produto.

## 2. Source Truth examinado

A análise foi limitada aos contratos e consumidores exigidos pelo briefing do Step 4. O contrato de pesquisa está em `researchTypes.ts`: `EvidenceItem` possui `type`, `statement`, `source?`, `limitations?` e `notes?`; `ResearchItem` mantém `evidenceProfile` como array desses itens e representa `observations`, `findings` e `recommendations` como arrays de strings, além de uma `interpretation` textual, `queries`, `systemsObserved`, `topicRelations` e `references` [1].

Os tipos canônicos de identidade e publicação estão em `types.ts`. `AuthorRef` contém `personId`, e `PublisherRef` contém `organizationId`; `TopicGraph`, por sua vez, é um objeto editorial baseado em strings, com `primaryEntity`, `relatedEntities`, clusters, navegação, `evidenceLinks` e `commercialRelation` [2].

O registry canônico fornece os IDs de AUDITSEO e Sidney Santos, além de nome, URL, cargo, biografia, publisher e logo [3]. Esses IDs são anchors reutilizáveis de identidade, mas não constituem sozinhos o `Entity Object` completo do Step 3: não carregam variantes conhecidas, escopo contextual, estado apresentado pela superfície, nem provenance por finding.

O `researchRegistry.ts` confirma o uso real dos contratos em OBS-001, OBS-002, EXP-001, OBS-003, OBS-004 e ANALYSIS-001. O arquivo registra evidências, queries, observations, findings, limitations, interpretations e recommendations, mas preserva esses elementos majoritariamente como strings e arrays. O conteúdo de OBS-001 e OBS-002 continua sendo Source Truth editorial; este Step 4 não corrige, reclassifica ou reescreve esses registros [4].

O gerador de schema do Lab reduz um `ResearchItem` a `Article`, `BreadcrumbList`, `CollectionPage`, `Person` e `Organization`, usando título, descrição, datas, autor, publisher, route e `topicRelations` como `keywords`. Ele não serializa `evidenceProfile`, queries, observations, findings, limitations, interpretation, recommendations ou qualquer objeto de provenance do Step 3 [5].

O gerador de schema de artigos faz o mesmo em outra superfície: reutiliza metadata editorial de alto nível — título, descrição, imagem, datas, author, publisher e breadcrumbs — mas não transforma `topicGraph`, `evidence`, `commercialRelation` ou relações de entidade em um grafo de evidence/provenance [6]. Um artigo representativo confirma que `evidence` pode ser texto humano legível enquanto `topicGraph.evidenceLinks` usa IDs de pesquisa e que `commercialRelation` é uma relação editorial de navegação, não um finding comercial estruturado [9].

O renderer público do Lab consome o contrato flat atual: mostra `question`, `context`, `methodology`, sistemas, queries, observations, findings, evidence profile, interpretation, recommendations, limitations e interventions. `EvidenceItem` é apresentado como um cartão com rótulo, statement, source opcional, limitation opcional e note opcional. O renderer também possui um tratamento específico para OBS-002 que exibe um framework proprietário de quatro etapas; esse tratamento é apresentação editorial e não prova de um objeto de sistema ou schema de produção [7] [8].

## 3. Taxonomia de decisão

Cada conceito recebe exatamente uma classificação principal da matriz obrigatória:

| Classificação | Significado documental no Step 4 |
|---|---|
| `REUSE AS-IS` | O contrato atual preserva o significado necessário sem extensão ou perda relevante para o uso delimitado. |
| `REUSE WITH CONSTRAINTS` | Pode ser reutilizado somente para o escopo já demonstrado, com limites explícitos e sem promovê-lo a modelo mais rico. |
| `EXTENSION REQUIRED` | O contrato atual não possui campos ou semântica suficientes; uma extensão futura seria necessária, mas não é implementada neste Step. |
| `SPLIT REQUIRED` | Um campo ou superfície atual mistura camadas que precisam permanecer distintas no modelo-alvo. |
| `COMPATIBILITY DEBT` | O contrato legado funciona como Source Truth ou apresentação atual, mas é menor, ambíguo ou incompatível com o modelo-alvo. |
| `DO NOT MAP` | Não deve ser projetado como destino de produção neste momento, por ausência de contrato, risco de overclaim ou falta de autorização. |

A classificação é sobre **readiness de mapping**, não sobre qualidade, força, confiança ou autoridade. Nenhuma classificação é score.

## 4. Matriz obrigatória de schema mapping

| Conceito aprovado no Step 3 | Contrato atual observado | Classificação | O que pode ser preservado | Limite e decisão futura |
|---|---|---|---|---|
| **Entity** | `AuthorRef`, `PublisherRef` e IDs canônicos em `registry.ts`; `TopicGraph.primaryEntity` e `relatedEntities` como strings [2] [3]. | `REUSE WITH CONSTRAINTS` | `personId`, `organizationId`, nome, URL, cargo, bio e publisher podem funcionar como anchors canônicos no escopo já existente. | Não há objeto Entity completo com variantes, entidade apresentada, scope/context, evidenceRefs e limitations. Extensão futura é necessária; não tratar TopicGraph string como Entity Object. |
| **Attribute** | Não existe tipo de atributo de primeira classe. Valores aparecem em strings de observations/findings, prose editorial, biografia e `resultSummary` [1] [4]. | `EXTENSION REQUIRED` | O valor textual observado e a referência canônica podem ser preservados como material de análise documental. | `attributeId`, predicate, observedValue, expectedValue, state, validAt, evidenceRefs, provenanceRefs e limitations não possuem contrato atual. Não criar `attribute quality score`. |
| **Relationship** | `TopicGraph` oferece relações editoriais por strings, navegação e `relatedEntities`; relações institucionais também aparecem em prose e registry [2] [3] [9]. | `SPLIT REQUIRED` | Relações editoriais e links existentes podem ser reutilizados como contexto de publicação e navegação. | É necessário separar relação declarada, documentada, observada e interpretação. `relatedEntities` ou proximidade textual não devem virar relationship observada nem acesso a Knowledge Graph. |
| **Topic Association** | `topicRelations`, `cluster`, `secondaryClusters`, `primaryEntity` e strings de tópico no Lab e nos artigos [1] [2] [4] [9]. | `REUSE WITH CONSTRAINTS` | O conjunto de tópicos, query set textual e contexto editorial pode ser preservado como associação situada. | Não há objeto que una entity, topic, query set, evidenceRefs, observed state e limitations. Topic association não deve ser convertida em Entity Authority, recognition universal ou visibility global. |
| **Evidence** | `EvidenceItem` contém apenas `type`, `statement`, `source?`, `limitations?` e `notes?`; `EvidenceCategory` aceita `DOCUMENTADO`, `OBSERVADO`, `TESTADO`, `INFERIDO` e `RECOMENDADO` [1]. | `COMPATIBILITY DEBT` | Os itens atuais podem continuar sendo exibidos e preservados como registro editorial legado. `DOCUMENTADO`, `OBSERVADO` e `TESTADO` são compatíveis com source-bearing evidence quando o contexto disponível for suficiente. | O modelo-alvo precisa separar source-bearing Evidence Item de Interpretation e Recommendation. A aceitação atual de cinco categorias é dívida de compatibilidade do contrato legado, não deve ser perpetuada como destino conceitual de schema. |
| **Finding** | `ResearchItem.findings?: string[]`; findings concretos aparecem como frases no registry e no renderer [1] [4] [7]. | `EXTENSION REQUIRED` | A proposição textual pode ser preservada como material de migração e revisão. | Falta `findingId`, subject/entity, scope, findingType, evidenceClass, evidenceRefs, provenanceRefs, status, limitations e commercialEligibility. Não mapear texto de finding diretamente para autoridade, KPI, score ou claim comercial. |
| **Interpretation** | `ResearchItem.interpretation?: string` e alguns `EvidenceItem` com `type: INFERIDO` [1] [4]. | `SPLIT REQUIRED` | A interpretação pode continuar publicada como camada editorial textual, com suas limitações. | `INFERIDO` deve permanecer na camada de Interpretation no modelo-alvo; não deve ser serializado como source-bearing evidence nem como mecanismo interno conhecido. |
| **Recommendation** | `ResearchItem.recommendations?: string[]` e alguns `EvidenceItem` com `type: RECOMENDADO` [1] [4] [7]. | `SPLIT REQUIRED` | Recomendações podem continuar sendo apresentadas como orientação editorial. | Recommendation precisa referenciar finding/evidence e permanecer separada de Evidence. Não há campo atual para base, dependência, escopo ou limitation; não converter recommendation em evidence ou garantia comercial. |
| **Provenance** | `source?`, `references?: string[]`, `query`, `system`, `date` e `resultSummary` parcialmente disponíveis, sem vínculo per-layer/per-finding [1] [4]. | `EXTENSION REQUIRED` | URLs, referências, query sets, sistemas observados e datas existentes podem compor matéria-prima de provenance. | Falta provenance reproduzível por camada, captura bruta, locale, surface, source type, evidenceRefs e provenanceRefs. Não presumir que `references` ou `source` isolados reconstruam um finding. |
| **Primary / Supporting / Background Evidence** | Não há campo ou distinção correspondente no contrato atual; há apenas `evidenceProfile`, `references` e texto editorial [1] [4]. | `EXTENSION REQUIRED` | Referências existentes podem ser classificadas documentalmente em futura migração. | A distinção deve ser criada em futura especificação de mapping, sem ranking de qualidade ou score de fontes. “EVIDÊNCIA DE APOIO” comercial não deve ser tratada como primary evidence. |
| **Commercial Eligibility** | Não existe campo nos `ResearchItem`, `EvidenceItem`, `ArticleData`, `TopicGraph` ou schemas atuais [1] [2] [5] [6]. | `DO NOT MAP` | Nenhuma elegibilidade comercial é afirmada pelo contrato atual. Relações como `commercialRelation` permanecem navegação/editorial [2] [9]. | Não adicionar campo neste Step nem usar `commercialRelation` como elegibilidade. Qualquer futura extensão deve manter `YES | CONDITIONAL | NO`, com rationale e limitations separados. |
| **Entity Authority** | Aparece como terminologia de cluster, tópico e documentação editorial; não há propriedade calculada no contrato [2] [4] [9]. | `DO NOT MAP` | O termo pode continuar como categoria metodológica AUDITSEO delimitada. | Não mapear para campo, score, força, confidence, ranking ou autoridade universal de entidade. |
| **Knowledge Graph / mecanismo interno** | `TopicGraph` é estrutura editorial com strings e links; não há acesso a grafo interno [2]. | `DO NOT MAP` | O TopicGraph pode continuar organizando conteúdo e relações editoriais. | Não converter `TopicGraph` em Knowledge Graph, grafo interno de plataforma ou explicação causal de recuperação. |

## 5. Mapeamento dos contratos de superfície

### 5.1 ResearchItem e EvidenceItem

`ResearchItem` é reutilizável como envelope editorial do Lab, não como implementação do modelo do Step 3. Ele fornece identificadores de pesquisa, route, status, autoria, datas, query set, limitações e campos de apresentação. Essa reutilização exige manter a distinção entre o envelope atual e futuros objetos estruturados de Entity, Attribute, Relationship, Evidence, Finding e Provenance.

`EvidenceItem` é o principal caso de `COMPATIBILITY DEBT`. O contrato atual é adequado para exibir uma afirmação curta com rótulo de governança e limitações, mas não para reconstruir uma cadeia de provenance. O renderer também cria um identificador visual `EVIDENCE-01`, `EVIDENCE-02` por posição do array, o que é um identificador de apresentação e não um `evidenceId` estável [7]. Nenhuma migração ou correção desse contrato é autorizada no Step 4.

### 5.2 TopicGraph

`TopicGraph` é reutilizável como mapa editorial de cluster, navegação, entidades em texto e links de evidência já publicados. Sua classificação permanece `REUSE WITH CONSTRAINTS`: ele não deve receber implicitamente semântica de Entity Object, relationship observada, provenance ou Knowledge Graph. Os campos `evidenceLinks` podem ser tratados como referências editoriais a itens de pesquisa, mas não como evidenceRefs completos sem um futuro contrato de resolução.

### 5.3 JSON-LD do Lab

`generateResearchSchema` é reutilizável para metadata de publicação, autoria, publisher, breadcrumbs e agrupamento do Lab. Não está pronto para serializar o modelo de evidence/provenance. O fato de `topicRelations` virar `keywords` não demonstra uma associação temática observada, nem deve ser apresentado como visibility, citation, recognition ou authority [5].

### 5.4 JSON-LD de artigos

`generateArticleSchema` é reutilizável para Article, Person, Organization e BreadcrumbList. O `ArticleData.evidence` e o `TopicGraph` não são emitidos como provenance; portanto, qualquer extensão futura deve ser decidida separadamente, com contrato, escopo e critérios de publicação. A presença de `commercialRelation` em `ArticleData` continua uma relação de navegação editorial, não uma classificação de elegibilidade ou uma prova de resultado [2] [6] [9].

### 5.5 Renderer público do Lab

`ResearchItemPage` e `ResearchPrimitives` são consumidores do contrato atual. Podem ser reutilizados para o conteúdo legado, mas não devem ser considerados prontos para renderizar o modelo-alvo sem uma extensão futura. A exceção específica de OBS-002, que exibe `Entity → Relation → Attribute → Consistency`, é uma apresentação de framework proprietário e não deve ser inferida como schema mapping já existente [7] [8].

## 6. Readiness por camada

| Camada | Estado atual | Readiness documental | Decisão segura |
|---|---|---|---|
| Identidade canônica de AUDITSEO/Sidney Santos | IDs e refs estáveis no registry | Parcialmente pronta | Reutilizar como anchor com constraints. |
| Metadata editorial e autoria | Contratos estáveis e emitidos em JSON-LD | Pronta para escopo atual | Reutilizar as-is apenas como metadata de publicação. |
| Query set e surface observada | `ResearchQuery[]`, `systemsObserved`, datas parciais | Reutilizável com constraints | Preservar como contexto, sem supor captura completa. |
| Evidence Item | Contrato mínimo, cinco classes e source opcional | Não pronta para target model | Tratar como compatibility debt. |
| Entity / Attribute / Relationship | Strings, refs e prose dispersas | Não pronta | Extensão futura required; não implementar agora. |
| Topic Association | Arrays e TopicGraph editoriais | Parcialmente pronta | Reutilizar somente como associação editorial situada. |
| Finding / Interpretation / Recommendation | Strings e arrays sem refs estruturadas | Não pronta | Separar e estender futuramente. |
| Provenance por camada | Ausente como contrato unificado | Não pronta | Extensão futura required. |
| Commercial Eligibility | Ausente | Não pronta e não deve ser mapeada | `DO NOT MAP` até contrato futuro autorizado. |
| JSON-LD de publicação | Metadata de alto nível | Pronta somente para metadata atual | Não estender neste Step. |

## 7. Compatibility debt identificada

A dívida principal é semântica, não apenas de nomes de campos. O contrato legado aceita cinco categorias em `EvidenceItem`, embora o modelo conceitual aprovado tenha separado evidência source-bearing de Interpretation e Recommendation. Essa compatibilidade deve ser documentada como dívida atual para não quebrar o renderer nem promover `INFERIDO` ou `RECOMENDADO` a fonte.

A segunda dívida é a representação de findings, interpretações e recomendações como strings. O conteúdo é publicável e auditável dentro dos limites editoriais já declarados, mas não permite reconstituir automaticamente a ligação entre um finding, os itens de evidência, a interpretação derivada e a recommendation subsequente.

A terceira dívida é a duplicidade de grafos editoriais: `TopicGraph`, `topicRelations`, `relatedEntities` e `evidenceLinks` ajudam a organizar conteúdo, mas não constituem um grafo de entities/provenance. A quarta é a ausência de uma semântica única para `source`, `references`, `evidence` e `evidenceLinks`; seus usos variam entre texto humano, IDs de research e links editoriais.

A quinta dívida é a ausência de contrato de estados para Attribute, Relationship, Topic Association, Finding e Commercial Eligibility. O estado visual de uma observação ou o texto de um finding não deve ser promovido a enum, score ou claim de produção sem uma decisão futura e explícita.

## 8. Decisões negativas obrigatórias

Este Step não deve mapear `Entity Authority` para score, força, confiança, ranking ou propriedade calculada. Também não deve mapear `TopicGraph` para Knowledge Graph, `commercialRelation` para Commercial Eligibility, `evidenceLinks` para provenance completa, nem `keywords` para recognition ou visibility.

Não se deve inferir que a existência de `author.personId` ou `publisher.organizationId` prova todos os atributos do Entity Object. Não se deve usar o identificador visual posicional `EVIDENCE-01` como evidenceId estável. Não se deve interpretar a exceção de OBS-002 no renderer como arquitetura interna de AI Search.

Por fim, nenhuma extensão de `researchTypes.ts`, `types.ts`, `registry.ts`, `researchRegistry.ts`, `researchSchema.ts`, `schema.ts`, renderer, route ou metadata é realizada aqui. A decisão segura é manter o Source Truth atual intacto e registrar as extensões como backlog de um gate futuro.

## 9. Readiness e recomendação de gate

O repositório está **documentalmente pronto para uma futura discussão de extensão**, mas não está pronto para mapear o modelo do Step 3 diretamente em produção. Os contratos atuais sustentam metadata, envelopes editoriais e apresentação de pesquisa; não sustentam, sem perda de camada epistemológica, um modelo de provenance per-finding ou objetos estruturados de Entity/Attribute/Relationship.

**Recomendação:** `PROCEED` para QA e decisão governamental do relatório do R17-A Step 4; `HOLD` para qualquer implementação, schema mapping de produção, alteração de registry, renderer, API, banco, rota, metadata pública, Vercel ou Production. Qualquer R17-B deve depender de autorização explícita após o QA deste documento.

## 10. Commercial Eligibility Mapping

O contrato atual não possui `commercialEligibility`. O campo `commercialRelation` de `TopicGraph` e `ArticleData` é uma relação editorial de navegação para uma superfície comercial e não pode ser promovido a elegibilidade, finding, evidence ou promessa. Portanto, o estado atual é **não mapeado**, e não `NO` por inferência automática.

No modelo futuro do Step 3, `commercialEligibility` pertence ao `Finding` e admite somente `YES | CONDITIONAL | NO`, sempre com rationale, allowed use e limitations separados. A ausência do campo legado não deve ser preenchida como `YES`, `CONDITIONAL` ou `NO` sem finding estruturado e provenance correspondente. Um futuro adapter deve manter `commercialRelation` como link editorial e tratar elegibilidade como dimensão independente, sem score, confidence ou garantia.

| Origem atual | Destino conceitual futuro | Classificação | Regra |
|---|---|---|---|
| `commercialRelation` em `TopicGraph`/`ArticleData` | Link editorial | `REUSE AS-IS` no escopo de navegação | Não é evidence, finding ou elegibilidade. |
| Ausência de `commercialEligibility` em `ResearchItem` | Campo do `Finding` | `DO NOT MAP` por default | Ausência não vira `NO` automaticamente; permanece não mapeada até existir finding/provenance. |
| Finding futuro estruturado com limitações | `commercialEligibility` | `EXTENSION REQUIRED` | Usar somente `YES | CONDITIONAL | NO`; `allowedUse` e rationale permanecem separados. |

## 11. Renderer Compatibility

O renderer atual deve continuar consumindo o contrato legado sem alteração: `ResearchItemPage` e `ResearchPrimitives` exibem arrays/strings, `EvidenceItem` com rótulo e statement, query set, limitations, interpretation e recommendations. A compatibilidade de leitura é preservada enquanto o modelo-alvo não for implementado.

Qualquer futura adoção deve ocorrer por uma projeção/adaptador não destrutivo e reversível. A projeção não pode substituir silenciosamente `ResearchItem`, alterar o significado visual das cinco categorias legadas, converter `INFERIDO` ou `RECOMENDADO` em source evidence, nem reutilizar os IDs posicionais `EVIDENCE-01` como IDs estáveis. O tratamento visual específico de OBS-002 continuará apresentação editorial até que outro gate autorize qualquer mudança.

A compatibilidade do renderer precisa ser verificada com itens `PUBLISHED`, `DRAFT`, `MIGRATION_PENDING`, com evidence profile vazio/parcial, ausência de source, limitation ausente, query set incompleto e findings sem provenance estruturada. Nenhuma dessas verificações é executada neste Step.

## 12. Migration Risks

Os riscos principais são perda semântica ao converter strings em objetos, promoção indevida de `INFERIDO`/`RECOMENDADO` a evidência, duplicação de IDs canônicos, mistura entre TopicGraph e provenance, quebra do renderer legado, publicação acidental de registros `DRAFT` ou `MIGRATION_PENDING`, e preenchimento artificial de missingness.

Há também risco de reclassificar relações editoriais como relações observadas, interpretar `commercialRelation` como elegibilidade, ou transportar um finding para fora do seu scope, surface, query set ou data. Esses riscos são de governança e compatibilidade, não devem ser tratados com score ou confiança arbitrária.

## 13. Compatibility Options

| Opção futura | Descrição | Reversibilidade | Decisão no Step 4 |
|---|---|---|---|
| A — Manter o legado | Preservar os contratos atuais e usar o relatório como especificação sem adapter | Alta | `PROCEED` para documentação; não implementada. |
| B — Projeção read-only isolada | Criar uma projeção versionada de um único `ResearchItem` para validar mapping sem write-back nem publicação | Alta | Candidata ao menor experimento futuro, dependente de R17-B. |
| C — Extensão compatível versionada | Adicionar contratos novos mantendo os campos legados e uma camada explícita de compatibilidade | Média | Exige decisão de schema, testes e autorização posterior. |
| D — Big-bang migration | Substituir o contrato legado e migrar todos os itens/consumidores de uma vez | Baixa | `DO NOT MAP`; rejeitada no estado atual. |

A opção recomendada para eventual R17-B é B, seguida de avaliação de C somente após evidência de compatibilidade. Não há autorização para executar nenhuma delas no Step 4.

## 14. Recommended R17-B Scope

O menor escopo reversível recomendado para um futuro R17-B é uma **projeção read-only de um único item de pesquisa existente**, preferencialmente em fixture ou superfície não pública, sem alterar o `ResearchItem` legado, sem dual-write e sem criar rota indexável. Essa projeção teria apenas a finalidade de validar o caminho `Entity/Attribute/Relationship/Topic Association → Evidence → Finding → Interpretation → Recommendation` e os estados de missingness, preservando os IDs canônicos como anchors sem duplicá-los.

A validação futura deveria comparar o resultado da projeção com OBS-001 e OBS-002 sem alterar seus Source Truths, verificar a preservação do renderer legado e testar que `commercialRelation` não se converte em `commercialEligibility`. O escopo não inclui migração em massa, alteração de JSON-LD público, banco de dados, API, UI, registry, produção ou publicação de novos findings.

A decisão vinculante deste Step é **NO BIG-BANG MIGRATION**. R17-B, inclusive a projeção piloto, permanece dependente de autorização formal posterior.

## 15. Explicit Non-Goals

Este Step não altera `researchTypes.ts`, `types.ts`, `registry.ts`, `researchRegistry.ts`, `researchSchema.ts`, `schema.ts`, `ResearchPrimitives.tsx`, `ResearchItemPage.tsx`, `ArticleData`, `TopicGraph`, qualquer registry central, renderer, rota, metadata pública, JSON-LD, API, banco, UI, Vercel ou Production. Não cria `Entity`, `Attribute`, `Relationship`, `Finding`, `Provenance` ou `Commercial Eligibility` de produção.

Também não executa migração, normalização de dados, backfill de provenance, reclassificação de OBS-001/OBS-002, alteração de EvidenceCategory, adoção de score, confidence, KPI ou garantia comercial. O documento não autoriza R17-B e não transforma readiness documental em autorização de implementação.

## 16. Files That Would Require Change

A tabela abaixo é prospectiva e não representa alteração neste Step:

| Finalidade futura | Arquivos que provavelmente exigiriam mudança | Motivo |
|---|---|---|
| Contratos de compatibilidade e objetos futuros | `src/editorial/researchTypes.ts`, `src/editorial/types.ts` | Definir versões/adapters sem apagar o legado. |
| Mapping/projection de ResearchItem | Novo módulo futuro ou camada explicitamente autorizada junto de `researchRegistry.ts` | Construir projeção read-only e preservar Source Truth. |
| Anchors e entidades canônicas | `src/editorial/registry.ts` somente se um gate autorizar extensão | Adicionar referências sem duplicar IDs existentes. |
| Serialização futura | `src/editorial/researchSchema.ts`, `src/editorial/schema.ts` | Só se houver decisão explícita sobre JSON-LD e escopo público. |
| Consumo visual futuro | `src/components/research/ResearchPrimitives.tsx`, `ResearchItemPage.tsx` | Renderizar objetos novos sem quebrar itens legados. |
| Fixtures e verificações | Testes ou fixtures futuros ainda não existentes | Validar mapping, missingness, renderer, schema e rollback. |

Nenhum desses arquivos foi modificado. O único arquivo alterado no Step 4 continua sendo o relatório QA.

## 17. Required Tests

Qualquer implementação futura deverá, antes de publicação, demonstrar ao menos: compatibilidade de tipos/build; projeção determinística de um fixture legado; preservação dos IDs canônicos sem duplicação; separação entre source-bearing Evidence, Interpretation e Recommendation; estados `MATCH | CONFLICT | MISSING | UNCLEAR | NOT_ASSESSABLE` sem conversão para score; preservação de `UNKNOWN` e `NOT ASSESSABLE`; escopo de query/surface/date; não promoção de `TopicGraph` a Knowledge Graph; não conversão de `commercialRelation` em elegibilidade; regressão do renderer para itens públicos e não públicos; e snapshots de JSON-LD sem publicação acidental de objetos não autorizados.

Também seriam necessários testes de rollback: remoção da projeção sem alterar o contrato legado, reexecução idempotente, ausência de dual-write, preservação de itens sem provenance, e garantia de que um failure no caminho novo deixa a superfície legada intacta. Esses testes são requisitos de prontidão futura, não foram executados neste Step documental.

## 18. Rollback / Backward Compatibility Considerations

O estado atual não possui migração executada e, portanto, não requer rollback de produto. Para um gate futuro, a compatibilidade deve ser backward-compatible by default: manter `ResearchItem` e `EvidenceItem` legados como leitura, adicionar a projeção atrás de flag ou superfície isolada, evitar sobrescrita e permitir remoção do adapter sem alterar os dados históricos.

Não deve haver big-bang replacement, dual-write prematuro, renomeação destrutiva de categorias ou preenchimento de campos ausentes com valores inventados. Falhas de mapping devem resultar em `MISSING`, `UNCLEAR`, `NOT_ASSESSABLE` ou gap explícito, nunca zero, score ou promoção epistemológica. Rollback deve consistir em desativar a projeção e retornar à leitura do contrato legado, mantendo IDs canônicos e Source Truth intactos.

## 19. Acceptance Checklist

| Critério | Resultado |
|---|---|
| O modelo aprovado foi comparado com os contratos reais do repositório | `PASS` |
| `Entity`, `Attribute`, `Relationship`, `Topic Association` e `Evidence` aparecem na matriz obrigatória | `PASS` |
| Cada conceito recebeu uma classificação única da taxonomia obrigatória | `PASS` |
| A diferença entre ResearchItem/EvidenceItem legado e modelo-alvo foi explicitada | `PASS` |
| IDs canônicos foram tratados como anchors, não como Entity Object completo | `PASS` |
| TopicGraph foi mantido separado de Knowledge Graph e provenance | `PASS` |
| Research schema foi limitado a metadata observada | `PASS` |
| Commercial Eligibility foi mapeada explicitamente sem usar commercialRelation como elegibilidade | `PASS` |
| Renderer compatibility e limites de leitura legada foram explicitados | `PASS` |
| Riscos, opções e escopo reversível para R17-B foram documentados | `PASS` |
| Não foi recomendada big-bang migration | `PASS` |
| Arquivos futuros, testes e rollback foram especificados sem alterações | `PASS` |
| Nenhum score, confidence arbitrária, KPI universal ou autoridade calculada foi criado | `PASS` |
| Nenhum código, schema, registry, renderer, rota, metadata, Vercel ou Production foi alterado | `PASS — verificar no git status` |
| O documento permite decisão futura sem autorizar implementação atual | `PASS` |

## 20. Gate Recommendation

A recomendação permanece **PROCEED** para QA e decisão governamental do relatório do R17-A Step 4. O conteúdo agora explicita Commercial Eligibility Mapping, Renderer Compatibility, Migration Risks, Compatibility Options, Recommended R17-B Scope, Explicit Non-Goals, Files That Would Require Change, Required Tests e Rollback/Backward Compatibility.

A recomendação permanece **HOLD** para qualquer implementação, schema mapping de produção, alteração de registry, renderer, API, banco, rota, metadata pública, Vercel ou Production. A opção futura mínima é uma projeção read-only isolada de um único item, sem big-bang migration, mas ela continua `NOT AUTHORIZED` até um gate formal posterior.

## 21. Gate Boundary

Este documento encerra somente o mapeamento documental de readiness do R17-A Step 4. Ele não implementa, migra, normaliza ou publica objetos. O próximo gate, se autorizado pelo GPT AUDITSEO, deverá decidir se e como a opção mínima reversível será especificada. Até lá, `R17-B`, produto, schema, registry, renderer, API, Vercel e Production permanecem `NOT AUTHORIZED`.

## References

[1]: ../src/editorial/researchTypes.ts "ResearchType, EvidenceItem, ResearchQuery e ResearchItem"
[2]: ../src/editorial/types.ts "AuthorRef, PublisherRef, TopicGraph e ArticleData"
[3]: ../src/editorial/registry.ts "IDs canônicos, AUDIT_PUBLISHER e SIDNEY_AUTHOR"
[4]: ../src/editorial/researchRegistry.ts "Source Truth dos itens de pesquisa e seus campos atuais"
[5]: ../src/editorial/researchSchema.ts "Geradores de JSON-LD do Search Intelligence Lab"
[6]: ../src/editorial/schema.ts "Gerador de JSON-LD dos artigos"
[7]: ../src/components/research/ResearchPrimitives.tsx "Renderer de EvidenceItem, query set, tipos, cards e status"
[8]: ../src/components/research/ResearchItemPage.tsx "Consumidor público do contrato ResearchItem"
[9]: ../src/editorial/articles/entitySeoArticle.ts "ArticleData real de entidade, evidence, commercialRelation e TopicGraph"
