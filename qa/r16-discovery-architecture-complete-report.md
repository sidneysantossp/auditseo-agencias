# AUDITSEO — Search Intelligence Lab & Editorial Ecosystem
## Phase R16-A.2: Complete Discovery & Architecture Report (Diagnostic Bridge & Commercial Architecture)

**STATUS:** **READY FOR GPT AUDITSEO FINAL VERIFICATION & CLOSEOUT**  
**DATA:** 14 de agosto de 2026  
**ESCOPO:** Investigação exaustiva, inventário granular de CTAs e claims, modelo de provenance por output, reconciliação de Source/Deployment/Public Truth, escopo de R16-B e checklist dos 10 critérios de aceite.

---

## 1. Objective
Determinar como a autoridade editorial, o Search Intelligence Lab e a rota `/diagnostico` devem se conectar sem converter conteúdo de pesquisa em promessa comercial, sem criar claims não sustentados e sem introduzir scoring arbitrário, mantendo separadas observação, interpretação, diagnóstico e recomendação através da sequência epistemológica:
$$\text{Evidence} \rightarrow \text{Finding} \rightarrow \text{Interpretation} \rightarrow \text{Recommendation} \rightarrow \text{Commercial Next Step}$$

---

## 2. Current Source Truth (Evidência Reprodutível de Código)
* **Framework:** React + Vite + TypeScript SPA (`web-static`).
* **Componentes Principais de Diagnóstico:**
  * `src/components/DiagnosticoPage.tsx` (Linhas 1–869): Componente principal da rota `/diagnostico`. Implementa o assistente iterativo de cenários para agências (`StepKey`, `Answers`, vetores `scenarios`, `objectives`, `bottlenecks`).
  * `src/components/DiagnosticSection.tsx`: Seção integrada na página inicial (`Home.tsx`) que atua como ponto de entrada visual institucional e conversão para o fluxo de diagnóstico.
* **Registry e Roteamento:**
  * `src/App.tsx` (Linhas 79–84): Define a rota `/diagnostico` com metadados SEO dedicados.
  * `src/editorial/researchRegistry.ts`: Registry central contendo as observações do Search Intelligence Lab (OBS #001 a #004).

---

## 3. Current User Journey
1. **Descoberta de Autoridade:** Chegada via tráfego orgânico ou pilares/artigos (`/guias/ai-search`, `/estudos-busca-ia`).
2. **Consumo de Evidências:** Leitura dos artigos e observações com rotulagem rigorosa (`[OBSERVADO]`, `[DOCUMENTADO]`).
3. **Ponte de Diagnóstico:** Acionamento de CTAs institucionais que direcionam para `/diagnostico`.
4. **Qualificação Comercial:** Resposta ao questionário interativo de cenários, resultando em um assessment preliminar de qualificação para consultoria white-label.

---

## 4. Diagnostic Route Findings (OBSERVADO)
* **Assistente de Cenários (`DiagnosticoPage.tsx`):** Opera estritamente com dados declarados pelo usuário (cenários de agência, objetivos, gargalos).
* **Ausência de Crawler / Score Arbitrário:** O sistema não realiza varredura técnica de domínios em tempo real e não gera índices sintéticos de "SEO Score" ou "AI Visibility Score".

---

## 5. CTA & Conversion Inventory (Auditável)

| Localização (Arquivo / Componente) | Tipo | Texto Atual | Destino / Rota | Propósito Epistemológico |
| :--- | :--- | :--- | :--- | :--- |
| `src/components/DiagnosticSection.tsx` | CTA Institucional | "Diagnóstico de Autoridade" | `/diagnostico` | Diagnostic entry point |
| `src/components/BlogPage.tsx` (Linha 167) | CTA Editorial | "Transformar cobrança em diagnóstico" | `/diagnostico` | Qualification bridge |
| `src/components/MetodoSignalPage.tsx` | CTA de Parceria | "Avaliar parceria estratégica" | `/diagnostico` | Consulting conversion layer |
| `src/components/WhiteLabelPage.tsx` | CTA de Parceria | "Avaliar parceria white-label" | `/diagnostico` | Qualification bridge |
| `src/components/article/ArticleAuthor.tsx` | CTA de Autoridade | "Avaliar parceria comercial com a AUDITSEO" | `/diagnostico` | Consulting conversion layer |

---

## 6. Claim Inventory (Comercial e Institucional)

| Categoria de Claim | Localização | Termo / Afirmação Renderizada | Classificação Epistemológica | Limite Metodológico |
| :--- | :--- | :--- | :--- | :--- |
| Suporte White-Label | `WhiteLabelPage.tsx`, `ParceriaPage.tsx` | "Suporte estratégico white-label para agências" | `DOCUMENTADO` | Restrito a entregas e diretrizes adaptáveis |
| Metodologia S.I.G.N.A.L. | `SignalMethod.tsx`, `MetodoSignalPage.tsx` | "Organiza diagnóstico, intenção, GEO e autoridade" | `DOCUMENTADO` | Estrutura de decisional framework |
| Diagnóstico Estruturado | `DiagnosticoPage.tsx` | "Identificar cenário antes de propor solução" | `OBSERVADO` | Baseado em cenários declarados, sem crawler |
| Governança de Busca | `researchRegistry.ts`, artigos | "Análise baseada em evidência e observação" | `OBSERVADO` | Situado em dados públicos, sem acesso interno a LLMs |

---

## 7. Evidence-to-Commercial Gap Analysis
* **Gap:** Transição direta de leitura empírica para contato comercial sem gradação analítica.
* **Solução:** Adotar a cadeia epistemológica estrita:
  $$\text{Evidence} \rightarrow \text{Finding} \rightarrow \text{Interpretation} \rightarrow \text{Recommendation} \rightarrow \text{Commercial Next Step}$$

---

## 8. Proposed Diagnostic Architecture
* **Modelo Combinado:** *Diagnostic Entry Point* + *Qualification Bridge* + *Evidence-backed Assessment* + *Consulting conversion layer*.
* **Função:** Qualifica a agência, apresenta findings verificáveis com proveniência e encaminha para consultoria humana sem promessas infundadas.

---

## 9. Data / Input Model
* **Inputs Permitidos:** Cenário do projeto, objetivos estratégicos, gargalos declarados, pressão do cliente e urgência.
* **Proibição:** Sem campo de URL a menos que haja crawler real e documentado; sem input de dados sensíveis de clientes finais.

---

## 10. Output & Provenance Model (Por Unidade de Output)
Cada recomendação gerada ao término do fluxo diagnóstico seguirá estritamente o modelo de proveniência:
1. **Finding:** O que foi identificado (ex: gargalo de autoridade de entidade).
2. **Evidence Class:** `OBSERVADO` / `DOCUMENTADO` / `INFERIDO`.
3. **Evidence Source:** Referência direta ao guia aplicável (`/guias/ai-search`) ou observação do Lab (`OBS #003`).
4. **Interpretation:** Limitações e riscos metodológicos.
5. **Recommendation:** Ação metodológica sugerida.
6. **Commercial Next Step:** Transição para alinhamento com a consultoria white-label da AUDITSEO.

---

## 11. Commercial Architecture
A rota `/diagnostico` atua como ponte de qualificação (Qualification Bridge), elevando a maturidade da agência parceira antes do contato comercial, mantendo total separação entre pesquisa empírica e oferta de serviços.

---

## 12. Risks & Mitigations
* **UX Misleading Risk (`INFERIDO`):** O usuário presumir varredura automatizada. *Mitigação:* Aviso textual explícito de que o diagnóstico avalia cenários declarados e governança.
* **Hyperbole Risk (`DOCUMENTADO`):** Promessas de visibilidade em IA. *Mitigação:* Governança estrita de evidências e proibição de scores arbitrários.

---

## 13. Recommended Implementation Scope for R16-B
* Refinamento textual de `DiagnosticoPage.tsx` e `DiagnosticSection.tsx` para incorporar a cadeia epistemológica.
* Inclusão de rótulos epistemológicos e links de proveniência para o Lab.
* Validação de CTAs sem introduzir crawlers ou scores sintéticos.

---

## 14. Files That Would Need Modification
* `src/components/DiagnosticoPage.tsx`
* `src/components/DiagnosticSection.tsx`

---

## 15. Tests That Would Be Required
* **Routing Test:** Verificação de HTTP 200 em `/diagnostico`.
* **Component Test:** Execução do fluxo iterativo de cenários e inputs.
* **Governance Test:** Ausência de claims de "AI readiness" garantido ou scores arbitrários.
* **Smoke Test:** Validação de zero regressão nas rotas do Lab e Pilares.

---

## 16. Deployment Impact
* **Impacto:** Baixo risco. Restrito a componentes client-side na SPA React. Compatível com o ecossistema Vercel em `auditseo.com.br`.

---

## 17. Reconciliação de Source / Deployment / Public Truth
* **Source Code Truth:** Repositório canônico `sidneysantossp/auditseo-agencias` (Branch `main`).
* **Deployment Truth:** Projeto Vercel `auditseo-site-oficial` sincronizado com o repositório canônico.
* **Public Web Truth:** Domínio `auditseo.com.br` servindo as rotas atualizadas com HTTP 200.

---

## 18. Checklist dos 10 Critérios de Aceite de R16-A

| Critério de Aceite | Status | Evidência / Justificativa |
| :--- | :--- | :--- |
| 1. Nenhum write/deployment ocorreu | `PASS` | Modo estrito de leitura, análise e design mantido. |
| 2. Estado atual separado da proposta futura | `PASS` | Mapeado nas seções 2/4 vs 8/13. |
| 3. Claims comerciais inventariados | `PASS` | Tabela detalhada na seção 6. |
| 4. Fluxo autoridade → diagnóstico → comercial explicitado | `PASS` | Detalhado na seção 3 e 8. |
| 5. Outputs diagnósticos com provenance concebível | `PASS` | Modelo estruturado na seção 10. |
| 6. Observação não convertida em causalidade | `PASS` | Conforme restrições epistemológicas. |
| 7. Nenhuma métrica composta arbitrária introduzida | `PASS` | Proibição explícita de scores e índices. |
| 8. Riscos de misleading UX documentados | `PASS` | Mitigados na seção 12. |
| 9. Escopo de R16-B delimitado para implementação | `PASS` | Definido nas seções 13 e 14. |
| 10. Divergências de Source/Deployment/Public Truth reportadas | `PASS` | Reconciliadas na seção 17. |
