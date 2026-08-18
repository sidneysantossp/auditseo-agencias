import React, { useState, ReactNode } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Target,
  Users,
  Zap,
  ShieldCheck,
  MessageCircle,
  Mail,
} from "lucide-react";

interface DiagnosticResult {
  solution: string;
  declared: string;
  opportunity: string;
  auditseo: string;
  evidence?: {
    text: string;
    path: string;
  };
}

const scenarios = [
  {
    id: "foundation",
    title: "Projeto começando do zero",
    text: "Site novo, marca nova ou presença orgânica ainda inexistente.",
    solution: "Search Foundation",
    opportunity:
      "Criar uma fundação estratégica de busca antes que arquitetura, conteúdo e entidade sejam definidos sem critério.",
    auditseo:
      "Atuamos na estruturação da leitura inicial, arquitetura orgânica, estrutura semântica, prioridades técnicas e sinais básicos de autoridade.",
    evidence: {
      text: "Guia: Search Intelligence para Agências",
      path: "/guias/search-intelligence",
    },
  },
  {
    id: "activation",
    title: "Site no ar, mas sem tração",
    text: "O projeto existe, mas nunca conseguiu gerar crescimento orgânico relevante.",
    solution: "Organic Activation",
    opportunity:
      "Reposicionar a conversa com um diagnóstico de ativação orgânica e um roadmap de evolução.",
    auditseo:
      "Atuamos no mapeamento de gargalos, oportunidades, lacunas de conteúdo, problemas técnicos e prioridades de ação.",
    evidence: {
      text: "Metodologia: S.I.G.N.A.L",
      path: "/metodo-signal",
    },
  },
  {
    id: "recovery",
    title: "Projeto que crescia e despencou",
    text: "Já houve tráfego ou visibilidade, mas depois aconteceu uma queda difícil de recuperar.",
    solution: "Search Recovery",
    opportunity:
      "Transformar a queda em uma conversa técnica e estratégica sobre reconstrução de relevância, autoridade e confiança.",
    auditseo:
      "Atuamos na análise de histórico, páginas afetadas, concorrentes, sinais técnicos, autoridade e mudanças de intenção ou mercado.",
  },
  {
    id: "authority",
    title: "Cliente high-ticket",
    text: "A decisão depende de confiança, autoridade, reputação e validação pública.",
    solution: "Entity Authority",
    opportunity:
      "Criar uma frente de autoridade de entidade para sustentar reputação, contexto e validação pública.",
    auditseo:
      "Atuamos na organização da narrativa, páginas de serviço, reputação, provas, avaliações, menções, dados estruturados e consistência entre canais.",
    evidence: {
      text: "AUDITSEO-OBS-001: Por que o Google reconhece uma pessoa para um tema e praticamente a ignora para outro?",
      path: "/estudos-busca-ia/reconhecimento-de-entidade-por-contexto",
    },
  },
  {
    id: "content",
    title: "Conteúdo sem retorno",
    text: "Existe produção, mas falta conexão com intenção, jornada e decisão.",
    solution: "Intent Content Architecture",
    opportunity:
      "Reposicionar conteúdo como arquitetura de intenção, não como calendário de publicações.",
    auditseo:
      "Atuamos no mapeamento de intenções, clusters, páginas, lacunas e oportunidades conectadas à jornada orgânica.",
    evidence: {
      text: "Guia: Narrativa Semântica e Autoridade de Entidade",
      path: "/guias/narrativa-semantica",
    },
  },
  {
    id: "geo",
    title: "Cliente perguntando sobre IA/GEO",
    text: "A empresa quer entender nova busca, ChatGPT, Gemini, AI Overviews ou respostas generativas.",
    solution: "Generative Search Architecture",
    opportunity:
      "Transformar a curiosidade sobre IA em uma proposta de arquitetura de contexto e sinais consistentes.",
    auditseo:
      "Atuamos na avaliação da clareza da oferta, estrutura de dados, consistência de menções e autoridade temática.",
    evidence: {
      text: "AI Search: Como a Inteligência Artificial Está Mudando a Busca",
      path: "/guias/ai-search",
    },
  },
  {
    id: "migration",
    title: "Redesign, migração ou expansão",
    text: "O site será refeito, migrado ou terá nova estrutura de páginas.",
    solution: "SEO Migration & Risk Control",
    opportunity:
      "Criar uma camada de proteção orgânica para preservar sinais existentes e preparar crescimento futuro.",
    auditseo:
      "Atuamos no mapeamento de URLs, arquitetura, indexação, redirects, páginas prioritárias, sinais existentes e riscos de perda orgânica.",
  },
  {
    id: "evolution",
    title: "Manutenção de liderança",
    text: "O cliente já tem bons resultados e quer preservar a relevância conquistada.",
    solution: "Search Intelligence & Evolution",
    opportunity:
      "Manter a relevância através de monitoramento avançado de sinais, autoridade e novos paradigmas de busca.",
    auditseo:
      "Atuamos no monitoramento de SERP, sinais de entidade, concorrência, tendências de busca generativa e evolução técnica.",
  },
];

const bottleneckOptions = [
  { id: "tech", title: "Dificuldade técnica/implementação" },
  { id: "strategy", title: "Falta de clareza na estratégia" },
  { id: "content", title: "Produção de conteúdo ineficiente" },
  { id: "authority", title: "Baixa autoridade/reputação" },
  { id: "drop", title: "Queda de tráfego sem explicação" },
  { id: "pressure", title: "Pressão do cliente por resultados" },
  { id: "ai", title: "Dúvidas sobre IA e Busca Generativa" },
  { id: "migration", title: "Processos de migração ou redesign" },
];

const objectiveOptions = [
  { id: "recovery", title: "Recuperar tráfego perdido" },
  { id: "leads", title: "Gerar leads/vendas qualificadas" },
  { id: "brand", title: "Construir autoridade de marca" },
  { id: "ai", title: "Preparar para busca generativa (IA)" },
  { id: "scale", title: "Escalar produção de conteúdo" },
  { id: "safety", title: "Garantir segurança em migração" },
];

const urgencyOptions = [
  { id: "critical", title: "Crítica", text: "Risco de perda de contrato ou queda severa." },
  { id: "high", title: "Alta", text: "Pressão por definições e resultados rápidos." },
  { id: "medium", title: "Média", text: "Planejamento para o próximo ciclo." },
  { id: "low", title: "Baixa", text: "Exploração de novas oportunidades." },
];

export default function DiagnosticoPage({ onNavigate }: { onNavigate: (id: string) => void }) {
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState<Record<string, string>>({});
  const [result, setResult] = useState<DiagnosticResult | null>(null);

  const steps = [
    {
      id: "scenario",
      title: "Qual o cenário do projeto?",
      description: "Selecione a situação que melhor descreve o momento atual do cliente na agência.",
    },
    {
      id: "bottlenecks",
      title: "Onde estão os principais gargalos?",
      description: "Identifique o que mais trava a evolução orgânica deste cliente hoje.",
    },
    {
      id: "objectives",
      title: "Qual o objetivo principal?",
      description: "O que o cliente espera como resultado prioritário nos próximos meses?",
    },
    {
      id: "urgency",
      title: "Qual o nível de urgência?",
      description: "Defina a prioridade de atendimento e definição estratégica.",
    },
  ];

  const handleSelect = (optionId: string) => {
    const currentStepId = steps[step - 1].id;
    const newSelections = { ...selections, [currentStepId]: optionId };
    setSelections(newSelections);

    if (step < steps.length) {
      setStep(step + 1);
    } else {
      buildDiagnosticResult(newSelections);
    }
  };

  const buildDiagnosticResult = (currentSelections: Record<string, string>) => {
    const scenario = scenarios.find((s) => s.id === currentSelections.scenario) || scenarios[0];
    const urgency = urgencyOptions.find((u) => u.id === currentSelections.urgency) || urgencyOptions[0];
    const bottleneck = bottleneckOptions.find((b) => b.id === currentSelections.bottlenecks)?.title || "Não especificado";
    const objective = objectiveOptions.find((o) => o.id === currentSelections.objectives)?.title || "Não especificado";

    // Epistemic labels logic:
    // Declared: The raw inputs from the user, including scenario, bottleneck, objective and urgency.
    const declared = `${scenario.title}. Gargalo: ${bottleneck}. Objetivo: ${objective}. Urgência declarada: ${urgency.title}.`;

    setResult({
      solution: scenario.solution,
      declared,
      opportunity: scenario.opportunity,
      auditseo: scenario.auditseo,
      evidence: scenario.evidence,
    });
  };

  const resetScan = () => {
    setStep(1);
    setSelections({});
    setResult(null);
  };

  const goBack = () => {
    if (result) {
      setResult(null);
      setStep(steps.length);
    } else if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="min-h-screen bg-[#11100f] pt-[120px] pb-20 font-sans selection:bg-[#b28453] selection:text-white">
      <div className="container mx-auto max-w-[1120px] px-6">
        {!result ? (
          <div className="mx-auto max-w-3xl">
            <div className="mb-12">
              <div className="mb-6 flex items-center gap-4">
                <span className="font-mono text-[12px] font-bold uppercase tracking-[0.2em] text-[#b28453]">Passo {step} de {steps.length}</span>
                <div className="h-px flex-1 bg-white/10" />
              </div>
              <h1 className="font-display text-[42px] font-bold leading-[1.1] tracking-[-0.02em] text-[#f8f8f8] md:text-[56px]">
                {steps[step - 1].title}
              </h1>
              <p className="mt-4 text-lg text-[#f8f8f8]/60">{steps[step - 1].description}</p>
            </div>

            <div className="grid gap-4">
              {step === 1 &&
                scenarios.map((s) => (
                  <OptionCard
                    key={s.id}
                    title={s.title}
                    text={s.text}
                    onClick={() => handleSelect(s.id)}
                    selected={selections.scenario === s.id}
                  />
                ))}
              {step === 2 &&
                bottleneckOptions.map((opt) => (
                  <OptionCard
                    key={opt.id}
                    title={opt.title}
                    onClick={() => handleSelect(opt.id)}
                    selected={selections.bottlenecks === opt.id}
                  />
                ))}
              {step === 3 &&
                objectiveOptions.map((opt) => (
                  <OptionCard
                    key={opt.id}
                    title={opt.title}
                    onClick={() => handleSelect(opt.id)}
                    selected={selections.objectives === opt.id}
                  />
                ))}
              {step === 4 &&
                urgencyOptions.map((opt) => (
                  <OptionCard
                    key={opt.id}
                    title={opt.title}
                    text={opt.text}
                    onClick={() => handleSelect(opt.id)}
                    selected={selections.urgency === opt.id}
                  />
                ))}
            </div>

            {step > 1 && (
              <div className="mt-10">
                <button onClick={goBack} className="flex items-center gap-2 text-sm font-bold text-[#f8f8f8]/60 hover:text-[#b28453]">
                  <ChevronLeft size={18} /> Voltar ao passo anterior
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="mb-10">
                <span className="font-mono text-[12px] font-bold uppercase tracking-[0.2em] text-[#b28453]">Diagnóstico Concluído</span>
                <h2 className="mt-6 font-display text-[48px] font-bold leading-[1.1] tracking-[-0.02em] md:text-[72px]">
                  Sua agência precisa de <span className="text-[#b28453]">{result.solution}</span>
                </h2>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <ResultBlock title="Declarado pelo usuário" text={result.declared} icon={<Users size={18} />} />
                <ResultBlock title="Recomendado" text={result.opportunity} icon={<Zap size={18} />} />
                {result.evidence && (
                  <ResultBlock
                    title="Evidência de apoio"
                    text={result.evidence.text}
                    icon={<ShieldCheck size={18} />}
                    link={{
                      text: "Ver referência",
                      path: result.evidence.path,
                    }}
                    onNavigate={onNavigate}
                  />
                )}
              </div>

              <div className="mt-8">
                <ResultBlock
                  title="Como a AUDITSEO pode atuar"
                  text={result.auditseo}
                  icon={<Target size={18} />}
                />
              </div>

              <div className="mt-12 flex flex-wrap gap-4">
                <button
                  onClick={goBack}
                  className="inline-flex items-center gap-2 rounded-full border border-[#b28453]/30 px-6 py-3 text-sm font-bold text-[#f8f8f8] transition-colors hover:bg-[#b28453]/10"
                >
                  <ChevronLeft size={16} /> Ajustar respostas
                </button>
                <button
                  onClick={resetScan}
                  className="inline-flex items-center gap-2 rounded-full border border-[#b28453]/30 px-6 py-3 text-sm font-bold text-[#f8f8f8] transition-colors hover:bg-[#b28453]/10"
                >
                  Refazer diagnóstico
                </button>
              </div>
            </div>

            <div className="border-t border-[#b28453]/16 bg-[#0f0f0e] p-6 md:p-10 lg:border-l lg:border-t-0 lg:col-span-4">
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#b28453]">Próximo passo</span>
              <h3 className="mt-5 font-display text-3xl font-bold leading-[1.12] text-[#f8f8f8]">
                Quer avaliar esse cenário com a AUDITSEO?
              </h3>
              <p className="mt-4 text-sm leading-[1.7] text-[#f8f8f8]/64">
                Entre em contato através dos nossos canais oficiais para uma conversa estratégica sobre os bastidores da sua agência.
              </p>

              <div className="mt-8 grid gap-4">
                <a
                  href="https://wa.me/5511996384376"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#b28453] px-7 py-4 text-sm font-bold text-white transition-all hover:bg-[#e0d3c3] hover:text-[#11100f]"
                >
                  <MessageCircle size={18} />
                  Continuar pelo WhatsApp
                </a>
                <a
                  href="mailto:parceria@auditseo.com.br"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-[#b28453]/30 px-7 py-4 text-sm font-bold text-[#f8f8f8] transition-all hover:bg-[#b28453]/10"
                >
                  <Mail size={18} />
                  Falar por e-mail
                </a>
                <p className="mt-2 px-2 text-[10px] italic text-[#f8f8f8]/40 text-center">
                  * A primeira conversa é para entender o cenário, não para empurrar uma solução.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

interface OptionCardProps {
  title: string;
  text?: string;
  onClick: () => void;
  selected?: boolean;
}

const OptionCard: React.FC<OptionCardProps> = ({
  title,
  text,
  onClick,
  selected,
}) => {
  return (
    <button
      onClick={onClick}
      className={`group flex w-full flex-col items-start rounded-[16px] border p-6 text-left transition-all duration-300 ${
        selected
          ? "border-[#b28453] bg-[#b28453]/10 shadow-[0_0_20px_rgba(178,132,83,0.15)]"
          : "border-white/10 bg-white/[0.02] hover:border-white/25 hover:bg-white/[0.05]"
      }`}
    >
      <div className="flex w-full items-center justify-between">
        <h3 className="font-display text-xl font-bold text-[#f8f8f8]">{title}</h3>
        <ChevronRight
          size={20}
          className={`text-[#b28453] transition-transform duration-300 ${
            selected ? "translate-x-1" : "group-hover:translate-x-1"
          }`}
        />
      </div>
      {text && <p className="mt-2 text-sm text-[#f8f8f8]/50">{text}</p>}
    </button>
  );
};

interface ResultBlockProps {
  title: string;
  text: string;
  icon: ReactNode;
  link?: { text: string; path: string };
  onNavigate?: (path: string) => void;
}

const ResultBlock: React.FC<ResultBlockProps> = ({
  title,
  text,
  icon,
  link,
  onNavigate,
}) => {
  return (
    <div className="flex flex-col rounded-[16px] border border-white/10 bg-white/[0.02] p-6">
      <div className="mb-4 flex items-center gap-3 text-[#b28453]">
        {icon}
        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.14em]">{title}</span>
      </div>
      <p className="flex-1 text-sm leading-[1.65] text-[#f8f8f8]/80">{text}</p>
      {link && onNavigate && (
        <div className="mt-6 pt-5 border-t border-white/5">
          <a
            href={link.path}
            onClick={(e) => {
              if (link.path.startsWith("/")) {
                e.preventDefault();
                onNavigate(link.path);
              }
            }}
            className="group inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#b28453] transition-colors hover:text-[#e0d3c3]"
          >
            {link.text}
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      )}
    </div>
  );
};
