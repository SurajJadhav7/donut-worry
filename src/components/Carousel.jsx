import React, { useState, useEffect } from "react";

const Carousel = () => {
  const images = [
    "cake-wallpaper.jpeg",
    "doughnut-wallpaper.jpeg",
    "waffle-wallpaper.jpeg",
    "shake-wallpaper.jpeg",
    "puff.jpeg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    // ... (previous code)

    <div className="relative">
      <div className="h-[56.25vw] sm:h-[56.25vw] md:h-[56.25vw] lg:h-[42vw] xl:h-[46vw] relative overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`${
              index === currentImageIndex ? "slide-in" : "hidden"
            } absolute w-full h-full justify-center items-center transition-opacity duration-700 ease-in-out`}
          >
            <img
              src={image}
              alt={`Slide ${index}`}
              className={`block w-full h-full absolute top-0 left-0 transform ${
                index === currentImageIndex
                  ? "slide-in-from-right"
                  : "slide-out-to-right"
              } transition-transform duration-700 ease-in-out`}
            />
          </div>
        ))}
      </div>
      <div className="absolute flex left-1/2 -translate-x-1/2 transform translate-x(-50%) bottom-5 space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              index === currentImageIndex ? "bg-black" : "border border-black"
            }`}
            aria-current={index === currentImageIndex ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setCurrentImageIndex(index)}
          ></button>
        ))}
      </div>
      <button
        type="button"
        className="absolute top-0 left-0 z-40 flex items-center justify-center h-full px-4 cursor-pointer focus:outline-none"
        onClick={goToPrevImage}
      >
        <img src="left-arrow.png" alt="left-arrow" className="w-12 h-12" />
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-40 flex items-center justify-center h-full px-4 cursor-pointer focus:outline-none"
        onClick={goToNextImage}
      >
        <img src="right-arrow.png" alt="right-arrow" className="w-11 h-11" />
      </button>
    </div>

    // ... (remaining code)
  );
};

export default Carousel;
