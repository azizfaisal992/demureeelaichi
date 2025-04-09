import React from 'react'
import Button from '../shared/Button'

function NewsletterBox() {

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }
  return (
    <div className='text-center mt-16 container mx-auto'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% discount</p>
        <p className='text-gray-400 mt-4'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio impedit fugit dolorum.
        </p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border rounded-lg pl-3 '>
            <input className='w-full sm:flex-1 outline-none' type='email' placeholder='Enter your email' required />
            <Button type="submit"  text="SUBSCRIBE"/>
        </form>
      
    </div>
  )
}
export default NewsletterBox
