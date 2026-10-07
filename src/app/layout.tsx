import type { Metadata } from "next";
import { DM_Sans, Sora } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SITE } from "@/lib/site";
import "./globals.css";

const sora = Sora({ variable: "--font-sora", subsets: ["latin"], weight: ["500", "600", "700"] });
const dmSans = DM_Sans({ variable: "--font-dm-sans", subsets: ["latin"], axes: ["opsz"] });

export const metadata: Metadata = {
  title: {
    default: `${SITE.nombre} — Recursos Humanos y Talento`,
    template: `%s · ${SITE.nombre}`,
  },
  description: `Consultora de Recursos Humanos en ${SITE.ciudad}. Búsqueda y selección de personal, búsquedas laborales abiertas y carga de CV.`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${sora.variable} ${dmSans.variable}`} data-scroll-behavior="smooth">
      <body>
        <div className="site">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
