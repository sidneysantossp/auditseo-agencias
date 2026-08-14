# AUDITSEO — R11 Citations & Attribution Source Foundation

**Status:** **ESTABLISHED**  
**Data:** 14 de agosto de 2026  
**Cluster:** AI Search (`AI_SEARCH`)  
**Artigo Associado:** Supporting #009 — *Citações e atribuição em respostas de IA: o que conseguimos observar* (`AUDITSEO-ARTICLE-AISEARCH-009`)  

---

## 1. Objetivo e Escopo
Esta fundação estabelece as bases conceituais, documentações oficiais e observações metodológicas para o artigo **#009**. O objetivo é separar rigorosamente **Source**, **Citation**, **Mention** e **Attribution**, desmistificando a correlação automática entre aparições na interface e autoridade interna ou backlinks tradicionais.

---

## 2. Source Classes & Inventory

| ID | Fonte / Autoridade | URL / Referência | Source Class | Evidência Class |
| :-- | :-- | :-- | :-- | :-- |
| **[1]** | Google Search Central | [AI features and your website](https://developers.google.com/search/docs/appearance/ai-features) | OFFICIAL PLATFORM DOCUMENTATION | DOCUMENTADO — GOOGLE |
| **[2]** | Google Search Central | [Controlling your content in AI features](https://developers.google.com/search/docs/appearance/ai-features) | OFFICIAL PLATFORM DOCUMENTATION | DOCUMENTADO — GOOGLE |
| **[3]** | OpenAI Help Center / Documentation | [OpenAI Search and Browsing source presentation](https://help.openai.com/) | OFFICIAL PLATFORM DOCUMENTATION | DOCUMENTADO — OPENAI |
| **[4]** | AUDITSEO Search Intelligence Lab | [Observações sobre reconhecimento de entidade e atributos](/estudos-busca-ia) | AUDITSEO OBSERVATION | OBSERVADO |

---

## 3. Claim Matrix

| Claim | Claim Type | Source | Evidence Class | System | Current? | Limitation | Can Publish? |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| Citações e links visíveis em superfícies de IA indicam que a plataforma apresenta referências de apoio ao usuário | OFFICIAL PLATFORM DOC | [1] [2] Google / OpenAI Docs | DOCUMENTADO | Superfícies documentadas | Sim | Não revelam a totalidade da recuperação interna nem os pesos de seleção | Sim |
| Citation em resposta generativa não equivale a backlink tradicional de SEO | GENERAL TECHNICAL CLAIM | Análise editorial AUDITSEO | INFERIDO / RECOMENDADO | Geral | Sim | Diferem em persistência, mecanismo e contexto de exibição | Sim |
| Uma entidade pode ser mencionada em uma resposta sem que seu domínio oficial apareça como fonte visível | AUDITSEO OBSERVATION | Observation #001 / Lab | OBSERVADO | Ecossistema observado | Sim | Não isola a causa exata no pipeline de geração | Sim |

---

## 4. Unknown Claims e Fronteiras de Evidência
- Não publicaremos que "citation é o novo backlink", que "ser citado significa que a IA confia na marca", ou que "schema aumenta citation probability" sem documentação oficial específica.
- O conjunto de fontes visíveis na interface não constitui um retrieval trace completo.
- A ordem de exibição das fontes na interface não é prova matemática de importância relativa ou peso interno, a menos que documentado especificamente por uma plataforma.


## 5. Current Platform Documentation — Accessed 2026-08-14

A pesquisa oficial foi ampliada antes da publicação para incluir documentação atual de Google, OpenAI e Perplexity. As fontes abaixo sustentam apenas claims sobre as respectivas superfícies; não são tratadas como comportamento universal de AI Search.

| ID | Source | Source Type | System / Platform | Claim Supported | Evidence Class | Limitation |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| **[5]** | [AI features and your website](https://developers.google.com/search/docs/appearance/ai-features) | OFFICIAL PLATFORM DOCUMENTATION | Google AI Overviews / AI Mode | Google descreve links de apoio, query fan-out e variação de respostas e links entre AI Overviews e AI Mode | DOCUMENTADO — GOOGLE | Não revela scores, todos os candidatos recuperados ou causalidade individual de uma citation |
| **[6]** | [ChatGPT Search](https://help.openai.com/articles/9237897-chatgpt-search) | OFFICIAL PLATFORM DOCUMENTATION | ChatGPT Search | OpenAI documenta que respostas podem incluir inline citations, Sources e links para fontes; também documenta reescrita de queries em alguns contextos | DOCUMENTADO — OPENAI | O texto não expõe o conjunto completo de documentos nem o peso de uma fonte |
| **[7]** | [Getting started with Perplexity](https://www.perplexity.ai/hub/blog/getting-started-with-perplexity) | OFFICIAL PRODUCT DOCUMENTATION | Perplexity | Perplexity descreve respostas com fontes e citations clicáveis e acesso a fontes para verificação | DOCUMENTADO — PERPLEXITY | Descrição de produto não prova ranking interno, autoridade ou causalidade de seleção |

### Claim Matrix Complementar

| Claim | System | Type | Source | Evidence Class | Limitation | Can Publish? |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| Google AI Overviews e AI Mode exibem links de apoio e podem usar query fan-out | Google | SYSTEM-SPECIFIC CLAIM | [5] | DOCUMENTADO | Específico às superfícies Google documentadas; não transferir para outras plataformas | Sim, com rótulo Google |
| ChatGPT Search pode exibir inline citations e painel Sources | ChatGPT | SYSTEM-SPECIFIC CLAIM | [6] | DOCUMENTADO | A presença de citation não revela todos os documentos ou o motivo da seleção | Sim, com rótulo OpenAI |
| Perplexity descreve suas respostas como acompanhadas de fontes e citations clicáveis | Perplexity | SYSTEM-SPECIFIC CLAIM | [7] | DOCUMENTADO | Declaração de produto não estabelece qualidade universal nem autoridade de fonte | Sim, com rótulo Perplexity |
| Source order, citation count ou source presence revelam autoridade, ranking ou endorsement | Geral | UNKNOWN CLAIM | Nenhuma fonte primária sustenta | UNKNOWN | A interface não entrega esses pesos ou significados universais | Não |
| Citation transfere PageRank, link equity ou benefício de ranking | Geral | UNKNOWN CLAIM | Nenhuma fonte primária sustenta | UNKNOWN | Citation dinâmica e backlink persistente são objetos diferentes | Não |

## 6. References

[1]: https://developers.google.com/search/docs/appearance/ai-features "Google Search Central — AI features and your website"

[2]: https://developers.google.com/search/docs/appearance/ai-features "Google Search Central — Controlling content in AI features"

[3]: https://help.openai.com/articles/9237897-chatgpt-search "OpenAI Help Center — ChatGPT Search"

[4]: https://www.perplexity.ai/hub/blog/getting-started-with-perplexity "Perplexity — Getting started with Perplexity"

[5]: https://developers.google.com/search/docs/appearance/ai-features "Google Search Central — AI features and your website"

[6]: https://help.openai.com/articles/9237897-chatgpt-search "OpenAI Help Center — ChatGPT Search"

[7]: https://www.perplexity.ai/hub/blog/getting-started-with-perplexity "Perplexity — Getting started with Perplexity"
