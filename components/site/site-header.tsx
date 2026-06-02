"use client";

import Link from "next/link";
import { Search, User, ShoppingBag, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/nurturly/logo";
import { MobileNav } from "./mobile-nav";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-30 w-full transition-all duration-300",
        scrolled
          ? "bg-warmWhite/95 backdrop-blur-md shadow-card"
          : "bg-warmWhite/90 backdrop-blur-sm"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Logo size="sm" />

          {/* Center Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 text-sm font-display font-semibold text-warmBrown hover:text-deepLavender hover:bg-lavender/10 rounded-xl transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-1">
            <button
              className="hidden sm:flex p-2 rounded-xl hover:bg-warmBeige/30 transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5 text-warmBrown" />
            </button>
            <button
              className="hidden sm:flex p-2 rounded-xl hover:bg-warmBeige/30 transition-colors"
              aria-label="Account"
            >
              <User className="w-5 h-5 text-warmBrown" />
            </button>
            <button
              className="hidden sm:flex p-2 rounded-xl hover:bg-warmBeige/30 transition-colors"
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5 text-warmBrown" />
            </button>

            <Button
              asChild
              size="sm"
              className="hidden lg:flex bg-warmBrown hover:bg-warmBrown/90 text-white rounded-xl font-display font-bold gap-1.5 ml-2 h-9"
            >
              <Link href="#waitlist">
                <Heart className="w-3.5 h-3.5" fill="currentColor" />
                Join Waitlist
              </Link>
            </Button>

            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
