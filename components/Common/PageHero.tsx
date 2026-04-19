// components/Common/PageHero.tsx
type PageHeroProps = {
    badge: string;
    heading: string;
    accentText: string;
    description: string;
    accent: string;       // e.g. "#F4B400"
    accentMuted: string;  // e.g. "rgba(244,180,0,0.15)"
    right?: React.ReactNode;
  };
  
  const PageHero = ({
    badge,
    heading,
    accentText,
    description,
    accent,
    accentMuted,
    right,
  }: PageHeroProps) => {
    return (
      <div
        className="relative mb-16 flex flex-col items-center justify-between overflow-hidden rounded-3xl px-8 py-10 md:flex-row xl:px-16"
        style={{ background: "linear-gradient(135deg, #0d1117 0%, #1a1f2e 100%)" }}
      >
        {/* Decorative rings — accent colored */}
        <div
          className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full border"
          style={{ borderColor: `${accent}30` }}
        />
        <div
          className="pointer-events-none absolute -right-8 -top-8 h-72 w-72 rounded-full border"
          style={{ borderColor: `${accent}15` }}
        />
  
        {/* Left: Text */}
        <div className="z-10 max-w-lg text-center md:text-left">
          <span
            className="mb-4 inline-block rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-widest"
            style={{ background: accentMuted, color: accent }}
          >
            {badge}
          </span>
          <h2 className="mb-4 text-3xl font-bold leading-tight text-white xl:text-4xl">
            {heading}{" "}
            <span style={{ color: accent }}>{accentText}</span>
          </h2>
          <p className="text-base leading-relaxed text-white/60">
            {description}
          </p>
        </div>
  
        {/* Right: optional slot */}
        {right && (
          <div className="z-10 mt-10 md:mt-0">{right}</div>
        )}
      </div>
    );
  };
  
  export default PageHero;