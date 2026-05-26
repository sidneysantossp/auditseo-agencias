import { FormEvent, useState } from "react";
import { Send } from "lucide-react";

interface SiteFooterProps {
  onNavigate: (targetId: string) => void;
}

export default function SiteFooter({ onNavigate }: SiteFooterProps) {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const handleNewsletterSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!newsletterEmail) return;

    setNewsletterSuccess(true);
    window.setTimeout(() => {
      setNewsletterEmail("");
      setNewsletterSuccess(false);
    }, 5000);
  };

  return (
    <footer className="bg-[#11100f] text-[#f8f8f8] border-t border-[#b28453]/10">
      <div className="bg-[#b28453] text-[#ffffff] py-12">
        <div className="container mx-auto px-6 xl:px-12 max-w-[1320px]">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 text-left">
            <div className="min-w-0 max-w-2xl">
              <h4 className="font-display text-lg sm:text-xl font-bold mb-2">
                Receba insights sobre SEO, GEO e Search Intelligence para agências
              </h4>
              <p className="text-white/80 text-xs sm:text-sm font-mono tracking-wide uppercase">
                Tendências analíticas e bastidores do mercado orgânico diretamente no seu e-mail
              </p>
            </div>

            <div className="w-full lg:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              {newsletterSuccess ? (
                <div className="bg-white/10 px-6 py-3 rounded-full text-white text-sm font-mono border border-white/20 whitespace-nowrap">
                  Obrigado por assinar! Enviando insights em breve.
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(event) => setNewsletterEmail(event.target.value)}
                    placeholder="Seu e-mail profissional"
                    className="w-full bg-white text-[#11100f] px-6 py-3 rounded-full text-sm font-medium outline-none placeholder:text-gray-500 sm:w-[360px] lg:w-[390px]"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-[#11100f] text-white px-6 py-3 rounded-full text-sm font-bold flex shrink-0 items-center justify-center gap-2 whitespace-nowrap hover:bg-[#e0d3c3] hover:text-[#11100f] transition-all cursor-pointer"
                  >
                    <span>Inscrever-se</span>
                    <Send size={12} />
                  </button>
                </form>
              )}

              <div className="hidden xl:flex items-center space-x-2 pl-4 border-l border-white/20">
                <button
                  onClick={() => onNavigate("diagnostico")}
                  className="text-xs bg-white/20 border border-white/10 hover:bg-white text-white hover:text-black py-2.5 px-4 rounded-full transition-colors leading-none font-bold whitespace-nowrap"
                >
                  Avaliar parceria
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 xl:px-12 max-w-[1320px] py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 text-left">
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

          <div>
            <h5 className="font-display text-[11px] font-mono tracking-widest text-[#b28453] uppercase mb-4 font-bold border-b border-[#b28453]/15 pb-2">
              Navegação
            </h5>
            <ul className="space-y-2.5 text-xs text-[#c9c9c9]">
              <li><button onClick={() => onNavigate("inicio")} className="hover:text-white transition-colors cursor-pointer text-left">Início</button></li>
              <li><button onClick={() => onNavigate("agencias")} className="hover:text-white transition-colors cursor-pointer text-left">Para Agências</button></li>
              <li><button onClick={() => onNavigate("signal")} className="hover:text-white transition-colors cursor-pointer text-left">Método S.I.G.N.A.L</button></li>
              <li><button onClick={() => onNavigate("solucoes")} className="hover:text-white transition-colors cursor-pointer text-left">Soluções</button></li>
              <li><button onClick={() => onNavigate("white-label")} className="hover:text-white transition-colors cursor-pointer text-left">White-Label</button></li>
              <li><button onClick={() => onNavigate("geo-ia")} className="hover:text-white transition-colors cursor-pointer text-left">GEO & IA</button></li>
              <li><button onClick={() => onNavigate("diagnostico")} className="hover:text-white transition-colors cursor-pointer text-left">Diagnóstico</button></li>
            </ul>
          </div>

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
  );
}
