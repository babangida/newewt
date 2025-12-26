"use client";

import React from "react";
import Link from "next/link";
import { FaTractor, FaStore } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";

export default function HomePage() {
  return (
    <main className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth">
      {/* PAGE 1 / HERO */}
      <section
        className="relative h-screen snap-start flex items-start justify-center pt-32 text-center"
        style={{
          backgroundImage: "url(/pexels.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.5)_0%,_transparent_100%)]" />
        <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center space-y-6 max-w-6xl">
          <span className="font-playfair px-4 py-3 rounded-lg text-5xl md:text-6xl font-bold text-black text-center drop-shadow-lg">
            ООО «ИсВесТрейд»
          </span>

          <h1 className="font-playfair border-b-4 border-accent inline-block pb-2 text-5xl md:text-6xl font-bold text-black text-center drop-shadow-lg">
            От поля до полки: экспорт сырья и дистрибуция готовой продукции
          </h1>

          <p className="font-playfair text-4xl md:text-4xl font-medium text-black text-center drop-shadow-lg">
            Мы поставляем сельскохозяйственное сырьё на экспорт и реализуем
            качественные продукты питания для торговых сетей.
          </p>

          <span className="text-primary text-2xl animate-bounce mt-4 drop-shadow-lg">
            ⬇
          </span>
        </div>
      </section>

      {/* PAGE 2 */}
      <section className="h-screen snap-start bg-background flex items-center">
        <div className="w-full max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-3">
              Направления компании
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              ООО «ИсВесТрейд» — экспортно-торговая компания. Мы организуем
              поставки сельскохозяйственного сырья и дистрибуцию продуктов
              питания, обеспечивая прозрачные условия, контроль качества и
              устойчивую логистику.
            </p>
            <div className="mt-6 h-[2px] w-full bg-accent/60" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Link href="/agriculture">
              <Card className="group transition duration-300 bg-white ease-in-out transform hover:scale-105 hover:shadow-xl cursor-pointer">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <FaTractor className="text-4xl text-accent group-hover:text-lightgreen transition duration-300 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    Сельское хозяйство
                  </h3>
                  <p className="text-gray-600">
                    Экспортируем чечевицу, нут, горох, фисташку и другие
                    культуры
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/distribution">
              <Card className="group transition duration-300 bg-white ease-in-out transform hover:scale-105 hover:shadow-xl cursor-pointer">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <FaStore className="text-4xl text-accent group-hover:text-lightgreen transition duration-300 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    Дистрибуция продукции
                  </h3>
                  <p className="text-gray-600">
                    Поставляем готовые продукты питания и снэки в торговые сети
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>

          <div className="mt-12">
            <h3 className="text-xl md:text-2xl font-semibold text-primary text-center mb-6">
              Почему с нами работают
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-white">
                <CardContent className="p-6 text-center">
                  <div className="text-accent font-semibold mb-2">
                    Контроль качества
                  </div>
                  <p className="text-gray-600">
                    Проверка партий и документации, требования к упаковке и
                    маркировке.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardContent className="p-6 text-center">
                  <div className="text-accent font-semibold mb-2">
                    Прозрачные условия
                  </div>
                  <p className="text-gray-600">
                    Работа по договору, согласованные сроки, понятная
                    коммуникация.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardContent className="p-6 text-center">
                  <div className="text-accent font-semibold mb-2">
                    Логистика под задачу
                  </div>
                  <p className="text-gray-600">
                    Подбор маршрута и формата поставки, стабильность и
                    прогнозируемость.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
