import React, { useState, useEffect, ReactNode } from "react";
import {
  Search,
  Target,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  Send,
  CheckCircle2,
  AlertCircle,
  FileText,
  Zap,
  ShieldCheck,
  Globe,
  Database,
  Users,
  LineChart,
  CircleDot,
  ExternalLink,
} from "lucide-react";
import Header from "./Header";
import SiteFooter from "./SiteFooter";

interface Answers {
  scenario: string;
  bottlenecks: string[];
  objective: string;
  urgency: string;
}

const steps = [
  {
    id: "scenario",
    title: "Qual o cenário do projeto?",
    description: "Selecione a situação que melhor descreve o momento atual do cliente na agência.",
  },
  {
    id: "bottlenecks",
    title: "Onde estão os principais gargalos?",
    description: "Quais dificuldades técnicas ou estratégicas impedem o avanço do projeto?",
  },
  {
    id: "objective",
    title: "Qual o objetivo principal?",
    description: "O que a agência ou o cliente espera resolver com prioridade?",
  },
  {
    id: "urgency",
    title: "Qual o nível de urgência?",
    description: "Como a agência percebe a pressão por resultados ou definições?",
  },
];

const scenarios = [
  {
    id: "foundation",
    title: "Projeto começando do zero",
    text: "Site novo, marca nova ou presença orgânica ainda inexistente.",
    solution: "Search Foundation",
    resultScenario: "Projeto novo com risco de nascer sem base orgânica clara.",
    opportunity:
      "Criar uma fundação estratégica de busca antes que arquitetura, conteúdo e entidade sejam definidos sem critério.",
    auditseo:
      "Atuamos na estruturação da leitura inicial, arquitetura orgânica, estrutura semântica, prioridades técnicas e sinais básicos de autoridade.",
    evidence: {
      text: "Guia Search Intelligence: Pilares de infraestrutura para novos domínios.",
      path: "/guias/search-intelligence",
    },
  },
  {
    id: "activation",
    title: "Site no ar, mas sem tração",
    text: "O projeto existe, mas nunca conseguiu gerar crescimento orgânico relevante.",
    solution: "Organic Activation",
    resultScenario: "Projeto estagnado com baixa clareza estratégica.",
    opportunity:
      "Reposicionar a conversa com um diagnóstico de ativação orgânica e um roadmap de evolução.",
    auditseo:
      "Atuamos no mapeamento de gargalos, oportunidades, lacunas de conteúdo, problemas técnicos e prioridades de ação.",
    evidence: {
      text: "Método S.I.G.N.A.L: Como identificar e destravar potenciais reprimidos.",
      path: "/metodo-signal",
    },
  },
  {
    id: "recovery",
    title: "Projeto que crescia e despencou",
    text: "Já houve tráfego ou visibilidade, mas depois aconteceu uma queda difícil de recuperar.",
    solution: "Search Recovery",
    resultScenario: "Projeto em perda de visibilidade com causa ainda pouco clara.",
    opportunity:
      "Transformar a queda em uma conversa técnica e estratégica sobre reconstrução de relevância, autoridade e confiança.",
    auditseo:
      "Atuamos na análise de histórico, páginas afetadas, concorrentes, sinais técnicos, autoridade e mudanças de intenção ou mercado.",
    evidence: {
      text: "Guia Search Intelligence: Protocolo de investigação de quedas de visibilidade.",
      path: "/guias/search-intelligence",
    },
  },
  {
    id: "authority",
    title: "Cliente high-ticket",
    text: "A decisão depende de confiança, autoridade, reputação e validação pública.",
    solution: "Entity Authority",
    resultScenario: "Cliente com alto valor de decisão e dependência de confiança antes da compra.",
    opportunity:
      "Criar uma frente de autoridade de entidade para sustentar reputação, contexto e validação pública.",
    auditseo:
      "Atuamos na organização da narrativa, páginas de serviço, reputação, provas, avaliações, menções, dados estruturados e consistência entre canais.",
    evidence: {
      text: "Estudo Lab #001: Reconhecimento de entidade por contexto temático.",
      path: "/estudos-busca-ia/reconhecimento-de-entidade-por-contexto",
    },
  },
  {
    id: "content",
    title: "Conteúdo sem retorno",
    text: "Existe produção, mas falta conexão com intenção, jornada e decisão.",
    solution: "Intent Content Architecture",
    resultScenario: "Produção orgânica com volume, mas pouca direção estratégica.",
    opportunity:
      "Reposicionar conteúdo como arquitetura de intenção, não como calendário de publicações.",
    auditseo:
      "Atuamos no mapeamento de intenções, clusters, páginas, lacunas e oportunidades conectadas à jornada orgânica.",
    evidence: {
      text: "Guia Narrativa Semântica: Arquitetura de conteúdo baseada em intenção.",
      path: "/guias/narrativa-semantica",
    },
  },
  {
    id: "geo",
    title: "Cliente perguntando sobre IA/GEO",
    text: "A empresa quer entender nova busca, ChatGPT, Gemini, AI Overviews ou respostas generativas.",
    solution: "Generative Search Architecture",
    resultScenario: "Cliente com necessidade de estruturação de contexto e sinais de entidade para sistemas de busca modernos.",
    opportunity:
      "Transformar a curiosidade sobre IA em uma proposta de arquitetura de contexto e sinais consistentes.",
    auditseo:
      "Atuamos na avaliação da clareza da oferta, estrutura de dados, consistência de menções e autoridade temática.",
    evidence: {
      text: "Guia AI Search: Como estruturar sinais para a nova era da busca.",
      path: "/guias/ai-search",
    },
  },
  {
    id: "migration",
    title: "Redesign, migração ou expansão",
    text: "O site será refeito, migrado ou terá nova estrutura de páginas.",
    solution: "SEO Migration & Risk Control",
    resultScenario: "Mudança estrutural com risco de perda orgânica se não houver governança de busca.",
    opportunity:
      "Criar uma camada de proteção orgânica para preservar sinais existentes e preparar crescimento futuro.",
    auditseo:
      "Atuamos no mapeamento de URLs, arquitetura, indexação, redirects, páginas prioritárias, sinais existentes e riscos de perda orgânica.",
    evidence: {
      text: "Guia Search Intelligence: Governança de sinais em mudanças estruturais.",
      path: "/guias/search-intelligence",
    },
  },
  {
    id: "evolution",
    title: "Manutenção de liderança",
    text: "O cliente já é líder ou tem bons resultados e quer se manter no topo.",
    solution: "Search Intelligence & Evolution",
    resultScenario: "Liderança de mercado com necessidade de evolução contínua de sinais.",
    opportunity:
      "Manter a relevância através de monitoramento avançado de sinais, autoridade e novos paradigmas de busca.",
    auditseo:
      "Atuamos no monitoramento de SERP, sinais de entidade, concorrência, tendências de busca generativa e evolução técnica.",
    evidence: {
      text: "Guia Search Intelligence: Protocolos de evolução e monitoramento de sinais.",
      path: "/guias/search-intelligence",
    },
  },
];

const bottleneckOptions = [
  "Dificuldade técnica/implementação",
  "Falta de clareza na estratégia",
  "Produção de conteúdo ineficiente",
  "Baixa autoridade/reputação",
  "Queda de tráfego sem explicação",
  "Pressão do cliente por resultados",
  "Dúvidas sobre IA e Busca Generativa",
  "Processos de migração ou redesign",
];

const objectiveOptions = [
  "Recuperar tráfego perdido",
  "Gerar leads/vendas qualificadas",
  "Construir autoridade de marca",
  "Preparar para busca generativa (IA)",
  "Escalar produção de conteúdo",
  "Garantir segurança em migração",
];

const urgencyOptions = [
  { id: "critical", title: "Crítica", text: "Risco de perda de contrato ou queda severa." },
  { id: "high", title: "Alta", text: "Pressão por definições e resultados rápidos." },
  { id: "medium", title: "Média", text: "Planejamento para o próximo ciclo." },
  { id: "low", title: "Baixa", text: "Exploração de novas oportunidades." },
];

export default function DiagnosticoPage({ onNavigate }: { onNavigate: (id: string) => void }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({
    scenario: "",
    bottlenecks: [],
    objective: "",
    urgency: "",
  });
  const [showResult, setShowResult] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [contact, setContact] = useState({
    name: "",
    agency: "",
    whatsapp: "",
    email: "",
    agencySite: "",
    clientUrl: "",
    context: "",
  });

  const activeStep = steps[currentStep];

  const handleScenarioSelect = (id: string) => {
    setAnswers({ ...answers, scenario: id });
    setCurrentStep(1);
  };

  const handleBottleneckToggle = (option: string) => {
    const current = [...answers.bottlenecks];
    const index = current.indexOf(option);
    if (index > -1) {
      current.splice(index, 1);
    } else {
      current.push(option);
    }
    setAnswers({ ...answers, bottlenecks: current });
  };

  const handleObjectiveSelect = (option: string) => {
    setAnswers({ ...answers, objective: option });
    setCurrentStep(3);
  };

  const handleUrgencySelect = (id: string) => {
    setAnswers({ ...answers, urgency: id });
    setShowResult(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goBack = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const resetScan = () => {
    setAnswers({ scenario: "", bottlenecks: [], objective: "", urgency: "" });
    setCurrentStep(0);
    setShowResult(false);
    setFormSent(false);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  const result = showResult ? buildDiagnosticResult(answers) : null;

  return (
    <div className="min-h-screen bg-[#11100f] text-[#f8f8f8] font-sans selection:bg-[#b28453] selection:text-white">
      <Header onNavClick={onNavigate} activeSection="diagnostico" />

      <main className="relative pt-32 pb-24">
        <div className="container mx-auto px-6">
          {!showResult ? (
            <div className="mx-auto max-w-4xl">
              <div className="mb-12">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-[12px] font-bold uppercase tracking-[0.2em] text-[#b28453]">
                    Passo {currentStep + 1} de {steps.length}
                  </span>
                  <div className="h-[1px] flex-1 bg-[#b28453]/20" />
                </div>
                <h2 className="mt-6 font-display text-[42px] font-bold leading-[1.1] tracking-[-0.02em] md:text-[64px]">
                  {activeStep.title}
                </h2>
                <p className="mt-6 text-lg leading-[1.6] text-[#f8f8f8]/60">{activeStep.description}</p>
              </div>

              {currentStep === 0 && (
                <div className="grid gap-4 md:grid-cols-2">
                  {scenarios.map((scenario) => (
                    <button
                      key={scenario.id}
                      onClick={() => handleScenarioSelect(scenario.id)}
                      className="group relative flex flex-col items-start rounded-[24px] border border-[#b28453]/15 bg-white/[0.02] p-8 text-left transition-all hover:border-[#b28453]/40 hover:bg-[#b28453]/5"
                    >
                      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#b28453]/10 text-[#b28453] transition-colors group-hover:bg-[#b28453] group-hover:text-white">
                        <ChevronRight size={24} />
                      </div>
                      <h3 className="font-display text-2xl font-bold text-[#f8f8f8]">{scenario.title}</h3>
                      <p className="mt-3 text-sm leading-[1.6] text-[#f8f8f8]/50">{scenario.text}</p>
                    </button>
                  ))}
                </div>
              )}

              {currentStep === 1 && (
                <div className="grid gap-3 sm:grid-cols-2">
                  {bottleneckOptions.map((option) => {
                    const selected = answers.bottlenecks.includes(option);
                    return (
                      <button
                        key={option}
                        onClick={() => handleBottleneckToggle(option)}
                        className={`flex items-center gap-4 rounded-[18px] border p-5 text-left transition-all ${
                          selected ? "border-[#b28453] bg-[#b28453]/10 text-[#f8f8f8]" : "border-[#b28453]/15 bg-white/[0.02] text-[#f8f8f8]/60 hover:border-[#b28453]/40"
                        }`}
                      >
                        <div className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border ${selected ? "bg-[#b28453] border-[#b28453]" : "border-[#b28453]/30"}`}>
                          {selected && <CheckCircle2 size={14} className="text-white" />}
                        </div>
                        <span className="text-sm font-bold">{option}</span>
                      </button>
                    );
                  })}
                  <div className="mt-8 flex justify-between sm:col-span-2">
                    <button onClick={goBack} className="flex items-center gap-2 text-sm font-bold text-[#f8f8f8]/60 hover:text-[#b28453]">
                      <ChevronLeft size={18} /> Voltar
                    </button>
                    <button
                      onClick={() => setCurrentStep(2)}
                      disabled={answers.bottlenecks.length === 0}
                      className="inline-flex items-center gap-2 rounded-full bg-[#b28453] px-8 py-4 text-sm font-bold text-white transition-all hover:bg-[#e0d3c3] hover:text-[#11100f] disabled:opacity-30"
                    >
                      Continuar <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="grid gap-3 sm:grid-cols-2">
                  {objectiveOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleObjectiveSelect(option)}
                      className="rounded-[18px] border border-[#b28453]/15 bg-white/[0.02] p-6 text-left font-bold text-[#f8f8f8]/80 transition-all hover:border-[#b28453]/40 hover:bg-[#b28453]/5"
                    >
                      {option}
                    </button>
                  ))}
                  <div className="mt-8 flex sm:col-span-2">
                    <button onClick={goBack} className="flex items-center gap-2 text-sm font-bold text-[#f8f8f8]/60 hover:text-[#b28453]">
                      <ChevronLeft size={18} /> Voltar
                    </button>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="grid gap-4">
                  {urgencyOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => handleUrgencySelect(option.id)}
                      className="flex flex-col rounded-[22px] border border-[#b28453]/15 bg-white/[0.02] p-8 text-left transition-all hover:border-[#b28453]/40 hover:bg-[#b28453]/5"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-display text-2xl font-bold text-[#f8f8f8]">{option.title}</h3>
                        <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#b28453]/30">
                          <CircleDot size={15} />
                        </span>
                      </div>
                      <p className="mt-3 text-sm text-[#f8f8f8]/50">{option.text}</p>
                    </button>
                  ))}
                  <div className="mt-8 flex">
                    <button onClick={goBack} className="flex items-center gap-2 text-sm font-bold text-[#f8f8f8]/60 hover:text-[#b28453]">
                      <ChevronLeft size={18} /> Voltar
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <div className="mb-10">
                  <span className="font-mono text-[12px] font-bold uppercase tracking-[0.2em] text-[#b28453]">Diagnóstico Concluído</span>
                  <h2 className="mt-6 font-display text-[48px] font-bold leading-[1.1] tracking-[-0.02em] md:text-[72px]">
                    Sua agência precisa de <span className="text-[#b28453]">{result?.solution}</span>
                  </h2>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <ResultBlock title="Declarado pelo usuário" text={result!.scenario} icon={<Users size={18} />} />
                  <ResultBlock title="Inferido" text={result!.risk} icon={<LineChart size={18} />} />
                  <ResultBlock title="Recomendado" text={result!.opportunity} icon={<Zap size={18} />} />
                  {result?.evidence && (
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
                    text={result!.auditseo}
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
                  Envie o resumo do diagnóstico e vamos analisar se existe oportunidade para atuar nos bastidores da sua agência.
                </p>

                {formSent ? (
                  <div className="mt-8 rounded-[22px] border border-[#b28453]/32 bg-[#b28453]/10 p-6">
                    <CheckCircle2 className="h-9 w-9 text-[#b28453]" />
                    <h4 className="mt-5 font-display text-2xl font-bold text-[#f8f8f8]">Diagnóstico enviado</h4>
                    <p className="mt-3 text-sm leading-[1.7] text-[#f8f8f8]/66">
                      Recebemos o contexto inicial. A primeira conversa é para entender o cenário, não para empurrar uma solução.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="mt-8 grid gap-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <TextInput label="Nome" value={contact.name} onChange={(value) => setContact((c) => ({ ...c, name: value }))} required />
                      <TextInput label="Agência" value={contact.agency} onChange={(value) => setContact((c) => ({ ...c, agency: value }))} required />
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <TextInput label="WhatsApp" value={contact.whatsapp} onChange={(value) => setContact((c) => ({ ...c, whatsapp: value }))} required />
                      <TextInput label="E-mail" value={contact.email} onChange={(value) => setContact((c) => ({ ...c, email: value }))} type="email" required />
                    </div>
                    <TextInput label="Site da agência" value={contact.agencySite} onChange={(value) => setContact((c) => ({ ...c, agencySite: value }))} required />
                    <div className="grid gap-2">
                      <TextInput label="URL do cliente/projeto, opcional" value={contact.clientUrl} onChange={(value) => setContact((c) => ({ ...c, clientUrl: value }))} />
                      <p className="px-5 text-[10px] italic text-[#f8f8f8]/40">
                        * A URL informada serve apenas para contexto comercial e não será analisada tecnicamente por este assessment.
                      </p>
                    </div>
                    <label className="grid gap-2">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#b28453]">Contexto rápido do caso, opcional</span>
                      <textarea
                        value={contact.context}
                        onChange={(e) => setContact((c) => ({ ...c, context: e.target.value }))}
                        className="min-h-[112px] rounded-[18px] border border-[#b28453]/22 bg-[#11100f] px-5 py-4 text-sm text-[#f8f8f8] outline-none transition-colors placeholder:text-[#f8f8f8]/30 focus:border-[#b28453]/60"
                        placeholder="Conte em poucas linhas o que está acontecendo com essa conta."
                      />
                    </label>
                    <button
                      type="submit"
                      className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#b28453] px-7 py-4 text-sm font-bold text-white transition-all hover:bg-[#e0d3c3] hover:text-[#11100f]"
                    >
                      Enviar diagnóstico
                      <Send size={15} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          )}
        </div>
      </main>

      <SiteFooter onNavigate={onNavigate} />
    </div>
  );
}

function buildDiagnosticResult(answers: Answers) {
  const scenario = scenarios.find((item) => item.id === answers.scenario) || scenarios[1];
  const urgency = urgencyOptions.find((item) => item.id === answers.urgency);
  const objectiveText = answers.objective ? ` O objetivo da agência é ${answers.objective.toLowerCase()}.` : "";
  const bottleneckText = answers.bottlenecks.length ? ` Os gargalos sinalizados foram ${answers.bottlenecks.join(", ")}.` : "";

  const urgencyRisk =
    urgency?.id === "critical"
      ? "Baseado no relato, a conta está em risco crítico. Recomendamos transformar a incerteza em direção técnica imediatamente."
      : urgency?.id === "high"
        ? "Inferimos que a pressão atual pode comprometer a renovação ou a percepção de valor do contrato."
        : urgency?.id === "medium"
          ? "Inferimos uma dúvida latente que pode evoluir para um gargalo comercial se não for endereçada."
          : "O cenário permite uma organização estratégica preventiva antes de qualquer pressão comercial direta.";

  return {
    solution: scenario.solution,
    scenario: `Cenário declarado: ${scenario.resultScenario}`,
    risk: `Interpretação de risco: ${urgencyRisk}${objectiveText}${bottleneckText}`,
    opportunity: `Ação recomendada: ${scenario.opportunity}`,
    auditseo: scenario.auditseo,
    evidence: scenario.evidence,
  };
}

function ResultBlock({
  title,
  text,
  icon,
  link,
  onNavigate,
}: {
  title: string;
  text: string;
  icon: ReactNode;
  link?: { text: string; path: string };
  onNavigate?: (id: string) => void;
}) {
  const handleLinkClick = (e: React.MouseEvent) => {
    if (link && onNavigate) {
      e.preventDefault();
      onNavigate(link.path);
    }
  };

  return (
    <div className="rounded-[18px] border border-[#b28453]/18 bg-white/[0.025] p-5">
      <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#b28453]/10 text-[#b28453]">{icon}</div>
      <h4 className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[#b28453]">{title}</h4>
      <p className="mt-3 text-sm leading-[1.7] text-[#f8f8f8]/68">{text}</p>
      {link && (
        <a
          href={link.path}
          onClick={handleLinkClick}
          className="mt-4 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[#b28453] transition-colors hover:text-[#e0d3c3]"
        >
          {link.text}
          <ArrowRight size={12} />
        </a>
      )}
    </div>
  );
}

function TextInput({
  label,
  value,
  onChange,
  type = "text",
  required = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2">
      <span className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#b28453]">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="h-12 rounded-full border border-[#b28453]/22 bg-[#11100f] px-5 text-sm text-[#f8f8f8] outline-none transition-colors placeholder:text-[#f8f8f8]/30 focus:border-[#b28453]/60"
      />
    </label>
  );
}
