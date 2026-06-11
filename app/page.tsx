import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Heart, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/nurturly/section-heading";
import { CTASection } from "@/components/nurturly/cta-section";
import { MediaPlaceholder, VideoCard } from "@/components/nurturly/media-placeholder";
import {
  PRODUCT_BENEFITS,
  PRODUCT_SHOWCASE_CARDS,
  DEVELOPMENT_TIMELINE,
  PARENT_USE_CASES,
  EARLY_REACTIONS,
} from "@/lib/product-data";
import { BLOG_POSTS } from "@/lib/blog-data";
import { BlogCard } from "@/components/nurturly/blog-card";

export const metadata: Metadata = {
  title: "Nurturly FoldAway™ Bedside Changing Station | Baby Essentials for Newborn Nights",
  description:
    "A space-saving bedside changing station designed to make nighttime diaper changes easier. Join the Nurturly FoldAway™ waitlist for product updates and early access.",
};

export default function HomePage() {
  return (
    <main>
      {/* ─── HERO ─── */}
      <section aria-labelledby="hero-heading">
        <h1 id="hero-heading" className="sr-only">
          The FoldAway™ bedside station for easier nighttime changes.
        </h1>
        <img
          src="/images/banner-hero.png"
          alt="Nurturly FoldAway™ bedside changing station — The FoldAway™ bedside station for easier nighttime changes"
          className="w-full block"
        />
      </section>

      {/* ─── BENEFIT STRIP ─── */}
      <section className="py-10 bg-warmWhite border-y border-warmBeige/50" aria-label="Key Benefits">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {PRODUCT_BENEFITS.map((benefit) => (
              <div
                key={benefit.title}
                className={`rounded-2xl p-4 bg-gradient-to-br ${benefit.gradient} text-center`}
              >
                <p className="font-display font-bold text-sm text-warmBrown mb-1">{benefit.title}</p>
                <p className="text-xs text-softGray font-body">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRODUCT SHOWCASE ─── */}
      <section className="section-spacing" aria-labelledby="showcase-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="The Product"
            badgeColor="blue"
            title="Everything within reach."
            titleHighlight="Nothing in the way."
            subtitle="A bedside changing station designed around the real moments of parent life."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PRODUCT_SHOWCASE_CARDS.map((card) => (
              <div key={card.title} className="pastel-card overflow-hidden group hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                <MediaPlaceholder
                  label={card.title}
                  gradient={card.color}
                  aspectRatio="square"
                  className="rounded-t-3xl rounded-b-none"
                  src={card.image}
                />
                <div className="p-4">
                  <p className="font-display font-bold text-warmBrown text-sm">{card.title}</p>
                  <p className="text-xs text-softGray font-body mt-0.5">{card.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROBLEM / SOLUTION ─── */}
      <section className="section-spacing bg-gradient-to-br from-cream to-[#FFF3FA]" aria-labelledby="problem-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Why FoldAway™"
            badgeColor="pink"
            title="Newborn nights are already"
            titleHighlight="hard enough."
            subtitle="The middle-of-the-night routine is exhausting. We designed a simpler way."
          />
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10">
            <div className="rounded-3xl bg-warmBeige/30 border border-warmBeige/60 p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-warmBeige/60 flex items-center justify-center">
                  <span className="text-sm">😮‍💨</span>
                </div>
                <h3 className="font-display font-bold text-warmBrown">The old way</h3>
              </div>
              <ul className="space-y-2.5" role="list">
                {["Get out of bed", "Walk across the room", "Turn on bright lights", "Disturb baby and yourself"].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-softGray font-body">
                    <span className="w-4 h-4 rounded-full border-2 border-softGray/30 flex-shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl bg-softMint/20 border border-softMint/40 p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-softMint/40 flex items-center justify-center">
                  <span className="text-sm">💚</span>
                </div>
                <h3 className="font-display font-bold text-warmBrown">The better way</h3>
              </div>
              <ul className="space-y-2.5" role="list">
                {[
                  "Stay right by baby",
                  "Keep everything within reach",
                  "Keep lights low and baby calm",
                  "Better nights for everyone",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-warmBrown font-body">
                    <CheckCircle className="w-4 h-4 text-sage flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="text-center">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-warmBrown/30 text-warmBrown hover:bg-warmBrown/5 rounded-2xl font-display font-bold gap-2"
            >
              <Link href="/how-it-works">
                See How It Works
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ─── FOUNDER STORY ─── */}
      <section className="section-spacing" aria-labelledby="founder-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center bg-peach/20 text-warmBrown border border-peach/30 font-display font-semibold rounded-full text-sm px-3.5 py-1 mb-5">
                Our Story
              </span>
              <h2 id="founder-heading" className="font-display font-extrabold text-3xl md:text-4xl text-warmBrown mb-5 leading-tight">
                Created by a dad who needed a better way.
              </h2>
              <p className="text-softGray font-body text-lg leading-relaxed mb-6">
                Ben came up with the FoldAway™ after he and his wife were struggling with exhausting late-night diaper changes. He designed a solution that brings the changing station closer, stores the essentials you need, and folds away when you're done.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  variant="outline"
                  className="border-warmBrown/30 text-warmBrown hover:bg-warmBrown/5 rounded-2xl font-display font-bold gap-2"
                >
                  <Link href="/our-story">
                    Watch Ben&apos;s Story
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  className="text-softGray hover:text-warmBrown rounded-2xl font-display font-semibold"
                >
                  <Link href="/our-story">Read full story</Link>
                </Button>
              </div>
            </div>
            <VideoCard
              label="Watch Ben's Story — The 3 AM idea that started it all"
              src="/videos/founder-story-ben.mp4"
              gradient="from-peach/30 via-babyPink/20 to-lavender/30"
              className="rounded-[2rem] overflow-hidden"
              poster="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=80"
            />
          </div>
        </div>
      </section>

      {/* ─── PARENT USE CASES ─── */}
      <section className="section-spacing bg-gradient-to-br from-[#FFF5F9] to-cream" aria-labelledby="use-cases-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Who It's For"
            badgeColor="mint"
            title="Made for real parent life."
            subtitle="Whoever you are, wherever you are — the FoldAway™ was designed with your nights in mind."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PARENT_USE_CASES.map((useCase) => (
              <div
                key={useCase.title}
                className={`pastel-card p-6 bg-gradient-to-br ${useCase.color} hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300`}
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

      {/* ─── DEVELOPMENT PREVIEW ─── */}
      <section className="section-spacing" aria-labelledby="dev-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center bg-babyBlue/20 text-warmBrown border border-babyBlue/30 font-display font-semibold rounded-full text-sm px-3.5 py-1 mb-5">
                In Development
              </span>
              <h2 id="dev-heading" className="font-display font-extrabold text-3xl md:text-4xl text-warmBrown mb-5 leading-tight">
                Follow the FoldAway™ journey.
              </h2>
              <div className="space-y-3 mb-6">
                {DEVELOPMENT_TIMELINE.slice(0, 6).map((item) => (
                  <div key={item.phase} className="flex items-center gap-3">
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-display font-bold flex-shrink-0 ${
                        item.status === "complete"
                          ? "bg-sage text-white"
                          : item.status === "active"
                          ? "bg-babyPink text-white"
                          : "bg-warmBeige/60 text-softGray"
                      }`}
                    >
                      {item.status === "complete" ? "✓" : item.phase}
                    </div>
                    <p className={`text-sm font-display font-semibold ${item.status === "upcoming" ? "text-softGray" : "text-warmBrown"}`}>
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
              <Button
                asChild
                variant="outline"
                className="border-warmBrown/30 text-warmBrown hover:bg-warmBrown/5 rounded-2xl font-display font-bold gap-2"
              >
                <Link href="/development">
                  View Development Updates
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
            <VideoCard
              label="Product Development — From sketch to prototype"
              src="/videos/product-development.mp4"
              gradient="from-babyBlue/30 via-softMint/20 to-lavender/30"
              className="rounded-[2rem] overflow-hidden"
              poster="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=900&q=80"
            />
          </div>
        </div>
      </section>

      {/* ─── EARLY REACTIONS ─── */}
      <section className="section-spacing bg-gradient-to-br from-lavender/10 via-cream to-babyPink/10" aria-labelledby="reactions-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Early Reactions 💗"
            badgeColor="pink"
            title="Early parent reactions."
            subtitle="Pre-launch feedback from real parents"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {EARLY_REACTIONS.map((reaction) => (
              <div
                key={reaction.name}
                className={`rounded-3xl bg-gradient-to-br ${reaction.color} p-6 border border-white/60 shadow-card`}
              >
                <p className="text-warmBrown font-body text-base italic mb-4 leading-relaxed">
                  &ldquo;{reaction.quote}&rdquo;
                </p>
                <div>
                  <p className="font-display font-bold text-sm text-warmBrown">{reaction.name}</p>
                  <p className="text-xs text-softGray">{reaction.role}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-softGray mt-5 font-body">Pre-launch feedback from real parents — not verified purchase reviews</p>
        </div>
      </section>

      {/* ─── SAFETY PROMISE ─── */}
      <section className="section-spacing" aria-labelledby="safety-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] bg-gradient-to-br from-softMint/20 via-cream to-babyBlue/10 border border-softMint/30 p-8 md:p-12 text-center">
            <div className="p-4 bg-softMint/30 rounded-full w-fit mx-auto mb-5">
              <Shield className="w-8 h-8 text-sage" />
            </div>
            <h2 id="safety-heading" className="font-display font-extrabold text-3xl md:text-4xl text-warmBrown mb-5">
              Designed with supervised care in mind.
            </h2>
            <div className="grid sm:grid-cols-2 gap-3 max-w-xl mx-auto mb-7 text-left">
              {[
                "Supervised diaper changes only",
                "Never leave baby unattended",
                "Always keep one hand on baby",
                "Final use limits confirmed after testing",
              ].map((rule) => (
                <div key={rule} className="flex items-center gap-2.5 text-sm text-warmBrown font-body">
                  <CheckCircle className="w-4 h-4 text-sage flex-shrink-0" />
                  {rule}
                </div>
              ))}
            </div>
            <Button
              asChild
              variant="outline"
              className="border-sage/50 text-sage hover:bg-sage/10 rounded-2xl font-display font-bold gap-2"
            >
              <Link href="/safety">
                Read Safety Notes
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ─── BLOG PREVIEW ─── */}
      <section className="section-spacing bg-gradient-to-b from-cream to-warmWhite" aria-labelledby="blog-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <SectionHeading
              title="From the Nurturly blog"
              subtitle="Helpful guides for real parent life."
              center={false}
              className="mb-0"
            />
            <Link
              href="/blog"
              className="hidden sm:flex items-center gap-1 text-sm font-display font-semibold text-deepLavender hover:text-warmBrown transition-colors"
            >
              View all posts <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <BlogCard key={post.slug} post={post} variant="featured" />
            ))}
          </div>
          <div className="text-center mt-8">
            <Button
              asChild
              variant="outline"
              className="border-warmBrown/30 text-warmBrown hover:bg-warmBrown/5 rounded-2xl font-display font-bold gap-2"
            >
              <Link href="/blog">
                View all posts
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ─── WAITLIST CTA ─── */}
      <CTASection
        variant="waitlist"
        title="Be first to get the bedside changer parents are already talking about."
        subtitle="Join the Founding Parent List for launch updates, early access, and behind-the-scenes development news."
        gradient="from-lavender/20 via-babyPink/15 to-softMint/20"
      />
    </main>
  );
}
