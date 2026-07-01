import CTAButton from "@/components/CTAButton";

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(23,59,47,0.12)] bg-[var(--green)] px-5 py-12 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <img
                alt="Logo Palavra da Vida (PV)"
                className="h-12 w-12 rounded-full bg-white object-cover p-1"
                decoding="async"
                height="96"
                loading="lazy"
                src="/images/logo-pv.jpg"
                width="96"
              />
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--gold)]">Minha Jornada com Deus</p>
            </div>
            <p className="mt-3 max-w-2xl text-white/75">
              Uma jornada de fé, estudo, missão e propósito. Obrigada por caminhar comigo em oração,
              encorajamento e parceria.
            </p>
          </div>
          <CTAButton href="#inicio" icon="faith" variant="light">
            Voltar ao início
          </CTAButton>
        </div>
        <p className="mt-8 text-sm text-white/55">
          Projeto inicial em Next.js, Tailwind CSS e PWA. Conteúdos e imagens podem ser ajustados conforme a jornada avançar.
        </p>
      </div>
    </footer>
  );
}
