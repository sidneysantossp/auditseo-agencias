import React from "react";
import {
  ArrowRight,
  BarChart3,
  Search,
  Zap,
  Shield,
  Target,
  Users,
  MessageCircle,
  Mail,
  FlaskConical,
} from "lucide-react";

export default function ParaAgenciasPage({
  onNavigate,
}: {
  onNavigate: (id: string) => void;
}) {
  return (
    <div className="min-h-screen bg-[#11100f] font-sans selection:bg-[#b28453] selection:text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-[160px] pb-24 md:pt-[200px] md:pb-32">
        <div className="container mx-auto max-w-[1120px] px-6">
          <div className="relative z-10 max-w-3xl">
            <span className="mb-6 inline-block font-mono text-[12px] font-bold uppercase tracking-[0.2em] text-[#b28453]">
              Search Intelligence para Agências
            </span>
            <h1 className="font-display text-[56px] font-bold leading-[1.05] tracking-[-0.03em] text-[#f8f8f8] md:text-[84px]">
              O braço de <span className="text-[#b28453]">inteligência</span> da sua operação orgânica.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#f8f8f8]/60 md:text-xl">
              Não somos uma agência de SEO. Somos a camada técnica e estratégica que sustenta agências de alta performance em um cenário de busca generativa.
            </p>
            <div className="mt-12 flex flex-wrap gap-5">
              <button
                onClick={() => onNavigate("diagnostico")}
                className="group inline-flex items-center gap-3 rounded-full bg-[#b28453] px-8 py-4 text-sm font-bold text-white transition-all hover:bg-[#e0d3c3] hover:text-[#11100f]"
              >
                Iniciar Diagnóstico
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => onNavigate("solucoes")}
                className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-8 py-4 text-sm font-bold text-[#f8f8f8] transition-all hover:bg-white/[0.08]"
              >
                Conhecer Soluções
              </button>
            </div>
          </div>
        </div>

        {/* Abstract background element */}
        <div className="absolute top-0 right-0 -mr-24 -mt-24 h-[600px] w-[600px] rounded-full bg-[#b28453]/5 blur-[120px]" />
      </section>

      {/* The Problem Section */}
      <section className="border-y border-white/5 bg-white/[0.01] py-24 md:py-32">
        <div className="container mx-auto max-w-[1120px] px-6">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-[40px] font-bold leading-[1.1] tracking-[-0.02em] text-[#f8f8f8] md:text-[56px]">
                Por que agências <span className="text-[#b28453]">travam</span> no orgânico?
              </h2>
              <p className="mt-6 text-lg text-[#f8f8f8]/50">
                O SEO tradicional de checklists e volumes de busca não é mais suficiente para sustentar contratos high-ticket.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/5 bg-[#11100f] p-8">
                <div className="mb-4 text-[#b28453]">
                  <BarChart3 size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#f8f8f8]">Escala vs. Qualidade</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#f8f8f8]/40">
                  A pressão por volume de conteúdo muitas vezes sacrifica a autoridade e a intenção real da busca.
                </p>
              </div>
              <div className="rounded-2xl border border-white/5 bg-[#11100f] p-8">
                <div className="mb-4 text-[#b28453]">
                  <Search size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#f8f8f8]">Opacidade Técnica</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#f8f8f8]/40">
                  Dificuldade em diagnosticar quedas bruscas ou falta de tração em projetos complexos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solucoes" className="py-24 md:py-32">
        <div className="container mx-auto max-w-[1120px] px-6">
          <div className="mb-20 text-center">
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#b28453]">Como atuamos</span>
            <h2 className="mt-6 font-display text-[48px] font-bold leading-[1.1] tracking-[-0.02em] text-[#f8f8f8] md:text-[64px]">
              Soluções sob demanda para o seu time.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <SolutionCard
              icon={<Zap size={24} />}
              title="Search Foundation"
              description="Estruturação da base orgânica para novos projetos, garantindo que o site nasça com os sinais corretos de autoridade."
            />
            <SolutionCard
              icon={<Shield size={24} />}
              title="Search Recovery"
              description="Investigação técnica profunda para projetos que perderam visibilidade, focada em reconstruir a confiança do buscador."
            />
            <SolutionCard
              icon={<Target size={24} />}
              title="Generative Search Architecture"
              description="Preparação de entidades e ativos digitais para o novo paradigma de busca baseada em IA e respostas generativas."
            />
          </div>
        </div>
      </section>

      {/* Lab Section */}
      <section className="relative overflow-hidden border-t border-white/5 bg-white/[0.02] py-24 md:py-32">
        <div className="container mx-auto max-w-[1120px] px-6">
          <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#b28453]/20 bg-[#b28453]/5 px-4 py-2">
                <FlaskConical size={18} className="text-[#b28453]" />
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-[#b28453]">Search Intelligence Lab</span>
              </div>
              <h2 className="font-display text-[42px] font-bold leading-[1.1] tracking-[-0.02em] text-[#f8f8f8] md:text-[56px]">
                Ciência aplicada aos <span className="text-[#b28453]">fenômenos</span> da busca.
              </h2>
              <p className="mt-8 text-lg leading-relaxed text-[#f8f8f8]/60">
                O Lab conduz observações e testes documentados sobre fenômenos observáveis em busca e sistemas generativos. Não presumimos o funcionamento interno dos algoritmos; nós documentamos o que conseguimos observar e testar.
              </p>
              
              <div className="mt-10 rounded-2xl border border-[#b28453]/10 bg-[#11100f] p-8">
                <span className="font-mono text-[10px] font-bold text-[#b28453]">AUDITSEO-OBS-001</span>
                <h3 className="mt-3 text-xl font-bold text-[#f8f8f8]">Por que o Google reconhece uma pessoa para um tema e praticamente a ignora para outro?</h3>
                <p className="mt-4 text-sm leading-relaxed text-[#f8f8f8]/40">
                  A observação registra diferenças de reconhecimento e associação de entidade entre contextos temáticos distintos, dentro da amostra documentada.
                </p>
                <a 
                  href="/estudos-busca-ia/reconhecimento-de-entidade-por-contexto"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate("/estudos-busca-ia/reconhecimento-de-entidade-por-contexto");
                  }}
                  className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#b28453] hover:text-[#e0d3c3]"
                >
                  Ver Observação Completa
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="grid gap-4">
                <div className="rounded-xl border border-white/5 bg-[#11100f] p-6">
                  <h4 className="font-bold text-[#f8f8f8]">Observações Documentadas</h4>
                  <p className="mt-2 text-xs text-[#f8f8f8]/40">Fenômenos reais capturados em SERPs e interfaces generativas.</p>
                </div>
                <div className="rounded-xl border border-white/5 bg-[#11100f] p-6">
                  <h4 className="font-bold text-[#f8f8f8]">Testes de Sinais</h4>
                  <p className="mt-2 text-xs text-[#f8f8f8]/40">Protocolos e testes documentados sobre sinais de entidade e contexto.</p>
                </div>
                <div className="rounded-xl border border-white/5 bg-[#11100f] p-6">
                  <h4 className="font-bold text-[#f8f8f8]">Governança de Evidências</h4>
                  <p className="mt-2 text-xs text-[#f8f8f8]/40">As recomendações distinguem evidência observada, inferência e orientação metodológica.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-40">
        <div className="container mx-auto max-w-[1120px] px-6 text-center">
          <h2 className="font-display text-[48px] font-bold leading-[1.1] tracking-[-0.02em] text-[#f8f8f8] md:text-[72px]">
            Vamos elevar a barra da sua <span className="text-[#b28453]">entrega</span>?
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-[#f8f8f8]/50">
            Se a sua agência busca profundidade técnica e segurança estratégica para projetos complexos, precisamos conversar.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <a
              href="https://wa.me/5511996384376"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-[#b28453] px-10 py-5 text-sm font-bold text-white transition-all hover:bg-[#e0d3c3] hover:text-[#11100f]"
            >
              <MessageCircle size={18} />
              Falar pelo WhatsApp
            </a>
            <a
              href="mailto:parceria@auditseo.com.br"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-10 py-5 text-sm font-bold text-[#f8f8f8] transition-all hover:bg-white/[0.08]"
            >
              <Mail size={18} />
              Contato por E-mail
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function SolutionCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-3xl border border-white/5 bg-white/[0.02] p-10 transition-all duration-300 hover:border-[#b28453]/30 hover:bg-white/[0.04]">
      <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#b28453]/10 text-[#b28453] transition-colors group-hover:bg-[#b28453] group-hover:text-white">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-[#f8f8f8]">{title}</h3>
      <p className="mt-4 leading-relaxed text-[#f8f8f8]/40">{description}</p>
    </div>
  );
}
