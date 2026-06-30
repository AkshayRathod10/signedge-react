// components/Common/PageHero.tsx
type PageHeroProps = {
    badge: string;
    heading: string;
    accentText: string;
    description: string;
    accent: string;
    accentMuted: string;
    background?: string;
    headingColor?: string;
    descriptionColor?: string;
    badgeTextColor?: string;
    right?: React.ReactNode;
  };
  
  const PageHero = ({
    badge,
    heading,
    accentText,
    description,
    accent,
    accentMuted,
    background = "var(--gradient-dark)",
    headingColor = "#ffffff",
    descriptionColor = "rgba(255,255,255,0.6)",
    badgeTextColor,
    right,
  }: PageHeroProps) => {
    return (
      <div
        className="relative mb-6 flex min-h-[320px] flex-col items-center justify-between overflow-hidden px-8 py-10 md:flex-row xl:px-16"
        style={{ background }}
      >
        {/* Decorative rings */}
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
            style={{ background: accentMuted, color: badgeTextColor ?? accent }}
          >
            {badge}
          </span>
          <h2
            className="mb-4 text-3xl font-bold leading-tight xl:text-4xl"
            style={{ color: headingColor }}
          >
            {heading}{" "}
            <span style={{ color: accent }}>{accentText}</span>
          </h2>
          <p
            className="text-base leading-relaxed"
            style={{ color: descriptionColor }}
          >
            {description}
          </p>
        </div>
  
        {/* Right: optional slot */}
        {right && <div className="z-10 mt-10 md:mt-0">{right}</div>}
      </div>
    );
  };
  
  export default PageHero;