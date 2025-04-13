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
                className="py-20 text-white text-center animate-fade-in transition-all duration-700 relative"
                style={{
                    backgroundImage: 'url(/pexels.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold text-primary mb-6 rounded-md inline-block">
                        Добро пожаловать в ООО «ИсВесТрейд»
                    </h1>
                    <p className="text-xl font-bold mb-4 text-primary bg-lightgreen/50 p-0 rounded-md inline-block">
                        От поля до полки: экспорт сырья и дистрибуция готовой продукции
                    </p>
                    <p className="text-lg font-bold mb-4 text-primary bg-lightgreen/50 p-0 rounded-md inline-block">
                        Мы поставляем сельскохозяйственное сырьё на экспорт и реализуем качественные продукты питания для торговых сетей.
                    </p>
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