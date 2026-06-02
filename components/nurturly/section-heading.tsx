import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  badgeColor?: "pink" | "blue" | "lavender" | "mint" | "yellow" | "peach" | "sage";
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

export function SectionHeading({
  badge,
  badgeColor = "lavender",
  title,
  titleHighlight,
  subtitle,
  center = true,
  className,
}: SectionHeadingProps) {
  const colorMap: Record<string, string> = {
    pink: "bg-babyPink/20 text-warmBrown border-babyPink/30",
    blue: "bg-babyBlue/20 text-warmBrown border-babyBlue/30",
    lavender: "bg-lavender/20 text-warmBrown border-lavender/30",
    mint: "bg-softMint/20 text-warmBrown border-softMint/30",
    yellow: "bg-butteryYellow/20 text-warmBrown border-butteryYellow/40",
    peach: "bg-peach/20 text-warmBrown border-peach/30",
    sage: "bg-sage/20 text-warmBrown border-sage/30",
  };

  return (
    <div className={cn(center ? "text-center" : "", "mb-10 md:mb-14", className)}>
      {badge && (
        <span
          className={cn(
            "inline-flex items-center font-display font-semibold rounded-full border text-sm px-3.5 py-1 mb-4",
            colorMap[badgeColor]
          )}
        >
          {badge}
        </span>
      )}
      <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-warmBrown leading-tight">
        {title}
        {titleHighlight && (
          <span
            className="ml-2"
            style={{
              background: "linear-gradient(135deg, #FFC4D6 0%, #B8A3E8 60%, #9ED7F5 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {titleHighlight}
          </span>
        )}
      </h2>
      {subtitle && (
        <p className="mt-4 text-softGray font-body text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
