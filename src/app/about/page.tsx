import React from 'react';

function AboutPage() {
    return (
        <main className="py-10 bg-gray-50"> {/* Добавили класс bg-gray-50 для фона */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white shadow rounded-md p-6"> {/* Добавили классы для белого фона, тени, скругления углов и внутренних отступов */}
                <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center"> {/* Добавили класс text-center для центрирования заголовка */}
                    О компании ООО «ИсВесТрейд» (EASWESTRADE LLC)
                </h1>
                <p className="text-lg text-gray-700 mb-4">
                    Мы - международная инвестиционно-коммерческая компания, основанная в [год основания, если есть].
                    Наша миссия заключается в [опишите миссию компании].
                </p>
                <p className="text-lg text-gray-700 mb-4">
                    На протяжении многих лет мы успешно занимаемся дистрибуцией, импортом, экспортом и
                    оптовыми продажами широкого спектра продукции.
                </p>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Основные направления деятельности:
                </h2>
                <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
                    <li>Дистрибуция</li>
                    <li>Импорт</li>
                    <li>Экспорт</li>
                    <li>Оптовые продажи</li>
                    <li>Производство продукции под СТМ</li>
                    <li>Поставки сельскохозяйственной продукции (чечевица, лен, пшеница)</li>
                    <li>Поставки товаров пищевого сегмента (фисташки, консервированные кукуруза, горошек, оливки)</li>
                </ul>
                {/* Вы можете добавить здесь больше информации о компании, ее истории, команде и т.д. */}
            </div>
        </main>
    );
}

export default AboutPage;