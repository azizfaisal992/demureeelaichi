import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    id: 1,
    name: "Abdullah Ayon",
    profession: "Fashion",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.",
    image: "/Review1.jpg", // Update with actual image path
  },
  {
    id: 2,
    name: "Tamjid Ahmed Siam",
    profession: "Fashion",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.",
    image: "/Review2.jpg", // Update with actual image path
  },
  {
    id: 3,
    name: "Kawser Ahmed Niloy",
    profession: "Fashion",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.",
    image: "/Review3.jpg", // Update with actual image path
  },
];

function Review() {
  return (
    <div className=" text-black relative py-16 px-8 flex justify-center items-center text-center">
        <div
        className="absolute w-full inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('/Reviewbg.jpg')" }}
      ></div>
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        className="max-w-lg"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="flex justify-center mb-4">
              <img
                src={review.image}
                alt={review.name}
                className="w-20 h-20 rounded-full border-4 border-white"
              />
            </div>
            <h2 className="text-xl font-bold">{review.name}</h2>
            <p className="text-sm text-black font-bold">{review.profession}</p>
            <p className="mt-8 text-black">{review.review}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Review;
