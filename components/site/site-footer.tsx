import Link from "next/link";
import { Heart } from "lucide-react";
import { Logo } from "@/components/nurturly/logo";
import { NewsletterForm } from "./newsletter-form";
import { BRAND, FOOTER_COLUMNS } from "@/lib/constants";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9.35a8.16 8.16 0 0 0 4.76 1.52V7.41a4.85 4.85 0 0 1-1-.72z" />
    </svg>
  );
}

function PinterestIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-warmBrown text-warmWhite" role="contentinfo">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <Logo size="md" href="/" className="[&_span]:text-white" />
            </div>
            <p className="text-warmBeige/80 font-body text-sm leading-relaxed mb-6">
              Thoughtful products for real parent life.
            </p>

            {/* Newsletter */}
            <div>
              <p className="font-display font-semibold text-warmWhite mb-1">
                Let's stay in touch 💗
              </p>
              <p className="text-warmBeige/70 text-xs mb-3 font-body">
                Get product updates, early access, and helpful parenting tips.
              </p>
              <NewsletterForm />
            </div>

            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href={BRAND.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 hover:bg-white/20 rounded-xl transition-colors"
                aria-label="Nurturly on Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href={BRAND.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 hover:bg-white/20 rounded-xl transition-colors"
                aria-label="Nurturly on Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href={BRAND.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 hover:bg-white/20 rounded-xl transition-colors"
                aria-label="Nurturly on TikTok"
              >
                <TikTokIcon />
              </a>
              <a
                href={BRAND.pinterest}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 hover:bg-white/20 rounded-xl transition-colors"
                aria-label="Nurturly on Pinterest"
              >
                <PinterestIcon />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-display font-bold text-warmWhite mb-4 text-sm uppercase tracking-wider">
              Shop
            </h3>
            <ul className="space-y-2.5" role="list">
              {FOOTER_COLUMNS.shop.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-warmBeige/70 hover:text-warmWhite transition-colors font-body text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h3 className="font-display font-bold text-warmWhite mb-4 text-sm uppercase tracking-wider">
              Learn
            </h3>
            <ul className="space-y-2.5" role="list">
              {FOOTER_COLUMNS.learn.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-warmBeige/70 hover:text-warmWhite transition-colors font-body text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-display font-bold text-warmWhite mb-4 text-sm uppercase tracking-wider">
              Support
            </h3>
            <ul className="space-y-2.5" role="list">
              {FOOTER_COLUMNS.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-warmBeige/70 hover:text-warmWhite transition-colors font-body text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-display font-bold text-warmWhite mb-4 text-sm uppercase tracking-wider">
              Legal
            </h3>
            <ul className="space-y-2.5" role="list">
              {FOOTER_COLUMNS.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-warmBeige/70 hover:text-warmWhite transition-colors font-body text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Safety note */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-warmBeige/50 text-xs font-body text-center">
            Nurturly FoldAway™ is designed for supervised diaper changes only. Not for sleep, play, or unattended use.
            Always keep one hand on baby. Final safety instructions confirmed before launch.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-warmBeige/60 text-xs font-body">
            © {new Date().getFullYear()} Nurturly Baby Essentials. All rights reserved.
          </p>
          <p className="text-warmBeige/60 text-xs font-body flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-babyPink" fill="currentColor" /> for real parent life.
          </p>
        </div>
      </div>
    </footer>
  );
}
