import { useEffect, type ReactNode } from "react";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  CircleDot,
  Compass,
  Layers3,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import SiteFooter from "./SiteFooter";

interface GeoIaPageProps {
  onNavigate: (targetId: string) => void;
}

const heroSignals = [
  { label: "Entidade", x: 27, y: 18 },
  { label: "Contexto", x: 69, y: 16 },
  { label: "Autoridade", x: 86, y: 42 },
  { label: "Conteúdo", x: 78, y: 74 },
  { label: "Schema", x: 50, y: 86 },
  { label: "Reputação", x: 20, y: 72 },
  { label: "Intenção", x: 13, y: 42 },
];

const searchChanges = [
  {
    before: "posição",
    now: "interpretação",
    text: "Não basta estar indexado. A marca precisa ser compreendida com clareza pelos sistemas de busca e resposta.",
  },
  {
    before: "palavra-chave",
    now: "entidade e contexto",
    text: "O conteúdo precisa deixar claro quem é a marca, o que ela oferece, para quem é relevante e por que deve ser considerada.",
  },
  {
    before: "tráfego",
    now: "consideração",
    text: "Parte da decisão pode acontecer antes do clique, em respostas, resumos, comparações, avaliações e sinais externos.",
  },
  {
    before: "conteúdo isolado",
    now: "ecossistema de sinais",
    text: "Site, dados estruturados, reputação, menções, autoridade, páginas e conteúdo precisam contar a mesma história.",
  },
];

const geoSignals = [
  ["Clareza de entidade", "Quem é a marca, o que faz, onde atua, para quem serve e qual problema resolve."],
  ["Conteúdo explicativo", "Páginas e conteúdos que respondem perguntas reais com profundidade, contexto e consistência."],
  ["Dados estruturados", "Schema Markup coerente com o conteúdo visível e com a realidade da marca."],
  ["Autoridade temática", "Consistência entre páginas, conteúdos, serviços, especialistas, provas e reputação."],
  ["Presença pública", "Menções, avaliações, perfis, diretórios, backlinks e consistência entre canais."],
  ["Perguntas e respostas estratégicas", "Conteúdo que antecipa dúvidas, objeções e critérios de decisão do cliente."],
];

const agencyReasons = [
  ["Responder ao hype com método", "Sua agência ganha uma forma madura de falar sobre IA sem prometer milagres."],
  ["Transformar curiosidade em proposta", "Perguntas sobre ChatGPT, Gemini e AI Overviews viram abertura para uma conversa estratégica."],
  ["Reposicionar SEO", "SEO deixa de ser apenas tráfego e passa a ser inteligência de presença, autoridade e decisão."],
  ["Aumentar valor percebido", "O cliente enxerga uma entrega conectada ao futuro da busca, não apenas tarefas técnicas."],
];

const clientQuestions = [
  "Minha empresa aparece no ChatGPT?",
  "Como faço minha marca ser citada por IA?",
  "O Google ainda vai gerar tráfego?",
  "Conteúdo ainda funciona?",
  "O que é AI Overview?",
  "Meu concorrente está sendo recomendado?",
  "Meu site está preparado para a nova busca?",
  "O que preciso mudar para ser mais confiável?",
];

const interpretationLayers = [
  ["Entidade", "Quem é a marca e qual é seu contexto."],
  ["Oferta", "O que ela entrega, para quem e com quais diferenciais."],
  ["Autoridade", "Que sinais mostram que ela sabe do assunto."],
  ["Confiança", "Quais provas, avaliações, menções e reputação sustentam sua credibilidade."],
  ["Estrutura", "Como o site organiza conteúdo, dados, páginas e informações."],
  ["Consistência", "Se site, perfis, menções e conteúdos comunicam a mesma realidade."],
];

const backstageSteps = [
  ["Leitura da presença atual", "Avaliamos como a marca está estruturada hoje em site, conteúdo, autoridade, dados e reputação."],
  ["Mapeamento de entidades e contexto", "Organizamos quem é a marca, quais temas domina, quais serviços oferece e como deve ser compreendida."],
  ["Diagnóstico de clareza de contexto", "Identificamos lacunas que dificultam a interpretação da marca em mecanismos de busca e resposta modernos."],
  ["Plano de arquitetura de sinais", "Priorizamos ações em conteúdo, dados estruturados, páginas, autoridade e consistência pública para ecossistemas generativos."],
  ["Evolução e monitoramento", "Acompanhamos mudanças, aprendizados e oportunidades para ajustar a estratégia ao longo do tempo."],
];

const geoScenarios = [
  ["Cliente perguntando sobre IA", "Quando a empresa quer entender como ChatGPT, Gemini ou AI Overviews podem impactar sua visibilidade."],
  ["Mercado high-ticket", "Quando a decisão depende de confiança, validação, autoridade e reputação antes da compra."],
  ["Marca com baixa clareza", "Quando o site não explica bem quem é a empresa, o que oferece, onde atua e por que é confiável."],
  ["Conteúdo sem autoridade", "Quando há volume de artigos, mas pouca profundidade, consistência e validação temática."],
  ["Concorrentes mais fortes", "Quando outras marcas dominam respostas, conteúdos, avaliações, menções e presença pública."],
  ["Empresa em reposicionamento", "Quando o negócio está mudando oferta, público, mercado ou narrativa e precisa reorganizar sinais."],
];

const agencyOffers = [
  ["Diagnóstico de presença na nova busca", "Avaliar como a marca está sendo compreendida em ambientes tradicionais e generativos."],
  ["Generative Search Architecture", "Ajustar site, conteúdo, dados e autoridade para fornecer clareza de contexto a sistemas de resposta."],
  ["Autoridade de entidade", "Organizar reputação, narrativa, provas, menções, estrutura e consistência pública."],
  ["Arquitetura de conteúdo baseada em contexto", "Criar conteúdos explicativos, páginas estratégicas e respostas que fortalecem clareza e autoridade."],
  ["Roadmap de evolução 90 dias", "Transformar o diagnóstico em plano de ação com prioridades claras."],
];

const governanceCards = [
  ["Sem promessas absolutas", "Não vendemos aparição garantida em ChatGPT, Gemini ou AI Overviews."],
  ["Com critério técnico", "Dados estruturados, conteúdo, autoridade e contexto precisam refletir a realidade da marca."],
  ["Com governança humana", "Tecnologia pode acelerar análise e organização, mas a estratégia passa por validação especializada."],
];

const notPromised = [
  "aparecer garantido no ChatGPT",
  "aparecer garantido no Gemini",
  "AI Overviews garantido",
  "ranking garantido",
  "tráfego imediato",
  "autoridade criada apenas com schema",
  "IA substituindo estratégia",
  "conteúdo automático sem critério",
];

const structuredSignals = [
  "clareza de entidade",
  "contexto semântico",
  "autoridade temática",
  "dados estruturados",
  "conteúdo explicativo",
  "reputação e sinais públicos",
  "roadmap de evolução",
  "diagnóstico white-label",
  "governança estratégica",
];

export default function GeoIaPage({ onNavigate }: GeoIaPageProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.pageSchema = "geo-ia";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          name: "Generative Search Architecture para Agências | AUDITSEO",
          url: `${window.location.origin}/geo-ia`,
          description:
            "Arquitetura de contexto e sinais para agências: estruture marcas para a nova busca com autoridade de entidade, dados estruturados e governança estratégica.",
        },
        {
          "@type": "Service",
          name: "Generative Search Architecture white-label para agências",
          provider: { "@type": "Organization", name: "AUDITSEO" },
          serviceType: "Search Intelligence e autoridade de entidade",
        },
        {
          "@type": "ItemList",
          name: "Camadas de interpretação para nova busca",
          itemListElement: interpretationLayers.map(([name, description], index) => ({
            "@type": "ListItem",
            position: index + 1,
            name,
            description,
          })),
        },
      ],
    });
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  const scrollToNewSearch = () => {
    const target = document.getElementById("nova-busca");
    if (!target) return;
    window.scrollTo({ top: target.offsetTop - 82, behavior: "smooth" });
  };

  return (
    <main className="bg-[#11100f] text-[#f8f8f8]">
      <style>{`
        @keyframes geoNodeFloat {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -9px, 0); }
        }

        @keyframes geoCorePulse {
          0%, 100% { opacity: 0.9; filter: drop-shadow(0 0 26px rgba(178,132,83,0.24)); }
          50% { opacity: 1; filter: drop-shadow(0 0 44px rgba(178,132,83,0.42)); }
        }

        @keyframes geoParticle {
          0%, 100% { opacity: 0.12; transform: translate3d(0, 0, 0); }
          50% { opacity: 0.42; transform: translate3d(7px, -10px, 0); }
        }

        @keyframes geoLine {
          from { stroke-dashoffset: 120; }
          to { stroke-dashoffset: 0; }
        }
      `}</style>

      <section id="geo-ia" className="relative flex min-h-[92vh] items-center overflow-hidden pb-16 pt-[112px] md:pb-20 md:pt-[128px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_35%,rgba(178,132,83,0.17),transparent_35%),linear-gradient(135deg,rgba(224,211,195,0.045),transparent_44%)]" />
        <div className="container relative z-10 mx-auto max-w-[1320px] px-6 xl:px-12">
          <div className="grid items-center gap-14 lg:grid-cols-12 xl:gap-16">
            <div className="lg:col-span-6">
              <span className="mb-5 inline-block font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-[#b28453]">
                GENERATIVE SEARCH ARCHITECTURE
              </span>
              <h1 className="max-w-[780px] font-display text-[clamp(54px,5.4vw,82px)] font-bold leading-[1.02] tracking-[-0.045em] text-[#f8f8f8]">
                Arquitetura de contexto para a nova era da busca
              </h1>
              <p className="mt-8 max-w-[720px] text-[clamp(18px,1.35vw,22px)] leading-[1.55] text-[rgba(248,248,248,0.76)]">
                A AUDITSEO ajuda sua agência a transformar autoridade de entidade e inteligência de busca em uma entrega white-label, estratégica e responsável para sistemas de busca e resposta.
              </p>
              <p className="mt-[22px] max-w-[640px] text-[16px] leading-[1.5] text-[#e0d3c3]/[0.78]">
                Não prometemos “aparecer na IA”. Estruturamos os sinais que tornam marcas mais claras, confiáveis e interpretáveis em ecossistemas generativos.
              </p>
              <div className="mt-11 flex flex-col gap-4 sm:flex-row">
                <PrimaryButton onClick={() => onNavigate("diagnostico")}>Avaliar parceria estratégica</PrimaryButton>
                <button
                  onClick={scrollToNewSearch}
                  className="rounded-full border border-[#b28453]/45 px-7 py-4 text-sm font-bold text-[#f8f8f8] transition-colors hover:bg-[#b28453]/10"
                >
                  Entender a nova busca
                </button>
              </div>
              <p className="mt-9 font-mono text-[11px] uppercase tracking-[0.08em] text-[#8c8275]">
                AI Search · Autoridade de Entidade · Dados Estruturados · Search Intelligence
              </p>
            </div>
            <div className="lg:col-span-6">
              <GeoHeroVisual />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#11100f] py-24 md:py-32">
        <div className="container mx-auto max-w-[1120px] px-6 text-center xl:px-12">
          <span className="font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-[#b28453]">VISÃO AUDITSEO</span>
          <h2 className="mx-auto mt-5 max-w-5xl font-display text-[36px] font-bold leading-[1.08] tracking-[-0.03em] text-[#f8f8f8] md:text-[54px]">
            A IA não eliminou a busca. Ela aumentou a exigência por{" "}
            <span className="text-[#b28453]">clareza</span>, <span className="text-[#b28453]">autoridade</span> e{" "}
            <span className="text-[#b28453]">contexto</span>.
          </h2>
          <div className="mx-auto mt-10 grid max-w-4xl gap-7 text-lg leading-[1.75] text-[#f8f8f8]/70 md:text-xl">
            <p>
              Durante anos, muitas marcas trataram SEO como disputa por posições, palavras-chave e tráfego. Essa base continua importante, mas já não explica toda a jornada de descoberta e decisão.
            </p>
            <p>
              Na nova busca, marcas precisam ser compreendidas por sistemas que conectam{" "}
              <span className="text-[#b28453]">entidades</span>, <span className="text-[#b28453]">reputação</span>,{" "}
              <span className="text-[#b28453]">conteúdo</span>, <span className="text-[#b28453]">dados</span> e contexto antes de gerar uma resposta ou influenciar uma escolha.
            </p>
            <p className="font-display text-2xl font-bold leading-[1.4] text-[#e0d3c3]">
              A arquitetura de contexto não substitui a estratégia. Ela exige uma estratégia mais organizada.
            </p>
          </div>
        </div>
      </section>

      <section id="nova-busca" className="bg-[#e0d3c3] py-24 text-[#11100f] md:py-32">
        <div className="container mx-auto max-w-[1240px] px-6 xl:px-12">
          <SectionHeader
            dark
            center
            eyebrow="Nova busca"
            title="O que mudou não foi apenas o canal. Foi a forma como a decisão é construída."
            text="A busca deixou de ser apenas uma página de resultados e passou a envolver respostas, resumos, recomendações, comparações e validações distribuídas."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {searchChanges.map((item, index) => (
              <article key={item.now} className="min-h-[285px] rounded-[24px] border border-[#11100f]/12 bg-[#f8f8f8]/42 p-7 shadow-[0_20px_70px_rgba(17,16,15,0.10)]">
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#6d5132]">
                  0{index + 1}
                </span>
                <div className="mt-7 space-y-5">
                  <div>
                    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#11100f]/45">Antes</p>
                    <h3 className="mt-1 font-display text-2xl font-bold leading-[1.12]">{item.before}</h3>
                  </div>
                  <div className="h-px bg-gradient-to-r from-[#b28453] to-transparent" />
                  <div>
                    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#6d5132]">Agora</p>
                    <h3 className="mt-1 font-display text-2xl font-bold leading-[1.12]">{item.now}</h3>
                  </div>
                  <p className="text-sm leading-[1.6] text-[#11100f]/65">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#11100f] py-24 md:py-32">
        <div className="container mx-auto max-w-[1240px] px-6 xl:px-12">
          <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Pilares técnicos"
                title="Os novos sinais da inteligência de busca"
                text="Onde a AUDITSEO atua para organizar a presença digital da marca para ecossistemas modernos."
              />
              <div className="mt-12 grid gap-5">
                {geoSignals.map(([title, text]) => (
                  <div key={title} className="group flex items-start gap-5 rounded-2xl border border-[#b28453]/15 bg-white/[0.02] p-6 transition-colors hover:bg-white/[0.04]">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#b28453]/35 text-[#b28453]">
                      <CheckCircle2 size={14} />
                    </div>
                    <div>
                      <h4 className="text-[17px] font-bold text-[#f8f8f8]">{title}</h4>
                      <p className="mt-2 text-sm leading-[1.6] text-[#f8f8f8]/55">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="rounded-[40px] border border-[#b28453]/25 bg-[linear-gradient(145deg,rgba(31,30,28,0.98),rgba(13,13,12,0.99))] p-8 md:p-14 shadow-2xl">
                <span className="font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-[#b28453]">Interpretação</span>
                <h3 className="mt-6 font-display text-[32px] font-bold leading-[1.1] text-[#f8f8f8] md:text-[44px]">
                  Como marcas são compreendidas
                </h3>
                <p className="mt-6 text-lg leading-[1.7] text-[#f8f8f8]/60">
                  Sistemas modernos de busca e resposta não apenas indexam palavras. Eles tentam construir uma representação de confiança sobre a entidade.
                </p>
                <div className="mt-12 grid gap-8 sm:grid-cols-2">
                  {interpretationLayers.map(([title, text]) => (
                    <div key={title}>
                      <h4 className="font-display text-xl font-bold text-[#f8f8f8]">{title}</h4>
                      <p className="mt-3 text-sm leading-[1.6] text-[#f8f8f8]/45">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#e0d3c3] py-24 text-[#11100f] md:py-32">
        <div className="container mx-auto max-w-[1120px] px-6 xl:px-12">
          <div className="text-center">
            <SectionHeader
              dark
              center
              eyebrow="Parceria estratégica"
              title="Por que sua agência precisa dessa entrega"
              text="Muitas marcas já estão cobrando por IA e nova busca. A AUDITSEO fornece a base técnica e estratégica para você responder com método."
            />
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {agencyReasons.map(([title, text]) => (
              <div key={title} className="rounded-3xl border border-[#11100f]/10 bg-white/35 p-8 md:p-10">
                <h4 className="font-display text-2xl font-bold leading-[1.15]">{title}</h4>
                <p className="mt-4 text-base leading-[1.65] text-[#11100f]/65">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#11100f] py-24 md:py-32">
        <div className="container mx-auto max-w-[1240px] px-6 xl:px-12">
          <div className="flex flex-col gap-14 lg:flex-row lg:items-center">
            <div className="lg:w-1/2">
              <SectionHeader
                eyebrow="Nos bastidores"
                title="Como estruturamos a arquitetura de sinais"
                text="Um processo focado em transformar a presença digital em um ecossistema interpretável e confiável."
              />
              <div className="mt-12 space-y-10">
                {backstageSteps.map(([title, text], index) => (
                  <div key={title} className="relative flex gap-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#b28453] font-mono text-sm font-bold text-white">
                      {index + 1}
                    </div>
                    {index < backstageSteps.length - 1 && (
                      <div className="absolute left-5 top-10 h-[calc(100%+40px)] w-px bg-gradient-to-b from-[#b28453] to-transparent" />
                    )}
                    <div>
                      <h4 className="text-xl font-bold text-[#f8f8f8]">{title}</h4>
                      <p className="mt-2 text-sm leading-[1.65] text-[#f8f8f8]/50">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="rounded-[40px] border border-[#b28453]/20 bg-white/[0.02] p-8 md:p-12">
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#b28453]">Apoio White-Label</span>
                <h3 className="mt-6 font-display text-3xl font-bold leading-[1.1] text-[#f8f8f8]">
                  Soluções para sua agência
                </h3>
                <div className="mt-10 grid gap-4">
                  {agencyOffers.map(([title, text]) => (
                    <div key={title} className="rounded-2xl border border-white/5 bg-white/[0.03] p-6 transition-colors hover:border-[#b28453]/30">
                      <h4 className="font-bold text-[#f8f8f8]">{title}</h4>
                      <p className="mt-2 text-sm leading-[1.6] text-[#f8f8f8]/45">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#e0d3c3] py-24 text-[#11100f] md:py-32">
        <div className="container mx-auto max-w-[1240px] px-6 xl:px-12">
          <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <SectionHeader
                dark
                eyebrow="Governança"
                title="Inteligência sem falsas promessas"
                text="O ecossistema de busca está mudando rápido. Nosso papel é fornecer governança de sinais, não promessas inalcançáveis."
              />
              <div className="mt-12 grid gap-6 sm:grid-cols-2">
                {governanceCards.map(([title, text]) => (
                  <div key={title} className="rounded-2xl border border-[#11100f]/10 bg-[#f8f8f8]/45 p-7">
                    <ShieldCheck className="h-7 w-7 text-[#b28453]" />
                    <h4 className="mt-5 font-bold">{title}</h4>
                    <p className="mt-3 text-sm leading-[1.6] text-[#11100f]/60">{text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="rounded-[40px] bg-[#11100f] p-8 md:p-14 text-white shadow-2xl">
                <h3 className="font-display text-2xl font-bold leading-[1.2] md:text-3xl">
                  O que <span className="text-[#b28453]">não</span> entregamos
                </h3>
                <div className="mt-10 grid gap-y-5 sm:grid-cols-2 sm:gap-x-8">
                  {notPromised.map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm text-[#f8f8f8]/60">
                      <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#b28453]" />
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-14 border-t border-white/10 pt-10">
                  <p className="text-lg leading-[1.6] text-[#f8f8f8]/80">
                    Nossa entrega é baseada em <span className="text-[#b28453] font-bold">evidências</span>, governança e arquitetura técnica de sinais.
                  </p>
                  <PrimaryButton onClick={() => onNavigate("diagnostico")} className="mt-8">
                    Avaliar cenário da carteira
                  </PrimaryButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter onNavigate={onNavigate} />
    </main>
  );
}

function PrimaryButton({ children, onClick, className = "" }: { children: ReactNode; onClick?: () => void; className?: string }) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#b28453] px-8 py-4 text-sm font-bold text-white transition-all hover:bg-[#e0d3c3] hover:text-[#11100f] ${className}`}
    >
      {children}
      <ArrowRight size={18} />
    </button>
  );
}

function GeoHeroVisual() {
  return (
    <div className="relative aspect-square w-full max-w-[540px]">
      <div className="absolute inset-0 animate-[geoCorePulse_4s_ease-in-out_infinite] rounded-full bg-[#b28453]/10 blur-3xl" />
      <svg viewBox="0 0 100 100" className="relative h-full w-full overflow-visible drop-shadow-[0_0_20px_rgba(178,132,83,0.15)]">
        {heroSignals.map((node, i) => (
          <g key={i} className="animate-[geoNodeFloat_6s_ease-in-out_infinite]" style={{ animationDelay: `${i * 0.8}s` }}>
            <circle cx={node.x} cy={node.y} r="1.5" fill="#b28453" className="opacity-40" />
            <text x={node.x} y={node.y - 4} textAnchor="middle" className="font-mono text-[2.8px] font-bold uppercase tracking-widest fill-[#b28453] opacity-70">
              {node.label}
            </text>
            {heroSignals.map((target, j) =>
              i < j ? (
                <line
                  key={`${i}-${j}`}
                  x1={node.x}
                  y1={node.y}
                  x2={target.x}
                  y2={target.y}
                  stroke="#b28453"
                  strokeWidth="0.15"
                  strokeDasharray="1 2"
                  className="opacity-20"
                />
              ) : null
            )}
          </g>
        ))}
        <circle cx="50" cy="50" r="12" className="animate-[geoCorePulse_3s_ease-in-out_infinite] fill-[#b28453]/5 stroke-[#b28453]/30" strokeWidth="0.5" />
        <Sparkles x="44" y="44" size={12} className="text-[#b28453] opacity-60" />
      </svg>
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  text,
  dark = false,
  center = false,
}: {
  eyebrow: string;
  title: string;
  text: string;
  dark?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`${center ? "text-center mx-auto" : ""} max-w-4xl`}>
      <span className="font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-[#b28453]">{eyebrow}</span>
      <h2 className={`mt-5 font-display text-[36px] font-bold leading-[1.08] tracking-[-0.03em] ${dark ? "text-[#11100f]" : "text-[#f8f8f8]"} md:text-[54px]`}>
        {title}
      </h2>
      <p className={`mt-6 text-base leading-[1.75] ${dark ? "text-[#11100f]/66" : "text-[#f8f8f8]/66"} md:text-lg`}>{text}</p>
    </div>
  );
}
