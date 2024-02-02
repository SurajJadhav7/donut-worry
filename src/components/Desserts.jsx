import React from "react";
import { Link } from "react-router-dom";

const Desserts = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gradient-to-r from-pink-400 to-pink-700 rounded shadow items-center justify-center md:pl-10 lg:pl-20 p-4 md:h-[400px] lg:h-[600px]">
      {/* <div className=""> */}
      <img
        src="brownie.png"
        alt="Dessert"
        className="w-full mr-[50px] h-96 md:w-96 md:h-96 rounded mb-4 md:mb-0 transition-transform duration-300 transform hover:scale-105" // Responsive image sizing
        style={{ maxWidth: "50%", height: "auto" }}
      />
      {/* </div> */}
      <div className="mr-[50px] md:w-1/2 md:pl-4">
        <p className="text-lg md:text-xl lg:text-2xl font-extrabold mb-8 text-white">
          Embark on a sweet adventure with our desserts, masterpieces of
          creativity that leave you craving more
        </p>
        {/* Add more product details as needed */}
        <Link to="/desserts">
          <button className="inline-flex items-center group text-white bg-pink-700 py-3 px-6 rounded-full">
            <span className="mr-1 group-hover:underline">Check it out</span>
            <img
              src="right-arrow-without-circle.png" // Replace with the path to your arrow image
              alt="Arrow"
              className="w-5 h-5 transition-transform transform translate-x-0 group-hover:translate-x-1"
              style={{ filter: "invert(100%)" }}
            />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Desserts;
