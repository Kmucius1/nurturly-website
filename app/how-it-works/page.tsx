import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/nurturly/section-heading";
import { SafetyNotice } from "@/components/nurturly/safety-notice";
import { CTASection } from "@/components/nurturly/cta-section";
import { MediaPlaceholder, VideoCard } from "@/components/nurturly/media-placeholder";
import { HOW_IT_WORKS_STEPS } from "@/lib/product-data";

export const metadata: Metadata = {
  title: "How It Works — Nurturly FoldAway™",
  description:
    "Learn how the Nurturly FoldAway™ bedside changing station works — from sliding under the mattress to folding away when the diaper change is done.",
};

const stepColors = [
  "from-babyBlue/20 to-softMint/20",
  "from-softMint/20 to-butteryYellow/20",
  "from-lavender/20 to-babyPink/20",
  "from-peach/20 to-babyPink/20",
  "from-babyPink/20 to-lavender/20",
  "from-sage/20 to-softMint/20",
];

const stepImages = [
  "https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80",
];

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="bg-gradient-to-br from-babyBlue/15 via-cream to-softMint/15 pt-16 pb-20" aria-labelledby="hiw-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center bg-babyBlue/20 text-warmBrown border border-babyBlue/30 font-display font-semibold rounded-full text-sm px-3.5 py-1 mb-5">
            The Product
          </span>
          <h1 id="hiw-heading" className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-warmBrown mb-5 leading-tight">
            How Nurturly FoldAway™ works
          </h1>
          <p className="text-softGray font-body text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            A simple bedside setup designed to make nighttime changes closer, calmer, and easier.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="section-spacing" aria-labelledby="steps-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="steps-heading" className="sr-only">Step by step guide</h2>
          <div className="space-y-16">
            {HOW_IT_WORKS_STEPS.map((step, index) => (
              <div
                key={step.step}
                className={`grid md:grid-cols-2 gap-10 items-center ${
                  index % 2 === 1 ? "md:grid-flow-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br ${stepColors[index]} font-display font-extrabold text-warmBrown text-lg mb-4`}>
                    {step.step}
                  </div>
                  <h3 className="font-display font-extrabold text-2xl md:text-3xl text-warmBrown mb-3">
                    {step.title}
                  </h3>
                  <p className="text-softGray font-body text-base md:text-lg leading-relaxed">
                    {step.description}
                  </p>
                  {step.step === "05" && (
                    <div className="mt-4">
                      <SafetyNotice variant="banner" />
                    </div>
                  )}
                </div>
                <div className={index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}>
                  <MediaPlaceholder
                    label={step.title}
                    gradient={stepColors[index]}
                    aspectRatio="landscape"
                    className="rounded-3xl w-full"
                    src={stepImages[index]}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="section-spacing bg-gradient-to-br from-lavender/10 to-babyBlue/10" aria-labelledby="video-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Watch It"
            badgeColor="blue"
            title="Watch the FoldAway™ in motion."
          />
          <VideoCard
            label="FoldAway™ How-It-Works Animation — Full product demonstration"
            src="/videos/how-it-works-animation.mp4"
            gradient="from-babyBlue/30 via-lavender/20 to-softMint/30"
            className="rounded-3xl overflow-hidden"
            poster="https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=900&q=80"
          />
        </div>
      </section>

      {/* Quick Summary */}
      <section className="section-spacing" aria-labelledby="summary-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="In Summary"
            badgeColor="mint"
            title="Six steps. One simple routine."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {HOW_IT_WORKS_STEPS.map((step, index) => (
              <div
                key={step.step}
                className={`rounded-2xl p-5 bg-gradient-to-br ${stepColors[index]} border border-white/60`}
              >
                <span className="font-display font-extrabold text-3xl text-warmBrown/20 block mb-2">{step.step}</span>
                <h4 className="font-display font-bold text-warmBrown">{step.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="py-10" aria-labelledby="hiw-safety-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SafetyNotice variant="card" />
        </div>
      </section>

      {/* CTA */}
      <CTASection
        variant="dual"
        title="Ready to make nights easier?"
        subtitle="Join the Founding Parent List to get early access when the FoldAway™ launches."
        primaryHref="#waitlist"
        primaryLabel="Join the Founding Parent List"
        secondaryHref="/product"
        secondaryLabel="View Product Details"
        gradient="from-babyBlue/20 via-softMint/15 to-lavender/20"
      />
    </main>
  );
}
