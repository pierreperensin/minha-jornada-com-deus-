import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.URL ||
  "https://minhajornadacomdeus.netlify.app";
const description =
  "Acompanhe a jornada de Mariana Perensin, estudante de Teologia no Seminário Bíblico Palavra da Vida, e participe em oração, contribuição e divulgação.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Minha Jornada com Deus | Mariana Perensin",
  description,
  manifest: "/manifest.json",
  applicationName: "Minha Jornada com Deus",
  authors: [{ name: "Mariana Perensin" }],
  creator: "Mariana Perensin",
  publisher: "Minha Jornada com Deus",
  keywords: [
    "Minha Jornada com Deus",
    "Mariana Perensin",
    "Seminário Bíblico Palavra da Vida",
    "SBPV",
    "Teologia",
    "missão",
    "oração",
    "contribuição missionária",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/images/logo-app.png",
    apple: "/images/logo-app.png",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Jornada com Deus",
    startupImage: "/images/logo-app.png",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Minha Jornada com Deus",
    title: "Minha Jornada com Deus | Mariana Perensin",
    description,
    images: [
      {
        url: "/images/mariana-oficial.jpg",
        width: 1200,
        height: 630,
        alt: "Mariana Perensin - Minha Jornada com Deus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Minha Jornada com Deus | Mariana Perensin",
    description,
    images: ["/images/mariana-oficial.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#173b2f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
