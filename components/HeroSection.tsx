"use client";

import { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

// ─── Types ────────────────────────────────────────────────────────────────────
type HeroSectionProps = {
  heroImage: StaticImageData | string;
};

// ─── Floating badge data ───────────────────────────────────────────────────────
const BADGES = [
  { label: "50+ Clients", color: "#0bceb7", bg: "rgba(11,206,183,0.12)", top: "12%", left: "4%", delay: "0s" },
  { label: "LED Modules", color: "#f4b400", bg: "rgba(244,180,0,0.12)", top: "72%", left: "2%", delay: "0.4s" },
  { label: "10+ Years", color: "#f4511e", bg: "rgba(244,81,30,0.12)", top: "20%", right: "3%", delay: "0.2s" },
  { label: "Pan India", color: "#d81b60", bg: "rgba(216,27,96,0.12)", top: "68%", right: "2%", delay: "0.6s" },
];

const STATS = [
  { value: "100+", label: "Clients Served", color: "#0bceb7" },
  { value: "10+", label: "Years Experience", color: "#f4b400" },
  { value: "3k+", label: "Units Shipped", color: "#f4511e" },
  { value: "24hr", label: "Support", color: "#d81b60" },
];

// ─── Animated counter hook ────────────────────────────────────────────────────
function useCountUp(target: string, duration = 1800, start = false) {
  const [display, setDisplay] = useState("0");
  useEffect(() => {
    if (!start) return;
    const num = parseInt(target.replace(/\D/g, ""));
    const suffix = target.replace(/[\d]/g, "");
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * num) + suffix);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return display;
}

// ─── Single stat cell ─────────────────────────────────────────────────────────
function StatCell({ value, label, color, started }: { value: string; label: string; color: string; started: boolean }) {
  const display = useCountUp(value, 1600, started);
  return (
    <div className="hero-stat-cell">
      <span className="hero-stat-value" style={{ color }}>{display}</span>
      <span className="hero-stat-label">{label}</span>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function HeroSection({ heroImage }: HeroSectionProps) {
  const [statsStarted, setStatsStarted] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStatsStarted(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        /* ── Reset & base ── */
        .hero-root {
          position: relative;
          min-height: 100svh;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
          background: #060d0c;
          padding: 0;
        }

        /* ── Noise grain overlay ── */
        .hero-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 1;
          opacity: 0.35;
        }

        /* ── Ambient glows ── */
        .hero-glow-teal {
          position: absolute;
          width: 680px; height: 680px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(11,206,183,0.18) 0%, transparent 70%);
          top: -180px; left: -180px;
          pointer-events: none;
          z-index: 0;
          animation: glowPulse 6s ease-in-out infinite alternate;
        }
        .hero-glow-amber {
          position: absolute;
          width: 500px; height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(244,180,0,0.12) 0%, transparent 70%);
          bottom: -120px; right: 30%;
          pointer-events: none;
          z-index: 0;
          animation: glowPulse 8s ease-in-out infinite alternate-reverse;
        }
        @keyframes glowPulse {
          from { transform: scale(1); opacity: 0.8; }
          to   { transform: scale(1.12); opacity: 1; }
        }

        /* ── Grid lines ── */
        .hero-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(11,206,183,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(11,206,183,0.04) 1px, transparent 1px);
          background-size: 72px 72px;
          pointer-events: none;
          z-index: 0;
          mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%);
        }

        /* ── Inner layout ── */
        .hero-inner {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding: 80px 40px 60px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
        }
        @media (max-width: 900px) {
          .hero-inner { grid-template-columns: 1fr; padding: 100px 24px 60px; }
        }

        /* ── Entry animations (CSS-only, run at parse time — not gated on JS) ── */
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroFadeRight {
          from { opacity: 0; transform: translateX(32px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-eyebrow, .hero-heading, .hero-desc, .hero-cta-row, .hero-right {
            animation: none !important;
          }
        }

        /* ── Left column ── */
        .hero-left { display: flex; flex-direction: column; gap: 0; }

        /* eyebrow */
        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(11,206,183,0.10);
          border: 1px solid rgba(11,206,183,0.25);
          border-radius: 100px;
          padding: 6px 16px 6px 8px;
          margin-bottom: 28px;
          width: fit-content;
          animation: heroFadeUp 0.6s ease both;
        }
        .hero-eyebrow-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: #0bceb7;
          box-shadow: 0 0 8px rgba(11,206,183,0.8);
          animation: dotBlink 2s ease-in-out infinite;
        }
        @keyframes dotBlink {
          0%, 100% { opacity: 1; } 50% { opacity: 0.3; }
        }
        .hero-eyebrow-text {
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #0bceb7;
        }

        /* heading */
        .hero-heading {
          font-size: clamp(2.6rem, 5vw, 4rem);
          font-weight: 700;
          line-height: 1.08;
          letter-spacing: -0.02em;
          color: #f0faf9;
          margin: 0 0 20px;
          animation: heroFadeUp 0.6s ease both;
        }

        .hero-heading-line2 {
          display: block;
          background: linear-gradient(90deg, #0bceb7 0%, #f4b400 60%, #f4511e 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* description */
        .hero-desc {
          font-size: 1.05rem;
          line-height: 1.75;
          color: rgba(200,240,235,0.55);
          max-width: 480px;
          margin: 0 0 36px;
          animation: heroFadeUp 0.7s ease 0.2s both;
        }

        /* CTA row */
        .hero-cta-row {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          animation: heroFadeUp 0.7s ease 0.3s both;
        }

        .hero-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #0bceb7;
          color: #033d36;
          font-size: 0.9rem;
          font-weight: 600;
          padding: 13px 28px;
          border-radius: 100px;
          border: none;
          cursor: pointer;
          letter-spacing: 0.01em;
          transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
          box-shadow: 0 0 24px rgba(11,206,183,0.35);
        }
        .hero-btn-primary:hover {
          background: #1ed4c3;
          transform: translateY(-2px);
          box-shadow: 0 0 36px rgba(11,206,183,0.55);
        }
        .hero-btn-primary:active { transform: scale(0.97); }

        .hero-btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          color: rgba(200,240,235,0.7);
          font-size: 0.9rem;
          font-weight: 500;
          padding: 13px 24px;
          border-radius: 100px;
          border: 1px solid rgba(11,206,183,0.2);
          cursor: pointer;
          transition: border-color 0.2s, color 0.2s, background 0.2s;
        }
        .hero-btn-ghost:hover {
          border-color: rgba(11,206,183,0.5);
          color: #0bceb7;
          background: rgba(11,206,183,0.06);
        }

        /* ── Right column ── */
        .hero-right {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: heroFadeRight 0.7s ease both;
        }

        .hero-img-frame {
          position: relative;
          width: 100%;
          max-width: 580px;
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid rgba(11,206,183,0.18);
          box-shadow: 0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(11,206,183,0.08);
        }
        .hero-img-frame img {
          width: 100%; height: auto; display: block;
          border-radius: 24px;
        }

        /* corner accents */
        .hero-corner {
          position: absolute;
          width: 24px; height: 24px;
          pointer-events: none;
        }
        .hero-corner-tl { top: -1px; left: -1px; border-top: 2px solid #0bceb7; border-left: 2px solid #0bceb7; border-radius: 4px 0 0 0; }
        .hero-corner-tr { top: -1px; right: -1px; border-top: 2px solid #f4b400; border-right: 2px solid #f4b400; border-radius: 0 4px 0 0; }
        .hero-corner-bl { bottom: -1px; left: -1px; border-bottom: 2px solid #f4511e; border-left: 2px solid #f4511e; border-radius: 0 0 0 4px; }
        .hero-corner-br { bottom: -1px; right: -1px; border-bottom: 2px solid #d81b60; border-right: 2px solid #d81b60; border-radius: 0 0 4px 0; }

        /* image overlay tint */
        .hero-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 50%, rgba(6,13,12,0.6) 100%);
          border-radius: 24px;
          pointer-events: none;
        }

        /* floating badges */
        .hero-badge {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 7px 14px;
          border-radius: 100px;
          border: 1px solid;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.04em;
          backdrop-filter: blur(12px);
          animation: badgeFloat 4s ease-in-out infinite alternate;
          white-space: nowrap;
        }
        @keyframes badgeFloat {
          from { transform: translateY(0px); }
          to   { transform: translateY(-7px); }
        }

        /* ── Stats bar ── */
        .hero-stats {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 40px 64px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
        }
        @media (max-width: 700px) {
          .hero-stats { grid-template-columns: repeat(2, 1fr); padding: 0 24px 48px; }
        }

        .hero-stat-cell {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px 12px;
          border-right: 1px solid rgba(11,206,183,0.1);
          text-align: center;
        }
        .hero-stat-cell:last-child { border-right: none; }

        .hero-stat-value {
          font-size: 2rem;
          font-weight: 700;
          letter-spacing: -0.03em;
          line-height: 1;
          margin-bottom: 6px;
        }
        .hero-stat-label {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(200,240,235,0.35);
        }

        /* ── Divider ── */
        .hero-divider {
          position: relative;
          z-index: 2;
          width: calc(100% - 80px);
          max-width: 1200px;
          margin: 0 auto;
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, rgba(11,206,183,0.2) 30%, rgba(244,180,0,0.2) 60%, transparent 100%);
        }

        /* ── Scrolling marquee ── */
        .hero-marquee-wrap {
          position: relative;
          z-index: 2;
          overflow: hidden;
          padding: 20px 0;
          mask-image: linear-gradient(90deg, transparent, black 10%, black 90%, transparent);
        }
        .hero-marquee-track {
          display: flex;
          gap: 48px;
          animation: marquee 28s linear infinite;
          width: max-content;
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .hero-marquee-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(200,240,235,0.7);
          white-space: nowrap;
        }
        .hero-marquee-dot {
          width: 4px; height: 4px; border-radius: 50%;
          flex-shrink: 0;
        }
      `}</style>

      <section className="hero-root">
        {/* Ambient glows */}
        <div className="hero-glow-teal" />
        <div className="hero-glow-amber" />

        {/* Grid */}
        <div className="hero-grid" />

        {/* Main content */}
        <div className="hero-inner">
          {/* ── Left ── */}
          <div className="hero-left">
            <div className="hero-eyebrow">
              <span className="hero-eyebrow-dot" />
              <span className="hero-eyebrow-text">India's Leading Digital Signage Solutions Company</span>
            </div>

            <h1 className="hero-heading">
              Illuminate Your
              <span className="hero-heading-line2">Brand Identity.</span>
            </h1>

            <p className="hero-desc">
              SignEdge Digitech Pvt Ltd crafts precision LED modules, digital displays, and signage solutions, trusted by 100+ businesses across India - built to perform, designed to impress.
            </p>

            <div className="hero-cta-row">
              <Link href="/products/" className="hero-btn-primary">
                Explore Our Work
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              {/* <button className="hero-btn-ghost">
                View Our Work
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                </svg>
              </button> */}
            </div>
          </div>

          {/* ── Right ── */}
          <div className="hero-right">
            <div className="hero-img-frame">
              <Image src={heroImage} alt="SignEdge digital signage display" width={580} height={400} style={{ objectFit: "cover" }} priority />
              <div className="hero-img-overlay" />
              <div className="hero-corner hero-corner-tl" />
              <div className="hero-corner hero-corner-tr" />
              <div className="hero-corner hero-corner-bl" />
              <div className="hero-corner hero-corner-br" />
            </div>

            {/* Floating badges */}
            {BADGES.map((b, i) => (
              <div
                key={i}
                className="hero-badge"
                style={{
                  color: b.color,
                  background: b.bg,
                  borderColor: `${b.color}40`,
                  top: b.top,
                  left: b.left,
                  right: (b as any).right,
                  animationDelay: b.delay,
                }}
              >
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: b.color, display: "inline-block", boxShadow: `0 0 6px ${b.color}` }} />
                {b.label}
              </div>
            ))}
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="hero-divider" />

        {/* ── Stats ── */}
        <div className="hero-stats" ref={statsRef}>
          {STATS.map((s, i) => (
            <StatCell key={i} value={s.value} label={s.label} color={s.color} started={statsStarted} />
          ))}
        </div>

        {/* ── Marquee ── */}
        <div className="hero-marquee-wrap">
          <div className="hero-marquee-track">
            {[...Array(2)].map((_, pass) =>
              [
                "Digital Signage",
                "LED Displays",
                "Video Walls",
                "Interactive Kiosks",
                "CMS Softwares",
                "AV Integration",
                "Smart Displays",
                "Digital standee",
                "OPS PC modules",
                "Active LED display"
              ].map((item, i) => (
                <div className="hero-marquee-item" key={`${pass}-${i}`}>
                  <span className="hero-marquee-dot" style={{ background: "#0bceb7" }} />
                  {item}
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
}
