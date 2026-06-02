"use client";

import { useState } from "react";
import { Mail, MessageSquare, Users, Newspaper, TestTube, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BRAND, CONTACT_REASONS } from "@/lib/constants";

const reasonIcons: Record<string, React.ElementType> = {
  "Product question": MessageSquare,
  "Waitlist help": Users,
  "Retail partnership": Users,
  "Press": Newspaper,
  "Product testing": TestTube,
  "Other": MessageSquare,
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Connect to email service (Resend, SendGrid, etc.)
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="bg-gradient-to-br from-peach/15 via-cream to-babyPink/10 pt-16 pb-16" aria-labelledby="contact-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center bg-peach/20 text-warmBrown border border-peach/30 font-display font-semibold rounded-full text-sm px-3.5 py-1 mb-5">
            Get in Touch
          </span>
          <h1 id="contact-heading" className="font-display font-extrabold text-4xl md:text-5xl text-warmBrown mb-4">
            We&apos;d love to hear from you.
          </h1>
          <p className="text-softGray font-body text-lg max-w-xl mx-auto">
            Product questions, waitlist help, press, retail partnerships, or product testing interest — we&apos;re here.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="section-spacing" aria-labelledby="contact-form">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Info */}
            <div>
              <h2 id="contact-topics" className="font-display font-bold text-xl text-warmBrown mb-6">
                How can we help?
              </h2>
              <div className="space-y-4">
                {[
                  { icon: MessageSquare, title: "Product questions", body: "Anything about the FoldAway™ — how it works, development status, what's included.", email: BRAND.email },
                  { icon: Users, title: "Waitlist help", body: "Issues with your waitlist signup or updating your information.", email: BRAND.supportEmail },
                  { icon: Users, title: "Retail partnerships", body: "Interested in carrying FoldAway™ in your store or platform.", email: BRAND.retailEmail },
                  { icon: Newspaper, title: "Press inquiries", body: "Media coverage, interviews, brand assets, and press kit requests.", email: BRAND.pressEmail },
                  { icon: TestTube, title: "Product testing interest", body: "If you&apos;re interested in parent testing or beta feedback programs.", email: BRAND.email },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 p-4 rounded-2xl bg-white border border-warmBeige/40 shadow-sm">
                    <div className="p-2 bg-lavender/15 rounded-xl flex-shrink-0 h-fit">
                      <item.icon className="w-4 h-4 text-deepLavender" />
                    </div>
                    <div>
                      <p className="font-display font-semibold text-warmBrown text-sm">{item.title}</p>
                      <p className="text-xs text-softGray font-body mt-0.5 mb-1.5">{item.body}</p>
                      <a href={`mailto:${item.email}`} className="text-xs text-deepLavender hover:text-warmBrown transition-colors font-display font-semibold">
                        {item.email}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div>
              {submitted ? (
                <div className="flex flex-col items-center text-center py-16 gap-5">
                  <div className="p-5 bg-softMint/20 rounded-full">
                    <CheckCircle className="w-12 h-12 text-sage" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-warmBrown">Message sent!</h3>
                  <p className="text-softGray font-body max-w-sm">
                    Thank you for reaching out. We&apos;ll be in touch soon.
                  </p>
                </div>
              ) : (
                <div className="bg-white rounded-3xl border border-warmBeige/40 shadow-card p-6 md:p-8">
                  <h2 id="contact-form" className="font-display font-bold text-xl text-warmBrown mb-6">
                    Send us a message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label htmlFor="c-name" className="text-sm font-display font-semibold text-warmBrown">
                          Name <span className="text-babyPink">*</span>
                        </label>
                        <Input
                          id="c-name"
                          type="text"
                          placeholder="Your name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="rounded-xl border-warmBeige/60 bg-cream h-11"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="c-email" className="text-sm font-display font-semibold text-warmBrown">
                          Email <span className="text-babyPink">*</span>
                        </label>
                        <Input
                          id="c-email"
                          type="email"
                          placeholder="your@email.com"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="rounded-xl border-warmBeige/60 bg-cream h-11"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="c-reason" className="text-sm font-display font-semibold text-warmBrown">
                        Reason for contacting
                      </label>
                      <select
                        id="c-reason"
                        value={formData.reason}
                        onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                        className="w-full h-11 px-3 bg-cream border border-warmBeige/60 rounded-xl text-sm text-warmBrown focus:outline-none focus:border-lavender transition-colors"
                      >
                        <option value="">Select a reason</option>
                        {CONTACT_REASONS.map((r) => (
                          <option key={r} value={r}>{r}</option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="c-message" className="text-sm font-display font-semibold text-warmBrown">
                        Message <span className="text-babyPink">*</span>
                      </label>
                      <Textarea
                        id="c-message"
                        placeholder="Tell us how we can help..."
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="rounded-xl border-warmBeige/60 bg-cream resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={loading}
                      size="lg"
                      className="w-full bg-warmBrown hover:bg-warmBrown/90 text-white rounded-2xl font-display font-bold gap-2"
                    >
                      {loading ? (
                        <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
                      ) : (
                        <><Mail className="w-4 h-4" /> Send Message</>
                      )}
                    </Button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
