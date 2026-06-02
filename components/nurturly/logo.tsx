"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "full" | "icon" | "horizontal";
  size?: "sm" | "md" | "lg";
  className?: string;
  href?: string;
}

export function Logo({ variant = "full", size = "md", className, href = "/" }: LogoProps) {
  const sizes = {
    sm: { face: 32, text: "text-lg", sub: "text-[8px]" },
    md: { face: 44, text: "text-2xl", sub: "text-[9px]" },
    lg: { face: 60, text: "text-3xl", sub: "text-[10px]" },
  };
  const s = sizes[size];

  const LogoMark = () => (
    <div className="flex items-center gap-2">
      {/* Baby Face SVG */}
      <div style={{ width: s.face, height: s.face }} className="relative flex-shrink-0">
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" width={s.face} height={s.face}>
          {/* Beanie base */}
          <ellipse cx="40" cy="28" rx="24" ry="14" fill="#AFC6A1" />
          {/* Beanie cuff */}
          <rect x="16" y="34" width="48" height="8" rx="4" fill="#8DB890" />
          {/* Beanie stripe */}
          <rect x="16" y="38" width="48" height="2" rx="1" fill="#AFC6A1" opacity="0.6" />
          {/* Sprout stem */}
          <line x1="40" y1="14" x2="40" y2="8" stroke="#4F3D33" strokeWidth="2" strokeLinecap="round" />
          {/* Sprout left leaf */}
          <ellipse cx="35" cy="9" rx="5" ry="3" fill="#BDEAD5" transform="rotate(-30 35 9)" />
          {/* Sprout right leaf */}
          <ellipse cx="45" cy="9" rx="5" ry="3" fill="#AFC6A1" transform="rotate(30 45 9)" />
          {/* Sprout tip */}
          <circle cx="40" cy="7" r="2.5" fill="#BDEAD5" />
          {/* Face circle */}
          <circle cx="40" cy="52" r="22" fill="#FFE4C8" />
          {/* Cheeks */}
          <circle cx="27" cy="57" r="5" fill="#FFC4D6" opacity="0.6" />
          <circle cx="53" cy="57" r="5" fill="#FFC4D6" opacity="0.6" />
          {/* Eyes */}
          <ellipse cx="33" cy="50" rx="3.5" ry="4" fill="#4F3D33" />
          <ellipse cx="47" cy="50" rx="3.5" ry="4" fill="#4F3D33" />
          {/* Eye shine */}
          <circle cx="34.5" cy="48.5" r="1.2" fill="white" />
          <circle cx="48.5" cy="48.5" r="1.2" fill="white" />
          {/* Nose */}
          <ellipse cx="40" cy="56" rx="2" ry="1.5" fill="#F0A080" opacity="0.8" />
          {/* Smile */}
          <path d="M33 61 Q40 68 47 61" stroke="#4F3D33" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        </svg>
      </div>
      {variant !== "icon" && (
        <div className="flex flex-col">
          <span
            className={cn(
              "font-display font-extrabold leading-none tracking-tight",
              s.text,
              "text-warmBrown"
            )}
            style={{
              background: "linear-gradient(135deg, #AFC6A1 0%, #8B6FD6 50%, #FFC4D6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            nurturly
          </span>
          <span
            className={cn(
              "font-display font-semibold tracking-[0.18em] uppercase text-softGray",
              s.sub
            )}
          >
            BABY ESSENTIALS
          </span>
        </div>
      )}
    </div>
  );

  return (
    <Link href={href} className={cn("inline-flex items-center", className)} aria-label="Nurturly Baby Essentials — Home">
      <LogoMark />
    </Link>
  );
}
