"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import type { FAQItem } from "@/lib/faq-data";

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

export function FAQAccordion({ items, className }: FAQAccordionProps) {
  return (
    <Accordion type="single" collapsible className={cn("space-y-3", className)}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className="border border-warmBeige/60 rounded-2xl bg-white shadow-sm overflow-hidden data-[state=open]:shadow-card"
        >
          <AccordionTrigger className="px-6 py-4 text-left font-display font-semibold text-warmBrown hover:text-deepLavender transition-colors text-sm md:text-base hover:no-underline [&[data-state=open]]:text-deepLavender">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-5 text-softGray font-body text-sm md:text-base leading-relaxed">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
