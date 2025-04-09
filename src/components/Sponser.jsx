import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Brand = [
  { id: 1, image: "/brand-logo1.png" },
  { id: 2, image: "/brand-logo2.png" },
  { id: 3, image: "/brand-logo3.png" },
  { id: 4, image: "/brand-logo4.png" },
  { id: 5, image: "/brand-logo5.png" },
];

function Sponser() {
  return (
    <div className="bg-[#c7bc9a] py-10 mt-[50px]">
      <div className="container mx-auto">
        <Swiper
          slidesPerView={3}  
          spaceBetween={20}    
          loop={true}          
          autoplay={{ delay: 2000, disableOnInteraction: false }} 
          modules={[Autoplay]}
        >
          {Brand.map((brand) => (
            <SwiperSlide key={brand.id}>
              <div className="flex justify-center">
                <img src={brand.image} alt={`Brand ${brand.id}`} className="w-24 h-24 object-contain" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Sponser;
