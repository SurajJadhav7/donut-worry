// DoughnutsPage.js

import React, { useState } from "react";
import Modal from "../components/Modal"; // Import the Modal component

const products = [
  { id: 2, name: "Mango Shake", price: 139, image: "mango-shake.jpeg" },
  {
    id: 3,
    name: "Chocochips Shake",
    price: 139,
    image: "chocochips-shake.jpeg",
  },
  {
    id: 3,
    name: "Blueberry Oreo Shake",
    price: 149,
    image: "blueberry-oreo-shake.jpeg",
  },
  { id: 3, name: "Nutella Shake", price: 149, image: "nutella-shake.jpeg" },
  {
    id: 1,
    name: "Strawberry Shake",
    price: 139,
    image: "strawberry-shake.jpeg",
  },
  {
    id: 1,
    name: "Lemon Iced Tea",
    price: 89,
    image: "lemon-iced-tea.jpeg",
  },
  {
    id: 1,
    name: "Peach Iced Tea",
    price: 89,
    image: "peach-iced-tea.jpeg",
  },
  // Add more products as needed
];

const ShakesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-8">Shakes / Beverages</h2>
      <div className="grid m-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-pink-400 p-4 rounded-lg shadow-md"
          >
            <img
              src={product.image}
              alt={product.name}
              className="mb-2 w-full h-60 object-cover rounded-md"
            />
            <div className="border-t border-black my-2"></div>
            <div className="flex justify-between items-center mt-4">
              <div>
                <h3 className="text-xl font-sans mb-2">{product.name}</h3>
                <p className="text-black-600 font-sans">₹{product.price}</p>
              </div>
              <button
                onClick={() => openModal(product)}
                className="bg-pink-700 text-white px-4 py-2 rounded-md hover:bg-pink-800"
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          {/* Customize the content of the modal using selectedProduct */}
          <p>Product: {selectedProduct.name}</p>
          <p>Price: ₹{selectedProduct.price}</p>
          {/* Add more information as needed */}
        </Modal>
      )}
    </div>
  );
};

export default ShakesPage;
