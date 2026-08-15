# AUDITSEO — Search Intelligence Lab & Editorial Ecosystem
## Phase R16-A: Discovery & Architecture (Diagnostic Bridge & Commercial Architecture)

**STATUS:** **PENDING GPT AUDITSEO APPROVAL (READ-ONLY ANALYSIS)**  
**DATA:** 14 de agosto de 2026  
**ESCOPO:** Investigação, desenho arquitetural, inventário de claims e modelagem da ponte comercial e diagnóstica (`/diagnostico`).

---

## 1. Objective
Determinar como a autoridade editorial, o Search Intelligence Lab e a rota `/diagnostico` devem se conectar sem converter conteúdo de pesquisa em promessa comercial, sem criar claims não sustentados e sem introduzir scoring arbitrário.

---

## 2. Current Source Truth
* **Framework:** React + Vite + TypeScript SPA com Tailwind CSS.
* **Componentes de Diagnóstico:** `src/components/DiagnosticoPage.tsx` e `src/components/DiagnosticSection.tsx`.
* **Registry Central:** `src/editorial/researchRegistry.ts` e `src/editorial/articleRegistry.ts`.
* **Deployment:** `auditseo.com.br` integrado ao repositório canônico `sidneysantossp/auditseo-agencias` (Commit de produção atual: `61bb350`).

---

## 3. Current User Journey
1. **Descoberta:** O usuário chega por busca orgânica ou referência de parceiros nas páginas de pilares (`/guias/ai-search`), artigos de suporte ou no Hub do Search Intelligence Lab (`/estudos-busca-ia`).
2. **Autoridade & Evidência:** O usuário lê análises e observações rotuladas com classes rigorosas de evidência (`OBSERVADO`, `DOCUMENTADO`).
3. **Conversão / Diagnóstico:** O usuário é convidado a avançar para a rota `/diagnostico`, onde interage com um formulário iterativo baseado em cenários de agências (Foundation, Activation, Recovery, Authority, Content, GEO, Migration, Evolution).

---

## 4. Diagnostic Route Findings
* **Status Atual (`OBSERVADO`):** A rota `/diagnostico` funciona atualmente como um assistente iterativo de cenários para agências, mapeando dores da carteira para soluções da AUDITSEO.
* **Limitação Técnica (`INFERIDO`):** O formulário coleta inputs do usuário (cenários, gargalos, objetivos) mas atualmente encerra em um resumo estático e um CTA de envio/contato, sem gerar um relatório dinâmico baseado em evidências ou dados públicos conectados.

---

## 5. CTA / Conversion Inventory
* **Página Inicial (`/`):** CTAs para "Agendar uma Reunião", "Método S.I.G.N.A.L" e "Diagnóstico de Autoridade".
* **Search Intelligence Lab (`/estudos-busca-ia`):** CTAs ao final de artigos e observações apontando para reflexão analítica e consultoria white-label.
* **AI Search Pillar (`/guias/ai-search`):** Links cruzados para as Observations #003 e #004 e chamadas para estruturação de autoridade de entidade.

---

## 6. Claim Inventory
* **Claims Atuais:** Propostas focadas em suporte estratégico white-label para agências, método S.I.G.N.A.L e organização de autoridade de entidade.
* **Riscos Identificados (`INFERIDO`):** O uso de termos vagos ou promessas de "crescimento garantido em IA" representaria uma violação da governança de evidências. O ecossistema estipula que claims comerciais devem restringir-se ao que é demonstrável (métodos de estruturação, análise de gaps e governança de busca).

---

## 7. Evidence-to-Commercial Gap Analysis
* **Gap Principal:** A transição entre o rigor empírico do Lab (OBS #003, OBS #004) e a conversão comercial precisa ser mediada por uma camada de interpretação estruturada, evitando que o usuário conclua que a observação de um comportamento de IA significa uma vantagem comercial automática.
* **Alinhamento Metodológico:** A cadeia epistemológica deve ser rigorosamente preservada:
  $$\text{Evidence (Observação)} \rightarrow \text{Finding (Constatação)} \rightarrow \text{Interpretation (Análise de Risco/Oportunidade)} \rightarrow \text{Recommendation (Intervenção Metodológica)}$$

---

## 8. Proposed Diagnostic Architecture
* **Modelo Proposto:** Combinação de *Diagnostic Entry Point* com *Evidence-backed Assessment*.
* **Fluxo:** O diagnóstico interativo guiará a agência através de seleções parametrizadas (sem pontuação arbitrária), entregando um relatório preliminar de gaps baseado em evidências documentadas e direcionando para a consultoria humana de Search Intelligence.

---

## 9. Data / Input Model
* **Inputs Permitidos:** Seleção de cenário de projeto (Foundation, Activation, Recovery, Authority, Content, GEO, Migration, Evolution), objetivos estratégicos e gargalos declarados.
* **Proibição Absoluta:** Sem introdução de scores compostos arbitrários ("SEO Score: 85/100" ou "AI Visibility Index").

---

## 10. Output & Provenance Model
* **Outputs:** Mapeamento do cenário da agência para o entregável correspondente do método S.I.G.N.A.L, com referências cruzadas aos guias e observações do Lab que sustentam a abordagem.
* **Proveniência:** Cada recomendação aponta explicitamente para a documentação ou observação de origem (`[DOCUMENTADO]`, `[OBSERVADO]`).

---

## 11. Commercial Architecture
* **Posicionamento:** A rota `/diagnostico` atua como uma ponte de qualificação e estruturação de demanda para agências, preservando a independência do laboratório de pesquisa e reforçando a autoridade técnica da AUDITSEO.

---

## 12. Risks
* **UX Misleading Risk (`INFERIDO`):** O usuário confundir uma análise de cenários com um crawler automatizado em tempo real de seu domínio.
* **Commercial Hyperbole Risk (`DOCUMENTADO`):** Promessas infundadas de otimização universal para IA. Mitigado pela governança estrita de evidências.

---

## 13. Open Questions (Para o GPT AUDITSEO)
1. Devemos introduzir algum mecanismo de input de URL do cliente no futuro para análise preliminar de headers/estruturados, ou manter o diagnóstico estritamente baseado em cenários de agência?
2. Qual o nível de detalhamento esperado para o relatório preliminar gerado ao final do fluxo `/diagnostico`?

---

## 14. Recommended Implementation Scope for R16-B (Dependent on Approval)
* Refinamento textual da rota `/diagnostico` para garantir separação absoluta entre observação empírica e recomendação comercial.
* Atualização dos CTAs do Lab para direcionar para o diagnóstico baseado em evidência.
* Nenhum deploy ou alteração será executada sem autorização expressa do GPT AUDITSEO.

---

## 15. Gate Recommendation
**GATE STATUS:** `PENDING CLOSEOUT & GPT AUDITSEO REVIEW`  
Recomenda-se a análise deste relatório pelo GPT AUDITSEO para validação da arquitetura conceitual e liberação da Fase R16-B.
