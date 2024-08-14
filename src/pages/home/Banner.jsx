import React from 'react'
import { FaShoppingBag } from 'react-icons/fa'

const Banner = () => {
    return (
        <div className='bg-primary-default py-6 xl:px-28 px-4'>
            <div className='flex flex-col sm:flex-row-reverse items-center justify-between gap-14 py-28'>
                <div className=''>
                    <img src="./img/banner/1.png" alt="Collections" />
                </div>
                <div className='font-roboto sm:font-light text-center sm:text-left sm:w-1/2'>
                    <h1 className='text-5xl lg:text-7xl mb-5'>Collections</h1>
                    <p className='sm:text-3xl mb-7 capitalize'>you can explore ans shop many differnt collection
                        from various barands here.</p>
                    <button className='flex items-center gap-2 text-xl font-semibold bg-black-default hover:bg-orange-500 px-6 py-2 text-white rounded mx-auto sm:mx-0'><FaShoppingBag />Shop Now</button>
                </div>
            </div>
        </div>
    )
}

export default Banner