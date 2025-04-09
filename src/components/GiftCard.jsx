import React from "react";
import Button from "../shared/Button";

function GiftCard() {
  return (
    <div className="container mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-10">
      {/* Left Section */}
      <div className="lg:w-1/2">
        <p className="text-sm text-gray-600 tracking-wide uppercase">GIFT CARDS</p>
        <h2 className="text-4xl font-bold text-gray-900 mt-2">
          Support your <br /> neighborhood
        </h2>
        <p className="text-gray-600 mt-4 text-lg">
          We believe that local businesses are an integral part of a
          neighborhoods character. Help keep local by buying a gift card!
        </p>
        <div className="mt-[10px]">
        <Button text='Shop Gift Cards'/>
        </div>
       
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 flex gap-4 relative">
        <div className="w-1/2">
          <img
            src="/banner16.png"
            alt="Gift Card"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        <div className="w-1/2">
          <img
            src="/banner17.png"
            alt="Gift"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Play Button */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white p-4 rounded-full shadow-md cursor-pointer hover:scale-110 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default GiftCard;
