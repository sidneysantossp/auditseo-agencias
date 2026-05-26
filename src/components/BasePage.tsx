import SiteFooter from "./SiteFooter";

export interface BasePageCard {
  title: string;
  text?: string;
  href?: string;
}

export interface BasePageAction {
  label: string;
  href?: string;
  targetId?: string;
}

export interface BasePageConfig {
  eyebrow: string;
  title: string;
  text: string;
  notice?: string;
  sections?: string[];
  cards?: BasePageCard[];
  actions?: BasePageAction[];
}

interface BasePageProps {
  page: BasePageConfig;
  onNavigate: (targetId: string) => void;
}

export default function BasePage({ page, onNavigate }: BasePageProps) {
  return (
    <main className="bg-[#11100f] text-[#f8f8f8]">
      <section className="relative overflow-hidden px-6 pb-20 pt-[130px] md:pb-28 md:pt-[160px] xl:px-12">
        <div className="pointer-events-none absolute right-[8%] top-[18%] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(178,132,83,0.20),transparent_68%)] blur-2xl" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(224,211,195,0.05),transparent_32%)]" />

        <div className="relative mx-auto max-w-[1120px]">
          <span className="font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-[#b28453]">{page.eyebrow}</span>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-bold leading-[1.04] tracking-[-0.035em] text-[#f8f8f8] md:text-7xl">
            {page.title}
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-[1.7] text-[#f8f8f8]/72 md:text-xl">{page.text}</p>

          {page.notice ? (
            <div className="mt-8 max-w-2xl rounded-[18px] border border-[#b28453]/26 bg-[#b28453]/10 px-5 py-4 text-sm font-semibold text-[#e0d3c3]">
              {page.notice}
            </div>
          ) : null}

          {page.actions?.length ? (
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              {page.actions.map((action, index) =>
                action.href ? (
                  <a
                    key={action.label}
                    href={action.href}
                    className={
                      index === 0
                        ? "inline-flex items-center justify-center rounded-full bg-[#b28453] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#c99760]"
                        : "inline-flex items-center justify-center rounded-full border border-[#b28453]/38 px-6 py-3 text-sm font-bold text-[#f8f8f8] transition-colors hover:border-[#b28453] hover:text-[#b28453]"
                    }
                  >
                    {action.label}
                  </a>
                ) : (
                  <button
                    key={action.label}
                    onClick={() => onNavigate(action.targetId || "inicio")}
                    className={
                      index === 0
                        ? "inline-flex items-center justify-center rounded-full bg-[#b28453] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#c99760]"
                        : "inline-flex items-center justify-center rounded-full border border-[#b28453]/38 px-6 py-3 text-sm font-bold text-[#f8f8f8] transition-colors hover:border-[#b28453] hover:text-[#b28453]"
                    }
                  >
                    {action.label}
                  </button>
                )
              )}
            </div>
          ) : null}
        </div>
      </section>

      {(page.sections?.length || page.cards?.length) ? (
        <section className="border-y border-[#b28453]/10 bg-[#171614] px-6 py-20 xl:px-12">
          <div className="mx-auto max-w-[1120px]">
            {page.sections?.length ? (
              <div className="grid gap-4 md:grid-cols-2">
                {page.sections.map((section) => (
                  <div key={section} className="rounded-[18px] border border-[#b28453]/18 bg-[#11100f]/78 p-6">
                    <h2 className="font-display text-xl font-bold text-[#f8f8f8]">{section}</h2>
                    <p className="mt-3 text-sm leading-[1.65] text-[#f8f8f8]/62">Conteúdo em estruturação.</p>
                  </div>
                ))}
              </div>
            ) : null}

            {page.cards?.length ? (
              <div className="grid gap-5 md:grid-cols-3">
                {page.cards.map((card) => {
                  const content = (
                    <>
                      <h2 className="font-display text-xl font-bold text-[#f8f8f8]">{card.title}</h2>
                      {card.text ? <p className="mt-3 text-sm leading-[1.65] text-[#f8f8f8]/62">{card.text}</p> : null}
                    </>
                  );

                  return card.href ? (
                    <a
                      key={card.title}
                      href={card.href}
                      className="rounded-[20px] border border-[#b28453]/20 bg-[#11100f]/82 p-6 transition-all hover:-translate-y-1 hover:border-[#b28453]/48 hover:bg-[#1d1b18]"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={card.title} className="rounded-[20px] border border-[#b28453]/20 bg-[#11100f]/82 p-6">
                      {content}
                    </div>
                  );
                })}
              </div>
            ) : null}
          </div>
        </section>
      ) : null}

      <SiteFooter onNavigate={onNavigate} />
    </main>
  );
}
