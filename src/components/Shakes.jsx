import React from "react";
import { Link } from "react-router-dom";

const Shakes = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row bg-gradient-to-r from-purple-700 to-purple-400 rounded shadow items-center justify-center md:pl-10 lg:pl-20 p-4 md:h-[400px] lg:h-[600px]">
      <div className="md:w-1/2 md:pr-4">
        {" "}
        {/* Updated this div to have half width and padding on the right */}
        <p className="text-lg md:text-xl lg:text-2xl font-extrabold mb-8 text-white">
          Satisfy your cravings with our luscious shakes, a celebration of
          creamy, dreamy indulgence
        </p>
        {/* Add more product details as needed */}
        <Link to="/shakes">
          <button className="inline-flex items-center group text-white bg-purple-800 py-3 px-6 rounded-full">
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
      <img
        src="nutella-milkshake-11-PhotoRoom.png-PhotoRoom.png"
        alt="Shake"
        className="w-full h-96 md:w-96 md:h-96 rounded mb-4 md:mb-0 transition-transform duration-300 transform hover:scale-105" // Responsive image sizing
        style={{ maxWidth: "50%", height: "auto" }}
      />
    </div>
  );
};

export default Shakes;
