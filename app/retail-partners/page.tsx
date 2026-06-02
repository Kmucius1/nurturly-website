"use client";

import { useState } from "react";
import { Store, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RETAIL_BUSINESS_TYPES, RETAIL_PARTNERSHIP_INTERESTS } from "@/lib/constants";

export default function RetailPartnersPage() {
  const [form, setForm] = useState({
    name: "",
    business: "",
    email: "",
    phone: "",
    website: "",
    businessType: "",
    location: "",
    interests: [] as string[],
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const toggleInterest = (interest: string) => {
    setForm((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Connect to CRM or email service
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false);
    setSubmitted(true);
  };

  const perks = [
    { emoji: "🏷️", title: "Wholesale pricing", body: "Competitive wholesale rates for qualified retail partners." },
    { emoji: "📦", title: "Dedicated support", body: "A dedicated partner contact for orders, marketing, and questions." },
    { emoji: "📸", title: "Brand assets", body: "Professional product photography, brand kit, and display materials." },
    { emoji: "🚀", title: "Launch priority", body: "Retail partners receive early access and launch priority allocation." },
    { emoji: "💗", title: "Co-marketing", body: "Featured placement in Nurturly marketing, social content, and email." },
    { emoji: "🌱", title: "Growing together", body: "Long-term partnership approach as the brand grows." },
  ];

  return (
    <main className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="bg-gradient-to-br from-softMint/20 via-cream to-babyBlue/10 pt-16 pb-20" aria-labelledby="retail-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-4 bg-softMint/30 rounded-full w-fit mx-auto mb-6">
            <Store className="w-8 h-8 text-sage" />
          </div>
          <span className="inline-flex items-center bg-softMint/20 text-warmBrown border border-softMint/30 font-display font-semibold rounded-full text-sm px-3.5 py-1 mb-5">
            Retail Partners
          </span>
          <h1 id="retail-heading" className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-warmBrown mb-5">
            Bring Nurturly FoldAway™ to your customers.
          </h1>
          <p className="text-softGray font-body text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            We&apos;re looking to connect with baby boutiques, registry consultants, postpartum professionals, and retailers who believe parents deserve products that make real life easier.
          </p>
        </div>
      </section>

      {/* Why Partner */}
      <section className="section-spacing" aria-labelledby="why-partner">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 id="why-partner" className="font-display font-extrabold text-3xl md:text-4xl text-warmBrown">
              Why partner with Nurturly?
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {perks.map((perk) => (
              <div key={perk.title} className="pastel-card p-5">
                <span className="text-3xl mb-3 block">{perk.emoji}</span>
                <h3 className="font-display font-bold text-warmBrown mb-1.5">{perk.title}</h3>
                <p className="text-sm text-softGray font-body">{perk.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="section-spacing bg-warmWhite" aria-labelledby="retail-form">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <div className="flex flex-col items-center text-center py-16 gap-5">
              <div className="p-5 bg-softMint/20 rounded-full">
                <CheckCircle className="w-12 h-12 text-sage" />
              </div>
              <h3 className="font-display font-bold text-2xl text-warmBrown">Inquiry received!</h3>
              <p className="text-softGray font-body max-w-sm">
                Thank you for your interest in partnering with Nurturly. We&apos;ll be in touch about next steps.
              </p>
            </div>
          ) : (
            <div className="bg-white rounded-3xl border border-warmBeige/40 shadow-card p-6 md:p-10">
              <h2 id="retail-form" className="font-display font-extrabold text-2xl text-warmBrown mb-6">
                Partner inquiry form
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="r-name" className="text-sm font-display font-semibold text-warmBrown">
                      Your name <span className="text-babyPink">*</span>
                    </label>
                    <Input id="r-name" type="text" required placeholder="Full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="rounded-xl border-warmBeige/60 h-11" />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="r-biz" className="text-sm font-display font-semibold text-warmBrown">
                      Business name <span className="text-babyPink">*</span>
                    </label>
                    <Input id="r-biz" type="text" required placeholder="Business name" value={form.business} onChange={(e) => setForm({ ...form, business: e.target.value })} className="rounded-xl border-warmBeige/60 h-11" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="r-email" className="text-sm font-display font-semibold text-warmBrown">
                      Email <span className="text-babyPink">*</span>
                    </label>
                    <Input id="r-email" type="email" required placeholder="your@business.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="rounded-xl border-warmBeige/60 h-11" />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="r-phone" className="text-sm font-display font-semibold text-warmBrown">
                      Phone
                    </label>
                    <Input id="r-phone" type="tel" placeholder="Phone number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="rounded-xl border-warmBeige/60 h-11" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="r-web" className="text-sm font-display font-semibold text-warmBrown">
                      Website
                    </label>
                    <Input id="r-web" type="url" placeholder="https://..." value={form.website} onChange={(e) => setForm({ ...form, website: e.target.value })} className="rounded-xl border-warmBeige/60 h-11" />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="r-location" className="text-sm font-display font-semibold text-warmBrown">
                      Location
                    </label>
                    <Input id="r-location" type="text" placeholder="City, State / Country" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} className="rounded-xl border-warmBeige/60 h-11" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="r-type" className="text-sm font-display font-semibold text-warmBrown">
                    Business type
                  </label>
                  <select
                    id="r-type"
                    value={form.businessType}
                    onChange={(e) => setForm({ ...form, businessType: e.target.value })}
                    className="w-full h-11 px-3 bg-white border border-warmBeige/60 rounded-xl text-sm text-warmBrown focus:outline-none focus:border-lavender transition-colors"
                  >
                    <option value="">Select business type</option>
                    {RETAIL_BUSINESS_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-display font-semibold text-warmBrown">Interested in</p>
                  <div className="flex flex-wrap gap-2">
                    {["Wholesale", "Affiliate", "Retail partnership", "Press", "Creator partnership"].map((interest) => (
                      <button
                        key={interest}
                        type="button"
                        onClick={() => toggleInterest(interest)}
                        className={`px-3.5 py-1.5 rounded-full text-sm font-display font-semibold border transition-colors ${
                          form.interests.includes(interest)
                            ? "bg-warmBrown text-white border-warmBrown"
                            : "bg-white text-softGray border-warmBeige/60 hover:border-warmBrown/30"
                        }`}
                      >
                        {interest}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="r-msg" className="text-sm font-display font-semibold text-warmBrown">
                    Tell us about your business
                  </label>
                  <Textarea
                    id="r-msg"
                    rows={4}
                    placeholder="A little about your store, audience, and why you&apos;re interested in carrying the FoldAway™..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="rounded-xl border-warmBeige/60 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  size="lg"
                  className="w-full bg-warmBrown hover:bg-warmBrown/90 text-white rounded-2xl font-display font-bold gap-2"
                >
                  {loading ? (
                    <><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</>
                  ) : (
                    "Submit Partner Inquiry"
                  )}
                </Button>
              </form>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
