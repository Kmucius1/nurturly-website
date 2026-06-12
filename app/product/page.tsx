import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Package, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/nurturly/section-heading";
import { SafetyNotice } from "@/components/nurturly/safety-notice";
import { CTASection } from "@/components/nurturly/cta-section";
import { MediaPlaceholder } from "@/components/nurturly/media-placeholder";
import { FAQAccordion } from "@/components/nurturly/faq-accordion";
import {
  PRODUCT,
  PRODUCT_BENEFITS,
  PRODUCT_WHATS_INCLUDED,
  PRODUCT_DETAILS,
  PARENT_USE_CASES,
} from "@/lib/product-data";
import { FAQ_DATA } from "@/lib/faq-data";

export const metadata: Metadata = {
  title: "Nurturly FoldAway™ — Bedside Changing Station",
  description:
    "The space-saving bedside changing station that slides under your mattress, raises to your height, and folds away when done. Currently in development — join the waitlist.",
};


export default function ProductPage() {
  const productFAQ = FAQ_DATA.flatMap((cat) => cat.items).slice(0, 6);

  return (
    <main className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="bg-gradient-to-br from-cream via-[#FFF5F9] to-[#F3EEFF] pt-10 pb-16 md:pt-16 md:pb-24" aria-labelledby="product-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Diagram */}
            <div className="rounded-[2rem] overflow-hidden bg-white border border-warmBeige/40 shadow-card p-4 md:p-6">
              <img
                src="/images/product-diagram.png"
                alt="FoldAway™ open/use position and folded/storage position diagram with labeled components"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Product Info */}
            <div className="lg:sticky lg:top-24">
              <div className="inline-flex items-center bg-babyBlue/20 text-warmBrown border border-babyBlue/30 font-display font-semibold rounded-full text-xs px-3 py-1 mb-4">
                🚧 In Development
              </div>
              <h1 id="product-heading" className="font-display font-extrabold text-4xl md:text-5xl text-warmBrown mb-3 leading-tight">
                Nurturly FoldAway™
              </h1>
              <p className="text-deepLavender font-display font-semibold text-lg mb-5">
                Bedside Changing Station
              </p>
              <p className="text-softGray font-body text-base leading-relaxed mb-6">
                {PRODUCT.description}
              </p>

              <div className="bg-amber-50 border border-amber-200/60 rounded-2xl p-4 mb-6">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-amber-800 font-body">
                    <strong>Product in development.</strong> {PRODUCT.statusNote}
                  </p>
                </div>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-2 gap-2.5 mb-6">
                {PRODUCT_BENEFITS.map((benefit) => (
                  <div key={benefit.title} className={`rounded-xl p-3 bg-gradient-to-br ${benefit.gradient}`}>
                    <p className="font-display font-bold text-xs text-warmBrown">{benefit.title}</p>
                    <p className="text-xs text-softGray font-body mt-0.5">{benefit.description}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button
                asChild
                size="lg"
                className="w-full bg-warmBrown hover:bg-warmBrown/90 text-white rounded-2xl font-display font-bold gap-2 mb-3"
              >
                <Link href="#waitlist">
                  Join the Founding Parent List
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full border-warmBrown/30 text-warmBrown hover:bg-warmBrown/5 rounded-2xl font-display font-bold gap-2"
              >
                <Link href="/how-it-works">
                  See How It Works <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>

              <SafetyNotice variant="inline" className="mt-4" />
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-spacing" aria-labelledby="included-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                badge="In the Box"
                badgeColor="mint"
                title="What's included."
                center={false}
                className="mb-6"
              />
              <ul className="space-y-3">
                {PRODUCT_WHATS_INCLUDED.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-warmBrown font-body">
                    <div className="p-1.5 bg-softMint/20 rounded-lg flex-shrink-0">
                      <Package className="w-4 h-4 text-sage" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <MediaPlaceholder
              label="FoldAway™ product contents — frame, pad, storage, strap, guide"
              gradient="from-softMint/30 via-babyBlue/20 to-lavender/30"
              aspectRatio="landscape"
              className="rounded-3xl"
              src="https://images.unsplash.com/photo-1590422749897-47036da0b0ff?auto=format&fit=crop&w=800&q=80"
            />
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="section-spacing bg-warmWhite" aria-labelledby="details-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Specifications"
            badgeColor="blue"
            title="Product details."
            subtitle="All details to be confirmed before launch. Final specifications subject to change during development."
          />
          <div className="max-w-2xl mx-auto">
            <div className="rounded-3xl bg-white border border-warmBeige/40 shadow-card overflow-hidden">
              {PRODUCT_DETAILS.map((detail, index) => (
                <div
                  key={detail.label}
                  className={`flex items-center justify-between px-6 py-4 ${
                    index !== PRODUCT_DETAILS.length - 1 ? "border-b border-warmBeige/40" : ""
                  }`}
                >
                  <span className="font-display font-semibold text-warmBrown text-sm">{detail.label}</span>
                  <span className="text-softGray font-body text-sm text-right max-w-[55%]">{detail.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Media Gallery */}
      <section className="section-spacing" aria-labelledby="gallery-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Gallery"
            badgeColor="lavender"
            title="See it from every angle."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: "Open side view", gradient: "from-babyPink/30 to-lavender/30", src: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=600&q=80" },
              { label: "Height adjustment detail", gradient: "from-babyBlue/30 to-softMint/30", src: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=600&q=80" },
              { label: "Storage closeup", gradient: "from-softMint/30 to-butteryYellow/30", src: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=600&q=80" },
              { label: "Folded under mattress", gradient: "from-lavender/30 to-babyPink/30", src: "https://images.unsplash.com/photo-1471286174890-9c112ac6476a?auto=format&fit=crop&w=600&q=80" },
              { label: "Changing pad detail", gradient: "from-peach/30 to-babyPink/30", src: "https://images.unsplash.com/photo-1590422749897-47036da0b0ff?auto=format&fit=crop&w=600&q=80" },
              { label: "Bracket detail", gradient: "from-butteryYellow/30 to-peach/30", src: "https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=600&q=80" },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl overflow-hidden">
                <MediaPlaceholder
                  label={item.label}
                  gradient={item.gradient}
                  aspectRatio="square"
                  src={item.src}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-spacing bg-gradient-to-br from-[#FFF5F9] to-cream" aria-labelledby="uses-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Made For"
            badgeColor="pink"
            title="Built for real parent setups."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PARENT_USE_CASES.map((useCase) => (
              <div
                key={useCase.title}
                className={`pastel-card p-6 bg-gradient-to-br ${useCase.color}`}
              >
                <span className="text-3xl mb-3 block" role="img" aria-label={useCase.title}>
                  {useCase.icon}
                </span>
                <h3 className="font-display font-bold text-warmBrown mb-1.5">{useCase.title}</h3>
                <p className="text-sm text-softGray font-body">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="section-spacing" aria-labelledby="product-safety-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SafetyNotice variant="card" />
        </div>
      </section>

      {/* FAQ */}
      <section className="section-spacing bg-warmWhite" aria-labelledby="product-faq-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Questions"
            badgeColor="yellow"
            title="Product FAQ"
          />
          <FAQAccordion items={productFAQ} />
          <div className="text-center mt-8">
            <Button asChild variant="outline" className="border-warmBrown/30 text-warmBrown hover:bg-warmBrown/5 rounded-2xl font-display font-bold gap-2">
              <Link href="/faq">View all FAQs <ArrowRight className="w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Waitlist */}
      <CTASection
        variant="waitlist"
        title="Be first when the FoldAway™ launches."
        subtitle="Join the Founding Parent List for early access, product updates, and launch news."
        gradient="from-babyPink/20 via-lavender/15 to-softMint/20"
      />
    </main>
  );
}
