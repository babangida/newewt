'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Product {
    id: number;
    name: string;
    image: {
        url: string;
    } | null;
}

function ProductsPage() {
    const [agricultureProducts, setAgricultureProducts] = useState<Product[]>([]);
    const [foodProducts, setFoodProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const agricultureRes = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/agriculture-products?populate=*`);
                const foodRes = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/food-products?populate=*`);

                console.log('Agriculture Products:', agricultureRes.data.data);
                console.log('Food Products:', foodRes.data.data);

                // Обработка новых структур данных без attributes
                const agricultureData = agricultureRes.data.data.map((item: any) => ({
                    id: item.id,
                    name: item.name,
                    image: item.image ? { url: item.image.url } : null,
                }));

                const foodData = foodRes.data.data.map((item: any) => ({
                    id: item.id,
                    name: item.name,
                    image: item.image ? { url: item.image.url } : null,
                }));

                setAgricultureProducts(agricultureData);
                setFoodProducts(foodData);
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
                                        <p className="font-semibold">{product.name}</p>
                                        {product.image?.url ? (
                                            <img
                                                src={`${process.env.NEXT_PUBLIC_API_URL}${product.image.url}`}
                                                alt={product.name}
                                                className="mx-auto"
                                            />
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
                                        <p className="font-semibold">{product.name}</p>
                                        {product.image?.url ? (
                                            <img
                                                src={`${process.env.NEXT_PUBLIC_API_URL}${product.image.url}`}
                                                alt={product.name}
                                                className="mx-auto"
                                            />
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