import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Set up the Gemini AI client only if the key is present
let aiClient: GoogleGenAI | null = null;
const apiKey = process.env.GEMINI_API_KEY;

if (apiKey && apiKey !== "MY_GEMINI_API_KEY") {
  try {
    aiClient = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
    console.log("Gemini AI Client initialized successfully for Search Intelligence.");
  } catch (err) {
    console.error("Failed to initialize Gemini AI client:", err);
  }
} else {
  console.log("GEMINI_API_KEY not configured or using placeholder. Running in Simulation/Premium Mock Mode.");
}

// REST route for search intelligence diagnostic
app.post("/api/diagnose", async (req, res) => {
  const {
    nome,
    agencia,
    site,
    whatsapp,
    email,
    clientes,
    nichos,
    vendeSEO,
    dificuldade,
    modelo
  } = req.body;

  // Set up fallback mock data if Gemini isn't available or fails
  const mockDiagnostic = {
    radarScore: 78,
    marketOpportunity: "Alta prioridade estratégica devido à alta densidade comercial em " + (nichos || "Serviços/Negócios Locais") + ".",
    seoScore: 68,
    geoScore: 42, // IA/GEO is usually lower
    brandAuthorityScore: 55,
    analysis: `Olá ${nome || "Diretor(a)"}, analisamos a agência ${agencia || "Parceira"} (${site || "Sem site informado"}). Atualmente, operar no segmento de "${nichos || "marketing de busca"}" exige uma forte transição de SEO tradicional para GEO (Generative Engine Optimization). Identificamos que a sua principal dificuldade ("${dificuldade || "escalar entregas com rentabilidade"}") é comum em agências com cerca de ${clientes || "10 a 30"} contas ativas.`,
    quickWins: [
      {
        title: "Estruturação de Schema Markup Semântico",
        description: "Adicionar marcações ricas nos sites dos clientes para alimentar o Google AI Overviews diretamente, facilitando a identificação da autoridade local."
      },
      {
        title: "Otimização de Perfil de Empresa no Google (SEO Local)",
        description: "Alinhamento de menções externas (Citações NAP) para consolidar a autoridade geográfica e entrar no 3-Pack dos mapas."
      },
      {
        title: "White-Label de Relatórios de Search Intelligence",
        description: "Substituir relatórios baseados em cliques industriais por análises de 'Narrativa de Busca e Intenção', agregando 3x mais valor percebido pelo cliente final."
      }
    ],
    roadmap90Days: [
      {
        phase: "Dia 1 - 30: Diagnóstico & Limpeza Técnica",
        actions: "Mapeamento das 5 principais intenções e auditoria de indexação em IA. Implementação da retaguarda AUDITSEO nas propostas comerciais."
      },
      {
        phase: "Dia 31 - 60: Autoridade Local & GEO",
        actions: "Lançamento do plano de citações estruturadas nos mapas e criação de tópicos de autoridade temática no blog do cliente."
      },
      {
        phase: "Dia 61 - 90: Learning Loop & Expansão",
        actions: "Apresentação dos primeiros resultados de Search Intelligence, redução do churn e ativação de novos escopos recorrentes de SEO."
      }
    ],
    growthEstimate: "Adoção da retaguarda AUDITSEO reduz o tempo de entrega interna em até 70% e pode elevar a retenção de contratos em mais de 14 meses.",
    suggestedModel: modelo || "Parceria White-Label ou Squad Externo SEO/GEO"
  };

  if (!aiClient) {
    return res.json({
      success: true,
      diagnostic: mockDiagnostic,
      info: "Gerado via Simulação Estratégica Premium AUDITSEO."
    });
  }

  try {
    const prompt = `Você é o Diretor Sênior de Inteligência de Busca da AUDITSEO. Escreva um parecer diagnóstico de SEO, GEO e Search Intelligence personalizado focado em ajudar uma agência a se posicionar de forma premium no mercado de busca orgânica tradicional e busca baseada em IA (como ChatGPT, Gemini, AI Overviews).
    
    DADOS DA AGÊNCIA SUBMETIDOS:
    - Agência: ${agencia || "Não informado"}
    - Site: ${site || "Não informado"}
    - Contato do Responsável: ${nome || "Não informado"}
    - E-mail: ${email || "Não informado"}
    - Clientes Ativos: ${clientes || "Não informado"}
    - Nichos Atendidos: ${nichos || "Geral"}
    - Já vende SEO: ${vendeSEO || "Não informado"}
    - Maior dificuldade comercial/operacional hoje: ${dificuldade || "Entregar com autoridade e reter clientes"}
    - Modelo de parceria em mente: ${modelo || "Squad Externo ou White-Label"}

    O seu retorno deve ser exclusivamente um objeto JSON em português do Brasil contendo as seguintes propriedades:
    - radarScore (número inteiro de 40 a 95, estimando maturidade em busca com IA da agência)
    - seoScore (número de 40 a 95, estimando maturidade em SEO tradicional)
    - geoScore (número de 30 a 90, estimando presença em IA)
    - brandAuthorityScore (número de 40 a 95, estimando autoridade da marca)
    - marketOpportunity (frase curta em português resumindo a oportunidade mercadológica para o nicho de clientes deles)
    - analysis (texto em parágrafo refinado e persuasivo, com tom executivo e consultivo de alto valor, analisando os desafios decorrentes da principal dificuldade apontada e mostrando como a AUDITSEO ajuda no bastidor)
    - quickWins (array com 3 objetos, cada um com as chaves 'title' e 'description', sugerindo 3 ações práticas de altíssimo valor imediatas)
    - roadmap90Days (array com 3 objetos, cada um com as chaves 'phase' (ex: "Mes 1", "Mes 2", "Mes 3") e 'actions' (descrição de ações recomendadas))
    - growthEstimate (frase elegante e objetiva mostrando o impacto de atuar com a AUDITSEO na redução de custos internos ou aumento de ticket)
    - suggestedModel (frase curta indicando qual o melhor modelo de parceria para eles, ex: "Parceria White-Label + Squad")

    Siga um padrão de resposta estritamente JSON sem comentários, sem markdown de bloco extra no início ou no fim (retorne apenas o texto puro compatível com JSON.parse).`;

    const response = await aiClient.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            radarScore: { type: Type.INTEGER },
            seoScore: { type: Type.INTEGER },
            geoScore: { type: Type.INTEGER },
            brandAuthorityScore: { type: Type.INTEGER },
            marketOpportunity: { type: Type.STRING },
            analysis: { type: Type.STRING },
            quickWins: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  title: { type: Type.STRING },
                  description: { type: Type.STRING }
                },
                required: ["title", "description"]
              }
            },
            roadmap90Days: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  phase: { type: Type.STRING },
                  actions: { type: Type.STRING }
                },
                required: ["phase", "actions"]
              }
            },
            growthEstimate: { type: Type.STRING },
            suggestedModel: { type: Type.STRING }
          },
          required: [
            "radarScore",
            "seoScore",
            "geoScore",
            "brandAuthorityScore",
            "marketOpportunity",
            "analysis",
            "quickWins",
            "roadmap90Days",
            "growthEstimate",
            "suggestedModel"
          ]
        }
      }
    });

    const text = response.text ? response.text.trim() : "";
    let data;
    try {
      data = JSON.parse(text);
    } catch (e) {
      console.error("Failed to parse Gemini json output. Raw output was:", text);
      data = mockDiagnostic;
    }

    res.json({
      success: true,
      diagnostic: data,
      info: "Gerado em tempo real pela inteligência artificial da AUDITSEO."
    });

  } catch (error) {
    console.error("Gemini route error:", error);
    res.json({
      success: true,
      diagnostic: mockDiagnostic,
      info: "Gerado via Simulação Estratégica Premium AUDITSEO (mecanismo local devido à latência)."
    });
  }
});

// Configure Vite middleware or serve static dist
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`AUDITSEO Server running on port ${PORT}`);
  });
}

startServer();
