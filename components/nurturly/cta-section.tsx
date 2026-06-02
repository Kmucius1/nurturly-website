import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heart, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { WaitlistForm } from "./waitlist-form";

interface CTASectionProps {
  variant?: "waitlist" | "simple" | "dual";
  title?: string;
  subtitle?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  gradient?: string;
  className?: string;
}

export function CTASection({
  variant = "simple",
  title = "Be first to get the bedside changer parents are already talking about.",
  subtitle = "Join the Founding Parent List for early access, launch updates, and behind-the-scenes development news.",
  primaryHref = "#waitlist",
  primaryLabel = "Join the Founding Parent List",
  secondaryHref = "/how-it-works",
  secondaryLabel = "See How It Works",
  gradient = "from-lavender/20 via-babyPink/10 to-softMint/20",
  className,
}: CTASectionProps) {
  if (variant === "waitlist") {
    return (
      <section
        id="waitlist"
        className={cn("section-spacing", className)}
        aria-labelledby="cta-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={cn("rounded-4xl bg-gradient-to-br p-8 md:p-14", gradient)}>
            <div className="max-w-2xl mx-auto text-center mb-10">
              <span className="inline-flex items-center bg-babyPink/20 text-warmBrown border border-babyPink/30 font-display font-semibold rounded-full text-sm px-3.5 py-1 mb-4">
                💗 Founding Parent List
              </span>
              <h2 id="cta-heading" className="font-display font-extrabold text-3xl md:text-4xl text-warmBrown mb-4">
                {title}
              </h2>
              <p className="text-softGray font-body text-lg">{subtitle}</p>
            </div>
            <div className="max-w-xl mx-auto bg-white/80 rounded-3xl p-6 md:p-8 shadow-soft">
              <WaitlistForm />
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (variant === "dual") {
    return (
      <section className={cn("section-spacing", className)}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={cn("rounded-4xl bg-gradient-to-br py-14 px-8", gradient)}>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-warmBrown mb-4">
              {title}
            </h2>
            {subtitle && (
              <p className="text-softGray font-body text-lg max-w-xl mx-auto mb-8">{subtitle}</p>
            )}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-warmBrown hover:bg-warmBrown/90 text-white rounded-2xl font-display font-bold text-base h-12 gap-2"
              >
                <Link href={primaryHref}>
                  <Heart className="w-5 h-5" fill="currentColor" />
                  {primaryLabel}
                </Link>
              </Button>
              {secondaryHref && (
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-warmBrown/30 text-warmBrown hover:bg-warmBrown/5 rounded-2xl font-display font-bold text-base h-12 gap-2"
                >
                  <Link href={secondaryHref}>
                    {secondaryLabel}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className={cn("flex flex-col sm:flex-row gap-4 items-center", className)}>
      <Button
        asChild
        size="lg"
        className="bg-warmBrown hover:bg-warmBrown/90 text-white rounded-2xl font-display font-bold text-base h-12 gap-2"
      >
        <Link href={primaryHref}>
          <Heart className="w-5 h-5" fill="currentColor" />
          {primaryLabel}
        </Link>
      </Button>
      {secondaryHref && (
        <Button
          asChild
          variant="outline"
          size="lg"
          className="border-warmBrown/30 text-warmBrown hover:bg-warmBrown/5 rounded-2xl font-display font-bold text-base h-12 gap-2"
        >
          <Link href={secondaryHref}>
            {secondaryLabel}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      )}
    </div>
  );
}
