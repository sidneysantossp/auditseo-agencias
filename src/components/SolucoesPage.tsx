import { useEffect, type ReactNode } from "react";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  CircleDot,
  Compass,
  Layers3,
  RefreshCw,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import SiteFooter from "./SiteFooter";

interface SolucoesPageProps {
  onNavigate: (targetId: string) => void;
}

const scenarioNodes = [
  { label: "Zero", x: 28, y: 20 },
  { label: "Estagnado", x: 73, y: 18 },
  { label: "Queda", x: 86, y: 50 },
  { label: "Autoridade", x: 70, y: 82 },
  { label: "Sinais", x: 30, y: 82 },
  { label: "Evolução", x: 14, y: 51 },
];

const scenarioCards = [
  {
    title: "Projeto começando do zero",
    text: "O cliente precisa nascer com base orgânica, estrutura e clareza de busca.",
  },
  {
    title: "Site no ar, mas sem tração",
    text: "O projeto existe, mas nunca conseguiu transformar presença em crescimento.",
  },
  {
    title: "Projeto que crescia e despencou",
    text: "O cliente perdeu visibilidade e precisa entender a causa antes de agir.",
  },
  {
    title: "Cliente high-ticket",
    text: "A decisão depende de confiança, autoridade, reputação e validação pública.",
  },
  {
    title: "Conteúdo sem direção",
    text: "Existe produção, mas falta conexão com intenção, jornada e decisão.",
  },
  {
    title: "Marca com sinais frágeis",
    text: "A empresa quer inovação, mas seu contexto ainda é pouco interpretável para a nova busca.",
  },
  {
    title: "Redesign, migração ou expansão",
    text: "Mudanças estruturais podem gerar risco orgânico se não houver governança.",
  },
  {
    title: "Cliente recorrente sem percepção de evolução",
    text: "A conta precisa de ciclos claros de aprendizado, prioridade e próximos passos.",
  },
];

const scenarioCardAnchors = [
  "cenario-novo-projeto",
  "cenario-sem-tracao",
  "cenario-queda",
  "cenario-autoridade",
  "cenario-conteudo",
  "cenario-contexto",
  "cenario-migracao",
  "cenario-evolucao",
];

const scenarioSolutions = [
  {
    name: "Search Foundation",
    scenario: "Para projetos começando do zero",
    problem:
      "Começar sem estrutura de SEO, arquitetura, intenção, dados estruturados e clareza de entidade pode fazer o projeto nascer limitado.",
    value:
      "Estruturar a base orgânica desde o início para que o site já comece com direção, contexto e capacidade de evolução.",
    agencySells: "Uma fundação estratégica de busca para projetos digitais novos.",
    backstage:
      "Organizamos a leitura inicial, arquitetura orgânica, estrutura semântica, prioridades técnicas e sinais básicos de autoridade.",
  },
  {
    name: "Organic Activation",
    scenario: "Para sites que estão no ar, mas nunca ganharam tração",
    problem:
      "O projeto existe, mas não cresce porque falta diagnóstico, prioridade, intenção, arquitetura ou autoridade.",
    value:
      "Identificar o que impede o crescimento e transformar um site passivo em uma frente orgânica com direção.",
    agencySells: "Um plano de ativação orgânica para projetos estagnados.",
    backstage:
      "Mapeamos gargalos, oportunidades, lacunas de conteúdo, problemas técnicos e prioridades de ação.",
  },
  {
    name: "Search Recovery",
    scenario: "Para projetos que cresceram e depois despencaram",
    problem:
      "A queda pode estar ligada a técnica, conteúdo, autoridade, intenção, concorrência, updates, mudança de SERP ou perda de confiança da entidade.",
    value:
      "Diagnosticar a causa da queda e reconstruir sinais de relevância, autoridade e confiança.",
    agencySells: "Um plano de recuperação orgânica e reconstrução de autoridade.",
    backstage:
      "Analisamos histórico, perdas, páginas afetadas, concorrentes, sinais técnicos, autoridade e mudanças de intenção/mercado.",
  },
  {
    name: "Entity Authority",
    scenario: "Para clientes que dependem de confiança antes da compra",
    problem:
      "Em mercados high-ticket, não basta aparecer. O cliente pesquisa, compara, valida reputação e procura sinais de autoridade antes de decidir.",
    value:
      "Organizar os sinais que fazem a marca ser compreendida como entidade, associada ao contexto certo e percebida como opção confiável.",
    agencySells: "Uma estratégia de autoridade de entidade e confiança digital.",
    backstage:
      "Estruturamos narrativa, páginas de serviço, reputação, provas, avaliações, menções, dados estruturados e consistência entre canais.",
  },
  {
    name: "Intent Content Architecture",
    scenario: "Para clientes que produzem conteúdo, mas não geram resultado",
    problem:
      "Conteúdo sem intenção vira volume. Volume sem arquitetura não sustenta autoridade, tráfego qualificado nem decisão.",
    value:
      "Reorganizar conteúdo a partir de intenções reais: descoberta, comparação, confiança, objeção e decisão.",
    agencySells: "Uma arquitetura de conteúdo orientada por intenção e jornada.",
    backstage:
      "Mapeamos intenções, clusters, páginas, lacunas e oportunidades conectadas à jornada orgânica.",
  },
  {
    name: "Generative Search Architecture",
    scenario: "Para marcas que precisam de estruturação de sinais e contexto",
    problem:
      "Muitas empresas querem inovação na busca, mas não possuem clareza semântica, autoridade, dados estruturados ou consistência pública.",
    value:
      "Preparar a marca para ser melhor interpretada por buscadores, mecanismos de resposta e ambientes generativos.",
    agencySells: "Uma solução de arquitetura de contexto para a nova era da busca.",
    backstage:
      "Avaliamos entidades, estrutura semântica, perguntas estratégicas, dados estruturados, reputação e clareza de oferta.",
    note:
      "Sem prometer aparição garantida: o trabalho é preparar, organizar sinais, aumentar clareza e melhorar capacidade de interpretação.",
  },
  {
    name: "SEO Migration & Risk Control",
    scenario: "Para redesigns, migrações e expansões de site",
    problem:
      "Muitas perdas orgânicas acontecem porque migração e redesign são tratados como projeto visual ou técnico, sem governança de busca.",
    value:
      "Reduzir risco, preservar sinais existentes e preparar a nova estrutura para crescimento.",
    agencySells: "Uma camada de proteção orgânica para mudanças estruturais.",
    backstage:
      "Mapeamos URLs, arquitetura, indexação, redirects, páginas prioritárias, sinais existentes e riscos de perda orgânica.",
  },
  {
    name: "Organic Evolution Cycle",
    scenario: "Para clientes recorrentes que precisam enxergar evolução",
    problem:
      "Sem uma narrativa de evolução, a entrega orgânica vira relatório, rotina e percepção de estagnação.",
    value:
      "Transformar dados, aprendizados e oportunidades em ciclos claros de evolução estratégica.",
    agencySells: "Uma camada recorrente de inteligência orgânica para retenção e expansão.",
    backstage:
      "Acompanhamos sinais, consultas, páginas, concorrentes, autoridade, aprendizados e próximos movimentos.",
  },
];

const scenarioSolutionAnchors = [
  "search-foundation",
  "organic-activation",
  "search-recovery",
  "entity-authority",
  "intent-content-architecture",
  "generative-search-architecture",
  "seo-migration-risk-control",
  "organic-evolution-cycle",
];

const offerMap = [
  ["Meu site nunca trouxe resultado.", "Organic Activation"],
  ["Nosso tráfego caiu e ninguém conseguiu recuperar.", "Search Recovery"],
  ["Queremos estruturar sinais para a nova busca.", "Generative Search Architecture"],
  ["Produzimos conteúdo, mas não vemos retorno.", "Intent Content Architecture"],
  ["Estamos refazendo o site.", "SEO Migration & Risk Control"],
  ["Preciso justificar a continuidade do contrato.", "Organic Evolution Cycle"],
];

const agencyValueCards = [
  "Mais precisão comercial",
  "Mais clareza de proposta",
  "Mais diferenciação estratégica",
  "Mais argumentos para retenção",
  "Mais oportunidades de expansão",
  "Menos dependência de discurso genérico sobre SEO ou IA",
];

const backstageSteps = [
  "Entendemos o cenário do cliente",
  "Aplicamos a leitura estratégica pelo S.I.G.N.A.L",
  "Estruturamos a solução adequada",
  "Validamos prioridades com critério especializado",
  "Entregamos a inteligência white-label para sua agência conduzir",
];

export default function SolucoesPage({ onNavigate }: SolucoesPageProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.pageSchema = "solucoes";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          name: "Soluções de Search Intelligence para Agências | AUDITSEO",
          url: `${window.location.origin}/solucoes`,
          description:
            "Soluções white-label de Search Intelligence, autoridade de entidade e arquitetura de contexto para diferentes cenários da carteira de agências.",
        },
        {
          "@type": "Service",
          name: "Soluções white-label para cenários de projetos orgânicos",
          provider: { "@type": "Organization", name: "AUDITSEO" },
          serviceType: "Search Intelligence, SEO, autoridade e evolução orgânica",
        },
        {
          "@type": "ItemList",
          name: "Soluções por cenário de carteira",
          itemListElement: scenarioSolutions.map((solution, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: solution.name,
            description: solution.scenario,
          })),
        },
      ],
    });
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  const scrollToScenarios = () => {
    const target = document.getElementById("mapa-cenarios");
    if (!target) return;
    window.scrollTo({ top: target.offsetTop - 82, behavior: "smooth" });
  };

  return (
    <main className="bg-[#11100f] text-[#f8f8f8]">
      <style>{`
        @keyframes scenarioNodeFloat {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -9px, 0); }
        }

        @keyframes scenarioCorePulse {
          0%, 100% { opacity: 0.9; filter: drop-shadow(0 0 26px rgba(178,132,83,0.26)); }
          50% { opacity: 1; filter: drop-shadow(0 0 42px rgba(178,132,83,0.40)); }
        }

        @keyframes scenarioParticle {
          0%, 100% { opacity: 0.14; transform: translate3d(0, 0, 0); }
          50% { opacity: 0.44; transform: translate3d(7px, -10px, 0); }
        }

        @keyframes scenarioLine {
          from { stroke-dashoffset: 120; }
          to { stroke-dashoffset: 0; }
        }
      `}</style>

      <section id="solucoes" className="relative flex min-h-[92vh] items-center overflow-hidden pb-16 pt-[112px] md:pb-20 md:pt-[128px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_35%,rgba(178,132,83,0.17),transparent_35%),linear-gradient(135deg,rgba(224,211,195,0.045),transparent_44%)]" />
        <div className="container relative z-10 mx-auto max-w-[1320px] px-6 xl:px-12">
          <div className="grid items-center gap-14 lg:grid-cols-12 xl:gap-16">
            <div className="lg:col-span-6">
              <span className="mb-5 inline-block font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-[#b28453]">
                SOLUÇÕES PARA CENÁRIOS REAIS DA SUA CARTEIRA
              </span>
              <h1 className="max-w-[760px] font-display text-[clamp(54px,5.4vw,82px)] font-bold leading-[1.02] tracking-[-0.045em] text-[#f8f8f8]">
                Cada projeto orgânico exige uma estratégia diferente
              </h1>
              <p className="mt-8 max-w-[720px] text-[clamp(18px,1.35vw,22px)] leading-[1.55] text-[rgba(248,248,248,0.76)]">
                A AUDITSEO estrutura soluções white-label para diferentes momentos da carteira da sua agência: projetos começando do zero, sites estagnados, quedas de tráfego, baixa autoridade, conteúdo sem direção e estruturação de sinais para a nova busca.
              </p>
              <p className="mt-[22px] max-w-[620px] text-[16px] leading-[1.5] text-[#e0d3c3]/[0.78]">
                O método fica nos bastidores. O que sua agência apresenta é uma solução clara para o momento real de cada cliente.
              </p>
              <div className="mt-11 flex flex-col gap-4 sm:flex-row">
                <PrimaryButton onClick={() => onNavigate("diagnostico")}>Avaliar parceria estratégica</PrimaryButton>
                <button
                  onClick={scrollToScenarios}
                  className="rounded-full border border-[#b28453]/45 px-7 py-4 text-sm font-bold text-[#f8f8f8] transition-colors hover:bg-[#b28453]/10"
                >
                  Ver cenários
                </button>
              </div>
              <p className="mt-9 font-mono text-[11px] uppercase tracking-[0.08em] text-[#8c8275]">
                Lançamento · Recuperação · Autoridade · Sinais · Conteúdo · Evolução
              </p>
            </div>
            <div className="lg:col-span-6">
              <ScenarioConstellationVisual />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#11100f] py-24 md:py-32">
        <div className="container mx-auto max-w-[1120px] px-6 xl:px-12">
          <span className="font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-[#b28453]">VISÃO AUDITSEO</span>
          <h2 className="mt-5 max-w-4xl font-display text-[36px] font-bold leading-[1.08] tracking-[-0.03em] text-[#f8f8f8] md:text-[54px]">
            SEO não é mais uma entrega única para todos os clientes
          </h2>
          <div className="mt-10 grid gap-7 text-lg leading-[1.75] text-[#f8f8f8]/70 md:text-xl">
            <p>
              Existem clientes que estão <span className="text-[#b28453]">começando do zero</span>. Outros já têm site, conteúdo e histórico, mas{" "}
              <span className="text-[#b28453]">nunca conseguiram transformar presença orgânica em resultado</span>. Alguns cresceram durante anos e, de repente,{" "}
              <span className="text-[#b28453]">perderam visibilidade</span>. Outros dependem de{" "}
              <span className="text-[#b28453]">confiança, autoridade e validação</span> antes da decisão de compra.
            </p>
            <p>Tratar todos esses cenários com a mesma entrega de SEO é reduzir uma oportunidade estratégica a uma lista de tarefas.</p>
            <p className="font-display text-2xl font-bold leading-[1.4] text-[#e0d3c3]">
              A AUDITSEO estrutura soluções para <span className="text-[#b28453]">cada estágio</span> da jornada de busca do cliente.
            </p>
          </div>
        </div>
      </section>

      <section id="mapa-cenarios" className="bg-[#e0d3c3] py-24 text-[#11100f] md:py-32">
        <div className="container mx-auto max-w-[1240px] px-6 xl:px-12">
          <SectionHeader
            dark
            center
            eyebrow="Mapa de cenários"
            title="Onde o projeto do seu cliente está travado?"
            text="Identificar o cenário correto é o primeiro passo para vender a solução correta."
          />
          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {scenarioCards.map((card, index) => (
              <a
                key={index}
                href={`#${scenarioCardAnchors[index]}`}
                className="group flex flex-col justify-between rounded-3xl border border-[#11100f]/10 bg-white/40 p-8 transition-all hover:-translate-y-1 hover:bg-white/60 hover:shadow-xl"
              >
                <div>
                  <span className="font-mono text-xs font-bold text-[#b28453]">0{index + 1}</span>
                  <h4 className="mt-4 font-display text-xl font-bold leading-[1.2]">{card.title}</h4>
                  <p className="mt-4 text-sm leading-[1.6] text-[#11100f]/65">{card.text}</p>
                </div>
                <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#b28453]">
                  Ver solução <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#11100f] py-24 md:py-32">
        <div className="container mx-auto max-w-[1240px] px-6 xl:px-12">
          <div className="space-y-24 md:space-y-32">
            {scenarioSolutions.map((solution, index) => (
              <article
                key={solution.name}
                id={scenarioSolutionAnchors[index]}
                className="grid gap-12 lg:grid-cols-12 lg:items-center"
              >
                <div className="lg:col-span-5">
                  <span className="font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-[#b28453]">
                    {solution.scenario}
                  </span>
                  <h3 className="mt-6 font-display text-[32px] font-bold leading-[1.1] text-[#f8f8f8] md:text-[48px]">
                    {solution.name}
                  </h3>
                  <div className="mt-10 space-y-8">
                    <div>
                      <h4 className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#b28453]">O Problema</h4>
                      <p className="mt-3 text-lg leading-[1.65] text-[#f8f8f8]/75">{solution.problem}</p>
                    </div>
                    <div>
                      <h4 className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#b28453]">A Solução</h4>
                      <p className="mt-3 text-lg leading-[1.65] text-[#f8f8f8]/75">{solution.value}</p>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-7">
                  <div className="rounded-[40px] border border-[#b28453]/20 bg-white/[0.02] p-8 md:p-14">
                    <div className="grid gap-10 sm:grid-cols-2">
                      <div>
                        <h4 className="font-display text-xl font-bold text-[#f8f8f8]">O que a agência vende</h4>
                        <p className="mt-4 text-sm leading-[1.7] text-[#f8f8f8]/50">{solution.agencySells}</p>
                      </div>
                      <div>
                        <h4 className="font-display text-xl font-bold text-[#f8f8f8]">O que fazemos nos bastidores</h4>
                        <p className="mt-4 text-sm leading-[1.7] text-[#f8f8f8]/50">{solution.backstage}</p>
                      </div>
                    </div>
                    {solution.note && (
                      <div className="mt-10 rounded-2xl border border-[#b28453]/25 bg-[#b28453]/5 p-6">
                        <p className="text-sm italic leading-[1.6] text-[#e0d3c3]/70">{solution.note}</p>
                      </div>
                    )}
                    <div className="mt-12 flex justify-end">
                      <button
                        onClick={() => onNavigate("diagnostico")}
                        className="group flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-[#b28453] transition-colors hover:text-[#e0d3c3]"
                      >
                        Avaliar esse cenário <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e0d3c3] py-24 text-[#11100f] md:py-32">
        <div className="container mx-auto max-w-[1120px] px-6 xl:px-12">
          <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <SectionHeader
                dark
                eyebrow="Venda de valor"
                title="A conversa muda quando a solução é clara"
                text="Em vez de vender 'pacotes de SEO', sua agência passa a vender soluções para o momento real do cliente."
              />
              <div className="mt-12 grid gap-4 sm:grid-cols-2">
                {offerMap.map(([ask, offer]) => (
                  <div key={ask} className="rounded-2xl border border-[#11100f]/10 bg-white/45 p-6">
                    <p className="text-xs italic text-[#11100f]/50">" {ask} "</p>
                    <p className="mt-3 font-bold text-[#b28453]">{offer}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="rounded-[40px] bg-[#11100f] p-8 md:p-14 text-white shadow-2xl">
                <h3 className="font-display text-2xl font-bold leading-[1.2] md:text-3xl">
                  Ganhos para a sua agência
                </h3>
                <div className="mt-10 space-y-5">
                  {agencyValueCards.map((item) => (
                    <div key={item} className="flex items-center gap-4 text-[#f8f8f8]/70">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#b28453]/20 text-[#b28453]">
                        <CheckCircle2 size={12} />
                      </div>
                      <span className="text-sm md:text-base">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-12 pt-10 border-t border-white/10">
                  <PrimaryButton onClick={() => onNavigate("diagnostico")} className="w-full">
                    Iniciar parceria estratégica
                  </PrimaryButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#11100f] py-24 md:py-32">
        <div className="container mx-auto max-w-[1240px] px-6 xl:px-12">
          <div className="text-center">
            <SectionHeader
              eyebrow="Nos bastidores"
              title="Como a inteligência é construída"
              text="Um fluxo focado em fornecer a base estratégica para sua agência manter o protagonismo."
            />
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-5">
            {backstageSteps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#b28453]/40 bg-[#b28453]/10 font-mono text-lg font-bold text-[#b28453]">
                  {index + 1}
                </div>
                <p className="mt-6 text-sm leading-[1.6] text-[#f8f8f8]/60">{step}</p>
                {index < backstageSteps.length - 1 && (
                  <div className="absolute left-[calc(50%+30px)] top-6 hidden h-px w-[calc(100%-60px)] bg-gradient-to-r from-[#b28453]/40 to-transparent md:block" />
                )}
              </div>
            ))}
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

function ScenarioConstellationVisual() {
  return (
    <div className="relative aspect-square w-full max-w-[540px]">
      <div className="absolute inset-0 animate-[scenarioCorePulse_4s_ease-in-out_infinite] rounded-full bg-[#b28453]/10 blur-3xl" />
      <svg viewBox="0 0 100 100" className="relative h-full w-full overflow-visible drop-shadow-[0_0_20px_rgba(178,132,83,0.15)]">
        {scenarioNodes.map((node, i) => (
          <g key={i} className="animate-[scenarioNodeFloat_6s_ease-in-out_infinite]" style={{ animationDelay: `${i * 0.8}s` }}>
            <circle cx={node.x} cy={node.y} r="1.5" fill="#b28453" className="opacity-40" />
            <text x={node.x} y={node.y - 4} textAnchor="middle" className="font-mono text-[2.8px] font-bold uppercase tracking-widest fill-[#b28453] opacity-70">
              {node.label}
            </text>
            {scenarioNodes.map((target, j) =>
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
        <circle cx="50" cy="50" r="12" className="animate-[scenarioCorePulse_3s_ease-in-out_infinite] fill-[#b28453]/5 stroke-[#b28453]/30" strokeWidth="0.5" />
        <Layers3 x="44" y="44" size={12} className="text-[#b28453] opacity-60" />
      </svg>
    </div>
  );
}
