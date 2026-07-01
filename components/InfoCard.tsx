import Icon, { type IconName } from "@/components/Icon";

type InfoCardProps = {
  title: string;
  text: string;
  icon?: IconName;
};

export default function InfoCard({ title, text, icon }: InfoCardProps) {
  return (
    <article className="reveal rounded-[1.75rem] border border-[rgba(23,59,47,0.11)] bg-white p-6 shadow-[0_18px_45px_rgba(23,33,28,0.08)]">
      {icon ? (
        <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(201,162,74,0.14)] text-[var(--gold)]">
          <Icon name={icon} />
        </span>
      ) : null}
      <h3 className="text-xl font-black text-[var(--green)]">{title}</h3>
      <p className="mt-3 leading-7 text-[var(--muted)]">{text}</p>
    </article>
  );
}
