import React, { useState, useEffect, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Search, ShoppingCart, Menu, ArrowLeft,Mail } from 'lucide-react';
import { UserRoundPen, Facebook, Twitter, Instagram } from 'lucide-react';
import { ShopContext } from '../context/ShopContext';
import SearchBar from './SearchBar';

function Navbar() {
  const [visible, setVisible] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState('w-0');
  const {setShowSearch,getCartCount} = useContext(ShopContext);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 640) {
        setSidebarWidth('w-64'); 
      } else if (width <= 768) {
        setSidebarWidth('w-72');  
      } else if (width <= 1024) {
        setSidebarWidth('w-80');  
      } else if (width <= 1280) {
        setSidebarWidth('w-96');  
      } else {
        setSidebarWidth('w-[380px]');  
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div className="bg-black text-white py-2 text-sm  w-full z-20">
  <div className="container mx-auto flex justify-between items-center px-5">
    <div className="flex items-center gap-5">
      <p className='flex'><Mail /> support@example.com</p>
      <p>Phone: +123 456 7890</p>
    </div>
    <div className="flex gap-4">
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
</div>


      {/* Main Navbar */}
      <div className="z-10  w-full shadow-md bg-[#FAF3E0] ">
        <div className="container mx-auto flex items-center justify-between py-5 font-medium bg-[#FAF3E0] p-5 ">
           <Link to=''><img src="Demure.jpg" className="w-[180px] h-[50px] rounded-xl" alt="Logo" /></Link>

          <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
            <NavLink to="/" className="flex flex-col items-center gap-1">
              <p>HOME</p>
              <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
            </NavLink>
            <NavLink to="/collection" className="flex flex-col items-center gap-1">
              <p>COLLECTION</p>
              <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
            </NavLink>
            <NavLink to="/blog" className="flex flex-col items-center gap-1">
              <p>BLOG</p>
              <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
            </NavLink>
            <NavLink to="/about" className="flex flex-col items-center gap-1">
              <p>ABOUT</p>
              <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
            </NavLink>
            <NavLink to="/contact" className="flex flex-col items-center gap-1">
              <p>CONTACT</p>
              <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
            </NavLink>
          </ul>
          

          <div className="flex items-center gap-6">
            <div>
            <Search onClick={()=>setShowSearch(true)} className="w-6 cursor-pointer" />
                <SearchBar/>
            </div>
            <div className="group relative">
               <Link to='/login'> <UserRoundPen className="w-6 cursor-pointer" /> </Link>
              <div className="group-hover:block hidden bg-[#FAF3E0] absolute dropdown-menu right-0 pt-4">
                <div className="flex flex-col gap-2 min-w-max py-3 px-5 bg-s-100 text-gray-500 rounded border">
                  <p className="cursor-pointer hover:text-black">My Profile</p>
                  <p className="cursor-pointer hover:text-black">Order</p>
                  <p className="cursor-pointer hover:text-black">Logout</p>
                </div>
              </div>
            </div>

            <Link to="/cart" className="relative">
              <ShoppingCart className="w-6 min-w-5" />
              <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">{getCartCount()}</p>
            </Link>

            {/* Mobile Menu Button */}
            <Menu onClick={() => setVisible(true)} className="w-6 cursor-pointer sm:hidden" />
          </div>
        </div>
      </div>

      {/* Overlay */}
      {visible && (
        <div 
          className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-50 z-40" 
          onClick={() => setVisible(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div 
        className={`fixed top-0 right-0 bottom-0 bg-white transition-all duration-300 z-50 ${visible ? sidebarWidth : 'w-0 overflow-hidden'}`}
      >
        <div className="flex flex-col text-gray-600">
          {/* Close Button */}
          <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
            <ArrowLeft className="h-4" />
            <p>Back</p>
          </div>

          {/* Sidebar Links */}
          <ul className="p-5 text-black">
            <li className="py-2 border-b"><NavLink to="/">Home</NavLink></li>
            <li className="py-2 border-b"><NavLink to="/collection">Collection</NavLink></li>
            <li className="py-2 border-b"><NavLink to="/about">About</NavLink></li>
            <li className="py-2 border-b"><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>
       
      </div>
      
    </>
  );
}

export default Navbar;
