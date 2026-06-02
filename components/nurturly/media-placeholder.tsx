import { ImageIcon, Play, Video } from "lucide-react";
import { cn } from "@/lib/utils";

interface MediaPlaceholderProps {
  label?: string;
  type?: "image" | "video";
  aspectRatio?: "square" | "landscape" | "portrait" | "wide" | "hero";
  gradient?: string;
  className?: string;
  showIcon?: boolean;
}

const aspectRatioClasses = {
  square: "aspect-square",
  landscape: "aspect-video",
  portrait: "aspect-[3/4]",
  wide: "aspect-[16/9]",
  hero: "aspect-[4/3]",
};

const defaultGradients = [
  "from-babyPink/30 via-lavender/20 to-babyBlue/30",
  "from-softMint/30 via-babyBlue/20 to-lavender/30",
  "from-peach/30 via-babyPink/20 to-lavender/30",
  "from-butteryYellow/30 via-peach/20 to-babyPink/30",
  "from-lavender/30 via-babyPink/20 to-peach/30",
];

export function MediaPlaceholder({
  label,
  type = "image",
  aspectRatio = "landscape",
  gradient,
  className,
  showIcon = true,
}: MediaPlaceholderProps) {
  const gradientClass = gradient || defaultGradients[Math.floor(Math.random() * defaultGradients.length)];
  const Icon = type === "video" ? Video : ImageIcon;

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl bg-gradient-to-br flex flex-col items-center justify-center",
        aspectRatioClasses[aspectRatio],
        gradientClass,
        className
      )}
      role="img"
      aria-label={label || (type === "video" ? "Video placeholder" : "Image placeholder")}
    >
      {/* Decorative circles */}
      <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/20" />
      <div className="absolute bottom-6 left-6 w-8 h-8 rounded-full bg-white/15" />
      <div className="absolute top-1/3 left-4 w-6 h-6 rounded-full bg-white/10" />

      {showIcon && (
        <div className="flex flex-col items-center gap-3 z-10">
          <div className="p-3 bg-white/40 rounded-2xl backdrop-blur-sm">
            {type === "video" ? (
              <Play className="w-8 h-8 text-warmBrown/60" fill="currentColor" />
            ) : (
              <Icon className="w-8 h-8 text-warmBrown/50" />
            )}
          </div>
          {label && (
            <span className="text-xs font-display font-semibold text-warmBrown/70 text-center px-4 max-w-[160px] leading-tight">
              {label}
            </span>
          )}
        </div>
      )}

      {/* Stars decoration */}
      <span className="absolute top-3 left-5 text-warmBrown/20 text-lg">✦</span>
      <span className="absolute bottom-4 right-5 text-warmBrown/15 text-sm">✦</span>
    </div>
  );
}

export function VideoCard({
  label,
  src,
  gradient,
  className,
}: {
  label?: string;
  src?: string;
  gradient?: string;
  className?: string;
}) {
  return (
    <div className={cn("relative group cursor-pointer", className)}>
      <MediaPlaceholder
        label={label}
        type="video"
        aspectRatio="landscape"
        gradient={gradient}
        className="group-hover:scale-[1.02] transition-transform duration-300"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="p-5 bg-white/80 rounded-full shadow-soft group-hover:scale-110 transition-transform duration-300">
          <Play className="w-8 h-8 text-warmBrown" fill="currentColor" />
        </div>
      </div>
    </div>
  );
}
