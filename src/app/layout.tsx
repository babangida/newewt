import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Подключаем оба шрифта с переменными
const inter = Inter({ subsets: ["latin", "cyrillic"]});
const playfair = Playfair_Display({
    subsets: ["latin", "cyrillic"],
    weight: ["400", "500", "600", "700", "900"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "ИсВесТрейд / Easwestrade LLC",
    description: "Международная инвестиционно-коммерческая компания",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru">
        <body
            className={` bg-background text-primary font-sans`}
        >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        </body>
        </html>
    );
}