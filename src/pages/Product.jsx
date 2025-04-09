import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { Star } from 'lucide-react';
import Button from '../shared/Button';



function Product() {

    const {productId} = useParams();
    const {products, currency,addToCart } = useContext(ShopContext);
    const [productData,setProductData] = useState(false);
    const [image,setImage] = useState('')
    const [size,setSize] = useState('')
    
    const fetchProductData = async () => {
        products.map((item)=>{
            if(item._id === productId){
                setProductData(item)
                setImage(item.image[0])
                return null;
                
            }
        })
    }
useEffect(()=>{
    fetchProductData()
},[productId])

  return productData ? (
    <div className=' pt-10 border-t container mx-auto transition-opacity ease-in duration-500 opacity-100'>
        {/*Product Data */}
        <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
            {/*Product Image */}
            <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
                <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
                    {
                        productData.image.map((item,index)=>(
                            <img onClick={()=>setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
                        ))
                    }
                </div>
                <div className='w-full sm:w-[80%]'>
                    <img className='w-full h-auto' src={image} alt="" />

                </div>
            </div>

            {/*Product INfo */}
            <div className='flex-1 '>
                <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
                <div className='flex item-center gap-1 mt-2'>
                <Star className='w-5 text-yellow-600'  />
                <Star className='w-5 text-yellow-600' />
                <Star className='w-5 text-yellow-600' />
                <Star className='w-5 text-yellow-600' />
                <Star className='w-5 text-yellow-600' />
                <p className='pl-2'>(122 Customer Review)</p>
                </div>
                <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
                <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
                <div className='flex flex-col gap-4 my-8'>
                    <p>Select Size</p>
                    <div className='flex gap-2'>
                        {productData.sizes.map((item,index)=>(
                            <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 cursor-pointer ${item === size ? 'border-orange-500':'' }`} key={index}>{item}</button>
                        ))}
                    </div>
                </div>
                {/* <Button
    onClick={() => addToCart(productData._id, size)}
    text="ADD TO CART"
    disabled={!size}
/> */}
<button onClick={() => addToCart(productData._id, size)} className='inline-block px-6 py-3 bg-black text-white font-semibold text-sm md:text-base rounded-lg shadow-md 
              hover:bg-gray-800 transition duration-300 cursor-pointer' >ADD TO CART</button>
                <hr className='mt-8 sm:w-4/5' />
                <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                    <div className='flex gap-2'><p>Available: </p><p className='text-black'>In stock</p></div>
                    <p>100% Original Product.</p>
                    <p>Cash on delivery is available on this product</p>
                    <p>Easy return and exchange policy within 7 days</p>
                </div>
            </div>
        </div>

        {/*Description and Review Section */}
        <div className='mt-20'>
            <div className='flex'>
                <b className='border px-5 py-3 text-sm'>Description</b>
                <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
            </div>
            <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum perferendis qui est, modi minus molestias ipsam autem at officiis nostrum mollitia debitis quidem? Eum consequatur itaque, officia cumque harum nostrum debitis nobis! Beatae saepe quod asperiores magnam impedit illo placeat animi vel! Excepturi, facilis in est vel aliquam culpa enim dolore soluta magnam! Autem aliquid aliquam molestiae quos iusto eveniet? Porro possimus totam aliquid maiores aperiam voluptates harum labore officiis eveniet, impedit non quam aliquam dolorum doloribus. Dolores, porro, ab quidem quae cupiditate temporibus modi provident cumque placeat molestias vitae voluptatem nihil quo sapiente perspiciatis sequi vero officia dignissimos doloribus.</p>
                <p>Welcome to our eCommerce website, your one-stop destination for a wide variety of high-quality products at competitive prices. From fashion to electronics, home decor to beauty essentials, we offer a diverse range of items to meet all your needs. Our user-friendly platform ensures a seamless shopping experience, with secure payment options and fast delivery services. Explore exclusive deals, top-rated products, and customer reviews to make informed decisions. Enjoy hassle-free returns and exceptional customer support. Start shopping today and discover great value, all from the comfort of your home. Your satisfaction is our priority!</p>
            </div>
        </div>

        {/* display related product */}
        {/* <RelatedProducts category={productData.category} subCategory={productData.subCategory} /> */}
        


      
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product
