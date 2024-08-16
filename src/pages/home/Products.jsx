import React, { useEffect, useState } from 'react'
import { FaFilter } from 'react-icons/fa'

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        const fetchData = async () =>{
            try{
                const response = await fetch("./products.json");
                const data = await response.json();
                setProducts(data);

            } catch(error){
                console.log(error);
            }
        }

        fetchData();
    }, [])

    console.log(products);
    return (
        <section>
            <div className='max-w-screen-2xl container mx-auto xl:px-28 px-4 mb-12'>
                <div>
                    <h2 className='title'>Or subscribe to the newsletter</h2>
                </div>
                <div>
                    <div className='flex flex-col md:flex-row flex-wrap justify-between items-center space-y-3 mb-8'>
                        <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap">
                            <button>All Products</button>
                            <button>Clothing</button>
                            <button>Hoodies</button>
                            <button>Bag</button>
                        </div>
                        <div className='flex justify-end mb-4 rounded-sm'>
                            <div className='bg-black p-2'>
                                <FaFilter className='text-white h-4 w-4' />
                            </div>
                            <select className='bg-black text-white p-1 rounded-sm'>
                                <option value="default">Filter</option>
                                <option value="a-z">A-Z</option>
                                <option value="z-a">Z-A</option>
                                <option value="low-to-high">Low to High</option>
                                <option value="high-to-low">High to Low</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Products