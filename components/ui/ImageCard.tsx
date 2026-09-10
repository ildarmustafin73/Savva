import { ImageSlot } from "./ImageSlot";

type ImageCardProps = {
  label: string;
  labelAr?: string;
  meta?: string;
  aspect?: string;
  variant?: "arch" | "grain" | "beam" | "grid" | "ring";
  src?: string;
  objectPosition?: string;
  className?: string;
};

export function ImageCard({
  label,
  labelAr,
  meta,
  aspect = "aspect-[3/4]",
  variant = "grain",
  src,
  objectPosition,
  className = "",
}: ImageCardProps) {
  return (
    <div className={className}>
      <ImageSlot alt={label} aspect={aspect} variant={variant} src={src} objectPosition={objectPosition} />
      <div className="mt-4">
        <h3 className="font-display text-xl text-text-primary">{label}</h3>
        {labelAr && (
          <p dir="rtl" className="mt-0.5 font-arabic text-sm text-text-secondary">
            {labelAr}
          </p>
        )}
        {meta && <p className="tabular-nums mt-1 text-sm text-text-secondary">{meta}</p>}
      </div>
    </div>
  );
}
