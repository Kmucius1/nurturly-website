export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  category: string;
  icon: string;
  color: string;
  items: FAQItem[];
}

export const FAQ_DATA: FAQCategory[] = [
  {
    category: "Product",
    icon: "Package",
    color: "from-babyBlue/20 to-softMint/20",
    items: [
      {
        question: "What is Nurturly FoldAway™?",
        answer:
          "Nurturly FoldAway™ is a bedside changing station designed for supervised nighttime diaper changes. It slides under your mattress, raises to your preferred height, folds open when you need it, stores your essentials, and folds away when you're done.",
      },
      {
        question: "Is it available now?",
        answer:
          "Nurturly FoldAway™ is currently in development. You can join the Founding Parent List to receive product updates, early access news, and launch information.",
      },
      {
        question: "When will it launch?",
        answer:
          "We are actively working through prototype refinement, safety review, and final production planning. Launch timing will be communicated to our waitlist first. Final ship dates will be confirmed before any orders are taken.",
      },
      {
        question: "What does it include?",
        answer:
          "The FoldAway™ is expected to include the bedside frame, foldaway changing platform, wipeable changing pad, diaper and wipe storage compartments, a safety strap, and an instruction guide. Final included accessories will be confirmed before production.",
      },
      {
        question: "Does it fold away?",
        answer:
          "Yes. The changing platform folds flat when not in use, and the station can be lowered to tuck neatly under or beside the mattress. This keeps your sleeping area clear between diaper changes.",
      },
      {
        question: "Does it adjust in height?",
        answer:
          "Yes. The FoldAway™ is designed to adjust to different bed heights so it can align closely with your mattress during use. Final height adjustment range and mechanism will be confirmed before launch.",
      },
    ],
  },
  {
    category: "Safety",
    icon: "Shield",
    color: "from-softMint/20 to-sage/20",
    items: [
      {
        question: "Can my baby sleep on it?",
        answer:
          "No. Nurturly FoldAway™ is not a sleep surface. It is designed only for supervised diaper changes. Never use it for sleep, rest, or unattended use of any kind.",
      },
      {
        question: "Can I leave baby on it for a second?",
        answer:
          "No. Never leave your baby unattended on any changing surface, including the FoldAway™. Always keep at least one hand on baby during use and stay within arm's reach at all times.",
      },
      {
        question: "What is the weight limit?",
        answer:
          "Final weight limits will be determined during safety testing and confirmed before the product ships. We will clearly communicate all weight and age limits before launch.",
      },
      {
        question: "Is it for newborns?",
        answer:
          "The FoldAway™ is designed with newborn parents in mind. Final age and use guidance will be confirmed after safety testing and review before launch.",
      },
      {
        question: "What testing will it go through?",
        answer:
          "We are committed to completing a thorough safety review process before the product ships. Final safety testing details, product warnings, and instructions will be confirmed and communicated before any orders are fulfilled.",
      },
    ],
  },
  {
    category: "Compatibility",
    icon: "BedDouble",
    color: "from-lavender/20 to-babyPink/20",
    items: [
      {
        question: "What bed sizes does it fit?",
        answer:
          "We are designing for compatibility with common bed sizes including Twin, Full, Queen, King, and California King. Final compatibility will be confirmed during testing.",
      },
      {
        question: "Does it work with platform beds?",
        answer:
          "Platform bed compatibility will be confirmed during product testing. We are aware that platform beds have unique height profiles and are testing across different setups.",
      },
      {
        question: "Does it work with tall beds?",
        answer:
          "The height adjustment mechanism is designed to accommodate a range of bed heights. Final height adjustment range will be confirmed before launch.",
      },
      {
        question: "Does it work with low beds?",
        answer:
          "Low bed compatibility is part of our testing plan. Final minimum and maximum height details will be confirmed before launch.",
      },
      {
        question: "Does it work with adjustable beds?",
        answer:
          "Adjustable bed compatibility is something we are actively evaluating. Final compatibility details and any limitations will be confirmed and disclosed before launch.",
      },
    ],
  },
  {
    category: "Ordering",
    icon: "ShoppingBag",
    color: "from-peach/20 to-butteryYellow/20",
    items: [
      {
        question: "Can I pre-order?",
        answer:
          "Pre-ordering is not available yet. The product is still in development and we will not accept orders until we are confident in our production timeline, safety review, and final specifications.",
      },
      {
        question: "Can I join the waitlist?",
        answer:
          "Yes! Joining the Founding Parent List is the best way to stay updated. You'll receive product news, development updates, and early access information before the general public.",
      },
      {
        question: "Will there be early pricing?",
        answer:
          "We plan to offer Founding Parent pricing as a thank-you to our early supporters. Waitlist members will be the first to hear about pricing and exclusive early offers.",
      },
      {
        question: "Can I buy it as a gift?",
        answer:
          "Once the FoldAway™ is available, it will make a thoughtful baby registry or new parent gift. Join the waitlist to get notified when it's ready.",
      },
      {
        question: "Will it be on Amazon?",
        answer:
          "Our retail distribution plan, including any marketplace availability, will be finalized before launch. We'll share details with our waitlist community.",
      },
      {
        question: "Can retailers carry it?",
        answer:
          "Yes! We're actively looking for baby boutiques, registry consultants, and retail partners. Visit our Retail Partners page to submit your interest.",
      },
    ],
  },
];
