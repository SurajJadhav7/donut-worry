import React from "react";

const AboutUs = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="bg-gradient-to-r from-purple-700 to-purple-500 px-16 py-10 rounded-lg shadow-lg mx-auto">
      {/* Shop Information */}
      <div className="mb-16">
        <div className=" text-white rounded-lg px-4 py-2 mb-4">
          <h2 className="text-4xl font-bold text-black">Donut Worry</h2>
        </div>
        <div className=" text-white rounded-lg px-4 py-2 mb-4">
          <p className="m-0 text-black text-xl">
            <strong>Founder :</strong> Shalini Tripathi
          </p>
        </div>
        <div className=" text-white rounded-lg px-4 py-2 mb-4">
          <p className="mb-2 text-black text-xl">
            <strong>Shop Address :</strong> Foodies Hub, Wipro Circle, Rajiv
            Gandhi Infotech Park, Hinjewadi, Phase-2, Pune-411057
          </p>
          <p className="mb-2 text-black text-xl">
            <strong>Contact Number :</strong> +91 8551015631
          </p>
          <p className="mb-2 text-black text-xl">
            <strong>GST Number :</strong> 27IQPPS5550G1Z4
          </p>
        </div>
      </div>

      {/* Copyright and Social Links */}
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <div className="mb-4 sm:mb-0 sm:text-left">
          <p className="text-black text-xl">
            &copy; {new Date().getFullYear()} | Donut Worry India
          </p>
        </div>

        <div className="text-right">
          {/* Sitemap Link */}
          <a
            onClick={scrollToTop}
            className="text-black hover:text-gray-600 transition duration-300 text-xl mr-4"
          >
            Sitemap
          </a>
        </div>
      </div>

      <div className="flex items-center justify-center mb-4 mt-4 sm:mb-0 sm:ml-4">
        {/* Add your social media links */}
        <a
          href="https://www.instagram.com/donut_worry07?igsh=MTVzY2ttcGFxNm1kOA"
          className="text-black hover:text-gray-600 transition duration-300 sm:mr-8 mb-2 sm:mb-0"
        >
          <img src="instagram-icon.png" alt="instagram" className="h-13 w-13" />
        </a>
        <a
          href="https://www.facebook.com/donut.worry07?mibextid=LQQJ4d"
          className="text-black hover:text-gray-600 transition duration-300 mb-2 sm:mb-0"
        >
          <img src="facebook-icon.png" alt="facebook" className="h-12 w-12" />
        </a>
      </div>
    </div>
  );
};

export default AboutUs;
