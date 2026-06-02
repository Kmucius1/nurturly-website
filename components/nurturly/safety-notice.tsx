import { Shield, AlertTriangle } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface SafetyNoticeProps {
  variant?: "banner" | "card" | "inline";
  className?: string;
}

export function SafetyNotice({ variant = "card", className }: SafetyNoticeProps) {
  if (variant === "inline") {
    return (
      <p className={cn("text-xs text-softGray flex items-center gap-1.5", className)}>
        <Shield className="w-3 h-3 text-sage flex-shrink-0" />
        Designed for supervised diaper changes only. Not for sleep or unattended use.
      </p>
    );
  }

  if (variant === "banner") {
    return (
      <div className={cn("bg-softMint/20 border border-softMint/40 rounded-2xl px-4 py-3 flex items-center gap-3", className)}>
        <Shield className="w-5 h-5 text-sage flex-shrink-0" />
        <p className="text-sm text-warmBrown font-body">
          <strong className="font-semibold">Safety first:</strong> Nurturly FoldAway™ is designed for supervised diaper changes only. Always keep one hand on baby. Never leave baby unattended.{" "}
          <Link href="/safety" className="underline underline-offset-2 hover:text-sage transition-colors">
            Read safety notes
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div className={cn("bg-softMint/10 border border-softMint/30 rounded-3xl p-6 md:p-8", className)}>
      <div className="flex items-start gap-4">
        <div className="p-3 bg-softMint/30 rounded-2xl flex-shrink-0">
          <Shield className="w-6 h-6 text-sage" />
        </div>
        <div>
          <h3 className="font-display font-bold text-lg text-warmBrown mb-2">Safety Notice</h3>
          <ul className="space-y-1.5 text-softGray font-body text-sm">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sage flex-shrink-0" />
              Designed for supervised diaper changes only
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sage flex-shrink-0" />
              Never leave baby unattended on any changing surface
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sage flex-shrink-0" />
              Always keep one hand on baby during use
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sage flex-shrink-0" />
              Not for sleep, play, sitting, or unattended use
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sage flex-shrink-0" />
              Final weight limits and safety instructions confirmed before launch
            </li>
          </ul>
          <div className="mt-4">
            <Link
              href="/safety"
              className="text-sm font-semibold text-sage hover:text-warmBrown transition-colors underline underline-offset-2"
            >
              Read full safety information →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
