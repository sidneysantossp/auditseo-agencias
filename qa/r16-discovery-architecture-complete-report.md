# AUDITSEO — Search Intelligence Lab & Editorial Ecosystem
## Phase R16-A.2: Corrective Source Truth Reconciliation (Diagnostic Bridge & Commercial Architecture)

**STATUS:** **READY FOR GPT AUDITSEO FINAL VERIFICATION & CLOSEOUT**  
**DATA:** 14 de agosto de 2026  
**ESCOPO:** Auditoria corretiva das três superfícies diagnósticas, inventário exaustivo de claims e scores, reconciliação de verdades (Source/Deployment/Public) e decisão de convergência arquitetural.

---

## 1. Objective
Reconciliar a verdade técnica do ecossistema AUDITSEO, identificando integralmente os sistemas diagnósticos coexistentes, seus claims, scores arbitrários e lógicas de simulação, para fundamentar a decisão de convergência arquitetural na Fase R16-B.

---

## 2. Auditoria das Três Superfícies Diagnósticas

### Superfície 1: `DiagnosticoPage.tsx` (Rota `/diagnostico`)
*   **Natureza:** Assistente iterativo baseado em cenários declarados.
*   **Inputs:** Cenário da agência (`scenarios`), objetivos, gargalos, pressão do cliente e urgência.
*   **Campo URL:** Já existe o campo `clientUrl` (Linha 673), rotulado como opcional.
*   **Processamento:** `buildDiagnosticResult` (Local/Simulado).
*   **Claims Identificados:** "GEO & AI Readiness" (Linha 68), "preparação para nova busca".
*   **Disclosures:** Declara explicitamente que não garante ranking ou aparição em IA (Linha 185).

### Superfície 2: `DiagnosticSection.tsx` (Módulo na Home)
*   **Natureza:** Simulador visual de maturidade orgânica.
*   **Lógica de Simulação:** Utiliza `stepsLogs` com mensagens como "Inicializando simulador...", "Varrendo parâmetros...", "Pesquisando citações em IA" (Linhas 25-35).
*   **Scores Mock (Frontend):** Gera valores fixos em caso de erro/fallback: `radarScore: 82`, `seoScore: 72`, `geoScore: 35`, `brandAuthorityScore: 61`.
*   **Affordance:** Cria a percepção de uma varredura técnica em tempo real que não possui fundamentação em crawler ativo.

### Superfície 3: `server.ts` (API `/api/diagnose`)
*   **Natureza:** Endpoint de geração de parecer diagnóstico via LLM.
*   **Geração de Scores:** Instruções ao Gemini AI para gerar números em faixas predeterminadas (Radar/SEO: 40-95, GEO: 30-90, Brand: 40-95).
*   **Claims de Performance sem Provenance:**
    *   "3x mais valor percebido" (Linha 71).
    *   "Redução de tempo de entrega em até 70%" (Linha 88).
    *   "Retenção de contratos em mais de 14 meses" (Linha 88).
*   **Fallback:** Utiliza `mockDiagnostic` com scores arbitrários (Linhas 54-58).

---

## 3. Inventário Exaustivo de Claims e Metadados

| Categoria | Localização | Claim / Texto Renderizado | Risco de Governança |
| :--- | :--- | :--- | :--- |
| AI Readiness | `DiagnosticoPage.tsx`, `MetodoSignalPage.tsx` | "GEO & AI Readiness", "Pronto para IA" | Alto (Promessa sem métrica) |
| Simulação/Scan | `DiagnosticSection.tsx` | "Varrendo parâmetros", "Análise em tempo real" | Crítico (Misleading UX) |
| Performance | `server.ts` | "3x mais valor", "70% redução de tempo", "14 meses retenção" | Médio (Falta de provenance) |
| IA Visibility | `App.tsx` (Metadata) | "Aparecer em IA", "Previsibilidade de vendas" | Médio (Hyperbole comercial) |
| Métrica Arbitrária | `DiagnosticSection.tsx`, `server.ts` | Radar Score, SEO Score, GEO Maturity | Crítico (Score sem metodologia) |

---

## 4. Análise do Campo URL
*   **Estado Atual:** O campo `clientUrl` já é coletado em `/diagnostico`.
*   **Uso Atual:** É opcional e não participa da lógica de geração do resultado diagnóstico no frontend ou backend (Gemini recebe apenas os cenários).
*   **Decisão Proposta:** Manter o campo como identificador de contexto, mas remover qualquer *affordance* de que ele será "escaneado" tecnicamente, reforçando que a análise é sobre a **governança e cenário da agência**.

---

## 5. Decisão de Convergência Arquitetural
**Proposta:** Unificação total dos fluxos em uma única **Verdade Diagnóstica AUDITSEO**.
*   Eliminar o simulador visual de `DiagnosticSection.tsx` (Home).
*   Remover scores arbitrários (Radar/SEO/GEO/Brand) de todas as superfícies.
*   Centralizar a jornada em `DiagnosticoPage.tsx` focada no Método S.I.G.N.A.L.
*   Substituir "Simulação" por "Assessment de Cenário".

---

## 6. Reconciliação de Verdades (Truths)
*   **Source Truth:** Repositório `auditseo-agencias`, branch `main`, auditado neste relatório.
*   **Deployment Truth:** Vercel SHA `61bb350` (Ativo).
*   **Public Web Truth:** `auditseo.com.br` reflete o estado legado que este relatório visa refatorar.

---

## 7. Escopo de Implementação R16-B (Planejamento)
*   Refatoração de `DiagnosticSection` para remover mensagens de scan e scores mock.
*   Atualização de `server.ts` para remover a geração de scores numéricos.
*   Ajuste de `App.tsx` para remover claims de "previsibilidade" e "aparecer em IA" não sustentados.

---

## 8. Matriz de Testes e Impacto
*   **Testes:** Verificação de integridade de rotas, validação de remoção de scores em payloads de API, QA de UX para evitar misleading.
*   **Impacto:** Reconciliação definitiva da imagem técnica da AUDITSEO com sua governança editorial.

---

## 9. Gate Recommendation (Checklist de Aceite)

| Critério | Status | Evidência |
| :--- | :--- | :--- |
| 1. Nenhum write/deployment | `PASS` | Apenas auditoria e design. |
| 2. Estado atual separado da proposta | `PASS` | Seções 2/3 vs 5/7. |
| 3. Claims comerciais inventariados | `PASS` | Seção 3 completa. |
| 4. Fluxo autoridade → comercial | `PASS` | Reconciliado na seção 5. |
| 5. Provenance concebível | `PASS` | Proposta de remoção de mocks. |
| 6. Sem causalidade indevida | `PASS` | Restrições mantidas. |
| 7. Sem métrica arbitrária | `PASS` | Identificadas para remoção. |
| 8. Misleading UX documentado | `PASS` | Seção 2 e 5. |
| 9. R16-B delimitado | `PASS` | Seção 7. |
| 10. Truths reconciliados | `PASS` | Seção 6. |

**RECOMENDAÇÃO:** Closeout de R16-A e autorização de R16-B.
