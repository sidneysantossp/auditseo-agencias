# AUDITSEO — R12 AI Search Measurement Source Foundation

**Status:** **ESTABLISHED**  
**Data:** 14 de agosto de 2026  
**Cluster:** AI Search (`AI_SEARCH`)  
**Artigo Associado:** Supporting #010 — *Como medir visibilidade em AI Search* (`AUDITSEO-ARTICLE-AISEARCH-010`)  

---

## 1. Objetivo e Escopo
Esta fundação estabelece a base metodológica para o artigo **#010**, integrando os objetos observáveis de AI Overviews (#007), Information Retrieval & RAG (#008) e Citations & Attribution (#009) em uma abordagem de mensuração estruturada. O objetivo é definir métricas descritivas e qualitativas sem recorrer a scores arbitrários de 0 a 100 ou métricas comerciais de terceiros.

---

## 2. Source Classes & Inventory

| ID | Fonte / Autoridade | URL / Referência | Source Class | Evidência Class |
| :-- | :-- | :-- | :-- | :-- |
| **[1]** | Google Search Central | [Measuring the performance of your site in AI features](https://developers.google.com/search/docs/appearance/ai-features#measuring-the-performance-of-your-site) | OFFICIAL PLATFORM DOCUMENTATION | DOCUMENTADO — GOOGLE |
| **[2]** | Google Search Console | [Performance report in Search Console](https://support.google.com/webmasters/answer/7576553) | OFFICIAL PLATFORM DOCUMENTATION | DOCUMENTADO — GOOGLE |
| **[3]** | AUDITSEO Search Intelligence Lab | [Observações empíricas sobre entidades e acurácia](/estudos-busca-ia) | AUDITSEO OBSERVATION | OBSERVADO |
| **[4]** | AUDITSEO Editorial Frameworks | Artigos #007, #008 e #009 do cluster AI Search | AUDITSEO INFERENCE | RECOMENDADO / INFERIDO |

---

## 3. Claim Matrix

| Claim | Claim Type | Source | Evidence Class | System | Current? | Limitation | Can Publish? |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| Tráfego proveniente de AI Overviews e AI features é reportado no relatório de performance do Search Console sob a busca Web | OFFICIAL PLATFORM DOC | [1] [2] Google Search Central | DOCUMENTADO | Google Search | Sim | Não separa cliques específicos de AI Overview de links orgânicos tradicionais por API padrão | Sim |
| Visibilidade em AI Search não se resume a uma única posição ou score composto | GENERAL EDITORIAL CLAIM | AUDITSEO Framework #010 | INFERIDO / RECOMENDADO | Geral | Sim | Exige metodologia multidimensional de query-set e observação repetida | Sim |
| Métricas de visibilidade em IA devem separar presença, acurácia de atributos e estabilidade temporal | METHODOLOGICAL CLAIM | AUDITSEO Framework #010 | RECOMENDADO | Geral | Sim | Não substitui dados proprietários de conversão ou comportamento de usuário | Sim |

---

## 4. Unknown Claims e Fronteiras de Métricas
- Não publicaremos AI Visibility Score, GEO Score, AI Authority Score, Citation Score ou Share of Model automático.
- Métricas externas de visibilidade em IA baseadas em extrapolações de banco de dados de terceiros não refletem a personalização, o locale, o histórico de sessão ou a volatilidade real de superfícies conversacionais.
- A mensuração AUDITSEO é um protocolo estruturado de observação humana e semi-automatizada, e não um software SaaS de monitoramento em tempo real.


## 5. AUDITSEO Measurement Contract — Exemplos Descritivos

Os exemplos abaixo não são KPIs universais. São contratos metodológicos que só podem ser interpretados dentro do query set, sistema, surface e período declarados.

| Metric Name | Question | Numerator | Denominator | Inclusion / Missing Rule | Limitation |
| :-- | :-- | :-- | :-- | :-- | :-- |
| **Entity Presence Rate** | Com que frequência a entidade aparece? | Observações com entidade correta presente | Observações elegíveis do query set | `UNCLEAR`, sistema indisponível e query bloqueada ficam fora apenas se o contrato declarar exclusão | Não mede acurácia, source, citation ou sentiment |
| **Correct Representation Rate** | Com que frequência entity + atributos requeridos estão corretos? | Observações com entidade correta e atributos definidos corretos | Observações em que a entidade aparece | Atributo não observável não deve ser convertido em erro | Denominador condicional pode subir ou cair conforme a regra |
| **Official Source Presence Rate** | O domínio oficial aparece como source visível? | Observações com official source presente | Observações elegíveis | `NO CITATIONS DISPLAYED` é estado distinto de zero citations | Não é authority score ou endorsement |
| **Citation Presence Rate** | Há citation explícita na surface? | Respostas generativas com citation visível | Respostas generativas elegíveis segundo o contrato | Surface sem citation deve ser `NOT AVAILABLE`, não zero | Não comparar sistemas sem disclaimer de interface |
| **Attribute Error Rate** | Com que frequência um atributo expresso está incorreto? | Observações com erro definido | Observações em que o atributo foi expresso | `NOT OBSERVABLE` fica separado | Depende da seleção de atributos e da capacidade de verificação |
| **Topic Association Coverage** | A entidade aparece associada ao tópico desejado? | Observações do topic cluster com associação correta | Observações elegíveis do topic cluster | Query class e intenção precisam ser preservadas | Query-set dependent; não representa autoridade global |

### Metodologia e Repetibilidade

Measurement exige aplicação consistente de regras sobre observações comparáveis. Para comparação longitudinal, recomenda-se preservar queries estáticas, system, surface, locale e período; queries dinâmicas podem servir à descoberta, mas não devem ser agregadas como se fossem o mesmo universo. Repeated query não deve ser tratada como amostra estatística independente sem um protocolo que sustente essa interpretação.

### Missingness e Data Quality

O protocolo deve distinguir `ZERO`, `NO GENERATIVE ANSWER`, `NO CITATIONS DISPLAYED`, `SYSTEM UNAVAILABLE`, `QUERY BLOCKED`, `NO ENTITY MENTION` e `UNKNOWN`. A trilha de auditoria deve reter timestamp, query, system, surface, raw evidence reference, classificação e notas de revisão. Possíveis problemas incluem duplicidade, query mismatch, locale incorreto, data incorreta, ambiguidade de entidade, perda de screenshot, erro de parsing e mudança de interface.

### Share of Model

`Share of Model` é classificado como **MARKET TERM / METHODOLOGY-DEPENDENT**. Não é um KPI canônico. Uma definição por brand mentions, outra por queries com presença e outra por recommendation presence produzirão denominadores e interpretações distintos. O termo só deve ser publicado com metric name, question, query set, system, surface, period, numerator, denominator, inclusion rule, missing state e limitations.

## 6. References

[1]: https://developers.google.com/search/docs/appearance/ai-features#measuring-the-performance-of-your-site "Google Search Central — Measuring the performance of your site in AI features"

[2]: https://support.google.com/webmasters/answer/7576553 "Google Search Console Help — Performance report"

[3]: /estudos-busca-ia "AUDITSEO — Search Intelligence Lab"

[4]: /guias/citacoes-e-fontes-em-ai-search "AUDITSEO — Citações e atribuição em respostas de IA"

[5]: /guias/recuperacao-de-informacao-ai-search "AUDITSEO — Recuperação de Informação em AI Search"
