"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { Heart, CheckCircle, Loader2 } from "lucide-react";
import {
  WAITLIST_PARENT_STATUS,
  WAITLIST_BED_SIZES,
  WAITLIST_FEATURES,
} from "@/lib/constants";

interface WaitlistFormProps {
  variant?: "full" | "compact";
  className?: string;
  onSuccess?: () => void;
}

export function WaitlistForm({ variant = "full", className, onSuccess }: WaitlistFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    parentStatus: "",
    babyInfo: "",
    bedSize: "",
    topFeature: "",
    consent: false,
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      setError("Please agree to receive updates to join the list.");
      return;
    }
    if (!formData.firstName || !formData.email) {
      setError("Please fill in your name and email.");
      return;
    }
    setLoading(true);
    setError("");

    // TODO: Connect to Supabase, Klaviyo, Resend, or Shopify here.
    // Example: await fetch('/api/waitlist', { method: 'POST', body: JSON.stringify(formData) });
    await new Promise((r) => setTimeout(r, 1200));

    setLoading(false);
    setSubmitted(true);
    onSuccess?.();
  };

  if (submitted) {
    return (
      <div className={cn("flex flex-col items-center text-center py-10 gap-5", className)}>
        <div className="p-5 bg-softMint/20 rounded-full">
          <CheckCircle className="w-12 h-12 text-sage" />
        </div>
        <div>
          <h3 className="font-display font-bold text-2xl text-warmBrown mb-2">
            You're on the list! 💗
          </h3>
          <p className="text-softGray font-body max-w-md mx-auto">
            We'll send FoldAway™ updates, launch details, and early access news soon.
            Thank you for being a founding parent supporter.
          </p>
        </div>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <form onSubmit={handleSubmit} className={cn("flex flex-col sm:flex-row gap-3", className)}>
        <Input
          type="text"
          placeholder="First name"
          value={formData.firstName}
          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
          required
          className="bg-white border-warmBeige/60 rounded-xl focus:border-lavender"
          aria-label="First name"
        />
        <Input
          type="email"
          placeholder="Email address"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="bg-white border-warmBeige/60 rounded-xl focus:border-lavender flex-1"
          aria-label="Email address"
        />
        <Button
          type="submit"
          disabled={loading}
          className="bg-warmBrown hover:bg-warmBrown/90 text-white rounded-xl font-display font-bold px-6 whitespace-nowrap"
        >
          {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Join Waitlist"}
        </Button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-5", className)} noValidate>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="wl-firstname" className="text-sm font-display font-semibold text-warmBrown">
            First name <span className="text-babyPink">*</span>
          </label>
          <Input
            id="wl-firstname"
            type="text"
            placeholder="Your first name"
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            required
            className="bg-white border-warmBeige/60 rounded-xl focus:border-lavender h-11"
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="wl-email" className="text-sm font-display font-semibold text-warmBrown">
            Email address <span className="text-babyPink">*</span>
          </label>
          <Input
            id="wl-email"
            type="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className="bg-white border-warmBeige/60 rounded-xl focus:border-lavender h-11"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="wl-status" className="text-sm font-display font-semibold text-warmBrown">
          I am a...
        </label>
        <select
          id="wl-status"
          value={formData.parentStatus}
          onChange={(e) => setFormData({ ...formData, parentStatus: e.target.value })}
          className="w-full h-11 px-3 bg-white border border-warmBeige/60 rounded-xl text-sm text-warmBrown focus:outline-none focus:border-lavender transition-colors"
        >
          <option value="">Select parent status</option>
          {WAITLIST_PARENT_STATUS.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="wl-baby" className="text-sm font-display font-semibold text-warmBrown">
          Baby due date or age
        </label>
        <Input
          id="wl-baby"
          type="text"
          placeholder="e.g. 3 months old, due in June"
          value={formData.babyInfo}
          onChange={(e) => setFormData({ ...formData, babyInfo: e.target.value })}
          className="bg-white border-warmBeige/60 rounded-xl focus:border-lavender h-11"
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="wl-bed" className="text-sm font-display font-semibold text-warmBrown">
          Bed size
        </label>
        <select
          id="wl-bed"
          value={formData.bedSize}
          onChange={(e) => setFormData({ ...formData, bedSize: e.target.value })}
          className="w-full h-11 px-3 bg-white border border-warmBeige/60 rounded-xl text-sm text-warmBrown focus:outline-none focus:border-lavender transition-colors"
        >
          <option value="">Select bed size</option>
          {WAITLIST_BED_SIZES.map((b) => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="wl-feature" className="text-sm font-display font-semibold text-warmBrown">
          What matters most to you?
        </label>
        <select
          id="wl-feature"
          value={formData.topFeature}
          onChange={(e) => setFormData({ ...formData, topFeature: e.target.value })}
          className="w-full h-11 px-3 bg-white border border-warmBeige/60 rounded-xl text-sm text-warmBrown focus:outline-none focus:border-lavender transition-colors"
        >
          <option value="">Select top feature</option>
          {WAITLIST_FEATURES.map((f) => (
            <option key={f} value={f}>{f}</option>
          ))}
        </select>
      </div>

      <div className="flex items-start gap-3 py-1">
        <Checkbox
          id="wl-consent"
          checked={formData.consent}
          onCheckedChange={(checked) => setFormData({ ...formData, consent: !!checked })}
          className="mt-0.5 border-warmBeige data-[state=checked]:bg-sage data-[state=checked]:border-sage"
        />
        <label htmlFor="wl-consent" className="text-sm text-softGray leading-snug cursor-pointer">
          I agree to receive Nurturly product updates and launch emails. You can unsubscribe anytime.
        </label>
      </div>

      {error && (
        <p className="text-sm text-red-500 bg-red-50 rounded-xl px-4 py-2">{error}</p>
      )}

      <Button
        type="submit"
        disabled={loading}
        size="lg"
        className="w-full bg-warmBrown hover:bg-warmBrown/90 text-white rounded-2xl font-display font-bold text-base h-12 gap-2"
      >
        {loading ? (
          <><Loader2 className="w-5 h-5 animate-spin" /> Joining the list...</>
        ) : (
          <><Heart className="w-5 h-5" fill="currentColor" /> Join the Founding Parent List</>
        )}
      </Button>
    </form>
  );
}
