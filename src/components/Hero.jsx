import React from "react";
import Button from "../shared/Button";

function Hero() {
  return (
    <div className="container mx-auto h-screen flex flex-col sm:flex-row border border-gray-400 bg-white">
      {/* Hero left side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center px-6 sm:px-12">
        <div className="text-[#414141] text-center sm:text-left">
          {/* Bestseller Tag */}
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <p className="w-12 md:w-16 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base tracking-wide">
              OUR BESTSELLER
            </p>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:py-3 lg:text-5xl font-bold leading-snug">
            Latest Arrival in <br /> Street Fashion
          </h1>

          {/* Description */}
          <p className="text-sm md:text-base text-gray-600 mt-3">
            Discover our trendiest collection of drop T-shirts, baggy jeans, and hoodies.
          </p>

          {/* CTA Button */}
          <div className="mt-6">
            <a href="/shop">
              <Button text="Shop Now" />
            </a>
          </div>
        </div>
      </div>

      {/* Hero right side (Static Image) */}
      <img 
        className="w-full sm:w-1/2 object-cover h-screen"
        src="Banner.jpg" 
        alt="Fashion Banner"
      />
    </div>
  );
}

export default Hero;
