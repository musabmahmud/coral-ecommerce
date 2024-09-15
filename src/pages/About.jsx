import React from 'react'
import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <section className='max-w-screen-2xl mx-auto container xl:px-28 px-4 py-5'>
            <div className="bg-gray-100 my-5 py-5 pl-5 rounded flex justify-left items-center gap-3">
                <Link to="/" className='text-gray-500'><FaHome size="20" /></Link> / <Link to="/Shop" className='font-semibold text-red-600 uppercase'>Shop</Link>
            </div>
            <div>About</div>
        </section>
    )
}

export default About