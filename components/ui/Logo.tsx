import Image from "next/image";

type LogoProps = {
  /** "lockup" = Arabic + SAVVA + COFFEE (full mark). "wordmark" = Arabic + SAVVA only, no caption — better for tight header/footer rows. */
  variant?: "lockup" | "wordmark";
  /** "cream" for use on dark/olive surfaces. "olive" for use on light/cream surfaces. */
  tone?: "cream" | "olive";
  className?: string;
  priority?: boolean;
};

const sources = {
  lockup: {
    cream: "/images/brand/savva-logo-lockup-cream.png",
    olive: "/images/brand/savva-logo-lockup-olive.png",
  },
  wordmark: {
    cream: "/images/brand/savva-wordmark-cream.png",
    olive: "/images/brand/savva-wordmark-olive.png",
  },
};

const aspect = {
  lockup: 1417 / 1373,
  wordmark: 1377 / 1168,
};

/**
 * SAVVA wordmark.
 *
 * TODO: replace with official vector logo asset. What's rendered today is
 * a cropped, colour-keyed transparency cut directly from SAVVA's own PDF
 * menu artwork (not a placeholder font, not a third party's logo) — a
 * faithful stand-in until a real vector file is supplied.
 */
export function Logo({ variant = "wordmark", tone = "cream", className = "" }: LogoProps) {
  return (
    <span className={`relative inline-block ${className}`} style={{ aspectRatio: aspect[variant] }}>
      <Image
        src={sources[variant][tone]}
        alt="SAVVA"
        fill
        className="object-contain"
        sizes="300px"
      />
    </span>
  );
}
