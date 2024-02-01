// DoughnutsPage.js

import React, { useState } from "react";
import Modal from "../components/Modal"; // Import the Modal component

const products = [
  { id: 1, name: "Brownie", price: 70, image: "brownie.jpeg" },
  { id: 2, name: "Choco Lava Cake", price: 90, image: "choco-lava-cake.jpeg" },
  {
    id: 3,
    name: "Chocochips Jar Cake",
    price: 179,
    image: "chocochips-jar-cake.jpeg",
  },
  {
    id: 4,
    name: "Strawberry Jar Cake",
    price: 179,
    image: "strawberry-jar-cake.jpeg",
  },
  {
    id: 5,
    name: "Blueberry Jar Cake",
    price: 199,
    image: "blueberry-jar-cake.jpeg",
  },
  {
    id: 6,
    name: "Red Velvet Jar Cake",
    price: 199,
    image: "red-velvet-jar-cake.jpeg",
  },
  // Add more products as needed
];

const DessertsPage = () => {
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
      <h2 className="text-2xl font-bold mb-8">Desserts</h2>
      <div className="grid m-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-pink-400 p-4 rounded-lg shadow-md"
          >
            <img
              src={product.image}
              alt={product.name}
              className="mb-2 w-full h-90 object-contain rounded-md"
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

export default DessertsPage;
