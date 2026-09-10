import { ImageSlot } from "./ui/ImageSlot";
import { Reveal } from "./ui/Reveal";

export function PastrySection() {
  return (
    <section className="bg-accent-soft/50 py-14 sm:py-20 md:py-24">
      <div className="mx-auto grid max-w-content gap-6 px-5 sm:px-8 md:grid-cols-2 lg:px-12">
        <ImageSlot
          alt="A SAVVA sandwich, served on a branded tray"
          src="/images/savva/pastry-sandwich.jpg"
          aspect="aspect-[4/5]"
          objectPosition="center 42%"
          variant="grid"
        />
        <Reveal delay={0.1} className="flex flex-col justify-center md:pl-6 lg:pl-12">
          <p className="mb-3 text-xs uppercase tracking-widest2 text-text-secondary">
            Food
          </p>
          <h2 className="text-balance font-display text-4xl font-medium leading-[1.05] tracking-tight text-text-primary sm:text-5xl">
            Simple pastry.
            <br />
            Made in-house.
          </h2>
          <p className="text-pretty mt-5 max-w-sm text-lg leading-relaxed text-text-secondary">
            {/* TODO: replace with official SAVVA copy */}
            A small, seasonal selection — built to sit alongside a slow cup of coffee.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
