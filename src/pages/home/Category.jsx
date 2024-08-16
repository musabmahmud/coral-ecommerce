import React from 'react'
import { Link } from 'react-router-dom'


const companyLogo = [
    { id: 1, img: "./img/brand/1.png", title: "Brand Image" },
    { id: 2, img: "./img/brand/2.png", title: "Brand Image" },
    { id: 3, img: "./img/brand/3.png", title: "Brand Image" },
    { id: 4, img: "./img/brand/4.png", title: "Brand Image" },
    { id: 5, img: "./img/brand/5.png", title: "Brand Image" },
]


const categoryImages = [
    { id: 0, img: "./img/category/1.png", title: "Brand Image" },
    { id: 1, img: "./img/category/3.png", title: "Brand Image" },
    { id: 2, img: "./img/category/4.png", title: "Brand Image" },
    { id: 3, img: "./img/category/2.png", title: "Brand Image" },
    { id: 4, img: "./img/category/5.png", title: "Brand Image" },
]

const Category = () => {
    return (
        <section className='relative'>
            <div className='absolute top-1/2 left-20 transform -translate-x-1/2 translate-y-1/2 hidden xl:block'>
                <p className='font-roboto font-normal text-center bg-black-default text-white p-2 rounded-sm uppercase md:-rotate-90 text-2xl'>Explore new and popular styles</p>
            </div>
            <div className='max-w-screen-2xl mx-auto container xl:px-28 px-4 py-28'>
                {/* brand logo */}
                <div className='flex justify-around items-center flex-wrap gap-4'>
                    {
                        companyLogo.map(({ id, img, title }) => (
                            <div key={id}>
                                <img src={img} alt={title} /></div>
                        ))
                    }
                </div>
                {/* Category Grid  */}
                <div className='mt-8'>
                    <div className="grid lg:grid-cols-4 grid-flow-cols gap-4">
                        {/* Note: Must use square images to make proper grid list  */}
                        {
                            categoryImages.map(({ id, img, title }) => (
                                <div className={`${id === 0 ? 'row-span-2 col-span-2' : ''}`} key={id}>
                                    <Link to={img} ><img className='object-cover w-full hover:scale-105 transition-all duration-200' src={img} alt={title} /></Link>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Category