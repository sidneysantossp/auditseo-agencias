import type { ReactNode } from "react";
import type { EvidenceCategory, EvidenceItem, ResearchItem, ResearchStatus, ResearchType } from "../../editorial/researchTypes";

const typeLabels: Record<ResearchType, string> = {
  EXPERIMENT: "Experiment",
  STUDY: "Study",
  BENCHMARK: "Benchmark",
  ANALYSIS: "Analysis",
  OBSERVATION: "Observation",
  DOCUMENTATION_NOTE: "Documentation note",
  CASE: "Case",
};

const statusLabels: Record<ResearchStatus, string> = {
  DRAFT: "Draft",
  REVIEW: "Review",
  PUBLISHED: "Published",
  ARCHIVED: "Archived",
  MIGRATION_PENDING: "Migration pending",
};

const evidenceStyles: Record<EvidenceCategory, string> = {
  DOCUMENTADO: "border-[#e0d3c3]/30 bg-[#e0d3c3]/8 text-[#e0d3c3]",
  OBSERVADO: "border-[#b28453]/55 bg-[#b28453]/12 text-[#e0d3c3]",
  TESTADO: "border-[#8da28a]/45 bg-[#8da28a]/10 text-[#c9ddc5]",
  INFERIDO: "border-[#8f7aa8]/45 bg-[#8f7aa8]/10 text-[#d8ccec]",
  RECOMENDADO: "border-[#d4a35e]/45 bg-[#d4a35e]/10 text-[#f2d6a4]",
};

export function ResearchTypeBadge({ type }: { type: ResearchType }) {
  return <span className="inline-flex rounded-full border border-[#b28453]/32 bg-[#b28453]/10 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#b28453]">{typeLabels[type]}</span>;
}

export function ResearchStatusBadge({ status }: { status: ResearchStatus }) {
  const isPublic = status === "PUBLISHED";
  return <span className={`inline-flex rounded-full border px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.14em] ${isPublic ? "border-[#8da28a]/35 bg-[#8da28a]/10 text-[#c9ddc5]" : "border-[#f8f8f8]/20 bg-[#f8f8f8]/5 text-[#f8f8f8]/55"}`}>{statusLabels[status]}</span>;
}

export function ResearchEvidenceTag({ category }: { category: EvidenceCategory; key?: string }) {
  return <span className={`inline-flex rounded-full border px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.1em] ${evidenceStyles[category]}`}>{category}</span>;
}

export function ResearchEvidenceProfile({ items }: { items: EvidenceItem[] }) {
  return (
    <section aria-labelledby="evidence-profile-heading" className="space-y-4">
      <div>
        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#b28453]">Governança de evidência</span>
        <h2 id="evidence-profile-heading" className="mt-2 font-display text-2xl font-bold text-[#f8f8f8]">O que este item permite afirmar</h2>
      </div>
      <div className="space-y-3">
        {items.map((item, index) => (
          <article key={`${item.type}-${index}`} className="rounded-[18px] border border-[#b28453]/18 bg-[#171614] p-5">
            <div className="flex flex-wrap items-center gap-3"><ResearchEvidenceTag category={item.type} /><span className="font-mono text-[10px] text-[#f8f8f8]/42">EVIDENCE-{String(index + 1).padStart(2, "0")}</span></div>
            <p className="mt-4 text-sm leading-[1.75] text-[#f8f8f8]/78">{item.statement}</p>
            {item.source && <p className="mt-3 border-t border-[#b28453]/12 pt-3 text-xs text-[#f8f8f8]/52"><strong className="text-[#e0d3c3]">Fonte:</strong> {item.source}</p>}
            {item.limitations && <p className="mt-2 text-xs leading-relaxed text-[#f8f8f8]/52"><strong className="text-[#e0d3c3]">Limitação:</strong> {item.limitations}</p>}
            {item.notes && <p className="mt-2 text-xs leading-relaxed text-[#f8f8f8]/52"><strong className="text-[#e0d3c3]">Nota:</strong> {item.notes}</p>}
          </article>
        ))}
      </div>
    </section>
  );
}

export function ResearchSection({ id, label, title, children }: { id: string; label: string; title: string; children: ReactNode }) {
  return <section id={id} className="scroll-mt-28 space-y-4 border-t border-[#b28453]/16 pt-6"><span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#b28453]">{label}</span><h2 className="font-display text-2xl font-bold tracking-tight text-[#f8f8f8] md:text-3xl">{title}</h2><div className="space-y-4 text-base leading-[1.8] text-[#f8f8f8]/76 md:text-lg">{children}</div></section>;
}

export function ResearchList({ items }: { items: ResearchItem[] }) {
  return <div className="grid gap-5 lg:grid-cols-2">{items.map((item) => <ResearchCard key={item.id} item={item} />)}</div>;
}

export function ResearchCard({ item }: { item: ResearchItem; key?: string }) {
  return <a href={item.route} className="group flex h-full flex-col rounded-[24px] border border-[#b28453]/20 bg-[#171614] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#b28453]/55 hover:shadow-[0_20px_70px_rgba(0,0,0,0.28)]"><div className="flex flex-wrap items-center justify-between gap-3"><ResearchTypeBadge type={item.type} /><ResearchStatusBadge status={item.status} /></div><h3 className="mt-6 font-display text-2xl font-bold leading-tight text-[#f8f8f8] transition-colors group-hover:text-[#e0d3c3]">{item.title}</h3><p className="mt-4 flex-grow text-sm leading-[1.7] text-[#f8f8f8]/65">{item.subtitle}</p><div className="mt-6 flex flex-wrap items-center gap-2 border-t border-[#b28453]/12 pt-5"><span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#f8f8f8]/45">{item.researchDate || item.dateModified}</span>{Array.from(new Set(item.evidenceProfile.map((evidence) => evidence.type))).slice(0, 3).map((category) => <ResearchEvidenceTag key={category} category={category} />)}</div><span className="mt-5 text-sm font-bold text-[#b28453]">Ler pesquisa →</span></a>;
}

export function ResearchTopicList({ topics }: { topics: string[] }) {
  return <div className="flex flex-wrap gap-2">{topics.map((topic) => <span key={topic} className="rounded-full border border-[#b28453]/18 bg-[#171614] px-3 py-1.5 text-xs text-[#f8f8f8]/62">{topic}</span>)}</div>;
}

export function ResearchQuerySet({ queries }: { queries: NonNullable<ResearchItem["queries"]> }) {
  return <div className="overflow-x-auto rounded-[18px] border border-[#b28453]/22"><table className="min-w-full border-collapse text-left text-sm"><thead className="bg-[#1c1916]"><tr><th className="border-b border-[#b28453]/16 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.12em] text-[#b28453]">ID</th><th className="border-b border-[#b28453]/16 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.12em] text-[#b28453]">Query</th><th className="border-b border-[#b28453]/16 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.12em] text-[#b28453]">Sistema</th><th className="border-b border-[#b28453]/16 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.12em] text-[#b28453]">Resumo</th></tr></thead><tbody>{queries.map((query) => <tr key={query.id} className="bg-[#141311] text-[#f8f8f8]/72"><td className="border-b border-[#b28453]/10 px-4 py-3 font-mono text-xs text-[#e0d3c3]">{query.id}</td><td className="border-b border-[#b28453]/10 px-4 py-3 font-semibold text-[#f8f8f8]">{query.query}</td><td className="border-b border-[#b28453]/10 px-4 py-3">{query.system}</td><td className="border-b border-[#b28453]/10 px-4 py-3">{query.resultSummary || "Registrada para medição."}</td></tr>)}</tbody></table></div>;
}

export function ResearchInterventionTimeline({ interventions }: { interventions: NonNullable<ResearchItem["interventions"]> }) {
  return <div className="space-y-4">{interventions.map((intervention) => <article key={intervention.id} className="relative rounded-[18px] border border-[#b28453]/20 bg-[#171614] p-5"><div className="flex flex-wrap items-center gap-3"><span className="font-mono text-xs text-[#b28453]">{intervention.id}</span><span className="rounded-full bg-[#b28453]/12 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-[#b28453]">{intervention.moment}</span></div><h3 className="mt-4 font-display text-xl font-bold text-[#f8f8f8]">{intervention.title}</h3><p className="mt-2 text-sm leading-relaxed text-[#f8f8f8]/70">{intervention.objective}</p><p className="mt-4 text-sm leading-relaxed text-[#f8f8f8]/60">{intervention.description}</p></article>)}</div>;
}

export function ResearchSidebar({ item }: { item: ResearchItem }) {
  const links = [{ id: "question", label: "Question" }, { id: "context", label: "Context" }, { id: "method", label: "Method" }, { id: "observation", label: "Observation" }, { id: "evidence", label: "Evidence" }, { id: "interpretation", label: "Interpretation" }, { id: "limitations", label: "Limitations" }];
  return <aside className="sticky top-[108px] space-y-6"><div className="rounded-[22px] border border-[#b28453]/20 bg-[#171614] p-6"><span className="mb-4 block font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#b28453]">Research map</span><nav className="space-y-2">{links.map((link) => <a key={link.id} href={`#${link.id}`} className="block border-l-2 border-transparent py-1 pl-3 text-xs text-[#f8f8f8]/62 transition-colors hover:border-[#b28453] hover:text-[#f8f8f8]">{link.label}</a>)}</nav></div><div className="rounded-[22px] border border-[#b28453]/20 bg-[#171614] p-6"><ResearchTypeBadge type={item.type} /><div className="mt-4"><ResearchStatusBadge status={item.status} /></div><p className="mt-5 text-xs leading-relaxed text-[#f8f8f8]/58">{item.status === "PUBLISHED" ? "Item público do Search Intelligence Lab." : "Item interno: não aparece na listagem pública e não deve ser indexado."}</p></div><div className="rounded-[22px] border border-[#b28453]/20 bg-[#171614] p-6"><span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#b28453]">Autoria</span><p className="mt-3 font-display font-bold text-[#f8f8f8]">{item.author.name}</p><p className="mt-1 text-xs text-[#f8f8f8]/58">{item.author.jobTitle}</p><a href={item.author.url} className="mt-4 inline-flex text-xs font-bold text-[#b28453]">Entity Home canônica →</a></div></aside>;
}
