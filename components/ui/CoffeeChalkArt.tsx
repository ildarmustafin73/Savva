/**
 * Small, coffee-specific line sketches for the menu section's olive
 * background — a "chalked-on-a-design-board" feeling rather than another
 * photograph. Every mark here is something you'd actually find at a coffee
 * bar (a cup, beans, a V60, a coffee branch with cherries, a spoon), drawn as
 * a single thin stroke rather than a filled icon, so it reads as a sketch and
 * not a clipart badge.
 *
 * Deliberately NOT reused from BotanicalBranch: that motif is SAVVA's general
 * olive-branch brand mark and stays exactly as it is. These are new,
 * coffee-specific marks — a real coffee cherry has small round fruit and
 * narrow pointed leaves, nothing like an olive sprig or a generic flower, so
 * this file draws that shape on purpose rather than reusing a plant asset
 * that isn't actually a coffee plant.
 */

function CupSketch({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" className={className} aria-hidden="true">
      <path
        d="M28 44h56l-5 44a10 10 0 0 1-10 9H43a10 10 0 0 1-10-9l-5-44Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M84 50c10-2 18 3 18 12s-9 15-19 13"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path d="M40 44c0-8 4-13 4-20" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M56 44c2-9-3-14-1-24" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M71 44c-1-7 4-11 3-18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function BeansSketch({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 90" fill="none" className={className} aria-hidden="true">
      <g transform="translate(10 10) rotate(-12 20 25)">
        <path
          d="M20 2C9 2 1 12 1 25s8 23 19 23 19-10 19-23S31 2 20 2Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path d="M20 4c-5 8-5 34 0 42" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </g>
      <g transform="translate(58 28) rotate(18 17 20)">
        <path
          d="M17 1C7 1 1 10 1 20s6 19 16 19 16-9 16-19S27 1 17 1Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path d="M17 3c-4 7-4 27 0 34" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </g>
      <g transform="translate(96 46) rotate(-6 13 15)">
        <path
          d="M13 1C6 1 1 8 1 15s5 14 12 14 12-7 12-14S20 1 13 1Z"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path d="M13 2c-3 5-3 20 0 26" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </g>
    </svg>
  );
}

/** A V60-style pour-over dripper over a cup, with a small pour line. */
function V60Sketch({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 110 130" fill="none" className={className} aria-hidden="true">
      <path d="M30 18h50l-21 34a4 4 0 0 0 0 4l0 0" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M30 18h50L59 50" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M55 8v10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path
        d="M52 12c2-3 6-3 8 0"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.8"
      />
      <path
        d="M32 56h46l-8 46a8 8 0 0 1-8 7H48a8 8 0 0 1-8-7l-8-46Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** A coffee branch — narrow pointed leaves and small round cherries, not a
 *  generic flower: this is what actually distinguishes it as coffee. */
function CoffeeBranchSketch({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 200" fill="none" className={className} aria-hidden="true">
      <path
        d="M80 196C76 150 70 90 96 12"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {/* narrow pointed coffee leaves, in opposite pairs along the stem */}
      <path d="M84 150c18-4 30-18 32-34-18 2-30 16-32 34Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M78 150c-18-4-30-18-32-34 18 2 30 16 32 34Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M89 100c16-2 27-14 29-28-16 1-27 13-29 28Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M83 100c-16-2-27-14-29-28 16 1 27 13 29 28Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M94 54c13-1 22-11 24-23-13 1-22 11-24 23Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      {/* coffee cherries — small round fruit, paired, with a short stem to the branch */}
      <circle cx="70" cy="128" r="6.5" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="82" cy="134" r="6.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M74 122 78 128" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <circle cx="66" cy="78" r="5.5" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="77" cy="83" r="5.5" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

function SpoonSketch({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 110" fill="none" className={className} aria-hidden="true">
      <ellipse cx="20" cy="18" rx="14" ry="17" stroke="currentColor" strokeWidth="1.4" />
      <path d="M20 35v66" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

/**
 * Positions a handful of the sketches above around the menu section's olive
 * ground. Hidden below `md` — at phone width there is no real spare space for
 * them and they would just compete with the tab bar and list. Kept at a low
 * opacity in the same pale tone as the section's other on-dark accents, and
 * two of them bleed off the section's own edge on purpose (a chalk sketch on
 * a board runs to the edge; a neatly-contained one would look pasted on).
 */
export function CoffeeChalkArt() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden overflow-hidden md:block">
      <CupSketch className="absolute right-6 top-8 h-24 w-24 -rotate-6 text-accent-soft opacity-[0.16] lg:right-14 lg:top-6 lg:h-28 lg:w-28" />
      <V60Sketch className="absolute -right-4 top-40 h-20 w-20 rotate-3 text-accent-soft opacity-[0.14] lg:right-10 lg:top-44 lg:h-24 lg:w-24" />
      <BeansSketch className="absolute bottom-10 right-8 h-16 w-28 rotate-3 text-accent-soft opacity-[0.15] lg:right-16 lg:h-20 lg:w-32" />
      <CoffeeBranchSketch className="absolute -bottom-6 left-[38%] hidden h-40 w-32 rotate-6 text-accent-soft opacity-[0.12] xl:block" />
      <SpoonSketch className="absolute bottom-16 right-[26%] hidden h-16 w-6 -rotate-12 text-accent-soft opacity-[0.13] xl:block" />
    </div>
  );
}
