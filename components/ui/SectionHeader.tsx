type SectionHeaderProps = {
  eyebrow?: string;
  heading: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  /** "large" breaks the repeated eyebrow+H2 rhythm for a section that should read as more important. */
  size?: "default" | "large";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  heading,
  align = "left",
  tone = "dark",
  size = "default",
  className = "",
}: SectionHeaderProps) {
  const eyebrowColor = tone === "light" ? "text-on-dark-soft" : "text-text-secondary";
  const headingColor = tone === "light" ? "text-on-dark" : "text-text-primary";
  const headingScale =
    size === "large"
      ? "text-5xl font-medium sm:text-6xl md:text-7xl"
      : "text-4xl font-light sm:text-5xl md:text-6xl";

  return (
    <div className={`${align === "center" ? "text-center" : "text-left"} ${className}`}>
      {eyebrow && (
        <p className={`mb-3 text-xs uppercase tracking-widest2 ${eyebrowColor}`}>{eyebrow}</p>
      )}
      <h2
        className={`text-balance whitespace-pre-line font-display leading-[1.05] tracking-tightest ${headingScale} ${headingColor}`}
      >
        {heading}
      </h2>
    </div>
  );
}
