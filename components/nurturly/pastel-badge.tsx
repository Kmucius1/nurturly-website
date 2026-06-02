import { cn } from "@/lib/utils";

interface PastelBadgeProps {
  children: React.ReactNode;
  color?: "pink" | "blue" | "lavender" | "mint" | "yellow" | "peach" | "sage";
  className?: string;
  size?: "sm" | "md";
}

const colorMap = {
  pink: "bg-babyPink/20 text-warmBrown border-babyPink/30",
  blue: "bg-babyBlue/20 text-warmBrown border-babyBlue/30",
  lavender: "bg-lavender/20 text-warmBrown border-lavender/30",
  mint: "bg-softMint/20 text-warmBrown border-softMint/30",
  yellow: "bg-butteryYellow/20 text-warmBrown border-butteryYellow/40",
  peach: "bg-peach/20 text-warmBrown border-peach/30",
  sage: "bg-sage/20 text-warmBrown border-sage/30",
};

export function PastelBadge({ children, color = "lavender", className, size = "md" }: PastelBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center font-display font-semibold rounded-full border",
        size === "sm" ? "text-xs px-2.5 py-0.5" : "text-sm px-3.5 py-1",
        colorMap[color],
        className
      )}
    >
      {children}
    </span>
  );
}
