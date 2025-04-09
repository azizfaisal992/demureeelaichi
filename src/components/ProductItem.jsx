import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';
import Button from '../shared/Button';

function ProductItem({id,image,name,price}) {

    const {currency} = useContext(ShopContext);

  return (
    <Link className='group block bg-white border border-gray-400 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg p-4' to={`/product/${id}`}>
        <div className='overflow-hidden '>
            <img className='hover:scale-110 transition ease-in-out rounded-xl' src={image[0]} alt="" />
        </div>
        <h1 className='pt-3 pb-1 text-lg text-gray-800'>{name}</h1>
        <p className='text-md font-medium'>{currency}{price}</p>
        <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit....</p>
        <div className='mt-3'>
        <Button text="Buy Now"/>
        </div>
        
      
    </Link>
  )
}

export default ProductItem
