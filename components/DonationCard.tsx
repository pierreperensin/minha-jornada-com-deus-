"use client";

import { useRef, useState } from "react";
import CTAButton from "@/components/CTAButton";
import Icon from "@/components/Icon";

const pixKey = "marip3920@gmail.com";
const whatsappBase = "https://wa.me/5519995580222";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const shareText =
  "Conheça o projeto Minha Jornada com Deus, a caminhada de Mariana Perensin no Seminário Bíblico Palavra da Vida. Ore, contribua e compartilhe essa missão.";
const monthlyPartnerMessage =
  "Olá, Mariana. Quero saber como posso ser parceiro(a) missionário(a) mensal da sua jornada no Seminário Bíblico Palavra da Vida.";

const suggestedValues = ["R$ 30", "R$ 50", "R$ 100", "R$ 200", "R$ 500", "Outro valor"];

export default function DonationCard() {
  const [message, setMessage] = useState("");
  const messageTimer = useRef<number | null>(null);

  function showMessage(text: string) {
    if (messageTimer.current) {
      window.clearTimeout(messageTimer.current);
    }

    setMessage(text);
    messageTimer.current = window.setTimeout(() => setMessage(""), 5000);
  }

  async function copyPix() {
    showMessage("Pix copiado com sucesso");
    try {
      await navigator.clipboard.writeText(pixKey);
    } catch {
      showMessage("Não foi possível copiar automaticamente");
    }
  }

  async function shareMission() {
    const shareData = {
      title: "Minha Jornada com Deus",
      text: shareText,
      url: siteUrl,
    };

    const canUseNativeShare =
      typeof navigator.share === "function" && (!navigator.userActivation || navigator.userActivation.isActive);

    if (canUseNativeShare) {
      try {
        await navigator.share(shareData);
        return;
      } catch {
        // Fall back to clipboard when the native share sheet is unavailable or dismissed.
      }
    }

    showMessage("Link da missão copiado");
    try {
      await navigator.clipboard.writeText(`${shareText} ${siteUrl}`);
    } catch {
      showMessage("Não foi possível copiar automaticamente");
    }
  }

  const monthlyPartnerLink = `${whatsappBase}?text=${encodeURIComponent(monthlyPartnerMessage)}`;

  return (
    <aside
      className="reveal rounded-[2rem] border border-[rgba(23,59,47,0.12)] bg-white p-6 shadow-[0_28px_80px_rgba(23,33,28,0.14)]"
      id="oferta"
    >
      <div className="mb-5 flex items-center gap-3">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(201,162,74,0.14)] text-[var(--gold)]">
          <Icon name="donation" />
        </span>
        <img
          alt="Logo Palavra da Vida (PV)"
          className="h-12 w-12 rounded-full border border-[rgba(23,59,47,0.12)] object-cover shadow-sm"
          decoding="async"
          height="96"
          loading="lazy"
          src="/images/logo-pv.jpg"
          width="96"
        />
      </div>
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--gold)]">Oferta e parceria</p>
      <h2 className="mt-3 text-3xl font-black leading-tight text-[var(--green)]">
        Contribua com a minha jornada
      </h2>
      <p className="mt-4 leading-7 text-[var(--muted)]">
        Sua oferta será usada para mensalidade, alimentação, livros, congressos,
        viagens missionárias e projetos ministeriais. A contribuição pode ser única
        ou mensal, conforme Deus colocar em seu coração.
      </p>

      <div className="my-6 rounded-2xl border border-[rgba(201,162,74,0.32)] bg-[var(--cream)] p-5">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--muted)]">Pix em destaque</p>
        <p className="mt-2 break-all text-2xl font-black text-[var(--green)]">{pixKey}</p>
        <CTAButton className="mt-4 w-full" icon="donation" onClick={copyPix} variant="secondary">
          Copiar Pix
        </CTAButton>
        <p
          aria-live="polite"
          className="mt-3 min-h-9 rounded-full bg-[rgba(23,59,47,0.1)] px-4 py-2 text-center text-sm font-bold text-[var(--green)]"
        >
          {message}
        </p>
      </div>

      <div>
        <p className="mb-3 text-sm font-bold text-[var(--green)]">Valores sugeridos</p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {suggestedValues.map((value) => (
            <div
              className="rounded-2xl border border-[rgba(201,162,74,0.26)] bg-[var(--cream)] px-4 py-3 text-center text-sm font-black text-[var(--green)] shadow-sm"
              key={value}
            >
              {value}
            </div>
          ))}
        </div>
        <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
          Estes valores são apenas sugestões. O app não processa pagamento por cartão
          nesta versão.
        </p>
      </div>

      <div className="mt-6 grid gap-3">
        <CTAButton href={whatsappBase} icon="message" rel="noreferrer" target="_blank">
          Falar pelo WhatsApp
        </CTAButton>
        <CTAButton href={monthlyPartnerLink} icon="mission" rel="noreferrer" target="_blank">
          Desejo ser parceiro(a) missionário(a) mensal
        </CTAButton>
        <CTAButton icon="share" onClick={shareMission} variant="secondary">
          Compartilhar esta missão
        </CTAButton>
      </div>

      <p className="mt-6 rounded-2xl bg-[rgba(23,59,47,0.06)] p-4 text-sm leading-6 text-[var(--muted)]">
        As contribuições são destinadas ao apoio pessoal, estudantil e ministerial de Mariana Perensin.
      </p>
    </aside>
  );
}
