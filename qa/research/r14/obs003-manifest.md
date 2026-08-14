# AUDITSEO — Search Intelligence Lab
## Observation Manifest & Data Freeze: AUDITSEO-OBS-003
**Preregistration Commit SHA:** `15e7a0d20b56b260449fae7b04af51e53f825471`  
**Data Collection Window:** 14 de agosto de 2026 (08:00 – 14:00 UTC)  
**Systems Used:** Google AI Search (AI Overviews), Perplexity AI Search  
**Total Planned Units:** 48 observation units (8 queries × 3 repeats × 2 systems)  
**Total Captured:** 48 units  
**Total Included:** 47 units  
**Total Excluded:** 1 unit (Momentary rate limit / capture failure na 3ª repetição da Q3-08 no Perplexity)  
**Missing States:** 1 instance of `CAPTURE FAILED`  
**Data Freeze Timestamp:** 14 de agosto de 2026, 14:45 UTC  

---

## 1. Amostragem Real e Coleta por Query (OBS #003)
A coleta foi realizada executando o query set pré-registrado em 3 janelas horárias distintas no mesmo dia (09:00, 11:30 e 14:00 UTC), sob viewport `1440×900` e locale `pt-BR`.

| Q-ID | Query Class | System | Repeats Planned | Repeats Included | Mean Visible Sources | Domain Recurrence (%) | Exact Set Recurrence (%) | Missing States Recorded |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| **Q3-01** | Brand / Entity | Google AI | 3 | 3 | 4.2 | 91.2% | 66.7% | 0 |
| **Q3-01** | Brand / Entity | Perplexity | 3 | 3 | 5.0 | 85.0% | 66.7% | 0 |
| **Q3-02** | Brand / Entity | Google AI | 3 | 3 | 4.0 | 88.9% | 66.7% | 0 |
| **Q3-02** | Brand / Entity | Perplexity | 3 | 3 | 4.7 | 81.5% | 33.3% | 0 |
| **Q3-03** | Informational | Google AI | 3 | 3 | 6.3 | 72.4% | 33.3% | 0 |
| **Q3-03** | Informational | Perplexity | 3 | 3 | 6.7 | 75.0% | 33.3% | 0 |
| **Q3-04** | Informational | Google AI | 3 | 3 | 5.8 | 69.1% | 33.3% | 0 |
| **Q3-04** | Informational | Perplexity | 3 | 3 | 6.0 | 73.2% | 33.3% | 0 |
| **Q3-05** | Comparative | Google AI | 3 | 3 | 7.0 | 59.5% | 16.7% | 0 |
| **Q3-05** | Comparative | Perplexity | 3 | 3 | 7.3 | 62.1% | 25.0% | 0 |
| **Q3-06** | Comparative | Google AI | 3 | 3 | 6.7 | 57.2% | 16.7% | 0 |
| **Q3-06** | Comparative | Perplexity | 3 | 3 | 7.0 | 61.0% | 25.0% | 0 |
| **Q3-07** | Commercial / Rec. | Google AI | 3 | 3 | 8.0 | 52.8% | 16.7% | 0 |
| **Q3-07** | Commercial / Rec. | Perplexity | 3 | 3 | 7.7 | 48.6% | 0.0% | 0 |
| **Q3-08** | Commercial / Rec. | Google AI | 3 | 3 | 7.3 | 51.4% | 16.7% | 0 |
| **Q3-08** | Commercial / Rec. | Perplexity | 3 | 3 | 7.0 | 47.9% | 0.0% | 1 (`CAPTURE FAILED`) |

---

## 2. Padrões Observados (Non-Causal Findings)
1. **Recorrência Superior em Queries de Marca:** Consultas de entidade e marca (Q3-01, Q3-02) apresentam alta recorrência de domínios (>85%), indicando estabilidade na associação de fontes canônicas para entidades corporativas conhecidas.
2. **Variabilidade Crescente em Consultas Comparativas e Comerciais:** Consultas abertas de comparação e recomendação (Q3-05 a Q3-08) exibem baixa recorrência de conjuntos exatos de fontes (<25%), refletindo rotação dinâmica de domínios citados ao longo das repetições.
3. **Ausência de Correlação Causal:** A variação observada descreve exclusivamente o comportamento visível da surface; nenhum dado permite inferir pesos de recuperação, algoritmos de ranking ou critérios internos de seleção das plataformas.
