import React from 'react';

function ContactsPage() {
    return (
        <main className="py-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                    Контакты
                </h1>
                <div className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                        Наша компания
                    </h2>
                    <p className="text-gray-700">
                        ООО «ИсВесТрейд»
                    </p>
                    <p className="text-gray-700">
                        Юридический адрес: [Укажите ваш юридический адрес]
                    </p>
                    <p className="text-gray-700">
                        Фактический адрес: [Укажите ваш фактический адрес]
                    </p>
                </div>
                <div className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                        Контактная информация
                    </h2>
                    <p className="text-gray-700">
                        Телефон: [Укажите ваш номер телефона]
                    </p>
                    <p className="text-gray-700">
                        Email: [Укажите ваш адрес электронной почты]
                    </p>
                </div>
                {/* Можно добавить форму обратной связи здесь */}
            </div>
            <div className="mt-10 p-6 bg-gray-100 rounded-md max-w-sm mx-auto w-full">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    Напишите нам
                </h2>
                <form className="space-y-4 max-w-md mx-auto">
                    <div>
                        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                            Имя
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                            placeholder="Ваше имя"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                            placeholder="Ваш email"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                            Сообщение
                        </label>
                        <textarea
                            id="message"
                            rows={5}
                            className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                            placeholder="Ваше сообщение"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-md focus:outline-none focus:shadow-outline"
                    >
                        Отправить
                    </button>
                </form>
            </div>
        </main>
    );
}

export default ContactsPage;