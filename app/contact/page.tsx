import type { Metadata } from "next";
import { Hero }           from "@/components/sections/Hero";
import { ContactPanel }   from "@/components/sections/ContactPanel";
import { FaqPreview }     from "@/components/sections/FaqPreview";
import { CtaBand }        from "@/components/sections/CtaBand";
import { withCanonical }               from "@/lib/seo";
import { breadcrumb, faqPage, jsonLd } from "@/lib/structured-data";

/* ── Page metadata ─────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  ...withCanonical("/contact"),
  title:       "Contact",
  description:
    "Begin a private conversation with Soleta. Send a short note about your site and project — a senior architect responds personally, usually within two business days.",
};

/* ── Structured data ───────────────────────────────────────────────────────── */

const breadcrumbSchema = breadcrumb([
  { name: "Home",    path: "/" },
  { name: "Contact", path: "/contact" },
]);

/* FAQ schema derives from the same items rendered visibly on the page,
   so the machine-readable and human-readable content stay in sync.     */
const faqSchema = faqPage([
  {
    q: "Do I need a site to start a conversation?",
    a: "No. Some clients come to us before they have found land. We can advise on what to look for and what to avoid when evaluating a site for a Soleta home.",
  },
  {
    q: "What should I include in my first message to Soleta?",
    a: "Keep it brief. A location or region, a rough sense of what you want to build, and any constraints that feel important — budget, programme, timeline. We will ask for more when we need it.",
  },
  {
    q: "How quickly does Soleta reply to inquiries?",
    a: "We aim to respond to all inquiries within two business days. We read every message and reply in person — not with an automated response.",
  },
  {
    q: "Is there an obligation when I contact Soleta?",
    a: "None. A first conversation is exactly that — a conversation. We will tell you honestly whether and how we can help, and what a project might realistically involve.",
  },
  {
    q: "Does Soleta work with international clients?",
    a: "Yes. We have experience with clients and projects in multiple countries. Logistics and planning requirements vary by jurisdiction — tell us where your site is and we will advise on what is feasible.",
  },
  {
    q: "Can I request a Soleta catalog without starting a project?",
    a: "Yes. Note 'catalog request' in your message and we will send a digital copy. A printed version is available on request for clients who prefer it.",
  },
]);

/* ── Page-level content (no backend) ──────────────────────────────────────── */

const hero = {
  eyebrow: "Contact",
  heading: "Begin\na conversation",
  subtext:
    "Every Soleta home starts here — with a short note about your site, your ideas, and what you want the house to do for you.",
  size:  "medium" as const,
  align: "left" as const,
};

const panel = {
  eyebrow:   "Get in Touch",
  heading:   "We respond personally",
  body:
    "Send us a message using the form. There is no intake questionnaire, no automated response, and no sales process. A senior architect will read your inquiry and reply with a personal note — usually within two business days.",
  details: [
    { label: "Email",   value: "studio@soletahomes.com",  href: "mailto:studio@soletahomes.com" },
    { label: "Phone",   value: "+40 — number coming soon" },
    { label: "Studio",  value: "Romania — address on request" },
  ],
  locations: [
    { region: "Romania",          note: "primary operations" },
    { region: "Central Europe",   note: "active project base" },
    { region: "Western Europe",   note: "project delivery on request" },
    { region: "International",    note: "by arrangement" },
  ],
  trustNote:
    "Your inquiry is private. We do not share your details with third parties or add you to marketing lists.",
  theme: "warm" as const,
};

const faq = {
  eyebrow:  "Before You Write",
  heading:  "What's helpful to include",
  columns:  2 as const,
  theme:    "light" as const,
  items: [
    {
      q: "Do I need a site to start a conversation?",
      a: "No. Some clients come to us before they have found land. We can advise on what to look for and what to avoid when evaluating a site for a Soleta home.",
    },
    {
      q: "What should I include in my first message?",
      a: "Keep it brief. A location or region, a rough sense of what you want to build, and any constraints that feel important — budget, programme, timeline. We will ask for more when we need it.",
    },
    {
      q: "How quickly will you reply?",
      a: "We aim to respond to all inquiries within two business days. We read every message and reply in person — not with an automated response.",
    },
    {
      q: "Is there an obligation when I make contact?",
      a: "None. A first conversation is exactly that — a conversation. We will tell you honestly whether and how we can help, and what a project might realistically involve.",
    },
    {
      q: "Do you work with international clients?",
      a: "Yes. We have experience with clients and projects in multiple countries. Logistics and planning requirements vary by jurisdiction — tell us where your site is and we will advise on what is feasible.",
    },
    {
      q: "Can I request a catalog without starting a project?",
      a: "Yes. Note 'catalog request' in your message and we will send a digital copy. A printed version is available on request for clients who prefer it.",
    },
  ],
};

const cta = {
  heading:      "Ready to start?",
  body:         "Use the form above or send a direct email. Either way, a person will read it and reply.",
  primaryCta:   { label: "Request a Private Offer", href: "#contact-form" },
  secondaryCta: { label: "Explore house models",    href: "/house-models" },
  theme:        "dark" as const,
};

/* ── Page ─────────────────────────────────────────────────────────────────── */
export default function ContactPage() {
  return (
    <>
      <script {...jsonLd(breadcrumbSchema)} />
      <script {...jsonLd(faqSchema)} />

      {/* 1 ── Hero ─────────────────────────────────────────────────────────── */}
      <Hero {...hero} />

      {/* 2 ── Contact panel: info + form ─────────────────────────────────── */}
      <section id="contact-form" aria-label="Inquiry form section">
        <ContactPanel {...panel} />
      </section>

      {/* 3 ── Pre-inquiry FAQ ────────────────────────────────────────────── */}
      <FaqPreview {...faq} />

      {/* 4 ── CTA ────────────────────────────────────────────────────────── */}
      <CtaBand {...cta} />
    </>
  );
}
