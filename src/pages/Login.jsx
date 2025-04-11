import React, { useState } from 'react'


function Login() {

  const [currencyState,setCurrencyState] = useState('Log In');
  const onSubmitHandler = async(event) => {
    event.preventDefault();

  }
  
  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-700'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className=' text-3xl font-bold'>{currencyState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />

      </div>
      
    {currencyState === 'Log In' ? '': <input type="text" className='w-full px-3 py-2 border border-gray-800 ' placeholder='Name' />  }
      <input type="email" className='w-full px-3 py-2 border border-gray-800 ' placeholder='Email' required/>
      <input type="password" className='w-full px-3 py-2 border border-gray-800 ' placeholder='Password' required />
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Forget Password?</p>
        {
          currencyState === "Log In"
          ? <p onClick={()=>setCurrencyState('Sign Up')} className='cursor-pointer'>Create Account</p>
          : <p onClick={()=>setCurrencyState('Log In')} className='cursor-pointer'>Login Here</p>
        }
      </div>
      <button className='inline-block px-6 py-3 bg-black text-white font-semibold text-sm md:text-base rounded-lg shadow-md 
              hover:bg-gray-800 transition duration-300 cursor-pointer'>{currencyState === 'Log In' ? 'Sign In' : 'Sign Up'}</button>


      
    </form>
  )
}

export default Login
