# AUDITSEO — Search Intelligence Lab
## Protocolo Pré-Registrado: Observation #003
**ID:** AUDITSEO-OBS-003  
**Título:** As mesmas perguntas exibem as mesmas fontes? Uma observação sobre estabilidade de sources em AI Search  
**Evidence Class:** OBSERVADO  
**Tipo de Item:** Observation (NÃO é Experiment)  
**Data de Congelamento (Preregistration):** 14 de agosto de 2026  

---

## 1. Research Question (RQ)
Quando uma mesma necessidade informacional é consultada repetidamente sob condições documentadas, quão estável é o conjunto de sources e citations visíveis em superfícies de AI Search?

## 2. Escopo e O que Pode ser Estabelecido
* **Pode observar:** Source recurrence, domain recurrence, citation recurrence, source-set overlap, source count variation, entity mention variation, answer variation.
* **Não pode estabelecer:** Ranking factor, authority, source weight, retrieval weight, reason for citation, full retrieval trace, causal effect.

## 3. Query Set Pré-Registrado (8 Queries)
| Q-ID | Query | Class | Intent | Entity / Topic Target | Rationale |
| :-- | :-- | :-- | :-- | :-- | :-- |
| **Q3-01** | Sidney Santos SEO | Brand / Entity | Informational / Navigational | Sidney Santos | Verificar estabilidade de fontes para entidade de marca pessoal |
| **Q3-02** | AUDITSEO agência de SEO | Brand / Entity | Commercial | AUDITSEO | Avaliar recorrência de fontes proprietárias em busca de marca corporativa |
| **Q3-03** | O que é Search Intelligence em marketing digital | Informational | Educational | Search Intelligence | Medir sobreposição de fontes em termo conceitual da AUDITSEO |
| **Q3-04** | Como otimizar para AI Overviews | Informational | Procedural | AI Overviews / GEO | Analisar variabilidade de fontes em consulta educacional de alta densidade técnica |
| **Q3-05** | SEO tradicional vs GEO otimização para motores de busca | Comparative | Analytical | SEO vs GEO | Observar estabilidade de domínios em consultas comparativas de tendências |
| **Q3-06** | Ferramentas de auditoria de SEO técnico | Comparative | Evaluative | Technical SEO Audit | Medir variação de fontes em termos comerciais com múltiplos players |
| **Q3-07** | Consultoria de SEO para grandes empresas | Commercial / Rec. | Transactional | Enterprise SEO Consulting | Registrar recorrência de fontes em intenção comercial com forte intent transacional |
| **Q3-08** | Como medir visibilidade em busca generativa | Commercial / Rec. | Methodological | AI Search Visibility | Avaliar persistência de fontes em consulta metodológica especializada |

## 4. Sistemas e Superfícies
* **Sistema 1:** Google AI Search / AI Overviews (surface pública documentada).
* **Sistema 2:** Perplexity Search (surface pública documentada).
* *Análise:* Os resultados serão rigorosamente tabulados **por sistema**, sem agregação universal.

## 5. Repetições e Janela Temporal
* **Repetições:** 3 capturas independentes por query, por sistema, realizadas sob janelas controladas no mesmo dia (14 de agosto de 2026).
* **Total de Unidades de Observação:** 8 queries × 3 repeats × 2 systems = **48 observation units**.
* **Horizonte Temporal:** Short-horizon repeatability / variability. Long-term stability: *Not tested / Not observed*.

## 6. Contexto Controlado
* Locale: `pt-BR` | Language: `Portuguese` | Device: Desktop Chrome viewport `1440×900` | Logged-in State: Standard neutral research profile | Session: Clean session state.

## 7. Regras de Missingness
Distinção obrigatória entre:
1. `NO GENERATIVE ANSWER` (Ausência de bloco generativo).
2. `NO SOURCES DISPLAYED` (Bloco gerado sem citação de fontes).
3. `NO CITATIONS DISPLAYED` (Fontes presentes, mas sem links inline).
4. `SYSTEM UNAVAILABLE` (Indisponibilidade temporária de rede/surface).
5. `QUERY BLOCKED` (Bloqueio de segurança/rate limit).
6. `CAPTURE FAILED` (Falha de automação).
7. `UNKNOWN` (Estado inconclusivo).
*Nota:* Zero $\neq$ Missing.
