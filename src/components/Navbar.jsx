import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaBars, FaSearch, FaShoppingBag, FaTimes, FaUser } from 'react-icons/fa';

const Navbar = () => {

    const navItems = [
        { title: "Jewelry & Accessories", path: "/" },
        { title: "Clothing & Shoes", path: "/" },
        { title: "Home & Living", path: "/" },
        { title: "Wedding & Party", path: "/" },
        { title: "Toys & Entertainment", path: "/" },
        { title: "Art & Collectibles", path: "/" },
        { title: "Craft Supplies & Tools", path: "/" }
    ]

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }




    return (
        <header className='xl:px-28 px-4 absolute top-0 right-0 left-0'>
            <div className='flex justify-between items-center lg:py-4 py-3 font-roboto'>
                {/* Search bar */}
                <FaSearch className='text-black-default w-5 h-5 cursor-pointer' />
                {/* logo */}
                <a href="/" className='hidden lg:block'><img src="./logo.png" alt="Coral" /></a>

                {/* account and shopping btn  */}
                <div className='text-lg text-black-default flex items-center gap-4'>
                    <a href="" className='flex items-center gap-2'><FaUser /> Account</a>
                    <a href="" className='flex items-center gap-2'><FaShoppingBag /> Shopping</a>
                </div>
            </div>
            <hr />
            <div className='flex justify-between items-center py-3 lg:hidden'>
                <a href="/" className='flex justify-center'><img src="./logo.png" alt="Coral" /></a>
                <button>
                    {
                        isMenuOpen ? <FaTimes className='w-5 h-5 text-black-default' onClick={toggleMenu} /> : <FaBars className='w-5 h-5 text-black-default' onClick={toggleMenu} />
                    }
                </button>
            </div>

            {/* category */}
            <nav className={`lg:py-4 ${isMenuOpen ? '' : 'hidden lg:block'}`}>
                <ul className="lg:flex items-center justify-between text-black-default font-open-sans block text-center">
                    {
                        navItems.map(({ title, path }) => (
                            <li key={title} className='hover:text-orange-500 py-3 lg:py-0 border-y-2 lg:border-none'>
                                <Link to="/">{title}</Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </header >
    )
}

export default Navbar