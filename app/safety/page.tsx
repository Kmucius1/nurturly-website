import type { Metadata } from "next";
import Link from "next/link";
import { Shield, AlertTriangle, CheckCircle, XCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/nurturly/section-heading";
import { CTASection } from "@/components/nurturly/cta-section";
import { FAQAccordion } from "@/components/nurturly/faq-accordion";
import { SAFETY_RULES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Safety — Nurturly FoldAway™",
  description:
    "Safety information for Nurturly FoldAway™ — a supervised diaper-changing product. Not for sleep, play, or unattended use.",
};

const doRules = [
  "Use only for supervised diaper changes",
  "Keep at least one hand on baby at all times during use",
  "Lock all folding and height adjustments before use",
  "Keep the area clear of hazards",
  "Follow all weight and age limits in the final product guide",
  "Use only with compatible bed setups as confirmed in instructions",
];

const dontRules = [
  "Do not leave baby unattended on the station",
  "Do not use as a sleep surface — not for sleep of any kind",
  "Do not allow baby to sit, play, or crawl on the station",
  "Do not use for play, entertainment, or any purpose other than supervised changing",
  "Do not exceed confirmed weight limits",
  "Do not use if any part of the product is damaged",
];

const safetyFAQ = [
  {
    question: "Is this safe for newborns?",
    answer:
      "The FoldAway™ is designed with newborn parents in mind. Final age and use guidance will be confirmed after safety testing and review before launch. Always follow the final product guidelines when they are published.",
  },
  {
    question: "Can baby sleep on it?",
    answer:
      "No. Nurturly FoldAway™ is not a sleep surface under any circumstances. It is designed only for supervised diaper changes. Safe infant sleep requires a firm, flat sleep surface specifically designed for sleep. Never use any changing product as a sleep surface.",
  },
  {
    question: "What is the weight limit?",
    answer:
      "Final weight limits will be determined through safety testing and will be clearly communicated before the product ships. Do not exceed the confirmed weight limits.",
  },
  {
    question: "What beds does it work with?",
    answer:
      "Bed compatibility will be confirmed during testing. We are testing across multiple bed types and heights. Final compatibility details and any limitations will be published before launch.",
  },
  {
    question: "Does it lock in place?",
    answer:
      "The FoldAway™ is being designed with locking mechanisms for both the folding platform and height adjustment. Final locking system design and instructions will be confirmed before launch.",
  },
  {
    question: "Can it tip?",
    answer:
      "Stability is a primary concern in the design. The under-mattress attachment is designed to provide stability. Final stability testing results will be disclosed before launch. Always follow all setup and use instructions.",
  },
  {
    question: "What safety testing is required?",
    answer:
      "We are committed to completing a thorough safety review before the product ships. Specific testing standards and results will be communicated before launch. We will not ship until we are confident in product safety.",
  },
  {
    question: "What safety instructions will come with it?",
    answer:
      "The final product will include complete safety instructions, warnings, weight limits, age guidance, setup instructions, and compatibility information. We will not ship without these.",
  },
];

export default function SafetyPage() {
  return (
    <main className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="bg-gradient-to-br from-softMint/20 via-cream to-babyBlue/10 pt-16 pb-20" aria-labelledby="safety-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-4 bg-softMint/30 rounded-full w-fit mx-auto mb-6">
            <Shield className="w-10 h-10 text-sage" />
          </div>
          <h1 id="safety-heading" className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-warmBrown mb-5">
            Safety comes first. Always.
          </h1>
          <p className="text-softGray font-body text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Nurturly FoldAway™ is being developed as a supervised baby-changing product. Understanding its purpose and limits is the most important thing we can share.
          </p>
        </div>
      </section>

      {/* Core Intended Use */}
      <section className="section-spacing" aria-labelledby="intended-use">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-softMint/15 border border-softMint/40 p-8 text-center mb-10">
            <h2 id="intended-use" className="font-display font-bold text-2xl text-warmBrown mb-3">
              Intended use — supervised diaper changes only
            </h2>
            <p className="text-softGray font-body leading-relaxed">
              Nurturly FoldAway™ is designed and intended solely for supervised diaper changes. It is not a sleep product, play surface, seat, or unattended baby product of any kind. Never use this product for any purpose other than supervised changing with a caregiver present and a hand on baby at all times.
            </p>
          </div>

          <div className="bg-amber-50 border border-amber-200/60 rounded-3xl p-6 flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-display font-bold text-amber-900 mb-2">Not for sleep. Not for unattended use.</h3>
              <p className="text-amber-800 font-body text-sm leading-relaxed">
                Falls from changing surfaces can cause serious injury. Never leave a baby unattended on any changing surface. The FoldAway™ is not approved or intended for sleep, rest, sitting, or play. Always follow safe sleep guidelines — use a firm, flat sleep surface designed for infant sleep.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Do and Don't */}
      <section className="section-spacing bg-warmWhite" aria-labelledby="do-dont">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Safety Rules"
            badgeColor="mint"
            title="What to do — and what not to do."
          />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-3xl bg-softMint/10 border border-softMint/30 p-6">
              <h3 className="font-display font-bold text-warmBrown mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-sage" />
                Always do
              </h3>
              <ul className="space-y-3">
                {doRules.map((rule) => (
                  <li key={rule} className="flex items-start gap-2.5 text-sm text-warmBrown font-body">
                    <CheckCircle className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" />
                    {rule}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-red-50/50 border border-red-100 p-6">
              <h3 className="font-display font-bold text-warmBrown mb-4 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-400" />
                Never do
              </h3>
              <ul className="space-y-3">
                {dontRules.map((rule) => (
                  <li key={rule} className="flex items-start gap-2.5 text-sm text-warmBrown font-body">
                    <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                    {rule}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Development Note */}
      <section className="section-spacing" aria-labelledby="dev-note">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-babyBlue/15 to-softMint/15 border border-babyBlue/20 p-8">
            <h2 id="dev-note" className="font-display font-bold text-xl text-warmBrown mb-3">
              Product development status
            </h2>
            <p className="text-softGray font-body text-sm leading-relaxed mb-4">
              Nurturly FoldAway™ is currently in development. Final safety details, product warnings, age guidance, weight limits, instructions, and compatibility rules will be finalized before shipment. We will not ship any product until our safety review is complete.
            </p>
            <p className="text-softGray font-body text-sm leading-relaxed">
              All information on this page reflects our current design intentions and safety commitments. Final product safety documentation will be provided with each unit and published on this website before launch.
            </p>
          </div>
        </div>
      </section>

      {/* Safety FAQ */}
      <section className="section-spacing bg-gradient-to-br from-[#FFF5F9] to-cream" aria-labelledby="safety-faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Safety Questions"
            badgeColor="mint"
            title="Safety FAQ"
          />
          <FAQAccordion items={safetyFAQ} />
        </div>
      </section>

      {/* Links */}
      <section className="py-10" aria-label="Related pages">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            <Button asChild variant="outline" className="border-warmBrown/30 text-warmBrown hover:bg-warmBrown/5 rounded-2xl font-display font-bold gap-2">
              <Link href="/legal/product-safety-disclaimer">
                Full Safety Disclaimer <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-warmBrown/30 text-warmBrown hover:bg-warmBrown/5 rounded-2xl font-display font-bold gap-2">
              <Link href="/faq">
                All FAQs <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-warmBrown/30 text-warmBrown hover:bg-warmBrown/5 rounded-2xl font-display font-bold gap-2">
              <Link href="/contact">
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
