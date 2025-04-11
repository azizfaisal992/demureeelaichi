import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

function Footer() {
  return (
    <div className='bg-black text-white'>
      <div className='container mx-auto px-6 py-12'>
        {/* First Section - Logo and Description */}
        <div className='flex flex-col sm:grid grid-cols-1 sm:grid-cols-3 gap-12'>
          <div className='flex flex-col items-start'>
            <img src="Demure.jpg" className="w-[180px] h-[50px] rounded-xl mb-6" alt="Logo" />
            <p className='text-sm md:w-2/3 text-gray-300'>
              Lorem ipsum dolor sit amet, consectetur adipisici ti elit seddo eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco.
            </p>
            <h2 className='text-lg font-semibold mt-6'>Follow Us</h2>
            <div className="flex gap-6 mt-4">
              <a href="https://www.facebook.com/profile.php?id=61568576653948" target="_blank" rel="noopener noreferrer">
                <Facebook className="w-6 h-6 text-white hover:text-gray-400 transition-colors" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-6 h-6 text-white hover:text-gray-400 transition-colors" />
              </a>
              <a href="https://www.instagram.com/demureelaichi.bd/" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-6 h-6 text-white hover:text-gray-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* Second Section - Company Links */}
          <div className='flex flex-col'>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-3 text-sm text-gray-300'>
              <li className='cursor-pointer hover:text-gray-400 transition-colors'>Home</li>
              <li className='cursor-pointer hover:text-gray-400 transition-colors'>About Us</li>
              <li className='cursor-pointer hover:text-gray-400 transition-colors'>Delivery</li>
              <li className='cursor-pointer hover:text-gray-400 transition-colors'>Privacy Policy</li>
              <li className='cursor-pointer hover:text-gray-400 transition-colors'>Portfolio</li>
              <li className='cursor-pointer hover:text-gray-400 transition-colors'>Compare</li>
              <li className='cursor-pointer hover:text-gray-400 transition-colors'>Frequently Asked Questions</li>
            </ul>
          </div>

          {/* Third Section - Contact Info */}
          <div className='flex flex-col'>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-3 text-sm text-gray-300'>
              <li className='cursor-pointer hover:text-gray-400 transition-colors'>+123 456 7890</li>
              <li className='cursor-pointer hover:text-gray-400 transition-colors'>demureelaichi.cloth@gmai.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className='mt-12'>
          <hr className='border-gray-600' />
          <div className='flex justify-between items-center py-6'>
            <p className='text-xs text-gray-400'>Copyright 2024 @ demureelaichi.com - All Rights Reserved.</p>
            <img src="master.png" alt="Payment Methods" className="w-24" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
