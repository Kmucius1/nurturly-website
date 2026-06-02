import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Package, Shield, BedDouble, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/nurturly/section-heading";
import { CTASection } from "@/components/nurturly/cta-section";
import { FAQAccordion } from "@/components/nurturly/faq-accordion";
import { FAQ_DATA } from "@/lib/faq-data";

export const metadata: Metadata = {
  title: "FAQ — Nurturly FoldAway™",
  description:
    "Frequently asked questions about the Nurturly FoldAway™ bedside changing station — product details, safety, compatibility, and ordering.",
};

const categoryIcons: Record<string, React.ElementType> = {
  Product: Package,
  Safety: Shield,
  Compatibility: BedDouble,
  Ordering: ShoppingBag,
};

const categoryColors: Record<string, string> = {
  Product: "from-babyBlue/20 to-softMint/20",
  Safety: "from-softMint/20 to-sage/20",
  Compatibility: "from-lavender/20 to-babyPink/20",
  Ordering: "from-peach/20 to-butteryYellow/20",
};

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="bg-gradient-to-br from-lavender/15 via-cream to-babyPink/10 pt-16 pb-20" aria-labelledby="faq-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center bg-lavender/20 text-warmBrown border border-lavender/30 font-display font-semibold rounded-full text-sm px-3.5 py-1 mb-5">
            FAQ
          </span>
          <h1 id="faq-heading" className="font-display font-extrabold text-4xl md:text-5xl text-warmBrown mb-5">
            Questions answered.
          </h1>
          <p className="text-softGray font-body text-lg max-w-xl mx-auto leading-relaxed">
            Everything parents want to know about Nurturly FoldAway™ — the product, safety, compatibility, and how to get early access.
          </p>
        </div>
      </section>

      {/* Category Nav */}
      <nav className="py-6 bg-warmWhite border-b border-warmBeige/50 sticky top-16 z-20" aria-label="FAQ categories">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 overflow-x-auto pb-1">
            {FAQ_DATA.map((cat) => {
              const Icon = categoryIcons[cat.category] || Package;
              return (
                <a
                  key={cat.category}
                  href={`#${cat.category.toLowerCase()}`}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-display font-semibold text-softGray hover:text-warmBrown hover:bg-warmBeige/30 transition-colors whitespace-nowrap flex-shrink-0"
                >
                  <Icon className="w-3.5 h-3.5" />
                  {cat.category}
                </a>
              );
            })}
          </div>
        </div>
      </nav>

      {/* FAQ Sections */}
      <div className="section-spacing">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {FAQ_DATA.map((cat) => {
            const Icon = categoryIcons[cat.category] || Package;
            const colorClass = categoryColors[cat.category] || "from-lavender/20 to-babyPink/20";
            return (
              <section key={cat.category} id={cat.category.toLowerCase()} aria-labelledby={`faq-${cat.category}`}>
                <div className={`flex items-center gap-3 mb-6 p-4 rounded-2xl bg-gradient-to-br ${colorClass} w-fit`}>
                  <Icon className="w-5 h-5 text-warmBrown" />
                  <h2 id={`faq-${cat.category}`} className="font-display font-bold text-warmBrown text-lg">
                    {cat.category}
                  </h2>
                </div>
                <FAQAccordion items={cat.items} />
              </section>
            );
          })}
        </div>
      </div>

      {/* Still have questions */}
      <section className="py-12 bg-warmWhite" aria-labelledby="still-questions">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="still-questions" className="font-display font-bold text-2xl text-warmBrown mb-3">
            Still have a question?
          </h2>
          <p className="text-softGray font-body mb-6">
            We&apos;re happy to help. Reach out and we&apos;ll get back to you.
          </p>
          <Button asChild className="bg-warmBrown hover:bg-warmBrown/90 text-white rounded-2xl font-display font-bold gap-2">
            <Link href="/contact">
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        variant="dual"
        title="Ready to get early access?"
        subtitle="Join the Founding Parent List and be first when the FoldAway™ launches."
        primaryHref="#waitlist"
        primaryLabel="Join the Founding Parent List"
        secondaryHref="/safety"
        secondaryLabel="Read Safety Info"
        gradient="from-lavender/20 via-babyPink/15 to-softMint/20"
      />
    </main>
  );
}
