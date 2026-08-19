# R17-A / STEP 2 — TERMINOLOGY & EVIDENCE BOUNDARY ANALYSIS

**Status do gate:** `AUTHORIZED — READ / ANALYZE / DESIGN / QA DOCUMENTATION ONLY`

**Escopo deste documento:** corpus terminológico, definições preliminares, conflitos de linguagem, classificação das superfícies públicas e Boundary Matrix preliminar para o futuro Entity Authority Framework.

**Fora do escopo:** alteração de código, schema, registry, artigo, rota, Entity Home, Vercel ou Production; redação de arquitetura definitiva; criação de Observation, Experiment ou Research Item; criação de score ou KPI universal.

## 1. Gate, base documental e método

O GPT AUDITSEO encerrou o R17-A Step 1 como `VERIFIED / CLOSED`, classificou a Evidence Completion e a Persistence Reconciliation como `PASS` e autorizou o Step 2 exclusivamente para leitura, análise, design conceitual e documentação QA. A autorização não inclui implementação ou correção das superfícies atualmente examinadas [1] [2].

A análise foi conduzida sobre o Source Truth já inventariado, o registry de pesquisa, o registry de artigos, o mapa de metadados públicos do router, o renderer público de Research Items, a Entity Home de Sidney Santos e os artigos canônicos de entidade, corroboração, retrieval, citações e mensuração [3] [4] [5] [6] [7] [8] [9] [10] [11] [12] [13] [14]. O objetivo é separar o objeto observado, a definição metodológica da AUDITSEO, a hipótese inferencial e a relação comercial, sem promover uma camada epistemológica a outra.

> **Regra de governança:** uma observação de output não é automaticamente evidência de mecanismo interno; uma definição editorial não é automaticamente fato sobre uma plataforma; uma relação comercial não é prova de elegibilidade, autoridade, reconhecimento, citation ou resultado.

A taxonomia de Evidence Governance usada neste relatório permanece: `DOCUMENTADO → OBSERVADO → TESTADO → INFERIDO → RECOMENDADO`. A presença de um termo em uma página publicada prova que o termo existe no corpus editorial; não prova a validade universal da proposição associada a ele. Quando a linguagem excede o que o corpus sustenta, a classificação é preservada como `INFERIDO`, `POTENTIAL OVERCLAIM`, `NOT DEMONSTRATED` ou `REWRITE REQUIRED`, sem correção neste gate.

## 2. Taxonomia de uso atual

Para evitar ambiguidade, cada termo é classificado pelo modo predominante em que aparece hoje no corpus:

| Classe | Uso permitido neste relatório |
|---|---|
| `FACTUAL` | Fato documentado sobre o próprio sistema editorial, um registro, uma URL, uma observação ou um conceito técnico geral quando a fonte sustenta essa descrição. |
| `METHODOLOGICAL` | Definição, protocolo, modelo de análise ou distinção criada para organizar a investigação da AUDITSEO. |
| `OBSERVATIONAL` | Descrição situada de uma captura, estado de interface, resposta, fonte, atributo, relação ou mudança observada em condições delimitadas. |
| `INFERENTIAL` | Interpretação, hipótese ou explicação que ultrapassa o output diretamente observável e, por isso, exige qualificação explícita. |
| `COMMERCIAL` | Uso em uma oferta, diagnóstico, parceria ou promessa de aplicação empresarial; não pode ser tratado como evidência epistemológica. |

O mesmo termo pode possuir mais de uma classe em contextos diferentes. Por exemplo, `Entity Home` é factual quando descreve a existência da rota canônica `/autor/sidney-santos`, metodológico quando define uma função editorial e inferencial quando é apresentada como âncora universal de retrieval. A classificação deve acompanhar a proposição concreta, não apenas o substantivo.

## 3. Corpus terminológico e definições preliminares

As definições abaixo são preliminares e servem para estabelecer limites de uso em gates posteriores. Elas não constituem arquitetura interna conhecida de Google, AI Overviews, ChatGPT Search, Perplexity ou qualquer outra plataforma.

| Termo | Uso atual predominante | Definição preliminar AUDITSEO | Evidence boundary | Commercial eligibility |
|---|---|---|---|---|
| **Entity / Entidade** | `FACTUAL / METHODOLOGICAL` | Unidade distinguível de identidade e referência, como pessoa, organização, produto, local, evento ou tópico. | Pode afirmar que o corpus editorial modela entidades e suas relações. Não pode afirmar que toda plataforma representa a entidade pela mesma estrutura interna. | Elegível apenas como objeto de diagnóstico documental/observacional, não como promessa de reconhecimento. |
| **Entity Identity** | `FACTUAL` | Conjunto de identificadores, nome, tipo, URL canônica e atributos necessários para delimitar qual entidade está sendo referida. | Pode afirmar identidade canônica documentada no registry e na Entity Home. Não pode afirmar que identidade consistente equivale a autoridade ou reconhecimento. | Pode sustentar auditoria de identidade e consistência de dados. Não sustenta garantia de performance. |
| **Entity Home** | `FACTUAL / METHODOLOGICAL` | URL controlada usada pela AUDITSEO para declarar identidade, contexto, atributos e relações canônicas. | Pode afirmar que é uma fonte própria/controlada de identidade e contexto. Não pode afirmar que é `primary citation anchor`, fonte RAG canônica ou origem exclusiva de qualquer resposta. | Pode ser objeto de diagnóstico de clareza e completude documental; não pode ser vendida como garantia de retrieval ou citation. |
| **Entity Authority / Autoridade de Entidade** | `METHODOLOGICAL / COMMERCIAL` | Cluster editorial que organiza identidade, desambiguação, consistência, autoria, associação temática e corroboração. | Pode ser usado como modelo de análise AUDITSEO. Não pode ser tratado como variável interna observável, score universal, causalidade ou garantia de reconhecimento. | Pode nomear um serviço diagnóstico se a entrega for descrita como auditoria de evidência e estado observável. |
| **Topical Association / Associação Temática** | `OBSERVATIONAL / METHODOLOGICAL` | Relação observada ou documentada entre uma entidade e um tema dentro de um query set, corpus ou conjunto editorial definido. | Pode relatar que uma associação apareceu em determinado contexto. Não pode converter associação situada em autoridade temática geral ou transferência automática entre tópicos. | Pode orientar investigação de cobertura temática; não pode prometer presença recorrente em consultas. |
| **Recognition / Reconhecimento** | `OBSERVATIONAL` | Estado em que a entidade correta aparece identificada ou associada em uma resposta, resultado ou superfície observada. | Exige query, sistema, surface, data e critério. Não pode ser usado como sinônimo de autoridade, preferência, confiança, consenso ou visibilidade estável. | Pode ser dimensão de observação; não é promessa comercial de “ser reconhecido pela IA”. |
| **Disambiguation / Desambiguação** | `METHODOLOGICAL / OBSERVATIONAL` | Problema de distinguir uma entidade entre homônimos ou candidatos semanticamente próximos. | Pode descrever ambiguidade nominal e estados `CORRECT / INCORRECT / UNCLEAR` em um protocolo. Não pode afirmar qual algoritmo interno resolveu a ambiguidade. | Pode sustentar auditoria de homônimos, relações e contexto; não garante resolução algorítmica. |
| **Consistency / Consistência** | `METHODOLOGICAL / OBSERVATIONAL` | Compatibilidade de atributos, relações e declarações entre fontes e superfícies comparáveis. | Pode registrar acordo, conflito, mismatch e mudança. Não pode afirmar que consistência causa reconhecimento, citation ou redução de hallucination; `Consistency ≠ Causality`. | Pode apoiar reconciliação documental e controle de qualidade; não pode ser vendida como mecanismo de mitigação garantido. |
| **Corroboration / Corroboração** | `METHODOLOGICAL` | Evidência externa ou independente que sustenta fatos, relações, atributos ou associações temáticas. | Pode distinguir declaração própria, referência externa e corroboração. Não pode converter multiplicidade de fontes compatíveis em consenso algorítmico, autoridade ou correção automática. | Pode sustentar um diagnóstico de gaps e independência de fontes; não autoriza promessa de citação ou reconhecimento. |
| **Evidence / Evidência** | `FACTUAL / METHODOLOGICAL` | Registro que sustenta uma proposição segundo uma classe explícita e um contexto definido. | Deve conservar a classe `DOCUMENTADO`, `OBSERVADO`, `TESTADO`, `INFERIDO` ou `RECOMENDADO`. Não pode ser promovida por retórica comercial. | Elegível para auditoria QA e diagnóstico; a aplicação comercial deve preservar a limitação original. |
| **Source / Fonte** | `FACTUAL / OBSERVATIONAL` | Documento, página, domínio ou recurso apresentado/associado a uma resposta ou usado como referência no corpus. | Pode afirmar que uma fonte foi exibida, acessível ou registrada. Não pode afirmar que é a única fonte, a mais importante ou a causa da resposta sem trace/log/documentação específica. | Pode ser classificada por presença, tipo, alinhamento e independência; não gera automaticamente autoridade. |
| **Attribute / Atributo** | `FACTUAL / OBSERVATIONAL` | Propriedade da entidade, como data, cargo, fundação, localização, função ou especialidade, definida no protocolo. | Pode comparar atributo observado com a Matriz de Verdade Canônica. Não pode afirmar que a divergência revela o mecanismo interno que escolheu a fonte. | Pode sustentar auditoria de acurácia factual; não garante correção futura após intervenção. |
| **Relationship / Relação** | `FACTUAL / OBSERVATIONAL` | Vínculo declarado ou observado entre entidades, como `Sidney Santos ↔ founder ↔ AUDITSEO`. | Pode afirmar relação documentada no Source Truth ou observada em uma resposta. Não pode afirmar que proximidade textual ou schema prova seleção algorítmica. | Pode sustentar auditoria de relação; não equivale a autoridade ou endorsement. |
| **Visibility / Visibilidade** | `OBSERVATIONAL / METHODOLOGICAL` | Conjunto de estados observáveis de presença, representação, associação, fontes, citations, attribution, contexto e estabilidade. | Exige universo de queries, sistema, surface, data e denominador. Não é uma posição única nem score universal. | Pode sustentar mensuração dimensional e diagnóstico; não autoriza promessa de “aumentar visibilidade” sem protocolo e resultado documentado. |
| **Citation / Citação** | `OBSERVATIONAL` | Referência explícita, link, card ou nota apresentada ao usuário e associada a uma resposta ou claim. | Pode afirmar que citation apareceu nesta interface, query e data. Não pode afirmar endorsement, autoridade, recommendation, causalidade, ranking ou retrieval trace completo. | Pode ser auditada quanto a presença e alinhamento; não pode ser vendida como backlink 2.0 ou resultado garantido. |
| **Mention / Menção** | `OBSERVATIONAL` | Aparição nominal ou identificável de entidade no texto, com ou sem link/citation. | Pode registrar `YES / NO / UNCLEAR`. Não pode colapsar mention em source, citation, recommendation ou authority. | Pode entrar em métrica descritiva, com denominador; não é prova de demanda ou preferência. |
| **Attribution / Atribuição** | `OBSERVATIONAL / METHODOLOGICAL` | Relação observável entre uma claim e uma fonte, autor, organização ou referência. | Pode classificar `DIRECTLY ALIGNED`, `PARTIALLY ALIGNED`, `WEAKLY ALIGNED`, `CONFLICTING`, `UNCLEAR` ou `NOT ASSESSABLE`. Não pode afirmar autoria causal interna da resposta. | Pode sustentar QA de alinhamento; não equivale a endorsement. |
| **Recommendation / Recomendação** | `OBSERVATIONAL / COMMERCIAL` | Contexto em que a resposta apresenta a entidade como recomendada, comparada, neutra, criticada, excluída ou incerta. | Recomendação deve ser codificada no contexto da query. Não pode ser inferida apenas de mention, citation ou posição visual. | Pode orientar análise de decisão comercial; não deve ser prometida como resultado de uma otimização. |
| **Knowledge Graph** | `METHODOLOGICAL / INFERENTIAL` | Conceito técnico geral para estruturas de entidades e relações; no corpus, também aparece como referência a grafos de conhecimento de plataformas. | Pode explicar o conceito geral e citar documentação específica quando houver. Não pode tratar o TopicGraph editorial como grafo interno, nem alegar acesso ao grafo proprietário de uma plataforma. | Não é objeto de promessa comercial; pode ser contexto para auditoria de estrutura editorial. |
| **Graph / Grafo** | `METHODOLOGICAL` | Abstração para organizar nós, relações, atributos e caminhos de informação. | Pode descrever o modelo editorial. Não pode afirmar que a web ou um sistema comercial opera exatamente como o grafo desenhado pela AUDITSEO. | Pode ser usado em design documental; não como prova de autoridade. |
| **TopicGraph** | `FACTUAL / METHODOLOGICAL` | Estrutura editorial existente no modelo `ArticleData` para relacionar cluster, entidades, evidências, parent, next e relações comerciais. | Pode afirmar que o código possui TopicGraph e que ele organiza o corpus AUDITSEO. Não pode chamá-lo de Knowledge Graph interno de buscadores. | Pode sustentar arquitetura editorial futura, mas não uma garantia de recuperação. |
| **GEO** | `COMMERCIAL / METHODOLOGICAL` | Expressão de mercado para discutir otimização em ambientes de busca generativa; no corpus, é linguagem editorial, não fator padronizado. | AUDITSEO pode estudar o termo e suas relações com SEO e AI Search; não há padrão universal, score, causalidade ou “GEO readiness” objetivamente demonstrada. | Elegibilidade condicional: frente diagnóstica com observáveis e limitações declaradas; não promete aparição em IA. |
| **Generative Search Architecture** | `METHODOLOGICAL / INFERENTIAL` | Modelo conceitual para separar retrieval, generation, synthesis, grounding, representation, source e citation. | Pode ser apresentado como modelo editorial AUDITSEO. Não pode ser apresentado como arquitetura universal ou interna conhecida de qualquer sistema. | Não deve ser comercializado como acesso, controle ou engenharia reversa de plataforma. |
| **Information Retrieval / Retrieval** | `FACTUAL / METHODOLOGICAL` | Campo/processo geral de localizar e recuperar informação relevante a partir de uma coleção diante de uma necessidade informacional. | Pode explicar IR e observar outputs; não pode inferir retrieval trace completo, pool de candidatos, ranking, pesos ou fonte causal a partir da interface. | Pode sustentar auditoria de fundamentos controlados; não “retrieval optimization” como promessa. |
| **RAG** | `FACTUAL / METHODOLOGICAL` | Paradigma técnico de Retrieval-Augmented Generation, geralmente descrito como recuperação de contexto externo seguida de geração. | Pode explicar o paradigma com fonte técnica. Não pode tratar RAG como AI Search inteiro, arquitetura universal ou prova de que uma superfície específica usa exatamente uma pipeline RAG. | Pode ser usado em conteúdo educativo; não como promessa de que uma Entity Home alimenta um modelo. |
| **Grounding** | `FACTUAL / METHODOLOGICAL` | Apoio de uma geração em informação ou contexto externo, com definição específica dependente da plataforma. | Pode distinguir grounding de citation. Não pode afirmar que grounding revela todos os documentos usados ou que sempre produz citation. | Não é promessa comercial; pode ser objeto de explicação técnica qualificada. |
| **Metric / Mensuração** | `METHODOLOGICAL` | Processo e medida descritiva aplicados a observações com unidade, query set, denominador, período e missingness declarados. | Pode relatar métricas condicionais e dimensionais auditáveis. Não pode esconder o denominador nem misturar surfaces incomparáveis. | Elegível quando vinculada a uma pergunta de decisão explícita; não transformar cada métrica em KPI. |
| **KPI** | `COMMERCIAL / METHODOLOGICAL` | Métrica escolhida para orientar uma decisão estratégica ou de governança. | Só pode ser chamado KPI após definição da decisão, métrica, contrato e denominador. Não pode ser presumido como universal. | Elegibilidade depende do objetivo do cliente e da ficha da métrica; não é consequência automática de visibilidade. |
| **Score** | `COMMERCIAL / METHODOLOGICAL` | Índice composto que sintetiza dimensões diferentes em um número. | O corpus atual rejeita scores arbitrários de AI Visibility, GEO ou AI Authority. Não pode ser criado neste gate. | Não elegível como output padrão; qualquer futura exceção exigiria contrato matemático, fonte de dados e autorização específica. |
| **Share of Model** | `COMMERCIAL / METHODOLOGICAL` | Termo de mercado cujo significado depende de query set, universo de menções, sistemas, período e denominador. | Pode ser estudado como conceito metodológico condicionado. Não é KPI canônico, não é automaticamente Share of Voice e não deve ser presumido. | Só elegível com metric card, comparabilidade declarada e disclaimer; não usar como fato universal. |
| **Authorship / Autoria** | `FACTUAL / METHODOLOGICAL` | Relação entre produtor, revisor, especialista, publisher e conteúdo. | Pode documentar autoria e proveniência editorial. Não pode afirmar que author schema, byline ou autoria geram citation ou ranking. | Pode sustentar auditoria de proveniência e clareza de responsabilidade. |
| **Framework proprietário** | `METHODOLOGICAL / INFERENTIAL` | Modelo de trabalho criado pela AUDITSEO para organizar análise, como o bloco público de OBS-002. | Deve ser rotulado como modelo editorial hipotético quando não há demonstração de mecanismo. Não pode ser publicado como arquitetura de sistema. | Pode nomear método interno, desde que a fronteira seja explícita e não haja promessa de resultado. |

## 4. Distinções epistemológicas obrigatórias

### 4.1 Identity ≠ Authority

`Entity Identity` responde “qual entidade está sendo referida?”. `Entity Authority`, no corpus AUDITSEO, organiza um conjunto de perguntas sobre identidade, relações, atributos, associação temática, autoria, consistência e corroboração. Uma identidade canônica pode estar bem documentada e ainda não possuir corroboração externa suficiente, reconhecimento situado ou visibilidade recorrente. Portanto, identidade consistente não demonstra autoridade.

### 4.2 Association ≠ Recognition

Uma associação editorial ou temática pode existir no TopicGraph, em uma página ou em uma observação. `Recognition` exige um estado observado em um sistema ou surface, sob uma query e uma data. O primeiro não prova o segundo. A Observação #001 é precisamente um caso em que a associação varia por contexto, sem autorizar uma regra universal sobre resolução.

### 4.3 Recognition ≠ Visibility

Reconhecimento situado é um estado de identificação correta em determinada captura. Visibilidade é uma família de dimensões que pode incluir presença, representação, fontes, citations, attribution, contexto e estabilidade. Uma entidade pode ser reconhecida em uma query e permanecer ausente em outra. Não há conversão automática de recognition em visibility recorrente.

### 4.4 Visibility ≠ Citation

A entidade pode aparecer no texto sem que uma fonte oficial seja exibida. Uma fonte pode aparecer sem que a entidade seja o tema central. Uma citation é um elemento visível de referência, não uma medida completa de presença ou de retrieval. A presença de uma citation não autoriza inferir autoridade, preferência ou endorsement.

### 4.5 Citation ≠ Recommendation

Ser citado significa que uma referência apareceu associada à resposta ou a uma claim. Recomendação é um contexto distinto, que precisa ser codificado na linguagem da resposta e na intenção da query. A plataforma pode citar uma página por conter um dado útil sem recomendar a empresa, o serviço ou o autor.

### 4.6 Consistency ≠ Causality

Consistência registra compatibilidade ou conflito entre atributos e fontes. Mesmo que uma representação se torne mais consistente em T1, isso não demonstra que uma intervenção causou a alteração. Mudanças de sistema, conteúdo, concorrência, query, locale, sessão e surface permanecem confundidores possíveis. Consistência não é mecanismo de mitigação garantida de hallucination.

### 4.7 Corroboration ≠ Consensus

Corroboração é uma propriedade documental situada: fontes independentes podem sustentar um fato ou relação compatível. Consensus seria uma conclusão muito mais forte sobre convergência de conhecimento ou comportamento de sistemas. Mesmo múltiplas fontes compatíveis não permitem inferir consenso algorítmico, peso interno ou autoridade universal.

### 4.8 TopicGraph ≠ Knowledge Graph

O `TopicGraph` é uma estrutura editorial existente em `ArticleData`, com clusters, entidades relacionadas, links de evidência e relações comerciais. Ele é Source Truth do corpus AUDITSEO. Não é um grafo interno de buscadores, não é uma janela para knowledge graphs proprietários e não deve ser apresentado como infraestrutura de recuperação externa.

### 4.9 Retrieval ≠ RAG ≠ AI Search

`Information Retrieval` é um campo/processo geral de acesso a informação relevante. `RAG` é um paradigma técnico que combina recuperação e geração. `AI Search` é uma categoria de experiência e produto que pode combinar busca, geração, fontes, interfaces, indexação, ferramentas, conhecimento paramétrico e outras camadas. RAG não é AI Search inteiro nem arquitetura universal. A própria documentação editorial de #008 preserva essa fronteira [9].

### 4.10 Grounding ≠ Citation

Grounding pode significar apoio da geração em contexto externo; citation é referência apresentada na interface. Uma geração pode usar contexto sem exibir a fonte. Uma citation pode ser exibida sem revelar todo o contexto recuperado. Os termos não devem ser usados como sinônimos.

## 5. Análise formal dos achados do Step 1

### 5.1 OBS-001 — reconhecimento de entidade por contexto

**O que foi efetivamente observado.** O registry descreve consultas controladas em que a associação observada entre Sidney Santos e AUDITSEO variou conforme o contexto temático: consultas com `Search Intelligence` foram registradas como mais claras, enquanto consultas com `Entity Authority` apresentaram maior ruído de homônimos e menor associação evidente no momento da captura [3]. O achado permitido é situado: naquele conjunto de consultas, sistema, período e condições, a representação observada não foi homogênea.

**O que é interpretação/inferência.** A afirmação de que contextos com menor densidade de ruído homônimo “facilitam” a resolução é uma hipótese metodológica/inferencial, explicitamente limitada pela amostra. A frase de que a resolução “depende criticamente” da densidade de coocorrência excede o que a observação demonstra e deve permanecer classificada como `INFERENTIAL / NEEDS REVIEW / POTENTIAL OVERCLAIM`, conforme o Step 1 [2].

**O que a observação não demonstra.** OBS-001 não demonstra autoridade temática, causalidade linear, peso interno de sinais, arquitetura de Entity Resolution, preferência estável do Google, reconhecimento universal da pessoa ou transferência de autoridade de um tópico para outro. Também não demonstra que a ausência de associação em uma query represente ausência de conhecimento ou de entidade no sistema.

**Formulação segura para futuro uso.** “Na amostra T0 documentada, a representação observada da entidade variou entre consultas com contextos temáticos diferentes. O resultado é situado e não identifica o mecanismo interno nem demonstra causalidade.”

### 5.2 OBS-002 — entidade correta, relação correta e atributo divergente

**O que foi efetivamente observado.** Em uma consulta sobre a fundação da AUDITSEO, o registry registra `Right Entity: Sidney Santos`, `Right Relation: Founder de AUDITSEO` e `Wrong Attribute: 2013` em vez do valor canônico de 2009 [3]. O achado observável é um caso de identidade e relação corretas acompanhadas de divergência em atributo temporal.

**O que é hipótese.** O finding que afirma que sinais temporais conflitantes “exercem peso imprevisível” na síntese de LLMs é `POTENTIAL OVERCLAIM`: a observação não identifica URL-fonte, peso, ordem de seleção, mecanismo de síntese ou influência causal. A hipótese de que motores generativos operam em uma cadeia universal de `Entity Resolution → Relation Resolution → Attribute Resolution → Consistency` é `POTENTIAL INTERNAL-MECHANISM CLAIM`. O renderer público ainda exibe essa cadeia como `Framework proprietário`, mas a exposição pública do bloco não transforma o modelo em arquitetura conhecida [3] [13].

**O que a observação não demonstra.** OBS-002 não demonstra que uma fonte secundária específica causou o ano divergente, que fontes conflitantes sempre prevalecem, que a resolução ocorre em camadas sucessivas em todas as plataformas, que `Consistency` seja uma etapa interna, que uma Entity Home corrija o atributo automaticamente ou que uma intervenção futura produza efeito.

**Formulação segura para futuro uso.** “Nesta captura, a entidade e a relação corporativa apareceram corretas, enquanto um atributo temporal apareceu divergente. A causa interna permanece desconhecida; hipóteses sobre retrieval, seleção de fonte, conhecimento paramétrico, síntese ou resolução de atributos não foram demonstradas.”

## 6. Public terminology review

A revisão abaixo inventaria o uso atual, mas não altera nenhuma superfície. A decisão é prospectiva e deve orientar um gate posterior de remediation editorial.

| Superfície/source | Formulação atual ou objeto | Classe atual | Classificação | Boundary e motivo |
|---|---|---|---|---|
| `/guias/o-que-e-entidade-seo` e metadata do router | “como o Google e a IA resolvem identidades” | `INFERENTIAL / METHODOLOGICAL` | `REWRITE REQUIRED` | A formulação generaliza processos internos. Pode ser reescrita para “como observar identidade e desambiguação em Search e AI Search”, mantendo a análise externa. |
| `/guias/desambiguacao-de-entidades` e metadata do router | “como separar nomes iguais em grafos” | `METHODOLOGICAL / INFERENTIAL` | `SAFE WITH QUALIFIER` | Pode funcionar como título didático se o texto deixar claro que o guia trata de desambiguação como problema e modelo editorial, não de acesso ao grafo interno de uma plataforma. |
| `/guias/geo-readiness` e Entity Home | `GEO Readiness` / “como preparar marcas para a nova busca” | `COMMERCIAL / METHODOLOGICAL` | `SAFE WITH QUALIFIER` | O termo pode ser usado como expressão de mercado e frente editorial AUDITSEO, sem score, padrão universal ou garantia de inclusão em respostas. A metadata permanece marcada para revisão [2] [12] [14]. |
| `/guias/o-que-e-entidade-seo` | “Entity Home” como “âncora primária de verdade controlada” | `METHODOLOGICAL` | `SAFE WITH QUALIFIER` | A página pode ser fonte controlada de identidade e contexto. Não pode ser apresentada como primary citation anchor, fonte RAG canônica ou origem exclusiva de respostas [4] [5] [9] [10]. |
| `/guias/o-que-e-entidade-seo` | “consolidar a autoridade da entidade” por `sameAs` | `INFERENTIAL` | `REWRITE REQUIRED` | `sameAs` pode declarar relações e perfis, mas o corpus não demonstra consolidação automática de autoridade, topo de respostas ou efeito universal. |
| `/guias/consistencia-de-entidade` | cadeia “Entity → Relation → Attribute → Consistency” | `INFERENTIAL` | `REWRITE REQUIRED` | O modelo deve ser identificado como hipótese/modelo editorial AUDITSEO, não pipeline interna universal. A correção fica fora deste gate [7] [13]. |
| `/estudos-busca-ia/entidade-correta-atributo-incorreto-ai-search` | “a IA reconhece a entidade certa, mas recupera o atributo errado” | `OBSERVATIONAL` | `SAFE WITH QUALIFIER` | O título é válido para o caso documentado, desde que preserve sistema, query, data e limite de não causalidade. |
| `/estudos-busca-ia/reconhecimento-de-entidade-por-contexto` | “o Google reconhece ... e praticamente ignora ...” | `OBSERVATIONAL / INFERENTIAL` | `SAFE WITH QUALIFIER` | Deve ser lido como contraste observado em query set limitado; não como comportamento universal do Google ou ausência de entidade. |
| `ResearchItemPage` de OBS-002 | bloco “Framework proprietário” com a cadeia sequencial | `METHODOLOGICAL / INFERENTIAL` | `REWRITE REQUIRED` | O rótulo proprietário é válido apenas se o bloco afirmar que se trata de modelo editorial hipotético, não de mecanismo interno demonstrado. Nenhuma alteração é feita agora [13]. |
| `/guias/entity-home` | Entity Home “fonte de verdade controlada” | `FACTUAL / METHODOLOGICAL` | `SAFE WITH QUALIFIER` | Pode descrever a função editorial de uma URL controlada e sua distinção em relação à homepage. Deve evitar “poder absoluto”, autoridade real automática ou validação algorítmica garantida [5]. |
| `/guias/corroboracao-de-entidade` | corroboração externa “ganha um peso crítico” e “dita” a representação da IA | `INFERENTIAL` | `REWRITE REQUIRED` | A corroboração pode sustentar fatos/associações em análise documental, mas não demonstra peso interno nem determina como uma IA descreverá a marca [8]. |
| `/guias/citacoes-e-fontes-em-ai-search` | source, citation, mention e attribution | `METHODOLOGICAL / OBSERVATIONAL` | `SAFE AS-IS` | O artigo separa os objetos, nega equivalência com autoridade/endorsement e trata a interface como evento observável [10]. |
| `/guias/recuperacao-de-informacao-ai-search` | retrieval, RAG, grounding e AI Search | `FACTUAL / METHODOLOGICAL` | `SAFE AS-IS` | O artigo distingue IR, generation, synthesis, grounding e RAG, rejeita RAG como AI Search inteiro e rotula o modelo como editorial AUDITSEO [9]. |
| `/guias/medir-visibilidade-ai-search` | dimensões de presence, representation, accuracy, source, citation, attribution, context e stability | `METHODOLOGICAL / OBSERVATIONAL` | `SAFE AS-IS` | O uso é dimensional, condicionado a query set e denominador, e rejeita scores compostos arbitrários [11]. |
| `/guias/medir-visibilidade-ai-search` | `Share of Model` | `COMMERCIAL / METHODOLOGICAL` | `SAFE WITH QUALIFIER` | Deve permanecer termo de mercado dependente de metodologia, não KPI universal ou substituto automático de Share of Voice. |
| `/guias/search-intelligence` | “Search Intelligence é a camada que conecta SEO, GEO, dados, autoridade...” | `METHODOLOGICAL / COMMERCIAL` | `SAFE WITH QUALIFIER` | Deve ser identificado como definição editorial/serviço AUDITSEO, não como categoria técnica universal nem promessa de resultado. |
| `/`, `/consultoria`, `/diagnostico`, `/geo-ia` e `/seo-para-agencias` | “autoridade”, “GEO”, “inteligência de busca”, “oportunidades” e “governança” em oferta | `COMMERCIAL` | `SAFE WITH QUALIFIER` | Pode descrever cenários e escopo diagnóstico. Não pode converter linguagem comercial em prova de autoridade, recognition, citation, score ou resultado garantido. |
| `/autor/sidney-santos` | Entity Home, expertise, GEO como expressão de mercado e referências externas “em organização” | `FACTUAL / METHODOLOGICAL / OPEN QUESTION` | `SAFE WITH QUALIFIER` | Identidade, cargo, fundador e método devem permanecer documentados; `GEO` deve ser qualificado; referências externas não podem ser tratadas como corroboradas enquanto os placeholders permanecerem [14]. |
| `TopicGraph` em `ArticleData` | grafo editorial com `evidenceLinks`, `relatedEntities` e `commercialRelation` | `FACTUAL / METHODOLOGICAL` | `SAFE AS-IS` | É Source Truth do sistema editorial. Deve continuar explicitamente separado de Knowledge Graph interno de buscadores [4] [5] [12]. |
| `Entity Authority` como nome de serviço | “Diagnóstico de Autoridade de Entidade” e variações | `COMMERCIAL` | `SAFE WITH QUALIFIER` | O serviço pode investigar evidências e estados observáveis. O nome não autoriza afirmar authority score, reconhecimento garantido, citation ou impacto comercial. |

### 6.1 Síntese de classificação pública

A revisão não identifica base para `SAFE AS-IS` nas formulações que transformam o output em mecanismo interno. As superfícies de #008, #009 e #010 já contêm as fronteiras mais maduras: RAG é paradigma técnico; source/citation/mention/attribution são objetos distintos; e visibility é dimensional, sem score arbitrário. As formulações mais sensíveis são a promessa implícita de que Google/IA “resolvem identidades” segundo uma cadeia conhecida, Entity Home como âncora de retrieval, Consistency como mitigação causal e corroboração como determinante da representação.

A classificação `SAFE WITH QUALIFIER` não significa que a redação atual esteja aprovada sem mudanças. Significa que o conceito pode permanecer no vocabulário se a futura redação explicitar sistema, contexto, método, limitações e ausência de garantia. `REWRITE REQUIRED` indica que a proposição, como atualmente formulada, atribui mecanismo, causalidade ou universalidade não demonstrada. `NOT DEMONSTRATED` deve permanecer reservado para claims sem evidência suficiente; `REMOVE / AVOID` deve ser usado quando a formulação não puder ser delimitada sem preservar a promessa indevida.

## 7. Boundary Matrix preliminar

A matriz abaixo consolida o contrato operacional para um futuro gate de remediation ou modelagem. Ela não implementa qualquer regra no produto.

| Termo | Definição AUDITSEO | Evidence class permitida | O que pode afirmar | O que não pode afirmar | Commercial eligibility |
|---|---|---|---|---|---|
| Identity | Identidade canônica documentada | `DOCUMENTADO / OBSERVADO` | Qual entidade o Source Truth pretende representar e qual entidade apareceu em uma captura | Que identidade consistente é autoridade ou reconhecimento | Auditoria de identidade |
| Authority | Cluster editorial de perguntas sobre entidade | `METHODOLOGICAL / COMMERCIAL` | Que o método organiza sinais e gaps | Score, peso interno, autoridade universal ou causalidade | Diagnóstico com limites explícitos |
| Entity Home | URL controlada de identidade/contexto | `DOCUMENTADO / RECOMENDADO` | Que a página existe e cumpre função editorial | Anchor RAG/citation universal ou fonte exclusiva | Auditoria de clareza e completude |
| Association | Relação entity–topic em contexto definido | `OBSERVADO / INFERIDO` | Que a associação ocorreu ou foi estruturada em determinado universo | Recognition recorrente, authority temática ou transferência automática | Diagnóstico de cobertura temática |
| Recognition | Identificação observada da entidade | `OBSERVADO / TESTADO` | Que a entidade correta apareceu em query/system/surface/date | Preferência, confiança, consenso ou estabilidade | Medição situada |
| Disambiguation | Distinção entre homônimos/candidatos | `METHODOLOGICAL / OBSERVADO` | Que há problema e como codificá-lo | Algoritmo interno usado | Auditoria de risco de ambiguidade |
| Consistency | Compatibilidade entre atributos/relações/fontes | `OBSERVADO / TESTADO` | Que houve acordo, conflito ou mudança | Causa, mitigation de hallucination ou efeito de intervenção | Reconciliação documental |
| Corroboration | Sustentação externa/independente de claim | `DOCUMENTADO / OBSERVADO` | Que uma fonte sustenta um fato/relação compatível | Consensus, authority, weight or ranking effect | Auditoria de gaps e independência |
| Evidence | Registro classificado e contextualizado | Todas as classes, sem promoção implícita | O que a fonte efetivamente suporta | Mais do que a classe e o contexto autorizam | QA e diagnóstico |
| Source | Documento/recurso visível ou registrado | `DOCUMENTADO / OBSERVADO` | Que a fonte foi exibida, acessível ou cadastrada | Única fonte, maior peso ou causa da resposta | Source audit |
| Attribute | Propriedade factual da entidade | `DOCUMENTADO / OBSERVADO / TESTADO` | Comparar valor observado com canonical truth | Causa do valor divergente | Attribute audit |
| Relationship | Vínculo entre entidades | `DOCUMENTADO / OBSERVADO` | Que o vínculo foi declarado ou apareceu | Que proximidade prova resolução interna | Relationship audit |
| Visibility | Estados observáveis multidimensionais | `OBSERVADO / TESTADO / METHODOLOGICAL` | Presença, representação, source/citation, attribution, stability sob protocolo | Um número universal de visibility | Mensuração contratada |
| Citation | Referência explícita exibida | `OBSERVADO` | Que citation apareceu em uma interface | Endorsement, authority, recommendation ou retrieval trace | Citation QA |
| Recommendation | Contexto recomendado/compare/neutral/etc. | `OBSERVADO` | Que a linguagem da resposta apresentou o contexto | Inferir recommendation de mention ou citation isolada | Recommendation context audit |
| Knowledge Graph | Conceito técnico geral de entidades/relações | `DOCUMENTADO / METHODOLOGICAL` | Explicar conceito e citar documentação específica | Equiparar ao TopicGraph ou alegar acesso interno | Não é promessa comercial |
| TopicGraph | Estrutura editorial do corpus AUDITSEO | `DOCUMENTADO` | Mapear artigos, entidades, evidenceLinks e relações | Representar grafo de buscador | Design editorial |
| GEO | Expressão de mercado/editorial | `METHODOLOGICAL / COMMERCIAL` | Descrever como AUDITSEO usa o termo | Padrão universal, score ou garantia | Diagnóstico qualificado |
| Generative Search Architecture | Modelo conceitual editorial | `METHODOLOGICAL / INFERRED` | Organizar perguntas sobre camadas observáveis | Descrever arquitetura proprietária interna | Não vender acesso interno |
| Retrieval | Processo/campo geral de recuperação | `DOCUMENTADO / OBSERVADO / TESTADO` | Explicar IR e registrar outputs/limited evidence | Trace completo, peso, pool ou ranking interno | Controlled foundations audit |
| RAG | Paradigma técnico retrieval + generation | `DOCUMENTADO / METHODOLOGICAL` | Explicar RAG como paradigma | RAG = AI Search ou plataforma específica usa RAG completo | Conteúdo educativo apenas |
| Grounding | Apoio da geração em contexto externo | `DOCUMENTADO / METHODOLOGICAL` | Distinguir grounding de citation | Toda fonte/contexto ou citation garantida | Não é promessa |
| Mention | Aparição nominal/identificável | `OBSERVADO` | Registrar presence `YES/NO/UNCLEAR` | Source, citation, authority ou recommendation | Métrica descritiva |
| Attribution | Relação claim–source/entity | `OBSERVADO / METHODOLOGICAL` | Classificar alinhamento | Causa interna ou atribuição total da resposta | QA de alinhamento |
| Metric | Quantificação descritiva com contrato | `TESTADO / METHODOLOGICAL` | Percentual/contagem com denominador declarado | Comparabilidade sem contrato | Measurement service |
| KPI | Métrica ligada a decisão | `METHODOLOGICAL / COMMERCIAL` | Orientar decisão explicitamente definida | KPI universal ou authority KPI presumido | Só após metric card |
| Score | Índice sintético composto | `COMMERCIAL / INFERENTIAL` | Apenas se houver contrato matemático futuro autorizado | Score arbitrário de visibility/GEO/authority | Não elegível neste gate |
| Share of Model | Termo de mercado dependente de método | `METHODOLOGICAL / COMMERCIAL` | Definir denominador e universo | KPI universal ou Share of Voice automático | Condicional e com disclaimer |
| Authorship | Relação produtor–conteúdo–publisher | `DOCUMENTADO / OBSERVADO` | Proveniência, papel e autoria declarada | Citation/ranking guarantee | Provenance audit |

## 8. Claims proibidos ou condicionados para gates posteriores

As formulações abaixo devem ser tratadas como proibidas sem nova evidência e qualificação: “AI systems do not search strings / use entity subgraphs” como tese universal; “Entity Home é a primary citation anchor for RAG”; “Consistency mitiga hallucinations”; “a cadeia Entity → Relation → Attribute → Consistency é a arquitetura dos motores”; “corroboração dita como a IA descreve a marca”; “citation prova autoridade ou endorsement”; “Share of Model é KPI”; “GEO Readiness é estado objetivo ou score”; “schema garante retrieval/citation”; e “mais entidades produzem maior retrieval”.

As formulações condicionadas podem ser usadas apenas quando explicitamente rotuladas: modelo editorial AUDITSEO, hipótese, observação situada, conceito técnico geral, comportamento documentado por uma plataforma específica, ou recomendação operacional sem garantia. RAG deve continuar tratado como paradigma técnico, não arquitetura universal de AI Search. A revisão de metadata pública permanece pendência documental e não é corrigida neste gate.

## 9. Research boundaries e questões abertas

O Step 2 não cria nova Observation. OBS-001 e OBS-002 permanecem objetos já existentes, com as limitações e classificações herdadas do Step 1. OBS-003 e OBS-004 continuam como corpus observacional situado; EXP-001 permanece `DRAFT`; ANALYSIS-001 permanece `MIGRATION_PENDING`; e nenhuma lacuna é preenchida por nova verdade.

Permanecem como `OPEN QUESTION`, `PLANNED RESEARCH QUESTION` ou `NOT DEMONSTRATED` as seguintes fronteiras: quais elementos de uma resposta foram recuperados; se uma fonte visível participou efetivamente da geração; qual peso, se algum, foi atribuído a fontes; se plataformas diferentes usam determinada arquitetura; se uma alteração editorial muda uma representação por causalidade; se corroboração externa altera recognition; e se qualquer dimensão observável possui validade comercial fora do query set e período em que foi medida.

O próximo gate, se autorizado, deverá decidir se a linguagem pública será remediada por termo, por artigo, por metadata, por renderer ou por documentação de governança. Essa decisão não faz parte deste relatório e não implica autorização para implementação.

## 10. Veredito documental do Step 2

O corpus terminológico foi mapeado e as fronteiras epistemológicas foram estabelecidas preliminarmente. As distinções obrigatórias foram incorporadas: `Identity ≠ Authority`, `Association ≠ Recognition`, `Recognition ≠ Visibility`, `Visibility ≠ Citation`, `Citation ≠ Recommendation`, `Consistency ≠ Causality`, `Corroboration ≠ Consensus` e `TopicGraph ≠ Knowledge Graph`.

OBS-001 foi separado entre observação, inferência, potencial overclaim e limites de causalidade. OBS-002 foi separado entre entidade correta, relação correta, atributo divergente, hipótese de peso e hipótese de arquitetura sequencial. A sequência foi mantida como modelo editorial hipotético/inferencial, não como arquitetura interna conhecida.

A public terminology review identificou usos `SAFE AS-IS`, `SAFE WITH QUALIFIER` e `REWRITE REQUIRED`, sem alterar o produto. A Boundary Matrix preliminar estabelece, para cada termo, classe de evidência permitida, claims autorizadas, claims proibidas e elegibilidade comercial. Nenhuma nova Observation foi criada, nenhum score foi introduzido, nenhum registry foi editado e nenhuma implementação foi iniciada.

**Status proposto para o gate:** `R17-A STEP 2 DOCUMENT BASIS = READY FOR GPT AUDITSEO QA REVIEW`.

## Referências

[1]: https://github.com/sidneysantossp/auditseo-agencias/blob/main/qa/r17-a-briefing-initial.md "R17-A briefing inicial"
[2]: https://github.com/sidneysantossp/auditseo-agencias/blob/main/qa/r17-a-step-1-entity-authority-source-truth-inventory.md "R17-A Step 1 Source Truth Inventory"
[3]: https://github.com/sidneysantossp/auditseo-agencias/blob/main/src/editorial/researchRegistry.ts "Research Registry"
[4]: https://github.com/sidneysantossp/auditseo-agencias/blob/main/src/editorial/articles/entitySeoArticle.ts "Entity SEO article"
[5]: https://github.com/sidneysantossp/auditseo-agencias/blob/main/src/editorial/articles/entityHomeArticle.ts "Entity Home article"
[6]: https://github.com/sidneysantossp/auditseo-agencias/blob/main/src/editorial/articles/entityDisambiguationArticle.ts "Entity Disambiguation article"
[7]: https://github.com/sidneysantossp/auditseo-agencias/blob/main/src/editorial/articles/entityConsistencyArticle.ts "Entity Consistency article"
[8]: https://github.com/sidneysantossp/auditseo-agencias/blob/main/src/editorial/articles/entityCorroborationArticle.ts "Entity Corroboration article"
[9]: https://github.com/sidneysantossp/auditseo-agencias/blob/main/src/editorial/articles/aiInformationRetrievalArticle.ts "AI Search Information Retrieval article"
[10]: https://github.com/sidneysantossp/auditseo-agencias/blob/main/src/editorial/articles/aiCitationsAttributionArticle.ts "AI Search Citations and Attribution article"
[11]: https://github.com/sidneysantossp/auditseo-agencias/blob/main/src/editorial/articles/aiMeasurementArticle.ts "AI Search Measurement article"
[12]: https://github.com/sidneysantossp/auditseo-agencias/blob/main/src/App.tsx "SPA router and public route metadata"
[13]: https://github.com/sidneysantossp/auditseo-agencias/blob/main/src/components/research/ResearchItemPage.tsx "Public research item renderer"
[14]: https://github.com/sidneysantossp/auditseo-agencias/blob/main/src/components/SidneySantosPage.tsx "Public Entity Home"
