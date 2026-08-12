# QA visual — Article Design System V3 Proof

Data da inspeção: 2026-08-12.

A rota `/internal/article-v3-proof` carregou via domínio temporário com HTTP 200. A página demonstrativa exibiu o Hero editorial, H1, subtitle, autoria canônica, featured image em `/images/guides/proof/featured.webp`, índice mobile e corpo long-form. A extração também confirmou Definition Box, Evidence Block, framework de cinco camadas, tabela/matriz de decisão, CTA contextual e indicação de rota não indexável.

O asset foi servido como `image/webp`, com dimensões contratuais de 1200 × 630 e alt text específico: `Composição abstrata de uma pessoa conectada a conhecimento, pesquisa e relações organizacionais.`. A imagem é conceitual e não possui texto sobreposto no HTML.

A rota usa conteúdo demonstrativo neutro e status `DRAFT`; nenhum artigo público do cluster de Entity Authority foi criado nesta fase. Não há referências a `/guias/autoria-seo` ou `AUDITSEO-ARTICLE-ENTITY-005` em `src` ou `public`.

Achado de refinamento: a extração textual do navegador não representa integralmente a hierarquia visual da sidebar desktop, mas o DOM e o código confirmam o índice, a autoria e o compartilhamento dentro de uma sidebar `sticky`, sem `overflow` ou scroll interno. A barra de progresso é horizontal, dourada e posicionada imediatamente abaixo da navbar.
