import CTAButton from "@/components/CTAButton";

const whatsappLink = "https://wa.me/5519995580222";
const instagramLink = "https://instagram.com/mari.perensin";

export default function ContactCard() {
  return (
    <aside className="reveal rounded-[2rem] border border-[rgba(23,59,47,0.12)] bg-white p-6 shadow-[0_26px_76px_rgba(23,33,28,0.12)]">
      <div className="rounded-[1.5rem] bg-[var(--green)] p-6 text-white">
        <div className="mb-6 flex items-center gap-3">
          <img
            alt="Logo SBPV"
            className="h-16 w-auto rounded-xl bg-white p-2"
            decoding="async"
            height="160"
            loading="lazy"
            src="/images/logo-sbpv.png"
            width="240"
          />
          <img
            alt="Logo Palavra da Vida (PV)"
            className="h-16 w-16 rounded-xl bg-white object-cover p-1"
            decoding="async"
            height="160"
            loading="lazy"
            src="/images/logo-pv.jpg"
            width="160"
          />
        </div>
        <h3 className="text-2xl font-black">Mariana Perensin</h3>
        <p className="mt-3 leading-7 text-white/75">
          Estudante de Teologia no Seminário Bíblico Palavra da Vida — SBPV.
        </p>
      </div>

      <div className="mt-5 grid gap-3">
        <CTAButton href={whatsappLink} icon="message" target="_blank" rel="noreferrer">
          Falar pelo WhatsApp
        </CTAButton>
        <CTAButton href={instagramLink} icon="share" target="_blank" rel="noreferrer" variant="secondary">
          Seguir no Instagram
        </CTAButton>
      </div>
    </aside>
  );
}
