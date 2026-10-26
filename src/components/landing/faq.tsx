import { useState } from "react";

import { faqs } from "./content";

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="faq">
      <div className="w-sm">
        <div className="tc">
          <div className="eye red">Questions about the AI</div>
          <h2 className="stitle">Honest Answers to the Tough Questions.</h2>
        </div>
        <div className="faq-list">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className={isOpen ? "faq-item active" : "faq-item"}>
                <button
                  type="button"
                  className="faq-q"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  {item.q}
                  <span className="faq-ico">+</span>
                </button>
                <div className={isOpen ? "faq-a open" : "faq-a"}>
                  <div className="faq-a-inner">{item.a}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
