"use client";

import React from "react";
import Link from "next/link";
import { FaTractor, FaStore } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      {/* SCREEN 1 */}
      <section
        className="relative snap-start "
        style={{
          backgroundImage: "url(/pexels.jpg)",
          backgroundSize: "cover",
          height: "calc(100vh - var(--header-h))",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.5)_0%,_transparent_100%)]" />

        <div className="relative z-10 h-full w-full flex items-start justify-start text-center pt-10 md:pt-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center space-y-6">
            <span className="font-playfair px-4 py-3 rounded-lg text-5xl md:text-6xl font-bold text-black drop-shadow-lg">
              ООО «ИсВесТрейд»
            </span>

            <h1 className="font-playfair border-b-4 border-accent inline-block pb-2 text-5xl md:text-6xl font-bold text-black drop-shadow-lg">
              От поля до полки: экспорт сырья и дистрибуция готовой продукции
            </h1>

            <p className="font-playfair text-4xl md:text-4xl font-medium text-black drop-shadow-lg">
              Мы поставляем сельскохозяйственное сырьё на экспорт и реализуем
              качественные продукты питания для торговых сетей.
            </p>
          </div>
        </div>
      </section>

      {/* SCREEN 2 (всё в один экран + footer 64px) */}
      <section
        className="snap-start bg-background flex flex-col"
        style={{ height: "calc(100vh - var(--header-h))" }}
      >
        {/* CONTENT (высота = экран - футер) */}
        <div
          className="flex-1 flex items-start pt-4"
          style={{ minHeight: "calc(100% - var(--footer-h))" }}
        >
          <div className="w-full max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header block (компактно) */}
            <div className="text-center">
              <h2 className="text-xl md:text-2xl font-semibold text-primary">
                Направления компании
              </h2>

              <p className="mt-2 text-sm md:text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                ООО «ИсВесТрейд» — экспортно-торговая компания. Мы организуем
                поставки сельскохозяйственного сырья и дистрибуцию продуктов
                питания, обеспечивая прозрачные условия, контроль качества и
                устойчивую логистику.
              </p>

              <div className="mt-3 h-[2px] w-full max-w-5xl mx-auto bg-accent/50" />
            </div>

            {/* 2 cards (ниже и компактнее) */}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
              <Link href="/agriculture">
                <Card className="group bg-white transition duration-300 transform hover:scale-[1.01] hover:shadow-lg cursor-pointer rounded-2xl">
                  <CardContent className="p-5 flex flex-col items-center text-center">
                    <FaTractor className="text-3xl text-accent group-hover:text-lightgreen transition duration-300 mb-2" />
                    <h3 className="text-lg font-semibold mb-1">
                      Сельское хозяйство
                    </h3>
                    <p className="text-sm text-gray-600">
                      Экспортируем чечевицу, нут, горох, фисташку и другие
                      культуры
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/distribution">
                <Card className="group bg-white transition duration-300 transform hover:scale-[1.01] hover:shadow-lg cursor-pointer rounded-2xl">
                  <CardContent className="p-5 flex flex-col items-center text-center">
                    <FaStore className="text-3xl text-accent group-hover:text-lightgreen transition duration-300 mb-2" />
                    <h3 className="text-lg font-semibold mb-1">
                      Дистрибуция продукции
                    </h3>
                    <p className="text-sm text-gray-600">
                      Поставляем готовые продукты питания и снэки в торговые
                      сети
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>

            {/* Why us (не большие карточки, а компактные фичи) */}
            <div className="mt-5 max-w-5xl mx-auto">
              <h3 className="text-lg md:text-xl font-semibold text-primary text-center">
                Почему с нами работают
              </h3>

              <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="bg-white rounded-2xl border shadow-sm p-4 flex gap-3 items-start">
                  <div className="h-9 w-9 rounded-xl bg-accent/15 flex items-center justify-center text-accent text-lg shrink-0">
                    ✓
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-semibold text-primary">
                      Контроль качества
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                      Проверка партий, документы, упаковка и маркировка.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border shadow-sm p-4 flex gap-3 items-start">
                  <div className="h-9 w-9 rounded-xl bg-accent/15 flex items-center justify-center text-accent text-lg shrink-0">
                    ✓
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-semibold text-primary">
                      Прозрачные условия
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                      Договор, сроки, понятная коммуникация.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border shadow-sm p-4 flex gap-3 items-start">
                  <div className="h-9 w-9 rounded-xl bg-accent/15 flex items-center justify-center text-accent text-lg shrink-0">
                    ✓
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-semibold text-primary">
                      Логистика под задачу
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                      Маршрут/формат поставки, стабильность.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </section>
    </>
  );
}
