import React from 'react'


const companyLogo = [
    { id: 1, img: "./img/brand/1.png", title: "Brand Image" },
    { id: 2, img: "./img/brand/2.png", title: "Brand Image" },
    { id: 3, img: "./img/brand/3.png", title: "Brand Image" },
    { id: 4, img: "./img/brand/4.png", title: "Brand Image" },
    { id: 5, img: "./img/brand/5.png", title: "Brand Image" },
]

const Category = () => {
    return (
        <div className='max-w-screen-2xl mx-auto container xl:px-28 px-4 py-28'>
            {/* brand logo */}
            <div className='flex justify-between items-center'>
                {
                    companyLogo.map(({ id, img, title }) => (
                        <div key={id}>
                            <img src={img} alt={title} /></div>
                    ))
                }
            </div>
        </div>
    )
}

export default Category