"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/nurturly/logo";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden p-2 rounded-xl hover:bg-warmBeige/30 transition-colors"
        aria-label="Open navigation menu"
        aria-expanded={open}
      >
        <Menu className="w-5 h-5 text-warmBrown" />
      </button>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-warmBrown/20 backdrop-blur-sm z-40"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-[300px] bg-warmWhite shadow-soft-lg z-50 transition-transform duration-300 flex flex-col",
          open ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="flex items-center justify-between p-5 border-b border-warmBeige/60">
          <Logo size="sm" />
          <button
            onClick={() => setOpen(false)}
            className="p-2 rounded-xl hover:bg-warmBeige/30 transition-colors"
            aria-label="Close navigation menu"
          >
            <X className="w-5 h-5 text-warmBrown" />
          </button>
        </div>

        <nav className="flex-1 px-5 py-6 overflow-y-auto">
          <ul className="space-y-1" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center font-display font-semibold text-warmBrown hover:text-deepLavender hover:bg-lavender/10 px-4 py-3 rounded-xl transition-colors text-base"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-6 pt-6 border-t border-warmBeige/60">
            <Button
              asChild
              className="w-full bg-warmBrown hover:bg-warmBrown/90 text-white rounded-2xl font-display font-bold gap-2"
              size="lg"
            >
              <Link href="#waitlist" onClick={() => setOpen(false)}>
                <Heart className="w-4 h-4" fill="currentColor" />
                Join the Founding Parent List
              </Link>
            </Button>
          </div>

          <div className="mt-4 space-y-1">
            <Link
              href="/blog"
              onClick={() => setOpen(false)}
              className="flex font-body text-sm text-softGray hover:text-warmBrown px-4 py-2 rounded-xl hover:bg-warmBeige/20 transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/development"
              onClick={() => setOpen(false)}
              className="flex font-body text-sm text-softGray hover:text-warmBrown px-4 py-2 rounded-xl hover:bg-warmBeige/20 transition-colors"
            >
              Product Development
            </Link>
            <Link
              href="/retail-partners"
              onClick={() => setOpen(false)}
              className="flex font-body text-sm text-softGray hover:text-warmBrown px-4 py-2 rounded-xl hover:bg-warmBeige/20 transition-colors"
            >
              Retail Partners
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
