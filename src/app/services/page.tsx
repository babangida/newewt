import React from 'react';

function ServicesPage() {
    return (
        <main className="py-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                    Наши Услуги
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="p-6 bg-gray-50 rounded-md">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Дистрибуция</h3>
                        <p className="text-gray-700">
                            Мы предлагаем комплексные услуги по дистрибуции товаров на международном рынке,
                            обеспечивая эффективное продвижение и доставку продукции до конечного потребителя.
                        </p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-md">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Импорт</h3>
                        <p className="text-gray-700">
                            Наша компания осуществляет импорт широкого спектра товаров, гарантируя соблюдение
                            всех таможенных процедур и логистических требований.
                        </p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-md">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Экспорт</h3>
                        <p className="text-gray-700">
                            Мы содействуем выходу отечественных товаров на международные рынки, предоставляя
                            полный спектр услуг по экспорту, включая поиск партнеров и оформление документации.
                        </p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-md">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Оптовые продажи</h3>
                        <p className="text-gray-700">
                            Предлагаем выгодные условия оптовых поставок сельскохозяйственной продукции
                            (чечевица, лен, пшеница) и товаров пищевого сегмента (фисташки, консервы и др.).
                        </p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-md">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Производство под СТМ</h3>
                        <p className="text-gray-700">
                            Мы предлагаем услуги по разработке и производству продукции под вашей собственной
                            торговой маркой (СТМ), обеспечивая контроль качества на всех этапах.
                        </p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-md">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Поставки сельхоз- и пищевой продукции</h3>
                        <p className="text-gray-700">
                            Мы специализируемся на поставках высококачественной сельскохозяйственной продукции
                            и широкого ассортимента товаров пищевого сегмента.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default ServicesPage;