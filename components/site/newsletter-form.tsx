"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterForm() {
  return (
    <form
      className="flex gap-2"
      onSubmit={(e) => e.preventDefault()}
      aria-label="Newsletter signup"
    >
      <Input
        type="email"
        placeholder="your@email.com"
        className="bg-white/10 border-white/20 text-warmWhite placeholder:text-warmBeige/50 rounded-xl h-9 text-sm focus:border-lavender"
        aria-label="Email for newsletter"
      />
      <Button
        type="submit"
        size="sm"
        className="bg-lavender hover:bg-lavender/90 text-white rounded-xl font-display font-bold h-9 px-4"
      >
        Join
      </Button>
    </form>
  );
}
