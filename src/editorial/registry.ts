import { AuthorRef, PublisherRef } from "./types";

export const CANONICAL_ORGANIZATION_ID = "https://www.auditseo.com.br/#organization";
export const CANONICAL_PERSON_ID = "https://www.auditseo.com.br/autor/sidney-santos#person";

export const AUDIT_PUBLISHER: PublisherRef = {
  name: "AUDITSEO",
  url: "https://www.auditseo.com.br",
  organizationId: CANONICAL_ORGANIZATION_ID,
  logo: "https://www.auditseo.com.br/auditseo-logo.png",
};

export const SIDNEY_AUTHOR: AuthorRef = {
  name: "Sidney Santos",
  url: "https://www.auditseo.com.br/autor/sidney-santos",
  jobTitle: "Especialista em SEO e Search Intelligence",
  bio: "Sidney Santos atua com SEO desde 2009 e é fundador da AUDITSEO, consultoria de Search Intelligence especializada no apoio estratégico a agências.",
  avatar: "https://www.auditseo.com.br/autor/sidney-santos",
  personId: CANONICAL_PERSON_ID,
};
