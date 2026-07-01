import Icon, { type IconName } from "@/components/Icon";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  icon?: IconName;
  align?: "left" | "center";
  inverted?: boolean;
  logo?: boolean;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  icon,
  align = "left",
  inverted = false,
  logo = false,
}: SectionHeaderProps) {
  return (
    <div className={`${align === "center" ? "mx-auto text-center" : ""} max-w-3xl reveal`}>
      <div className={`flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}>
        {icon ? (
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(201,162,74,0.38)] bg-white/80 text-[var(--gold)] shadow-sm">
            <Icon name={icon} />
          </span>
        ) : null}
        {eyebrow ? (
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--gold)]">{eyebrow}</p>
        ) : null}
      </div>
      <div className={`mt-4 flex items-center gap-4 ${align === "center" ? "justify-center" : ""}`}>
        {logo ? (
          <img
            alt="Logo Palavra da Vida"
            className="h-14 w-14 flex-none rounded-full border border-[rgba(201,162,74,0.38)] object-cover shadow-sm sm:h-16 sm:w-16"
            decoding="async"
            height="64"
            loading="lazy"
            src="/images/logo-pv.jpg"
            width="64"
          />
        ) : null}
        <h2 className={`text-3xl font-black leading-tight sm:text-4xl ${inverted ? "text-white" : "text-[var(--green)]"}`}>
          {title}
        </h2>
      </div>
      {description ? (
        <p className={`mt-4 text-lg leading-8 ${inverted ? "text-white/75" : "text-[var(--muted)]"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
