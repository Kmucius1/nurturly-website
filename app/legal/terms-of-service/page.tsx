import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/nurturly/legal-page-layout";
import { LEGAL_PAGES } from "@/lib/legal-data";

export function generateMetadata(): Metadata {
  const page = LEGAL_PAGES["terms-of-service"];
  return {
    title: page ? `${page.title} — Nurturly Baby Essentials` : "Legal — Nurturly",
    description: page?.intro?.substring(0, 150) ?? "Nurturly legal information.",
  };
}

export default function LegalPage() {
  const page = LEGAL_PAGES["terms-of-service"];
  if (!page) return <div>Page not found</div>;
  return <LegalPageLayout page={page} slug="terms-of-service" />;
}
