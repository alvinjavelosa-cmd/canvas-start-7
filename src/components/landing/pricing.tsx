import { useEffect, useRef, useState } from "react";

import { CHECKOUT, plans, specialOffer, type Plan } from "./content";

function PlanCard({ plan, onUpsell }: { plan: Plan; onUpsell: (href: string) => void }) {
  return (
    <div className={plan.featured ? "pc featured" : "pc"}>
      {plan.featured && (
        <div className="pc-top">
          <div className="pc-badge">⭐ Most Popular</div>
        </div>
      )}
      <div className="pc-body">
        <div className="pc-tier">{plan.tier}</div>
        <div className="pc-price">{plan.price}</div>
        <div className="pc-period">/month</div>
        <div className="pc-tagline">{plan.tagline}</div>
        <div className="pc-divider" />
        {plan.sections.map((section) => (
          <div key={section.label}>
            <div className="pc-section-lbl">{section.label}</div>
            {section.items && (
              <div className="pc-ai-items">
                {section.items.map((item) => (
                  <div key={item} className="pc-ai-item">
                    <span className="chk">✓</span> {item}
                  </div>
                ))}
              </div>
            )}
            {section.note && (
              <div className="pc-usage">
                {section.note.map((line, i) => (
                  <span key={line}>
                    {i > 0 && <br />}
                    {line}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="pc-footer">
        <a
          href={plan.href}
          className={plan.featured ? "pc-cta primary" : "pc-cta ghost"}
          onClick={(e) => {
            if (!plan.upsell) return;
            e.preventDefault();
            onUpsell(plan.href);
          }}
        >
          {plan.cta}
        </a>
      </div>
    </div>
  );
}

/** Offered when a Basic or Agency buyer clicks checkout; "No thanks" continues to their original plan. */
function SpecialOfferDialog({
  declineHref,
  onClose,
}: {
  declineHref: string;
  onClose: () => void;
}) {
  const yes = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    yes.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="sp-ov open"
      role="dialog"
      aria-modal="true"
      aria-labelledby="spTitle"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="sp">
        <button type="button" className="sp-x" aria-label="Close" onClick={onClose}>
          &times;
        </button>
        <div className="sp-eye">Special offer</div>
        <h3 id="spTitle">AI Unlimited Special</h3>
        <div className="sp-sub">Agency's platform with the same AI as Enterprise.</div>
        <div className="sp-price">
          $149<span>/month</span>
        </div>
        <ul>
          {specialOffer.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <a ref={yes} href={CHECKOUT.special} className="pc-cta primary">
          Yes, give me AI Unlimited Special &mdash; $149/mo &rarr;
        </a>
        <button type="button" className="sp-no" onClick={() => window.location.assign(declineHref)}>
          No thanks, continue with my plan
        </button>
      </div>
    </div>
  );
}

export function Pricing() {
  const [declineHref, setDeclineHref] = useState<string | null>(null);

  return (
    <section className="pricing" id="pricing">
      <div className="w">
        <div className="tc">
          <div className="eye red">Simple, transparent pricing</div>
          <h2 className="stitle">
            One AI. Three Plans.
            <br />
            All Replacing Five Separate Tools.
          </h2>
          <p className="ssub">
            Every plan includes the free AI builders and monthly credits. Higher plans add more of
            the AI Employee.
          </p>
        </div>
        <div className="pricing-cards">
          {plans.map((plan) => (
            <PlanCard key={plan.tier} plan={plan} onUpsell={setDeclineHref} />
          ))}
        </div>
        <div className="pricing-note">
          AI pauses when a monthly limit is reached. Voice AI calls also use phone minutes from your
          credits.
        </div>
      </div>
      {declineHref && (
        <SpecialOfferDialog declineHref={declineHref} onClose={() => setDeclineHref(null)} />
      )}
    </section>
  );
}
