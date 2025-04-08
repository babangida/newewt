import React from 'react';

function ProductsPage() {
    return (
        <main className="py-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                    Наша Продукция
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="h-full p-2 bg-gray-50 rounded-md flex flex-col align-items-center"> {/* Убрали justify-around */}
                        <h2 className="text-2xl font-semibold text-gray-800 text-center mt-0">
                            Сельскохозяйственная продукция
                        </h2>
                        <ul className="list-disc list-outside text-lg text-gray-700 flex flex-col items-start ml-4">
                            <li className="ml-0">Чечевица</li>
                            <li className="ml-0">Лен</li>
                            <li className="ml-0">Пшеница</li>
                            {/* Добавьте другие виды сельскохозяйственной продукции, если есть */}
                        </ul>
                    </div>
                    <div className="h-full p-2 bg-gray-50 rounded-md flex flex-col justify-start align-items-center"> {/* Изменили justify-center на justify-start */}
                        <h2 className="text-2xl font-semibold text-gray-800 text-center mt-0">
                            Товары пищевого сегмента
                        </h2>
                        <ul className="list-disc list-outside text-lg text-gray-700 flex flex-col items-start ml-4">
                            <li className="ml-0">Фисташки</li>
                            <li className="ml-0">Консервированная кукуруза</li>
                            <li className="ml-0">Консервированный горошек</li>
                            <li className="ml-0">Оливки</li>
                            {/* Добавьте другие товары пищевого сегмента, если есть */}
                        </ul>
                    </div>
                    {/* Вы можете добавить другие категории продукции, если необходимо */}
                </div>
            </div>
        </main>
    );
}

export default ProductsPage;