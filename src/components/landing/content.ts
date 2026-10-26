export const LOGO_SRC = "https://www.aha-innovations.com/logomark-red.svg";

export const CHECKOUT = {
  basic: "https://buy.stripe.com/dRmaEYdjufeKc67cIu4802F",
  agency: "https://buy.stripe.com/28E3cw5R26Iedab0ZM4802E",
  enterprise: "https://buy.stripe.com/aFaaEYenyeaGfij0ZM4802D",
  special: "https://buy.stripe.com/28EbJ21AM4A65HJcIu4802C",
};

export const heroStats = [
  { num: "5,000+", label: "Businesses on platform" },
  { num: "6-in-1", label: "AI capabilities, one dashboard" },
  { num: "Free", label: "Funnel, Workflow & Email AI builders" },
];

export const industries = [
  "🧹 Cleaning & Maintenance",
  "🐾 Pet Care",
  "🏠 Real Estate",
  "💼 VA Agencies",
  "+ Any Service Business",
];

export const aiStack = [
  {
    icon: "✍️",
    name: "AI writing tool (ChatGPT+)",
    purpose: "Emails, social posts, copy",
    price: "$20/mo",
  },
  { icon: "💬", name: "AI chat widget", purpose: "Website visitor messages", price: "$49/mo" },
  { icon: "📞", name: "AI call answering", purpose: "After-hours phone coverage", price: "$99/mo" },
  {
    icon: "⭐",
    name: "AI review management",
    purpose: "Google / Facebook replies",
    price: "$99/mo",
  },
  { icon: "🏗️", name: "AI funnel builder", purpose: "Landing pages & funnels", price: "$49/mo" },
];

export const aiCapabilities = [
  {
    icon: "💬",
    replaces: "Replaces AI chatbot tools ($49+/mo)",
    title: "AI That Answers Every Message — 24/7",
    desc: "Your AI handles incoming messages across SMS, website chat, Facebook, and Instagram DMs — automatically, instantly, at any hour. It doesn't just reply generically. It knows your services, your pricing, and your clients.",
    insight:
      '"A lead texted at 11pm. AI replied in 40 seconds, answered their question, and booked an appointment. I saw it in the morning — already done."',
    badge:
      "✓ Pay per use on Basic · 1,000 replies/mo on Agency · Unlimited on Enterprise (fair use)",
  },
  {
    icon: "📞",
    replaces: "Replaces call answering services ($99+/mo)",
    title: "AI That Answers Your Phone — Every Call, Every Time",
    desc: "Voice AI picks up calls when you're busy or after hours. It introduces itself, listens to the caller, answers common questions, collects information, and books appointments — then sends you a summary of the conversation.",
    insight:
      "No more missed calls. No more lost jobs because you were on a ladder when the phone rang.",
    badge: "✓ Pay per use on Basic · 100 min/mo on Agency · Unlimited on Enterprise (fair use)",
  },
  {
    icon: "✍️",
    replaces: "Replaces ChatGPT, Jasper, Copy.ai ($20–49/mo)",
    title: "AI That Writes Your Content — In Your Voice",
    desc: "Generate emails, social media posts, follow-up sequences, and campaign copy without staring at a blank screen. Unlike generic AI tools, Content AI knows your business name, your services, and the context of your clients.",
    insight:
      "Stop copy-pasting from ChatGPT. Your AI already knows what to say — and who to say it to.",
    badge: "✓ Pay per use on Basic · Unlimited on Agency & Enterprise",
  },
  {
    icon: "⭐",
    replaces: "Replaces review management platforms ($99+/mo)",
    title: "AI That Responds to Every Review — Personally",
    desc: "Reviews AI reads every new Google and Facebook review and writes a personalized, professional response — automatically. Positive reviews, negative reviews, everything gets a thoughtful reply. Your reputation runs on autopilot.",
    insight:
      "Your competitors are ignoring reviews. You're responding to every one — without writing a single word yourself.",
    badge: "✓ Pay per use on Basic · Unlimited on Agency & Enterprise",
  },
  {
    icon: "🏗️",
    replaces: "Replaces AI funnel builders ($49+/mo)",
    title: "AI That Builds Your Marketing Funnels — From a Prompt",
    desc: 'Describe what you need — "a lead capture page for house cleaning in Austin" — and Funnel AI builds the page, the copy, and the form. It connects directly to your CRM so every submission lands in your pipeline automatically.',
    insight: "A landing page that used to take a designer 3 days now takes your AI 3 minutes.",
    badge: "✓ Free on all plans",
  },
  {
    icon: "⚡",
    replaces: "Replaces Zapier + manual automation setup",
    title: "AI That Builds Your Automations — Just Describe What You Want",
    desc: 'Tell Workflow AI what you want to happen: "When a new lead comes in, text them immediately, add them to the pipeline, and send a follow-up email in 24 hours." It builds the workflow. You approve it. Done.',
    insight: "You shouldn't need to be a developer to automate your business. Now you don't.",
    badge: "✓ Free on all plans",
  },
];

export const connectedPoints = [
  {
    icon: "👤",
    title: "It knows your clients",
    desc: "Names, history, last contact, open quotes, past jobs — all of it is available to your AI before it responds.",
  },
  {
    icon: "💬",
    title: "It knows your conversations",
    desc: "Every text, email, and call is in the system. Your AI never gives a generic reply — it knows what was already said.",
  },
  {
    icon: "📊",
    title: "It knows your pipeline",
    desc: "When a lead is ready to close, your AI knows. When a client hasn't heard from you in 30 days, your AI knows that too.",
  },
];

export const usageItems = [
  {
    num: "$20",
    head: "Monthly AI credits",
    desc: "Powers texts, calls, emails and AI tools. Enterprise gets $30.",
    tag: "Basic & Agency",
  },
  {
    num: "~500",
    head: "Texts from one example mix",
    desc: "Your AI drafts and sends follow-ups and reminders. ~600 on Agency, ~1,000 on Enterprise.",
    tag: "Basic example",
  },
  {
    num: "~150",
    head: "Call minutes",
    desc: "Voice AI answers and makes calls on your local number. ~250 on Enterprise.",
    tag: "Basic example",
  },
  {
    num: "~1,000",
    head: "Emails",
    desc: "Written by AI, sent by the platform. ~7,500 on Agency, ~10,000 on Enterprise.",
    tag: "Basic example",
  },
  {
    num: "~5",
    head: "Ask AI or AI Studio sessions",
    desc: "Ask questions and build with AI on your own data.",
    tag: "Basic example",
  },
  {
    num: "1",
    head: "Local phone number",
    desc: "The number your AI calls from and receives calls on.",
    tag: "All plans",
  },
];

type PlanSection = { label: string; items?: string[]; note?: string[] };

export type Plan = {
  tier: string;
  price: string;
  tagline: string;
  sections: PlanSection[];
  cta: string;
  href: string;
  featured?: boolean;
  /** Show the $149 special offer before sending the buyer to checkout. */
  upsell?: boolean;
};

export const plans: Plan[] = [
  {
    tier: "AI Basic",
    price: "$97",
    tagline:
      "Your full platform plus free AI builders. Run AI tools pay-as-you-go from your monthly credits.",
    sections: [
      {
        label: "Platform",
        items: [
          "1 business",
          "15 pipelines",
          "Unlimited sales funnels & websites",
          "Basic automations",
          "100 contacts",
          "20 team members",
        ],
      },
      { label: "Free AI builders", items: ["Funnel AI", "Workflow AI", "Email AI"] },
      {
        label: "AI tools, pay as you go",
        note: [
          "AI chat agent, AI voice agent, Ask AI, AI Studio, Content AI, and Reviews AI, all billed per use from your credits.",
        ],
      },
      {
        label: "$20 monthly credits",
        note: [
          "One example mix: 1 local phone number · ~500 texts · ~150 call minutes · ~1,000 emails · ~5 Ask AI or AI Studio sessions.",
          "Or, used on one thing only: up to ~1,390 texts or ~960 call minutes.",
        ],
      },
    ],
    cta: "Get AI Basic — $97/mo →",
    href: CHECKOUT.basic,
    upsell: true,
  },
  {
    tier: "AI Agency",
    price: "$129",
    tagline: "Everything in Basic, plus the AI Employee Growth package and advanced tools.",
    sections: [
      {
        label: "Everything in Basic, plus",
        items: [
          "50 pipelines",
          "Advanced workflow triggers & actions",
          "Advanced analytics",
          "Reputation management",
          "5,000 contacts",
          "50 team members",
        ],
      },
      {
        label: "AI Employee Growth included",
        items: [
          "AI chat agent: 1,000 replies/month",
          "AI voice agent: 100 minutes/month (inbound, outbound, and website widget)",
          "Ask AI & AI Studio: usage included, refreshes every 5 hours",
          "Unlimited Content AI & Reviews AI",
          "100 Managed AI Agent runs/month",
          "AI prompt optimizers for chat and voice agents",
        ],
      },
      {
        label: "$20 monthly credits",
        note: ["Example: 1 number + ~600 texts + ~150 call minutes + ~7,500 emails."],
      },
    ],
    cta: "Get AI Agency — $129/mo →",
    href: CHECKOUT.agency,
    featured: true,
    upsell: true,
  },
  {
    tier: "AI Enterprise",
    price: "$199",
    tagline:
      "Everything in Agency, plus AI Employee Unlimited, higher limits and done-for-you onboarding.",
    sections: [
      {
        label: "Everything in Agency, plus",
        items: [
          "Unlimited pipelines, contacts & team members",
          "High-volume email (fair use)",
          "Priority support",
          "Done-for-you onboarding",
        ],
      },
      {
        label: "AI Employee Unlimited included",
        items: [
          "Unlimited AI chat & voice agents (fair use)",
          "3× Ask AI & AI Studio usage",
          "1,000 Managed AI Agent runs/month",
          "Unlimited Content AI & Reviews AI",
          "Unlimited AI prompt optimizers",
        ],
      },
      {
        label: "$30 monthly credits",
        note: ["Example: 1 number + ~1,000 texts + ~250 call minutes + ~10,000 emails."],
      },
    ],
    cta: "Get AI Enterprise — $199/mo →",
    href: CHECKOUT.enterprise,
  },
];

export const specialOffer = [
  "Everything in AI Agency: 50 pipelines, 5,000 contacts, 50 team members, advanced workflows & analytics, reputation management",
  "AI Employee Unlimited: unlimited chat & voice agents, 3× Ask AI & AI Studio, and 1,000 agent runs",
  "$20 monthly credits",
  "1 business, standard support",
];

export const steps = [
  {
    title: "Choose your plan",
    desc: "Pick the tier that fits your business. Checkout takes 3 minutes. Your account is ready instantly.",
  },
  {
    title: "We configure your AI",
    desc: "In your welcome call, we train your AI on your business — your services, pricing, tone, and common client questions.",
  },
  {
    title: "Your AI starts working",
    desc: "From that moment, your AI answers messages, responds to reviews, handles calls, and writes your content — automatically.",
  },
];

export const testimonials = [
  {
    quote:
      "\"I cancelled ChatGPT, my chatbot tool, and my review management platform. AHA's AI does all three — and because it's connected to my CRM, the responses are actually relevant to each client. I'm saving $160/month.\"",
    initials: "MR",
    color: "var(--red)",
    name: "Marcus R.",
    biz: "Cleaning Business, Texas",
  },
  {
    quote:
      '"The Voice AI is the one that got me. I used to miss calls constantly when I was with clients. Now my AI picks up, answers their questions, and books them. I\'ve gained 3 new recurring clients this month alone from calls I would have missed."',
    initials: "JL",
    color: "#7c3aed",
    name: "Jennifer L.",
    biz: "Pet Care Services, Florida",
  },
  {
    quote:
      '"As a VA, I needed to show clients a professional AI system — not five different tools duct-taped together. AHA is the one platform I can confidently put in front of any client. The automation saves us about 15 hours a week across the team."',
    initials: "SC",
    color: "var(--green)",
    name: "Sarah C.",
    biz: "VA Agency, California",
  },
];

export const faqs = [
  {
    q: "Is this actually AI — or just automation with a fancy name?",
    a: "It's real AI — powered by large language models (the same technology behind ChatGPT) — but connected to your CRM data. Conversation AI reads the actual conversation history before replying. Voice AI listens and responds dynamically, not from a scripted menu. Content AI uses your business information to write context-aware copy. It's meaningfully smarter than basic automation because it understands natural language and can handle things it wasn't explicitly programmed for.",
  },
  {
    q: "What happens if the AI says something wrong to a client?",
    a: "You have full control over what the AI can and can't say. During setup, we define the boundaries — topics it handles, topics it escalates to you, and a handoff message when a human is needed. You review and approve AI responses before going live. Most members feel confident after the first week once they've seen how the AI handles real conversations.",
  },
  {
    q: "Does the AI replace me — or help me?",
    a: "It handles the parts that were eating your time — initial message replies, after-hours calls, writing repetitive content, responding to reviews. You stay in control of the relationship and the decisions that matter. Think of it as a team member who handles the 80% of routine communication so you can focus on the 20% that actually needs you.",
  },
  {
    q: "How is this different from just using ChatGPT?",
    a: "ChatGPT has no idea who your clients are, what you last talked about, or where someone is in your sales pipeline. Our AI does — because it's built into your CRM. It doesn't just generate text. It takes action: sending replies, booking appointments, building funnels, and responding to reviews — automatically, without you having to copy-paste anything.",
  },
  {
    q: "What's the difference between the plans?",
    a: "All plans include the free AI builders (Funnel AI, Workflow AI, Email AI) and monthly credits. On AI Basic, AI tools like the chat and voice agents are pay-as-you-go from your credits. AI Agency adds AI Employee Growth: 1,000 chat replies and 100 voice minutes per month, plus unlimited Content AI and Reviews AI. AI Enterprise adds AI Employee Unlimited, with unlimited chat and voice agents (fair use), 3× Ask AI and AI Studio usage, $30 monthly credits and done-for-you onboarding. AI pauses when a monthly limit is reached.",
  },
  {
    q: "Can I cancel if it doesn't work for my business?",
    a: "Yes — cancel anytime, no penalty. All plans are month-to-month. If your account isn't fully set up and your AI isn't live within 48 hours of your onboarding call, you get a full refund. We're confident enough in the setup process to put that in writing.",
  },
];

export const socials = [
  { label: "Facebook", href: "https://www.facebook.com/ahainnovationsofficial/" },
  { label: "Instagram", href: "https://www.instagram.com/ahainnovationsofficial/" },
  { label: "YouTube", href: "https://www.youtube.com/@AHA-Innovations-Official" },
  { label: "TikTok", href: "https://www.tiktok.com/@aha.innovations" },
  { label: "LinkedIn", href: "https://www.linkedin.com/showcase/aha-innovations" },
];

export const footerLinks = [
  { label: "Privacy Policy", href: "https://www.aha-innovations.com/privacy" },
  { label: "Terms of Service", href: "https://www.aha-innovations.com/terms" },
  { label: "Refund Policy", href: "https://www.aha-innovations.com/refund-policy" },
  { label: "Help Center", href: "https://www.aha-innovations.com/help" },
  { label: "Contact", href: "https://www.aha-innovations.com/contact" },
];
