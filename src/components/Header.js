import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-gray-800 text-white p-4">
            <Link to="/" className="text-white no-underline">
                <h1 className="text-2xl font-bold cursor-pointer">Rent Management App</h1>
                <h1>Made with ❤️ by Ashutosh Kumar</h1>
            </Link>
        </header>
    );
};

export default Header;
