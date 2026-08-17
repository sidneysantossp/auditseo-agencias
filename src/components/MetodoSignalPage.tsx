import { useEffect } from "react";
import {
  ArrowRight,
  CheckCircle2,
  CircleDot,
  ClipboardList,
  Compass,
  FileText,
  Layers3,
  LineChart,
  Network,
  Search,
  ShieldCheck,
  Sparkles,
  XCircle,
} from "lucide-react";
import SiteFooter from "./SiteFooter";

interface MetodoSignalPageProps {
  onNavigate: (targetId: string) => void;
}

const signalLayers = [
  {
    letter: "S",
    name: "Search Diagnosis",
    short: "Leitura real do cenário orgânico antes de qualquer ação.",
    question: "Onde a marca está hoje — e quais sinais impedem crescimento, clareza ou confiança?",
    explanation:
      "Antes de recomendar qualquer ação, o S.I.G.N.A.L começa com uma leitura real do cenário orgânico. O objetivo é separar sintomas de causas e transformar análise em direção estratégica.",
    analysis: [
      "estrutura técnica",
      "indexação",
      "páginas prioritárias",
      "conteúdo existente",
      "concorrentes",
      "SEO local",
      "autoridade",
      "dados estruturados",
      "sinais de clareza de contexto",
    ],
    agencyReceives:
      "Diagnóstico claro, priorizado e pronto para orientar conversas, propostas e próximos passos com o cliente.",
    result: "O cliente entende onde está, o que limita sua visibilidade e por onde a evolução deve começar.",
  },
  {
    letter: "I",
    name: "Intent Mapping",
    short: "Mapeamento das intenções que movem descoberta, comparação e decisão.",
    question: "Quais intenções realmente influenciam descoberta, comparação, confiança e decisão?",
    explanation:
      "SEO não começa na palavra-chave. Começa na intenção por trás da busca. Nesta camada, organizamos as intenções que conectam jornada, conteúdo e oportunidade real de negócio.",
    analysis: [
      "buscas informacionais",
      "buscas comerciais",
      "buscas locais",
      "termos de comparação",
      "dúvidas de decisão",
      "lacunas de conteúdo",
      "páginas existentes",
      "oportunidades por etapa da jornada",
    ],
    agencyReceives: "Mapa de intenções conectado a páginas, conteúdos, oportunidades e prioridades.",
    result: "A produção deixa de ser volume e passa a ter direção estratégica.",
  },
  {
    letter: "G",
    name: "Generative Search Architecture",
    short: "Estruturação de sinais para melhor compreensão em sistemas de busca modernos.",
    question: "A marca possui sinais e contexto estruturados para ecossistemas de busca generativa?",
    explanation:
      "A busca já não acontece apenas em listas de links. Sistemas de resposta e ambientes generativos influenciam como marcas são processadas e compreendidas. O S.I.G.N.A.L não promete presença garantida nesses ambientes. Ele organiza a infraestrutura de sinais que aumenta a clareza de contexto e a capacidade de interpretação da marca por sistemas de busca modernos.",
    analysis: [
      "clareza da oferta",
      "estrutura semântica",
      "conteúdo explicativo",
      "entidades relacionadas",
      "dados estruturados",
      "autoridade temática",
      "perguntas relevantes",
      "consistência pública",
    ],
    agencyReceives:
      "Recomendações para tornar a marca mais clara, estruturada e interpretável em ambientes de busca e resposta.",
    result: "A marca passa a comunicar melhor quem é, o que faz e por que deve ser considerada.",
  },
  {
    letter: "N",
    name: "Narrative & Entity Authority",
    short: "Organização dos sinais que sustentam contexto, autoridade e confiança.",
    question: "Por que essa marca deveria ser considerada uma opção confiável?",
    explanation:
      "Autoridade não nasce de um único schema, página ou conteúdo. Ela é construída pela consistência entre narrativa, posicionamento, serviços, reputação, menções, provas e presença pública. Nesta camada, organizamos os sinais que ajudam a marca a ser reconhecida como entidade, associada ao contexto certo e validada como autoridade.",
    analysis: [
      "clareza institucional",
      "proposta de valor",
      "páginas de serviço",
      "provas e diferenciais",
      "reputação",
      "avaliações",
      "menções externas",
      "backlinks e citações",
      "perfis públicos",
      "consistência entre canais",
    ],
    agencyReceives:
      "Plano de fortalecimento de autoridade de entidade, com ações on-page, off-page, semânticas e reputacionais.",
    result:
      "A marca deixa de ser apenas encontrada e passa a ser melhor compreendida, validada e considerada.",
  },
  {
    letter: "A",
    name: "Action Roadmap",
    short: "Priorização das ações com impacto, esforço e clareza de execução.",
    question: "O que precisa ser feito primeiro, por quê e com qual prioridade?",
    explanation:
      "Análise sem priorização vira ruído. O S.I.G.N.A.L transforma diagnóstico em um plano de ação claro, com etapas, impacto esperado, dificuldade, dependências e próximos movimentos.",
    analysis: [
      "ações técnicas",
      "melhorias on-page",
      "páginas prioritárias",
      "conteúdos necessários",
      "dados estruturados",
      "ajustes de autoridade",
      "oportunidades locais",
      "prioridades por impacto",
      "recomendações para execução",
    ],
    agencyReceives: "Roadmap prático, defensável e fácil de apresentar ao cliente.",
    result: "A estratégia deixa de ser uma lista de tarefas e passa a ser um plano de evolução.",
  },
  {
    letter: "L",
    name: "Learning Loop",
    short: "Evolução contínua a partir de dados, aprendizados e novas oportunidades.",
    question: "O que os dados estão mostrando — e como a estratégia deve evoluir?",
    explanation:
      "SEO e inteligência de busca não são entregas estáticas. O método fecha o ciclo com acompanhamento, aprendizado e refinamento contínuo.",
    analysis: [
      "evolução de visibilidade",
      "performance de páginas",
      "consultas e intenções",
      "comportamento orgânico",
      "oportunidades de conteúdo",
      "sinais de autoridade",
      "dados técnicos",
      "aprendizados competitivos",
      "próximos movimentos",
    ],
    agencyReceives: "Clareza para reuniões, relatórios e próximos ciclos estratégicos.",
    result: "A entrega se torna recorrente, mensurável e mais fácil de entender.",
  },
];

const strategicArmPillars = [
  ["Radar da nova busca", "Acompanhar mudanças em SEO, SERP, concorrência e comportamento de descoberta para sua agência não depender de leitura tardia do mercado."],
  ["Critério antes da execução", "Separar o que parece urgente do que realmente pode gerar impacto para o cliente, evitando decisões baseadas apenas em demanda, opinião ou tendência."],
  ["Direção para contas estratégicas", "Ajudar sua agência a enxergar oportunidades, riscos e próximos movimentos com mais clareza em clientes que exigem uma entrega orgânica mais madura."],
  ["Tradução técnica em valor percebido", "Transformar análises complexas de busca, autoridade e dados em argumentos que o cliente entende, valoriza e consegue aprovar."],
  ["Autoridade como infraestrutura", "Organizar sinais de entidade, reputação, contexto, conteúdo e dados estruturados para fortalecer a forma como a marca é compreendida e considerada."],
  ["Retaguarda sem inflar equipe", "Dar profundidade estratégica à entrega orgânica sem exigir que sua agência monte um time interno especializado em SEO, autoridade de entidade e Search Intelligence."],
  ["Ciclos de evolução", "Manter a entrega viva com aprendizado, mensuração, priorização e próximos passos recorrentes, em vez de ações isoladas ou relatórios sem direção."],
  ["Agência no protagonismo", "A AUDITSEO atua nos bastidores. Sua agência mantém o relacionamento, conduz a conta e apresenta a evolução estratégica ao cliente."],
];

const agencyProcess = [
  ["1", "Contexto da conta", "Entendemos o cliente, o nicho, o momento comercial, a maturidade digital e o objetivo da agência."],
  ["2", "Diagnóstico e leitura estratégica", "Aplicamos as camadas S, I, G e N para mapear oportunidades, riscos e lacunas."],
  ["3", "Roadmap e priorização", "Organizamos as ações por impacto, urgência, esforço e potencial de valor percebido."],
  ["4", "Entrega white-label", "A agência recebe materiais, diagnósticos, relatórios e orientações que podem ser apresentados com sua própria marca."],
  ["5", "Evolução contínua", "Acompanhamos dados, aprendizados e próximos movimentos para sustentar retenção e expansão."],
];

const retentionBlocks = [
  ["Clareza para reuniões", "Sua agência chega com diagnóstico, direção e próximos movimentos."],
  ["Mais valor percebido", "O cliente entende melhor o que está sendo feito e por que aquilo importa."],
  ["Expansão de escopo", "Novas oportunidades surgem a partir de dados, lacunas e prioridades identificadas."],
  ["Continuidade", "O método cria ciclos de evolução, não entregas soltas."],
];

const clientSegments = [
  "saúde",
  "jurídico",
  "educação",
  "estética premium",
  "clínicas",
  "B2B",
  "energia solar",
  "franquias",
  "serviços locais",
  "consultorias",
  "tecnologia",
  "negócios high-ticket",
];

const noPromises = [
  "aparição garantida em IA",
  "rankings garantidos",
  "resultado imediato",
  "imunidade a algoritmos",
  "autoridade construída apenas com schema",
  "tráfego sem estratégia",
  "crescimento sem execução",
];

const realDeliveries = [
  "diagnóstico",
  "priorização",
  "clareza estratégica",
  "organização de sinais",
  "roadmap",
  "inteligência de busca",
  "materiais white-label",
  "evolução mensurável",
];

function SectionHeader({
  eyebrow,
  title,
  text,
  dark = true,
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
      {eyebrow && (
        <span className={`mb-4 font-mono text-[12px] font-bold uppercase tracking-[0.16em] ${dark ? "text-[#b28453]" : "text-[#6d5132]"}`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`font-display text-[34px] sm:text-[44px] md:text-[56px] font-bold leading-[1.08] ${dark ? "text-[#f8f8f8]" : "text-[#11100f]"}`}>
        {title}
      </h2>
      {text && (
        <p className={`mt-6 text-base md:text-lg leading-[1.7] ${dark ? "text-[#f8f8f8]/70" : "text-[#11100f]/72"}`}>
          {text}
        </p>
      )}
    </div>
  );
}

function PrimaryButton({
  children,
  onClick,
  dark = true,
  className = "",
}: {
  children: string;
  onClick: () => void;
  dark?: boolean;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 ${
        dark
          ? "bg-[#b28453] text-white hover:bg-[#e0d3c3] hover:text-[#11100f]"
          : "bg-[#11100f] text-white hover:bg-[#b28453]"
      } ${className}`}
    >
      {children}
      <ArrowRight size={16} />
    </button>
  );
}

function ConstellationVisual() {
  const orbitNodes = [
    { letter: "S", label: "Search Diagnosis", start: 330, pulseDelay: "0s" },
    { letter: "I", label: "Intent Mapping", start: 30, pulseDelay: "1.4s" },
    { letter: "G", label: "Generative Search Architecture", start: 90, pulseDelay: "2.8s" },
    { letter: "N", label: "Narrative & Entity Authority", start: 150, pulseDelay: "4.2s" },
    { letter: "A", label: "Action Roadmap", start: 210, pulseDelay: "5.6s" },
    { letter: "L", label: "Learning Loop", start: 270, pulseDelay: "7s" },
  ];
  const orbitDuration = 720;
  const orbitSize = 470;

  return (
    <div className="group/method-cosmos relative mx-auto aspect-[1.08/1] w-full max-w-[620px] select-none overflow-visible">
      <style>
        {`
          @keyframes methodOrbit {
            from { transform: translate(-50%, -50%) rotate(var(--start-angle)); }
            to { transform: translate(-50%, -50%) rotate(calc(var(--start-angle) + 360deg)); }
          }
          @keyframes methodCounter {
            from { transform: rotate(0deg); }
            to { transform: rotate(-360deg); }
          }
          @keyframes methodCorePulse {
            0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.86; }
            50% { transform: translate(-50%, -50%) scale(1.045); opacity: 1; }
          }
          @keyframes methodCoreFloat {
            0%, 100% { transform: translate(-50%, -50%) translate3d(0, -3px, 0) scale(1); }
            50% { transform: translate(-50%, -50%) translate3d(0, 4px, 0) scale(1.015); }
          }
          @keyframes methodCoreTextFloat {
            0%, 100% { transform: translate(-50%, -50%) translate3d(0, -3px, 0); }
            50% { transform: translate(-50%, -50%) translate3d(0, 4px, 0); }
          }
          @keyframes methodRingBreath {
            0%, 100% { opacity: 0.34; }
            50% { opacity: 0.54; }
          }
          @keyframes methodRingFlowClockwise {
            from { stroke-dashoffset: 0; }
            to { stroke-dashoffset: -100; }
          }
          @keyframes methodRingFlowCounter {
            from { stroke-dashoffset: 0; }
            to { stroke-dashoffset: 100; }
          }
          @keyframes methodParticleDrift {
            0%, 100% { transform: translate3d(0, 0, 0); opacity: var(--particle-opacity); }
            50% { transform: translate3d(var(--drift-x), var(--drift-y), 0); opacity: calc(var(--particle-opacity) + 0.18); }
          }
          @keyframes methodLineBreath {
            0%, 100% { opacity: 0.11; }
            50% { opacity: 0.24; }
          }
          @keyframes methodBadgeBreathe {
            0%, 100% { box-shadow: 0 0 22px rgba(178,132,83,0.15), inset 0 1px 0 rgba(255,255,255,0.08); border-color: rgba(178,132,83,0.46); }
            50% { box-shadow: 0 0 36px rgba(178,132,83,0.30), inset 0 1px 0 rgba(255,255,255,0.14); border-color: rgba(224,211,195,0.68); }
          }
        `}
      </style>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(178,132,83,0.10),transparent_34%),radial-gradient(circle_at_20%_20%,rgba(248,248,248,0.055),transparent_18%),radial-gradient(circle_at_74%_72%,rgba(178,132,83,0.10),transparent_22%)] opacity-80" />

      <svg className="absolute inset-0 h-full w-full overflow-visible" viewBox="0 0 620 574" fill="none" aria-hidden="true">
        <path d="M132 302 C196 210 272 184 358 222 C430 254 476 316 512 414" stroke="#b28453" strokeWidth="1" strokeOpacity="0.16" style={{ animation: "methodLineBreath 8s ease-in-out infinite" }} />
        <path d="M122 398 C214 334 290 310 382 344 C438 365 484 360 548 314" stroke="#e0d3c3" strokeWidth="1" strokeOpacity="0.10" style={{ animation: "methodLineBreath 9.5s ease-in-out infinite" }} />
        
        <circle cx="310" cy="287" r="215" stroke="#b28453" strokeWidth="0.5" strokeOpacity="0.22" strokeDasharray="4 8" />
        <circle cx="310" cy="287" r="155" stroke="#e0d3c3" strokeWidth="0.5" strokeOpacity="0.14" strokeDasharray="2 6" />
        
        <circle cx="310" cy="287" r="215" stroke="url(#methodRingGrad)" strokeWidth="1.5" strokeOpacity="0.3" strokeDasharray="1 14" style={{ animation: "methodRingFlowClockwise 60s linear infinite" }} />
        <circle cx="310" cy="287" r="155" stroke="url(#methodRingGrad)" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="1 10" style={{ animation: "methodRingFlowCounter 45s linear infinite" }} />

        <defs>
          <linearGradient id="methodRingGrad" x1="0" y1="0" x2="620" y2="574" gradientUnits="userSpaceOnUse">
            <stop stopColor="#b28453" stopOpacity="0" />
            <stop offset="0.5" stopColor="#b28453" />
            <stop offset="1" stopColor="#b28453" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <div className="absolute left-1/2 top-1/2 h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2">
        <div className="absolute inset-0 animate-[methodCorePulse_5s_ease-in-out_infinite] rounded-full bg-[#b28453]/10 blur-2xl" />
        <div className="absolute inset-0 animate-[methodCoreFloat_7s_ease-in-out_infinite] rounded-full border border-[#b28453]/35 bg-[#11100f] shadow-[0_0_60px_rgba(178,132,83,0.18),inset_0_1px_0_rgba(255,255,255,0.08)]" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-[methodCoreTextFloat_7s_ease-in-out_infinite] text-center">
          <span className="block font-display text-[52px] font-black leading-none tracking-tighter text-[#b28453]">
            S.I.G.N.A.L
          </span>
          <span className="mt-2 block font-mono text-[9px] font-bold uppercase tracking-[0.24em] text-[#e0d3c3]/50">
            Method Architecture
          </span>
        </div>
      </div>

      {orbitNodes.map((node) => (
        <div
          key={node.letter}
          className="absolute left-1/2 top-1/2"
          style={
            {
              "--start-angle": `${node.start}deg`,
              height: `${orbitSize}px`,
              width: `${orbitSize}px`,
              animation: `methodOrbit ${orbitDuration}s linear infinite`,
            } as any
          }
        >
          <div
            className="group/method-node absolute left-1/2 top-0 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
            style={{ animation: `methodCounter ${orbitDuration}s linear infinite` }}
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-[#b28453]/20 blur-lg opacity-0 transition-opacity duration-500 group-hover/method-node:opacity-100" />
              <div className="relative flex h-[58px] w-[58px] items-center justify-center rounded-full border border-[#b28453]/46 bg-[#171614] transition-all duration-500 group-hover/method-node:scale-110 group-hover/method-node:border-[#e0d3c3] group-hover/method-node:shadow-[0_0_36px_rgba(178,132,83,0.30)]" style={{ animation: `methodBadgeBreathe 4s ease-in-out infinite ${node.pulseDelay}` }}>
                <span className="font-display text-2xl font-black text-[#b28453] transition-colors group-hover/method-node:text-[#e0d3c3]">
                  {node.letter}
                </span>
              </div>
            </div>
            <div className="pointer-events-none mt-4 flex flex-col items-center opacity-0 transition-all duration-500 group-hover/method-node:translate-y-1 group-hover/method-node:opacity-100">
              <span className="whitespace-nowrap font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#b28453]">
                {node.label}
              </span>
              <div className="mt-2 h-1 w-1 rounded-full bg-[#b28453]/60" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function MetodoSignalPage({ onNavigate }: MetodoSignalPageProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.pageSchema = "metodo-signal";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          name: "Método S.I.G.N.A.L | Search Intelligence para Agências | AUDITSEO",
          url: `${window.location.origin}/metodo-signal`,
          description:
            "Conheça o Método S.I.G.N.A.L da AUDITSEO para organizar SEO, autoridade de entidade e Search Intelligence em entregas white-label para agências.",
        },
        {
          "@type": "Service",
          name: "Método S.I.G.N.A.L de Search Intelligence",
          provider: { "@type": "Organization", name: "AUDITSEO" },
          serviceType: "Search Intelligence, SEO, autoridade e evolução orgânica",
        },
        {
          "@type": "ItemList",
          name: "Camadas do Método S.I.G.N.A.L",
          itemListElement: signalLayers.map((layer, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: layer.name,
            description: layer.short,
          })),
        },
      ],
    });
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  const scrollToMethod = () => {
    const target = document.getElementById("o-metodo");
    if (!target) return;
    window.scrollTo({ top: target.offsetTop - 82, behavior: "smooth" });
  };

  return (
    <main className="bg-[#11100f] text-[#f8f8f8]">
      <section className="relative flex min-h-[92vh] items-center overflow-hidden pb-16 pt-[112px] md:pb-20 md:pt-[128px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_26%_35%,rgba(178,132,83,0.16),transparent_35%),linear-gradient(225deg,rgba(224,211,195,0.04),transparent_44%)]" />
        <div className="container relative z-10 mx-auto max-w-[1320px] px-6 xl:px-12">
          <div className="grid items-center gap-14 lg:grid-cols-12 xl:gap-16">
            <div className="lg:col-span-6">
              <span className="mb-5 inline-block font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-[#b28453]">
                MÉTODO S.I.G.N.A.L
              </span>
              <h1 className="max-w-[780px] font-display text-[clamp(54px,5.4vw,82px)] font-bold leading-[1.02] tracking-[-0.045em] text-[#f8f8f8]">
                Search Intelligence para a nova era da busca
              </h1>
              <p className="mt-8 max-w-[720px] text-[clamp(18px,1.35vw,22px)] leading-[1.55] text-[rgba(248,248,248,0.76)]">
                O S.I.G.N.A.L é o método da AUDITSEO para organizar SEO, autoridade de entidade e inteligência de busca em uma entrega white-label, estratégica e responsável para sua agência.
              </p>
              <p className="mt-[22px] max-w-[640px] text-[16px] leading-[1.5] text-[#e0d3c3]/[0.78]">
                Não é apenas sobre tráfego. É sobre estruturar os sinais que tornam marcas mais claras, confiáveis e interpretáveis em ecossistemas de busca modernos.
              </p>
              <div className="mt-11 flex flex-col gap-4 sm:flex-row">
                <PrimaryButton onClick={() => onNavigate("diagnostico")}>Avaliar parceria estratégica</PrimaryButton>
                <button
                  onClick={scrollToMethod}
                  className="rounded-full border border-[#b28453]/45 px-7 py-4 text-sm font-bold text-[#f8f8f8] transition-colors hover:bg-[#b28453]/10"
                >
                  Conhecer as camadas
                </button>
              </div>
            </div>
            <div className="lg:col-span-6">
              <ConstellationVisual />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#11100f] py-24 md:py-32">
        <div className="container mx-auto max-w-[1120px] px-6 text-center xl:px-12">
          <SectionHeader
            center
            eyebrow="O Fundamento"
            title="SEO sem estratégia é apenas uma lista de tarefas"
            text="Durante anos, o mercado tratou SEO como uma disputa isolada por posições e palavras-chave. Mas em um ecossistema de busca cada vez mais complexo, o que importa é a clareza da entidade, a autoridade temática e a consistência pública."
          />
          <div className="mx-auto mt-14 grid max-w-5xl gap-10 md:grid-cols-2">
            <div className="rounded-3xl border border-white/5 bg-white/[0.02] p-10 text-left">
              <XCircle className="h-10 w-10 text-[#b28453]/40" />
              <h4 className="mt-6 font-display text-2xl font-bold">O SEO Tradicional</h4>
              <p className="mt-4 text-base leading-[1.7] text-[#f8f8f8]/50">
                Focado apenas em tráfego, volume de palavras-chave, backlink sem critério e otimizações técnicas isoladas que muitas vezes não conectam com o negócio.
              </p>
            </div>
            <div className="rounded-3xl border border-[#b28453]/20 bg-[#b28453]/5 p-10 text-left">
              <Sparkles className="h-10 w-10 text-[#b28453]" />
              <h4 className="mt-6 font-display text-2xl font-bold">Search Intelligence</h4>
              <p className="mt-4 text-base leading-[1.7] text-[#f8f8f8]/70">
                Focado em autoridade de entidade, clareza de contexto, dados estruturados, intenção de jornada e sinais consistentes que preparam a marca para o futuro da busca.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="o-metodo" className="bg-[#e0d3c3] py-24 text-[#11100f] md:py-32">
        <div className="container mx-auto max-w-[1240px] px-6 xl:px-12">
          <SectionHeader
            dark={false}
            eyebrow="As 6 Camadas"
            title="A estrutura do Método S.I.G.N.A.L"
            text="Uma abordagem modular que permite sua agência aplicar inteligência de busca em diferentes níveis de maturidade do cliente."
          />
          <div className="mt-16 space-y-6">
            {signalLayers.map((layer) => (
              <div key={layer.letter} className="group overflow-hidden rounded-[32px] border border-[#11100f]/10 bg-white/40 transition-all hover:bg-white/60">
                <div className="grid lg:grid-cols-[120px_1fr_400px]">
                  <div className="flex items-center justify-center border-b border-[#11100f]/10 bg-[#11100f]/5 lg:border-b-0 lg:border-r">
                    <span className="font-display text-6xl font-black text-[#b28453]">{layer.letter}</span>
                  </div>
                  <div className="p-8 md:p-12">
                    <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#b28453]">
                      {layer.name}
                    </span>
                    <h3 className="mt-4 font-display text-3xl font-bold leading-tight md:text-4xl">{layer.short}</h3>
                    <p className="mt-6 text-base leading-[1.7] text-[#11100f]/70">{layer.explanation}</p>
                    <div className="mt-10">
                      <h4 className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#b28453]">O que analisamos</h4>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {layer.analysis.map((item) => (
                          <span key={item} className="rounded-full border border-[#11100f]/10 bg-white/50 px-4 py-1.5 text-xs font-medium">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-[#11100f]/10 bg-[#11100f]/5 p-8 md:p-12 lg:border-l lg:border-t-0">
                    <div className="space-y-8">
                      <div>
                        <h4 className="flex items-center gap-2 font-display text-lg font-bold">
                          <ShieldCheck size={18} className="text-[#b28453]" />
                          O que a agência recebe
                        </h4>
                        <p className="mt-3 text-sm leading-[1.6] text-[#11100f]/60">{layer.agencyReceives}</p>
                      </div>
                      <div>
                        <h4 className="flex items-center gap-2 font-display text-lg font-bold">
                          <LineChart size={18} className="text-[#b28453]" />
                          Impacto no cliente
                        </h4>
                        <p className="mt-3 text-sm leading-[1.6] text-[#11100f]/60">{layer.result}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#11100f] py-24 md:py-32">
        <div className="container mx-auto max-w-[1240px] px-6 xl:px-12">
          <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Braço Estratégico"
                title="Sua agência ganha uma retaguarda de inteligência"
                text="O S.I.G.N.A.L não é apenas um método de execução. É a base para sua agência atuar com mais segurança e autoridade."
              />
              <div className="mt-12 grid gap-6">
                {strategicArmPillars.slice(0, 4).map(([title, text]) => (
                  <div key={title} className="flex items-start gap-5">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#b28453]/20 text-[#b28453]">
                      <CheckCircle2 size={14} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#f8f8f8]">{title}</h4>
                      <p className="mt-2 text-sm leading-[1.6] text-[#f8f8f8]/50">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="rounded-[40px] border border-[#b28453]/20 bg-white/[0.02] p-8 md:p-14 shadow-2xl">
                <div className="grid gap-10 sm:grid-cols-2">
                  {strategicArmPillars.slice(4).map(([title, text]) => (
                    <div key={title}>
                      <h4 className="font-display text-xl font-bold text-[#f8f8f8]">{title}</h4>
                      <p className="mt-4 text-sm leading-[1.6] text-[#f8f8f8]/45">{text}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-14 border-t border-white/10 pt-10">
                  <p className="text-lg leading-[1.7] text-[#f8f8f8]/80">
                    O objetivo é dar <span className="text-[#b28453] font-bold">profundidade estratégica</span> sem inflar a operação da sua agência.
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

      <section className="bg-[#e0d3c3] py-24 text-[#11100f] md:py-32">
        <div className="container mx-auto max-w-[1240px] px-6 xl:px-12">
          <div className="text-center">
            <SectionHeader
              dark={false}
              center
              eyebrow="O Processo"
              title="Como a parceria acontece na prática"
              text="Um fluxo transparente e estruturado para garantir que a inteligência chegue com qualidade à sua agência."
            />
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-5">
            {agencyProcess.map(([num, title, text]) => (
              <div key={num} className="relative flex flex-col items-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#11100f] font-display text-xl font-bold text-white shadow-xl">
                  {num}
                </div>
                <h4 className="mt-6 font-display text-xl font-bold">{title}</h4>
                <p className="mt-4 text-sm leading-[1.6] text-[#11100f]/60">{text}</p>
                {num !== "5" && (
                  <div className="absolute left-[calc(50%+40px)] top-7 hidden h-px w-[calc(100%-80px)] bg-[#11100f]/10 md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#11100f] py-24 md:py-32">
        <div className="container mx-auto max-w-[1240px] px-6 xl:px-12">
          <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <SectionHeader
                eyebrow="Retenção e Valor"
                title="Por que o método ajuda a manter clientes"
                text="A inteligência de busca cria uma narrativa de evolução que vai além da entrega técnica mensal."
              />
              <div className="mt-12 grid gap-6 sm:grid-cols-2">
                {retentionBlocks.map(([title, text]) => (
                  <div key={title} className="rounded-2xl border border-white/5 bg-white/[0.03] p-7 transition-colors hover:border-[#b28453]/30">
                    <ShieldCheck className="h-7 w-7 text-[#b28453]" />
                    <h4 className="mt-5 font-bold text-[#f8f8f8]">{title}</h4>
                    <p className="mt-3 text-sm leading-[1.6] text-[#f8f8f8]/45">{text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="rounded-[40px] bg-[#e0d3c3] p-8 md:p-14 text-[#11100f] shadow-2xl">
                <h3 className="font-display text-2xl font-bold leading-[1.2] md:text-3xl">
                  Cenários onde o S.I.G.N.A.L é <span className="text-[#b28453]">mais forte</span>
                </h3>
                <div className="mt-10 grid grid-cols-2 gap-4">
                  {clientSegments.map((segment) => (
                    <div key={segment} className="flex items-center gap-3 text-sm font-medium text-[#11100f]/70">
                      <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#b28453]" />
                      {segment}
                    </div>
                  ))}
                </div>
                <div className="mt-12 border-t border-[#11100f]/10 pt-10">
                  <p className="text-lg leading-[1.6] text-[#11100f]/80">
                    Especialmente em nichos que dependem de <span className="text-[#b28453] font-bold">autoridade, confiança e contexto</span> para converter.
                  </p>
                  <PrimaryButton onClick={() => onNavigate("diagnostico")} dark={false} className="mt-8">
                    Iniciar parceria estratégica
                  </PrimaryButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#e0d3c3] py-24 text-[#11100f] md:py-32">
        <div className="container mx-auto max-w-[1240px] px-6 xl:px-12">
          <div className="flex flex-col gap-14 lg:flex-row lg:items-center">
            <div className="lg:w-1/2">
              <SectionHeader
                dark={false}
                eyebrow="Governança"
                title="O que não prometemos"
                text="O S.I.G.N.A.L é um método de governança de sinais e inteligência, não uma fórmula mágica de resultados garantidos."
              />
              <div className="mt-10 grid gap-y-5 sm:grid-cols-2 sm:gap-x-8">
                {noPromises.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm font-medium text-[#11100f]/50">
                    <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#b28453]/40" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="rounded-[40px] bg-[#11100f] p-8 md:p-12 text-white shadow-2xl">
                <h3 className="font-display text-2xl font-bold leading-[1.2] md:text-3xl">
                  O que <span className="text-[#b28453]">entregamos</span>
                </h3>
                <div className="mt-10 grid grid-cols-2 gap-4">
                  {realDeliveries.map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm text-[#f8f8f8]/60">
                      <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#b28453]" />
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-12 pt-8 border-t border-white/10 text-center">
                  <PrimaryButton onClick={() => onNavigate("diagnostico")} className="w-full">
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
