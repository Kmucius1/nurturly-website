import { Shield } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { LegalPage } from "@/lib/legal-data";

interface LegalPageLayoutProps {
  page: LegalPage;
  slug: string;
}

export function LegalPageLayout({ page, slug }: LegalPageLayoutProps) {
  return (
    <main className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="bg-gradient-to-br from-lavender/10 via-cream to-babyPink/10 pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/" className="text-sm text-softGray hover:text-warmBrown transition-colors">Home</Link>
            <span className="text-softGray">/</span>
            <Link href="/legal/privacy-policy" className="text-sm text-softGray hover:text-warmBrown transition-colors">Legal</Link>
            <span className="text-softGray">/</span>
            <span className="text-sm text-warmBrown">{page.title}</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 bg-lavender/20 rounded-xl">
              <Shield className="w-5 h-5 text-deepLavender" />
            </div>
            <span className="text-sm font-display font-semibold text-softGray">Legal</span>
          </div>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl text-warmBrown mb-4">
            {page.title}
          </h1>
          <p className="text-softGray font-body">Last updated: {page.lastUpdated}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50/50 border border-amber-200/60 rounded-2xl p-4 mb-8 text-sm text-amber-800">
            <strong>Note:</strong> This document contains placeholder legal content. All legal pages should be reviewed and approved by qualified legal counsel before publication.
          </div>

          <div className="prose-nurturly space-y-8">
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-card border border-warmBeige/40">
              <p className="text-softGray font-body leading-relaxed text-base">{page.intro}</p>
            </div>

            {page.sections.map((section, index) => (
              <div key={index} className="bg-white rounded-3xl p-6 md:p-8 shadow-card border border-warmBeige/40">
                <h2 className="font-display font-bold text-xl text-warmBrown mb-3">{section.heading}</h2>
                <p className="text-softGray font-body leading-relaxed text-base">{section.content}</p>
              </div>
            ))}
          </div>

          {/* Footer links */}
          <div className="mt-12 pt-8 border-t border-warmBeige/60">
            <h3 className="font-display font-semibold text-warmBrown mb-4">Other Legal Documents</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Privacy Policy", href: "/legal/privacy-policy" },
                { label: "Terms of Service", href: "/legal/terms-of-service" },
                { label: "Shipping Policy", href: "/legal/shipping-policy" },
                { label: "Return Policy", href: "/legal/return-policy" },
                { label: "Warranty Policy", href: "/legal/warranty-policy" },
                { label: "Product Safety Disclaimer", href: "/legal/product-safety-disclaimer" },
                { label: "Pre-Order Terms", href: "/legal/preorder-terms" },
                { label: "Accessibility", href: "/legal/accessibility" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-softGray hover:text-deepLavender transition-colors underline underline-offset-2"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
