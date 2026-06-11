"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  /** "light" = on a light background (default), "dark" = on a dark background */
  theme?: "light" | "dark";
  className?: string;
  href?: string;
}

const heights = { sm: 44, md: 56, lg: 72 };

export function Logo({ size = "md", theme = "light", className, href = "/" }: LogoProps) {
  const h = heights[size];
  return (
    <Link
      href={href}
      className={cn("inline-flex items-center", className)}
      aria-label="Nurturly Baby Essentials — Home"
    >
      {theme === "dark" ? (
        <span className="bg-white/10 rounded-2xl px-2 py-1">
          <Image
            src="/images/logo/nurturly-logo.png"
            alt="Nurturly Baby Essentials"
            height={h}
            width={Math.round(h * 2)}
            className="object-contain"
            priority
          />
        </span>
      ) : (
        <Image
          src="/images/logo/nurturly-logo.png"
          alt="Nurturly Baby Essentials"
          height={h}
          width={Math.round(h * 2)}
          className="object-contain mix-blend-multiply"
          priority
        />
      )}
    </Link>
  );
}
