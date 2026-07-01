const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "História", href: "#comeco" },
  { label: "SBPV", href: "#sbpv" },
  { label: "Oferta", href: "#oferta" },
  { label: "Contato", href: "#contato" },
];

export default function NavBar() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-[rgba(23,59,47,0.08)] bg-[rgba(250,246,237,0.9)] shadow-[0_10px_30px_rgba(23,33,28,0.05)] backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <a className="text-xs font-black uppercase tracking-[0.18em] text-[var(--green)] sm:text-sm" href="#inicio">
          Minha Jornada com Deus
        </a>
        <nav className="hidden items-center gap-5 text-sm font-semibold text-[var(--muted)] md:flex">
          {navItems.map((item) => (
            <a className="transition hover:text-[var(--green)]" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="rounded-full bg-[var(--green)] px-4 py-2 text-sm font-bold text-[#ffffff] shadow-[0_12px_28px_rgba(23,59,47,0.18)]" href="#oferta">
          Contribuir
        </a>
      </div>
      <nav className="flex gap-2 overflow-x-auto px-5 pb-3 text-xs font-bold text-[var(--green)] md:hidden">
        {navItems.map((item) => (
          <a className="shrink-0 rounded-full border border-[rgba(23,59,47,0.16)] bg-white px-3 py-2" href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
