'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface ImageType {
    url: string;
}
{/* 🚀 Проверка авторазвёртывания Vercel */}
interface Product {
    id: number;
    name: string;
    image: {  // Здесь добавляем поле для изображения
        url: string;
    };
}
console.log("Vercel auto-deploy test");
console.log("Vercel auto-deploy test");
function ProductsPage() {
    const [agricultureProducts, setAgricultureProducts] = useState<Product[]>([]);
    const [foodProducts, setFoodProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const agricultureRes = await axios.get('https://strapi1-1c81.onrender.com/api/agriculture-products?populate=*');
                console.log('Agriculture Products:', agricultureRes.data.data);  // Логируем данные из Strapi
                setAgricultureProducts(agricultureRes.data.data);

                const foodRes = await axios.get('https://strapi1-1c81.onrender.com/api/food-products?populate=*');

                console.log('Food Products:', foodRes.data.data);  // Логируем данные из Strapi
                setFoodProducts(foodRes.data.data);

                setLoading(false);
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <div>Загрузка...</div>;
    }

    return (
        <main className="py-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                    Наша Продукция
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Сельскохозяйственная продукция */}
                    <div className="h-full p-4 bg-gray-50 rounded-md shadow-lg">
                        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
                            Сельскохозяйственная продукция
                        </h2>
                        <div className="text-lg text-gray-700">
                            {agricultureProducts.length > 0 ? (
                                agricultureProducts.map((product) => (
                                    <div key={product.id} className="mb-4">
                                        {product.image && product.image.url ? (
                                            <div className="text-center">
                                                <p className="font-semibold">{product.name}</p>
                                                {/* Отображаем изображение */}
                                                <img
                                                    src={`http://localhost:1337${product.image.url}`}
                                                    alt={product.name}
                                                    className="w-64 h-64 object-cover rounded-md mb-2 mx-auto"
                                                />
                                            </div>
                                        ) : (
                                            <p>Нет изображения</p>
                                        )}
                                    </div>
                                ))
                            ) : (
                                <p>Нет данных</p>
                            )}
                        </div>
                    </div>

                    {/* Товары пищевого сегмента */}
                    <div className="h-full p-4 bg-gray-50 rounded-md shadow-lg">
                        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
                            Товары пищевого сегмента
                        </h2>
                        <div className="text-lg text-gray-700">
                            {foodProducts.length > 0 ? (
                                foodProducts.map((product) => (
                                    <div key={product.id} className="mb-4">
                                        {product.image && product.image.url ? (
                                            <div className="text-center">
                                                <p className="font-semibold">{product.name}</p>
                                                {/* Отображаем изображение */}
                                                <img
                                                    src={`http://localhost:1337${product.image.url}`}
                                                    alt={product.name}
                                                    className="w-64 h-64 object-cover rounded-md mb-2 mx-auto"
                                                />
                                            </div>
                                        ) : (
                                            <p>Нет изображения</p>
                                        )}
                                    </div>
                                ))
                            ) : (
                                <p>Нет данных</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default ProductsPage;