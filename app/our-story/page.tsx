import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/nurturly/section-heading";
import { CTASection } from "@/components/nurturly/cta-section";
import { MediaPlaceholder, VideoCard } from "@/components/nurturly/media-placeholder";

export const metadata: Metadata = {
  title: "Our Story — Nurturly Baby Essentials",
  description:
    "The story behind Nurturly FoldAway™ — how a tired dad named Ben came up with the idea for a better bedside changing station during exhausting newborn nights.",
};

const storyBeats = [
  {
    heading: "The problem Ben saw",
    body: "Ben noticed that the hardest part of nighttime diaper changes wasn't the change itself — it was everything around it. Getting out of a warm bed. Walking across the room in the dark. Turning on bright lights that woke everyone up. Trying to fall back asleep after. Every piece of that routine cost something.",
    gradient: "from-peach/20 to-babyPink/20",
  },
  {
    heading: "Why nighttime changes are harder than people think",
    body: "Sleep deprivation compounds everything. When you're woken up for the fourth time in a night, every step you have to take feels harder than it should. The changing table across the hall might as well be miles away. What parents need in those moments is proximity, not perfection.",
    gradient: "from-lavender/20 to-babyBlue/20",
  },
  {
    heading: "The first product idea",
    body: "Ben started sketching an idea: a station that could slide under the mattress edge, raise up to bed height, fold out a changing surface, hold the essential supplies, and fold away when the change was done. Not a full changing table. Not a mat on the floor. Something in between — something bedside.",
    gradient: "from-babyBlue/20 to-softMint/20",
  },
  {
    heading: "What Nurturly stands for",
    body: "Nurturly is a brand built around the belief that parents deserve products that actually make life easier. Not products that look beautiful in influencer photos but create more work in practice. Real solutions for real parent life — designed with those 3 AM moments in mind.",
    gradient: "from-softMint/20 to-butteryYellow/20",
  },
  {
    heading: "Why the product is being developed carefully",
    body: "This is a product that will be used beside sleeping babies. That means safety isn't optional. We're taking our time with the design, testing thoroughly, and will not ship until we're confident the product is ready. We'd rather take longer and get it right.",
    gradient: "from-butteryYellow/20 to-peach/20",
  },
];

export default function OurStoryPage() {
  return (
    <main className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="bg-gradient-to-br from-peach/20 via-cream to-babyPink/10 pt-16 pb-20" aria-labelledby="story-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center bg-peach/20 text-warmBrown border border-peach/30 font-display font-semibold rounded-full text-sm px-3.5 py-1 mb-5">
            Our Story
          </span>
          <h1 id="story-heading" className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-warmBrown mb-5 leading-tight">
            Built from one tired dad&apos;s 3 AM idea.
          </h1>
          <p className="text-softGray font-body text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Nurturly FoldAway™ didn&apos;t start with a business plan. It started with a problem too many parents know too well.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section-spacing" aria-labelledby="founder-detail">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 id="founder-detail" className="font-display font-extrabold text-3xl md:text-4xl text-warmBrown mb-5 leading-tight">
                Ben&apos;s story.
              </h2>
              <div className="space-y-4 text-softGray font-body text-base md:text-lg leading-relaxed">
                <p>
                  Nurturly FoldAway™ began with Ben, a dad who wanted to make newborn nights easier for his family. He and his wife were struggling through the same routine so many parents know: wake up, get out of bed, cross the room, turn on the light, change baby, settle everything down, and try to fall back asleep.
                </p>
                <p>
                  The diaper change was not the only hard part. It was everything around it.
                </p>
                <p>
                  Ben started thinking about what parents actually need in those moments: a changing surface close by, storage for the essentials, a height that feels right, and a way to tuck it all away when it&apos;s done. That simple thought became the beginning of Nurturly FoldAway™.
                </p>
              </div>
            </div>
            <VideoCard
              label="Ben's Story — The 3 AM idea that started Nurturly"
              src="/videos/founder-story-ben.mp4"
              gradient="from-peach/30 via-babyPink/20 to-lavender/30"
              className="rounded-3xl overflow-hidden"
              poster="https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=900&q=80"
            />
          </div>

          {/* Story Beat Cards */}
          <div className="space-y-6">
            {storyBeats.map((beat) => (
              <div
                key={beat.heading}
                className={`rounded-3xl bg-gradient-to-br ${beat.gradient} p-6 md:p-8 border border-white/60`}
              >
                <h3 className="font-display font-bold text-xl text-warmBrown mb-3">{beat.heading}</h3>
                <p className="text-softGray font-body leading-relaxed">{beat.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-spacing bg-warmWhite" aria-labelledby="development-images">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="From the Beginning"
            badgeColor="peach"
            title="Where it started."
            subtitle="Early sketches, product concepts, and the FoldAway™ taking shape."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: "Ben's original notes", gradient: "from-peach/30 to-babyPink/30", src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80" },
              { label: "First product sketch", gradient: "from-babyPink/30 to-lavender/30", src: "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?auto=format&fit=crop&w=600&q=80" },
              { label: "Product concept render", gradient: "from-lavender/30 to-babyBlue/30", src: "https://images.unsplash.com/photo-1581726690015-c9861fa5057f?auto=format&fit=crop&w=600&q=80" },
              { label: "Bracket detail sketch", gradient: "from-babyBlue/30 to-softMint/30", src: "https://images.unsplash.com/photo-1483794344563-d27a8d18014e?auto=format&fit=crop&w=600&q=80" },
              { label: "Height adjustment concept", gradient: "from-softMint/30 to-butteryYellow/30", src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=600&q=80" },
              { label: "Prototype frame", gradient: "from-butteryYellow/30 to-peach/30", src: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=600&q=80" },
            ].map((img) => (
              <div key={img.label} className="rounded-2xl overflow-hidden">
                <MediaPlaceholder
                  label={img.label}
                  gradient={img.gradient}
                  aspectRatio="square"
                  src={img.src}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="section-spacing" aria-labelledby="brand-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="The Brand"
            badgeColor="lavender"
            title="What Nurturly means."
          />
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                emoji: "💗",
                title: "Real parent life",
                body: "Every product we make is designed around real parent moments — not idealized baby content. The messy, exhausted, beautiful reality of parenting.",
                gradient: "from-babyPink/20 to-lavender/20",
              },
              {
                emoji: "🌱",
                title: "Thoughtful development",
                body: "We take the time to do this right. Safety comes first. We test before we ship. We talk to parents, not just investors.",
                gradient: "from-softMint/20 to-babyBlue/20",
              },
              {
                emoji: "✨",
                title: "Simple solutions",
                body: "The best parent product is the one that gets out of the way and just makes your life easier. No unnecessary complexity. No gimmicks.",
                gradient: "from-butteryYellow/20 to-peach/20",
              },
            ].map((value) => (
              <div key={value.title} className={`rounded-3xl p-6 bg-gradient-to-br ${value.gradient} border border-white/60`}>
                <span className="text-4xl mb-4 block" role="img" aria-label={value.title}>{value.emoji}</span>
                <h3 className="font-display font-bold text-warmBrown text-xl mb-2">{value.title}</h3>
                <p className="text-softGray font-body text-sm leading-relaxed">{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        variant="dual"
        title="Be part of the Nurturly story."
        subtitle="Join the Founding Parent List and follow the FoldAway™ from development to launch."
        primaryHref="#waitlist"
        primaryLabel="Join the Founding Parent List"
        secondaryHref="/development"
        secondaryLabel="Follow Development"
        gradient="from-peach/20 via-babyPink/15 to-lavender/20"
      />
    </main>
  );
}
