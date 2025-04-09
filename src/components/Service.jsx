import React from "react";
import Title from "./Title";
import { motion } from "framer-motion";


const services = [
  {
    id: 1,
    image:"/DTFF.png",
    name: "DTF",
    description: "Building fast, scalable, and responsive websites.",
  },
  {
    id: 2,
    image: "/Customi.png",
    name: "CUSTOMIZATION",
    description: "You can customize your own design",
  },
  {
    id: 3,
    image: "/Shipping.png",
    name: "SHIPPING All OVER BD",
    description: "We shipped all over Bangladesh Throughout Best Curioer ",
  },
  {
    id: 4,
    image: "/exchange.png",
    name: "EASY EXCHANGE POLICY",
    description: "We offer hassle free exchange policy",
  },
  {
    id: 5,
    image: "/return.png",
    name: "7 DAYS RETURN POLICY",
    description: "We provide 7 days free return policy",
  },
  {
    id: 6,
    image: "/Customer.png",
    name: "BEST CUSTOMER SUPPORT",
    description: "We provide 24/7 customer support",
  },
  
];

function Service() {
  return (
    <div className="relative py-16">
      {/* Background Image */}
      <div
        className="absolute h-[] inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/Hero.jpg')" }}
      ></div>

      {/* Content Container */}
      <div className="container mx-auto px-5 relative z-10">
        {/* Title */}
        <div className="text-center text-[30px] mb-10">
          <Title text1="OUR" text2="POLICIES" />
          <p className="text-[20px]">Our focus is on delivering you the absolute best support guiding you through training and providing.</p>
        </div>
        

        {/* Service Grid with Scroll Animation */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className=" rounded-lg shadow-md hover:shadow-lg transition duration-300 p-5 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Image Section */}
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-52 object-cover rounded-md transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Title Section */}
              <h3 className="mt-4 text-[25px] font-bold text-gray-800">{service.name}</h3>

              {/* Description Section */}
              <p className="mt-2 text-gray-600 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Service;
