import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import { Trash2 } from 'lucide-react'
import CartTotal from '../components/CartTotal'
import Button from '../shared/Button'
import { useNavigate } from 'react-router-dom'


function Cart() {
  const { products, currency, cartItems, updateQuantity } = useContext(ShopContext)
  const [cartData, setCartData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const tempData = []
    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        if (cartItems[itemId][size] > 0) {
          tempData.push({
            _id: itemId,
            size: size,
            quantity: cartItems[itemId][size],
          })
        }
      }
    }
    setCartData(tempData)
  }, [cartItems])

  return (
    <div className="border-t pt-14 container mx-auto">
      <div className="text-2xl mb-3">
        <Title text1={'YOUR'} text2={'CART'} />
      </div>

      <div>
        {cartData.length === 0 && (
          <p className="text-center text-gray-500 py-10">Your cart is empty.</p>
        )}

        {cartData.map((item, index) => {
          const productData = products.find((product) => product._id === item._id)

          if (!productData) return null

          return (
            <div
              key={index}
              className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
            >
              <div className="flex items-start gap-6">
                <img className="w-16 sm:w-20" src={productData.image[0]} alt={productData.name} />
                <div>
                  <p className="text-xs sm:text-lg font-medium">{productData.name}</p>
                  <div className='flex items-center gap-5 mt-2'>
                    <p>{currency}{productData.price}</p>
                    <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50 cursor-pointer '>{item.size}</p>
                  </div>
                </div>
              </div>
              <input onChange={(e)=> e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id,item.size,Number(e.target.value))} className='border max-w-10 sm:mx-w-20 px-1 sm:px-2 py-1' type="number" min={1}  defaultValue={item.quantity}/>
              <Trash2 onClick={()=>updateQuantity(item._id,item.size,0)} className='w-4 mr-4 sm:w-5 cursor-pointer' />
              {/* <div className="text-sm sm:text-base text-right">
                {(productData.price * item.quantity).toFixed(2)} {currency}
              </div> */}
            </div>
          )
        })}
      </div>

      <div className='flex justify-center my-20'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal/>
          <div className='w-full text-end mt-5'>
        
          <Button text="PROCEED TO CHECKOUT" onClick={() => navigate('/place-order')} />


          </div>
        </div>
      </div>
    </div>
  )

  
}

export default Cart
