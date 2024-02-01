import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom"; // Use Link from react-router-dom for navigation

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const scrollToBottom = () => {
    const pageHeight = document.body.scrollHeight;
    window.scrollTo({
      top: pageHeight,
      behavior: "smooth",
    });
    closeDropdown();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <button
          onClick={toggleDropdown}
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black-500 focus:ring-offset-2"
        >
          <img src="icons8-menu-144.png" alt="dd" className="w-6 h-6" />
        </button>
      </div>
      {isOpen && (
        <div className="fixed inset-y-0 h-full z-50 left-0 mt-0 w-72 shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-transform transform ease-in-out duration-300">
          <div
            className="py-1 px-3"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <button
              onClick={closeDropdown}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
            >
              <img
                src="icons8-cross-100.png"
                alt="cross"
                className="w-10 h-10"
              ></img>
            </button>
            <div className="h-10"></div>
            <Link to="/doughnuts">
              <button
                onClick={closeDropdown}
                className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 w-full text-left"
              >
                Doughnuts
              </button>
            </Link>
            <Link to="/cakes">
              <button
                onClick={closeDropdown}
                className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 w-full text-left"
              >
                Cakes
              </button>
            </Link>
            <Link to="/waffles">
              <button
                onClick={closeDropdown}
                className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 w-full text-left"
              >
                Waffles
              </button>
            </Link>
            <Link to="/pastries">
              <button
                onClick={closeDropdown}
                className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 w-full text-left"
              >
                Pastries
              </button>
            </Link>
            <Link to="/desserts">
              <button
                onClick={closeDropdown}
                className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 w-full text-left"
              >
                Desserts
              </button>
            </Link>
            <Link to="/shakes">
              <button
                onClick={closeDropdown}
                className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 w-full text-left"
              >
                Shakes
              </button>
            </Link>
            <Link to="/puffs">
              <button
                onClick={closeDropdown}
                className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 w-full text-left"
              >
                Puffs
              </button>
            </Link>
            <button
              onClick={() => {
                closeDropdown();
                if (location.pathname === "/") {
                  scrollToBottom();
                } else {
                  navigate("/aboutus", { replace: false });
                }
              }}
              className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 w-full text-left"
            >
              About us
            </button>
            {/* Add more options similarly */}
          </div>
        </div>
      )}
      {isOpen && (
        <div
          onClick={closeDropdown}
          className="fixed inset-0 bg-gray-800 bg-opacity-80 z-40"
        ></div>
      )}
    </div>
  );
};

export default Dropdown;
