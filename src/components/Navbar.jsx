import React, { useEffect, useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaSearch, FaShoppingBag, FaTimes, FaUser } from 'react-icons/fa';

const Navbar = () => {

    const navItems = [
        { title: "Home", path: "/" },
        { title: "Shop", path: "/shop" },
        { title: "About", path: "/about" },
        { title: "Blog", path: "/blog" },
        { title: "Contact", path: "/contact" },
    ]

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const [position, setPosition] = useState(false)

    // useEffect(() => {
    //     document.addEventListener("scroll", e => {
    //         let scrolled = document.scrollingElement.scrollBottom;
    //         if (scrolled > 500) {
    //             setPosition(!position)
    //         } else {
    //             setPosition(!position)
    //         }
    //     })
    // }, [position])



    return (
        <header className={`xl:px-28 px-4 top-0 right-0 left-0 ${position ? 'fixed' : 'relative'} z-20 bg-white`}>
            <div className='flex justify-between items-center lg:py-4 py-3 font-roboto'>
                {/* Search bar */}
                <FaSearch className='text-black-default w-5 h-5 cursor-pointer' />
                {/* logo */}
                <a href="/" className='hidden lg:block'><img src="/logo.png" alt="Coral" /></a>

                {/* account and shopping btn  */}
                <div className='text-lg text-black-default flex items-center gap-4'>
                    <Link to="/account" className='flex items-center gap-2'><FaUser /> Account</Link>
                    <Link to="/cart" className='flex items-center gap-2'><FaShoppingBag /> Cart</Link>
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
            <nav id="sidebar" className={`lg:py-4 ${isMenuOpen ? '' : 'hidden lg:block'}`}>
                <ul className="lg:flex items-center justify-around text-black-default font-open-sans block text-center">
                    {
                        navItems.map(({ title, path }) => (
                            <li key={title} className='transition-default py-3 lg:py-0 border-y-2 lg:border-none font-semibold'>
                                <NavLink to={path} className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }>{title}</NavLink>
                            </li>
                        ))
                    }
                </ul>
            </nav>
            <hr />
        </header >
    )
}

export default Navbar