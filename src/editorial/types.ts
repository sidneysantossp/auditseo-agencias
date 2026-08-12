export interface FeaturedImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface AuthorRef {
  name: string;
  url: string;
  jobTitle: string;
  bio: string;
  avatar: string;
  personId: string;
}

export interface PublisherRef {
  name: string;
  url: string;
  organizationId: string;
  logo: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TopicGraph {
  id: string;
  type: string;
  cluster: string;
  secondaryClusters: string[];
  primaryEntity: string;
  relatedEntities: string[];
  parent?: string;
  previous?: string;
  next?: string;
  evidenceLinks?: string[];
  commercialRelation?: string;
  status: "DRAFT" | "REVIEW" | "PUBLISHED" | "ARCHIVED";
}

export interface ArticleSection {
  id: string;
  title: string;
  level: 2 | 3;
  content: string; // HTML or structured blocks
}

export interface ArticleData {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  status: "DRAFT" | "REVIEW" | "PUBLISHED" | "ARCHIVED";
  type: "EXPERIMENT" | "STUDY" | "BENCHMARK" | "ANALYSIS" | "OBSERVATION" | "DOCUMENTATION_NOTE" | "CASE" | "GUIDE";
  cluster: string;
  secondaryClusters: string[];
  author: AuthorRef;
  publisher: PublisherRef;
  datePublished: string;
  dateModified: string;
  readingTime: string;
  featuredImage: FeaturedImage;
  parent?: { title: string; href: string };
  previous?: { title: string; href: string };
  next?: { title: string; href: string };
  related?: { title: string; href: string; tag: string }[];
  evidence?: string[];
  commercialRelation?: { title: string; href: string };
  sections: ArticleSection[];
  faq?: FAQItem[];
  topicGraph: TopicGraph;
}
