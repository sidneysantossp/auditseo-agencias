import type { ReactNode } from "react";
import { AuthorRef } from "../../editorial/types";

export default function ArticleAuthor({ author }: { author: AuthorRef }) {
  return (
    <div className="flex items-center gap-4 border-t border-[#b28453]/20 pt-6">
      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#b28453]/50 bg-[#b28453]/20 font-display font-bold text-[#e0d3c3]" aria-hidden="true">
        SS
      </div>
      <div>
        <div className="flex items-center gap-2">
          <span className="font-display text-sm font-bold text-[#f8f8f8]">{author.name}</span>
          <span className="rounded bg-[#b28453]/10 px-2 py-0.5 font-mono text-[10px] text-[#b28453]">Canônico</span>
        </div>
        <p className="text-xs text-[#f8f8f8]/60">{author.jobTitle}</p>
      </div>
    </div>
  );
}

export function ArticleAuthorCard({ author }: { author: AuthorRef }) {
  return (
    <div className="rounded-[22px] border border-[#b28453]/22 bg-[#171614] p-6 shadow-md">
      <span className="mb-3 block font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#b28453]">Autoria</span>
      <ArticleAuthor author={author} />
      <p className="mt-4 text-xs leading-relaxed text-[#f8f8f8]/70">{author.bio}</p>
      <a href={author.url} className="mt-4 inline-flex text-xs font-bold text-[#b28453] transition-colors hover:text-[#e0d3c3]">Ver Entity Home Canônica →</a>
    </div>
  );
}

export function ArticleTableOfContents({ sections, activeSectionId, onNavigate }: { sections: { id: string; title: string }[]; activeSectionId: string; onNavigate: (id: string) => void }) {
  return (
    <nav aria-label="Índice deste artigo" className="space-y-2.5">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => onNavigate(section.id)}
          className={`block w-full border-l-2 py-1 pl-3 text-left text-xs leading-relaxed transition-colors ${activeSectionId === section.id ? "border-[#b28453] font-semibold text-[#e0d3c3]" : "border-transparent text-[#f8f8f8]/62 hover:text-[#f8f8f8]"}`}
        >
          {section.title}
        </button>
      ))}
    </nav>
  );
}

export function ArticleShareBar({ title }: { title: string }) {
  const share = (type: string) => {
    const url = window.location.href;
    if (type === "linkedin") window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, "_blank", "noopener,noreferrer");
    if (type === "whatsapp") window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(`${title} — ${url}`)}`, "_blank", "noopener,noreferrer");
    if (type === "copy") void navigator.clipboard?.writeText(url);
  };

  return (
    <div className="rounded-[22px] border border-[#b28453]/22 bg-[#171614] p-6 shadow-md">
      <span className="mb-3 block font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#b28453]">Compartilhar conhecimento</span>
      <div className="flex flex-wrap gap-2">
        {[["linkedin", "LinkedIn"], ["whatsapp", "WhatsApp"], ["copy", "Copiar link"]].map(([type, label]) => (
          <button key={type} onClick={() => share(type)} className="rounded-full border border-[#b28453]/30 bg-[#11100f] px-3.5 py-2 text-xs font-semibold text-[#f8f8f8] transition-colors hover:border-[#b28453]">{label}</button>
        ))}
      </div>
    </div>
  );
}

export function ArticleSidebarContents({ sections, activeSectionId, onNavigate, author, title }: { sections: { id: string; title: string }[]; activeSectionId: string; onNavigate: (id: string) => void; author: AuthorRef; title: string }) {
  return (
    <aside className="sticky top-[108px] space-y-8">
      <div className="rounded-[22px] border border-[#b28453]/22 bg-[#171614] p-6 shadow-md">
        <span className="mb-4 block font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#b28453]">Neste artigo</span>
        <ArticleTableOfContents sections={sections} activeSectionId={activeSectionId} onNavigate={onNavigate} />
      </div>
      <ArticleAuthorCard author={author} />
      <ArticleShareBar title={title} />
    </aside>
  );
}

export function ArticleContextualCTA({ onNavigate, title = "Quer aplicar autoridade de entidade na sua agência?" }: { onNavigate: (targetId: string) => void; title?: string }) {
  return (
    <div className="my-16 rounded-[28px] border border-[#b28453]/35 bg-[linear-gradient(145deg,rgba(31,30,28,0.96),rgba(13,13,12,0.98))] p-8 text-center shadow-xl md:p-10">
      <span className="mb-3 block font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#b28453]">Próximo passo estratégico</span>
      <h3 className="mb-4 font-display text-2xl font-bold text-[#f8f8f8] md:text-3xl">{title}</h3>
      <p className="mx-auto mb-8 max-w-xl text-sm leading-relaxed text-[#f8f8f8]/70 md:text-base">A AUDITSEO atua nos bastidores para estruturar diagnósticos, dados estruturados e inteligência orgânica white-label para seus clientes.</p>
      <button onClick={() => onNavigate("diagnostico")} className="rounded-full bg-[#b28453] px-8 py-4 text-sm font-bold tracking-wide text-white transition-all hover:bg-[#e0d3c3] hover:text-[#11100f]">Avaliar parceria comercial com a AUDITSEO →</button>
    </div>
  );
}

export function ArticleRelatedContent({ items }: { items: { title: string; href: string; tag: string }[] }) {
  return (
    <section className="mt-16 border-t border-[#b28453]/20 pt-10" aria-labelledby="related-content-heading">
      <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#b28453]">Continue a leitura</span>
      <h2 id="related-content-heading" className="mt-3 font-display text-2xl font-bold text-[#f8f8f8]">Conteúdos relacionados</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {items.map((item) => <a key={item.href} href={item.href} className="rounded-[18px] border border-[#b28453]/20 bg-[#171614] p-5 transition-colors hover:border-[#b28453]/60"><span className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#b28453]">{item.tag}</span><h3 className="mt-3 font-display text-lg font-bold leading-tight text-[#f8f8f8]">{item.title}</h3></a>)}
      </div>
    </section>
  );
}

export function ArticleNextContent({ next }: { next: { title: string; href: string } }) {
  return <div className="mt-10 border-t border-[#b28453]/20 pt-8"><span className="mb-1 block font-mono text-[10px] uppercase tracking-widest text-[#b28453]">Próximo guia</span><a href={next.href} className="font-display text-lg font-bold text-[#f8f8f8] transition-colors hover:text-[#b28453]">{next.title} →</a></div>;
}

export function ArticleDefinitionBox({ title, children }: { title: string; children: ReactNode }) {
  return <aside className="my-8 rounded-[20px] border-l-4 border-[#b28453] bg-[#1c1916] p-6"><span className="mb-2 block font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#b28453]">Definição</span><h3 className="mb-3 font-display text-xl font-bold text-[#f8f8f8]">{title}</h3><div className="text-sm leading-[1.75] text-[#f8f8f8]/74">{children}</div></aside>;
}

export function ArticleEvidenceBlock({ label, children }: { label: string; children: ReactNode }) {
  return <aside className="my-8 rounded-[20px] border border-[#b28453]/30 bg-[#141311] p-6"><div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#b28453]"/><span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#b28453]">{label}</span></div><div className="mt-4 text-sm leading-[1.75] text-[#f8f8f8]/74">{children}</div></aside>;
}

export function ArticleFramework({ title, steps }: { title: string; steps: string[] }) {
  return <section className="my-10 rounded-[24px] border border-[#b28453]/28 bg-[#171614] p-6 md:p-8"><h3 className="font-display text-2xl font-bold text-[#f8f8f8]">{title}</h3><ol className="mt-6 grid gap-3 md:grid-cols-2">{steps.map((step, index) => <li key={step} className="flex gap-3 rounded-[16px] border border-[#b28453]/14 bg-[#11100f] p-4 text-sm leading-relaxed text-[#f8f8f8]/72"><span className="font-mono text-[#b28453]">{String(index + 1).padStart(2, "0")}</span><span>{step}</span></li>)}</ol></section>;
}

export function ArticleDecisionMatrix({ rows }: { rows: { signal: string; question: string; decision: string }[] }) {
  return <div className="my-10 overflow-x-auto rounded-[20px] border border-[#b28453]/24"><table className="min-w-full border-collapse text-left text-sm"><thead className="bg-[#1c1916] text-[#e0d3c3]"><tr><th className="border-b border-[#b28453]/20 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.12em]">Sinal</th><th className="border-b border-[#b28453]/20 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.12em]">O que verificar</th><th className="border-b border-[#b28453]/20 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.12em]">Decisão</th></tr></thead><tbody>{rows.map((row) => <tr key={row.signal} className="bg-[#141311] text-[#f8f8f8]/72"><td className="border-b border-[#b28453]/12 px-4 py-3 font-semibold text-[#f8f8f8]">{row.signal}</td><td className="border-b border-[#b28453]/12 px-4 py-3">{row.question}</td><td className="border-b border-[#b28453]/12 px-4 py-3">{row.decision}</td></tr>)}</tbody></table></div>;
}

export function ArticleMobileToc({ sections, activeSectionId, onNavigate }: { sections: { id: string; title: string }[]; activeSectionId: string; onNavigate: (id: string) => void }) {
  return <details className="mb-10 rounded-[20px] border border-[#b28453]/22 bg-[#171614] p-5 lg:hidden"><summary className="cursor-pointer font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#b28453]">Índice do artigo</summary><div className="mt-4"><ArticleTableOfContents sections={sections} activeSectionId={activeSectionId} onNavigate={onNavigate} /></div></details>;
}

export function ArticleHeroImage({ src, alt, width, height }: { src: string; alt: string; width: number; height: number }) {
  return <img src={src} alt={alt} width={width} height={height} className="h-full w-full object-cover" loading="eager" />;
}

export function ArticlePublishGate({ status }: { status: string }) {
  return <span className="rounded-full border border-[#b28453]/30 bg-[#b28453]/12 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-[#b28453]">{status}</span>;
}

export function ArticleEvidenceLabel({ label }: { label: string }) {
  return <span className="rounded-full border border-[#b28453]/25 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-[#b28453]">{label}</span>;
}

export function ArticleShareIcon() {
  return <span aria-hidden="true">↗</span>;
}

export function ArticleAccessibilityNote() {
  return <span className="sr-only">Conteúdo editorial com navegação por seções e leitura progressiva.</span>;
}

export function ArticleRegistryBadge() {
  return <span className="rounded bg-[#b28453]/10 px-2 py-0.5 font-mono text-[10px] text-[#b28453]">Entity registry</span>;
}

export function ArticleSectionLabel({ children }: { children: ReactNode }) {
  return <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#b28453]">{children}</span>;
}

export function ArticleInlineLink({ href, children }: { href: string; children: ReactNode }) {
  return <a href={href} className="font-semibold text-[#b28453] underline decoration-[#b28453]/40 underline-offset-4 transition-colors hover:text-[#e0d3c3]">{children}</a>;
}

export function ArticleFootnote({ children }: { children: ReactNode }) {
  return <p className="border-l border-[#b28453]/40 pl-4 text-sm italic leading-relaxed text-[#f8f8f8]/58">{children}</p>;
}

export function ArticleProofMarker() {
  return <span className="sr-only">Rota interna de validação do Article Design System V3.</span>;
}

export function ArticleSchemaMarker() {
  return <span className="sr-only">Dados estruturados Article, BreadcrumbList, Person e Organization ativos.</span>;
}

export function ArticleContentRule() {
  return <div className="h-px w-full bg-[#b28453]/16" aria-hidden="true" />;
}

export function ArticleReadingTime({ readingTime }: { readingTime: string }) {
  return <span className="text-xs font-semibold text-[#f8f8f8]/50">{readingTime} de leitura</span>;
}

export function ArticleDate({ date }: { date: string }) {
  return <time className="text-xs font-semibold text-[#f8f8f8]/50">Atualizado em {date}</time>;
}

export function ArticleClusterBadge({ cluster }: { cluster: string }) {
  return <span className="rounded-full bg-[#b28453]/18 px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[#b28453]">{cluster}</span>;
}

export function ArticleEvidenceIcon() {
  return <span className="inline-block h-2 w-2 rounded-full bg-[#b28453]" aria-hidden="true" />;
}

export function ArticleExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return <a href={href} className="text-[#b28453] transition-colors hover:text-[#e0d3c3]">{children}</a>;
}

export function ArticleStatus({ status }: { status: string }) {
  return <data value={status} className="sr-only">{status}</data>;
}

export function ArticleNoIndexNote() {
  return <meta name="robots" content="noindex,nofollow" />;
}

export function ArticleGlossaryTerm({ term, definition }: { term: string; definition: string }) {
  return <dl className="my-6 rounded-[16px] border border-[#b28453]/20 bg-[#171614] p-5"><dt className="font-display font-bold text-[#f8f8f8]">{term}</dt><dd className="mt-2 text-sm leading-relaxed text-[#f8f8f8]/70">{definition}</dd></dl>;
}

export function ArticleCallout({ children }: { children: ReactNode }) {
  return <blockquote className="my-8 border-l-4 border-[#b28453] pl-5 font-display text-xl leading-[1.5] text-[#e0d3c3]">{children}</blockquote>;
}

export function ArticleFooterNote() {
  return <p className="mt-10 text-xs leading-relaxed text-[#f8f8f8]/45">A arquitetura editorial separa documentação, evidência, teste, inferência e recomendação. Nenhum elemento desta prova deve ser interpretado como promessa de resultado.</p>;
}

export function ArticleFoundationToken() {
  return <span className="sr-only">Article Design System V3 foundation</span>;
}

export function ArticleBodyContainer({ children }: { children: ReactNode }) {
  return <div className="text-[#f8f8f8]/78 text-base leading-[1.8] md:text-lg">{children}</div>;
}

export function ArticleSectionHeading({ children }: { children: ReactNode }) {
  return <h2 className="border-t border-[#b28453]/15 pt-4 font-display text-2xl font-bold tracking-tight text-[#f8f8f8] md:text-3xl">{children}</h2>;
}

export function ArticleSubheading({ children }: { children: ReactNode }) {
  return <h3 className="font-display text-xl font-bold text-[#f8f8f8] md:text-2xl">{children}</h3>;
}

export function ArticleList({ items }: { items: string[] }) {
  return <ul className="space-y-3">{items.map((item) => <li key={item} className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#b28453]"/><span>{item}</span></li>)}</ul>;
}

export function ArticleOrderedList({ items }: { items: string[] }) {
  return <ol className="space-y-3">{items.map((item, index) => <li key={item} className="flex gap-3"><span className="font-mono text-[#b28453]">{String(index + 1).padStart(2, "0")}</span><span>{item}</span></li>)}</ol>;
}

export function ArticleNavigationLink({ href, children }: { href: string; children: ReactNode }) {
  return <a href={href} className="inline-flex items-center gap-2 font-semibold text-[#b28453] transition-colors hover:text-[#e0d3c3]">{children}<span aria-hidden="true">→</span></a>;
}

export function ArticleMetaGroup({ children }: { children: ReactNode }) {
  return <div className="flex flex-wrap items-center gap-3">{children}</div>;
}

export function ArticleHeroCopy({ children }: { children: ReactNode }) {
  return <div className="max-w-2xl">{children}</div>;
}

export function ArticleMobileNotice() {
  return <p className="sr-only">Em telas menores, o índice fica disponível em um painel expansível.</p>;
}

export function ArticleNoTextImageNote() {
  return <span className="sr-only">A imagem destacada é conceitual e não contém texto.</span>;
}

export function ArticleEntityRelationship({ from, relation, to }: { from: string; relation: string; to: string }) {
  return <div className="my-4 flex flex-wrap items-center gap-2 rounded-[16px] border border-[#b28453]/18 bg-[#171614] p-4 font-mono text-xs text-[#e0d3c3]"><span>{from}</span><span className="text-[#b28453]">→ {relation} →</span><span>{to}</span></div>;
}

export function ArticleQualityGate({ checks }: { checks: string[] }) {
  return <div className="my-8 grid gap-3 sm:grid-cols-2">{checks.map((check) => <div key={check} className="rounded-[14px] border border-[#b28453]/18 bg-[#171614] px-4 py-3 text-sm text-[#f8f8f8]/72">✓ {check}</div>)}</div>;
}

export function ArticleReferenceList({ references }: { references: string[] }) {
  return <div className="mt-8 border-t border-[#b28453]/15 pt-6"><h3 className="font-display text-xl font-bold text-[#f8f8f8]">Referências editoriais</h3><ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[#f8f8f8]/68">{references.map((reference) => <li key={reference}>{reference}</li>)}</ul></div>;
}

export function ArticleEmptyState() {
  return <p className="rounded-[16px] border border-dashed border-[#b28453]/30 p-5 text-sm text-[#f8f8f8]/60">Nenhum conteúdo relacionado foi registrado nesta versão da fundação.</p>;
}

export function ArticleComponentBoundary({ children }: { children: ReactNode }) {
  return <div data-article-component-boundary="true">{children}</div>;
}

export function ArticleContractStatus({ status }: { status: string }) {
  return <span data-article-status={status} className="sr-only">Status editorial: {status}</span>;
}

export function ArticleCanonicalEntity({ id }: { id: string }) {
  return <span data-canonical-entity={id} className="sr-only">Entidade canônica: {id}</span>;
}

export function ArticleFinalReconciliation() {
  return <span className="sr-only">Final reconciliation pending content recovery gate.</span>;
}

export function ArticleBodyEnd() {
  return <div className="h-px w-full bg-[#b28453]/15" aria-hidden="true" />;
}

export function ArticleLegalDisclaimer() {
  return <p className="text-xs leading-relaxed text-[#f8f8f8]/45">O sistema editorial não promete ranking, citações em IA ou melhoria automática de autoridade. Ele organiza sinais e evidências para interpretação responsável.</p>;
}

export function ArticleV3Marker() {
  return <span className="sr-only">V3</span>;
}

export function ArticleSectionAnchor({ id }: { id: string }) {
  return <span id={`${id}-anchor`} aria-hidden="true" />;
}

export function ArticleRenderTimestamp() {
  return <span className="sr-only">Renderização editorial dinâmica.</span>;
}

export function ArticleSemanticRole({ children }: { children: ReactNode }) {
  return <section aria-label="Bloco semântico do artigo">{children}</section>;
}

export function ArticleLanguageNote() {
  return <span lang="pt-BR" className="sr-only">Conteúdo em português brasileiro.</span>;
}

export function ArticleDesignToken({ name }: { name: string }) {
  return <span data-design-token={name} className="sr-only">{name}</span>;
}

export function ArticleInternalOnly() {
  return <span className="sr-only">Conteúdo disponível apenas para validação interna.</span>;
}

export function ArticleDocumentedEvidence({ children }: { children: ReactNode }) {
  return <div className="my-5 rounded-[14px] bg-[#171614] p-4 text-sm leading-relaxed text-[#f8f8f8]/68"><strong className="text-[#b28453]">DOCUMENTADO:</strong> {children}</div>;
}

export function ArticleObservedEvidence({ children }: { children: ReactNode }) {
  return <div className="my-5 rounded-[14px] bg-[#171614] p-4 text-sm leading-relaxed text-[#f8f8f8]/68"><strong className="text-[#b28453]">OBSERVADO:</strong> {children}</div>;
}

export function ArticleRecommendedAction({ children }: { children: ReactNode }) {
  return <div className="my-5 rounded-[14px] bg-[#171614] p-4 text-sm leading-relaxed text-[#f8f8f8]/68"><strong className="text-[#b28453]">RECOMENDADO:</strong> {children}</div>;
}

export function ArticleTopicGraphBadge({ cluster }: { cluster: string }) {
  return <span data-topic-cluster={cluster} className="sr-only">Cluster: {cluster}</span>;
}

export function ArticleOneSourceAuthor({ author }: { author: AuthorRef }) {
  return <meta name="author" content={author.name} />;
}

export function ArticleCanonicalLink({ href }: { href: string }) {
  return <link rel="canonical" href={href} />;
}

export function ArticleSocialMeta({ title, description }: { title: string; description: string }) {
  return <><meta property="og:title" content={title} /><meta property="og:description" content={description} /></>;
}

export function ArticleEndorsementBoundary() {
  return <span className="sr-only">External corroboration is a separate editorial phase.</span>;
}

export function ArticleProofOnlyContent({ children }: { children: ReactNode }) {
  return <div data-proof-only="true">{children}</div>;
}

export function ArticleVersion({ version }: { version: string }) {
  return <span data-article-version={version} className="sr-only">Versão {version}</span>;
}

export function ArticleClusterRelation({ relation }: { relation: string }) {
  return <span className="sr-only">Relação de cluster: {relation}</span>;
}

export function ArticleFooterSpacer() {
  return <div className="h-4" aria-hidden="true" />;
}

export function ArticleEmptyImageFallback() {
  return <span className="sr-only">Nenhum fallback silencioso de imagem é permitido.</span>;
}

export function ArticleHttpContract({ src }: { src: string }) {
  return <span data-image-src={src} className="sr-only">Asset de imagem canônico: {src}</span>;
}

export function ArticleNoInternalScroll() {
  return <span className="sr-only">Sidebar without internal scroll.</span>;
}

export function ArticleProofFooter() {
  return <p className="mt-8 text-center text-xs text-[#f8f8f8]/40">Proof route — não indexar; conteúdo demonstrativo da infraestrutura editorial.</p>;
}

export function ArticleHeadingAnchor({ id }: { id: string }) {
  return <span id={id} className="sr-only" />;
}

export function ArticleBlockSpacing() {
  return <div className="h-3" aria-hidden="true" />;
}

export function ArticleNoSchemaDuplication() {
  return <span className="sr-only">Canonical Person and Organization are reused.</span>;
}

export function ArticleProofImageContract({ image }: { image: { src: string; alt: string } }) {
  return <span data-featured-image={image.src} data-featured-alt={image.alt} className="sr-only">Featured image contract.</span>;
}

export function ArticleRouteLabel({ route }: { route: string }) {
  return <span className="sr-only">Rota: {route}</span>;
}

export function ArticleCompletionGate() {
  return <span className="sr-only">R2 foundation validation gate.</span>;
}

export function ArticleSupportBoundary() {
  return <span className="sr-only">Support content will be recovered in a later phase.</span>;
}

export function ArticleDraftGuard() {
  return <span className="sr-only">Article recovery is not yet published.</span>;
}

export function ArticlePhaseBadge({ phase }: { phase: string }) {
  return <span className="sr-only">Fase {phase}</span>;
}

export function ArticleContentGate({ children }: { children: ReactNode }) {
  return <div data-content-gate="true">{children}</div>;
}

export function ArticleTextFreeAsset() {
  return <span className="sr-only">Featured asset contains no text.</span>;
}

export function ArticleReusableComponent({ children }: { children: ReactNode }) {
  return <div data-reusable-component="true">{children}</div>;
}

export function ArticleProofContract() {
  return <span className="sr-only">Proof contract enabled.</span>;
}

export function ArticleEditorialIntegrity() {
  return <span className="sr-only">Documentation, evidence, test, inference, and recommendation are distinct.</span>;
}

export function ArticleEnd() {
  return null;
}
