# AUDITSEO - Ecossistema Editorial & Diagnóstico

Este repositório contém o código-fonte do ecossistema AUDITSEO, uma plataforma dedicada à inteligência de busca e governança de evidências para agências e marcas.

## Arquitetura do Projeto

- **Frontend:** React + Vite + TypeScript (SPA)
- **Estilização:** Tailwind CSS
- **Backend:** Node.js (Express) para serviços de apoio e integração
- **Governança:** Estrutura baseada em evidências (Documentado, Observado, Inferido, Recomendado)

## Como Rodar Localmente

### Pré-requisitos
- Node.js (v18+)
- npm ou yarn

### Instalação
1. Clone o repositório
2. Instale as dependências:
   ```bash
   npm install
   ```

### Desenvolvimento
Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

### Build de Produção
Para gerar o bundle otimizado:
```bash
npm run build
```

## Governança de Dados

O projeto segue regras estritas de **Evidence Governance**:
- **DECLARADO PELO USUÁRIO:** Informações fornecidas via formulários ou assessments.
- **INFERIDO:** Conclusões lógicas baseadas em dados declarados ou observados.
- **RECOMENDADO:** Ações sugeridas com base em diagnósticos.
- **EVIDÊNCIA DE APOIO:** Links para guias, metodologias ou observações reais no Pillar ou Lab.

---
© 2026 AUDITSEO. Todos os direitos reservados.
