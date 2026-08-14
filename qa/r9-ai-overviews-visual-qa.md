# R9.1 Visual QA — AI Overviews #007

**REAL BROWSER INSPECTION:** **PASS**  
**Data de inspeção real:** 14 de agosto de 2026  
**Ferramenta:** Chromium Headless (viewport desktop 1440×900 e mobile 390×844)  

## 1. Verificação Desktop (1440×900)
- **Navbar:** Sticky, links ativos e navegação funcional.
- **Reading Progress:** Barra dourada topo ativa funcionando.
- **Hero & H1:** Alinhamento perfeito, subtitulo e metadados exibidos corretamente.
- **Featured Image:** Hero image em `featured.webp` (1200×630), sem texto, logotipos ou fake UI.
- **Typography & Width:** Proporção editorial limpa, largura máxima controlada.
- **Sidebar & TOC:** Sidebar fixa na posição correta (`sticky top-[108px]`). TOC ativo destacando a seção atual durante o scroll.
- **Sidebar Internal Scroll:** `NONE` (o corpo do artigo é o único contexto de scroll da página).
- **Tables & Frameworks:** Cards estilizados com fundo escuro e bordas em tom âmbar/dourado (`#b28453`).
- **CTAs & Author:** Exibição correta do autor Sidney Santos e dos blocos de conversão.
- **Footer:** Site footer completo e funcional.

## 2. Verificação Mobile (390×844)
- **Navbar:** Responsiva com menu e logotipo.
- **Hero & Featured Image:** Redimensionados proporcionalmente sem estouro de layout.
- **Mobile TOC:** Painel expansível funcional para navegação por toque.
- **Body & Typography:** Legibilidade preservada em telas estreitas.
- **Table & Framework Responsiveness:** Grids convertidos para coluna única sem quebras horizontais.
- **CTA, Share & Author:** Perfeitamente alinhados ao final do fluxo.

## 3. Evidências Capturadas
- `qa/screenshots/desktop-hero.png`
- `qa/screenshots/desktop-full.png`
- `qa/screenshots/mobile-hero.png`
- `qa/screenshots/mobile-full.png`
