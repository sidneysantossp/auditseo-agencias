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
      "sinais de presença em IA",
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
    name: "GEO & AI Readiness",
    short: "Preparação da marca para ser melhor compreendida em ambientes generativos.",
    question: "A marca está clara o suficiente para ser compreendida em ambientes de resposta e IA?",
    explanation:
      "A busca já não acontece apenas em listas de links. AI Overviews, ChatGPT, Gemini e outros mecanismos de resposta influenciam como marcas são descobertas, comparadas e consideradas. O S.I.G.N.A.L não promete presença garantida nesses ambientes. Ele organiza os sinais que aumentam clareza, consistência e capacidade de interpretação da marca.",
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
      "Recomendações para tornar a marca mais clara, estruturada e interpretável em ambientes de busca e IA.",
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
      "SEO, GEO e inteligência de busca não são entregas estáticas. O método fecha o ciclo com acompanhamento, aprendizado e refinamento contínuo.",
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
  ["Radar da nova busca", "Acompanhar mudanças em SEO, GEO, IA, SERP, concorrência e comportamento de descoberta para sua agência não depender de leitura tardia do mercado."],
  ["Critério antes da execução", "Separar o que parece urgente do que realmente pode gerar impacto para o cliente, evitando decisões baseadas apenas em demanda, opinião ou tendência."],
  ["Direção para contas estratégicas", "Ajudar sua agência a enxergar oportunidades, riscos e próximos movimentos com mais clareza em clientes que exigem uma entrega orgânica mais madura."],
  ["Tradução técnica em valor percebido", "Transformar análises complexas de busca, autoridade, IA e dados em argumentos que o cliente entende, valoriza e consegue aprovar."],
  ["Autoridade como infraestrutura", "Organizar sinais de entidade, reputação, contexto, conteúdo e dados estruturados para fortalecer a forma como a marca é compreendida e considerada."],
  ["Retaguarda sem inflar equipe", "Dar profundidade estratégica à entrega orgânica sem exigir que sua agência monte um time interno especializado em SEO, GEO, IA e autoridade de entidade."],
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

function PrimaryButton({ children, onClick, dark = true }: { children: string; onClick: () => void; dark?: boolean }) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 ${
        dark
          ? "bg-[#b28453] text-white hover:bg-[#e0d3c3] hover:text-[#11100f]"
          : "bg-[#11100f] text-white hover:bg-[#b28453]"
      }`}
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
    { letter: "G", label: "GEO & AI Readiness", start: 90, pulseDelay: "2.8s" },
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
        <path d="M122 398 C214 334 290 310 382 344 C438 365 484 360 548 314" stroke="#e0d3c3" strokeWidth="1" strokeOpacity="0.10" style={{ animation: "methodLineBreath 9.5s ease-in-out infinite 1.2s" }} />
        <path d="M194 142 C260 220 328 268 430 222" stroke="#b28453" strokeWidth="1" strokeOpacity="0.12" style={{ animation: "methodLineBreath 10s ease-in-out infinite 0.8s" }} />
      </svg>

      {[...Array(58)].map((_, index) => (
        <span
          key={index}
          className="absolute rounded-full"
          style={{
            top: `${8 + ((index * 19) % 84)}%`,
            left: `${6 + ((index * 31) % 88)}%`,
            width: `${1 + (index % 3) * 0.7}px`,
            height: `${1 + (index % 3) * 0.7}px`,
            background: index % 4 === 0 ? "#b28453" : "#e0d3c3",
            opacity: 0.14 + (index % 6) * 0.055,
            ["--particle-opacity" as string]: `${0.14 + (index % 6) * 0.055}`,
            ["--drift-x" as string]: `${((index % 5) - 2) * 5}px`,
            ["--drift-y" as string]: `${(((index * 2) % 5) - 2) * 5}px`,
            animation: `methodParticleDrift ${7 + (index % 8)}s ease-in-out ${(index % 9) * 0.32}s infinite`,
            boxShadow: index % 5 === 0 ? "0 0 10px rgba(224,211,195,0.42)" : "0 0 7px rgba(178,132,83,0.28)",
          }}
        />
      ))}

      <div className="absolute left-1/2 top-1/2 z-20 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(248,248,248,0.22)_0%,rgba(224,211,195,0.24)_20%,rgba(178,132,83,0.18)_46%,transparent_74%)] opacity-80 blur-[10px]" style={{ animation: "methodCorePulse 8s ease-in-out infinite" }} />
      <div className="absolute left-1/2 top-1/2 z-[25] h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_42%_34%,rgba(248,248,248,0.96)_0%,rgba(224,211,195,0.82)_22%,rgba(178,132,83,0.58)_54%,rgba(178,132,83,0.18)_78%,transparent_100%)] shadow-[0_0_34px_rgba(178,132,83,0.42),0_0_80px_rgba(178,132,83,0.18)]" />
      <svg className="pointer-events-none absolute inset-0 z-10 h-full w-full overflow-visible" viewBox="0 0 620 574" fill="none" aria-hidden="true">
        <defs>
          <filter id="methodRingGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <ellipse cx="310" cy="287" rx="150" ry="43" stroke="#e0d3c3" strokeWidth="1.35" strokeOpacity="0.20" filter="url(#methodRingGlow)" />
        <ellipse cx="310" cy="287" rx="54" ry="148" stroke="#e0d3c3" strokeWidth="1.35" strokeOpacity="0.18" filter="url(#methodRingGlow)" />
        <ellipse cx="310" cy="287" rx="150" ry="43" pathLength="100" stroke="#f1e6d6" strokeWidth="1.65" strokeOpacity="0.34" strokeLinecap="round" strokeDasharray="16 84" filter="url(#methodRingGlow)" style={{ animation: "methodRingFlowClockwise 13.6s linear infinite" }} />
        <ellipse cx="310" cy="287" rx="54" ry="148" pathLength="100" stroke="#f1e6d6" strokeWidth="1.55" strokeOpacity="0.30" strokeLinecap="round" strokeDasharray="14 86" filter="url(#methodRingGlow)" style={{ animation: "methodRingFlowCounter 15.2s linear infinite 0.9s" }} />
      </svg>
      <svg className="pointer-events-none absolute inset-0 z-30 h-full w-full overflow-visible" viewBox="0 0 620 574" fill="none" aria-hidden="true">
        <defs>
          <filter id="methodRingFrontGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path d="M160 287 A150 43 0 0 0 460 287" stroke="#f1e6d6" strokeWidth="1.45" strokeOpacity="0.46" strokeLinecap="round" filter="url(#methodRingFrontGlow)" />
        <path d="M310 139 A54 148 0 0 0 310 435" stroke="#f1e6d6" strokeWidth="1.45" strokeOpacity="0.42" strokeLinecap="round" filter="url(#methodRingFrontGlow)" />
        <path d="M160 287 A150 43 0 0 0 460 287" pathLength="100" stroke="#fff4e5" strokeWidth="1.85" strokeOpacity="0.58" strokeLinecap="round" strokeDasharray="18 82" filter="url(#methodRingFrontGlow)" style={{ animation: "methodRingFlowClockwise 13.6s linear infinite" }} />
        <path d="M310 139 A54 148 0 0 0 310 435" pathLength="100" stroke="#fff4e5" strokeWidth="1.75" strokeOpacity="0.52" strokeLinecap="round" strokeDasharray="16 84" filter="url(#methodRingFrontGlow)" style={{ animation: "methodRingFlowCounter 15.2s linear infinite 0.9s" }} />
      </svg>

      {orbitNodes.map((node) => (
        <div
          key={node.letter}
          className="absolute left-1/2 top-1/2"
          style={{
            width: `${orbitSize}px`,
            height: `${Math.round(orbitSize * 0.74)}px`,
            ["--start-angle" as string]: `${node.start}deg`,
            animation: `methodOrbit ${orbitDuration}s linear infinite`,
          }}
        >
          <div className="absolute left-1/2 top-0" style={{ transform: `translate(-50%, -50%) rotate(${-node.start}deg)` }}>
            <div style={{ animation: `methodCounter ${orbitDuration}s linear infinite` }}>
              <div
                title={node.label}
                className="group/badge relative flex h-12 w-12 items-center justify-center rounded-full border border-[#b28453]/50 bg-[radial-gradient(circle_at_32%_24%,rgba(224,211,195,0.16),rgba(178,132,83,0.10)_34%,rgba(17,16,15,0.88)_72%)] shadow-[0_0_22px_rgba(178,132,83,0.18),inset_0_1px_0_rgba(255,255,255,0.10),inset_0_-10px_18px_rgba(0,0,0,0.32)] backdrop-blur-md transition-all duration-300 before:absolute before:inset-[7px] before:rounded-full before:border before:border-white/[0.04] after:absolute after:left-[28%] after:top-[20%] after:h-2 after:w-2 after:rounded-full after:bg-[#f8f8f8]/28 after:blur-[1px] hover:scale-110 hover:border-[#e0d3c3]/80 hover:shadow-[0_0_38px_rgba(178,132,83,0.38),inset_0_1px_0_rgba(255,255,255,0.16)] md:h-14 md:w-14"
                style={{ animation: `methodBadgeBreathe 9s ease-in-out ${node.pulseDelay} infinite` }}
              >
                <span className="relative z-10 font-display text-xl font-bold text-[#e0d3c3] drop-shadow-[0_0_8px_rgba(224,211,195,0.28)]">{node.letter}</span>
                <span className="pointer-events-none absolute left-1/2 top-[calc(100%+10px)] hidden -translate-x-1/2 whitespace-nowrap rounded-full border border-[#b28453]/35 bg-[#11100f]/90 px-3 py-1.5 text-[10px] font-semibold text-[#e0d3c3] opacity-0 shadow-xl shadow-black/30 transition-opacity group-hover/badge:block group-hover/badge:opacity-100">
                  {node.label}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function MetodoSignalPage({ onNavigate }: MetodoSignalPageProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.pageSchema = "metodo-signal";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          name: "Método S.I.G.N.A.L | AUDITSEO",
          url: `${window.location.origin}/metodo-signal`,
          description:
            "Metodologia white-label para agências estruturarem SEO, GEO, IA, autoridade de entidade e inteligência de busca em entregas mensuráveis.",
        },
        {
          "@type": "Service",
          name: "Metodologia de SEO, GEO e Search Intelligence white-label para agências",
          provider: { "@type": "Organization", name: "AUDITSEO" },
          serviceType: "Search Intelligence white-label",
        },
        {
          "@type": "ItemList",
          name: "Camadas do Método S.I.G.N.A.L",
          itemListElement: signalLayers.map((layer, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: `${layer.letter} — ${layer.name}`,
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

  return (
    <main className="bg-[#11100f] text-[#f8f8f8]">
      <section className="relative flex min-h-[90vh] items-center overflow-hidden pt-[112px] md:pt-[128px] pb-16 md:pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_22%,rgba(178,132,83,0.18),transparent_34%),linear-gradient(135deg,rgba(224,211,195,0.045),transparent_44%)]" />
        <div className="container relative z-10 mx-auto max-w-[1320px] px-6 xl:px-12">
          <div className="grid items-center gap-14 lg:grid-cols-12 xl:gap-16">
            <div className="lg:col-span-6">
              <span className="mb-5 inline-block font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-[#b28453]">
                METODOLOGIA PROPRIETÁRIA AUDITSEO
              </span>
              <h1 className="font-display text-[52px] sm:text-[70px] lg:text-[92px] font-bold leading-[0.98] tracking-[-0.045em] text-[#f8f8f8]">
                Método S.I.G.N.A.L
              </h1>
              <p className="mt-8 max-w-3xl text-xl md:text-2xl leading-[1.45] text-[#f8f8f8]/78">
                A estrutura que transforma SEO, GEO, IA e autoridade de entidade em uma entrega white-label, estratégica e mensurável para agências.
              </p>
              <p className="mt-6 max-w-2xl text-base md:text-lg leading-[1.7] text-[#f8f8f8]/62">
                O S.I.G.N.A.L organiza a complexidade da nova busca em seis camadas de decisão: diagnóstico, intenção, IA, autoridade, roadmap e evolução contínua.
              </p>
              <div className="mt-11 flex flex-col gap-4 sm:flex-row">
                <PrimaryButton onClick={() => onNavigate("diagnostico")}>Avaliar parceria estratégica</PrimaryButton>
                <button
                  onClick={() => onNavigate("camadas-signal")}
                  className="rounded-full border border-[#b28453]/45 px-7 py-4 text-sm font-bold text-[#f8f8f8] transition-colors hover:bg-[#b28453]/10"
                >
                  Ver as 6 camadas
                </button>
              </div>
              <p className="mt-9 font-mono text-[11px] uppercase tracking-[0.08em] text-[#8c8275]">
                Search Intelligence · GEO · Autoridade de entidade · Roadmap mensurável
              </p>
            </div>
            <div className="lg:col-span-6">
              <ConstellationVisual />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#11100f] py-24 md:py-32">
        <div className="container mx-auto max-w-[1080px] px-6 text-center xl:px-12">
          <span className="font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-[#b28453]">VISÃO AUDITSEO</span>
          <p className="mt-8 font-display text-[30px] sm:text-[40px] md:text-[52px] font-bold leading-[1.14] text-[#f8f8f8]">
            A <span className="text-[#b28453]">nova busca</span> não começa no clique. Começa nos sinais que fazem uma marca ser <span className="text-[#b28453]">reconhecida como entidade</span>, associada a um <span className="text-[#b28453]">contexto</span> e validada como <span className="text-[#b28453]">autoridade</span> antes da decisão do cliente.
          </p>
          <p className="mx-auto mt-8 max-w-4xl text-lg leading-[1.7] text-[#f8f8f8]/70">
            O S.I.G.N.A.L foi criado para organizar esses sinais em uma entrega que sua agência consegue <span className="text-[#e0d3c3]">apresentar</span>, <span className="text-[#e0d3c3]">defender</span>, <span className="text-[#e0d3c3]">mensurar</span> e <span className="text-[#e0d3c3]">evoluir</span>.
          </p>
        </div>
      </section>

      <section className="bg-[#e0d3c3] py-24 md:py-32 text-[#11100f]">
        <div className="container mx-auto grid max-w-[1320px] gap-12 px-6 lg:grid-cols-12 xl:px-12">
          <div className="lg:col-span-6">
            <SectionHeader
              dark={false}
              eyebrow="Origem do método"
              title="Por que o S.I.G.N.A.L existe"
              text="Porque a nova busca ficou complexa demais para ser tratada como uma sequência de tarefas soltas."
            />
            <div className="mt-8 space-y-5 text-base leading-[1.75] text-[#11100f]/76">
              <p>Durante anos, SEO foi tratado como uma combinação de palavras-chave, páginas otimizadas, conteúdo e relatórios. Essa base continua importante, mas já não explica toda a jornada de decisão.</p>
              <p>Hoje, uma marca precisa ser encontrada, compreendida, validada e considerada em diferentes ambientes: Google, mapas, conteúdos, avaliações, comparadores, redes, AI Overviews, ChatGPT, Gemini e outros mecanismos de resposta.</p>
              <p>Para as agências, isso cria uma nova responsabilidade: transformar busca, autoridade, IA e dados em uma entrega clara, recorrente e mensurável para os clientes.</p>
              <p className="font-semibold text-[#11100f]">O S.I.G.N.A.L existe para transformar essa complexidade em método.</p>
            </div>
            <div className="mt-9 border-l-4 border-[#b28453] bg-[#11100f] p-6 text-[#f8f8f8]">
              <p className="font-display text-2xl font-bold leading-[1.3]">
                Não é mais sobre fazer mais ações. É sobre organizar melhor os sinais que sustentam confiança, autoridade e decisão.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-[8px] border border-[#b28453]/45 bg-[#11100f] p-7 md:p-9 text-[#f8f8f8] shadow-xl shadow-[#11100f]/20">
              <h3 className="font-display text-2xl font-bold">Da tarefa solta ao sistema estratégico</h3>
              <div className="mt-8 grid gap-8 md:grid-cols-2">
                <ComparisonList title="Antes" items={["palavras-chave isoladas", "relatórios genéricos", "conteúdo sem prioridade", "SEO técnico desconectado", "pouca clareza de impacto"]} muted />
                <ComparisonList title="Depois" items={["diagnóstico orientado por sinais", "intenção conectada à jornada", "autoridade de entidade", "readiness para IA", "roadmap priorizado", "evolução mensurável"]} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="camadas-signal" className="bg-[#11100f] py-24 md:py-32">
        <div className="container mx-auto max-w-[1320px] px-6 xl:px-12">
          <SectionHeader
            center
            eyebrow="Visão geral"
            title="As seis camadas da inteligência orgânica"
            text="O S.I.G.N.A.L organiza a nova busca em uma sequência lógica: entender o cenário, mapear intenções, preparar a marca para IA, fortalecer autoridade, priorizar ações e evoluir com dados."
          />
          <SignalMethodMap />
        </div>
      </section>

      <section className="bg-[#11100f] pb-24 md:pb-32">
        <div className="container mx-auto max-w-[1240px] px-6 xl:px-12">
          <SectionHeader
            center
            eyebrow="Camadas estratégicas"
            title="Dentro do S.I.G.N.A.L"
            text="Cada camada responde a uma pergunta estratégica que sua agência precisa conseguir responder antes de transformar busca, IA e autoridade em entrega para o cliente."
          />
          <div className="relative mt-16 space-y-10 md:space-y-12">
            <div className="pointer-events-none absolute bottom-12 left-8 top-12 hidden w-px bg-[#b28453]/28 lg:block" />
            {signalLayers.map((layer, index) => (
              <div key={layer.letter}>
                <LayerDeepDive layer={layer} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e0d3c3] py-24 md:py-32 text-[#11100f]">
        <div className="container mx-auto max-w-[1320px] px-6 xl:px-12">
          <SectionHeader
            dark={false}
            center
            eyebrow="Aplicação white-label"
            title="Como o S.I.G.N.A.L entra nos bastidores da sua agência"
            text="Sua agência mantém o relacionamento com o cliente. A AUDITSEO estrutura a inteligência orgânica por trás da entrega."
          />
          <div className="mt-14 grid gap-5 lg:grid-cols-5">
            {agencyProcess.map(([step, title, text]) => (
              <div key={step} className="rounded-[8px] border border-[#11100f]/12 bg-[#f8f8f8]/45 p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#11100f] font-display text-lg font-bold text-[#e0d3c3]">
                  {step}
                </span>
                <h3 className="mt-5 font-display text-xl font-bold">{title}</h3>
                <p className="mt-4 text-sm leading-[1.7] text-[#11100f]/70">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#11100f] py-24 md:py-32">
        <div className="container mx-auto max-w-[1320px] px-6 xl:px-12">
          <SectionHeader
            center
            eyebrow="Braço estratégico"
            title="Por que sua agência precisa de um braço estratégico de Search Intelligence"
            text="A nova busca muda rápido demais para ser tratada apenas como tarefas, relatórios ou demandas pontuais. A AUDITSEO entra nos bastidores para manter sua agência com leitura, critério, direção e capacidade de resposta."
          />
          <div className="mx-auto mt-10 max-w-4xl rounded-[8px] border border-[#b28453]/25 bg-[linear-gradient(145deg,#1d1b18,#0f0f0e)] px-7 py-8 text-center shadow-[0_18px_60px_rgba(0,0,0,0.28)] md:px-10">
            <p className="font-display text-2xl md:text-3xl font-bold leading-[1.35] text-[#e0d3c3]">
              Não se trata de receber mais documentos. Trata-se de ter uma inteligência orgânica estruturada por trás da operação da sua agência.
            </p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {strategicArmPillars.map(([title, text], index) => (
              <div key={title} className="group rounded-[8px] border border-[#b28453]/20 bg-[linear-gradient(145deg,#1d1b18,#0f0f0e)] p-6 transition-all hover:-translate-y-1 hover:border-[#b28453]/60 hover:shadow-[0_18px_50px_rgba(178,132,83,0.08)]">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#b28453]/30 bg-[#b28453]/10 font-mono text-[11px] font-bold text-[#b28453] group-hover:border-[#e0d3c3]/50 group-hover:text-[#e0d3c3]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-5 font-display text-xl font-bold">{title}</h3>
                <p className="mt-4 text-sm leading-[1.7] text-[#f8f8f8]/66">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e0d3c3] py-24 md:py-32 text-[#11100f]">
        <div className="container mx-auto max-w-[1320px] px-6 xl:px-12">
          <SectionHeader
            dark={false}
            center
            eyebrow="Cliente final"
            title="O que muda para os clientes da sua agência"
            text="O cliente final passa a enxergar uma entrega mais clara, estratégica e conectada ao futuro da busca."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <ComparisonCard title="Antes" items={["SEO tratado como checklist", "conteúdo produzido sem direção", "relatórios difíceis de interpretar", "baixa conexão com autoridade", "pouca clareza sobre próximos passos", "IA tratada como discurso genérico"]} />
            <ComparisonCard title="Depois com S.I.G.N.A.L" items={["diagnóstico estratégico", "conteúdo conectado à intenção", "autoridade de entidade estruturada", "dados organizados", "roadmap mensurável", "evolução clara para reuniões e renovações"]} highlighted />
          </div>
          <p className="mx-auto mt-10 max-w-3xl text-center font-display text-2xl font-bold leading-[1.35]">
            O método ajuda sua agência a transformar complexidade técnica em clareza estratégica para o cliente.
          </p>
        </div>
      </section>

      <section className="bg-[#11100f] py-24 md:py-32">
        <div className="container mx-auto max-w-[1320px] px-6 xl:px-12">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Retenção e expansão"
                title="Método não é apenas entrega. É argumento de retenção."
                text="Quando a agência consegue mostrar diagnóstico, prioridades, aprendizados e próximos passos com clareza, a conversa com o cliente muda. A entrega deixa de ser percebida como tarefas executadas e passa a ser entendida como evolução estratégica."
              />
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:col-span-7">
              {retentionBlocks.map(([title, text]) => (
                <div key={title} className="rounded-[8px] border border-[#b28453]/20 bg-[#171614] p-7">
                  <LineChart className="h-5 w-5 text-[#b28453]" />
                  <h3 className="mt-5 font-display text-xl font-bold">{title}</h3>
                  <p className="mt-4 text-sm leading-[1.7] text-[#f8f8f8]/68">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#e0d3c3] py-24 md:py-32 text-[#11100f]">
        <div className="container mx-auto max-w-[1120px] px-6 text-center xl:px-12">
          <SectionHeader
            dark={false}
            center
            eyebrow="Clientes indicados"
            title="Onde o S.I.G.N.A.L gera mais valor"
            text="A metodologia é especialmente útil para clientes que dependem de confiança, autoridade e decisão qualificada."
          />
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {clientSegments.map((segment) => (
              <span key={segment} className="rounded-full border border-[#11100f]/18 bg-[#f8f8f8]/45 px-5 py-3 text-sm font-semibold text-[#11100f]/82">
                {segment}
              </span>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-3xl text-lg leading-[1.7] text-[#11100f]/72">
            Quanto maior a necessidade de confiança antes da compra, maior a importância de organizar sinais de autoridade, contexto e presença orgânica.
          </p>
        </div>
      </section>

      <section className="bg-[#11100f] py-24 md:py-32">
        <div className="container mx-auto max-w-[1320px] px-6 xl:px-12">
          <SectionHeader
            center
            eyebrow="Rigor estratégico"
            title="O que o S.I.G.N.A.L não promete"
            text="Metodologia séria também precisa deixar claro o que não deve ser vendido como milagre."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <PromisePanel title="Não prometemos" items={noPromises} icon="x" />
            <PromisePanel title="O que entregamos" items={realDeliveries} icon="check" />
          </div>
          <p className="mx-auto mt-10 max-w-4xl text-center text-lg leading-[1.7] text-[#e0d3c3]">
            O S.I.G.N.A.L não é uma promessa mágica. É uma estrutura para tomar decisões melhores, defender melhor a entrega e evoluir com mais clareza.
          </p>
        </div>
      </section>

      <section className="bg-[#11100f] px-6 pb-24 md:pb-32 xl:px-12">
        <div className="mx-auto max-w-[1080px] rounded-[8px] border border-[#b28453]/35 bg-[#171614] px-7 py-14 text-center md:px-14 md:py-18 shadow-2xl shadow-black/35">
          <span className="font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-[#b28453]">APLIQUE O S.I.G.N.A.L NA SUA AGÊNCIA</span>
          <h2 className="mx-auto mt-6 max-w-4xl font-display text-[34px] sm:text-[44px] md:text-[58px] font-bold leading-[1.08]">
            Transforme busca, IA e autoridade em uma entrega real para seus clientes
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base md:text-lg leading-[1.7] text-[#f8f8f8]/70">
            A AUDITSEO pode atuar nos bastidores da sua agência para aplicar o método S.I.G.N.A.L em diagnósticos, roadmaps, consultorias e entregas white-label.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <PrimaryButton onClick={() => onNavigate("diagnostico")}>Avaliar parceria estratégica</PrimaryButton>
            <button
              onClick={() => onNavigate("diagnostico")}
              className="rounded-full border border-[#b28453]/45 px-7 py-4 text-sm font-bold text-[#f8f8f8] transition-colors hover:bg-[#b28453]/10"
            >
              Falar sobre um cliente específico
            </button>
          </div>
          <p className="mt-7 font-mono text-[11px] uppercase tracking-[0.1em] text-[#8c8275]">
            A primeira conversa é para entender sua agência, sua carteira e o melhor modelo de aplicação.
          </p>
        </div>
      </section>

      <SiteFooter onNavigate={onNavigate} />
    </main>
  );
}

function ComparisonList({ title, items, muted = false }: { title: string; items: string[]; muted?: boolean }) {
  return (
    <div className={muted ? "border-r border-[#b28453]/20 pr-0 md:pr-8" : ""}>
      <h4 className={`font-mono text-[11px] font-bold uppercase tracking-[0.14em] ${muted ? "text-[#8c8275]" : "text-[#b28453]"}`}>
        {title}
      </h4>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-[1.6] text-[#f8f8f8]/72">
            <CircleDot className="mt-1 h-3.5 w-3.5 shrink-0 text-[#b28453]" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SignalMethodMap() {
  return (
    <div className="relative mt-14 overflow-hidden rounded-[28px] border border-[#b28453]/[0.28] bg-[linear-gradient(145deg,rgba(31,30,28,0.96),rgba(17,16,15,0.98))] p-7 shadow-[0_30px_90px_rgba(0,0,0,0.42),inset_0_1px_0_rgba(255,255,255,0.04)] md:p-14">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(178,132,83,0.16),transparent_30%),radial-gradient(circle_at_18%_18%,rgba(224,211,195,0.07),transparent_18%)]" />
      {[...Array(28)].map((_, index) => (
        <span
          key={index}
          className="pointer-events-none absolute h-[2px] w-[2px] rounded-full bg-[#e0d3c3]/30"
          style={{
            top: `${10 + ((index * 19) % 80)}%`,
            left: `${8 + ((index * 31) % 84)}%`,
            opacity: 0.12 + (index % 5) * 0.06,
          }}
        />
      ))}

      <div className="relative z-10 mb-12 flex justify-center">
        <div className="rounded-full border border-[#b28453]/45 bg-[#11100f]/90 px-8 py-4 shadow-[0_0_44px_rgba(178,132,83,0.18)]">
          <span className="font-display text-xl font-bold tracking-[0.2em] text-[#e0d3c3]">S.I.G.N.A.L</span>
        </div>
      </div>

      <div className="relative z-10">
        <div className="absolute left-[7%] right-[7%] top-9 hidden h-px bg-[#b28453]/30 lg:block" />
        <div className="grid gap-8 lg:grid-cols-6">
          {signalLayers.map((layer) => (
            <div key={layer.letter} className="group relative flex gap-5 lg:block lg:text-center">
              <div className="absolute bottom-0 left-9 top-[72px] w-px bg-[#b28453]/24 lg:hidden" />
              <div className="relative z-10 flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full border border-[#b28453]/[0.58] bg-[radial-gradient(circle_at_35%_25%,rgba(224,211,195,0.18),rgba(178,132,83,0.12),rgba(17,16,15,0.95))] shadow-[0_0_32px_rgba(178,132,83,0.18)] transition-all group-hover:border-[#e0d3c3]/80 group-hover:shadow-[0_0_44px_rgba(178,132,83,0.30)] lg:mx-auto">
                <span className="font-serif text-[28px] font-bold text-[#e0d3c3]">{layer.letter}</span>
              </div>
              <div className="pt-1 lg:pt-7">
                <h3 className="font-display text-lg font-bold text-[#f8f8f8]">{layer.name}</h3>
                <p className="mt-3 text-sm leading-[1.55] text-[#f8f8f8]/62">{layer.short}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function LayerDeepDive({ layer, index }: { layer: (typeof signalLayers)[number]; index: number }) {
  return (
    <article className="relative overflow-hidden rounded-[28px] border border-[#b28453]/[0.26] bg-[linear-gradient(145deg,rgba(31,30,28,0.96),rgba(13,13,12,0.98))] p-7 shadow-[0_28px_80px_rgba(0,0,0,0.36),inset_0_1px_0_rgba(255,255,255,0.04)] md:p-14">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(178,132,83,0.20),transparent_68%)]" />
      <div className="absolute left-8 top-14 hidden h-4 w-4 rounded-full border border-[#b28453]/60 bg-[#11100f] shadow-[0_0_22px_rgba(178,132,83,0.32)] lg:block" />
      <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.4fr] lg:gap-14">
        <div className="relative border-l border-[#b28453]/35 pl-6 lg:border-l-0 lg:pl-0">
          <span className="font-display text-[88px] font-bold leading-none tracking-[-0.06em] text-[#b28453] opacity-90 md:text-[116px]">
            {layer.letter}
          </span>
          <div className="mt-5 h-px w-24 bg-[#b28453]/55" />
          <h3 className="mt-7 font-display text-3xl font-bold text-[#f8f8f8] md:text-4xl">{layer.name}</h3>
          <p className="mt-5 font-display text-xl leading-[1.42] text-[#e0d3c3] md:text-2xl">{layer.question}</p>
        </div>

        <div>
          <p className="max-w-3xl text-base leading-[1.75] text-[#f8f8f8]/70 md:text-lg">{layer.explanation}</p>

          <div className="mt-8 rounded-[18px] border border-[#b28453]/[0.18] bg-white/[0.025] p-6">
            <h4 className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[#b28453]">
              {layer.letter === "A" ? "O que estruturamos" : layer.letter === "L" ? "O que acompanhamos" : "O que analisamos"}
            </h4>
            <ul className="mt-5 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {layer.analysis.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-[1.55] text-[#f8f8f8]/68">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#b28453]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5 grid gap-5 md:grid-cols-[1fr_0.9fr]">
            <div className="rounded-[18px] border border-[#b28453]/[0.28] bg-[#b28453]/10 p-[22px]">
              <h4 className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[#e0d3c3]">O que a agência recebe</h4>
              <p className="mt-4 text-sm leading-[1.7] text-[#f8f8f8]/76">{layer.agencyReceives}</p>
            </div>
            <div className="rounded-[12px] border-l-2 border-[#b28453] bg-[#e0d3c3]/[0.04] px-5 py-[18px]">
              <h4 className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[#b28453]">Valor para o cliente</h4>
              <p className="mt-4 text-sm leading-[1.7] text-[#f8f8f8]/72">{layer.result}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
function ComparisonCard({ title, items, highlighted = false }: { title: string; items: string[]; highlighted?: boolean }) {
  return (
    <div className={`rounded-[8px] border p-7 md:p-9 ${highlighted ? "border-[#b28453]/55 bg-[#11100f] text-[#f8f8f8]" : "border-[#11100f]/14 bg-[#f8f8f8]/45 text-[#11100f]"}`}>
      <h3 className="font-display text-2xl font-bold">{title}</h3>
      <ul className="mt-7 space-y-4">
        {items.map((item) => (
          <li key={item} className={`flex gap-3 text-sm leading-[1.65] ${highlighted ? "text-[#f8f8f8]/72" : "text-[#11100f]/72"}`}>
            {highlighted ? <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#b28453]" /> : <CircleDot className="mt-1 h-4 w-4 shrink-0 text-[#6d5132]" />}
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function PromisePanel({ title, items, icon }: { title: string; items: string[]; icon: "x" | "check" }) {
  return (
    <div className="rounded-[8px] border border-[#b28453]/20 bg-[#171614] p-7 md:p-9">
      <h3 className="font-display text-2xl font-bold">{title}</h3>
      <ul className="mt-7 grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-[1.65] text-[#f8f8f8]/70">
            {icon === "check" ? <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#b28453]" /> : <XCircle className="mt-1 h-4 w-4 shrink-0 text-[#8c8275]" />}
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
