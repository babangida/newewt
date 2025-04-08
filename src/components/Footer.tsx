import React from 'react';

function Footer() {
    const currentYear = new Date().getFullYear();
    const companyName = 'ООО «ИсВесТрейд»';

    return (
        <footer className="bg-primary text-white py-4 text-center text-sm">
            <p>&copy; {currentYear} {companyName}. Все права защищены.</p>
        </footer>
    );
}

export default Footer;