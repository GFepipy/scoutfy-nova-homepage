import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = new Headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "scoutfy.com.br";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const title = "Scoutfy — Onde o talento encontra oportunidade";
  const description =
    "Conectamos atletas, clubes, empresários e profissionais em uma plataforma feita para transformar visibilidade em oportunidade real no futebol.";

  return {
    title,
    description,
    icons: { icon: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/favicon.svg`, shortcut: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/favicon.svg` },
    openGraph: {
      title,
      description,
      type: "website",
      locale: "pt_BR",
      images: [{ url: `${origin}/og.png`, width: 1732, height: 907, alt: "Scoutfy — Seu talento merece ser visto" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${origin}/og.png`],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
