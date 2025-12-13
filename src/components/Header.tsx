"use client";

import React from "react";
import Link from "next/link";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import { CogIcon } from "@heroicons/react/24/solid";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { PhoneIcon } from "@heroicons/react/24/solid";

export default function Header() {
  return (
    <header className="bg-primary text-white py-4 shadow-md">
      <div className="max-w-[1300px] w-full px-4 mx-auto">
        {/* 5 колонок: пустая | левое меню | логотип | правое меню | телефон */}
        <nav className="grid grid-cols-[1fr_auto_auto_auto_1fr] items-center w-full gap-x-12">
          {/* 1. Пустая зона слева (баланс для телефона) */}
          <div />

          {/* 2. Левое меню */}
          <div className="flex justify-end space-x-6">
            <Link
              href="/about"
              className="group text-[#D9B47C] hover:text-lightgreen transition-all duration-300 flex items-center"
            >
              <InformationCircleIcon className="w-5 h-5 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              О компании
            </Link>

            <Link
              href="/services"
              className="group text-[#D9B47C] hover:text-lightgreen transition-all duration-300 flex items-center"
            >
              <CogIcon className="w-5 h-5 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              Услуги
            </Link>
          </div>

          {/* 3. Логотип строго по центру */}
          <Link
            href="/"
            className="justify-self-center flex items-center text-xl font-bold text-[#D9B47C] hover:text-lightgreen whitespace-nowrap"
          >
            <InformationCircleIcon className="w-5 h-5 mr-2 opacity-0" />
            EASWESTRADE
          </Link>

          {/* 4. Правое меню */}
          <div className="flex justify-start space-x-6">
            <Link
              href="/products"
              className="group text-[#D9B47C] hover:text-lightgreen transition-all duration-300 flex items-center"
            >
              <ShoppingBagIcon className="w-5 h-5 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              Продукция
            </Link>

            <Link
              href="/contact"
              className="group text-[#D9B47C] hover:text-lightgreen transition-all duration-300 flex items-center"
            >
              <PhoneIcon className="w-5 h-5 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              Контакты
            </Link>
          </div>

          {/* 5. Телефон — прижат к правому краю растягиваемой колонки */}
          <div className="justify-self-end">
            <span className="font-bold text-[#D9B47C] whitespace-nowrap hover:text-lightgreen transition-all duration-300">
              +7 999 123-45-67
            </span>
          </div>
        </nav>
      </div>
    </header>
  );
}
