import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { MediaPlaceholder } from "./media-placeholder";
import type { BlogPost } from "@/lib/blog-data";

interface BlogCardProps {
  post: BlogPost;
  variant?: "default" | "featured" | "compact";
  className?: string;
}

const pastelGradients = [
  "from-babyPink/30 via-lavender/20 to-babyBlue/30",
  "from-softMint/30 via-babyBlue/20 to-lavender/30",
  "from-peach/30 via-babyPink/20 to-lavender/30",
  "from-butteryYellow/30 via-peach/20 to-babyPink/30",
  "from-lavender/30 via-babyPink/20 to-peach/30",
  "from-babyBlue/30 via-softMint/20 to-butteryYellow/30",
];

function getGradient(slug: string) {
  const idx = slug.charCodeAt(0) % pastelGradients.length;
  return pastelGradients[idx];
}

export function BlogCard({ post, variant = "default", className }: BlogCardProps) {
  if (variant === "compact") {
    return (
      <Link href={`/blog/${post.slug}`} className={cn("group flex gap-4 items-start", className)}>
        <div className="w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden">
          <MediaPlaceholder
            label={post.title}
            gradient={getGradient(post.slug)}
            aspectRatio="square"
            className="w-full h-full"
            showIcon={false}
          />
        </div>
        <div className="flex-1 min-w-0">
          <span className="text-xs font-display font-semibold text-deepLavender">{post.category}</span>
          <h3 className="text-sm font-display font-bold text-warmBrown group-hover:text-deepLavender transition-colors line-clamp-2 mt-0.5">
            {post.title}
          </h3>
          <span className="text-xs text-softGray flex items-center gap-1 mt-1">
            <Clock className="w-3 h-3" />
            {post.readTime}
          </span>
        </div>
      </Link>
    );
  }

  if (variant === "featured") {
    return (
      <Link
        href={`/blog/${post.slug}`}
        className={cn(
          "group block pastel-card overflow-hidden hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300",
          className
        )}
      >
        <MediaPlaceholder
          label={post.title}
          gradient={getGradient(post.slug)}
          aspectRatio="wide"
          className="rounded-t-3xl rounded-b-none"
        />
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-display font-semibold text-deepLavender bg-lavender/15 px-2.5 py-0.5 rounded-full">
              {post.category}
            </span>
            <span className="text-xs text-softGray flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readTime}
            </span>
          </div>
          <h3 className="font-display font-bold text-xl text-warmBrown group-hover:text-deepLavender transition-colors mb-2 line-clamp-2">
            {post.title}
          </h3>
          <p className="text-softGray font-body text-sm line-clamp-2 mb-4">{post.excerpt}</p>
          <span className="text-sm font-display font-semibold text-deepLavender flex items-center gap-1 group-hover:gap-2 transition-all">
            Read more <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn(
        "group block pastel-card overflow-hidden hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300",
        className
      )}
    >
      <MediaPlaceholder
        label={post.title}
        gradient={getGradient(post.slug)}
        aspectRatio="landscape"
        className="rounded-t-3xl rounded-b-none"
      />
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-display font-semibold text-deepLavender bg-lavender/15 px-2.5 py-0.5 rounded-full">
            {post.category}
          </span>
          <span className="text-xs text-softGray flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {post.readTime}
          </span>
        </div>
        <h3 className="font-display font-bold text-base text-warmBrown group-hover:text-deepLavender transition-colors mb-2 line-clamp-2">
          {post.title}
        </h3>
        <p className="text-softGray font-body text-sm line-clamp-2 mb-3">{post.excerpt}</p>
        <span className="text-sm font-display font-semibold text-deepLavender flex items-center gap-1 group-hover:gap-2 transition-all">
          Read more <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </Link>
  );
}
