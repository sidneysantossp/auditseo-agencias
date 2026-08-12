import { AuthorRef, PublisherRef } from "./types";

export type ResearchType =
  | "EXPERIMENT"
  | "STUDY"
  | "BENCHMARK"
  | "ANALYSIS"
  | "OBSERVATION"
  | "DOCUMENTATION_NOTE"
  | "CASE";

export type ResearchStatus = "DRAFT" | "REVIEW" | "PUBLISHED" | "ARCHIVED" | "MIGRATION_PENDING";

export type EvidenceCategory = "DOCUMENTADO" | "OBSERVADO" | "TESTADO" | "INFERIDO" | "RECOMENDADO";

export interface EvidenceItem {
  type: EvidenceCategory;
  statement: string;
  source?: string;
  limitations?: string;
  notes?: string;
}

export interface ResearchQuery {
  id: string;
  query: string;
  system: string;
  date?: string;
  resultSummary?: string;
}

export interface ResearchIntervention {
  id: string;
  title: string;
  type: string;
  moment: string;
  objective: string;
  description: string;
}

export interface ResearchItem {
  id: string;
  slug: string;
  route: string;
  title: string;
  subtitle: string;
  description: string;
  type: ResearchType;
  status: ResearchStatus;
  author: AuthorRef;
  publisher: PublisherRef;
  datePublished: string;
  dateModified: string;
  researchDate?: string;
  featuredImage?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  evidenceProfile: EvidenceItem[];
  question?: string;
  context?: string;
  methodology?: string;
  systemsObserved?: string[];
  queries?: ResearchQuery[];
  observations?: string[];
  findings?: string[];
  limitations: string[];
  interpretation?: string;
  recommendations?: string[];
  interventions?: ResearchIntervention[];
  relatedArticles?: { title: string; href: string; status?: string }[];
  relatedResearch?: { title: string; href: string; status?: string }[];
  topicRelations?: string[];
  references?: string[];
  schema?: Record<string, any>;
}
