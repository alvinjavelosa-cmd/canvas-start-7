import { Sparkles } from "lucide-react";
import { useState } from "react";

import {
  LOGO_SRC,
  aiCapabilities,
  aiStack,
  connectedPoints,
  footerLinks,
  heroStats,
  industries,
  socials,
  steps,
  testimonials,
  usageItems,
} from "./content";
import { HeroVisual } from "./hero-visual";
import { scrollToPricing, useScrolled } from "./hooks";

function Logo({ className }: { className?: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  return (
    <img
      src={LOGO_SRC}
      alt="AHA Innovations"
      className={className}
      onError={() => setFailed(true)}
    />
  );
}

export function Nav() {
  const scrolled = useScrolled();
  return (
    <nav className={scrolled ? "nav scrolled" : "nav"}>
      <div className="w">
        <div className="nav-in">
          <div className="nav-logo">
            <Logo />
            <div className="nav-logo-t">
              AHA <span>Innovations</span>
            </div>
          </div>
          <a href="#pricing" className="nav-btn" onClick={scrollToPricing}>
            See Pricing →
          </a>
        </div>
      </div>
    </nav>
  );
}

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-glow-l" />
      <div className="hero-glow-r" />
      <div className="w hero-grid">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-ico" aria-hidden="true">
              <Sparkles size={12} strokeWidth={2.5} />
            </span>
            AI-Powered Business Platform
          </div>
          <h1>
            Your Business Has
            <br />
            <em>5 Different AIs.</em>
            <br />
            <span className="dim">None of Them Know Each Other.</span>
          </h1>
          <p className="hero-sub">
            <strong>
              One for writing. One for your chatbot. One for calls. One for reviews. One for
              funnels.
            </strong>{" "}
            Each one has a separate login, a separate bill, and none of them know your customers.
            There is a better way.
          </p>
          <div className="hero-proof">
            {heroStats.map((s) => (
              <div key={s.num} className="hero-proof-stat">
                <div className="hero-proof-num">{s.num}</div>
                <div className="hero-proof-lbl">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="hero-ctas">
            <a href="#pricing" className="hero-cta-primary" onClick={scrollToPricing}>
              Get One AI for Everything <span className="arr">→</span>
            </a>
          </div>
          <p className="hero-micro">Starting at $97/month · No contracts · US &amp; Canada</p>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}

export function TrustStrip() {
  return (
    <div className="trust">
      <div className="w">
        <div className="trust-in">
          <span className="trust-lbl">Built for:</span>
          {industries.map((tag) => (
            <span key={tag} className="trust-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Problem() {
  return (
    <section className="problem">
      <div className="w">
        <div className="problem-grid">
          <div>
            <div className="eye red">The problem</div>
            <p className="problem-story">
              <strong>You already believe in AI.</strong> You've tried it. Maybe you use ChatGPT for
              writing. Maybe you added a chatbot to your website. Maybe you heard about AI that
              answers calls.
              <br />
              <br />
              But here's what nobody tells you: <em>these tools don't know your business.</em>
              <br />
              <br />
              ChatGPT doesn't know your client Sarah's name. Your chatbot doesn't know she just sent
              a quote request last week. Your AI review tool doesn't know what service you actually
              performed for Marcus.
              <br />
              <br />
              <strong>Disconnected AI isn't smarter than no AI. It's just more expensive.</strong>
            </p>
          </div>
          <div>
            <div className="stack-heading">What most businesses pay for AI</div>
            <div className="stack-list">
              {aiStack.map((tool) => (
                <div key={tool.name} className="stack-item">
                  <div className="stack-left">
                    <div className="stack-icon">{tool.icon}</div>
                    <div>
                      <div className="stack-name">{tool.name}</div>
                      <div className="stack-purpose">{tool.purpose}</div>
                    </div>
                  </div>
                  <div className="stack-price">{tool.price}</div>
                </div>
              ))}
              <div className="stack-total">
                <span className="stack-total-lbl">Total monthly spend</span>
                <span className="stack-total-amt">$316/mo</span>
              </div>
            </div>
            <div className="stack-caveat">
              Five tools. Five logins. None of them know your customers.
            </div>
            <div className="problem-vs">
              <div className="vs-badge vs-badge-before">
                <div className="vs-price">$316</div>
                <div className="vs-lbl">Fragmented AI stack</div>
                <div className="vs-note">5 tools, 5 logins, 0 shared data</div>
              </div>
              <div className="vs-arrow">→</div>
              <div className="vs-badge vs-badge-after">
                <div className="vs-price">$97+</div>
                <div className="vs-lbl">AHA AI Platform</div>
                <div className="vs-note">Platform + AI tools, 1 login, knows your CRM</div>
                <div className="vs-save">Pay only for the AI you use</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AiCapabilities() {
  return (
    <section className="ai-caps">
      <div className="w">
        <div className="tc">
          <div className="eye red">6 AI capabilities. 1 platform.</div>
          <h2 className="stitle">
            Every AI Your Business Needs —<br />
            All Knowing the Same Customers.
          </h2>
          <p className="ssub">
            Each capability below replaces a separate AI tool. And unlike those tools, every one of
            these is connected to your CRM, your conversations, and your pipeline.
          </p>
        </div>
        <div className="ai-grid">
          {aiCapabilities.map((cap) => (
            <div key={cap.title} className="ai-card">
              <div className="ai-card-top">
                <div className="ai-card-icon">{cap.icon}</div>
                <div className="ai-replaces">
                  <span className="ai-replaces-x">×</span> {cap.replaces}
                </div>
              </div>
              <h3>{cap.title}</h3>
              <p className="ai-card-desc">{cap.desc}</p>
              <div className="ai-card-insight">{cap.insight}</div>
              <div className="ai-card-badge">{cap.badge}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Connected() {
  return (
    <section className="connected">
      <div className="w">
        <div className="connected-inner">
          <div className="eye red">The difference that matters</div>
          <h2>
            "ChatGPT Doesn't Know Your
            <br />
            <em>Client's Name.</em> Our AI Does."
          </h2>
          <p className="connected-sub">
            Every external AI tool starts from zero every time you use it. AHA's AI is different —
            it's built into your CRM, which means it has access to your actual business data before
            it says a single word.
          </p>
          <div className="connected-points">
            {connectedPoints.map((p) => (
              <div key={p.title} className="cp">
                <div className="cp-icon">{p.icon}</div>
                <div className="cp-title">{p.title}</div>
                <div className="cp-desc">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Usage() {
  return (
    <section className="usage">
      <div className="w">
        <div className="tc">
          <div className="eye red">Included every month</div>
          <h2 className="stitle">
            Monthly Credits Let Your AI Actually
            <br />
            Reach Your Clients.
          </h2>
          <p className="ssub">
            Every plan includes monthly credits. Spend them on texts, calls, emails and AI tools
            however your business needs.
          </p>
        </div>
        <div className="usage-grid">
          {usageItems.map((u) => (
            <div key={u.head} className="ui">
              <div className="ui-num">{u.num}</div>
              <div className="ui-head">{u.head}</div>
              <div className="ui-desc">{u.desc}</div>
              <div className="ui-tag">{u.tag}</div>
            </div>
          ))}
        </div>
        <p className="fine-print">
          Example mixes only. Credits are shared across everything. Used on one thing only, Basic
          stretches to ~1,390 texts or ~960 call minutes.
        </p>
      </div>
    </section>
  );
}

export function HowItWorks() {
  return (
    <section className="how">
      <div className="w">
        <div className="tc">
          <div className="eye red">Getting started</div>
          <h2 className="stitle">Your AI Is Live in Under 48 Hours.</h2>
          <p className="ssub">
            No technical setup. No training an AI from scratch. We handle everything.
          </p>
        </div>
        <div className="how-steps">
          {steps.map((step, i) => (
            <div key={step.title} className="how-step">
              <div className="how-num">{i + 1}</div>
              <h3 className="how-title">{step.title}</h3>
              <p className="how-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="testis">
      <div className="w">
        <div className="tc">
          <div className="eye red">What members say</div>
          <h2 className="stitle">Real Business Owners. Real AI Results.</h2>
        </div>
        <div className="testi-grid">
          {testimonials.map((t) => (
            <div key={t.name} className="testi">
              <div className="testi-stars">★★★★★</div>
              <p className="testi-quote">{t.quote}</p>
              <div className="testi-author">
                <div className="testi-av" style={{ background: t.color }}>
                  {t.initials}
                </div>
                <div>
                  <div className="testi-name">{t.name}</div>
                  <div className="testi-biz">{t.biz}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="finalcta">
      <div className="w">
        <h2>
          Stop Paying for 5 AIs
          <br />
          That <em>Don't Know Your Business.</em>
        </h2>
        <p className="finalcta-sub">
          One platform. Six AI capabilities. Connected to your CRM, your clients, and your pipeline.
          Starting at $97/month.
        </p>
        <div className="finalcta-btns">
          <a href="#pricing" className="finalcta-btn-p" onClick={scrollToPricing}>
            Get Started — Choose Your Plan <span>→</span>
          </a>
        </div>
        <p className="finalcta-micro">
          No contracts · Setup in 48 hours · Free AI builders on every plan · US &amp; Canada
        </p>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="w">
        <div className="footer-in">
          <div className="footer-logo">
            <Logo />
            <span className="footer-logo-t">AHA Innovations</span>
          </div>
          <div className="footer-socials">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="footer-soc"
                target="_blank"
                rel="noopener noreferrer"
              >
                {s.label}
              </a>
            ))}
          </div>
          <div className="footer-links">
            {footerLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="footer-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {l.label}
              </a>
            ))}
          </div>
          <p className="footer-copy">
            © {new Date().getFullYear()} AHA Innovations. All rights reserved.
            <br />
            Questions? <a href="https://www.aha-innovations.com/help">
              Visit our Help Center
            </a> or <a href="https://www.aha-innovations.com/contact">contact our team</a>.
          </p>
        </div>
      </div>
    </footer>
  );
}
