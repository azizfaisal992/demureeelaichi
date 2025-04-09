import { text } from 'framer-motion/client'
import React from 'react'

function SizeButton(text) {
  return (
    <button className='inline-block px-6 py-3 bg-black text-white font-semibold text-sm md:text-base rounded-lg shadow-md 
              hover:bg-gray-800 transition duration-300 cursor-pointer'>
                {text}

    </button>

  )
}

export default SizeButton
