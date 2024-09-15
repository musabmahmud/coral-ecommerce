import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({ product }) => {
  return (
    <div className='shadow-sm rounded overflow-hidden'>
      <Link to={`../product/${product.id}`}>
        <img className='hover:scale-110 transition-all duration-300' src={product.image} alt={product.title} />
      </Link>
      <div className='py-4 px-4 font-open-sans'>
        <h4 className="text-base open-sans font-semibold mb-2 ">{product.title}</h4>
        <div className="flex justify-between items-center">
          <p className='text-black-default/50'>{product.category}</p>
          <p className='font-semibold'>${product.price}</p>
        </div>
      </div>
    </div>
  )
}

export default Card