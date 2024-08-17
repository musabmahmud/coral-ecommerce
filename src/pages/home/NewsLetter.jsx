import React from 'react'
import { Link } from 'react-router-dom'


const instaImages = [
    { id: 0, img: "./img/instagram/1.png", title: "Brand Image" },
    { id: 1, img: "./img/instagram/2.png", title: "Brand Image" },
    { id: 2, img: "./img/instagram/3.png", title: "Brand Image" },
    { id: 3, img: "./img/instagram/4.png", title: "Brand Image" },
    { id: 4, img: "./img/instagram/5.png", title: "Brand Image" },
    { id: 5, img: "./img/instagram/6.png", title: "Brand Image" },
]



const NewsLetter = () => {
    return (
        <div className='bg-primary-default xl:px-28 px-4 py-16'>
            <h2 className="title mb-8">Follow products and discounts on Instagram</h2>
            {/* Category Grid  */}
            <div className='mt-8'>
                <div className="flex md:flex-row flex-col items-center justify-center gap-4 mb-20">
                    {/* Note: Must use square images to make proper grid list  */}
                    {
                        instaImages.map(({ id, img, title }) => (
                            <Link to={img} key={id}><img className='object-cover w-full hover:scale-105 transition-default rounded-sm' src={img} alt={title} /></Link>
                        ))
                    }
                </div>

                {/* NewsLetter */}
                <div>
                    <h2 className="title">Or subscribe to the newsletter</h2>
                    <form className='md:w-1/2 w-full mx-auto text-center'>
                        <input className='h-8 bg-transparent outline-none border-b-2 pl-2 border-black md:w-2/3 placeholder:text-black/50 mr-4' type="email" name='email' id='email' placeholder='Email Address...' />
                        <input type="submit" value={"Submit"} className='h-8 bg-transparent outline-none border-b-2 px-2 border-black placeholder:text-black/50 transition-default' />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter