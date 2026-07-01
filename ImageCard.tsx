type ImageCardProps = {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  priority?: boolean;
};

export default function ImageCard({ src, alt, caption, className = "", priority = false }: ImageCardProps) {
  return (
    <figure
      className={`reveal overflow-hidden rounded-[2rem] border border-[rgba(23,59,47,0.12)] bg-white shadow-[0_26px_76px_rgba(23,33,28,0.12)] ${className}`}
    >
      <div className="aspect-[4/3] bg-[linear-gradient(135deg,rgba(23,59,47,0.12),rgba(201,162,74,0.2))]">
        <img
          alt={alt}
          className="h-full w-full object-cover"
          decoding="async"
          height="800"
          loading={priority ? "eager" : "lazy"}
          src={src}
          width="1200"
        />
      </div>
      {caption ? (
        <figcaption className="border-t border-[rgba(23,59,47,0.08)] px-5 py-4 text-sm text-[var(--muted)]">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
