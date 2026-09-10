import Link from "next/link";
import type { ReactNode } from "react";

type CTAButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "light";
  external?: boolean;
  /** Disables the press-scale for contexts where the motion would distract. */
  static?: boolean;
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm tracking-wide " +
  "transition-[background-color,border-color,color,transform] duration-150 ease-out " +
  "focus-visible:outline-offset-4";

const tapScale = "active:scale-[0.96]";

const variants = {
  primary: "bg-olive-ink text-on-dark hover:bg-olive",
  ghost:
    "border border-text-primary/30 text-text-primary [@media(hover:hover)]:hover:border-text-primary",
  light:
    "border border-on-dark/50 text-on-dark [@media(hover:hover)]:hover:bg-on-dark/10",
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  external = false,
  static: isStatic = false,
  className = "",
}: CTAButtonProps) {
  const classes = `${base} ${variants[variant]} ${!isStatic ? tapScale : ""} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
