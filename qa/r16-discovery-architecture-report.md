# AUDITSEO — Search Intelligence Lab & Editorial Ecosystem
## Phase R16-A: Discovery & Architecture (Diagnostic Bridge & Commercial Architecture — Revised)

**STATUS:** **READY FOR GPT AUDITSEO REVIEW & CLOSEOUT**  
**DATA:** 14 de agosto de 2026  
**ESCOPO:** Investigação técnica exaustiva, inventário auditável de CTAs e claims, desenho arquitetural, análise de impacto e testes da ponte comercial e diagnóstica (`/diagnostico`).

---

## 1. Objective
Determinar como a autoridade editorial, o Search Intelligence Lab e a rota `/diagnostico` devem se conectar sem converter conteúdo de pesquisa em promessa comercial, sem criar claims não sustentados e sem introduzir scoring arbitrário, mantendo estrita conformidade com a governança de evidências.

---

## 2. Current Source Truth (Evidência Reprodutível de Código)
* **Framework:** React + Vite + TypeScript SPA com Tailwind CSS.
* **Componentes Principais de Diagnóstico:**
  * `src/components/DiagnosticoPage.tsx` (Linhas 1 a 869): Gerencia o fluxo iterativo de cenários, objetivos, gargalos e pressão do cliente para agências.
  * `src/components/DiagnosticSection.tsx` (Linhas 1 a 120): Seção de entrada na página inicial que encaminha para `/diagnostico`.
* **Registries e Rotas:**
  * `src/editorial/researchRegistry.ts`: Contém as observações do Search Intelligence Lab (OBS #001 a #004).
  * `src/App.tsx` (Linhas 79-84): Roteamento da rota `/diagnostico` com metadados SEO dedicados.
* **Deployment Status:** Sincronizado com o repositório canônico `sidneysantossp/auditseo-agencias` (Commit de produção ativo: `61bb350`).

---

## 3. Current User Journey
1. **Descoberta de Autoridade:** O usuário chega por busca orgânica ou referência nas páginas de pilares (`/guias/ai-search`) e no Search Intelligence Lab (`/estudos-busca-ia`).
2. **Consumo de Evidência:** Leitura de artigos e observações com rotulagem rigorosa (`OBSERVADO`, `DOCUMENTADO`).
3. **Ponte de Diagnóstico:** O usuário clica em CTAs institucionais que apontam para `/diagnostico`, onde interage com um formulário paramétrico baseado em cenários reais de agências.

---

## 4. Diagnostic Route Findings (OBSERVADO)
* **Componente `DiagnosticoPage.tsx`:** O arquivo define cenários (`scenarios`, linhas 40-129) cobrindo situações como projetos novos (`foundation`), perda de visibilidade (`recovery`), e exigência de IA/GEO (`geo`).
* **Ausência de Crawler Automático:** O diagnóstico não realiza varreduras automatizadas ou crawls de URL em tempo real; ele opera estritamente como um assistente de qualificação estruturada de cenários para agências.

---

## 5. CTA & Claim Inventory (Auditável)

| Localização (Arquivo / Componente) | Tipo | Texto / Referência | Alvo / Destino |
| :--- | :--- | :--- | :--- |
| `src/components/DiagnosticSection.tsx` | CTA | "Diagnóstico de Autoridade" | `/diagnostico` |
| `src/components/BlogPage.tsx` (Linha 167) | CTA | "Transformar cobrança em diagnóstico" | `/diagnostico` |
| `src/components/Hero.tsx` | CTA | "Diagnóstico Gratuito / Agendar Reunião" | `/diagnostico` ou Contato |
| `src/editorial/articles/...` | Claim | Suporte estratégico white-label para agências | Institucional |

---

## 6. Evidence-to-Commercial Gap Analysis
* **Gap Identificado (`INFERIDO`):** O formulário atual coleta inputs mas encerra em um resumo estático sem vincular as dores declaradas da agência às evidências empíricas ou guias metodológicos do Lab.
* **Solução Arquitetural:** Preservar a cadeia epistemológica:
  $$\text{Evidence} \rightarrow \text{Finding} \rightarrow \text{Interpretation} \rightarrow \text{Recommendation} \rightarrow \text{Commercial Next Step}$$

---

## 7. Proposed Diagnostic Architecture
* **Modelo:** *Qualification Bridge* combinada com *Evidence-backed Assessment*.
* **Diretriz:** O diagnóstico qualifica o cenário da agência e apresenta constatações metodológicas com links diretos para a documentação ou observações de origem (`[OBSERVADO]`, `[DOCUMENTADO]`), sem utilizar scores compostos arbitrários.

---

## 8. Data / Input Model
* **Inputs Permitidos:** Seleção de cenário de projeto, objetivos estratégicos e gargalos declarados via formulário estruturado.
* **Restrição:** Proibição absoluta de criação de pontuações sintéticas ("SEO Score" ou "AI Visibility Index").

---

## 9. Output & Provenance Model
* **Outputs:** Relatório estruturado de cenários com recomendações metodológicas fundamentadas no Método S.I.G.N.A.L. e nas observações do Lab.
* **Proveniência:** Cada recomendação aponta explicitamente para o artefato conceitual ou empírico correspondente.

---

## 10. Commercial Architecture
* Atua como uma ponte de qualificação avançada, elevando a maturidade da conversa comercial entre a agência parceira e a AUDITSEO.

---

## 11. Risks & Mitigations
* **UX Misleading Risk (`INFERIDO`):** O usuário presumir que o diagnóstico é um scanner automatizado de site. **Mitigação:** Clareza textual explícita de que se trata de uma avaliação estruturada de cenários e governança.

---

## 12. Files That Would Need Modification (Para R16-B)
* `src/components/DiagnosticoPage.tsx`: Inclusão de blocos de proveniência de evidência e refinamento do resumo final.
* `src/components/DiagnosticSection.tsx`: Ajuste de cópia para refletir a nova ponte de evidências.

---

## 13. Tests That Would Be Required
* Testes de renderização de rota (`/diagnostico`) para garantir HTTP 200 e ausência de quebras de layout.
* Validação de interatividade do formulário de cenários (seleção de cenários, objetivos e gargalos).
* Verificação de conformidade dos links de proveniência para o Lab e Guia de AI Search.

---

## 14. Deployment Impact
* **Impacto:** Baixo risco. Nenhuma alteração estrutural de backend ou banco de dados; apenas refinamento de componentes client-side na SPA React.
* **Compatibilidade:** Totalmente compatível com o ecossistema Vercel atual (`auditseo.com.br`).

---

## 15. Gate Recommendation
**GATE STATUS:** `READY FOR APPROVAL`  
Recomenda-se ao GPT AUDITSEO a aprovação do closeout da Fase R16-A e a liberação formal da **Fase R16-B (Implementação)** com base no escopo técnico detalhado acima.
