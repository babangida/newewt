import React from 'react';
import Link from 'next/link';
import { InformationCircleIcon } from '@heroicons/react/24/solid';
import { CogIcon } from '@heroicons/react/24/solid';
import { ShoppingBagIcon } from '@heroicons/react/24/solid';
import { PhoneIcon } from '@heroicons/react/24/solid';

export default function Header() {
    return (
        <header className="bg-primary text-white py-4 shadow-md relative">
            {/* Основной контейнер с контейнером для навигации */}
            <div className="w-full px-4 sm:px-6 lg:px-8 max-w-full relative">
                {/* Контейнер с flex для навигации, выравнивание по центру */}
                <div className="flex justify-center items-center w-full space-x-6">
                    <Link href="/about" className="group text-[#D9B47C] hover:text-lightgreen transition-all duration-300 flex items-center">
                        <InformationCircleIcon className="w-5 h-5 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        О компании
                    </Link>
                    <Link href="/services" className="group text-[#D9B47C] hover:text-lightgreen transition-all duration-300 flex items-center">
                        <CogIcon className="w-5 h-5 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        Услуги
                    </Link>
                    <Link href="/" className="text-xl font-bold text-[#D9B47C] hover:text-lightgreen transition-all duration-300">
                        EASWESTRADE LLC
                    </Link>
                    <Link href="/products" className="group text-[#D9B47C] hover:text-lightgreen transition-all duration-300 flex items-center">
                        <ShoppingBagIcon className="w-5 h-5 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        Продукция
                    </Link>
                    <Link href="/contact" className="group text-[#D9B47C] hover:text-lightgreen transition-all duration-300 flex items-center">
                        <PhoneIcon className="w-5 h-5 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        Контакты
                    </Link>
                </div>

                {/* Номер телефона, фиксируется на 10px вправо от навигации */}
                <div className="absolute left-[calc(50%+450px)] top-1/2 transform -translate-y-1/2 text-[#D9B47C] hover:text-lightgreen font-bold transition-all duration-300">
                    +7 999 123-45-67
                </div>
            </div>
        </header>
    );
}