import {
  Activity,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ClipboardCheck,
  Compass,
  FileText,
  Gauge,
  LineChart,
  Search,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Target,
} from "lucide-react";

type AccentCard = {
  title: string;
  description: string;
};

type ProposalPageProps = {
  onNavigate?: (targetId: string) => void;
};

const startingPoints: AccentCard[] = [
  {
    title: "Autoridade subutilizada",
    description:
      "Os sinais de confiança existem, mas ainda não estão organizados para sustentar diferenciação e decisão.",
  },
  {
    title: "Demanda fragmentada",
    description:
      "As páginas atuais não cobrem com clareza os diferentes momentos da pesquisa do paciente.",
  },
  {
    title: "Experiência sem direção",
    description:
      "O visitante encontra informação, porém não percorre uma jornada objetiva até o agendamento.",
  },
  {
    title: "Medição incompleta",
    description:
      "A evolução precisa chegar aos números que importam: impressões, cliques, tráfego e contatos.",
  },
];

const outcomeLayers = [
  {
    label: "Visibilidade",
    title: "Aparecer nas pesquisas certas",
    text: "Cobertura progressiva para sintomas, doenças, exames, tratamentos e pesquisas de decisão.",
  },
  {
    label: "Relevância",
    title: "Ser escolhido no resultado",
    text: "Páginas mais específicas, claras e alinhadas ao momento real da pesquisa do paciente.",
  },
  {
    label: "Confiança",
    title: "Demonstrar autoridade real",
    text: "Credenciais, experiência, evidências e consistência de entidade sustentando a decisão.",
  },
  {
    label: "Ação",
    title: "Gerar contato e agendamento",
    text: "Uma jornada com próximos passos objetivos: WhatsApp, telefone, formulário e consulta.",
  },
];

const engines = [
  {
    icon: Search,
    title: "Inteligência de demanda",
    text: "Mapeamento de como os pacientes pesquisam: sintomas, dúvidas, comparações, tratamentos, urgências e busca pelo especialista.",
  },
  {
    icon: Compass,
    title: "Arquitetura de autoridade",
    text: "Organização do site para que cada página tenha função clara e fortaleça a compreensão sobre quem é o Dr. Felipe e por que ele é referência.",
  },
  {
    icon: Target,
    title: "Experiência e conversão",
    text: "Construção de uma navegação que conecta confiança, esclarecimento e ação com CTAs adequados a cada intenção.",
  },
  {
    icon: BarChart3,
    title: "Mensuração e aprendizado",
    text: "Uso de GA4 e Search Console para identificar o que cresce, o que converte e onde a próxima oportunidade deve ser explorada.",
  },
];

const signalSteps = [
  ["S", "Search Intelligence", "Onde existe demanda real, como ela muda e quais pesquisas possuem maior potencial clínico e comercial."],
  ["I", "Intent Architecture", "Qual página deve responder a cada intenção e como o paciente avança da dúvida para a decisão."],
  ["G", "Generative Presence", "Como tornar a autoridade compreensível e citável em buscas generativas e respostas com IA."],
  ["N", "Notability & Entity", "Como consolidar a entidade Dr. Felipe Barão entre site, perfis, credenciais, publicações e referências externas."],
  ["A", "Action Roadmap", "Qual movimento possui maior impacto neste momento, considerando dados, concorrência e oportunidade."],
  ["L", "Learning Loop", "O que os dados ensinam e como transformar aprendizado em novas decisões e crescimento acumulado."],
];

const growthCycles = [
  {
    cycle: "Primeiro ciclo",
    name: "Cobertura",
    title: "Mais consultas e impressões",
    text: "O Google passa a compreender melhor a estrutura, as entidades e os temas prioritários. O site amplia a quantidade de pesquisas em que pode aparecer.",
  },
  {
    cycle: "Ciclo de expansão",
    name: "Aquisição",
    title: "Mais cliques e tráfego",
    text: "As páginas ganham relevância, conquistam posições mais competitivas e atraem usuários com maior proximidade dos tratamentos oferecidos.",
  },
  {
    cycle: "Ciclo de maturidade",
    name: "Conversão",
    title: "Mais ações de valor",
    text: "Com tráfego mais qualificado e jornada melhor estruturada, crescem as oportunidades de WhatsApp, telefone, formulário e agendamento.",
  },
];

const ecosystem = [
  "Google orgânico: sintomas, doenças, exames, tratamentos, especialidades e pesquisas de decisão.",
  "Busca local: proximidade, reputação, unidade, especialidade e intenção de consulta em São Paulo.",
  "Busca generativa: AI Overviews, ChatGPT, Gemini e Perplexity interpretando conteúdos e sinais de entidade.",
  "Busca de marca: crescimento das pesquisas por Dr. Felipe Barão, tratamentos e associação com autoridade vascular.",
  "Autoridade externa: publicações, perfis médicos, referências institucionais, avaliações e menções qualificadas.",
];

const journey = [
  {
    stage: "Descoberta",
    search: "Pesquisas sobre dor, inchaço, veias aparentes, circulação e sinais de alerta.",
    goal: "Ampliar alcance qualificado.",
  },
  {
    stage: "Consideração",
    search: "Comparações entre laser, espuma, cirurgia, exames, recuperação e indicação.",
    goal: "Reduzir insegurança e construir preferência.",
  },
  {
    stage: "Decisão",
    search: "Busca por cirurgião vascular, angiologista, segunda opinião e tratamento em São Paulo.",
    goal: "Transformar intenção em contato.",
  },
];

const metrics = [
  {
    source: "Google Search Console",
    items: ["Impressões, consultas, páginas, CTR e posição média.", "Novos termos e temas em crescimento.", "Evolução das buscas pelo nome do médico."],
  },
  {
    source: "Google Analytics 4",
    items: ["Usuários orgânicos, sessões e páginas de entrada.", "Navegação, páginas comerciais e interação com conteúdos.", "WhatsApp, telefone, formulário e demais eventos de contato."],
  },
];

const operationModel = [
  {
    title: "Sem reuniões obrigatórias",
    text: "Não haverá agenda mensal criada apenas para apresentação de tarefas. A comunicação será acionada quando houver decisão relevante.",
  },
  {
    title: "Sem checklist como prova de valor",
    text: "O trabalho será comprovado pela evolução das métricas e pela qualidade dos ativos construídos, não pelo volume de itens marcados como concluídos.",
  },
  {
    title: "Validação médica objetiva",
    text: "A participação do Dr. Felipe será solicitada somente quando um conteúdo exigir posicionamento clínico, revisão técnica ou informação específica.",
  },
  {
    title: "Decisão orientada por dados",
    text: "A prioridade poderá mudar sempre que Search Console, comportamento do usuário ou cenário competitivo revelarem oportunidade superior.",
  },
];

const comparisonRows = [
  ["Palavras-chave isoladas", "Inteligência de demanda e intenção"],
  ["Quantidade fixa de artigos", "Conteúdo definido por oportunidade e impacto"],
  ["Relatório de tarefas", "Leitura de impressões, cliques, tráfego e ações"],
  ["SEO restrito ao site", "Entidade integrada entre site, busca local, autoridade e IA"],
  ["Reuniões para justificar operação", "Autonomia de gestão com comunicação por necessidade"],
  ["Otimização pontual", "Sistema contínuo de aprendizado e crescimento"],
];

const commitments = [
  {
    title: "Estratégia",
    text: "Direção orientada por demanda, intenção, potencial comercial e dados reais de desempenho.",
  },
  {
    title: "Execução",
    text: "Condução das melhorias necessárias no ecossistema orgânico, incluindo frentes técnicas, editoriais, de experiência, entidade e conversão.",
  },
  {
    title: "Evolução",
    text: "Revisão contínua de prioridades conforme o domínio ganha tração, surgem novas consultas e as plataformas de busca evoluem.",
  },
  {
    title: "Transparência",
    text: "Acompanhamento pelos dados oficiais do Google e rastreamento das ações de contato configuradas no site.",
  },
];

const commercialRows = [
  ["Implantação estratégica inicial", "A definir"],
  ["Gestão estratégica mensal", "A definir"],
  ["Prazo inicial recomendado", "A alinhar"],
  ["Início previsto", "A alinhar"],
  ["Vencimento mensal", "A alinhar"],
  ["Validade desta proposta", "A alinhar"],
];

function SectionHeader({
  eyebrow,
  title,
  text,
  dark = true,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  dark?: boolean;
}) {
  return (
    <div className="mb-12 max-w-4xl">
      <span className="mb-4 block font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-[#b28453]">
        {eyebrow}
      </span>
      <h2 className={`font-display text-[34px] font-bold leading-[1.08] tracking-[-0.035em] md:text-[48px] ${dark ? "text-[#f8f8f8]" : "text-[#11100f]"}`}>
        {title}
      </h2>
      {text && (
        <p className={`mt-6 max-w-3xl text-base leading-[1.75] md:text-lg ${dark ? "text-[#f8f8f8]/72" : "text-[#11100f]/72"}`}>
          {text}
        </p>
      )}
    </div>
  );
}

function ProposalConstellation() {
  const points = [
    ["Demanda", "left-[10%] top-[24%]"],
    ["Autoridade", "right-[12%] top-[18%]"],
    ["Experiência", "left-[8%] bottom-[24%]"],
    ["Mensuração", "right-[8%] bottom-[22%]"],
    ["IA", "left-[42%] top-[4%]"],
    ["Contato", "left-[44%] bottom-[6%]"],
  ];

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[480px]">
      <div className="absolute inset-[9%] rounded-full border border-[#b28453]/15" />
      <div className="absolute inset-[19%] rounded-full border border-[#b28453]/10" />
      <div className="absolute left-1/2 top-1/2 h-[128px] w-[128px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#b28453]/45 bg-[#171614] shadow-[0_0_80px_rgba(178,132,83,0.22)]">
        <div className="flex h-full flex-col items-center justify-center text-center">
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#b28453]">AUDITSEO</span>
          <span className="mt-2 text-xs font-semibold text-[#e0d3c3]">Search Growth</span>
        </div>
      </div>
      <div className="absolute left-[50%] top-[50%] h-[1px] w-[38%] origin-left rotate-[28deg] bg-[#b28453]/20" />
      <div className="absolute left-[50%] top-[50%] h-[1px] w-[38%] origin-left rotate-[146deg] bg-[#b28453]/20" />
      <div className="absolute left-[50%] top-[50%] h-[1px] w-[40%] origin-left rotate-[-38deg] bg-[#b28453]/20" />
      <div className="absolute left-[50%] top-[50%] h-[1px] w-[40%] origin-left rotate-[-154deg] bg-[#b28453]/20" />
      {points.map(([label, position]) => (
        <div key={label} className={`absolute ${position}`}>
          <div className="rounded-full border border-[#b28453]/35 bg-[#11100f]/90 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#e0d3c3] shadow-[0_0_35px_rgba(178,132,83,0.18)]">
            {label}
          </div>
        </div>
      ))}
      <div className="absolute left-[16%] top-[14%] h-1.5 w-1.5 rounded-full bg-[#e0d3c3]" />
      <div className="absolute bottom-[17%] right-[21%] h-2 w-2 rounded-full bg-[#b28453]" />
      <div className="absolute right-[29%] top-[34%] h-1 w-1 rounded-full bg-[#f8f8f8]/70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(178,132,83,0.11),transparent_56%)]" />
    </div>
  );
}

export default function PropostaDrFelipeBaraoPage({ onNavigate }: ProposalPageProps) {
  const contactMessage = encodeURIComponent(
    "Olá, Sidney. Li a proposta de crescimento orgânico para o Dr. Felipe Barão e quero avançar na avaliação."
  );

  return (
    <main className="min-h-screen bg-[#11100f] text-[#f8f8f8]">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#b28453]/10 bg-[#11100f]/95 backdrop-blur-md">
        <div className="mx-auto flex h-[82px] max-w-[1320px] items-center justify-between px-6 md:px-12">
          <a href="/" className="inline-flex items-center">
            <img
              src="/auditseo-logo.png"
              alt="AUDITSEO - Search Intelligence Partner"
              className="h-[38px] w-auto object-contain md:h-[46px]"
            />
          </a>
          <div className="hidden items-center gap-3 md:flex">
            <a href="#condicoes" className="rounded-full border border-[#b28453]/35 px-5 py-2.5 text-sm font-semibold text-[#f8f8f8] transition-colors hover:bg-[#b28453]/10">
              Condições
            </a>
            <a
              href={`https://wa.me/5511996384376?text=${contactMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#b28453] px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#e0d3c3] hover:text-[#11100f]"
            >
              Falar com a AUDITSEO
            </a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#11100f] pb-20 pt-[130px] md:pb-28 md:pt-[160px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_24%,rgba(178,132,83,0.16),transparent_32%),radial-gradient(circle_at_8%_16%,rgba(224,211,195,0.08),transparent_26%)]" />
        <div className="relative z-10 mx-auto grid max-w-[1320px] grid-cols-1 items-center gap-12 px-6 md:px-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="mb-5 inline-flex rounded-full border border-[#b28453]/25 bg-[#171614]/80 px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#b28453]">
              Proposta confidencial · Junho 2026
            </span>
            <h1 className="font-display text-[44px] font-bold leading-[1.02] tracking-[-0.045em] text-[#f8f8f8] md:text-[72px]">
              Proposta de crescimento orgânico e autoridade digital
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-[1.65] text-[#e0d3c3] md:text-xl">
              Uma nova operação de busca para transformar autoridade médica em visibilidade, tráfego qualificado e oportunidades de consulta.
            </p>
            <div className="mt-8 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#b28453]/20 bg-[#171614]/80 p-5">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#b28453]">Preparada para</span>
                <p className="mt-2 font-display text-2xl font-bold text-[#f8f8f8]">Dr. Felipe Barão</p>
              </div>
              <div className="rounded-2xl border border-[#b28453]/20 bg-[#171614]/80 p-5">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#b28453]">Especialidade</span>
                <p className="mt-2 font-display text-2xl font-bold text-[#f8f8f8]">Cirurgia vascular · São Paulo</p>
              </div>
            </div>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#condicoes"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#b28453] px-7 py-4 text-base font-bold text-white transition-colors hover:bg-[#e0d3c3] hover:text-[#11100f]"
              >
                Ver condições da proposta
                <ArrowRight size={17} />
              </a>
              <a
                href="#estrategia"
                className="inline-flex items-center justify-center rounded-full border border-[#b28453]/45 px-7 py-4 text-base font-semibold text-[#f8f8f8] transition-colors hover:bg-[#b28453]/10"
              >
                Entender a estratégia
              </a>
            </div>
            <p className="mt-7 font-mono text-[11px] uppercase tracking-[0.14em] text-[#f8f8f8]/50">
              Search Intelligence · SEO · GEO · IA · Autoridade médica
            </p>
          </div>
          <div className="lg:col-span-5">
            <ProposalConstellation />
          </div>
        </div>
      </section>

      <section id="estrategia" className="bg-[#11100f] py-20 md:py-28">
        <div className="mx-auto max-w-[1320px] px-6 md:px-12">
          <SectionHeader
            eyebrow="01 · Ponto de partida"
            title="A autoridade já existe. O desafio é transformar essa autoridade em aquisição."
            text="Este projeto não parte do zero. Formação, experiência clínica, produção científica, reputação e estrutura já formam uma base de autoridade que poucos profissionais possuem. O desafio está em organizar esses sinais em uma presença digital proporcional ao valor profissional."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {startingPoints.map((item, index) => (
              <article key={item.title} className="rounded-[24px] border border-[#b28453]/18 bg-[#171614] p-6 shadow-[0_22px_70px_rgba(0,0,0,0.22)]">
                <span className="font-mono text-xs font-bold text-[#b28453]">0{index + 1}</span>
                <h3 className="mt-5 font-display text-xl font-bold text-[#f8f8f8]">{item.title}</h3>
                <p className="mt-4 text-sm leading-[1.7] text-[#f8f8f8]/68">{item.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 rounded-[28px] border border-[#b28453]/25 bg-[#0f0f0e] p-7 md:p-9">
            <p className="font-display text-2xl font-semibold leading-snug text-[#e0d3c3]">
              O problema atual não é a falta de conteúdo. É a falta de um sistema capaz de organizar autoridade, capturar demanda e conduzir o paciente até o contato.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#e0d3c3] py-20 text-[#11100f] md:py-28">
        <div className="mx-auto max-w-[1320px] px-6 md:px-12">
          <SectionHeader
            dark={false}
            eyebrow="02 · Objetivo da parceria"
            title="Construir um canal orgânico de aquisição de pacientes."
            text="A operação será conduzida para ampliar progressivamente a presença do Dr. Felipe nas pesquisas relacionadas às especialidades, sintomas, exames e tratamentos, transformando visibilidade em tráfego qualificado e oportunidades mensuráveis de contato."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {outcomeLayers.map((item) => (
              <div key={item.label} className="rounded-[24px] border border-[#b28453]/20 bg-[#f4eee5] p-6 shadow-[0_18px_48px_rgba(17,16,15,0.08)]">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#b28453]">{item.label}</span>
                <h3 className="mt-4 font-display text-xl font-bold text-[#11100f]">{item.title}</h3>
                <p className="mt-3 text-sm leading-[1.65] text-[#11100f]/70">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {["Impressões e cobertura de pesquisas", "Cliques e tráfego orgânico", "WhatsApp e oportunidades"].map((item, index) => (
              <div key={item} className="rounded-2xl bg-[#11100f] p-6 text-[#f8f8f8]">
                <span className="font-mono text-xs font-bold text-[#b28453]">{index + 1}º indicador</span>
                <p className="mt-3 font-display text-xl font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#11100f] py-20 md:py-28">
        <div className="mx-auto max-w-[1320px] px-6 md:px-12">
          <SectionHeader
            eyebrow="03 · Como a AUDITSEO gera resultado"
            title="Quatro motores trabalhando como um único sistema."
            text="O crescimento orgânico acontece quando demanda, autoridade, experiência e mensuração deixam de operar separadamente."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {engines.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="group rounded-[28px] border border-[#b28453]/18 bg-[#171614] p-7 transition-transform duration-300 hover:-translate-y-1">
                  <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-full border border-[#b28453]/40 bg-[#b28453]/10 text-[#b28453]">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[#f8f8f8]">{item.title}</h3>
                  <p className="mt-4 text-sm leading-[1.75] text-[#f8f8f8]/70">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#11100f] py-20 md:py-28">
        <div className="mx-auto max-w-[1320px] px-6 md:px-12">
          <div className="rounded-[32px] border border-[#b28453]/25 bg-[#171614] p-7 md:p-12">
            <SectionHeader
              eyebrow="04 · Metodologia proprietária"
              title="S.I.G.N.A.L. - Search Intelligence para crescimento contínuo."
              text="A metodologia organiza o projeto em seis dimensões conectadas. Na prática, a estratégia não fica presa ao plano inicial: ela aprende com consultas, páginas que ganham tração e ações que conduzem o usuário ao contato."
            />
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {signalSteps.map(([letter, title, text]) => (
                <div key={letter} className="rounded-[22px] border border-[#b28453]/16 bg-[#11100f] p-6">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-[#b28453]/45 font-display text-xl font-bold text-[#b28453]">
                    {letter}
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#f8f8f8]">{title}</h3>
                  <p className="mt-3 text-sm leading-[1.65] text-[#f8f8f8]/66">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#e0d3c3] py-20 text-[#11100f] md:py-28">
        <div className="mx-auto max-w-[1320px] px-6 md:px-12">
          <SectionHeader
            dark={false}
            eyebrow="05 · Evolução esperada"
            title="O crescimento será percebido em camadas."
            text="Não apresentamos promessa artificial de posição. Apresentamos uma trajetória de maturação com sinais objetivos acompanhados no Google Search Console e Google Analytics."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {growthCycles.map((item) => (
              <article key={item.name} className="rounded-[28px] border border-[#b28453]/20 bg-[#f4eee5] p-7">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#b28453]">{item.cycle}</span>
                <h3 className="mt-5 font-display text-3xl font-bold text-[#11100f]">{item.name}</h3>
                <p className="mt-2 font-semibold text-[#b28453]">{item.title}</p>
                <p className="mt-5 text-sm leading-[1.75] text-[#11100f]/70">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#11100f] py-20 md:py-28">
        <div className="mx-auto max-w-[1320px] px-6 md:px-12">
          <SectionHeader
            eyebrow="06 · Ecossistema de busca"
            title="Presença além da lista tradicional de resultados."
            text="O paciente pode descobrir um especialista em diferentes superfícies. A estratégia precisa construir uma entidade consistente em todas elas, sem fragmentar autoridade."
          />
          <div className="grid gap-4 lg:grid-cols-5">
            {ecosystem.map((item, index) => (
              <div key={item} className="rounded-[24px] border border-[#b28453]/18 bg-[#171614] p-5">
                <span className="font-mono text-xs font-bold text-[#b28453]">0{index + 1}</span>
                <p className="mt-5 text-sm leading-[1.65] text-[#f8f8f8]/72">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-9 rounded-[28px] border border-[#b28453]/25 bg-[#0f0f0e] p-7">
            <p className="text-base leading-[1.75] text-[#e0d3c3]">
              A presença em IA não será tratada como pacote de perguntas frequentes. Ela será consequência de uma base forte: conteúdo autoral, autoria médica, referências, consistência de entidade, cobertura temática e reconhecimento externo.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#11100f] py-20 md:py-28">
        <div className="mx-auto max-w-[1320px] px-6 md:px-12">
          <SectionHeader
            eyebrow="07 · Do tráfego à oportunidade"
            title="Cada acesso precisa ter um próximo passo lógico."
            text="O novo sistema não buscará apenas mais visitantes. Ele será desenhado para atrair pessoas em diferentes níveis de consciência e conduzi-las até uma ação compatível com o momento da pesquisa."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {journey.map((item) => (
              <article key={item.stage} className="rounded-[28px] border border-[#b28453]/18 bg-[#171614] p-7">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#b28453]">{item.stage}</span>
                <p className="mt-5 text-sm leading-[1.75] text-[#f8f8f8]/72">{item.search}</p>
                <div className="mt-6 rounded-2xl bg-[#b28453]/10 p-4 text-sm font-semibold text-[#e0d3c3]">{item.goal}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e0d3c3] py-20 text-[#11100f] md:py-28">
        <div className="mx-auto max-w-[1320px] px-6 md:px-12">
          <SectionHeader
            dark={false}
            eyebrow="08 · Mensuração"
            title="O cliente acompanhará o que realmente importa."
            text="A evolução ficará registrada nas plataformas oficiais de mensuração. A leitura executiva observará a conexão entre impressões, CTR, usuários, páginas e ações de contato."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {metrics.map((metric) => (
              <article key={metric.source} className="rounded-[28px] border border-[#b28453]/20 bg-[#11100f] p-8 text-[#f8f8f8]">
                <h3 className="font-display text-2xl font-bold">{metric.source}</h3>
                <ul className="mt-6 space-y-4">
                  {metric.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-[1.6] text-[#f8f8f8]/72">
                      <CheckCircle2 className="mt-0.5 shrink-0 text-[#b28453]" size={17} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#11100f] py-20 md:py-28">
        <div className="mx-auto max-w-[1320px] px-6 md:px-12">
          <SectionHeader
            eyebrow="09 · Modelo de operação"
            title="Alta autonomia. Baixa sobrecarga para o cliente."
            text="A AUDITSEO assumirá a gestão estratégica da presença orgânica, com autonomia para analisar, priorizar e conduzir a evolução do projeto."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {operationModel.map((item) => (
              <article key={item.title} className="rounded-[24px] border border-[#b28453]/18 bg-[#171614] p-6">
                <h3 className="font-display text-xl font-bold text-[#f8f8f8]">{item.title}</h3>
                <p className="mt-4 text-sm leading-[1.7] text-[#f8f8f8]/68">{item.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            <div className="rounded-[24px] border border-[#b28453]/20 bg-[#0f0f0e] p-7">
              <h3 className="font-display text-2xl font-bold text-[#e0d3c3]">A AUDITSEO assume</h3>
              <p className="mt-4 text-sm leading-[1.7] text-[#f8f8f8]/70">
                Estratégia, análise, priorização, direcionamento técnico e editorial, otimização do ecossistema, mensuração e evolução contínua.
              </p>
            </div>
            <div className="rounded-[24px] border border-[#b28453]/20 bg-[#0f0f0e] p-7">
              <h3 className="font-display text-2xl font-bold text-[#e0d3c3]">O cliente disponibiliza</h3>
              <p className="mt-4 text-sm leading-[1.7] text-[#f8f8f8]/70">
                Acessos necessários, informações comerciais corretas e validação médica quando solicitada.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#e0d3c3] py-20 text-[#11100f] md:py-28">
        <div className="mx-auto max-w-[1320px] px-6 md:px-12">
          <SectionHeader
            dark={false}
            eyebrow="10 · Diferencial"
            title="Não é a continuidade do SEO que o cliente decidiu encerrar."
            text="A operação foi desenhada para superar o modelo baseado em pacotes fixos, produção genérica e prestação de contas por atividade."
          />
          <div className="overflow-hidden rounded-[28px] border border-[#b28453]/20 bg-[#11100f] text-[#f8f8f8]">
            <div className="grid grid-cols-2 border-b border-[#b28453]/20 bg-[#171614] p-5 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#b28453]">
              <span>Modelo tradicional</span>
              <span>Modelo AUDITSEO</span>
            </div>
            {comparisonRows.map(([before, after]) => (
              <div key={before} className="grid grid-cols-1 gap-3 border-b border-[#b28453]/10 p-5 text-sm md:grid-cols-2">
                <span className="text-[#f8f8f8]/58">{before}</span>
                <span className="font-semibold text-[#e0d3c3]">{after}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#11100f] py-20 md:py-28">
        <div className="mx-auto max-w-[1320px] px-6 md:px-12">
          <SectionHeader
            eyebrow="11 · Compromisso da parceria"
            title="Gestão integral do crescimento orgânico."
            text="O valor da parceria está na capacidade de diagnosticar, decidir, executar, medir e adaptar continuamente o projeto - sem reduzir a operação a uma quantidade pré-definida de tarefas."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {commitments.map((item) => (
              <article key={item.title} className="rounded-[24px] border border-[#b28453]/18 bg-[#171614] p-6">
                <h3 className="font-display text-xl font-bold text-[#f8f8f8]">{item.title}</h3>
                <p className="mt-4 text-sm leading-[1.7] text-[#f8f8f8]/68">{item.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-9 rounded-[28px] border border-[#b28453]/25 bg-[#0f0f0e] p-7">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-[#b28453]/35 text-[#b28453]">
              <ShieldCheck size={21} />
            </div>
            <h3 className="font-display text-2xl font-bold text-[#e0d3c3]">Compromisso responsável</h3>
            <p className="mt-4 text-sm leading-[1.75] text-[#f8f8f8]/70">
              A AUDITSEO não promete posições garantidas ou resultados artificiais. O compromisso é aplicar estratégia, conhecimento, execução e aprendizagem contínua para construir a melhor evolução possível dentro da concorrência, do histórico do domínio e do comportamento dos mecanismos de busca.
            </p>
          </div>
        </div>
      </section>

      <section id="condicoes" className="bg-[#e0d3c3] py-20 text-[#11100f] md:py-28">
        <div className="mx-auto max-w-[1320px] px-6 md:px-12">
          <SectionHeader
            dark={false}
            eyebrow="12 · Condições comerciais"
            title="Investimento para a operação de crescimento."
            text="Os campos comerciais ficam reservados para definição final antes da aprovação. A condição de início considera formalização, liberação dos acessos necessários e configuração de mensuração."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {commercialRows.map(([label, value]) => (
              <div key={label} className="rounded-[24px] border border-[#b28453]/20 bg-[#f4eee5] p-6">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#b28453]">{label}</span>
                <p className="mt-4 font-display text-2xl font-bold text-[#11100f]">{value}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {[
              ["Condição de início", "Aprovação da proposta, formalização e liberação dos acessos necessários."],
              ["Mensuração", "Google Search Console, Google Analytics 4 e eventos de contato configurados no ecossistema."],
              ["Comunicação", "Assíncrona e objetiva, com acionamento quando houver validação, decisão ou informação necessária."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-[24px] bg-[#11100f] p-6 text-[#f8f8f8]">
                <h3 className="font-display text-xl font-bold text-[#e0d3c3]">{title}</h3>
                <p className="mt-4 text-sm leading-[1.7] text-[#f8f8f8]/70">{text}</p>
              </div>
            ))}
          </div>
          <p className="mt-7 text-xs leading-[1.7] text-[#11100f]/58">
            Observação: valores de investimento não incluem mídia paga, ferramentas contratadas diretamente pelo cliente ou fornecedores externos não previstos no acordo.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#11100f] py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(178,132,83,0.15),transparent_34%)]" />
        <div className="relative z-10 mx-auto max-w-[1080px] px-6 text-center md:px-12">
          <span className="mb-5 inline-flex rounded-full border border-[#b28453]/25 px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#b28453]">
            Encerramento
          </span>
          <h2 className="font-display text-[38px] font-bold leading-[1.08] tracking-[-0.04em] text-[#f8f8f8] md:text-[62px]">
            A autoridade já existe. Agora ela precisa gerar demanda.
          </h2>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-[1.75] text-[#e0d3c3]">
            O projeto possui uma vantagem decisiva: a autoridade profissional, a experiência e os ativos de confiança já existem. A oportunidade está em organizar tudo isso para que Google, sistemas de inteligência artificial e pacientes reconheçam essa autoridade com clareza.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={`https://wa.me/5511996384376?text=${contactMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#b28453] px-7 py-4 text-base font-bold text-white transition-colors hover:bg-[#e0d3c3] hover:text-[#11100f]"
            >
              Conversar sobre aprovação
              <ArrowRight size={17} />
            </a>
            <a
              href="mailto:contato@auditseo.com.br?subject=Proposta%20AUDITSEO%20-%20Dr.%20Felipe%20Bar%C3%A3o"
              className="inline-flex items-center justify-center rounded-full border border-[#b28453]/45 px-7 py-4 text-base font-semibold text-[#f8f8f8] transition-colors hover:bg-[#b28453]/10"
            >
              Enviar retorno por e-mail
            </a>
          </div>
          <div className="mx-auto mt-12 max-w-2xl rounded-[28px] border border-[#b28453]/20 bg-[#171614]/70 p-7 text-left">
            <p className="font-display text-xl font-bold text-[#f8f8f8]">Sidney Santos</p>
            <p className="mt-2 text-sm text-[#f8f8f8]/65">Fundador e estrategista de Search Intelligence · AUDITSEO</p>
            <div className="mt-5 grid gap-2 text-sm text-[#e0d3c3] sm:grid-cols-3">
              <span>+55 (11) 99638-4376</span>
              <span>contato@auditseo.com.br</span>
              <span>auditseo.com.br</span>
            </div>
          </div>
          <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.16em] text-[#f8f8f8]/42">
            Esta proposta é confidencial e destinada exclusivamente ao Dr. Felipe Barão.
          </p>
        </div>
      </section>
    </main>
  );
}
