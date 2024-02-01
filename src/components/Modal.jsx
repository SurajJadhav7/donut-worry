// Modal.js

import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const Modal = ({ isOpen, onClose }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    // Attach the event listener to the document
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener when the component is unmounted
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div
      className={`fixed inset-0 ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      } transition-opacity duration-300 ease-in-out flex items-center justify-center`}
    >
      <div className="absolute inset-0 bg-gray-800 opacity-70"></div>
      <div
        ref={modalRef}
        className="bg-white p-8 max-w-lg w-full rounded-md shadow-lg z-40"
      >
        <p className="text-xl mb-8">
          For security enhancement, we are considering redirecting our payment
          functionality to a trusted food delivery platform. This ensures a
          safer transaction environment. Your approval for this redirection is
          appreciated.
        </p>
        <div className="flex justify-between">
          <button
            onClick={() =>
              (window.location.href =
                "https://www.zomato.com/pune/donut-worry-2-hinjawadi")
            }
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Zomato
          </button>
          <button
            onClick={() =>
              (window.location.href =
                "https://www.swiggy.com/restaurants/donut-worry-mulshi-hinjewadi-pune-665990")
            }
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          >
            Swiggy
          </button>
          <button
            onClick={onClose}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
