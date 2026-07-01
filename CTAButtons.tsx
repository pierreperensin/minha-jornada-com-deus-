"use client";

import { useRef, useState } from "react";
import CTAButton from "@/components/CTAButton";

const pixKey = "marip3920@gmail.com";
const whatsappLink = "https://wa.me/5519995580222";
const instagramLink = "https://instagram.com/mari.perensin";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const shareText =
  "Conheça o projeto Minha Jornada com Deus, a caminhada de Mariana Perensin no Seminário Bíblico Palavra da Vida. Ore, contribua e compartilhe essa missão.";

type CTAButtonsProps = {
  compact?: boolean;
};

export default function CTAButtons({ compact = false }: CTAButtonsProps) {
  const [copied, setCopied] = useState(false);
  const copiedTimer = useRef<number | null>(null);

  function showCopied() {
    if (copiedTimer.current) {
      window.clearTimeout(copiedTimer.current);
    }

    setCopied(true);
    copiedTimer.current = window.setTimeout(() => setCopied(false), 2200);
  }

  async function copyPix() {
    showCopied();
    try {
      await navigator.clipboard.writeText(pixKey);
    } catch {
      setCopied(false);
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

    showCopied();
    try {
      await navigator.clipboard.writeText(`${shareText} ${siteUrl}`);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className={compact ? "grid gap-3" : "grid gap-3 sm:grid-cols-2 lg:grid-cols-3"}>
      <CTAButton href="#oracao" icon="prayer">
        Quero orar por Mariana
      </CTAButton>
      <CTAButton icon="donation" onClick={copyPix} variant="secondary">
        <span aria-live="polite">{copied ? "Pix copiado" : "Quero contribuir por Pix"}</span>
      </CTAButton>
      <CTAButton href="#parceria" icon="mission" variant="secondary">
        Quero ser parceiro(a) mensal
      </CTAButton>
      <CTAButton href={whatsappLink} icon="message" rel="noreferrer" target="_blank">
        Falar pelo WhatsApp
      </CTAButton>
      <CTAButton href={instagramLink} icon="share" rel="noreferrer" target="_blank" variant="secondary">
        Seguir no Instagram
      </CTAButton>
      <CTAButton icon="share" onClick={shareMission} variant="dark">
        Compartilhar esta missão
      </CTAButton>
    </div>
  );
}
