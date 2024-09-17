import React from 'react'
import { FaArrowAltCircleLeft, FaHome } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Cart = () => {

    const cart = useSelector((state) => state.cart);


    return (
        <section className='max-w-screen-2xl mx-auto container xl:px-28 px-4 py-5'>
            <div className="bg-gray-100 my-5 py-5 pl-5 rounded flex justify-left items-center gap-3">
                <Link to="/" className='text-gray-500'><FaHome size="20" /></Link> / <Link to="/cart" className='font-semibold text-black uppercase'>Cart</Link>
            </div>
            <h2 className='title text-left mb-5'>Cart Items : {cart.cartItems.length}</h2>
            <div className='lg:flex justify-between gap-10'>
                <div className='lg:w-3/4'>
                    {
                        cart.cartItems.length === 0 && (
                            <h2 className='p-5 w-full bg-gray-100 rounded'>Cart is Empty!!</h2>
                        )
                    }
                    <div className='grid grid-flow-col grid-cols-6 text-center gap-4 p-4 border shadow-sm rounded mb-5 font-bold'>
                        <div>Image</div>
                        <div className='col-span-3'>Product Name</div>
                        <div>Quantity</div>
                        <div className='text-right'>Amount</div>
                    </div>
                    {
                        cart.cartItems?.map((product, index) => (
                            <div key={index} className='grid grid-flow-col grid-cols-6 items-center gap-4 p-4 border shadow-sm rounded mb-5'>
                                <div>
                                    <img src={product.image} alt={product.title} className='rounded' width="100" height="100" />
                                </div>
                                <div className='col-span-3 text-left'>
                                    <h4 className="open-sans font-semibold mb-4 text-xl">{product.title}</h4>
                                    <p>Category: <span className='text-gray-500'></span>{product.category}</p>
                                    <p>Price: <span className='font-semibold'>${product.price}</span></p>
                                </div>
                                <div className='flex items-center justify-center font-open-sans'>
                                    <button className='pr-2'>-</button>
                                    <input className='text-center p-2 border w-full' type="text" name="" value={product.cartQuantity} id="" />
                                    <button className='pl-2'>+</button>
                                </div>
                                <div className='text-right'>
                                    <span className=" font-semibold">${product.price * product.cartQuantity}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="lg:w-1/4 mt-10 lg:mt-0">
                    <div className='mb-5'>
                        <button className='bg-red-500 px-4 py-2 rounded text-white w-full'>Clear Cart</button>
                    </div>
                    <div className="flex justify-between border shadow-sm rounded bg-slate-50 p-4">
                        <span>Subtotal:  </span><span className='font-bold'>$999</span>
                    </div>
                    <button className='mt-5 px-4 py-2 rounded w-full flex justify-end items-center gap-2'><FaArrowAltCircleLeft /> Continue to Shopping</button>
                </div>
            </div>
        </section>

    )
}

export default Cart