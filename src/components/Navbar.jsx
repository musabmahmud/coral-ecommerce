import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaBars, FaSearch, FaShoppingBag, FaTimes, FaUser } from 'react-icons/fa';

const Navbar = () => {

    const navItems = [
        { title: "Home", path: "/" },
        { title: "Shop", path: "/shop" },
        { title: "Pages", path: "/cart" },
        { title: "About", path: "" },
        { title: "Blog", path: "/blog" },
        { title: "Contact", path: "/contact" },
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
                    <a href="/cart" className='flex items-center gap-2'><FaShoppingBag /> Cart</a>
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
                <ul className="lg:flex items-center justify-around text-black-default font-open-sans block text-center">
                    {
                        navItems.map(({ title, path }) => (
                            <li key={title} className='transition-default py-3 lg:py-0 border-y-2 lg:border-none font-semibold'>
                                <Link to={path}>{title}</Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </header >
    )
}

export default Navbar