type BotanicalBranchProps = {
  className?: string;
  /** "on-dark" for use on olive-ink surfaces (bright line). "olive" for use on paper surfaces (subtle brand-olive line). */
  tone?: "on-dark" | "olive";
};

/**
 * Original thin line-art coffee branch (stem, leaves, cherries) — drawn in
 * the same spirit as the botanical illustration on SAVVA's own printed
 * menu (thin line work, coffee cherries), but a fresh drawing rather than
 * a trace of their artwork. Used as a structural/decorative graphic
 * element derived from the real official material — not a stand-in for
 * invented brand objects.
 */
export function BotanicalBranch({ className = "", tone = "on-dark" }: BotanicalBranchProps) {
  const stroke = tone === "on-dark" ? "rgb(var(--color-on-dark))" : "rgb(var(--color-olive))";

  return (
    <svg
      viewBox="0 0 220 420"
      fill="none"
      className={className}
      aria-hidden="true"
      stroke={stroke}
      strokeWidth="1.5"
    >
      <path d="M110 410 C108 320 112 230 106 140 C102 90 96 55 84 20" />
      {/* leaves */}
      <path d="M106 150 C60 140 30 110 20 70 C60 78 92 100 106 150 Z" />
      <path d="M104 210 C150 198 178 168 188 128 C148 138 116 162 104 210 Z" />
      <path d="M100 270 C54 260 26 232 16 194 C56 202 88 224 100 270 Z" />
      <path d="M108 90 C142 80 164 56 172 26 C140 34 114 54 108 90 Z" />
      {/* cherries */}
      <circle cx="88" cy="18" r="7" fill={stroke} stroke="none" />
      <circle cx="70" cy="30" r="6" fill={stroke} stroke="none" />
      <circle cx="96" cy="34" r="5.5" fill={stroke} stroke="none" />
      <circle cx="98" cy="238" r="6.5" fill={stroke} stroke="none" />
      <circle cx="114" cy="248" r="6" fill={stroke} stroke="none" />
      <circle cx="106" cy="262" r="5.5" fill={stroke} stroke="none" />
    </svg>
  );
}
