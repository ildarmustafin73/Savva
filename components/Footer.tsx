import { links } from "@/data/content";
import { Logo } from "./ui/Logo";

export function Footer() {
  return (
    <footer className="bg-olive-ink">
      <div className="mx-auto flex max-w-content flex-col gap-8 px-5 py-14 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <Logo variant="lockup" tone="cream" className="h-24" />

        <div className="flex gap-8 text-sm text-on-dark/80">
          <a
            href={links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors [@media(hover:hover)]:hover:text-on-dark"
          >
            Instagram
          </a>
          <a
            href={links.directions}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors [@media(hover:hover)]:hover:text-on-dark"
          >
            Directions
          </a>
        </div>

        <p className="text-xs text-on-dark-soft">© {new Date().getFullYear()} SAVVA</p>
      </div>
    </footer>
  );
}
