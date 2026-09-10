import { links, visit } from "@/data/content";
import { CTAButton } from "./ui/CTAButton";
import { ImageSlot } from "./ui/ImageSlot";
import { Reveal } from "./ui/Reveal";

export function Visit() {
  return (
    <section id="visit" className="mx-auto max-w-content px-5 py-14 sm:px-8 sm:py-20 md:py-24 lg:px-12">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="mb-3 text-xs uppercase tracking-widest2 text-text-secondary">
            Visit
          </p>
          <h2 className="text-balance font-display text-4xl font-medium leading-[1.05] tracking-tight text-text-primary sm:text-5xl md:text-6xl">
            {visit.heading}
          </h2>

          <dl className="mt-10 space-y-6 text-lg">
            <div>
              <dt className="text-sm uppercase tracking-widest2 text-text-secondary">
                Address
              </dt>
              <dd className="mt-1 text-text-primary">{visit.address}</dd>
            </div>
            <div>
              <dt className="text-sm uppercase tracking-widest2 text-text-secondary">
                Phone
              </dt>
              <dd className="mt-1 text-text-primary">
                <a
                  href={`tel:${visit.phone.replace(/\s+/g, "")}`}
                  className="tabular-nums transition-colors [@media(hover:hover)]:hover:text-olive"
                >
                  {visit.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm uppercase tracking-widest2 text-text-secondary">
                Hours
              </dt>
              <dd className="mt-1 text-text-primary">{visit.hours}</dd>
            </div>
          </dl>

          <div className="mt-10 flex flex-wrap gap-4">
            <CTAButton href={links.directions} external>
              Get directions
            </CTAButton>
            <CTAButton href={links.instagram} variant="ghost" external>
              Instagram
            </CTAButton>
          </div>
        </Reveal>

        <ImageSlot
          alt="SAVVA — location" // TODO: replace with official SAVVA photography or map preview
          aspect="aspect-[4/5]"
          variant="beam"
          delay={0.1}
        />
      </div>
    </section>
  );
}
