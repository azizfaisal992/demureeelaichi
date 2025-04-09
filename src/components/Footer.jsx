import React from 'react'
import {  Facebook, Twitter, Instagram } from 'lucide-react';
import { div } from 'framer-motion/client';

function Footer() {
  return (
    <div className='bg-black'>
         <div className='container mx-auto text-white'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-8 my-10 mt-40 text-sm  '>
            <div>
            <img src="Demure.jpg" className="w-[180px] h-[50px] rounded-xl" alt="Logo" />
            <p className='w-full md:w-2/3 mt-[30px] text-white text-[14px]'>
            Lorem ipsum dolor sit amet, consectetur adipisici ti <br/>
            elit seddo eiusmod tempor incididunt utlabore et <br/> 
            doloremagna aliqua enim ad minim veniam quisnostrud <br/> exercitation ullamco
            </p>
            <h2 className='mt-8'>Follow Us</h2>
            <div className="flex gap-4 mt-2">
      <a href="https://www.facebook.com/profile.php?id=61568576653948" target="_blank" rel="noopener noreferrer">
        <Facebook className="w-5 cursor-pointer hover:text-gray-400" />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <Twitter className="w-5 cursor-pointer hover:text-gray-400" />
      </a>
      <a href="https://www.instagram.com/demureelaichi.bd/" target="_blank" rel="noopener noreferrer">
        <Instagram className="w-5 cursor-pointer hover:text-gray-400" />
      </a>
    </div>
            </div>
            <div>
                <p className='text-xl font-medium cursor-pointer mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 cursor-pointer text-white'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                    <li>Protfolio</li>
                    <li>Compare</li>
                    <li>Frequently</li>
                </ul>

            </div>
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-white'>
                    <li>+123 456 7890</li>
                    <li>demureelaichi.cloth.@gmai.com</li>

                </ul>
            </div>
        </div>
        <div>
            <hr/>
            <div className='flex justify-between'>
            <p className='py-5 text-sm text-left'> Copyright 2024@ demureelaichi.com - All Right Reserved. </p>
            <img src="master.png" alt="" />
            </div>
            
            
        </div>
      
    </div>

    </div>

   
  )
}

export default Footer
