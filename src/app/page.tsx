'use client';

import React from 'react';
import Link from 'next/link';
import { FaTractor, FaStore } from 'react-icons/fa';
import { Card, CardContent } from '@/components/ui/card';

function HomePage() {
    return (
        <main>
            {/* HERO SECTION */}
            <section
                className="relative min-h-screen flex items-start justify-center pt-32 text-center transition-all duration-700 animate-fade-in"
                style={{
                    backgroundImage: 'url(/pexels.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Светлый радиальный градиент по центру */}
                <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.5)_0%,_transparent_100%)]" />

                <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center space-y-6 max-w-6xl">
  <span className="font-playfair px-4 py-3 rounded-lg text-5xl md:text-6xl font-bold text-black text-center drop-shadow-lg">
    ООО «ИсВесТрейд»
  </span>

                    <h1 className="font-playfair  border-b-4 border-accent inline-block pb-2 text-5xl md:text-6xl font-bold text-black text-center drop-shadow-lg">
                        От поля до полки: экспорт сырья и дистрибуция готовой продукции
                    </h1>

                    <p className="font-playfair text-4xl md:text-4xl font-medium text-black text-center drop-shadow-lg">
                        Мы поставляем сельскохозяйственное сырьё на экспорт и реализуем качественные продукты питания для торговых сетей.
                    </p>

                    <span className="text-primary text-2xl animate-bounce mt-4 drop-shadow-lg">⬇</span>
                </div>
            </section>

            {/* CARD SECTION */}
            <section className="py-16 bg-background animate-fade-in">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-semibold text-primary border-b-2 border-accent pb-2 mb-8 text-center">
                        Направления компании
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <Link href="/agriculture">
                            <Card className="group transition duration-300 bg-white ease-in-out transform hover:scale-105 hover:shadow-xl cursor-pointer">
                                <CardContent className="p-6 flex flex-col items-center text-center">
                                    <FaTractor className="text-4xl text-accent group-hover:text-lightgreen transition duration-300 mb-4" />
                                    <h3 className="text-xl font-semibold mb-2">Сельское хозяйство</h3>
                                    <p className="text-gray-600">
                                        Экспортируем чечевицу, нут, горох, фисташку и другие культуры
                                    </p>
                                </CardContent>
                            </Card>
                        </Link>

                        <Link href="/distribution">
                            <Card className="group transition duration-300 bg-white ease-in-out transform hover:scale-105 hover:shadow-xl cursor-pointer">
                                <CardContent className="p-6 flex flex-col items-center text-center">
                                    <FaStore className="text-4xl text-accent group-hover:text-lightgreen transition duration-300 mb-4" />
                                    <h3 className="text-xl font-semibold mb-2">Дистрибуция продукции</h3>
                                    <p className="text-gray-600">
                                        Поставляем готовые продукты питания и снэки в торговые сети
                                    </p>
                                </CardContent>
                            </Card>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default HomePage;
