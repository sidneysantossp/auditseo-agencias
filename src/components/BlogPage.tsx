import { useState } from "react";
import { ArrowRight, Compass, MessageCircle, Search, ShieldCheck, Sparkles } from "lucide-react";
import SiteFooter from "./SiteFooter";

interface BlogPageProps {
  onNavigate: (targetId: string) => void;
}

const questionCards = [
  {
    question: "SEO ainda funciona?",
    text: "Conteúdos para reposicionar SEO além de tráfego e palavras-chave.",
    href: "#respostas-clientes",
  },
  {
    question: "Por que meu tráfego caiu?",
    text: "Como explicar quedas, updates, concorrência, intenção e autoridade.",
    href: "#biblioteca-estrategica",
  },
  {
    question: "Por que não apareço na IA?",
    text: "Como falar sobre GEO, AI Search e mecanismos de resposta sem prometer milagres.",
    href: "#geo-ia-blog",
  },
  {
    question: "Por que preciso continuar investindo?",
    text: "Argumentos para retenção, evolução orgânica e roadmap de próximos passos.",
    href: "#retencao-renovacao",
  },
  {
    question: "Meu concorrente aparece mais. Por quê?",
    text: "Como analisar autoridade, conteúdo, reputação e estrutura competitiva.",
    href: "#propostas-diagnostico",
  },
  {
    question: "Conteúdo ainda dá resultado?",
    text: "Como sair do volume e entrar em arquitetura de intenção e decisão.",
    href: "#biblioteca-estrategica",
  },
  {
    question: "Quando SEO começa a dar retorno?",
    text: "Como explicar maturidade, ciclos, sinais e evolução sem prometer prazo mágico.",
    href: "#retencao-renovacao",
  },
  {
    question: "O que minha marca precisa mudar?",
    text: "Conteúdos sobre diagnóstico, autoridade de entidade, GEO e dados estruturados.",
    href: "#propostas-diagnostico",
  },
];

const featuredCards = [
  {
    tag: "GEO & IA",
    title: "GEO não é aparecer no ChatGPT. É preparar a marca para ser compreendida.",
    text:
      "Uma leitura sobre como explicar a nova busca sem vender promessa exagerada, conectando IA, entidade, autoridade e contexto.",
    href: "/guias/geo-readiness",
  },
  {
    tag: "RETENÇÃO",
    title: "Quando o cliente pergunta “por que continuar investindo em SEO?”",
    text: "Como transformar relatórios, dados e próximos passos em argumento de continuidade e evolução orgânica.",
    href: "/solucoes#organic-evolution-cycle",
  },
  {
    tag: "AUTORIDADE",
    title: "Por que marcas high-ticket não vencem apenas com tráfego",
    text: "Como autoridade de entidade, reputação, narrativa e confiança influenciam decisões antes do clique.",
    href: "/guias/narrativa-semantica",
  },
];

const editorialTracks = [
  {
    id: "respostas-clientes",
    title: "Respostas para clientes",
    text: "Conteúdos para responder dúvidas difíceis sem improviso.",
    topics: ["SEO ainda funciona?", "Por que demora?", "Por que caiu?", "Por que meu concorrente aparece?"],
  },
  {
    id: "retencao-renovacao",
    title: "Retenção e renovação",
    text: "Como sustentar valor percebido, continuidade e próximos passos.",
    topics: ["justificar investimento", "defender roadmap", "mostrar evolução", "reduzir desgaste contratual"],
  },
  {
    id: "geo-ia-blog",
    title: "GEO, IA e nova busca",
    text: "Como falar sobre AI Search, GEO e IA sem hype.",
    topics: ["ChatGPT", "Gemini", "AI Overviews", "respostas generativas", "busca sem clique"],
  },
  {
    id: "autoridade-high-ticket",
    title: "Autoridade e high-ticket",
    text: "Como explicar autoridade de entidade, confiança e reputação em mercados de decisão qualificada.",
    topics: ["saúde", "jurídico", "B2B", "clínicas", "educação", "tecnologia"],
  },
  {
    id: "propostas-diagnostico",
    title: "Propostas e diagnóstico",
    text: "Como usar diagnóstico para abrir conversa, defender proposta e expandir escopo.",
    topics: ["diagnóstico estratégico", "proposta consultiva", "recuperação orgânica", "oportunidade de carteira"],
  },
  {
    id: "operacao-white-label",
    title: "Operação white-label",
    text: "Como ampliar profundidade estratégica sem criar estrutura interna complexa.",
    topics: ["bastidores", "governança", "retaguarda", "parceria white-label"],
  },
];

const articles = [
  {
    tag: "NOVA BUSCA",
    title: "A nova busca não começa no clique",
    text: "Por que parte da decisão acontece antes do acesso ao site e como isso muda a forma de explicar SEO para clientes.",
    readTime: "7 min",
    status: "Guia estratégico",
  },
  {
    tag: "GEO & IA",
    title: "GEO não é promessa de aparecer na IA",
    text: "Como agências podem tratar GEO como preparação estratégica, e não como promessa artificial de visibilidade.",
    readTime: "8 min",
    status: "Leitura essencial",
    href: "/guias/geo-readiness",
  },
  {
    tag: "RETENÇÃO",
    title: "Como responder quando o cliente pergunta por que continuar investindo em SEO",
    text: "Um framework para transformar evolução orgânica, roadmap e autoridade em argumento de continuidade.",
    readTime: "9 min",
    status: "Argumento comercial",
  },
  {
    tag: "TRÁFEGO",
    title: "O tráfego caiu. E agora?",
    text: "Como explicar queda orgânica sem reduzir tudo a algoritmo, olhando técnica, intenção, autoridade e concorrência.",
    readTime: "10 min",
    status: "Diagnóstico",
  },
  {
    tag: "CONTEÚDO",
    title: "Produzir mais conteúdo não significa ter mais estratégia",
    text: "Por que volume sem intenção, arquitetura e autoridade pode aumentar custo sem gerar valor.",
    readTime: "6 min",
    status: "Arquitetura",
  },
  {
    tag: "AUTORIDADE",
    title: "Autoridade de entidade: o que donos de agência precisam entender",
    text: "Como sinais de reputação, contexto e confiança impactam busca, IA e decisão.",
    readTime: "8 min",
    status: "Alta confiança",
    href: "/guias/narrativa-semantica",
  },
  {
    tag: "PROPOSTAS",
    title: "Como transformar diagnóstico orgânico em proposta estratégica",
    text: "O papel do diagnóstico como ferramenta para abrir conversa, defender escopo e orientar próximos passos.",
    readTime: "7 min",
    status: "Proposta",
    href: "/diagnostico",
  },
  {
    tag: "WHITE-LABEL",
    title: "Quando faz sentido ter uma retaguarda SEO/GEO nos bastidores da agência",
    text: "Como ampliar profundidade sem inflar equipe ou expor fornecedores ao cliente final.",
    readTime: "7 min",
    status: "Bastidores",
    href: "/white-label",
  },
  {
    tag: "HIGH-TICKET",
    title: "Por que mercados high-ticket exigem mais do que tráfego",
    text: "Como confiança, validação, autoridade e reputação sustentam decisões complexas.",
    readTime: "8 min",
    status: "Autoridade",
  },
  {
    tag: "IA",
    title: "Como responder quando o cliente pergunta se a empresa aparece no ChatGPT",
    text: "Uma abordagem segura para explicar IA, GEO, entidades e preparação sem prometer o que ninguém controla.",
    readTime: "6 min",
    status: "Resposta segura",
    href: "/geo-ia",
  },
];

const useCases = [
  {
    title: "Antes de uma proposta",
    text: "Use os conteúdos para organizar argumento, contexto e oportunidade.",
  },
  {
    title: "Antes de uma reunião de renovação",
    text: "Use os temas de retenção para explicar evolução e próximos passos.",
  },
  {
    title: "Quando o cliente perguntar sobre IA",
    text: "Use os conteúdos de GEO para responder com maturidade e sem hype.",
  },
  {
    title: "Quando a entrega parecer estagnada",
    text: "Use os artigos de diagnóstico e evolução para reposicionar a conversa.",
  },
];

const heroNodes = [
  { label: "Tráfego caiu", x: 20, y: 24 },
  { label: "SEO funciona?", x: 62, y: 15 },
  { label: "IA", x: 83, y: 42 },
  { label: "Conteúdo", x: 70, y: 75 },
  { label: "Autoridade", x: 33, y: 84 },
  { label: "Resultado", x: 12, y: 58 },
  { label: "Renovação", x: 48, y: 50 },
];

const filterTags = ["Todos", ...Array.from(new Set(articles.map((article) => article.tag)))];

function SectionHeader({
  eyebrow,
  title,
  text,
  dark = false,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  dark?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`${center ? "mx-auto items-center text-center" : "items-start"} flex max-w-4xl flex-col`}>
      {eyebrow ? <span className="font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-[#b28453]">{eyebrow}</span> : null}
      <h2 className={`mt-4 font-display text-4xl font-bold leading-[1.06] tracking-[-0.03em] md:text-5xl ${dark ? "text-[#11100f]" : "text-[#f8f8f8]"}`}>
        {title}
      </h2>
      {text ? <p className={`mt-6 text-lg leading-[1.7] ${dark ? "text-[#11100f]/70" : "text-[#f8f8f8]/70"}`}>{text}</p> : null}
    </div>
  );
}

function PrimaryButton({ children, onClick }: { children: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#b28453] px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e0d3c3] hover:text-[#11100f]"
    >
      {children}
      <ArrowRight size={16} />
    </button>
  );
}

function SecondaryLink({ children, href }: { children: string; href: string }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-full border border-[#b28453]/45 px-7 py-4 text-sm font-bold text-[#f8f8f8] transition-colors hover:bg-[#b28453]/10 hover:text-[#b28453]"
    >
      {children}
    </a>
  );
}

function HeroConstellation() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(178,132,83,0.18),transparent_58%)] blur-xl" />
      <svg className="absolute inset-0 h-full w-full opacity-70" viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          <linearGradient id="blogHeroLine" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#b28453" stopOpacity="0.05" />
            <stop offset="55%" stopColor="#e0d3c3" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#b28453" stopOpacity="0.08" />
          </linearGradient>
        </defs>
        {heroNodes.map((node, index) =>
          index < heroNodes.length - 1 ? (
            <line
              key={`${node.label}-${heroNodes[index + 1].label}`}
              x1={node.x}
              y1={node.y}
              x2={heroNodes[index + 1].x}
              y2={heroNodes[index + 1].y}
              stroke="url(#blogHeroLine)"
              strokeWidth="0.45"
            />
          ) : null
        )}
      </svg>

      <div className="absolute left-1/2 top-1/2 z-20 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#b28453]/36 bg-[#11100f]/88 text-center shadow-[0_0_70px_rgba(178,132,83,0.20)] backdrop-blur">
        <span className="max-w-[112px] font-display text-lg font-bold leading-[1.08] text-[#e0d3c3]">PERGUNTAS DO CLIENTE</span>
      </div>

      {heroNodes.map((node, index) => (
        <div
          key={node.label}
          className="absolute z-30 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#b28453]/30 bg-[#171614]/86 px-4 py-2 text-xs font-bold text-[#f8f8f8] shadow-[0_18px_45px_rgba(0,0,0,0.32)] backdrop-blur-sm"
          style={{ left: `${node.x}%`, top: `${node.y}%`, animation: `blogNodeFloat ${8 + index}s ease-in-out infinite`, animationDelay: `${index * 0.28}s` }}
        >
          {node.label}
        </div>
      ))}

      {Array.from({ length: 18 }).map((_, index) => (
        <span
          key={index}
          className="absolute h-1 w-1 rounded-full bg-[#e0d3c3]/50"
          style={{
            left: `${8 + ((index * 23) % 84)}%`,
            top: `${10 + ((index * 31) % 80)}%`,
            opacity: 0.18 + (index % 5) * 0.08,
          }}
        />
      ))}
    </div>
  );
}

export default function BlogPage({ onNavigate }: BlogPageProps) {
  const [activeTag, setActiveTag] = useState("Todos");
  const filteredArticles = activeTag === "Todos" ? articles : articles.filter((article) => article.tag === activeTag);

  return (
    <main className="bg-[#11100f] text-[#f8f8f8]">
      <section className="relative flex min-h-[92vh] items-center overflow-hidden px-6 pb-16 pt-[116px] md:pb-20 md:pt-[136px] xl:px-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_36%,rgba(178,132,83,0.16),transparent_34%),radial-gradient(circle_at_20%_20%,rgba(224,211,195,0.06),transparent_28%)]" />
        <div className="relative mx-auto grid w-full max-w-[1360px] items-center gap-14 lg:grid-cols-[1fr_0.92fr]">
          <div>
            <span className="font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-[#b28453]">BLOG AUDITSEO PARA AGÊNCIAS</span>
            <h1 className="mt-6 max-w-[840px] font-display text-[clamp(48px,5.4vw,82px)] font-bold leading-[1.02] tracking-[-0.045em] text-[#f8f8f8]">
              Conteúdos para agências que precisam responder melhor sobre SEO, IA e resultados
            </h1>
            <p className="mt-8 max-w-[760px] text-[clamp(18px,1.35vw,22px)] leading-[1.58] text-[#f8f8f8]/76">
              Artigos, guias e análises para ajudar donos de agências a responderem perguntas difíceis dos clientes, defenderem propostas, sustentarem retenção e transformarem a nova busca em valor estratégico.
            </p>
            <p className="mt-6 max-w-[700px] text-base leading-[1.7] text-[#e0d3c3]/78">
              Não escrevemos para quem quer aprender SEO básico. Escrevemos para quem precisa explicar, vender, defender e evoluir entregas orgânicas diante de clientes cada vez mais exigentes.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <PrimaryButton onClick={() => document.getElementById("biblioteca-estrategica")?.scrollIntoView({ behavior: "smooth" })}>
                Explorar conteúdos
              </PrimaryButton>
              <SecondaryLink href="/guias">Ver guias técnicos</SecondaryLink>
            </div>
            <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.1em] text-[#f8f8f8]/46">
              SEO · GEO · IA · Retenção · Autoridade · Search Intelligence
            </p>
          </div>

          <HeroConstellation />
        </div>
      </section>

      <section className="bg-[#11100f] px-6 py-24 md:py-32 xl:px-12">
        <div className="mx-auto max-w-[1080px] text-center">
          <span className="font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-[#b28453]">LINHA EDITORIAL</span>
          <h2 className="mt-5 font-display text-4xl font-bold leading-[1.08] tracking-[-0.03em] text-[#f8f8f8] md:text-6xl">
            O cliente não cobra apenas SEO. Ele cobra <span className="text-[#b28453]">clareza</span>, <span className="text-[#b28453]">direção</span> e resposta.
          </h2>
          <div className="mx-auto mt-9 max-w-4xl space-y-6 text-lg leading-[1.8] text-[#f8f8f8]/72">
            <p>
              Todo dono de agência já ouviu <span className="text-[#b28453]">perguntas difíceis</span>: por que o tráfego caiu, por que o SEO demora, por que o concorrente aparece mais, por que a IA não cita a marca, por que continuar investindo se o resultado não é imediato.
            </p>
            <p>A AUDITSEO escreve para esse momento.</p>
            <p>
              O blog existe para transformar dúvidas difíceis em <span className="text-[#b28453]">argumentos estratégicos</span>, ajudando agências a explicarem a <span className="text-[#b28453]">nova busca</span> com mais <span className="text-[#b28453]">segurança</span>, profundidade e <span className="text-[#b28453]">valor percebido</span>.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#e0d3c3] px-6 py-24 text-[#11100f] md:py-32 xl:px-12">
        <div className="mx-auto max-w-[1240px]">
          <SectionHeader
            dark
            eyebrow="Central de decisão"
            title="Que pergunta seu cliente fez hoje?"
            text="Acesse conteúdos organizados pelas dúvidas que mais chegam para donos de agências."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {questionCards.map((card) => (
              <a
                key={card.question}
                href={card.href}
                className="group rounded-[20px] border border-[#11100f]/10 bg-[#11100f] p-6 text-[#f8f8f8] shadow-[0_24px_70px_rgba(17,16,15,0.16)] transition-all hover:-translate-y-1 hover:border-[#b28453]/60"
              >
                <MessageCircle className="h-5 w-5 text-[#b28453]" />
                <h3 className="mt-5 font-display text-xl font-bold leading-tight">{card.question}</h3>
                <p className="mt-4 text-sm leading-[1.7] text-[#f8f8f8]/66">{card.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#11100f] px-6 py-24 md:py-32 xl:px-12">
        <div className="mx-auto max-w-[1240px]">
          <SectionHeader
            eyebrow="Conteúdos em destaque"
            title="Leituras essenciais para a nova conversa entre agência e cliente"
            text="Conteúdos que ajudam sua agência a transformar dúvidas sobre SEO, IA e resultados em conversas mais estratégicas."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {featuredCards.map((card) => (
              <a
                key={card.title}
                href={card.href}
                className="rounded-[26px] border border-[#b28453]/22 bg-[linear-gradient(145deg,rgba(31,30,28,0.96),rgba(13,13,12,0.98))] p-7 shadow-[0_28px_80px_rgba(0,0,0,0.34)] transition-all hover:-translate-y-1 hover:border-[#b28453]/58"
              >
                <span className="rounded-full border border-[#b28453]/28 bg-[#b28453]/10 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-[#b28453]">{card.tag}</span>
                <h3 className="mt-7 font-display text-3xl font-bold leading-[1.08] tracking-[-0.02em] text-[#f8f8f8]">{card.title}</h3>
                <p className="mt-5 text-sm leading-[1.7] text-[#f8f8f8]/68">{card.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e0d3c3] px-6 py-24 text-[#11100f] md:py-32 xl:px-12">
        <div className="mx-auto max-w-[1240px]">
          <SectionHeader
            dark
            eyebrow="Trilhas editoriais"
            title="Trilhas editoriais para diferentes desafios da agência"
            text="Cada trilha foi pensada para uma dor recorrente do dono de agência."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {editorialTracks.map((track, index) => (
              <article
                key={track.title}
                id={track.id}
                className="scroll-mt-28 rounded-[24px] border border-[#11100f]/10 bg-[#11100f] p-7 text-[#f8f8f8] shadow-[0_24px_70px_rgba(17,16,15,0.16)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#b28453]/40 bg-[#b28453]/10 font-mono text-sm font-bold text-[#e0d3c3]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold leading-tight">{track.title}</h3>
                <p className="mt-4 text-sm leading-[1.7] text-[#f8f8f8]/66">{track.text}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {track.topics.map((topic) => (
                    <span key={topic} className="rounded-full border border-[#b28453]/20 bg-[#b28453]/10 px-3 py-1.5 text-[11px] font-semibold text-[#e0d3c3]/86">
                      {topic}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="biblioteca-estrategica" className="scroll-mt-28 bg-[#11100f] px-6 py-24 md:py-32 xl:px-12">
        <div className="mx-auto max-w-[1240px]">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeader
              eyebrow="Biblioteca estratégica"
              title="Biblioteca estratégica"
              text="Artigos planejados para responder às principais tensões entre agência, cliente e nova busca."
            />
            <div className="flex max-w-2xl flex-wrap gap-2">
              {filterTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] transition-colors ${
                    activeTag === tag
                      ? "border-[#b28453] bg-[#b28453] text-white"
                      : "border-[#b28453]/22 bg-[#171614] text-[#f8f8f8]/62 hover:border-[#b28453]/60 hover:text-[#b28453]"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {filteredArticles.map((article) => {
              const content = (
                <>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-[#b28453]/12 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-[#b28453]">{article.tag}</span>
                    <span className="text-xs font-semibold text-[#f8f8f8]/42">{article.readTime}</span>
                    <span className="text-xs font-semibold text-[#e0d3c3]/58">{article.status}</span>
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold leading-[1.14] text-[#f8f8f8]">{article.title}</h3>
                  <p className="mt-4 text-sm leading-[1.7] text-[#f8f8f8]/66">{article.text}</p>
                </>
              );

              return article.href ? (
                <a
                  key={article.title}
                  href={article.href}
                  className="rounded-[22px] border border-[#b28453]/18 bg-[#171614] p-6 transition-all hover:-translate-y-1 hover:border-[#b28453]/52 hover:bg-[#1d1b18]"
                >
                  {content}
                </a>
              ) : (
                <article key={article.title} className="rounded-[22px] border border-[#b28453]/18 bg-[#171614] p-6">
                  {content}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#e0d3c3] px-6 py-24 text-[#11100f] md:py-32 xl:px-12">
        <div className="mx-auto max-w-[1240px]">
          <SectionHeader
            dark
            eyebrow="Uso comercial"
            title="Conteúdos para ler, usar e transformar em conversa"
            text="O blog da AUDITSEO foi pensado para apoiar a agência em situações reais de negócio."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {useCases.map((item, index) => (
              <article key={item.title} className="rounded-[22px] border border-[#11100f]/10 bg-[#11100f] p-6 text-[#f8f8f8]">
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full bg-[#b28453]/12 text-[#b28453]">
                  {index === 0 ? <Compass size={20} /> : index === 1 ? <ShieldCheck size={20} /> : index === 2 ? <Sparkles size={20} /> : <Search size={20} />}
                </div>
                <h3 className="font-display text-xl font-bold">{item.title}</h3>
                <p className="mt-4 text-sm leading-[1.7] text-[#f8f8f8]/66">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#11100f] px-6 py-24 md:py-32 xl:px-12">
        <div className="mx-auto max-w-[1040px] rounded-[28px] border border-[#b28453]/28 bg-[linear-gradient(145deg,rgba(31,30,28,0.96),rgba(13,13,12,0.98))] p-8 text-center shadow-[0_30px_90px_rgba(0,0,0,0.36)] md:p-12">
          <span className="font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-[#b28453]">PARA AGÊNCIAS</span>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.08] tracking-[-0.025em] text-[#f8f8f8] md:text-5xl">
            Quer transformar essas ideias em entrega real para seus clientes?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-[1.7] text-[#f8f8f8]/68">
            A AUDITSEO atua nos bastidores da sua agência para estruturar SEO, GEO, autoridade e inteligência de busca como solução white-label.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <PrimaryButton onClick={() => onNavigate("diagnostico")}>Avaliar parceria estratégica</PrimaryButton>
            <SecondaryLink href="/metodo-signal">Conhecer o Método S.I.G.N.A.L</SecondaryLink>
          </div>
          <p className="mx-auto mt-7 max-w-xl text-xs leading-relaxed text-[#f8f8f8]/44">
            A primeira conversa é para entender sua agência, sua carteira e onde existe oportunidade orgânica.
          </p>
        </div>
      </section>

      <SiteFooter onNavigate={onNavigate} />
    </main>
  );
}
