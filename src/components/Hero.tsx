import React from "react";
import NeuralSearchBrain from "./NeuralSearchBrain";

interface HeroProps {
  onCtaClick: (targetId: string) => void;
}

export default function Hero({ onCtaClick }: HeroProps) {

  return (
    <section
      id="inicio"
      className="relative min-h-[820px] lg:min-h-[880px] bg-[#11100f] text-[#f8f8f8] flex items-center pt-[100px] md:pt-[110px] pb-16 md:pb-24 overflow-hidden"
    >
      <div className="container mx-auto px-[24px] md:px-[48px] max-w-[1320px] z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center">
          
          {/* LEFT COLUMN: Strategic Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* EYEBROW */}
            <span className="text-[#a69580] text-[11px] font-mono font-semibold tracking-[0.16em] uppercase mb-4 inline-block select-none opacity-90">
              ORGANIC INNOVATION PARTNER FOR AGENCIES
            </span>

            {/* HEADLINE PRINCIPAL */}
            <h1 
              className="font-display font-bold text-[#f8f8f8] mb-8"
              style={{
                fontSize: "clamp(48px, 4.8vw, 72px)",
                lineHeight: "1.04",
                letterSpacing: "-0.045em",
                maxWidth: "680px"
              }}
            >
              SEO, GEO, IA e<br className="hidden md:inline" /> inteligência de<br className="hidden md:inline" /> busca
            </h1>

            {/* TEXT PARAGRAPH */}
            <p 
              className="text-[#c9c9c9] text-base md:text-lg font-normal py-0"
              style={{
                textAlign: "left",
                letterSpacing: "-0.01em",
                wordSpacing: "normal",
                lineHeight: "1.55",
                maxWidth: "640px",
                marginBottom: "36px"
              }}
            >
              Estruturamos SEO, GEO e IA como uma camada white-label para sua agência reter clientes, comprovar resultados e expandir a carteira sem ampliar a estrutura interna.
            </p>

            {/* ACTION BUTTONS (Matching design style and border radius) */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-1">
              <button
                id="hero-cta-partner-new"
                onClick={() => onCtaClick("diagnostico")}
                className="bg-[#b28453] text-[#ffffff] px-8 py-4 rounded-full text-base font-bold tracking-wide transition-all duration-300 hover:bg-[#e0d3c3] hover:text-[#11100f] cursor-pointer"
              >
                Avaliar parceria estratégica
              </button>
              <button
                id="hero-cta-method-new"
                onClick={() => onCtaClick("signal")}
                className="border border-[#b28453]/45 text-[#f8f8f8] px-8 py-4 rounded-full text-base font-semibold tracking-wide transition-all duration-250 hover:bg-[#b28453]/10"
              >
                Conhecer o método S.I.G.N.A.L
              </button>
            </div>

            {/* LOWER BADGES BAR */}
            <div 
              className="flex flex-wrap items-center font-mono mt-8 select-none text-[#8c8275]"
              style={{
                opacity: 0.62,
                fontSize: "13px",
                letterSpacing: "0.02em",
                wordSpacing: "normal"
              }}
            >
              <span>White-label</span>
              <span className="mx-4 sm:mx-5 text-[#b28453]/30 font-bold">·</span>
              <span>Entrega personalizada</span>
              <span className="mx-4 sm:mx-5 text-[#b28453]/30 font-bold">·</span>
              <span>Resultados mensuráveis</span>
              <span className="mx-4 sm:mx-5 text-[#b28453]/30 font-bold">·</span>
              <span>Expansão sem nova estrutura</span>
            </div>

          </div>

          {/* RIGHT COLUMN: Neural Intelligence Brain Visual Component */}
          <div className="lg:col-span-5 w-full relative flex items-center justify-center scale-[1.04] lg:scale-[1.06] lg:-translate-x-[16px] -translate-x-[8px] overflow-visible">
            <NeuralSearchBrain />
          </div>

        </div>
      </div>
    </section>
  );
}
