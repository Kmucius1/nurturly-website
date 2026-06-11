import type { Metadata } from "next";
import { CheckCircle, Clock, Circle } from "lucide-react";
import { SectionHeading } from "@/components/nurturly/section-heading";
import { CTASection } from "@/components/nurturly/cta-section";
import { MediaPlaceholder, VideoCard } from "@/components/nurturly/media-placeholder";
import { DEVELOPMENT_TIMELINE } from "@/lib/product-data";

export const metadata: Metadata = {
  title: "Product Development — Nurturly FoldAway™",
  description:
    "Follow the FoldAway™ development journey — from original sketches and concept renders to prototype testing and launch.",
};

const galleryImages = [
  { label: "Original sketch", gradient: "from-peach/30 to-babyPink/30", src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80" },
  { label: "Product concept render", gradient: "from-babyPink/30 to-lavender/30", src: "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?auto=format&fit=crop&w=600&q=80" },
  { label: "Bracket sketch detail", gradient: "from-lavender/30 to-babyBlue/30", src: "https://images.unsplash.com/photo-1581726690015-c9861fa5057f?auto=format&fit=crop&w=600&q=80" },
  { label: "Height adjustment concept", gradient: "from-babyBlue/30 to-softMint/30", src: "https://images.unsplash.com/photo-1483794344563-d27a8d18014e?auto=format&fit=crop&w=600&q=80" },
  { label: "Prototype frame", gradient: "from-softMint/30 to-butteryYellow/30", src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=600&q=80" },
  { label: "Testing setup", gradient: "from-butteryYellow/30 to-peach/30", src: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=600&q=80" },
];

const stillNeeded = [
  "Final prototype completion and structural testing",
  "Weight limit and stability certification",
  "Full safety review and product warnings",
  "Final material selection and supplier confirmation",
  "Color and accessory finalization",
  "Instruction manual and packaging design",
  "Bed compatibility testing across all size types",
  "Parent beta testing and feedback integration",
];

export default function DevelopmentPage() {
  return (
    <main className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="bg-gradient-to-br from-babyBlue/15 via-cream to-softMint/15 pt-16 pb-20" aria-labelledby="dev-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center bg-babyBlue/20 text-warmBrown border border-babyBlue/30 font-display font-semibold rounded-full text-sm px-3.5 py-1 mb-5">
            🚧 In Active Development
          </span>
          <h1 id="dev-heading" className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-warmBrown mb-5 leading-tight">
            Follow the FoldAway™ journey.
          </h1>
          <p className="text-softGray font-body text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            We&apos;re building Nurturly FoldAway™ with parents, not just for parents. From early sketches to prototype refinement, every detail is focused on making nighttime changes easier, safer, and more practical.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-spacing" aria-labelledby="timeline-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="The Journey"
            badgeColor="blue"
            title="Development timeline."
          />
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-warmBeige/60" aria-hidden="true" />

            <div className="space-y-8">
              {DEVELOPMENT_TIMELINE.map((item, index) => (
                <div key={item.phase} className="flex gap-6 relative">
                  {/* Status icon */}
                  <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center relative z-10">
                    {item.status === "complete" ? (
                      <div className="w-10 h-10 bg-sage rounded-full flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                    ) : item.status === "active" ? (
                      <div className="w-10 h-10 bg-babyPink rounded-full flex items-center justify-center animate-pulse">
                        <Clock className="w-5 h-5 text-white" />
                      </div>
                    ) : (
                      <div className="w-10 h-10 bg-warmBeige/60 rounded-full flex items-center justify-center">
                        <Circle className="w-5 h-5 text-softGray" />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className={`flex-1 pb-2 ${item.status === "upcoming" ? "opacity-60" : ""}`}>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className={`font-display font-bold text-base ${item.status === "upcoming" ? "text-softGray" : "text-warmBrown"}`}>
                        {item.title}
                      </h3>
                      {item.status === "active" && (
                        <span className="text-xs bg-babyPink/20 text-babyPink border border-babyPink/30 font-display font-semibold px-2 py-0.5 rounded-full">
                          Active
                        </span>
                      )}
                    </div>
                    <p className="text-softGray font-body text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sketch Gallery */}
      <section className="section-spacing bg-warmWhite" aria-labelledby="sketch-gallery">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Early Work"
            badgeColor="peach"
            title="From sketch to concept."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img) => (
              <div key={img.label} className="rounded-2xl overflow-hidden">
                <MediaPlaceholder label={img.label} gradient={img.gradient} aspectRatio="square" src={img.src} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dev Video */}
      <section className="section-spacing" aria-labelledby="dev-video">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Watch"
            badgeColor="lavender"
            title="Development in progress."
          />
          <VideoCard
            label="Product Development — From sketch to prototype refinement"
            src="/videos/product-development.mp4"
            gradient="from-babyBlue/30 via-lavender/20 to-softMint/30"
            className="rounded-3xl overflow-hidden"
            poster="https://images.unsplash.com/photo-1581726690015-c9861fa5057f?auto=format&fit=crop&w=900&q=80"
          />
        </div>
      </section>

      {/* What Still Needs to Happen */}
      <section className="section-spacing bg-gradient-to-br from-[#FFF5F9] to-cream" aria-labelledby="still-needed">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Transparency"
            badgeColor="yellow"
            title="What still needs to be finalized."
            subtitle="We believe in being honest with parents about where we are in the process."
          />
          <div className="rounded-3xl bg-white border border-warmBeige/40 shadow-card p-6 md:p-8">
            <ul className="space-y-3">
              {stillNeeded.map((item) => (
                <li key={item} className="flex items-start gap-3 text-softGray font-body text-sm">
                  <div className="w-5 h-5 rounded-full border-2 border-warmBeige/60 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-amber-50/60 rounded-2xl border border-amber-200/40">
              <p className="text-sm text-amber-800 font-body">
                We will not ship orders until all the above items are completed, tested, and verified. The FoldAway™ will arrive ready — not rushed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        variant="dual"
        title="Follow the FoldAway™ all the way to launch."
        subtitle="Join the development list and get updates as each stage is completed."
        primaryHref="#waitlist"
        primaryLabel="Join the Development List"
        secondaryHref="/our-story"
        secondaryLabel="Read Our Story"
        gradient="from-babyBlue/20 via-softMint/15 to-lavender/20"
      />
    </main>
  );
}
