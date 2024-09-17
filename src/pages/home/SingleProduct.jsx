import React, { useEffect, useState } from 'react'
import { FaArrowAltCircleRight, FaHome, FaStar } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import RelatedProduct from './RelatedProduct';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cartSlice';
import { Bounce, toast } from 'react-toastify';

const SingleProduct = () => {

    let { id } = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/products.json');
                const data = await response.json();

                let selectedItem = data.filter(p => p.id == id);

                setProduct(selectedItem[0]);

                const quantity = document.getElementById('quantity');
                quantity.value = 1;

                window.scrollTo({ top: 200, behavior: 'smooth' });

            } catch (error) {
                console.log("Error Fetching Data", error);
            }
        }

        fetchData();
    }, [id]);

    const dispatch = useDispatch();

    const handleToAddCart = (product) => {
        const quantity = document.getElementById('quantity');
        product = { ...product, cartQuantity: quantity.value };
        dispatch(addToCart(product));

        toast.success(`${product?.title}
            Successfully added to Cart`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
            transition: Bounce,
        });
    }


    return (
        <div className="p-3 max-w-7xl m-auto">
            <div className="bg-gray-100 my-5 py-5 pl-5 rounded flex justify-left items-center gap-3">
                <Link to="/" className='text-gray-500'><FaHome size="20" /></Link> / <Link to="/Shop" className='font-semibold text-black uppercase'>Shop</Link> / <span className=' text-red-600'>{product.title}</span>
            </div>
            <div className="mt-6 sm:mt-10">
                <div className="flex flex-col sm:flex-row justify-around items-center gap-6 h-max">
                    <div className='sm:w-1/2'><img src={product.image} alt={product.title} /></div>
                    <div className='sm:w-1/2'>
                        <h1 className="title text-left">{product.title}</h1>
                        <p className="mt-3 text-gray-600 text-base leading-6 text-justify sm:text-left sm:mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quos est. Earum esse corporis accusamus! Laborum minus tempora adipisci, aut necessitatibus, error cum placeat eos dolorem, consequuntur eius saepe! Esse.</p>
                        <span className='my-2 text-xl text-yellow-400 flex items-center gap-1 sm:my-4'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </span>
                        <p className='text-xl text-red-500 font-semibold sm:text-2xl'>${product.price}</p>
                        <div className="mt-4">
                            <div className="text-left flex flex-col gap-2 w-full">
                                <label className='font-semibold'>Quantity</label>
                                <input type="number" name='quantity' min={1} id='quantity' defaultValue={1} required className='border border-gray-300 text-sm font-semibold mb-1 outline-none rounded-md m-0 py-3 px-4 focus:border-red-500' />
                            </div>
                            <div className='w-full text-left mt-10 mb-4'>
                                <button onClick={() => handleToAddCart(product)} className='flex justify-center items-center gap-2 py-3 px-4 bg-black text-white font-bold shadow rounded-sm ease-in-out duration-200 hover:bg-white hover:text-black lg:m-0 md:px-6'><span>Add to Cart</span> <FaArrowAltCircleRight /></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-3 max-w-7xl m-auto mt-5">
                    <RelatedProduct category={product.category} id={id} />
                </div>
            </div>
        </div>
    )
}

export default SingleProduct