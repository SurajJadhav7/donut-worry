// DoughnutsPage.js

import React, { useState } from "react";
import Modal from "../components/Modal"; // Import the Modal component

const products = [
  {
    id: 1,
    name: "Black Forest Cake (500gm)",
    price: 399,
    image: "black-forest-cake.avif",
  },
  {
    id: 2,
    name: "Rasmalai Cake (500gm)",
    price: 499,
    image: "rasmalai-cake.avif",
  },
  {
    id: 3,
    name: "Chocolate Crush Cake (500gm)",
    price: 499,
    image: "chocolate-crush-cake.avif",
  },
  {
    id: 4,
    name: "Pineapple Fresh Cream Cake (500gm)",
    price: 395,
    image: "pineapple-fresh-cream-cake.avif",
  },
  {
    id: 5,
    name: "Chocolate Truffle Cake (500gm)",
    price: 449,
    image: "chocolate-truffle-cake.avif",
  },
  {
    id: 6,
    name: "White Forest Cake (500gm)",
    price: 449,
    image: "white-forest-cake.jpeg",
  },
  {
    id: 7,
    name: "Butterscotch Fresh Cream Cake (500gm)",
    price: 449,
    image: "butterscotch-fresh-cream-cake.avif",
  },
  {
    id: 8,
    name: "Chocolate Chips Cake (500gm)",
    price: 439,
    image: "chocolate-chips-cake.jpeg",
  },
  // Add more products as needed
];

const CakesPage = () => {
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
      <h2 className="text-2xl font-bold mb-8">Cakes</h2>
      <div className="grid m-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-pink-400 p-4 rounded-lg shadow-md"
          >
            <img
              src={product.image}
              alt={product.name}
              className="mb-2 w-full h-60 object-contain rounded-md"
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

export default CakesPage;
