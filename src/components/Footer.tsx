'use client';

import React from 'react';
import { Send, MessageCircle } from 'lucide-react'; // иконки Telegram и WhatsApp

function Footer() {
    const currentYear = new Date().getFullYear();
    const companyName = 'ООО «ИсВесТрейд»';

    return (
        <footer className="bg-primary text-white py-6 text-sm">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

                {/* Название и копирайт */}
                <div className="text-center md:text-left">
                    <p className="font-semibold">&copy; {currentYear} {companyName}. Все права защищены.</p>
                </div>

                {/* Контакты */}
                <div className="text-center">
                    <p>Email: <a href="mailto:sales@eswestrade.ru" className="underline hover:text-gray-300">sales@eswestrade.ru</a></p>
                    <p>Телефон: <a href="tel:+79991234567" className="underline hover:text-gray-300">+7 999 123-45-67</a></p>
                </div>

                {/* Иконки соцсетей */}
                <div className="flex space-x-3">
                    <a href="#" className="bg-white text-primary p-2 rounded-full hover:bg-gray-100 transition" aria-label="Telegram">
                        <Send className="w-5 h-5" />
                    </a>
                    <a href="#" className="bg-white text-primary p-2 rounded-full hover:bg-gray-100 transition" aria-label="WhatsApp">
                        <MessageCircle className="w-5 h-5" />
                    </a>
                </div>

            </div>
        </footer>
    );
}

export default Footer;