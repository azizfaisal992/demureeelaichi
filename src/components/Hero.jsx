import React from "react";
import { motion } from "framer-motion";
import Button from "../shared/Button";

function Hero() {
  return (
    <div className=" container mx-auto h-screen flex flex-col sm:flex-row border border-gray-400 bg-white">
      {/* Hero left side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center px-6 sm:px-12">
        <motion.div 
          className="text-[#414141] text-center sm:text-left"
          initial={{ opacity: 0, y: 50 }} // Fade-in & slide-up
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Bestseller Tag */}
          <motion.div 
            className="flex items-center justify-center sm:justify-start gap-2"
            initial={{ opacity: 0, x: -50 }} // Slide from left
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="w-12 md:w-16 h-[2px] bg-[#414141]"></p>
            <motion.p className="font-medium text-sm md:text-base tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              OUR BESTSELLER
            </motion.p>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-3xl sm:py-3 lg:text-5xl font-bold leading-snug"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Latest Arrival in <br /> Street Fashion
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-sm md:text-base text-gray-600 mt-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover our trendiest collection of drop T-shirts, baggy jeans, and hoodies.
          </motion.p>

          {/* CTA Button */}
          <motion.div 
            className="mt-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a href="/shop">
              <Button text="Shop Now" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Hero right side (Image with Animation) */}
      <motion.img 
        className="w-full sm:w-1/2 object-cover h-screen"
        src="Banner.jpg" 
        alt="Fashion Banner"
        initial={{ scale: 1.2, opacity: 0 }} // Zoom-in effect
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </div>
  );
}

export default Hero;
