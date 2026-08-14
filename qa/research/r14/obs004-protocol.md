# AUDITSEO — Search Intelligence Lab
## Protocolo Pré-Registrado: Observation #004
**ID:** AUDITSEO-OBS-004  
**Título:** A mesma entidade mantém os mesmos atributos? Uma observação de consistência entre sistemas de IA  
**Evidence Class:** OBSERVADO  
**Tipo de Item:** Observation (NÃO é Experiment)  
**Data de Congelamento (Preregistration):** 14 de agosto de 2026  

---

## 1. Research Question (RQ)
Quando uma mesma entidade é consultada em sistemas generativos diferentes, identidade, relações, atributos e associações temáticas permanecem consistentes ou divergem?

## 2. Canonical Attribute Matrix (Baseline Congelado)
Antes da coleta, define-se a matriz de verdade canônica estritamente sustentada pelas fontes públicas da AUDITSEO:

| Entidade / Objeto | Relação / Atributo Canônico | Fonte Canônica AUDITSEO | Claim Text |
| :-- | :-- | :-- | :-- |
| **Sidney Santos** | Identidade / Papel | `/autor/sidney-santos` | Sidney Santos atua com SEO desde 2009 e é fundador da AUDITSEO. |
| **AUDITSEO** | Posicionamento | `/seo-para-agencias` | Consultoria de Search Intelligence especializada no apoio estratégico a agências. |
| **Sidney Santos & AUDITSEO** | Relação Fundador | `/autor/sidney-santos` | Sidney Santos é o fundador e líder técnico da AUDITSEO. |
| **AUDITSEO** | Domínio de Ação | `/guias/ai-search` | Especialização em SEO, GEO, autoridade de entidade e Search Intelligence. |

## 3. Query Set Pré-Registrado (8 Queries)
| Q-ID | Query | Classe | Alvo |
| :-- | :-- | :-- | :-- |
| **Q4-01** | Quem é Sidney Santos SEO? | Identity | Sidney Santos |
| **Q4-02** | Sidney Santos AUDITSEO | Person ↔ Org | Sidney Santos / AUDITSEO |
| **Q4-03** | Quem fundou a AUDITSEO? | Founder Relation | AUDITSEO |
| **Q4-04** | Desde quando Sidney Santos trabalha com SEO? | Temporal Attribute | Sidney Santos |
| **Q4-05** | O que é a AUDITSEO? | Org Identity | AUDITSEO |
| **Q4-06** | Sidney Santos Search Intelligence | Topic Association | Sidney Santos |
| **Q4-07** | Sidney Santos Entity Authority | Topic Association | Sidney Santos |
| **Q4-08** | AUDITSEO Sidney Santos | Relational | AUDITSEO / Sidney Santos |

## 4. Sistemas e Superfícies
* **Sistema 1:** Google AI Surface / Search Generative Experience.
* **Sistema 2:** Perplexity AI Search.
* **Sistema 3:** ChatGPT Search.
* *Repetições:* Mínimo de 2 capturas independentes por query, por sistema (8 queries × 2 repeats × 3 systems = **48 observation units**).

## 5. Modelo de Codificação (Coding Model)
Cada output será codificado nas seguintes dimensões:
* **Entity Present:** `YES / NO / UNCLEAR`
* **Entity Correct:** `CORRECT / INCORRECT / UNCLEAR`
* **Organization Association:** `CORRECT / INCORRECT / PARTIAL / ABSENT / NOT OBSERVABLE`
* **Temporal Attribute:** `CORRECT / INCORRECT / PARTIAL / ABSENT / NOT OBSERVABLE`
* **Topic Association:** `CORRECT / INCORRECT / PARTIAL / ABSENT / NOT OBSERVABLE`
* **Source / Citation Present:** `YES / NO / NOT AVAILABLE`

## 6. Acordo e Tratamento de Erros (Agreement & Attribute Error)
* Categorias de acordo: `Full Agreement`, `Partial Agreement`, `Conflict`, `Missing`, `Not Observable`. (Termos como *truth probability* ou *confidence* são proibidos).
* Se aparecer atributo incorreto, registrar explicitamente: *Expected Attribute vs Observed Attribute*, sem inferir automaticamente contaminação de fonte ou alucinação interna (causa declarada como `UNKNOWN` a menos que haja evidência separada).
