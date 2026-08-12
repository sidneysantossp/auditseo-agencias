import { useState, useEffect, type ReactNode } from "react";
import { ArticleData } from "../../editorial/types";
import ArticleReadingProgress from "./ArticleReadingProgress";
import ArticleAuthor, { ArticleSidebarContents, ArticleContextualCTA, ArticleNextContent, ArticleRelatedContent, ArticleHeroImage, ArticleMobileToc, ArticleNoTextImageNote } from "./ArticleAuthor";
import SiteFooter from "../SiteFooter";
import Header from "../Header";

interface ArticleLayoutProps {
  article: ArticleData;
  onNavigate: (targetId: string) => void;
  bodyExtras?: ReactNode;
}

export default function ArticleLayout({ article, onNavigate, bodyExtras }: ArticleLayoutProps) {
  const [activeSectionId, setActiveSectionId] = useState(article.sections[0]?.id || "");

  useEffect(() => {
    const handleScroll = () => {
      const sections = article.sections.map((section) => document.getElementById(section.id));
      const scrollPos = window.scrollY + 180;
      for (let i = sections.length - 1; i >= 0; i -= 1) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSectionId(article.sections[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [article.sections]);

  const handleNavigateSection = (id: string) => {
    const target = document.getElementById(id);
    if (!target) return;
    window.scrollTo({ top: target.offsetTop - 100, behavior: "smooth" });
    setActiveSectionId(id);
  };

  return (
    <div className="min-h-screen bg-[#11100f] font-sans text-[#f8f8f8] selection:bg-[#b28453] selection:text-white">
      <Header onNavClick={onNavigate} activeSection="conteudo" />
      <ArticleReadingProgress />

      <section className="relative overflow-hidden border-b border-[#b28453]/15 px-6 pb-16 pt-[132px] md:pb-24 xl:px-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(178,132,83,0.12),transparent_40%)]" />
        <div className="container relative z-10 mx-auto max-w-[1320px]">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="flex flex-col items-start text-left lg:col-span-7">
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-[#b28453]/30 bg-[#b28453]/18 px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[#b28453]">{article.cluster}</span>
                <span className="text-xs font-semibold text-[#f8f8f8]/50">{article.readingTime} de leitura</span>
                <time className="text-xs font-semibold text-[#f8f8f8]/50" dateTime={article.dateModified}>Atualizado em {article.dateModified}</time>
              </div>
              <h1 className="mb-6 font-display text-[38px] font-bold leading-[1.08] tracking-[-0.03em] text-[#f8f8f8] sm:text-[46px] md:text-[56px]">{article.title}</h1>
              <p className="mb-8 max-w-2xl text-lg font-normal leading-[1.6] text-[#e0d3c3] md:text-xl">{article.subtitle}</p>
              <ArticleAuthor author={article.author} />
            </div>

            <div className="lg:col-span-5">
              <figure className="rounded-[28px] border border-[#b28453]/28 bg-[#171614] p-3 shadow-[0_30px_90px_rgba(0,0,0,0.4)]">
                <div className="aspect-[1200/630] overflow-hidden rounded-[22px] border border-[#b28453]/20 bg-[#0f0e0d]">
                  <ArticleHeroImage {...article.featuredImage} />
                </div>
                <ArticleNoTextImageNote />
              </figure>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-[1320px] flex-grow px-6 py-16 xl:px-12">
        <ArticleMobileToc sections={article.sections} activeSectionId={activeSectionId} onNavigate={handleNavigateSection} />
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <main className="space-y-12 lg:col-span-8" aria-label="Corpo do artigo">
            {article.sections.map((section) => (
              <article key={section.id} id={section.id} className="scroll-mt-28 space-y-6">
                <h2 className="border-t border-[#b28453]/15 pt-4 font-display text-2xl font-bold tracking-tight text-[#f8f8f8] md:text-3xl">{section.title}</h2>
                <div className="space-y-6 text-base leading-[1.8] text-[#f8f8f8]/78 md:text-lg" dangerouslySetInnerHTML={{ __html: section.content }} />
              </article>
            ))}
            {bodyExtras}
            <ArticleContextualCTA onNavigate={onNavigate} />
            {article.related?.length ? <ArticleRelatedContent items={article.related} /> : null}
            {article.next ? <ArticleNextContent next={article.next} /> : null}
          </main>
          <div className="hidden lg:col-span-4 lg:block">
            <ArticleSidebarContents sections={article.sections} activeSectionId={activeSectionId} onNavigate={handleNavigateSection} author={article.author} title={article.title} />
          </div>
        </div>
      </div>

      <SiteFooter onNavigate={onNavigate} />
    </div>
  );
}
