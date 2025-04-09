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
                className="py-40 text-white animate-fade-in transition-all duration-700 relative"
                style={{
                    height: '670px', // Замените 500px на желаемую высоту
                }}
            >
                <style jsx>{`
                    section::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background-image: url(/pexels.jpg);
                        background-size: cover;
                        background-position: center;
                                                z-index: -1; /* Помещаем псевдоэлемент под основной контент */
                    }
                `}</style>
                {/* Опционально: можно оставить полупрозрачный оверлей, если нужен дополнительный эффект */}
                <div className="absolute inset-0 bg-white/30 z-0" />

                {/* Убедитесь, что контент находится НАД псевдоэлементом и оверлеем */}
                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    {/* Заголовок остается блочным */}
                    <h1 className="text-4xl font-bold text-primary mb-6 rounded-md text-center"> {/* Добавил text-center сюда, если нужно */}
                        Добро пожаловать в ООО «ИсВесТрейд»
                    </h1>
                    {/* Добавляем w-fit и mx-auto для <p> */}
                    <p className="w-fit mx-auto text-xl font-bold mb-4 text-primary bg-lightgreen/50 p-2 rounded-md text-center"> {/* Добавил text-center сюда, если нужно */}
                        От поля до полки: экспорт сырья и дистрибуция готовой продукции
                    </p>
                    {/* Добавляем w-fit и mx-auto для <p> */}
                    <p className="w-fit mx-auto text-lg font-bold mb-4 text-primary bg-lightgreen/50 p-2 rounded-md text-center"> {/* Добавил text-center сюда, если нужно */}
                        Мы поставляем сельскохозяйственное сырьё на экспорт и реализуем качественные продукты питания для торговых сетей.
                    </p>
                </div>
            </section>

            {/* CARD SECTION */}
            <section className="py-16 bg-background animate-fade-in"> {/* Увеличил py-1 до py-16 для большего отступа */}
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-semibold text-primary border-b-2 border-accent pb-2 mb-8 text-center">
                        Направления компании
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto ">
                        <Link href="/agriculture" legacyBehavior>
                            <a className="block"> {/* Оборачиваем Card в <a> для Link */}
                                <Card className="group transition duration-300 bg-white ease-in-out transform hover:scale-105 hover:shadow-xl cursor-pointer h-full"> {/* Добавил h-full */}
                                    <CardContent className="p-6 flex flex-col items-center text-center">
                                        <FaTractor className="text-4xl text-accent group-hover:text-lightgreen transition duration-300 mb-4" />
                                        <h3 className="text-xl font-semibold mb-2">Сельское хозяйство</h3>
                                        <p className="text-gray-600">
                                            Экспортируем чечевицу, нут, горох, фисташку и другие культуры
                                        </p>
                                    </CardContent>
                                </Card>
                            </a>
                        </Link>

                        <Link href="/distribution" legacyBehavior>
                            <a className="block"> {/* Оборачиваем Card в <a> для Link */}
                                <Card className="group transition duration-300 bg-white ease-in-out transform hover:scale-105 hover:shadow-xl cursor-pointer h-full"> {/* Добавил h-full */}
                                    <CardContent className="p-6 flex flex-col items-center text-center">
                                        <FaStore className="text-4xl text-accent group-hover:text-lightgreen transition duration-300 mb-4" />
                                        <h3 className="text-xl font-semibold mb-2">Дистрибуция продукции</h3>
                                        <p className="text-gray-600">
                                            Поставляем готовые продукты питания и снэки в торговые сети
                                        </p>
                                    </CardContent>
                                </Card>
                            </a>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default HomePage;