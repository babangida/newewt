import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin", "cyrillic"] });
const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ИсВесТрейд / Easwestrade LLC",
  description: "Международная инвестиционно-коммерческая компания",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="bg-background text-primary font-sans overflow-hidden">
        <Header />

        <main
          className="overflow-y-auto scroll-smooth snap-y snap-mandatory"
          style={{
            height: "calc(100vh - 64px)",
            marginTop: "64px",
          }}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
