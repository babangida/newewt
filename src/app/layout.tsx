import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "ИсВесТрейд / Easwestrade LLC",
    description: "Международная инвестиционно-коммерческая компания",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru">
        <body className={`${inter.className} bg-background text-primary font-sans`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        </body>
        </html>
    );
}