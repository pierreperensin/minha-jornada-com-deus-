"use client";

import { useEffect, useId, useState } from "react";
import SectionHeader from "@/components/SectionHeader";

const captions = [
  "Estudo da Palavra",
  "Comunhão no PV",
  "Conferência Missionária",
  "Momentos de adoração",
  "Treinamento ministerial",
  "Vida em comunidade",
  "Preparação para servir",
  "Experiências que moldam o chamado",
];

const photos = Array.from({ length: 22 }, (_, index) => {
  const number = String(index + 1).padStart(2, "0");
  const caption = captions[index % captions.length];

  return {
    src: `/images/pv-${number}.jpg`,
    caption,
    alt: `${caption} no Seminário Bíblico Palavra da Vida - foto ${index + 1}`,
  };
});

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const titleId = useId();
  const activePhoto = activeIndex === null ? null : photos[activeIndex];

  function closeLightbox() {
    setActiveIndex(null);
  }

  function showPrevious() {
    setActiveIndex((current) => {
      if (current === null) {
        return current;
      }

      return current === 0 ? photos.length - 1 : current - 1;
    });
  }

  function showNext() {
    setActiveIndex((current) => {
      if (current === null) {
        return current;
      }

      return current === photos.length - 1 ? 0 : current + 1;
    });
  }

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex]);

  return (
    <section className="section-pad bg-[rgba(255,250,240,0.65)]" id="pv">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Vida no PV"
          icon="study"
          title="No PV estudamos, somos treinados e desafiados a servir a Cristo"
          description="A rotina no Seminário Bíblico Palavra da Vida une estudo bíblico, discipulado, serviço, comunhão, desafios missionários e preparo ministerial."
          align="center"
        />

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo, index) => (
            <button
              aria-label={`Abrir imagem: ${photo.alt}`}
              className="group reveal overflow-hidden rounded-[1.5rem] border border-[rgba(23,59,47,0.12)] bg-white text-left shadow-[0_18px_48px_rgba(23,33,28,0.1)] transition hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(23,33,28,0.16)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:ring-offset-2"
              key={photo.src}
              onClick={() => setActiveIndex(index)}
              type="button"
            >
              <span className="block aspect-[4/3] overflow-hidden bg-[linear-gradient(135deg,rgba(23,59,47,0.18),rgba(201,162,74,0.2))]">
                <img
                  alt={photo.alt}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  decoding="async"
                  height="800"
                  loading="lazy"
                  src={photo.src}
                  width="1200"
                />
              </span>
              <span className="block px-5 py-4">
                <span className="block text-base font-black text-[var(--green)]">{photo.caption}</span>
                <span className="mt-1 block text-sm text-[var(--muted)]">Clique para ampliar</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {activePhoto ? (
        <div
          aria-labelledby={titleId}
          aria-modal="true"
          className="fixed inset-0 z-50 grid place-items-center bg-[rgba(10,18,15,0.82)] px-4 py-6 backdrop-blur-sm"
          onClick={closeLightbox}
          role="dialog"
        >
          <div
            className="relative w-full max-w-5xl rounded-[1.75rem] bg-[var(--cream)] p-3 shadow-[0_34px_100px_rgba(0,0,0,0.35)] sm:p-4"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 px-2 pb-3">
              <div>
                <h3 className="text-lg font-black text-[var(--green)]" id={titleId}>
                  {activePhoto.caption}
                </h3>
                <p className="text-sm text-[var(--muted)]">
                  Imagem {(activeIndex ?? 0) + 1} de {photos.length}
                </p>
              </div>
              <button
                aria-label="Fechar galeria"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-2xl font-bold text-[var(--green)] shadow-sm transition hover:bg-[var(--sand)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
                onClick={closeLightbox}
                type="button"
              >
                ×
              </button>
            </div>

            <div className="relative overflow-hidden rounded-[1.35rem] bg-[var(--green)]">
              <img
                alt={activePhoto.alt}
                className="max-h-[72vh] w-full object-contain"
                decoding="async"
                height="800"
                src={activePhoto.src}
                width="1200"
              />

              <button
                aria-label="Imagem anterior"
                className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/92 text-3xl font-bold text-[var(--green)] shadow-lg transition hover:bg-[var(--gold)] focus:outline-none focus:ring-2 focus:ring-white"
                onClick={showPrevious}
                type="button"
              >
                ‹
              </button>
              <button
                aria-label="Próxima imagem"
                className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/92 text-3xl font-bold text-[var(--green)] shadow-lg transition hover:bg-[var(--gold)] focus:outline-none focus:ring-2 focus:ring-white"
                onClick={showNext}
                type="button"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
