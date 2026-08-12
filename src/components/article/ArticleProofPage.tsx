import { useEffect } from "react";
import ArticleLayout from "./ArticleLayout";
import { articleV3Proof } from "../../editorial/articles/proofArticle";
import { generateArticleSchema } from "../../editorial/schema";
import {
  ArticleDefinitionBox,
  ArticleEvidenceBlock,
  ArticleFramework,
  ArticleDecisionMatrix,
  ArticleProofFooter,
} from "./ArticleAuthor";

interface ArticleProofPageProps {
  onNavigate: (targetId: string) => void;
}

export default function ArticleProofPage({ onNavigate }: ArticleProofPageProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.pageSchema = "article-v3-proof";
    script.textContent = generateArticleSchema(articleV3Proof, window.location.origin);
    document.head.appendChild(script);
    return () => script.remove();
  }, []);

  return (
    <>
      <ArticleLayout
        article={articleV3Proof}
        onNavigate={onNavigate}
        bodyExtras={
          <>
            <ArticleDefinitionBox title="Contrato editorial">Um artigo só pode ser publicado quando identidade, autoria, publisher, asset, relações e status estão definidos em um contrato canônico.</ArticleDefinitionBox>
            <ArticleEvidenceBlock label="OBSERVADO — prova de conceito">Nesta rota interna, o sistema aponta para uma única Person @id e uma única Organization @id. O bloco demonstra como a arquitetura visual pode diferenciar um sinal observado de uma inferência.</ArticleEvidenceBlock>
            <ArticleFramework
              title="Five Authorship Evidence Layers"
              steps={["Declared authorship", "Structured authorship", "Connected authorship", "Knowledge-backed authorship", "Externally corroborated authorship"]}
            />
            <ArticleDecisionMatrix
              rows={[
                { signal: "Byline", question: "O nome do autor aparece de forma consistente?", decision: "Mapear para a Entity Home canônica." },
                { signal: "Person @id", question: "O Article aponta para a mesma pessoa?", decision: "Reutilizar o registro central." },
                { signal: "Publisher", question: "A organização é a emissora real?", decision: "Conectar ao Organization @id." },
              ]}
            />
            <ArticleProofFooter />
          </>
        }
      />
    </>
  );
}
