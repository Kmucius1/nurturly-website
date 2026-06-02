export interface LegalPage {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: { heading: string; content: string }[];
}

export const LEGAL_PAGES: Record<string, LegalPage> = {
  "privacy-policy": {
    title: "Privacy Policy",
    lastUpdated: "May 2025",
    intro:
      "Nurturly Baby Essentials (\"Nurturly\", \"we\", \"us\", or \"our\") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website or interact with our services. This policy should be reviewed by qualified legal counsel before final use.",
    sections: [
      {
        heading: "Information We Collect",
        content:
          "We may collect information you provide directly, including your name, email address, and any information you share through forms on our website. We may also collect information automatically through cookies and similar technologies, such as your IP address, browser type, and browsing behavior on our site. We collect waitlist signups, contact form submissions, and retail partner inquiries.",
      },
      {
        heading: "How We Use Your Information",
        content:
          "We use the information we collect to: communicate with you about the Nurturly FoldAway™ product and launch updates; respond to your inquiries; send product updates and launch emails to waitlist members who have consented; improve our website and services; comply with legal obligations; and process retail partner and press inquiries.",
      },
      {
        heading: "Email Communications",
        content:
          "When you join our waitlist or subscribe to updates, you agree to receive emails about our product development and launch. You may unsubscribe at any time by clicking the unsubscribe link in any email or by contacting us directly. We will not sell or rent your email address to third parties.",
      },
      {
        heading: "Cookies and Tracking",
        content:
          "Our website may use cookies and similar tracking technologies to improve functionality and understand how visitors use our site. You can control cookie settings through your browser preferences. Disabling cookies may affect some features of the website.",
      },
      {
        heading: "Third-Party Services",
        content:
          "We may use third-party services for email delivery, analytics, and other functions. These providers may have access to your personal information only as necessary to perform their services, and they are required to protect your information in accordance with applicable law.",
      },
      {
        heading: "Data Security",
        content:
          "We take reasonable measures to protect the information we collect. However, no method of transmission over the internet or electronic storage is completely secure. We cannot guarantee absolute security of your information.",
      },
      {
        heading: "Children's Privacy",
        content:
          "Our website is intended for adults and parents. We do not knowingly collect personal information from children under 13. If we become aware that we have collected information from a child under 13, we will take steps to delete it.",
      },
      {
        heading: "Your Rights",
        content:
          "Depending on your location, you may have rights regarding your personal information, including the right to access, correct, or delete information we hold about you. To exercise these rights, please contact us at hello@nurturly.com.",
      },
      {
        heading: "Changes to This Policy",
        content:
          "We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the updated policy on our website. Your continued use of the site after changes are posted constitutes your acceptance of the updated policy.",
      },
      {
        heading: "Contact Us",
        content:
          "If you have questions about this Privacy Policy or your personal information, please contact us at hello@nurturly.com. Note: Final legal copy should be reviewed by qualified legal counsel before publication.",
      },
    ],
  },

  "terms-of-service": {
    title: "Terms of Service",
    lastUpdated: "May 2025",
    intro:
      "These Terms of Service govern your use of the Nurturly Baby Essentials website. By accessing or using our site, you agree to these terms. This document should be reviewed by qualified legal counsel before final use.",
    sections: [
      {
        heading: "Use of the Website",
        content:
          "You may use this website for lawful purposes only. You agree not to use the site in any way that could damage, disable, or impair the site, or interfere with other users. You may not attempt to gain unauthorized access to any part of the site.",
      },
      {
        heading: "Product Information and Availability",
        content:
          "Nurturly FoldAway™ is currently in development. All product information, specifications, images, and descriptions on this website are subject to change. Nothing on this website constitutes an offer to sell or a binding agreement. Final product specifications, pricing, and availability will be communicated before any orders are taken.",
      },
      {
        heading: "Waitlist and Pre-Launch Signups",
        content:
          "Joining the waitlist does not constitute a purchase, reservation, or binding agreement of any kind. It signifies your interest in receiving product updates and early access information. We reserve the right to modify waitlist terms, pricing, and availability at any time.",
      },
      {
        heading: "Intellectual Property",
        content:
          "All content on this website, including text, images, graphics, logos, and product names, is the property of Nurturly Baby Essentials or its licensors and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.",
      },
      {
        heading: "Disclaimer of Warranties",
        content:
          "This website and its content are provided \"as is\" without warranties of any kind, either expressed or implied. We make no warranties regarding the accuracy, completeness, or usefulness of any content on the site.",
      },
      {
        heading: "Limitation of Liability",
        content:
          "To the fullest extent permitted by law, Nurturly Baby Essentials shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the website or reliance on any content.",
      },
      {
        heading: "Changes to Terms",
        content:
          "We reserve the right to update these Terms of Service at any time. Changes will be effective when posted. Continued use of the website after changes are posted constitutes your acceptance of the new terms.",
      },
      {
        heading: "Contact",
        content:
          "For questions about these terms, contact us at hello@nurturly.com. Note: Final legal copy should be reviewed by qualified legal counsel before publication.",
      },
    ],
  },

  "shipping-policy": {
    title: "Shipping Policy",
    lastUpdated: "May 2025",
    intro:
      "Nurturly FoldAway™ is currently in development and is not yet available for purchase or shipment. This Shipping Policy will be updated with complete details before any orders are taken. This document should be reviewed by qualified legal counsel before final use.",
    sections: [
      {
        heading: "Current Status",
        content:
          "Nurturly FoldAway™ is a pre-launch product currently in development. No orders are being accepted at this time. All shipping policies, rates, timelines, and details will be finalized and published before the product launches.",
      },
      {
        heading: "Estimated Shipping Timeline",
        content:
          "We do not have a confirmed ship date at this time. Launch timing will be communicated to waitlist members first. We will not accept orders until we are confident in our production timeline and ability to fulfill.",
      },
      {
        heading: "Shipping Regions",
        content:
          "Our initial shipping region and any international shipping availability will be confirmed before launch. Waitlist members will receive updates as shipping plans are finalized.",
      },
      {
        heading: "Shipping Rates",
        content:
          "Shipping rates and any free shipping thresholds will be published before orders open. We are committed to fair and transparent shipping pricing.",
      },
      {
        heading: "Order Tracking",
        content:
          "When orders become available, customers will receive shipping confirmation emails with tracking information. Details will be confirmed before launch.",
      },
      {
        heading: "Questions",
        content:
          "For shipping questions, contact us at support@nurturly.com. Note: Final legal copy should be reviewed by qualified legal counsel before publication.",
      },
    ],
  },

  "return-policy": {
    title: "Return Policy",
    lastUpdated: "May 2025",
    intro:
      "Nurturly FoldAway™ is currently in development and is not yet available for purchase. This Return Policy will be updated with complete details before any orders are taken. This document should be reviewed by qualified legal counsel before final use.",
    sections: [
      {
        heading: "Current Status",
        content:
          "No orders are being accepted at this time. Return and refund policies will be published in full before any orders open.",
      },
      {
        heading: "Return Window",
        content:
          "We plan to offer a return window for customers who are not satisfied with their purchase. Specific terms will be confirmed before launch.",
      },
      {
        heading: "Return Conditions",
        content:
          "Return conditions, including acceptable product condition, original packaging requirements, and any restocking fees, will be published before orders open.",
      },
      {
        heading: "How to Initiate a Return",
        content:
          "Return instructions and contact information will be provided at time of launch.",
      },
      {
        heading: "Refunds",
        content:
          "Refund timelines and methods will be confirmed before launch. We are committed to fair and transparent return and refund handling.",
      },
      {
        heading: "Contact",
        content:
          "For questions about returns, contact us at support@nurturly.com. Note: Final legal copy should be reviewed by qualified legal counsel before publication.",
      },
    ],
  },

  "warranty-policy": {
    title: "Warranty Policy",
    lastUpdated: "May 2025",
    intro:
      "Nurturly FoldAway™ is currently in development. Warranty terms will be finalized before the product launches. This document should be reviewed by qualified legal counsel before final use.",
    sections: [
      {
        heading: "Current Status",
        content:
          "Warranty coverage, terms, and duration will be confirmed after product safety review and before any orders are accepted.",
      },
      {
        heading: "Warranty Coverage",
        content:
          "We plan to provide warranty coverage for manufacturing defects and product issues arising from normal use. Specific coverage details will be published before launch.",
      },
      {
        heading: "What Is Not Covered",
        content:
          "The warranty will not cover damage resulting from misuse, modification, failure to follow product instructions, or use outside the intended supervised diaper-changing purpose. Final exclusions will be published before launch.",
      },
      {
        heading: "How to Make a Warranty Claim",
        content:
          "Warranty claim procedures will be provided before launch.",
      },
      {
        heading: "Contact",
        content:
          "Warranty questions can be directed to support@nurturly.com. Note: Final legal copy should be reviewed by qualified legal counsel before publication.",
      },
    ],
  },

  "product-safety-disclaimer": {
    title: "Product Safety Disclaimer",
    lastUpdated: "May 2025",
    intro:
      "Please read this safety disclaimer carefully before using or purchasing Nurturly FoldAway™.",
    sections: [
      {
        heading: "Intended Use",
        content:
          "Nurturly FoldAway™ is intended only for supervised diaper changes. It is not intended for sleep, play, sitting, or unattended use of any kind. Never leave a baby unattended on any changing surface. Always follow final product instructions, warnings, and weight limits.",
      },
      {
        heading: "Always Supervise Baby",
        content:
          "Never leave baby unattended on the changing station or any changing surface at any time. Always keep at least one hand on baby during changes. Falls from changing surfaces can cause serious injury.",
      },
      {
        heading: "Not a Sleep Surface",
        content:
          "Nurturly FoldAway™ is not a sleep surface. Do not allow baby to sleep, rest, or be placed for any purpose other than supervised diaper changes. Safe sleep practices require a firm, flat, separate sleep surface designed for infant sleep.",
      },
      {
        heading: "Not for Play or Sitting",
        content:
          "Do not allow baby to sit, play, crawl, or roll on the changing station. This product is designed only for the specific purpose of supervised diaper changes.",
      },
      {
        heading: "Weight and Age Limits",
        content:
          "Final weight limits and age guidance will be determined through safety testing and will be clearly communicated before the product ships. Do not use the product beyond its confirmed weight and age limits.",
      },
      {
        heading: "Product Development Status",
        content:
          "Nurturly FoldAway™ is currently in development. Final safety details, product warnings, instructions, use limits, and compatibility guidance will be finalized before shipment. No product has been shipped at this time.",
      },
      {
        heading: "Safety Rules Summary",
        content:
          "1. Supervised diaper changes only. 2. Never leave baby unattended. 3. Keep one hand on baby at all times. 4. Not for sleep, play, or sitting. 5. Follow all final weight and age limits. 6. Lock all adjustments before use. 7. Follow complete product instructions included with the product.",
      },
      {
        heading: "Questions",
        content:
          "For safety questions, contact us at hello@nurturly.com. Note: Final safety copy should be reviewed by a qualified product safety professional and legal counsel before publication.",
      },
    ],
  },

  "preorder-terms": {
    title: "Pre-Order Terms",
    lastUpdated: "May 2025",
    intro:
      "Nurturly FoldAway™ is not currently available for pre-order. This page outlines the terms that will apply when pre-orders open. These terms should be reviewed by qualified legal counsel before final use.",
    sections: [
      {
        heading: "Product Development Status",
        content:
          "Nurturly FoldAway™ is currently in development. The product has not been completed, finalized, or safety-tested. No orders are being accepted at this time.",
      },
      {
        heading: "Final Specifications May Change",
        content:
          "Product specifications, dimensions, materials, colors, included accessories, and all other product details are subject to change before the final production version. We will communicate material changes to waitlist members and, when orders are open, to pre-order customers.",
      },
      {
        heading: "Estimated Shipping Dates",
        content:
          "Any estimated shipping dates provided are subject to change based on development progress, manufacturing timelines, safety testing requirements, and other factors outside our control. We will not ship the product until safety testing and review are complete.",
      },
      {
        heading: "Safety Testing and Readiness",
        content:
          "We are committed to completing a thorough safety review process before the product ships. Orders will not be fulfilled until we are confident in the product's safety and quality. Safety testing must be completed to our satisfaction before any shipment.",
      },
      {
        heading: "Refund Policy for Pre-Orders",
        content:
          "When pre-orders open, customers will have the ability to request a full refund at any time before shipment. Refund terms will be confirmed before orders open.",
      },
      {
        heading: "Communication Expectations",
        content:
          "We will communicate with pre-order customers and waitlist members about product development progress, timeline changes, and any significant updates. We are committed to transparency throughout the development process.",
      },
      {
        heading: "Contact",
        content:
          "Questions about pre-order terms can be directed to hello@nurturly.com. Note: Final legal copy should be reviewed by qualified legal counsel before publication.",
      },
    ],
  },

  accessibility: {
    title: "Accessibility Statement",
    lastUpdated: "May 2025",
    intro:
      "Nurturly Baby Essentials is committed to ensuring that our website is accessible to all users, including those with disabilities.",
    sections: [
      {
        heading: "Our Commitment",
        content:
          "We strive to make our website usable by people of all abilities and disabilities. We are working to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards.",
      },
      {
        heading: "Accessibility Features",
        content:
          "Our website includes: semantic HTML for clear structure and navigation; text alternatives for non-text content; clear headings and navigation landmarks; keyboard navigability; sufficient color contrast; responsive design for various screen sizes and devices; accessible form labels and instructions.",
      },
      {
        heading: "Ongoing Efforts",
        content:
          "Accessibility is an ongoing effort. We regularly review our website for accessibility improvements. When we create new content or update existing content, we work to meet accessibility standards.",
      },
      {
        heading: "Known Limitations",
        content:
          "We are aware that some aspects of our website may not yet meet all accessibility standards. We are actively working to address these issues. If you encounter a specific issue, please contact us so we can address it.",
      },
      {
        heading: "Feedback and Contact",
        content:
          "If you experience difficulty accessing any content on our website, or have suggestions for improving accessibility, please contact us at hello@nurturly.com. We take all feedback seriously and will work to address issues promptly.",
      },
      {
        heading: "Third-Party Content",
        content:
          "Some third-party content embedded on our site (such as video players or social media widgets) may not meet the same accessibility standards. We encourage feedback if you encounter issues with any embedded content.",
      },
    ],
  },
};
