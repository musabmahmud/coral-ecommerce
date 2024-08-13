import React from 'react'
import { FaSearch, FaShoppingBag, FaUser } from 'react-icons/fa'

const Navbar = () => {
    return (
        <header>
            <nav className='flex justify-between items-center container md:py-4 pt-6 pb-3'>
                {/* Search bar */}
                <FaSearch />

                {/* logo */}
                <a href="/"><img src="./logo.png" alt="Coral" /></a>

                {/* account and shopping btn  */}
                <div className='text-lg text-black-default flex items-center justify-between sm:justify-end gap-4'>
                    <a href="" className='flex items-center gap-2'><FaUser /> Account</a>
                    <a href="" className='flex items-center gap-2'><FaShoppingBag /> Shopping</a>
                </div>


            </nav>
        </header>
    )
}

export default Navbar