import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

function LatestCollection() {

    const {products} = useContext(ShopContext);
    const [latestProducts,setLatestProducts] = useState([]);


    useEffect(()=>{
       setLatestProducts(products.slice(0,10));
    },[])

  return (
    <div className='container mx-auto'>
        <div className='text-center mt-[60px] py-8 text-3xl'>
            <Title text1={'LATEST'} text2={"COLLECTION"}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text:base text-gray-600'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem aperiam dolor aliquid nobis facere ex?</p>
             
        </div>
        {/*Rendering Producsts*/}
        <div className='  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                latestProducts.map((item,index)=>(
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                ))
            }
        </div>
    </div>
  )
}
export default LatestCollection
