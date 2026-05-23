import React, { useState, useEffect } from "react";
import { ArrowRight, CheckCircle2, ChevronRight, HelpCircle, Sparkles, Star, TrendingUp, AlertTriangle, ShieldCheck, Mail, Send, FileText, Compass, Award, Users } from "lucide-react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import SignalMethod from "./components/SignalMethod";
import SolutionsSection from "./components/SolutionsSection";
import DiagnosticSection from "./components/DiagnosticSection";
import FAQSection from "./components/FAQSection";

export default function App() {
  const [activeSection, setActiveSection] = useState("inicio");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  // Scroll handler to track and highlight active navigation tab
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      const sections = [
        "inicio",
        "agencias",
        "signal",
        "solucoes",
        "white-label",
        "geo-ia",
        "diagnostico",
      ];

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Soft scroll trigger
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 82, // height alignment offset matching the floating navbar
        behavior: "smooth",
      });
      setActiveSection(sectionId);
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSuccess(true);
      setTimeout(() => {
        setNewsletterEmail("");
        setNewsletterSuccess(false);
      }, 5000);
    }
  };

  return (
    <div className="bg-[#11100f] text-[#f8f8f8] font-sans antialiased selection:bg-[#b28453] selection:text-[#ffffff]">
      
      {/* 1. HEADER (STILL ON TOP) */}
      <Header onNavClick={handleScrollToSection} activeSection={activeSection} />

      {/* 2. HERO SECTION */}
      <Hero onCtaClick={handleScrollToSection} />

      {/* 3. FAIXA DE RESPIRO */}
      <section
        id="respiro-strip"
        className="bg-[#11100f] text-[#f8f8f8] py-16 md:py-24 flex items-center justify-center"
      >
        <div className="container mx-auto px-6 max-w-[1320px] text-center select-none">
          <p className="font-display font-medium text-lg sm:text-2xl md:text-3xl leading-relaxed tracking-tight max-w-4xl mx-auto text-[#e0d3c3]">
            “A nova busca digital exige uma nova camada de profundidade estratégica dentro das agências de marketing.”
          </p>
        </div>
      </section>

      {/* 4. SEÇÃO — AMBIENTES DA NOVA BUSCA */}
      <section
        id="geo-ia"
        className="bg-[#11100f] text-[#f8f8f8] py-24 md:py-32"
      >
        <div className="container mx-auto px-6 xl:px-12 max-w-[1320px]">
          {/* Header */}
          <div className="text-left flex flex-col items-start mb-16 md:mb-24">
            <span className="text-[#b28453] text-[13px] tracking-[0.12em] font-mono font-bold uppercase mb-4">
              A BUSCA SE FRAGMENTOU
            </span>
            <h2 className="font-display text-[36px] sm:text-[44px] md:text-[52px] font-bold text-[#f8f8f8] leading-[1.1] tracking-tight max-w-4xl">
              Hoje a decisão do cliente final passa por muito mais do que uma busca simples no Google
            </h2>
            <div className="w-[160px] h-[4px] bg-[#b28453] mt-6 mb-8" />
            <p className="text-[#c9c9c9] text-base md:text-lg lg:text-md font-normal leading-relaxed max-w-3xl">
              Seu cliente ideal pesquisa no Google orgânico tradicional, compara resultados e localidade no Maps, lê extensos pareceres de avaliações externas, consome conteúdo temático denso, assiste a vídeos curtos explicativos práticos, faz perguntas diretas para assistentes de IA e toma grandes decisões movido por percepção consolidada de clareza e autoridade.
            </p>
          </div>

          {/* Grid of 4 items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                num: "01",
                title: "Google e Busca Orgânica",
                desc: "Onde o ranqueamento tradicional e a relevância sistêmica continuam decisivos para etapas iniciais de descoberta, consideração e consideração de marca."
              },
              {
                num: "02",
                title: "SEO Local e Mapas",
                desc: "Filar de extrema importância para empresas dependentes de relevância regional, intenção comercial imediata e tomadas de decisão próximas da conversão fisica."
              },
              {
                num: "03",
                title: "Autoridade Temática",
                desc: "O ecossistema que auxilia a marca do cliente a ser encontrada com as devidas respostas estruturadas, gerando credibilidade tática comparativa e confiança contextual."
              },
              {
                num: "04",
                title: "Ambientes Generativos",
                desc: "Contextos como Google AI Overviews, ChatGPT Search, Gemini, Copilot, Perplexity e outras respostas por IA, onde clareza técnica e estruturas semânticas pautam recomendações de marca."
              }
            ].map((box) => (
              <div
                id={`ambiente-box-${box.num}`}
                key={box.num}
                className="flex flex-col text-left space-y-4 pt-4 border-t border-white/5"
              >
                <div className="w-9 h-9 rounded-full bg-[#11100f] border border-[#b28453]/60 flex items-center justify-center font-mono text-xs font-bold text-[#b28453]">
                  {box.num}
                </div>
                <h3 className="font-display text-lg font-bold text-[#f8f8f8]">
                  {box.title}
                </h3>
                <p className="text-[#c9c9c9] text-sm leading-[1.6]">
                  {box.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Frase de impacto banner */}
          <div className="bg-[#181716] border border-[#b28453]/15 p-8 rounded-2xl text-center select-none text-[#e0d3c3] font-semibold text-base sm:text-lg tracking-wide shadow-inner">
            “A nova busca não reduz de forma alguma a importância do SEO. Ela simplesmente ampliou o papel estratégico do orgânico.”
          </div>

        </div>
      </section>

      {/* 5. SEÇÃO — PROPOSTA DE VALOR CENTRAL */}
      <section
        id="agencias"
        className="relative overflow-hidden bg-[#11100f] text-[#f8f8f8] pt-[110px] pb-[120px]"
      >
        {/* Radial glow background sutil */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#b28453]/4 rounded-full blur-[160px] pointer-events-none" />

        <div className="container mx-auto px-[24px] xl:px-[48px] max-w-[1320px] relative z-10">
          {/* Header */}
          <div className="text-left flex flex-col items-start mb-16 md:mb-24">
            <span className="text-[#b28453] text-[13px] tracking-[0.12em] font-mono font-bold uppercase mb-4">
              ALAVANCAGEM COMERCIAL
            </span>
            <h2 className="font-display text-[36px] sm:text-[44px] md:text-[52px] font-bold text-[#ffffff] leading-[1.1] tracking-tight max-w-4xl">
              A AUDITSEO fortalece a entrega da sua agência sem aumentar a complexidade da sua operação
            </h2>
            <div className="w-[160px] h-[4px] bg-[#b28453] mt-6 mb-8" />
            <p className="text-[#c9c9c9] text-base md:text-lg leading-relaxed max-w-3xl">
              Donos e sócios de agências experientes já perceberam que SEO, GEO e inteligência de mapas deixaram de ser itens operacionais secundários de baixo valor. Eles determinam diretamente o valor do contrato comercial, retenção a longo prazo, escopo estruturado, autoridade de marca e novas fontes lucrativas de receita.
            </p>
          </div>

          {/* Grid 3 colunas x 2 linhas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px] md:gap-[40px]">
            {[
              {
                num: "I",
                title: "Venda com mais confiança",
                desc: "Diagnósticos profundos, dados e roteiros estratégicos estruturados para sua agência apresentar propostas mais sólidas e aumentar a percepção de valor.",
                svg: (
                  <svg className="absolute bottom-6 right-6 w-14 h-14 stroke-[0.75] text-[#b28453] opacity-15 group-hover:opacity-35 transition-all duration-300 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M 3 21 L 21 21" />
                    <path d="M 6 21 L 6 15" strokeDasharray="1 1" />
                    <path d="M 10 21 L 10 11" strokeDasharray="1 1" />
                    <path d="M 14 21 L 14 7" strokeDasharray="1 1" />
                    <path d="M 18 21 L 18 3" strokeDasharray="1 1" />
                    <circle cx="18" cy="3" r="1.5" fill="#b28453" />
                  </svg>
                )
              },
              {
                num: "II",
                title: "Aumente a retenção",
                desc: "Mostre direção estratégica, novas oportunidades e próximos passos claros, em vez de relatórios repetitivos que o cliente não entende.",
                svg: (
                  <svg className="absolute bottom-6 right-6 w-14 h-14 stroke-[0.75] text-[#b28453] opacity-15 group-hover:opacity-35 transition-all duration-300 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="12" cy="12" r="9" />
                    <circle cx="12" cy="12" r="5" strokeDasharray="2 2" />
                    <circle cx="12" cy="12" r="1.5" fill="#b28453" />
                    <path d="M 12 1 L 12 3" />
                    <path d="M 12 21 L 12 23" />
                    <path d="M 1 12 L 3 12" />
                    <path d="M 21 12 L 23 12" />
                  </svg>
                )
              },
              {
                num: "III",
                title: "Abra uma nova frente de receita",
                desc: "Ofereça consultoria de Search Intelligence, SEO e GEO com alto valor percebido, sem precisar montar uma operação interna especializada.",
                svg: (
                  <svg className="absolute bottom-6 right-6 w-14 h-14 stroke-[0.75] text-[#b28453] opacity-15 group-hover:opacity-35 transition-all duration-300 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="6" cy="18" r="1.5" fill="#b28453" />
                    <circle cx="18" cy="16" r="1.5" fill="#b28453" />
                    <circle cx="12" cy="6" r="1.5" fill="#b28453" />
                    <line x1="6" y1="18" x2="12" y2="6" strokeDasharray="2 2" />
                    <line x1="12" y1="6" x2="18" y2="16" strokeDasharray="2 2" />
                    <line x1="6" y1="18" x2="18" y2="16" strokeDasharray="2 2" />
                    <circle cx="12" cy="12" r="3" strokeWidth="0.5" />
                  </svg>
                )
              },
              {
                num: "IV",
                title: "Substitua achismo por método",
                desc: "Troque decisões improvisadas por diagnósticos, auditorias semânticas e roadmaps práticos que sua agência consegue defender com clareza.",
                svg: (
                  <svg className="absolute bottom-6 right-6 w-14 h-14 stroke-[0.75] text-[#b28453] opacity-15 group-hover:opacity-35 transition-all duration-300 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M 2 18 Q 6 12, 10 15 T 18 9 T 22 13" />
                    <path d="M 2 13 Q 6 7, 10 10 T 18 4 T 22 8" strokeDasharray="2 1" />
                    <path d="M 2 22 Q 6 16, 10 19 T 18 13 T 22 17" />
                  </svg>
                )
              },
              {
                num: "V",
                title: "Consolide sua autoridade",
                desc: "Posicione sua agência como parceira mais estratégica para clientes que precisam se adaptar à nova era da busca e da inteligência artificial.",
                svg: (
                  <svg className="absolute bottom-6 right-6 w-14 h-14 stroke-[0.75] text-[#b28453] opacity-15 group-hover:opacity-35 transition-all duration-300 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M 12 22 C 12 22, 20 18, 20 12 L 20 5 L 12 2 L 4 5 L 4 12 C 4 18, 12 22, 12 22 Z" />
                    <path d="M 12 5 L 12 19" strokeDasharray="2 2" />
                    <circle cx="12" cy="12" r="2.5" fill="#b28453" stroke="none" />
                  </svg>
                )
              },
              {
                num: "VI",
                title: "Proteja sua carteira",
                desc: "Evite que concorrentes usem SEO, GEO ou IA como argumento para tomar espaço dentro das contas que sua agência já atende.",
                svg: (
                  <svg className="absolute bottom-6 right-6 w-14 h-14 stroke-[0.75] text-[#b28453] opacity-15 group-hover:opacity-35 transition-all duration-300 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <rect x="5" y="11" width="14" height="10" rx="2" />
                    <path d="M 8 11 V 7 A 4 4 0 0 1 16 7 V 11" strokeDasharray="2 1" />
                    <circle cx="12" cy="15" r="1.5" fill="#b28453" />
                  </svg>
                )
              }
            ].map((prop) => (
              <div
                id={`proposta-card-${prop.num}`}
                key={prop.num}
                className="group relative overflow-hidden min-h-[280px] md:min-h-[320px] p-[42px] rounded-[24px] flex flex-col justify-between items-start text-left transition-all duration-[400ms] cubic-bezier(0.16, 1, 0.3, 1) hover:-translate-y-[6px]"
                style={{
                  background: 'linear-gradient(145deg, rgba(32, 31, 29, 0.96), rgba(15, 15, 14, 0.98))',
                  border: '1px solid rgba(178, 132, 83, 0.32)',
                  boxShadow: '0 24px 80px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.04)',
                }}
              >
                {/* Glow dourado de canto interno ao passar o mouse */}
                <div 
                  className="absolute top-0 right-0 w-[160px] h-[160px] bg-[#b28453]/4 blur-[60px] rounded-full pointer-events-none opacity-40 group-hover:opacity-100 group-hover:bg-[#b28453]/8 transition-all duration-[400ms]" 
                />

                {/* Micro textura sutil */}
                <div 
                  className="absolute inset-0 bg-repeat bg-[radial-gradient(circle_at_center,rgba(178,132,83,0.02)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" 
                />

                {/* Medalhão Numérico Circular Premium */}
                <div 
                  className="w-[48px] h-[48px] md:w-[52px] md:h-[52px] rounded-full flex items-center justify-center transition-all duration-[400ms]"
                  style={{
                    background: 'radial-gradient(circle at 35% 30%, rgba(224, 211, 195, 0.18), rgba(178, 132, 83, 0.10), rgba(17, 16, 15, 0.95))',
                    border: '1px solid rgba(178, 132, 83, 0.55)',
                    boxShadow: '0 0 24px rgba(178, 132, 83, 0.18), inset 0 0 12px rgba(224, 211, 195, 0.05)',
                  }}
                >
                  <span className="font-serif select-none text-[15px] md:text-[16px] font-bold text-[#e0d3c3] tracking-wide transition-colors duration-300 group-hover:text-white">
                    {prop.num}
                  </span>
                </div>

                {/* Conteúdo do Card */}
                <div className="relative z-10 w-full">
                  <h3 className="font-display text-[22px] md:text-[24px] font-bold text-[#f8f8f8] mt-8 leading-[1.2] tracking-[-0.02em]">
                    {prop.title}
                  </h3>

                  {/* Linha dourada curta */}
                  <div className="w-[54px] h-[2px] bg-[#b28453] opacity-[0.85] my-[22px]" />

                  <p className="text-[#f8f8f8]/72 text-[15.5px] md:text-[16px] font-normal leading-[1.65] max-w-[90%]">
                    {prop.desc}
                  </p>
                </div>

                {/* Detalhe Visual Abstrato */}
                {prop.svg}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. NOVA REALIDADE DA BUSCA */}
      <section
        id="nova-realidade"
        className="bg-[#e0d3c3] text-[#11100f] py-24 md:py-32"
      >
        <div className="container mx-auto px-6 xl:px-12 max-w-[1320px]">
          {/* Header Layout standard */}
          <div className="text-center flex flex-col items-center mb-16 md:mb-24">
            <span className="text-[#b28453] text-[13px] tracking-[0.12em] font-mono font-bold uppercase mb-4">
              A EVOLUÇÃO DO COMPORTAMENTO DIGITAL
            </span>
            <h2 className="font-display text-[36px] sm:text-[44px] md:text-[52px] font-bold text-[#11100f] leading-[1.1] tracking-tight">
              A busca mudou. E isso muda totalmente o que o cliente espera da sua agência.
            </h2>
            <div className="w-[160px] h-[4px] bg-[#b28453] mt-6" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Coluna esquerda */}
            <div className="lg:col-span-6 text-left">
              <p className="text-[#11100f] text-base md:text-lg leading-[1.7] mb-6">
                Durante anos, dezenas de agências de marketing cresceram estruturadas com foco quase que exclusivo em mídia digital paga rápida, gestão de redes sociais operacionais, layouts institucionais de portfolios e redações genéricas de blog. Este modelo construiu base duradoura.
              </p>
              <p className="text-[#11100f] text-base md:text-lg leading-[1.7] mb-8">
                Contudo, o comportamento de busca do tomador de decisão final amadureceu e ficou extremamente polido. SEO deixou as barreiras de ser apenas uma mera checagem mecânica de palavras-chave avulsas ou tarefas técnicas isoladas de desenvolvedores freelancer: virou uma camada de peso conectando estratégia, reputação confiável e presença em canais.
              </p>

              {/* Item destacado */}
              <div className="border-l-4 border-[#b28453] pl-6 py-2 bg-[#f4eee5] rounded-r-lg shadow-sm">
                <span className="font-mono text-xs text-[#b28453] font-bold tracking-widest block mb-1 uppercase">
                  EQUILÍBRIO DE POSICIONAMENTO
                </span>
                <p className="font-display text-lg sm:text-lg font-bold text-[#11100f] italic leading-tight">
                  “SEO deixou de ser um trabalho periférico e virou uma camada estratégica insubstituível para crescer marcas de alto padrão.”
                </p>
              </div>
            </div>

            {/* Coluna direita list timeline vertical */}
            <div className="lg:col-span-6 relative text-left">
              <div className="absolute left-6 top-2 bottom-2 w-0.5 bg-[#b28453]/40" />
              
              <div className="space-y-6">
                {[
                  "Pesquisa ativa de credibilidade no Google",
                  "Compara propostas em diretórios corporativos",
                  "Analisa as estrelas e avaliações legítimas locais",
                  "Consulta trajetos e proximidades de mapas locais",
                  "Busca provas factuais e menções de relevância de marca",
                  "Consulta recomendações diretas com ferramentas de IA generativa"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-6 relative pl-3">
                    <div className="w-6 h-6 rounded-full bg-[#11100f] border border-[#b28453] flex items-center justify-center text-[#e0d3c3] font-mono text-[10px] z-10 font-bold shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <span className="text-base sm:text-lg font-semibold text-[#11100f]">
                        {item}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Faixa preta final de fechamento da secao */}
          <div className="bg-[#11100f] text-[#f8f8f8] py-8 px-8 sm:px-12 rounded-2xl text-center shadow-lg mt-16 select-none md:mt-24 border border-white/5">
            <p className="text-sm sm:text-base md:text-lg font-medium tracking-wide">
              Agências preparadas que tratam a inteligência de busca como infraestrutura essencial fecham contratos robustos e duradouros.
            </p>
          </div>

        </div>
      </section>

      {/* 7. DOR DA AGÊNCIA */}
      <section
        className="bg-[#11100f] text-[#f8f8f8] py-24 md:py-32"
      >
        <div className="container mx-auto px-6 xl:px-12 max-w-[1320px]">
          {/* Header Layout */}
          <div className="text-center flex flex-col items-center mb-16 md:mb-24">
            <span className="text-[#b28453] text-[13px] tracking-[0.12em] font-mono font-bold uppercase mb-4">
              A DOR SEMENTE DA INDÚSTRIA
            </span>
            <h2 className="font-display text-[36px] sm:text-[44px] md:text-[52px] font-bold text-[#f8f8f8] leading-[1.1] tracking-tight max-w-4xl">
              O desafio não é apenas vender SEO. É sustentar essa entrega complexa com clareza, segurança e consistência.
            </h2>
            <div className="w-[160px] h-[4px] bg-[#b28453] mt-6 mb-4" />
            <p className="text-[#b28453] font-display text-lg sm:text-xl font-medium tracking-wide select-none">
              É exatamente aqui que a grande maioria das agências travam na hora de escalar.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Coluna 1: O que vivem */}
            <div className="bg-[#181716] border border-[#b28453]/20 p-8 sm:p-12 rounded-2xl text-left shadow-lg">
              <span className="text-[#b28453] text-[10px] font-mono font-bold tracking-widest block mb-2 uppercase">
                VIVÊNCIAS REAIS
              </span>
              <h3 className="font-display text-2xl font-bold text-white mb-8 border-b border-[#b28453]/15 pb-4">
                O que a agência vive
              </h3>
              <ul className="space-y-4">
                {[
                  "Quer ampliar o ticket cobrado além do tráfego pago tradicional",
                  "Vê clientes de peso questionando sobre Google, mapas, artigos e IA constantemente",
                  "Sente ampla margem para apresentar ofertas, porém receia prometer prazos sem sustentação técnica",
                  "Recusa-se a inchar a folha interna com sêniores CLT caros antes de consolidar demanda real",
                  "Necessita defender o valor cobrado com propostas técnicas robustas para reter contas importantes"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-[#c9c9c9] text-sm md:text-base leading-[1.6]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#b28453] shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coluna 2: O que começa a acontecer */}
            <div className="bg-[#181716] border border-[#b28453]/20 p-8 sm:p-12 rounded-2xl text-left shadow-lg">
              <span className="text-[#b28453] text-[10px] font-mono font-bold tracking-widest block mb-2 uppercase">
                CONSEQUÊNCIAS OPERACIONAIS
              </span>
              <h3 className="font-display text-2xl font-bold text-[#b28453] mb-8 border-b border-[#b28453]/15 pb-4">
                O que começa a acontecer
              </h3>
              <ul className="space-y-4">
                {[
                  "SEO e GEO tornam-se promessas operacionais frustrantes de justificar",
                  "Artigos e redações de blog são escritos mecanicamente sem alinhamento comercial",
                  "Relatórios mensais ficam desconectados de intenções reais de retenção ou faturamento",
                  "O cliente final perde o entendimento da evolução tática devido à poluição de dados",
                  "O fantasma do Churn imediato cresce diante da escassez de liderança consultiva na conta"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-[#c9c9c9] text-sm md:text-base leading-[1.6]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#b28453] shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <div className="mt-16 text-center select-none">
            <p className="inline-block border border-[#b28453]/45 bg-[#b28453]/5 px-8 py-4 rounded-full text-sm sm:text-base text-[#e0d3c3] font-medium max-w-3xl">
              “Sem suporte de inteligência orgânica constante nos bastidores, a agência não perde somente tráfego orgânico. Ela perde espaço, e enfraquece a defesa de valor da conta.”
            </p>
          </div>

        </div>
      </section>

      {/* 8. COMO A AUDITSEO ENTRA */}
      <section
        className="bg-[#11100f] text-[#f8f8f8] py-24 md:py-32"
      >
        <div className="container mx-auto px-6 xl:px-12 max-w-[1320px]">
          {/* Header */}
          <div className="text-center flex flex-col items-center mb-16 md:mb-24">
            <span className="text-[#b28453] text-[13px] tracking-[0.12em] font-mono font-bold uppercase mb-4">
              PARCERIA E INTEGRAÇÃO DE SQUADS
            </span>
            <h2 className="font-display text-[36px] sm:text-[44px] md:text-[52px] font-bold text-[#f8f8f8] leading-[1.1] tracking-tight">
              A AUDITSEO entra como braço estratégico da sua agência
            </h2>
            <div className="w-[160px] h-[4px] bg-[#b28453] mt-6 mb-4" />
            <p className="text-[#b28453] font-display text-lg sm:text-xl font-bold select-none uppercase tracking-wide">
              Não para disputar o seu cliente final. Mas para blindar sua entrega.
            </p>
          </div>

          {/* Grid with 4 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 mb-16">
            {[
              {
                num: "I",
                title: "Diagnóstico Estratégico",
                desc: "Análise profunda técnica estrutural, gargalos semânticos, visibilidade em buscadores tradicionais, otimização de mapas e posture preliminar de GEO para ChatGPT, Gemini, Copilot e Perplexity.",
                svg: (
                  <svg className="absolute bottom-6 right-6 w-14 h-14 stroke-[0.75] text-[#b28453] opacity-15 group-hover:opacity-35 transition-all duration-300 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                )
              },
              {
                num: "II",
                title: "Priorização & Roadmaps",
                desc: "Transformamos o excesso de dados em direção cirúrgica de 90 dias: o que pautar de imediato para gerar resultados que o gerente de contas consiga demonstrar.",
                svg: (
                  <svg className="absolute bottom-6 right-6 w-14 h-14 stroke-[0.75] text-[#b28453] opacity-15 group-hover:opacity-35 transition-all duration-300 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M 2 18 Q 6 12, 10 15 T 18 9 T 22 13" />
                  </svg>
                )
              },
              {
                num: "III",
                title: "Parceria White-Label",
                desc: "Todo o acompanhamento tático e geração de relatórios premium emitidos com sua própria marca. Mantemos sigilo e total neutralidade operacional.",
                svg: (
                  <svg className="absolute bottom-6 right-6 w-14 h-14 stroke-[0.75] text-[#b28453] opacity-15 group-hover:opacity-35 transition-all duration-300 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <rect x="3" y="11" width="18" height="10" rx="2" />
                    <path d="M 12 2 V 11" strokeDasharray="2 1" />
                  </svg>
                )
              },
              {
                num: "IV",
                title: "Apoio Recorrente",
                desc: "Estruturamos squads ágeis ou suporte consultivo para revisar propostas complexas, blindar contratos sensíveis, calibrar metas e validar conformidade técnica.",
                svg: (
                  <svg className="absolute bottom-6 right-6 w-14 h-14 stroke-[0.75] text-[#b28453] opacity-15 group-hover:opacity-35 transition-all duration-300 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M 12 22 C 12 22, 20 18, 20 12 L 20 5 L 12 2 L 4 5 L 4 12 C 4 18, 12 22, 12 22 Z" />
                  </svg>
                )
              }
            ].map((card) => (
              <div
                id={`como-entra-${card.num}`}
                key={card.num}
                className="group relative overflow-hidden min-h-[320px] p-[38px] rounded-[24px] flex flex-col justify-between items-start text-left transition-all duration-[400ms] cubic-bezier(0.16, 1, 0.3, 1) hover:-translate-y-[6px]"
                style={{
                  background: 'linear-gradient(145deg, rgba(32, 31, 29, 0.96), rgba(15, 15, 14, 0.98))',
                  border: '1px solid rgba(178, 132, 83, 0.32)',
                  boxShadow: '0 24px 80px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.04)',
                }}
              >
                {/* Glow dourado de canto interno ao passar o mouse */}
                <div 
                  className="absolute top-0 right-0 w-[160px] h-[160px] bg-[#b28453]/4 blur-[60px] rounded-full pointer-events-none opacity-40 group-hover:opacity-100 group-hover:bg-[#b28453]/8 transition-all duration-[400ms]" 
                />
                
                {/* Micro textura sutil */}
                <div 
                  className="absolute inset-0 bg-repeat bg-[radial-gradient(circle_at_center,rgba(178,132,83,0.02)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" 
                />

                {/* Medalhão Numérico Circular Premium */}
                <div 
                  className="w-[48px] h-[48px] md:w-[52px] md:h-[52px] rounded-full flex items-center justify-center transition-all duration-[400ms]"
                  style={{
                    background: 'radial-gradient(circle at 35% 30%, rgba(224, 211, 195, 0.18), rgba(178, 132, 83, 0.10), rgba(17, 16, 15, 0.95))',
                    border: '1px solid rgba(178, 132, 83, 0.55)',
                    boxShadow: '0 0 24px rgba(178, 132, 83, 0.18), inset 0 0 12px rgba(224, 211, 195, 0.05)',
                  }}
                >
                  <span className="font-serif select-none text-[15px] md:text-[16px] font-bold text-[#e0d3c3] tracking-wide transition-colors duration-300 group-hover:text-white">
                    {card.num}
                  </span>
                </div>

                {/* Conteúdo do Card */}
                <div className="relative z-10 w-full mt-6">
                  <span className="text-[11px] font-mono tracking-widest text-[#b28453] font-bold block mb-2 opacity-80">
                    MODELO_0{card.num}
                  </span>
                  
                  <h3 className="font-display text-[20px] md:text-[22px] font-bold text-[#f8f8f8] leading-[1.2] tracking-[-0.01em]">
                    {card.title}
                  </h3>

                  {/* Linha dourada curta */}
                  <div className="w-[45px] h-[2px] bg-[#b28453] opacity-[0.85] my-[18px]" />

                  <p className="text-[#f8f8f8]/72 text-[14px] md:text-[15px] font-normal leading-[1.6]">
                    {card.desc}
                  </p>
                </div>

                {/* Ambient background SVGs */}
                {card.svg}
              </div>
            ))}
          </div>

          <div className="text-center font-display font-bold text-lg text-[#e0d3c3] select-none">
            “Sua agência mantém o relacionamento de conta. A AUDITSEO sustenta a inteligência orgânica por trás da entrega.”
          </div>

        </div>
      </section>

      {/* 9. MÉTODO S.I.G.N.A.L (Timeline Component) */}
      <SignalMethod onCtaClick={handleScrollToSection} />

      {/* 10. SOLUÇÕES ESTRATÉGICAS (Bento Grid Component) */}
      <SolutionsSection onCtaClick={handleScrollToSection} />

      {/* 11. MODELOS DE PARCERIA */}
      <section
        id="white-label"
        className="bg-[#e0d3c3] text-[#11100f] py-24 md:py-32 relative overflow-hidden"
      >
        <div className="container mx-auto px-6 xl:px-12 max-w-[1320px] relative z-10">
          
          {/* Header Layout standard */}
          <div className="text-left flex flex-col items-start mb-16 md:mb-24">
            <span className="text-[#b28453] text-[13px] tracking-[0.12em] font-mono font-bold uppercase mb-4">
              FLEXIBILIDADE DE RETAGUARDA
            </span>
            <h2 className="font-display text-[36px] sm:text-[44px] md:text-[52px] font-bold text-[#11100f] leading-[1.1] tracking-tight max-w-4xl">
              Um modelo de parceria para cada estágio da sua agência
            </h2>
            <div className="w-[160px] h-[4px] bg-[#b28453] mt-6 mb-8" />
            <p className="text-[#2a2927] text-base md:text-lg leading-relaxed max-w-3xl">
              Donos e sócios de grandes agências sabem que cada conta de cliente possui uma realidade própria de orçamento e maturidade. Ajustamos o modelo de apoio técnico para blindar pontualmente uma conta valiosa ou para estruturar um novo portfólio de receitas recorrentes robustas para sua agência de marketing.
            </p>
          </div>

          {/* Grid 2x2 with standardized card design like the Signal session */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                num: "01",
                title: "Diagnóstico Avulso",
                subtitle: "Para tomadas de decisão cirúrgicas e auditorias de urgência.",
                desc: "Recomendado para momentos decisivos nos quais sua agência necessita de uma ótica profundamente estratégica antes de formatar propostas, renovar contas frias de longa data ou contornar crises. Entregamos documentação mapeando problemas táticos, oportunidades e planos executivos de 90 dias estruturados com rigor.",
                icon: <FileText size={20} className="text-[#b28453]" />
              },
              {
                num: "02",
                title: "Consultoria Estratégica",
                subtitle: "Direção técnica e suporte sob medida para sua equipe.",
                desc: "Moldado para agências que contam com redatores internos operáveis e especialistas de dados, porém carecem de sênior experiente de inteligência de busca para liderar. Realizamos ritos de priorização, roadmaps de entrega técnica, revisões técnicas finas de código e validações semânticas de sitemap.",
                icon: <Compass size={20} className="text-[#b28453]" />
              },
              {
                num: "03",
                title: "Parceria White-Label",
                subtitle: "Nossos relatórios e laudos sob a marca da sua agência.",
                desc: "Ideal para agências de marketing digital que almejam robustecer o catálogo comercial sob a própria marca corporativa imediata de modo a lucrar com ampla margem. Produzimos relatórios, laudos analíticos técnicos detalhados e diagnósticos consultivos com a identidade visual personalizada da sua instituição.",
                icon: <Award size={20} className="text-[#b28453]" />
              },
              {
                num: "04",
                title: "Squad Externo SEO/GEO",
                subtitle: "Retaguarda estratégica dedicada e alinhamento recorrente.",
                desc: "Integração recorrente sob demanda com retaguarda técnica dedicada. O time estratégico de busca da AUDITSEO entra para operar planejamentos minuciosos, rotinas e relatórios constantes baseando-se no método S.I.G.N.A.L, operando de mãos dadas com gerentes e tomadores de decisão da agência de marketing.",
                icon: <Users size={20} className="text-[#b28453]" />
              }
            ].map((mod) => (
              <div
                id={`modelo-parceria-${mod.num}`}
                key={mod.num}
                className="bg-[#f4eee5] rounded-xl p-6 lg:p-8 shadow-[0_14px_36px_rgba(17,16,15,0.05)] border border-[#b28453]/10 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(17,16,15,0.08)]"
              >
                <div className="flex items-center space-x-2 justify-between mb-4">
                  <span className="p-2 bg-[#b28453]/15 rounded-lg border border-[#b28453]/20">
                    {mod.icon}
                  </span>
                  <span className="font-mono text-xs text-[#b28453] font-bold uppercase tracking-widest">
                    MODELO_{mod.num}
                  </span>
                </div>
                <h4 className="text-[18px] sm:text-[22px] font-bold text-[#11100f] mb-1 font-display">
                  {mod.title}
                </h4>
                <p className="text-[#b28453] text-[13px] font-semibold italic mb-3">
                  {mod.subtitle}
                </p>
                <p className="text-[#2a2927] text-[14px] leading-[1.6]">
                  {mod.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 12. ANTES E DEPOIS RESISTENTE */}
      <section
        className="bg-[#e0d3c3] text-[#11100f] py-24 md:py-32"
      >
        <div className="container mx-auto px-6 xl:px-12 max-w-[1320px]">
          {/* Header */}
          <div className="text-center flex flex-col items-center mb-16 md:mb-24">
            <span className="text-[#b28453] text-[13px] tracking-[0.12em] font-mono font-bold uppercase mb-4">
              MÉTRICA E COMPREENSÃO DE VALOR
            </span>
            <h2 className="font-display text-[36px] sm:text-[44px] md:text-[52px] font-bold text-[#11100f] leading-[1.1] tracking-tight max-w-4xl">
              O que muda quando sua agência tem um parceiro de Search Intelligence
            </h2>
            <div className="w-[160px] h-[4px] bg-[#b28453] mt-6" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* ANTES (Grafite escuro) */}
            <div className="bg-[#2a2927] text-[#f8f8f8] p-8 sm:p-12 rounded-2xl shadow-xl border border-white/5 text-left">
              <span className="text-[#c9c9c9] text-[10px] font-mono font-bold tracking-widest block mb-2 uppercase opacity-85">
                CENÁRIO TRADICIONAL
              </span>
              <h3 className="font-display text-2xl font-bold text-[#e0d3c3] mb-8 border-b border-white/10 pb-4">
                Antes
              </h3>
              <ul className="space-y-4">
                {[
                  "SEO é tratado como tarefa mecânica periférica isolada",
                  "Redação produz posts genéricos que não geram autoridade semântica",
                  "Relatórios mensais cheios de dados e gráficos soltos sem clareza",
                  "Cliente final frustrado sem entender os próximos passos práticos",
                  "Agência de marketing insegura de comercializar projetos orgânicos de vulto",
                  "Operação interna sobrecarregada, apagando incêndios constantemente",
                  "Decisões de metas orientadas meramente por achismos de palavras"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-[#c9c9c9]">
                    <AlertTriangle size={16} className="text-[#b28453] mt-1 shrink-0" />
                    <span className="text-sm md:text-base leading-[1.5]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* DEPOIS (Champagne) */}
            <div className="bg-[#11100f] text-[#f8f8f8] p-8 sm:p-12 rounded-2xl shadow-2xl border-2 border-[#b28453] text-left">
              <span className="text-[#b28453] text-[10px] font-mono font-bold tracking-widest block mb-1 uppercase">
                INTEGRAÇÃO PARCEIRA AUDITSEO
              </span>
              <h3 className="font-display text-2xl font-bold text-[#b28453] mb-8 border-b border-[#b28453]/25 pb-4">
                Depois
              </h3>
              <ul className="space-y-4">
                {[
                  "SEO e GEO vistos como frentes cruciais estruturadas de crescimento",
                  "Conteúdo técnico conectado com intenções reais e tópicos de autoridade",
                  "Painéis focados no que o cliente e o tomador de decisão realmente compreendem",
                  "Demonstração nítida de evolução e planos de ação futuros consistentes",
                  "Comercial de vendas embasado em ricas auditorias consultivas de mapas e IA",
                  "Segurança operacional sem inchaço com suporte especializado sênior constante",
                  "Operação fundamentada em Search Intelligence e priorização do método S.I.G.N.A.L"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-[#f8f8f8]">
                    <CheckCircle2 size={16} className="text-[#b28453] mt-1 shrink-0" />
                    <span className="text-sm md:text-base leading-[1.5] font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <div className="mt-16 text-center select-none font-display font-semibold text-lg text-[#11100f]">
            “A grande diferença tática não reside em cumprir um volume infinito de tarefas isoladas. Consiste em focar cirurgicamente nas ações de busca que realmente movem a carteira orgânica.”
          </div>

        </div>
      </section>

      {/* 13. PROVA E AUTORIDADE */}
      <section
        className="bg-[#11100f] text-[#f8f8f8] py-24 md:py-32"
      >
        <div className="container mx-auto px-6 xl:px-12 max-w-[1320px]">
          
          {/* Header */}
          <div className="text-center flex flex-col items-center mb-16 md:mb-24">
            <span className="text-[#b28453] text-[13px] tracking-[0.12em] font-mono font-bold uppercase mb-4">
              INTELIGÊNCIA SINALIZADA E VISÍVEL
            </span>
            <h2 className="font-display text-[36px] sm:text-[44px] md:text-[52px] font-bold text-[#f8f8f8] leading-[1.1] tracking-tight max-w-4xl">
              Estratégia orgânica precisa ser visível, explicável e defensável
            </h2>
            <div className="w-[160px] h-[4px] bg-[#b28453] mt-6 mb-8" />
            <p className="text-[#c9c9c9] text-base md:text-lg lg:text-xl font-normal max-w-3xl leading-[1.6]">
              A AUDITSEO instrumentaliza a linha diretiva da agência parceira de modo a transformar cruzamento de dados de SEO complexos em propostas lógicas simples de vender, explicar e auditar na frente dos clientes.
            </p>
          </div>

          {/* 5 blocks row */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
            {[
              {
                num: "01",
                label: "DIAGNOSTIC",
                title: "Diagnósticos Executivos",
                desc: "Demonstrações lógicas estruturadas mostrando a exatidão de onde a marca do cliente está posicionada, metas atingíveis e ações prioritárias.",
                svg: (
                  <svg className="absolute bottom-4 right-4 w-10 h-10 stroke-[0.75] text-[#b28453] opacity-10 group-hover:opacity-25 transition-all duration-300 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                )
              },
              {
                num: "02",
                label: "MAPPING",
                title: "Mapas de Oportunidade",
                desc: "Análise investigativa descortinando tráfego geográfico comercial real, marcas competidoras e tópicos com real tração de crescimento.",
                svg: (
                  <svg className="absolute bottom-4 right-4 w-10 h-10 stroke-[0.75] text-[#b28453] opacity-10 group-hover:opacity-25 transition-all duration-300 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M 2 18 Q 6 12, 10 15 T 18 9 T 22 13" />
                  </svg>
                )
              },
              {
                num: "03",
                label: "COMPETITIVE",
                title: "Análise Competitiva",
                desc: "Esclarecimento de quem dita as primeiras menções do Google e AI search orgânico no nicho, as razões por trás e planos táticos de enfrentamento.",
                svg: (
                  <svg className="absolute bottom-4 right-4 w-10 h-10 stroke-[0.75] text-[#b28453] opacity-10 group-hover:opacity-25 transition-all duration-300 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <rect x="3" y="11" width="18" height="10" rx="2" />
                    <path d="M 12 2 V 11" strokeDasharray="2 1" />
                  </svg>
                )
              },
              {
                num: "04",
                label: "AI_SEARCH",
                title: "Visibilidade em IA (GEO)",
                desc: "Relatórios de posturas de marca nos modelos generativos coletando referências citadas, relevância de menção e lacunas de confiança.",
                svg: (
                  <svg className="absolute bottom-4 right-4 w-10 h-10 stroke-[0.75] text-[#b28453] opacity-10 group-hover:opacity-25 transition-all duration-300 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M 12 22 C 12 22, 20 18, 20 12 L 20 5 L 12 2 L 4 5 L 4 12 C 4 18, 12 22, 12 22 Z" />
                  </svg>
                )
              },
              {
                num: "05",
                label: "ROADMAP",
                title: "Roadmaps Práticos",
                desc: "Linhas cronológicas que resolvem o gargalo de 'oque' escrever ou alterar, gerando cronogramas limpos de acompanhamento.",
                svg: (
                  <svg className="absolute bottom-4 right-4 w-10 h-10 stroke-[0.75] text-[#b28453] opacity-10 group-hover:opacity-25 transition-all duration-300 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                )
              }
            ].map((block) => (
              <div
                id={`prova-block-${block.num}`}
                key={block.num}
                className="group relative overflow-hidden min-h-[320px] p-6 rounded-[24px] flex flex-col justify-between items-start text-left transition-all duration-[400ms] cubic-bezier(0.16, 1, 0.3, 1) hover:-translate-y-[6px]"
                style={{
                  background: 'linear-gradient(145deg, rgba(32, 31, 29, 0.96), rgba(15, 15, 14, 0.98))',
                  border: '1px solid rgba(178, 132, 83, 0.32)',
                  boxShadow: '0 24px 80px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.04)',
                }}
              >
                {/* Glow dourado de canto interno ao passar o mouse */}
                <div 
                  className="absolute top-0 right-0 w-[140px] h-[140px] bg-[#b28453]/4 blur-[50px] rounded-full pointer-events-none opacity-40 group-hover:opacity-100 group-hover:bg-[#b28453]/8 transition-all duration-[400ms]" 
                />
                
                {/* Micro textura sutil */}
                <div 
                  className="absolute inset-0 bg-repeat bg-[radial-gradient(circle_at_center,rgba(178,132,83,0.02)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" 
                />

                {/* Medalhão Numérico Circular Premium */}
                <div 
                  className="w-[44px] h-[44px] rounded-full flex items-center justify-center transition-all duration-[400ms]"
                  style={{
                    background: 'radial-gradient(circle at 35% 30%, rgba(224, 211, 195, 0.18), rgba(178, 132, 83, 0.10), rgba(17, 16, 15, 0.95))',
                    border: '1px solid rgba(178, 132, 83, 0.55)',
                    boxShadow: '0 0 20px rgba(178, 132, 83, 0.15), inset 0 0 10px rgba(224, 211, 195, 0.05)',
                  }}
                >
                  <span className="font-sans select-none text-[13px] font-bold text-[#e0d3c3] tracking-wide transition-colors duration-300 group-hover:text-white">
                    {block.num}
                  </span>
                </div>

                {/* Conteúdo do Card */}
                <div className="relative z-10 w-full mt-5">
                  <span className="text-[10px] font-mono tracking-widest text-[#b28453] font-bold block mb-2 opacity-80">
                    BLOCO_{block.num}
                  </span>
                  
                  <h3 className="font-display text-[18px] md:text-[20px] font-bold text-[#f8f8f8] leading-[1.2] tracking-[-0.01em]">
                    {block.title}
                  </h3>

                  {/* Linha dourada curta */}
                  <div className="w-[35px] h-[2px] bg-[#b28453] opacity-[0.85] my-[14px]" />

                  <p className="text-[#f8f8f8]/72 text-[13px] font-normal leading-[1.6]">
                    {block.desc}
                  </p>
                </div>

                {/* Ambient background SVGs */}
                {block.svg}
              </div>
            ))}
          </div>

          <div className="text-center font-display italic text-base text-[#e0d3c3] select-none italic max-w-2xl mx-auto leading-relaxed">
            “O cliente final nunca de fato valoriza aquilo que não consegue compreender com nitidez. Nossa principal função no bastidor é converter técnicas de busca em clareza comercial.”
          </div>

        </div>
      </section>

      {/* 14. DIAGNÓSTICO PARA AGÊNCIAS (Form / Simulators Module) */}
      <DiagnosticSection />

      {/* 15. FAQ ACCORDION SECTION */}
      <FAQSection />

      {/* 16. CTA FINAL */}
      <section
        id="cta-final"
        className="bg-[#11100f] text-[#f8f8f8] py-24 md:py-32 relative overflow-hidden text-center"
      >
        <div className="container mx-auto px-6 xl:px-12 max-w-[1320px] relative z-10 flex flex-col items-center">
          
          <span className="text-[#b28453] text-[13px] tracking-[0.15em] font-mono font-bold uppercase mb-4">
            LIDERE A TRANSIÇÃO DA BUSCA
          </span>
          
          <h2 className="font-display text-[38px] sm:text-[46px] md:text-[58px] font-bold text-[#f8f8f8] leading-[1.1] tracking-tight max-w-4xl mb-8">
            Sua agência cuida do relacionamento comercial. A AUDITSEO cuida da inteligência orgânica.
          </h2>

          <p className="text-[#b28453] font-display text-lg sm:text-xl font-normal max-w-2xl mb-4 leading-relaxed">
            Vamos construir uma parceria sólida para sua agência entregar SEO tradicional, GEO e Search Intelligence com profunda precisão e valor.
          </p>

          <p className="text-[#c9c9c9] text-sm md:text-base max-w-2xl mb-12 opacity-85 leading-relaxed">
            Você não precisa montar, testar ou manter uma estrutura operacional complexa de profissionais caros internos para dispor aos clientes uma excelente entrega orgânica. Necessita simplesmente de um método confiável, visão de mercado, diagnósticos de IA e um parceiro consolidado de bastidores.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button
              id="cta-final-partner"
              onClick={() => handleScrollToSection("diagnostico")}
              className="bg-[#b28453] text-white px-8 py-4 rounded-full text-base font-bold tracking-wide transition-all duration-300 hover:bg-[#e0d3c3] hover:text-[#11100f] cursor-pointer"
            >
              Avaliar parceria comercial com a AUDITSEO
            </button>
            <button
              id="cta-final-diag"
              onClick={() => handleScrollToSection("diagnostico")}
              className="border border-[#b28453] text-white px-8 py-4 rounded-full text-base font-semibold tracking-wide transition-all duration-250 hover:bg-[#b28453]"
            >
              Solicitar diagnóstico para minha agência
            </button>
          </div>

          <span className="text-[#b28453] font-mono text-xs tracking-wider uppercase mt-12 block select-none">
            A próxima fase da busca orgânica já começou. Sua agência pode liderar essa liderança para os clientes parceiros certos.
          </span>

        </div>
      </section>

      {/* 17. FOOTER */}
      <footer className="bg-[#11100f] text-[#f8f8f8] border-t border-[#b28453]/10">
        
        {/* Newsletter champagne stripe */}
        <div className="bg-[#b28453] text-[#ffffff] py-12">
          <div className="container mx-auto px-6 xl:px-12 max-w-[1320px]">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8 text-left">
              
              <div>
                <h4 className="font-display text-lg sm:text-xl font-bold mb-2">
                  Receba insights sobre SEO, GEO e Search Intelligence para agências
                </h4>
                <p className="text-white/80 text-xs sm:text-sm font-mono tracking-wide uppercase">
                  Tendências analíticas e bastidores do mercado orgânico diretamente no seu e-mail
                </p>
              </div>

              <div className="w-full lg:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                {newsletterSuccess ? (
                  <div className="bg-white/10 px-6 py-3 rounded-full text-white text-sm font-mono border border-white/20">
                    Obrigado por assinar! Enviando insights em breve.
                  </div>
                ) : (
                  <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 w-full">
                    <input
                      type="email"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="Seu e-mail profissional"
                      className="bg-white text-[#11100f] px-6 py-3 rounded-full text-sm font-medium outline-none min-w-[260px] placeholder:text-gray-500"
                      required
                    />
                    <button
                      id="newsletter-submit"
                      type="submit"
                      className="bg-[#11100f] text-white px-6 py-3 rounded-full text-sm font-bold flex items-center justify-center space-x-1 hover:bg-[#e0d3c3] hover:text-[#11100f] transition-all cursor-pointer"
                    >
                      <span>Inscrever-se</span>
                      <Send size={12} />
                    </button>
                  </form>
                )}
                
                <div className="hidden xl:flex items-center space-x-2 pl-4 border-l border-white/20">
                  <button
                    id="foot-news-partner"
                    onClick={() => handleScrollToSection("diagnostico")}
                    className="text-xs bg-white/20 border border-white/10 hover:bg-white text-white hover:text-black py-2.5 px-4 rounded-full transition-colors leading-none font-bold"
                  >
                    Avaliar parceria
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Principal Footer Block */}
        <div className="container mx-auto px-6 xl:px-12 max-w-[1320px] py-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 text-left">
            
            {/* Col 1: Marca */}
            <div className="col-span-2 md:col-span-3 lg:col-span-1 flex flex-col justify-start">
              <div className="font-display text-2xl font-bold tracking-tight mb-3">
                <span className="text-[#f8f8f8]">AUDIT</span>
                <span className="text-[#b28453]">SEO</span>
              </div>
              <span className="text-[10px] tracking-widest text-[#b28453] uppercase font-mono mb-4 block leading-none">
                Search Intelligence Partner
              </span>
              <p className="text-[#c9c9c9] text-xs leading-[1.6] max-w-sm">
                Consultoria estratégica de SEO tradicional, GEO e inteligência de busca para agências de marketing digital que almejam blindar a carteira, reduzir inchaço orgânico CLT e se posicionar com alto padrão no mercado.
              </p>
            </div>

            {/* Col 2: Navegação */}
            <div>
              <h5 className="font-display text-[11px] font-mono tracking-widest text-[#b28453] uppercase mb-4 font-bold border-b border-[#b28453]/15 pb-2">
                Navegação
              </h5>
              <ul className="space-y-2.5 text-xs text-[#c9c9c9]">
                <li><button id="foot-nav-inicio" onClick={() => handleScrollToSection("inicio")} className="hover:text-white transition-colors cursor-pointer text-left">Início</button></li>
                <li><button id="foot-nav-agencias" onClick={() => handleScrollToSection("agencias")} className="hover:text-white transition-colors cursor-pointer text-left">Para Agências</button></li>
                <li><button id="foot-nav-signal" onClick={() => handleScrollToSection("signal")} className="hover:text-white transition-colors cursor-pointer text-left">Método S.I.G.N.A.L</button></li>
                <li><button id="foot-nav-solucoes" onClick={() => handleScrollToSection("solucoes")} className="hover:text-white transition-colors cursor-pointer text-left">Soluções</button></li>
                <li><button id="foot-nav-white" onClick={() => handleScrollToSection("white-label")} className="hover:text-white transition-colors cursor-pointer text-left">White-Label</button></li>
                <li><button id="foot-nav-geo" onClick={() => handleScrollToSection("geo-ia")} className="hover:text-white transition-colors cursor-pointer text-left">GEO & IA</button></li>
                <li><button id="foot-nav-diag" onClick={() => handleScrollToSection("diagnostico")} className="hover:text-white transition-colors cursor-pointer text-left">Diagnóstico</button></li>
              </ul>
            </div>

            {/* Col 3: Soluções */}
            <div>
              <h5 className="font-display text-[11px] font-mono tracking-widest text-[#b28453] uppercase mb-4 font-bold border-b border-[#b28453]/15 pb-2">
                Soluções
              </h5>
              <ul className="space-y-2.5 text-xs text-[#c9c9c9]">
                <li><span className="block hover:text-white transition-colors">Auditoria White-Label</span></li>
                <li><span className="block hover:text-white transition-colors">Roadmap Orgânico 90d</span></li>
                <li><span className="block hover:text-white transition-colors">Consultoria Estratégica</span></li>
                <li><span className="block hover:text-white transition-colors">Squad SEO para Agências</span></li>
                <li><span className="block hover:text-white transition-colors">Otimização AI / GEO</span></li>
                <li><span className="block hover:text-white transition-colors">SEO Local Integrado</span></li>
              </ul>
            </div>

            {/* Col 4: Para Agências */}
            <div>
              <h5 className="font-display text-[11px] font-mono tracking-widest text-[#b28453] uppercase mb-4 font-bold border-b border-[#b28453]/15 pb-2">
                Para Agências
              </h5>
              <ul className="space-y-2.5 text-xs text-[#c9c9c9]">
                <li><span className="block hover:text-white transition-colors">Como funciona</span></li>
                <li><span className="block hover:text-white transition-colors">Modelos de entrega</span></li>
                <li><span className="block hover:text-white transition-colors">Laudos para propostas</span></li>
                <li><span className="block hover:text-white transition-colors">Apoio em reuniões</span></li>
                <li><span className="block hover:text-white transition-colors">Materiais white-label</span></li>
                <li><span className="block hover:text-white transition-colors font-semibold text-[#b28453]">Diagnóstico Online</span></li>
              </ul>
            </div>

            {/* Col 5: Conteúdos */}
            <div>
              <h5 className="font-display text-[11px] font-mono tracking-widest text-[#b28453] uppercase mb-4 font-bold border-b border-[#b28453]/15 pb-2">
                Conteúdos
              </h5>
              <ul className="space-y-2.5 text-xs text-[#c9c9c9]">
                <li><span className="block hover:text-white transition-colors font-mono">Blog Oficial</span></li>
                <li><span className="block hover:text-white transition-colors">Guias Técnicos</span></li>
                <li><span className="block hover:text-white transition-colors">Estudos de Busca com IA</span></li>
                <li><span className="block hover:text-white transition-colors font-mono uppercase text-[#b28453]">GEO_READINESS_v1</span></li>
                <li><span className="block hover:text-white transition-colors">Narrativa Semântica</span></li>
                <li><span className="block hover:text-white transition-colors">Search Intelligence</span></li>
              </ul>
            </div>

            {/* Col 6: Contato */}
            <div>
              <h5 className="font-display text-[11px] font-mono tracking-widest text-[#b28453] uppercase mb-4 font-bold border-b border-[#b28453]/15 pb-2">
                Fale Conosco
              </h5>
              <span className="text-[10px] text-[#c9c9c9]/60 block mb-2 font-mono">Conversar sobre Parceria?</span>
              <ul className="space-y-2 text-xs font-semibold">
                <li>
                  <a href="https://api.whatsapp.com/send?phone=5511999999999" target="_blank" rel="noopener noreferrer" className="text-[#b28453] hover:text-[#e0d3c3] transition-colors hover:underline">
                    WhatsApp Comercial
                  </a>
                </li>
                <li className="text-[#f8f8f8] font-normal font-mono select-all">parceria@auditseo.com.br</li>
                <li className="pt-2 text-[10px] text-[#c9c9c9] font-normal">
                  Atendimento executivo nacional de Segunda a Sexta.
                </li>
              </ul>
            </div>

          </div>

          {/* Lower Subfooter row */}
          <div className="border-t border-white/5 pt-8 mt-16 flex flex-col md:flex-row justify-between items-center text-[#c9c9c9] text-xs gap-4">
            <div className="flex flex-col items-center md:items-start">
              <span>© 2026 AUDITSEO. Todos os direitos reservados.</span>
              <span className="text-[10px] text-[#c9c9c9]/40 mt-1 block">
                Consultoria tática de SEO tradicional, GEO e inteligência de busca para agências de marketing.
              </span>
            </div>
            
            <div className="flex space-x-6">
              <span className="hover:text-white cursor-pointer hover:underline">Política de Privacidade</span>
              <span className="hover:text-white cursor-pointer hover:underline">Termos de Uso</span>
            </div>
          </div>

        </div>

      </footer>

    </div>
  );
}
