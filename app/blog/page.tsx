import type { Metadata } from "next";
import { SectionHeading } from "@/components/nurturly/section-heading";
import { BlogCard } from "@/components/nurturly/blog-card";
import { CTASection } from "@/components/nurturly/cta-section";
import { BLOG_POSTS } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog — Nurturly Baby Essentials",
  description:
    "Helpful guides for real parent life — nighttime diaper changes, small nursery ideas, postpartum setup, baby registry tips, and more from the Nurturly blog.",
};

const categories = ["All", "Newborn Tips", "Small Spaces", "Postpartum", "Registry", "Parent Life"];

export default function BlogPage() {
  const [featured, ...rest] = BLOG_POSTS;

  return (
    <main className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="bg-gradient-to-br from-babyPink/15 via-cream to-lavender/15 pt-16 pb-16" aria-labelledby="blog-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center bg-babyPink/20 text-warmBrown border border-babyPink/30 font-display font-semibold rounded-full text-sm px-3.5 py-1 mb-5">
            The Nurturly Blog
          </span>
          <h1 id="blog-heading" className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-warmBrown mb-4">
            Real tips for real parent life.
          </h1>
          <p className="text-softGray font-body text-lg max-w-xl mx-auto">
            Nighttime routines, small-space nurseries, postpartum setup, registry advice, and more.
          </p>
        </div>
      </section>

      {/* Category Filter (visual only — no JS filter needed) */}
      <nav className="py-5 bg-warmWhite border-b border-warmBeige/50" aria-label="Blog categories">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`px-4 py-1.5 rounded-full text-sm font-display font-semibold whitespace-nowrap transition-colors ${
                  i === 0
                    ? "bg-warmBrown text-white"
                    : "text-softGray hover:text-warmBrown hover:bg-warmBeige/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Featured Post */}
      <section className="py-12" aria-labelledby="featured-post">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="featured-post" className="font-display font-bold text-lg text-softGray mb-5 uppercase tracking-wider text-sm">
            Featured
          </h2>
          <BlogCard post={featured} variant="featured" />
        </div>
      </section>

      {/* All Posts */}
      <section className="py-8 pb-20" aria-labelledby="all-posts">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="all-posts" className="font-display font-bold text-sm text-softGray mb-5 uppercase tracking-wider">
            All Posts
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <BlogCard key={post.slug} post={post} variant="default" />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        variant="dual"
        title="Want to know when the FoldAway™ launches?"
        subtitle="Join the Founding Parent List for product updates, early access, and blog updates."
        primaryHref="#waitlist"
        primaryLabel="Join the Founding Parent List"
        secondaryHref="/product"
        secondaryLabel="See the Product"
        gradient="from-babyPink/20 via-lavender/15 to-softMint/20"
      />
    </main>
  );
}
