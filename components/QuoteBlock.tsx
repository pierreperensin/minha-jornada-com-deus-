type QuoteBlockProps = {
  quote: string;
  cite?: string;
  inverted?: boolean;
};

export default function QuoteBlock({ quote, cite, inverted = false }: QuoteBlockProps) {
  return (
    <figure
      className={`reveal rounded-[2rem] border p-7 shadow-[0_24px_70px_rgba(23,33,28,0.1)] ${
        inverted
          ? "border-white/12 bg-white/8 text-white"
          : "border-[rgba(23,59,47,0.12)] bg-white text-[var(--green)]"
      }`}
    >
      <div className="mb-5 h-px w-20 bg-[var(--gold)]" />
      <blockquote className="text-xl font-semibold leading-9 sm:text-2xl">“{quote}”</blockquote>
      {cite ? <figcaption className={`mt-5 text-sm ${inverted ? "text-white/65" : "text-[var(--muted)]"}`}>{cite}</figcaption> : null}
    </figure>
  );
}
