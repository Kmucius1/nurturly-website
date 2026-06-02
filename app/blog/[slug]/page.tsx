import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/nurturly/cta-section";
import { BlogCard } from "@/components/nurturly/blog-card";
import { MediaPlaceholder } from "@/components/nurturly/media-placeholder";
import { BLOG_POSTS, getBlogPost, getRelatedPosts } from "@/lib/blog-data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} — Nurturly Blog`,
    description: post.excerpt,
  };
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

const pastelGradients: Record<string, string> = {
  "nighttime-diaper-changes-easier": "from-lavender/30 via-babyPink/20 to-babyBlue/30",
  "newborn-bedside-essentials": "from-softMint/30 via-babyBlue/20 to-lavender/30",
  "small-nursery-ideas": "from-babyBlue/30 via-softMint/20 to-butteryYellow/30",
  "baby-registry-must-haves": "from-peach/30 via-babyPink/20 to-lavender/30",
  "postpartum-bedroom-setup": "from-babyPink/30 via-lavender/20 to-softMint/30",
  "new-dad-newborn-nights": "from-butteryYellow/30 via-peach/20 to-babyPink/30",
  "changing-table-alternatives": "from-lavender/30 via-babyBlue/20 to-softMint/30",
  "apartment-nursery-ideas": "from-softMint/30 via-lavender/20 to-babyPink/30",
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.relatedSlugs);
  const gradient = pastelGradients[post.slug] || "from-babyPink/30 via-lavender/20 to-babyBlue/30";

  const paragraphs = post.content
    .trim()
    .split("\n")
    .filter((line) => line.trim());

  return (
    <main className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="bg-gradient-to-br from-cream to-[#FFF5F9] pt-10 pb-0" aria-labelledby="post-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-display font-semibold text-softGray hover:text-warmBrown transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-display font-semibold text-deepLavender bg-lavender/15 px-2.5 py-0.5 rounded-full">
              {post.category}
            </span>
            <span className="text-xs text-softGray flex items-center gap-1 font-body">
              <Clock className="w-3 h-3" />
              {post.readTime}
            </span>
          </div>
          <h1 id="post-heading" className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-warmBrown leading-tight mb-5">
            {post.title}
          </h1>
          <p className="text-softGray font-body text-lg leading-relaxed">
            {post.excerpt}
          </p>
        </div>

        {/* Hero Image */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <MediaPlaceholder
            label={post.title}
            gradient={gradient}
            aspectRatio="wide"
            className="rounded-t-3xl"
          />
        </div>
      </section>

      {/* Article */}
      <section className="py-12" aria-label="Article content">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-5">
            {paragraphs.map((paragraph, index) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={index} className="font-display font-bold text-2xl text-warmBrown mt-8 mb-3">
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              }
              if (paragraph.startsWith("### ")) {
                return (
                  <h3 key={index} className="font-display font-bold text-xl text-warmBrown mt-6 mb-2">
                    {paragraph.replace("### ", "")}
                  </h3>
                );
              }
              if (paragraph.startsWith("- ")) {
                return (
                  <li key={index} className="flex items-start gap-2.5 text-softGray font-body text-base leading-relaxed ml-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-lavender flex-shrink-0 mt-2.5" aria-hidden="true" />
                    {paragraph.replace("- ", "")}
                  </li>
                );
              }
              if (paragraph.startsWith("*") && paragraph.endsWith("*")) {
                return (
                  <div key={index} className="rounded-2xl bg-softMint/15 border border-softMint/30 p-4 mt-6">
                    <p className="text-sm text-warmBrown font-body italic">{paragraph.replace(/\*/g, "")}</p>
                  </div>
                );
              }
              return (
                <p key={index} className="text-softGray font-body text-base md:text-lg leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 mt-10 pt-8 border-t border-warmBeige/60">
            <Tag className="w-4 h-4 text-softGray flex-shrink-0" />
            {post.tags.map((tag) => (
              <span key={tag} className="text-xs bg-warmBeige/40 text-softGray px-2.5 py-1 rounded-full font-body">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Inline CTA */}
      <section className="py-10" aria-label="Waitlist signup">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-lavender/20 via-babyPink/10 to-softMint/20 border border-lavender/20 p-6 md:p-8 text-center">
            <p className="font-display font-bold text-xl text-warmBrown mb-2">
              Ready to make nights easier?
            </p>
            <p className="text-softGray font-body text-sm mb-5">
              Join the Nurturly FoldAway™ waitlist — the bedside changing station for real parent life.
            </p>
            <Button
              asChild
              className="bg-warmBrown hover:bg-warmBrown/90 text-white rounded-2xl font-display font-bold gap-2"
            >
              <Link href="/#waitlist">Join the Founding Parent List</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="py-12 bg-warmWhite" aria-labelledby="related-heading">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="related-heading" className="font-display font-bold text-xl text-warmBrown mb-6">
              Related reading
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((relPost) => (
                <BlogCard key={relPost.slug} post={relPost} variant="default" />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
