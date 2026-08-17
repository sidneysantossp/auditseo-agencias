import React from "react";
import { ArrowRight, CheckCircle, ShieldCheck } from "lucide-react";

export default function DiagnosticSection() {
  return (
    <section
      id="diagnostico"
      className="bg-[#e0d3c3] text-[#11100f] py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background decoration circles */}
      <div className="absolute top-12 left-12 w-64 h-64 bg-white/25 rounded-full pointer-events-none filter blur-2xl" />
      <div className="absolute bottom-12 right-12 w-96 h-96 bg-black/[0.04] rounded-full pointer-events-none filter blur-3xl" />

      <div className="container mx-auto px-6 xl:px-12 max-w-[1320px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: DESCRIPTION */}
          <div className="lg:col-span-7 text-left flex flex-col justify-center">
            <span className="text-[#b28453] text-[12px] tracking-[0.15em] font-mono font-bold uppercase mb-4 bg-[#b28453]/10 px-3.5 py-1.5 rounded-full w-fit">
              ARQUITETURA DE SEARCH INTELLIGENCE
            </span>
            <h2 className="font-display text-[36px] sm:text-[42px] xl:text-[52px] font-bold text-[#11100f] leading-[1.1] tracking-tight mb-6">
              Descubra como sua agência pode estruturar uma frente técnica de SEO e GEO com rigor empírico
            </h2>
            <div className="w-24 h-[4px] bg-[#b28453] mb-8" />
            
            <p className="text-[#2a2927] text-base md:text-lg leading-[1.6] mb-8">
              A AUDITSEO atua como retaguarda técnica e white-label para agências que desejam expandir portfólio, blindar contratos contra concorrência e elevar a rentabilidade nas entregas orgânicas e baseadas em inteligência generativa, sem os custos de inchar uma folha técnica interna.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start space-x-3 text-[#11100f]">
                <CheckCircle className="w-5 h-5 shrink-0 mt-0.5 text-[#b28453]" />
                <span className="text-[15px] font-medium">Avaliação estruturada de cenários operacionais e comerciais de agências</span>
              </div>
              <div className="flex items-start space-x-3 text-[#11100f]">
                <CheckCircle className="w-5 h-5 shrink-0 mt-0.5 text-[#b28453]" />
                <span className="text-[15px] font-medium">Governança de evidências e alinhamento com o Método S.I.G.N.A.L.</span>
              </div>
              <div className="flex items-start space-x-3 text-[#11100f]">
                <CheckCircle className="w-5 h-5 shrink-0 mt-0.5 text-[#b28453]" />
                <span className="text-[15px] font-medium">Retaguarda operacional discreta operando sob a sua marca</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: ACTION CARD */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-[#11100f] text-[#f8f8f8] p-8 md:p-12 rounded-2xl shadow-2xl relative border border-[#ffffff]/15 flex flex-col items-start text-left">
              
              <div className="w-12 h-12 rounded-full bg-[#b28453]/20 border border-[#b28453]/40 flex items-center justify-center text-[#b28453] mb-6">
                <ShieldCheck className="w-6 h-6 text-[#b28453]" />
              </div>

              <h3 className="font-display text-2xl font-bold text-[#f8f8f8] mb-3">
                Assistente de Diagnóstico & Cenários
              </h3>
              
              <p className="text-[#c9c9c9] text-sm leading-[1.6] mb-8">
                Acesse nossa ferramenta interativa de qualificação baseada em cenários de agências. Sem simulações automatizadas de crawler ou scores arbitrários — apenas análise crítica, evidências de laboratório e direcionamento estratégico.
              </p>

              <div className="w-full space-y-4">
                <a
                  href="/diagnostico"
                  className="w-full bg-[#b28453] text-[#ffffff] font-bold py-4 px-6 rounded-full text-base transition-all duration-300 hover:bg-[#e0d3c3] hover:text-[#11100f] flex items-center justify-center space-x-3 group cursor-pointer"
                >
                  <span>Acessar Assistente de Diagnóstico</span>
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href="/estudos-busca-ia"
                  className="w-full bg-white/5 text-[#f8f8f8] font-semibold py-3.5 px-6 rounded-full text-sm border border-white/10 transition-all duration-300 hover:bg-white/10 flex items-center justify-center space-x-2"
                >
                  <span>Explorar Search Intelligence Lab</span>
                </a>
              </div>

              <p className="text-center w-full text-[#c9c9c9] text-[11px] mt-6 opacity-75 font-mono">
                Ambiente seguro • Evidence Governance V3
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
