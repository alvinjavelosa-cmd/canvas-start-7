import {
  LayoutTemplate,
  MessageSquare,
  PenLine,
  Phone,
  Sparkles,
  Star,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useState } from "react";

const SIZE = 400;
const CENTER = SIZE / 2;
const RADIUS = 150;

const tools: { label: string; icon: LucideIcon; activity: string; time: string }[] = [
  {
    label: "Chat AI",
    icon: MessageSquare,
    activity: "Replied to a lead's text in 40s",
    time: "11:02 PM",
  },
  {
    label: "Voice AI",
    icon: Phone,
    activity: "Answered a call · booked Tue 10am",
    time: "2 min ago",
  },
  {
    label: "Content AI",
    icon: PenLine,
    activity: "Drafted this week's client newsletter",
    time: "Just now",
  },
  {
    label: "Reviews AI",
    icon: Star,
    activity: "Replied to a new 5★ Google review",
    time: "5 min ago",
  },
  {
    label: "Funnel AI",
    icon: LayoutTemplate,
    activity: "Published a lead capture page",
    time: "8 min ago",
  },
  {
    label: "Workflow AI",
    icon: Workflow,
    activity: "Sent 12 follow-ups from the pipeline",
    time: "12 min ago",
  },
];

// Nodes sit on a circle, clockwise from the top.
const nodes = tools.map((tool, i) => {
  const angle = (-90 + i * 60) * (Math.PI / 180);
  const x = CENTER + RADIUS * Math.cos(angle);
  const y = CENTER + RADIUS * Math.sin(angle);
  return { ...tool, x, y, path: `M ${x.toFixed(1)} ${y.toFixed(1)} L ${CENTER} ${CENTER}` };
});

const BARS = [38, 52, 45, 64, 58, 76, 90];

/** Hero illustration: six AI tools feeding one CRM hub, with a live activity feed. */
export function HeroVisual() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setActive((i) => (i + 1) % tools.length), 2600);
    return () => clearInterval(id);
  }, []);

  const current = nodes[active] ?? nodes[0]!;
  const CurrentIcon = current.icon;

  return (
    <div className="hv" aria-hidden="true">
      <svg className="hv-svg" viewBox={`0 0 ${SIZE} ${SIZE}`}>
        <defs>
          <linearGradient id="hv-line" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#e53e3e" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
          <radialGradient id="hv-dot">
            <stop offset="0%" stopColor="#fff" />
            <stop offset="60%" stopColor="#ff8a9a" />
            <stop offset="100%" stopColor="#ff8a9a" stopOpacity="0" />
          </radialGradient>
        </defs>
        <g className="hv-orbit">
          <circle cx={CENTER} cy={CENTER} r={RADIUS} />
        </g>
        <g className="hv-orbit hv-orbit-inner">
          <circle cx={CENTER} cy={CENTER} r={92} />
        </g>
        {nodes.map((n, i) => (
          <g key={n.label} className={i === active ? "hv-link is-active" : "hv-link"}>
            <path d={n.path} />
            <circle r="5" fill="url(#hv-dot)" className="hv-pulse">
              <animateMotion
                dur="2.4s"
                begin={`-${i * 0.4}s`}
                repeatCount="indefinite"
                path={n.path}
              />
            </circle>
          </g>
        ))}
      </svg>

      <div className="hv-hub">
        <Sparkles size={22} strokeWidth={2.25} />
        <div className="hv-hub-name">AHA AI</div>
        <div className="hv-hub-sub">One CRM</div>
      </div>

      {nodes.map((n, i) => {
        const Icon = n.icon;
        return (
          <div
            key={n.label}
            className={i === active ? "hv-node is-active" : "hv-node"}
            style={{
              left: `${(n.x / SIZE) * 100}%`,
              top: `${(n.y / SIZE) * 100}%`,
              animationDelay: `${i * -0.7}s`,
            }}
          >
            <div className="hv-node-ico">
              <Icon size={18} strokeWidth={2} />
            </div>
            <div className="hv-node-lbl">{n.label}</div>
          </div>
        );
      })}

      <div className="hv-card hv-feed">
        <div className="hv-card-head">
          <span className="hv-live" /> AI activity
        </div>
        <div key={active} className="hv-feed-row">
          <div className="hv-feed-ico">
            <CurrentIcon size={14} strokeWidth={2.25} />
          </div>
          <div>
            <div className="hv-feed-txt">{current.activity}</div>
            <div className="hv-feed-time">
              {current.label} · {current.time}
            </div>
          </div>
        </div>
      </div>

      <div className="hv-card hv-pipe">
        <div className="hv-card-head">Pipeline</div>
        <div className="hv-pipe-val">$48,200</div>
        <div className="hv-pipe-up">▲ 18% this month</div>
        <div className="hv-bars">
          {BARS.map((h, i) => (
            <span key={i} style={{ height: `${h}%`, animationDelay: `${i * 0.12}s` }} />
          ))}
        </div>
      </div>
    </div>
  );
}
