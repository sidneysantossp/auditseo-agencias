import { useState, type FormEvent, type ReactNode } from "react";
import {
  AlertTriangle, ArrowRight, Award, BarChart3, Bot, CheckCircle2, Compass,
  DollarSign, FileText, Gauge, Globe, Layers3, Search, Send, ShieldCheck,
  Sparkles, Target, TrendingUp, Users, MessageCircle, Mail
} from "lucide-react";
import SiteFooter from "./SiteFooter";
import NeuralSearchBrain from "./NeuralSearchBrain";
import SignalMethod from "./SignalMethod";

interface ConsultoriaPageProps {
  onNavigate: (targetId: string) => void;
}

const methodologyCards = [
  { num: "01", title: "Auditoria de Visibilidade", desc: "Análise técnica para identificar onde a marca perde espaço orgânico.", icon: <Search size={22} className="text-[#b28453]" /> },
  { num: "02", title: "Mapeamento de Intenção", desc: "Identificação de termos e contextos que conectam o público ao negócio.", icon: <Target size={22} className="text-[#b28453]" /> },
  { num: "03", title: "Autoridade de Entidade", desc: "Estruturação de sinais que validam a marca como referência técnica.", icon: <Award size={22} className="text-[#b28453]" /> },
  { num: "04", title: "Preparação para IA (GEO)", desc: "Ajustes semânticos para auxiliar a compreensão da marca por sistemas generativos.", icon: <Bot size={22} className="text-[#b28453]" /> },
  { num: "05", title: "Engenharia On-Page", desc: "Otimização de performance e estrutura para melhor experiência e indexação.", icon: <Gauge size={22} className="text-[#b28453]" /> },
  { num: "06", title: "Arquitetura de Conteúdo", desc: "Direcionamento editorial baseado em lacunas de informação e autoridade.", icon: <FileText size={22} className="text-[#b28453]" /> },
  { num: "07", title: "Reputação Digital", desc: "Monitoramento e fomento de sinais externos que corroboram a entidade.", icon: <Globe size={22} className="text-[#b28453]" /> },
  { num: "08", title: "Governança e Evolução", desc: "Acompanhamento de métricas de saúde orgânica e próximos ciclos estratégicos.", icon: <BarChart3 size={22} className="text-[#b28453]" /> },
];

const faqItems = [
  { id: "ec-1", question: "Quanto tempo leva para ver resultados de SEO?", answer: "O tempo de maturação orgânica varia conforme a autoridade atual, concorrência e complexidade técnica do site. O diagnóstico inicial define uma projeção realista baseada no cenário específico do negócio." },
  { id: "ec-2", question: "O que é GEO e por que minha empresa precisa disso?", answer: "GEO (Generative Engine Optimization) é a disciplina de preparar ativos digitais para serem melhor compreendidos por sistemas de busca generativa. Diferente do SEO tradicional, foca em clareza de entidade e corroboração de sinais para assistentes de IA." },
  { id: "ec-3", question: "Vocês atendem qualquer segmento de mercado?", answer: "Atuamos com empresas B2B e B2C que possuem jornadas de decisão baseadas em autoridade, confiança e busca de informação técnica ou especializada." },
  { id: "ec-4", question: "Como funciona a entrega do serviço?", answer: "A consultoria inicia com um diagnóstico profundo, seguido pela estruturação de um roadmap estratégico. A execução foca em pilares técnicos, semânticos e de autoridade, com ciclos mensais de análise e ajuste." },
  { id: "ec-5", question: "Qual a diferença entre SEO tradicional e Search Intelligence?", answer: "Search Intelligence é a camada estratégica que conecta SEO técnico, autoridade de entidade, dados estruturados e GEO. Não focamos apenas em palavras-chave, mas na construção de uma entidade digital compreensível e confiável." },
  { id: "ec-6", question: "Preciso ter um site novo para começar?", answer: "Não. Atendemos projetos desde a fundação até marcas consolidadas que precisam de recuperação orgânica ou expansão para novos ecossistemas de busca." },
  { id: "ec-7", question: "Como sei se minha empresa está pronta para contratar?", answer: "Sua empresa está pronta se busca reduzir a dependência de anúncios pagos, consolidar autoridade no nicho e preparar a marca para a transição da busca generativa." },
];

export default function ConsultoriaPage({ onNavigate }: ConsultoriaPageProps) {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 82, behavior: "smooth" });
  };

  const handleNav = (id: string) => {
    if (["inicio", "contato", "metodologia"].includes(id)) {
      if (id === "inicio") window.scrollTo({ top: 0, behavior: "smooth" });
      else scrollTo(id === "contato" ? id : id);
      return;
    }
    onNavigate(id);
  };

  return (
    <main>
      {/* ===== HERO ===== */}
      <section id="inicio" className="relative min-h-[820px] lg:min-h-[880px] bg-[#11100f] text-[#f8f8f8] flex items-center pt-[100px] md:pt-[110px] pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 top-[80px] lg:hidden pointer-events-none z-0 flex items-center justify-center">
          <div className="w-full max-w-[550px] aspect-[760/520] scale-[1.35] opacity-[0.35] -translate-y-20">
            <NeuralSearchBrain />
          </div>
        </div>
        <div className="container mx-auto px-[24px] md:px-[48px] max-w-[1320px] z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center">
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <span className="text-[#a69580] text-[11px] font-mono font-semibold tracking-[0.16em] uppercase mb-4 opacity-90">CONSULTORIA DE SEARCH INTELLIGENCE</span>
              <h1 className="font-display font-bold text-[#f8f8f8] mb-8" style={{ fontSize: "clamp(48px, 4.8vw, 72px)", lineHeight: "1.04", letterSpacing: "-0.045em", maxWidth: "720px" }}>
                Inteligência estratégica para marcas na nova busca digital.
              </h1>
              <p className="text-[#e0d3c3] text-lg md:text-xl font-semibold mb-8" style={{ maxWidth: "690px", lineHeight: "1.55", letterSpacing: "-0.01em" }}>
                Metodologia orientada por sinais para estruturar autoridade, visibilidade orgânica e governança de marca em ecossistemas generativos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => onNavigate("diagnostico")} className="bg-[#b28453] text-white px-8 py-4 rounded-full text-base font-bold tracking-wide transition-all duration-300 hover:bg-[#e0d3c3] hover:text-[#11100f] cursor-pointer">
                  Solicitar Diagnóstico de Busca →
                </button>
                <button onClick={() => scrollTo("metodologia")} className="border border-[#b28453]/45 text-[#f8f8f8] px-8 py-4 rounded-full text-base font-semibold transition-all hover:bg-[#b28453]/10">
                  Conhecer a metodologia
                </button>
              </div>
              <div className="flex items-center lg:justify-start font-mono mt-8 select-none text-[#8c8275] gap-x-2" style={{ opacity: 0.62, fontSize: "11px" }}>
                <span>SEO</span><span className="text-[#b28453]/30 font-bold">·</span>
                <span>GEO</span><span className="text-[#b28453]/30 font-bold">·</span>
                <span>IA</span><span className="text-[#b28453]/30 font-bold">·</span>
                <span>Autoridade de entidade</span><span className="text-[#b28453]/30 font-bold">·</span>
                <span>Search Intelligence</span>
              </div>
            </div>
            <div className="hidden lg:flex lg:col-span-5 items-center justify-center scale-[1.04] lg:scale-[1.06] lg:-translate-x-4 overflow-visible">
              <NeuralSearchBrain />
            </div>
          </div>
        </div>
      </section>

      {/* ===== 3 PILARES ===== */}
      <section className="bg-[#11100f] py-20 md:py-28">
        <div className="container mx-auto max-w-[1320px] px-6 xl:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="max-w-4xl text-left">
              <span className="mb-4 block font-mono text-[12px] font-bold uppercase tracking-[0.14em] text-[#b28453]">PILARES DA ESTRATÉGIA</span>
              <h2 className="font-display text-[34px] font-bold leading-[1.08] tracking-[-0.035em] text-[#f8f8f8] md:text-[52px]">
                A busca digital exige uma nova camada de profundidade estratégica
              </h2>
              <p className="mt-6 max-w-3xl text-base leading-[1.7] text-[#f8f8f8]/72 md:text-lg">
                Estruturamos a presença orgânica da sua empresa para os ambientes onde seu cliente busca, compara e decide.
              </p>
            </div>
            <div className="rounded-[26px] border border-[#b28453]/26 bg-[#171614] p-7 shadow-[0_26px_80px_rgba(0,0,0,0.34)] md:p-9">
              <ul className="space-y-5">
                {[
                  "Atração Qualificada — Foco em contextos de busca que conectam a marca a usuários com alta intenção de decisão.",
                  "Prontidão para IA — Otimização de sinais semânticos para auxiliar a leitura da marca em sistemas generativos.",
                  "Direcionamento Estratégico — Decisões baseadas em evidências documentadas e monitoramento contínuo de sinais.",
                ].map((item) => (
                  <li key={item} className="flex gap-4 text-sm leading-[1.6] text-[#f8f8f8]/74 md:text-base">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#b28453]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SOLUÇÃO ===== */}
      <section className="bg-[#e0d3c3] py-20 text-[#11100f] md:py-28">
        <div className="container mx-auto max-w-[1320px] px-6 xl:px-12">
          <div className="max-w-4xl text-left">
            <span className="mb-4 block font-mono text-[12px] font-bold uppercase tracking-[0.14em] text-[#b28453]">ENTREGA</span>
            <h2 className="font-display text-[34px] font-bold leading-[1.08] tracking-[-0.035em] text-[#11100f] md:text-[52px]">
              O que a AUDITSEO estrutura para sua marca
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-[1.7] text-[#11100f]/72 md:text-lg">
              Estratégia, técnica e governança combinadas para uma presença orgânica resiliente e autoritativa.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { icon: FileText, title: "Diagnóstico Estratégico", text: "Leitura completa do cenário atual para identificar lacunas e oportunidades orgânicas reais." },
              { icon: Compass, title: "Roadmap de Evolução", text: "Priorização técnica e editorial para transformar análise em ações sequenciadas e lógicas." },
              { icon: ShieldCheck, title: "Apoio Contínuo", text: "Acompanhamento recorrente com ajustes baseados na evolução dos sinais e do mercado de busca." },
            ].map((sol) => {
              const Icon = sol.icon;
              return (
                <article key={sol.title} className="rounded-[22px] border border-[#11100f]/12 bg-[#f8f8f8]/44 p-7 shadow-[0_20px_70px_rgba(17,16,15,0.10)]">
                  <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-full border border-[#b28453]/36 bg-[#11100f] text-[#b28453]"><Icon size={20} /></div>
                  <h3 className="font-display text-2xl font-bold leading-[1.12]">{sol.title}</h3>
                  <p className="mt-5 text-sm leading-[1.7] text-[#11100f]/72">{sol.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== RESPIRADOR ===== */}
      <section className="bg-[#11100f] text-[#f8f8f8] py-16 md:py-24 flex items-center justify-center">
        <div className="container mx-auto px-6 max-w-[1320px] text-center select-none">
          <p className="font-display font-medium text-lg sm:text-2xl md:text-3xl leading-relaxed tracking-tight max-w-4xl mx-auto text-[#e0d3c3]">
            “A nova busca digital exige uma nova camada de profundidade estratégica dentro da sua empresa.”
          </p>
        </div>
      </section>

      {/* ===== 4 AMBIENTES DA BUSCA ===== */}
      <section className="bg-[#11100f] text-[#f8f8f8] py-24 md:py-32">
        <div className="container mx-auto px-6 xl:px-12 max-w-[1320px]">
          <div className="text-left flex flex-col items-start mb-16 md:mb-24">
            <span className="text-[#b28453] text-[13px] tracking-[0.12em] font-mono font-bold uppercase mb-4">A BUSCA SE FRAGMENTOU</span>
            <h2 className="font-display text-[36px] sm:text-[44px] md:text-[52px] font-bold text-[#f8f8f8] leading-[1.1] tracking-tight max-w-4xl">
              Hoje a decisão do seu cliente passa por muito mais do que uma busca simples no Google
            </h2>
            <div className="w-[160px] h-[4px] bg-[#b28453] mt-6 mb-8" />
            <p className="text-[#c9c9c9] text-base md:text-lg leading-relaxed max-w-3xl">
              Seu cliente pesquisa no Google, compara mapas, lê avaliações, consome conteúdo e faz perguntas para assistentes de IA antes de decidir. Sua marca precisa estar em todos esses ambientes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[36px] mb-16">
            {[
              { num: "01", title: "Google e Busca Orgânica", desc: "Onde o ranqueamento tradicional e a relevância continuam decisivos para descoberta e consideração da sua marca.", svg: <svg className="absolute right-[32px] bottom-[28px] w-[42px] h-[42px] opacity-[0.55] text-[#b28453] transition-all duration-300 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" strokeLinecap="round" /><line x1="11" y1="8" x2="11" y2="14" strokeLinecap="round" /><line x1="8" y1="11" x2="14" y2="11" strokeLinecap="round" /></svg> },
              { num: "02", title: "SEO Local e Mapas", desc: "Pilar essencial para empresas dependentes de relevância regional e decisões próximas da conversão física.", svg: <svg className="absolute right-[32px] bottom-[28px] w-[42px] h-[42px] opacity-[0.55] text-[#b28453] transition-all duration-300 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" strokeLinecap="round" /><circle cx="12" cy="10" r="3" /></svg> },
              { num: "03", title: "Autoridade Temática", desc: "O ecossistema que faz sua marca ser encontrada com respostas estruturadas, gerando credibilidade e confiança contextual.", svg: <svg className="absolute right-[32px] bottom-[28px] w-[42px] h-[42px] opacity-[0.55] text-[#b28453] transition-all duration-300 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><polygon points="12 2 2 7 12 12 22 7 12 2" strokeLinecap="round" /><polyline points="2 17 12 22 22 17" strokeLinecap="round" /><polyline points="2 12 12 17 22 12" strokeLinecap="round" /></svg> },
              { num: "04", title: "Ambientes Generativos", desc: "Google AI Overviews, ChatGPT, Gemini, Copilot, Perplexity — onde clareza técnica e estruturas semânticas pautam recomendações.", svg: <svg className="absolute right-[32px] bottom-[28px] w-[42px] h-[42px] opacity-[0.55] text-[#b28453] transition-all duration-300 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707.707M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" strokeLinecap="round" /></svg> },
            ].map((box) => (
              <div key={box.num} className="group relative overflow-hidden min-h-[300px] p-[42px] rounded-[22px] transition-all duration-350 hover:-translate-y-2" style={{ background: "linear-gradient(145deg, rgba(31,30,28,0.98) 0%, rgba(17,16,15,0.98) 58%, rgba(11,11,10,1) 100%)", border: "1px solid rgba(178,132,83,0.34)", boxShadow: "0 28px 70px rgba(0,0,0,0.38), inset 0 1px 0 rgba(255,255,255,0.05)" }}>
                <h3 className="font-bold text-[#f8f8f8]" style={{ fontFamily: "'Space Grotesk', 'Manrope', 'Inter', sans-serif", fontSize: "24px", lineHeight: "1.18", letterSpacing: "-0.025em" }}>{box.title}</h3>
                <div className="w-[54px] h-[2px] my-[22px]" style={{ background: "linear-gradient(90deg, #b28453, rgba(178,132,83,0))" }} />
                <p className="font-normal" style={{ fontSize: "16.5px", lineHeight: "1.65", color: "rgba(248,248,248,0.72)", maxWidth: "92%" }}>{box.desc}</p>
                {box.svg}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 6 CARDS DE VALOR ===== */}
      <section className="relative overflow-hidden bg-[#11100f] text-[#f8f8f8] py-24 md:py-32">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#b28453]/4 rounded-full blur-[160px] pointer-events-none" />
        <div className="container mx-auto px-[48px] max-w-[1320px] relative z-10">
          <div className="text-left flex flex-col items-start mb-16 md:mb-24">
            <span className="text-[#b28453] text-[13px] tracking-[0.12em] font-mono font-bold uppercase mb-4">CRESCIMENTO ESTRATÉGICO</span>
            <h2 className="font-display text-[36px] sm:text-[44px] md:text-[52px] font-bold text-[#ffffff] leading-[1.1] tracking-tight max-w-4xl">
              A AUDITSEO fortalece a presença digital da sua empresa sem aumentar a complexidade da sua operação
            </h2>
            <div className="w-[160px] h-[4px] bg-[#b28453] mt-6 mb-8" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[36px]">
            {[
              { num: "I", title: "Decisões com mais segurança", desc: "Diagnósticos profundos e roteiros estratégicos para sua empresa apresentar planos mais sólidos e aumentar a percepção de valor.", svg: <svg className="absolute right-[32px] bottom-[28px] w-[42px] h-[42px] opacity-[0.55] text-[#b28453] transition-all duration-300 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg> },
              { num: "II", title: "Evolução da receita orgânica", desc: "Estruturação do site como um canal de aquisição qualificada que gera leads sem depender exclusivamente de anúncios.", svg: <svg className="absolute right-[32px] bottom-[28px] w-[42px] h-[42px] opacity-[0.55] text-[#b28453] transition-all duration-300 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" strokeDasharray="2 2" /><circle cx="12" cy="12" r="1.5" fill="#b28453" /><path d="M 12 1 L 12 3" /><path d="M 12 21 L 12 23" /><path d="M 1 12 L 3 12" /><path d="M 21 12 L 23 12" /></svg> },
              { num: "III", title: "Preparação para a IA", desc: "Otimização de sinais de entidade para auxiliar a marca a ser citada e compreendida por assistentes generativos.", svg: <svg className="absolute right-[32px] bottom-[28px] w-[42px] h-[42px] opacity-[0.55] text-[#b28453] transition-all duration-300 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg> },
              { num: "IV", title: "Método, não achismo", desc: "Troque decisões improvisadas por diagnósticos, auditorias semânticas e roadmaps práticos baseados em evidências.", svg: <svg className="absolute right-[32px] bottom-[28px] w-[42px] h-[42px] opacity-[0.55] text-[#b28453] transition-all duration-300 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg> },
              { num: "V", title: "Consolide sua autoridade", desc: "Posicione sua marca como referência no seu nicho para ser uma opção confiável quando seu cliente pesquisar.", svg: <svg className="absolute right-[32px] bottom-[28px] w-[42px] h-[42px] opacity-[0.55] text-[#b28453] transition-all duration-300 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M 12 22 s 8 -4 8 -10 V 5 l -8 -3 -8 3 v 7 c 0 6 8 10 8 10 Z" /></svg> },
              { num: "VI", title: "Proteção de presença", desc: "Evite que lacunas de autoridade ou técnica permitam que concorrentes ocupem o espaço da sua marca nos resultados.", svg: <svg className="absolute right-[32px] bottom-[28px] w-[42px] h-[42px] opacity-[0.55] text-[#b28453] transition-all duration-300 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M 7 11 V 7 a 5 5 0 0 1 10 0 v 4" /></svg> },
            ].map((card) => (
              <div key={card.num} className="group relative overflow-hidden min-h-[300px] p-[42px] rounded-[22px] transition-all duration-350 hover:-translate-y-2" style={{ background: "linear-gradient(145deg, rgba(31,30,28,0.98) 0%, rgba(17,16,15,0.98) 58%, rgba(11,11,10,1) 100%)", border: "1px solid rgba(178,132,83,0.34)", boxShadow: "0 28px 70px rgba(0,0,0,0.38), inset 0 1px 0 rgba(255,255,255,0.05)" }}>
                <div className="absolute -top-[90px] -right-[90px] w-[220px] h-[220px] bg-[radial-gradient(circle,rgba(178,132,83,0.18)_0%,rgba(178,132,83,0.07)_36%,transparent_68%)] pointer-events-none" />
                <h3 className="font-bold text-[#f8f8f8]" style={{ fontFamily: "'Space Grotesk', 'Manrope', 'Inter', sans-serif", fontSize: "24px", lineHeight: "1.18", letterSpacing: "-0.025em" }}>{card.title}</h3>
                <div className="w-[54px] h-[2px] my-[22px]" style={{ background: "linear-gradient(90deg, #b28453, rgba(178,132,83,0))" }} />
                <p className="font-normal" style={{ fontSize: "16px", lineHeight: "1.65", color: "rgba(248,248,248,0.72)", maxWidth: "92%" }}>{card.desc}</p>
                {card.svg}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== REALIDADE DA BUSCA ===== */}
      <section className="bg-[#e0d3c3] text-[#11100f] py-24 md:py-32">
        <div className="container mx-auto px-6 xl:px-12 max-w-[1320px]">
          <div className="text-center flex flex-col items-center mb-16 md:mb-24">
            <span className="text-[#b28453] text-[13px] tracking-[0.12em] font-mono font-bold uppercase mb-4">A EVOLUÇÃO DO COMPORTAMENTO DIGITAL</span>
            <h2 className="font-display text-[36px] sm:text-[44px] md:text-[52px] font-bold text-[#11100f] leading-[1.1] tracking-tight">A busca mudou. E isso muda o que seus clientes esperam da sua marca.</h2>
            <div className="w-[160px] h-[4px] bg-[#b28453] mt-6" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-6 text-left">
              <p className="text-[#11100f] text-base md:text-lg leading-[1.7] mb-6">
                Durante anos, as empresas cresceram apoiadas em anúncios pagos e presença básica. Esse modelo ainda funciona, mas já não responde sozinho à complexidade da nova busca.
              </p>
              <p className="text-[#11100f] text-base md:text-lg leading-[1.7] mb-8">
                SEO deixou de ser opcional e passou a conectar técnica, conteúdo, autoridade, reputação, dados estruturados e IA. Sua marca precisa de direção, não apenas de execução isolada.
              </p>
              <div className="border-l-4 border-[#b28453] pl-6 py-3 bg-[#f4eee5] rounded-r-lg shadow-sm">
                <span className="font-mono text-xs text-[#b28453] font-bold tracking-widest block mb-1 uppercase">POSICIONAMENTO</span>
                <p className="font-display text-base sm:text-[17px] md:text-lg font-bold text-[#11100f] italic leading-relaxed">“SEO deixou de ser um trabalho periférico e virou uma camada estratégica insubstituível para crescer marcas de alto padrão.”</p>
              </div>
            </div>
            <div className="lg:col-span-6 relative text-left">
              <div className="absolute left-6 top-2 bottom-2 w-0.5 bg-[#b28453]/40" />
              <div className="space-y-6">
                {[
                  "Pesquisa ativa de credibilidade no Google",
                  "Compara propostas em diretórios corporativos",
                  "Analisa as estrelas e avaliações legítimas locais",
                  "Consulta trajetos e proximidades em mapas",
                  "Busca provas factuais e menções de relevância",
                  "Pergunta para IAs generativas como ChatGPT e Gemini",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-6 relative pl-3">
                    <div className="w-6 h-6 rounded-full bg-[#11100f] border border-[#b28453] flex items-center justify-center text-[#e0d3c3] font-mono text-[10px] z-10 font-bold shrink-0">{idx + 1}</div>
                    <span className="text-base sm:text-lg font-semibold text-[#11100f]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-[#11100f] text-[#f8f8f8] py-8 px-8 sm:px-12 rounded-2xl text-center shadow-lg mt-16 md:mt-24 border border-white/5">
            <p className="text-sm sm:text-base md:text-lg font-medium tracking-wide">Empresas preparadas que tratam a inteligência de busca como infraestrutura essencial fecham contratos mais sólidos e duradouros.</p>
          </div>
        </div>
      </section>

      {/* ===== AUTORIDADE DE ENTIDADE ===== */}
      <section className="bg-[#11100f] text-[#f8f8f8] py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#b28453]/3 rounded-full blur-[140px] pointer-events-none" />
        <div className="container mx-auto px-6 xl:px-12 max-w-[1320px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 text-left">
              <span className="text-[#b28453] text-[13px] tracking-[0.15em] font-mono font-bold uppercase mb-4 block">CAMADA DE ENTIDADE E AUTORIDADE</span>
              <h2 className="font-display text-[32px] sm:text-[40px] md:text-[46px] font-bold text-[#f8f8f8] leading-[1.15] tracking-tight mb-6">Autoridade de entidade: a base invisível da nova busca</h2>
              <p className="text-[#c9c9c9] text-base leading-relaxed mb-6">Google, IAs e usuários precisam entender quem é sua marca, o que ela faz, onde atua, por que é confiável e quais sinais sustentam sua autoridade. A AUDITSEO organiza essa complexidade em uma entrega estruturada.</p>
              <div className="bg-[#181716] border border-[#b28453]/15 p-6 rounded-xl">
                <p className="text-[#e2d3c1] text-sm md:text-[14.5px] leading-relaxed italic">Não se trata de prometer aparição automática em IA. Trata-se de organizar os sinais que auxiliam na compreensão da marca e na validação da sua autoridade.</p>
              </div>
            </div>
            <div className="lg:col-span-6 w-full">
              <div className="relative overflow-hidden p-8 md:p-10 rounded-[22px] text-left" style={{ background: "linear-gradient(145deg, rgba(31,30,28,0.98), rgba(17,16,15,0.98))", border: "1px solid rgba(178,132,83,0.34)", boxShadow: "0 28px 70px rgba(0,0,0,0.38)" }}>
                <div className="absolute -top-[90px] -right-[90px] w-[220px] h-[220px] bg-[radial-gradient(circle,rgba(178,132,83,0.15)_0%,rgba(178,132,83,0.05)_36%,transparent_68%)] pointer-events-none" />
                <h3 className="font-display font-bold text-[#e0d3c3] text-xl md:text-2xl mb-8 tracking-wide">Sinais que organizamos</h3>
                <div className="space-y-6">
                  {[
                    { num: "01", title: "Clareza de entidade", desc: "Quem é a marca, o que oferece, para quem atende e onde atua." },
                    { num: "02", title: "Arquitetura semântica", desc: "Páginas, serviços e conteúdos conectados por intenção, contexto e relevância." },
                    { num: "03", title: "Dados estruturados", desc: "Schema Markup coerente com o conteúdo visível e com a entidade do negócio." },
                    { num: "04", title: "Provas e reputação", desc: "Avaliações, cases, menções, especialistas, diferenciais e sinais de confiança." },
                    { num: "05", title: "Presença externa", desc: "Citações, backlinks, diretórios, perfis e consistência entre canais." },
                    { num: "06", title: "Leitura em IA", desc: "Análise de como a marca pode ser interpretada em ambientes generativos." },
                  ].map((item) => (
                    <div key={item.num} className="flex items-start gap-4 pb-5 border-b border-[#b28453]/16 last:border-0">
                      <span className="font-mono text-sm font-bold text-[#b28453] mt-0.5">{item.num}</span>
                      <div><h4 className="text-white text-base font-bold mb-1">{item.title}</h4><p className="text-[#c9c9c9]/80 text-xs sm:text-[13px] leading-relaxed">{item.desc}</p></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DOR DA EMPRESA ===== */}
      <section className="bg-[#11100f] text-[#f8f8f8] py-24 md:py-32">
        <div className="container mx-auto px-6 xl:px-12 max-w-[1320px]">
          <div className="text-center flex flex-col items-center mb-16 md:mb-24">
            <span className="text-[#b28453] text-[13px] tracking-[0.12em] font-mono font-bold uppercase mb-4">A DOR REAL DO MERCADO</span>
            <h2 className="font-display text-[36px] sm:text-[44px] md:text-[52px] font-bold text-[#f8f8f8] leading-[1.1] tracking-tight max-w-4xl">O desafio não é apenas contratar SEO. É sustentar essa entrega com clareza, segurança e consistência.</h2>
            <div className="w-[160px] h-[4px] bg-[#b28453] mt-6 mb-4" />
            <p className="text-[#b28453] font-display text-lg sm:text-xl font-medium">É exatamente aqui que a maioria das empresas trava.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="bg-[#181716] border border-[#b28453]/20 p-8 sm:p-12 rounded-2xl text-left shadow-lg">
              <span className="text-[#b28453] text-[10px] font-mono font-bold tracking-widest block mb-2 uppercase">SITUAÇÃO ATUAL</span>
              <h3 className="font-display text-2xl font-bold text-white mb-8 border-b border-[#b28453]/15 pb-4">O que sua empresa vive hoje</h3>
              <ul className="space-y-4">
                {[
                  "Depende excessivamente de anúncios pagos para gerar leads",
                  "Vê concorrentes aparecendo antes no Google sem entender por quê",
                  "Dúvidas sobre como a marca aparece em sistemas de IA",
                  "Já contratou SEO e não viu resultado por falta de método estratégico",
                  "Busca estruturar o site como um canal de aquisição qualificada",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-[#c9c9c9] text-sm md:text-base leading-[1.6]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#b28453] shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#181716] border border-[#b28453]/20 p-8 sm:p-12 rounded-2xl text-left shadow-lg">
              <span className="text-[#b28453] text-[10px] font-mono font-bold tracking-widest block mb-2 uppercase">CONSEQUÊNCIAS</span>
              <h3 className="font-display text-2xl font-bold text-white mb-8 border-b border-[#b28453]/15 pb-4">O que começa a acontecer</h3>
              <ul className="space-y-4">
                {[
                  "Custo de aquisição de clientes cada vez mais alto",
                  "Marca invisível para quem pesquisa no Google e nas IAs",
                  "Concorrentes ocupam o espaço que poderia ser seu",
                  "Relatórios de SEO confusos sem direção estratégica clara",
                  "Perda de oportunidades porque o cliente não encontra a empresa",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-[#c9c9c9] text-sm md:text-base leading-[1.6]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#b28453] shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROVA E AUTORIDADE ===== */}
      <section className="bg-[#11100f] text-[#f8f8f8] py-24 md:py-32">
        <div className="container mx-auto px-6 xl:px-12 max-w-[1320px]">
          <div className="text-center flex flex-col items-center mb-16 md:mb-24">
            <span className="text-[#b28453] text-[13px] tracking-[0.12em] font-mono font-bold uppercase mb-4">INTELIGÊNCIA VISÍVEL</span>
            <h2 className="font-display text-[36px] sm:text-[44px] md:text-[52px] font-bold text-[#f8f8f8] leading-[1.1] tracking-tight max-w-4xl">O trabalho orgânico precisa ser visível e explicável</h2>
            <div className="w-[160px] h-[4px] bg-[#b28453] mt-6 mb-8" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
            {[
              { num: "01", label: "DIAGNÓSTICO", title: "Diagnósticos Executivos", desc: "Demonstrações de onde sua marca está posicionada e quais ações prioritárias fazem sentido.", svg: <svg className="absolute bottom-4 right-4 w-10 h-10 stroke-[0.75] text-[#b28453] opacity-10 group-hover:opacity-25 transition-all pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg> },
              { num: "02", label: "MAPEAMENTO", title: "Mapas de Oportunidade", desc: "Análise revelando cenários de busca, concorrentes e tópicos com potencial de autoridade.", svg: <svg className="absolute bottom-4 right-4 w-10 h-10 stroke-[0.75] text-[#b28453] opacity-10 group-hover:opacity-25 transition-all pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M 2 18 Q 6 12, 10 15 T 18 9 T 22 13" /></svg> },
              { num: "03", label: "CONCORRÊNCIA", title: "Análise Competitiva", desc: "Entenda quem domina as posições de busca e as razões por trás da vantagem competitiva no nicho.", svg: <svg className="absolute bottom-4 right-4 w-10 h-10 stroke-[0.75] text-[#b28453] opacity-10 group-hover:opacity-25 transition-all pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="11" width="18" height="10" rx="2" /><path d="M 12 2 V 11" strokeDasharray="2 1" /></svg> },
              { num: "04", label: "IA/GEO", title: "Observabilidade em IA", desc: "Relatórios de como sua marca é representada nos modelos generativos e lacunas de confiança.", svg: <svg className="absolute bottom-4 right-4 w-10 h-10 stroke-[0.75] text-[#b28453] opacity-10 group-hover:opacity-25 transition-all pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M 12 22 C 12 22, 20 18, 20 12 L 20 5 L 12 2 L 4 5 L 4 12 C 4 18, 12 22, 12 22 Z" /></svg> },
              { num: "05", label: "ROADMAP", title: "Roadmaps Práticos", desc: "Cronogramas que organizam o direcionamento estratégico com prazos e responsáveis definidos.", svg: <svg className="absolute bottom-4 right-4 w-10 h-10 stroke-[0.75] text-[#b28453] opacity-10 group-hover:opacity-25 transition-all pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg> },
            ].map((block) => (
              <div key={block.num} className="group relative overflow-hidden min-h-[320px] p-6 rounded-[24px] transition-all duration-[400ms] hover:-translate-y-[6px]" style={{ background: "linear-gradient(145deg, rgba(32,31,29,0.96), rgba(15,15,14,0.98))", border: "1px solid rgba(178,132,83,0.32)", boxShadow: "0 24px 80px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.04)" }}>
                <div className="absolute top-0 right-0 w-[140px] h-[140px] bg-[#b28453]/4 blur-[50px] rounded-full pointer-events-none opacity-40 group-hover:opacity-100 transition-all duration-[400ms]" />
                <div className="w-[44px] h-[44px] rounded-full flex items-center justify-center mb-4" style={{ background: "radial-gradient(circle at 35% 30%, rgba(224,211,195,0.18), rgba(178,132,83,0.10), rgba(17,16,15,0.95))", border: "1px solid rgba(178,132,83,0.55)" }}>
                  <span className="font-sans text-[13px] font-bold text-[#e0d3c3]">{block.num}</span>
                </div>
                <span className="text-[10px] font-mono tracking-widest text-[#b28453] font-bold block mb-2 opacity-80">BLOCO_{block.num}</span>
                <h3 className="font-display text-[18px] md:text-[20px] font-bold text-[#f8f8f8] leading-[1.2]">{block.title}</h3>
                <div className="w-[35px] h-[2px] bg-[#b28453] opacity-[0.85] my-[14px]" />
                <p className="text-[#f8f8f8]/72 text-[13px] leading-[1.6]">{block.desc}</p>
                {block.svg}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DASHBOARD SECTION ===== */}
      <section className="bg-[#11100f] text-[#f8f8f8] py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#b28453]/3 rounded-full blur-[140px] pointer-events-none" />
        <div className="container mx-auto px-6 xl:px-12 max-w-[1320px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 text-left">
              <span className="text-[#b28453] text-[13px] tracking-[0.15em] font-mono font-bold uppercase mb-4 block">TRANSPARÊNCIA TOTAL</span>
              <h2 className="font-display text-[32px] sm:text-[40px] md:text-[46px] font-bold text-[#f8f8f8] leading-[1.15] tracking-tight mb-6">Acompanhamento técnico e estratégico em tempo real</h2>
              <p className="text-[#c9c9c9] text-base md:text-lg leading-relaxed mb-6">Você terá acesso a um painel de transparência comercial exclusivo para acompanhar a evolução das tarefas em andamento, sinais monitorados e o direcionamento estratégico do projeto.</p>
              <ul className="space-y-4">
                {["Monitoramento de sinais orgânicos e técnicos", "Acompanhamento das tarefas e próximos ciclos", "Relatórios claros, sem jargão técnico — foco no negócio", "Histórico de evolução e maturação da autoridade"].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[#e0d3c3] text-sm md:text-base"><CheckCircle2 size={18} className="text-[#b28453] mt-0.5 shrink-0" /><span>{item}</span></li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-6 w-full">
              <div className="relative overflow-hidden p-8 md:p-10 rounded-[22px] text-left" style={{ background: "linear-gradient(145deg, rgba(31,30,28,0.98), rgba(17,16,15,0.98))", border: "1px solid rgba(178,132,83,0.34)", boxShadow: "0 28px 70px rgba(0,0,0,0.38), inset 0 1px 0 rgba(255,255,255,0.05)" }}>
                <div className="absolute -top-[90px] -right-[90px] w-[220px] h-[220px] bg-[radial-gradient(circle,rgba(178,132,83,0.15)_0%,rgba(178,132,83,0.05)_36%,transparent_68%)] pointer-events-none" />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex h-3 w-3 rounded-full bg-red-500/60" /><div className="flex h-3 w-3 rounded-full bg-yellow-500/60" /><div className="flex h-3 w-3 rounded-full bg-green-500/60" />
                    <span className="font-mono text-[10px] text-[#b28453]/60 ml-2 uppercase tracking-wider">Dashboard AO · Visão Estratégica</span>
                  </div>
                  <div className="space-y-4">
                    {[
                      { label: "Saúde Técnica", value: "Monitorada", color: "text-[#b28453]" },
                      { label: "Sinais de Autoridade", value: "Em Evolução", color: "text-[#b28453]" },
                      { label: "Cobertura Semântica", value: "Mapeada", color: "text-[#f8f8f8]" },
                      { label: "Governança", value: "Ativa", color: "text-[#e0d3c3]" },
                    ].map((metric) => (
                      <div key={metric.label} className="flex justify-between items-center border-b border-[#b28453]/12 pb-3 last:border-b-0">
                        <span className="text-[#c9c9c9] text-sm">{metric.label}</span>
                        <span className={`font-display text-xl font-bold ${metric.color}`}>{metric.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#b28453]/12">
                    <div className="flex items-center gap-2 text-[#b28453] text-xs font-mono">
                      <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#b28453] opacity-75" /><span className="relative inline-flex rounded-full h-2 w-2 bg-[#b28453]" /></span>
                      Dados atualizados em tempo real
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="metodologia" className="bg-[#11100f] text-[#f8f8f8] py-24 md:py-32">
        <div className="container mx-auto px-6 xl:px-12 max-w-[1320px]">
          <div className="text-center flex flex-col items-center mb-16">
            <span className="text-[#b28453] text-[13px] tracking-[0.12em] font-mono font-bold uppercase mb-4">DÚVIDAS FREQUENTES</span>
            <h2 className="font-display text-[32px] sm:text-[40px] md:text-[48px] font-bold text-[#f8f8f8] leading-[1.15] tracking-tight max-w-3xl">Tire suas dúvidas sobre Search Intelligence</h2>
            <div className="w-[160px] h-[4px] bg-[#b28453] mt-6" />
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqItems.map((item) => {
              const isOpen = openFaq === item.id;
              return (
                <div key={item.id} className="bg-[#181716] rounded-xl border border-[#b28453]/15 overflow-hidden transition-all duration-300 hover:border-[#b28453]/40">
                  <button onClick={() => setOpenFaq(isOpen ? null : item.id)} className="w-full flex items-center justify-between p-6 cursor-pointer text-left transition-colors font-display">
                    <div className="flex items-center space-x-3 text-[#f8f8f8]">
                      <span className="text-[#b28453] shrink-0"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" strokeLinecap="round" /><line x1="12" y1="17" x2="12.01" y2="17" strokeLinecap="round" /></svg></span>
                      <span className="text-[16px] sm:text-[18px] font-bold tracking-tight">{item.question}</span>
                    </div>
                    <span className="p-1 rounded-full bg-[#b28453]/10 text-[#b28453] transition-all">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        {isOpen ? <line x1="5" y1="12" x2="19" y2="12" strokeLinecap="round" /> : <><line x1="12" y1="5" x2="12" y2="19" strokeLinecap="round" /><line x1="5" y1="12" x2="19" y2="12" strokeLinecap="round" /></>}
                      </svg>
                    </span>
                  </button>
                  <div className={`transition-all duration-350 ease-in-out ${isOpen ? "max-h-[300px] opacity-100 border-t border-[#b28453]/10" : "max-h-0 opacity-0 pointer-events-none"}`}>
                    <div className="p-6 bg-[#1d1b18] text-[#c9c9c9] text-[15px] sm:text-[16px] leading-[1.65]">{item.answer}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== PRÓXIMO PASSO (replaces fake form) ===== */}
      <section id="contato" className="bg-[#11100f] text-[#f8f8f8] py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#b28453]/3 rounded-full blur-[140px] pointer-events-none" />
        <div className="container mx-auto px-6 xl:px-12 max-w-[800px] relative z-10 text-center">
          <div className="mb-12">
            <span className="text-[#b28453] text-[13px] tracking-[0.12em] font-mono font-bold uppercase mb-4">DIAGNÓSTICO ESTRATÉGICO</span>
            <h2 className="font-display text-[36px] sm:text-[44px] md:text-[52px] font-bold text-[#f8f8f8] leading-[1.1] tracking-tight">Vamos avaliar o cenário da sua empresa?</h2>
            <div className="w-[160px] h-[4px] bg-[#b28453] mx-auto mt-6 mb-8" />
            <p className="text-[#c9c9c9] text-lg leading-relaxed max-w-2xl mx-auto">
              Entre em contato através dos nossos canais oficiais para uma conversa estratégica sobre os seus objetivos orgânicos.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 rounded-full bg-[#b28453] px-10 py-5 text-base font-bold text-white transition-all hover:bg-[#e0d3c3] hover:text-[#11100f]"
            >
              <MessageCircle size={20} />
              Falar pelo WhatsApp
            </a>
            <a
              href="mailto:contato@auditseo.com.br"
              className="group flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-10 py-5 text-base font-bold text-[#f8f8f8] transition-all hover:bg-white/[0.08]"
            >
              <Mail size={20} />
              Contato por E-mail
            </a>
          </div>
          
          <p className="mt-12 text-sm leading-[1.6] text-[#f8f8f8]/48">
            * A primeira conversa é para entender o cenário do seu negócio, não para empurrar uma solução.
          </p>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="bg-[#11100f] text-[#f8f8f8] py-24 md:py-32 relative overflow-hidden text-center">
        <div className="container mx-auto px-6 xl:px-12 max-w-[1320px] relative z-10 flex flex-col items-center">
          <span className="text-[#b28453] text-[13px] tracking-[0.15em] font-mono font-bold uppercase mb-4">LIDERE A TRANSIÇÃO DA BUSCA</span>
          <h2 className="font-display text-[38px] sm:text-[46px] md:text-[58px] font-bold text-[#f8f8f8] leading-[1.1] tracking-tight max-w-4xl mb-8">
            Sua empresa cuida do negócio. A AUDITSEO cuida da inteligência orgânica.
          </h2>
          <p className="text-[#b28453] font-display text-lg sm:text-xl max-w-2xl mb-12 leading-relaxed">
            Vamos construir uma parceria sólida para sua empresa crescer com SEO, GEO e Search Intelligence de alto nível.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={() => onNavigate("diagnostico")} className="bg-[#b28453] text-white px-8 py-4 rounded-full text-base font-bold tracking-wide transition-all duration-300 hover:bg-[#e0d3c3] hover:text-[#11100f] cursor-pointer">
              Solicitar Diagnóstico de Busca
            </button>
            <button onClick={() => scrollTo("metodologia")} className="border border-[#b28453] text-white px-8 py-4 rounded-full text-base font-semibold transition-all hover:bg-[#b28453]">
              Conhecer a metodologia
            </button>
          </div>
        </div>
      </section>

      <SiteFooter onNavigate={handleNav} />
    </main>
  );
}
