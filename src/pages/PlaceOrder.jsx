import React, { useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'

function PlaceOrder() {

  const [method,setMethod] = useState('cod');
  return (
    <div className='container mx-auto flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14'>

      {/*Left side  */}
      <div className='flex rounded flex-col gap-4 w-full sm:max-w-[600px] '>

        <div className='texl-xl sm:text-2xl my-3'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'}/>
        </div>
        <div className='flex items-center gap-3' >
          <input className='border border-gray-300 rounded py-2 px-4 w-full ' type="text" placeholder='First name' />
          <input className='border border-gray-300 rounded py-2 px-4 w-full ' type="text" placeholder='Last name' />
        </div>
        <input className='border border-gray-300 rounded py-2 px-4 w-full ' type="Email" placeholder='Email Address' />
        <input className='border border-gray-300 rounded py-2 px-4 w-full ' type="text" placeholder='Street' />
        <div className='flex items-center gap-3' >
          <input className='border border-gray-300 rounded py-2 px-4 w-full ' type="text" placeholder='City' />
          <input className='border border-gray-300 rounded py-2 px-4 w-full ' type="text" placeholder='State' />
        </div>
        <div className='flex items-center gap-3' >
          <input className='border border-gray-300 rounded py-2 px-4 w-full ' type="text" placeholder='Country' />
          <input className='border border-gray-300 rounded py-2 px-4 w-full ' type="number" placeholder='ZIP Code' />
        </div>
        <input className='border border-gray-300 rounded py-2 px-4 w-full ' type="number" placeholder='Phone' />
      </div>

      {/*Right side */}
      <div className='mt-8 '>
        <div className='mt-8 w-[600px]'>
          <CartTotal/>
        </div>

        <div className='mt-12'>
          <Title text1={'PAYMENT'} text2={'METHOD'}/>
          {/*Payment Method */}
          <div className='flex justify-between gap-3 flex-col lg:flex-row'>
             <div onClick={()=>setMethod('BkashLogo')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
             <p className={`min-w-[14px] h-[14px] border-2 border-gray-400 rounded-full  ${method === 'BkashLogo' ? 'bg-green-400' : ''}`}></p>
              <img className='h-10  mx-8' src="/BkashLogo.png" alt="" />
             </div>
             <div onClick={()=>setMethod('Nagad')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
             <p className={`min-w-[14px] h-[14px] border-2 border-gray-400 rounded-full  ${method === 'Nagad' ? 'bg-green-400' : ''}`}></p>
              <img className='h-10   mx-8' src="/Nagad.png" alt="" />
             </div>
             <div onClick={()=>setMethod('COD')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
             <p className={`min-w-[14px] h-[14px] border-2 border-gray-400 rounded-full  ${method === 'COD' ? 'bg-green-400' : ''}`}></p>
              <p className='text-gray-500 text-sm font-medium mx-4 '>CASH ON DELIVERY</p>
             </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder
