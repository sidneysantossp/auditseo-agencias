# AI OVERVIEWS SOURCE FOUNDATION (Fase R9)

Este documento consolida a base de verdade para a redação do Artigo #007, separando fatos documentados, observações empíricas e inferências analíticas, conforme a disciplina de Evidence Governance da AUDITSEO.

---

## 1. Registro de Fontes (Source Registry)

| SOURCE ID | SOURCE | TYPE | URL | PUB/UPDATE DATE | DATE ACCESSED | EVIDENCE CLASS |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **SRC-GSC-001** | Google Search Central: AI Optimization Guide | Official Doc | [Link](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) | 2026-05-15 | 2026-08-13 | **DOCUMENTADO** |
| **SRC-GSC-002** | Google Search Central: AI Features and Your Website | Official Doc | [Link](https://developers.google.com/search/docs/appearance/ai-features) | 2025-12-10 | 2026-08-13 | **DOCUMENTADO** |
| **SRC-GSH-003** | Google Search Help: AI Overviews in Search Results | User Doc | [Link](https://support.google.com/websearch/answer/14901683) | 2026 (Active) | 2026-08-13 | **DOCUMENTADO** |
| **SRC-CXL-004** | CXL: Where Google AI Overviews pull their answers from | Research Study | [Link](https://cxl.com/blog/google-ai-overview-citation-sources/) | 2026-03-25 | 2026-08-13 | **OBSERVADO** |
| **SRC-SUR-005** | Surfer SEO: AI Citation Report 2025 | Industry Report | [Link](https://surferseo.com/blog/ai-citation-report/) | 2025-10-27 | 2026-08-13 | **OBSERVADO** |
| **SRC-LAB-001** | AUDITSEO Lab: Observation #001 (Context/Entity) | Internal Lab | N/A (Internal) | 2026-08-10 | 2026-08-13 | **TESTADO** |
| **SRC-LAB-002** | AUDITSEO Lab: Observation #002 (Temporal Attributes) | Internal Lab | N/A (Internal) | 2026-08-11 | 2026-08-13 | **TESTADO** |

---

## 2. Matriz de Evidências

### 2.1. Camada DOCUMENTADA (Google Official)
*   **Mecanismo Base**: AI Overviews (AIO) utilizam **RAG (Retrieval-Augmented Generation)** para aterrar (grounding) as respostas no índice do Google Search.
*   **Query Fan-out**: O sistema gera consultas concorrentes relacionadas para buscar informações adicionais e cobrir sub-tópicos.
*   **Sem Índice à Parte**: AIO utilizam o mesmo índice da busca tradicional; não existe um "índice de IA" separado.
*   **Sistemas de Ranking**: A seleção de fontes é baseada nos sistemas de ranking e qualidade centrais do Google.
*   **Controles do Editor**: Editores gerenciam a exibição através de diretivas padrão (`nosnippet`, `data-nosnippet`, `max-snippet`, `noindex`).
*   **Requisitos Técnicos**: A página deve estar indexada e ser elegível para exibir um snippet. Não há markup ou schema específico obrigatório para AIO.

### 2.2. Camada OBSERVADA (Estudos de Terceiros)
*   **Posicionamento no Conteúdo (CXL)**: 55% das citações em AIO provêm dos primeiros 30% da página. Existe um efeito "ski ramp" onde a probabilidade de citação cai drasticamente após o primeiro terço do documento.
*   **Fontes Universais (Surfer)**: YouTube (~23.3%), Wikipedia (~18.4%) e Google.com (~16.4%) são as fontes mais citadas globalmente.
*   **Domínios de Autoridade (Surfer)**: Em tópicos YMYL (Saúde/Finanças), domínios institucionais como NIH, Healthline e Investopedia dominam as citações.
*   **Eficácia de FAQs (CXL)**: Seções de FAQ, mesmo no final da página, são alvos frequentes de citação por serem unidades de resposta autocontidas.

### 2.3. Camada TESTADA / INFERIDA (AUDITSEO Lab)
*   **Sensibilidade Contextual**: A alteração do contexto temático da consulta influencia diretamente a capacidade do sistema de desambiguar corretamente uma entidade (**TESTADO - OBS #001**).
*   **Acurácia de Atributos**: Sistemas de IA podem reconhecer corretamente a entidade e a relação, mas falhar em atributos temporais específicos (ex: ano de fundação) se houver ruído no ecossistema (**TESTADO - OBS #002**).
*   **Estabilidade**: A presença de fontes em AIO apresenta volatilidade temporal, não sendo um estado estático (**INFERIDO**).

---

## 3. Diretrizes de Redação (Evidence Class Application)

1.  **NÃO AFIRMAR** que o uso de Schema garante citação (Contradiz **SRC-GSC-002**).
2.  **RECOMENDAR** o "Answer Early" (Baseado em **SRC-CXL-004**).
3.  **DISTINGUIR** Presença de Representação Correta (Baseado em **SRC-LAB-002**).
4.  **ROTULAR** o modelo SERP + Generative Layer como **MODELO EDITORIAL AUDITSEO**.
