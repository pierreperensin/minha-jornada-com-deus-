import ContactCard from "@/components/ContactCard";
import CTAButtons from "@/components/CTAButtons";
import DonationCard from "@/components/DonationCard";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import ImageCard from "@/components/ImageCard";
import InfoCard from "@/components/InfoCard";
import NavBar from "@/components/NavBar";
import PWARegister from "@/components/PWARegister";
import QuoteBlock from "@/components/QuoteBlock";
import SectionHeader from "@/components/SectionHeader";

const journeyCards = [
  {
    title: "Estudo bíblico",
    text: "Tempo dedicado à Palavra, fundamentos teológicos, vida devocional e formação cristã.",
    icon: "study" as const,
  },
  {
    title: "Treinamento ministerial",
    text: "Prática, serviço, discipulado e experiências que preparam para servir com maturidade.",
    icon: "faith" as const,
  },
  {
    title: "Missão e propósito",
    text: "Uma caminhada para compreender melhor o chamado de Deus e responder com fidelidade.",
    icon: "mission" as const,
  },
];

const participationSteps = [
  {
    title: "Ore",
    text: "Ore por Mariana, por sua família, por provisão e por perseverança.",
    icon: "prayer" as const,
  },
  {
    title: "Contribua",
    text: "Contribua por Pix de forma pontual ou combine uma parceria mensal.",
    icon: "donation" as const,
  },
  {
    title: "Compartilhe",
    text: "Compartilhe esta missão com pessoas que também desejam investir no Reino.",
    icon: "share" as const,
  },
];

const transparencyItems = [
  "Sustento estudantil",
  "Mensalidade",
  "Alimentação",
  "Livros",
  "Congressos",
  "Viagens missionárias",
  "Projetos ministeriais",
];

export default function Home() {
  return (
    <>
      <PWARegister />
      <NavBar />
      <main className="pt-28 md:pt-20">
        <section className="px-5 pb-16 pt-10" id="inicio">
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="reveal">
              <p className="inline-flex rounded-full border border-[rgba(201,162,74,0.36)] bg-white px-4 py-2 text-sm font-bold text-[var(--green)] shadow-sm">
                Mariana Perensin no Seminário Bíblico Palavra da Vida
              </p>
              <h1 className="mt-6 max-w-3xl text-5xl font-black leading-[1.02] text-[var(--green)] sm:text-6xl lg:text-7xl">
                Minha Jornada com Deus
              </h1>
              <p className="mt-5 max-w-2xl text-2xl font-semibold leading-snug text-[var(--gold)]">
                Uma jornada de fé, estudo, missão e propósito
              </p>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
                Um espaço para acompanhar minha caminhada, orar comigo, contribuir financeiramente
                e compartilhar o que Deus tem feito nesta etapa de preparo.
              </p>
              <div className="mt-9">
                <CTAButtons />
              </div>
            </div>

            <ImageCard
              src="/images/mariana-oficial.jpg"
              alt="Mariana Perensin"
              caption="Mariana Perensin, estudante de Teologia no SBPV."
              priority
            />
          </div>
        </section>

        <section className="section-pad section-white" id="comeco">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <ImageCard
              src="/images/batismo-mariana.png"
              alt="Batismo de Mariana"
              caption="Memórias de fé que ajudam a contar o começo desta jornada."
            />
            <div>
              <SectionHeader
                eyebrow="Como tudo começou"
                icon="faith"
                title="Antes de ser um projeto, esta jornada nasceu de uma resposta a Deus."
                description="A caminhada de Mariana é marcada por processos, convicções, perguntas sinceras e pela graça de Deus conduzindo cada passo."
              />
              <p className="reveal mt-6 text-lg leading-8 text-[var(--muted)]">
                Esta página reúne um pouco da história, do chamado e das necessidades desta fase
                de formação teológica. É um convite para caminhar junto: em oração, presença,
                encorajamento e parceria financeira.
              </p>
            </div>
          </div>
        </section>

        <section className="section-pad section-mist" id="sbpv">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div>
              <SectionHeader
                eyebrow="SBPV"
                icon="study"
                title="Por que o Seminário Bíblico Palavra da Vida?"
                description="O SBPV é um ambiente de formação bíblica, discipulado, serviço e desenvolvimento ministerial, com uma visão clara de preparo para a obra de Cristo."
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {journeyCards.map((card) => (
                  <InfoCard key={card.title} title={card.title} text={card.text} icon={card.icon} />
                ))}
              </div>
            </div>
            <ImageCard
              src="/images/sbpv-aereo.png"
              alt="Vista aérea do Seminário Bíblico Palavra da Vida"
              caption="Seminário Bíblico Palavra da Vida — SBPV."
            />
          </div>
        </section>

        <section className="section-pad section-white" id="caminhada">
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              eyebrow="Formação"
              icon="mission"
              title="Minha caminhada no Seminário Bíblico Palavra da Vida"
              description="Cada disciplina, devocional, conversa, culto, leitura e experiência prática faz parte de um processo de crescimento com Deus."
              align="center"
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              <InfoCard
                title="Aprender"
                text="Estudar a Bíblia com profundidade para servir com fidelidade, clareza e amor."
                icon="study"
              />
              <InfoCard
                title="Ser formada"
                text="Permitir que Deus molde caráter, prioridades, relacionamentos e visão de Reino."
                icon="faith"
              />
              <InfoCard
                title="Servir"
                text="Colocar dons e aprendizados à disposição da igreja, da missão e de pessoas."
                icon="mission"
              />
            </div>
          </div>
        </section>

        <section className="section-pad section-deep text-white" id="familia">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <SectionHeader
              eyebrow="Família"
              icon="faith"
              title="Um pouco da minha família"
              inverted
            />
            <QuoteBlock
              inverted
              quote="A jornada de fé também é feita de raízes, apoio, saudade, conversas, cuidado e renúncias compartilhadas."
              cite="Minha família faz parte da história que Deus tem escrito e é uma das formas pelas quais Ele me sustentou até aqui."
            />
          </div>
        </section>

        <section className="section-pad section-white" id="jesus">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <SectionHeader
                eyebrow="Testemunho"
                icon="faith"
                title="Meu encontro com Jesus"
                description="O centro desta jornada não é uma instituição, uma campanha ou um sonho pessoal. O centro é Cristo."
              />
              <p className="reveal mt-6 text-lg leading-8 text-[var(--muted)]">
                Conhecer Jesus transformou minha forma de enxergar a vida, o futuro e o serviço.
                A teologia, para mim, nasce do desejo de amar mais a Deus, compreender melhor a Sua
                Palavra e servir pessoas com verdade e graça.
              </p>
            </div>
            <ImageCard
              src="/images/retiro-vocacionados.jpg"
              alt="Retiro de vocacionados"
              caption="Espaços de comunhão e direção vocacional fortalecem a caminhada."
            />
          </div>
        </section>

        <Gallery />

        <section className="section-pad section-white" id="renuncia">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <SectionHeader
              eyebrow="Chamado"
              icon="mission"
              title="A renúncia de quem responde ao chamado"
              description="Responder a Deus envolve fé, coragem e escolhas concretas. Há custos emocionais, financeiros, familiares e pessoais, mas também há alegria em obedecer."
            />
            <QuoteBlock
              quote="A missão não é individual. Quando alguém ora, contribui, compartilha ou envia encorajamento, participa de maneira real daquilo que Deus está construindo."
            />
          </div>
        </section>

        <section className="section-pad section-mist" id="parceria">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
            <div>
              <SectionHeader
                eyebrow="Transparência"
                icon="donation"
                title="Como sua oferta participa da minha jornada"
                description="As contribuições serão usadas para necessidades reais da formação e do serviço ministerial."
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {transparencyItems.map((item) => (
                  <div
                    className="reveal rounded-2xl border border-[rgba(23,59,47,0.1)] bg-white px-5 py-4 font-bold text-[var(--green)] shadow-[0_14px_32px_rgba(23,33,28,0.06)]"
                    key={item}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <DonationCard />
          </div>
        </section>

        <section className="section-pad section-white" id="oracao">
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              eyebrow="Faça parte"
              icon="prayer"
              title="Como fazer parte da minha jornada"
              description="Existem formas simples e profundas de caminhar comigo nesta etapa."
              align="center"
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {participationSteps.map((step, index) => (
                <article
                  className="reveal rounded-[1.75rem] border border-[rgba(23,59,47,0.1)] bg-white p-6 shadow-[0_18px_45px_rgba(23,33,28,0.08)]"
                  key={step.title}
                >
                  <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(201,162,74,0.14)] text-[var(--gold)]">
                    <span className="sr-only">{step.title}</span>
                    <span aria-hidden="true" className="text-sm font-black">0{index + 1}</span>
                  </span>
                  <h3 className="text-xl font-black text-[var(--green)]">{step.title}</h3>
                  <p className="mt-3 leading-7 text-[var(--muted)]">{step.text}</p>
                </article>
              ))}
            </div>
            <div className="mt-10">
              <CTAButtons />
            </div>
          </div>
        </section>

        <section className="section-pad section-cream" id="contato">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <SectionHeader
                eyebrow="Fale comigo"
                icon="message"
                title="Vamos conversar, orar e caminhar juntos."
                description="Você pode falar comigo pelo WhatsApp ou acompanhar atualizações pelo Instagram."
              />
              <p className="reveal mt-6 rounded-2xl border border-[rgba(23,59,47,0.1)] bg-white p-5 text-sm leading-6 text-[var(--muted)] shadow-sm">
                Aviso de privacidade: ao entrar em contato por WhatsApp ou Instagram, seus dados serão
                tratados pelas próprias plataformas. Use esses canais apenas se estiver de acordo com
                as políticas de privacidade delas.
              </p>
            </div>
            <ContactCard />
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
