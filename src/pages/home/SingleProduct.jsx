import React, { useEffect, useState } from 'react'
import { FaArrowAltCircleRight, FaStar } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {

    let { id } = useParams();
    const [product, setProduct] = useState([]);

    console.log(`Paise:${id}`);

    // fetching data from json 
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch('./products.json');
    //             const data = await response.json();

    //             console.log(data);

    //             let selectedItem = data.filter(product => product.id == id);

    //             console.log(selectedItem[0]);
    //             setProduct(selectedItem[0]);

    //             // window.scrollTo({ top: 0, behavior: 'smooth' });

    //         } catch (error) {
    //             console.log("Error Fetching Data", error);
    //         }
    //     }

    //     fetchData();
    // }, [id]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('../../../public/products.json');
                const data = await response.json();

                console.log(data);

                let selectedItem = data.filter(p => p.id == id);

                console.log(selectedItem[0]);
                setProduct(selectedItem[0]);

                window.scrollTo({ top: 0, behavior: 'smooth' });

            } catch (error) {
                console.log("Error Fetching Data", error);
            }
        }

        fetchData();
    }, [id])

    return (
        <section className='bg-primary-default max-w-screen-2xl mx-auto container xl:px-28 px-4 py-28'>
            <div className="p-3 max-w-7xl m-auto">
                <div className="mt-5">
                    <a href="/" className='text-gray-500'>Home</a> / <a href="/Shop" className='font-semibold text-black'>Shop</a> / {product.id}
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
                                <div className='w-full text-left my-4'>
                                    <button className='flex justify-center items-center gap-2 w-full py-3 px-4 bg-red-500 text-white font-bold border border-red-500 rounded-sm ease-in-out duration-200 shadow shadow-slate-600 hover:bg-white hover:text-red-500 lg:m-0 md:px-6'><span>Confimred Order</span> <FaArrowAltCircleRight /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SingleProduct