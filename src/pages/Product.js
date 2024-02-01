import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Product = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="p-4 bg-white text-center">
      <div className="">
        <button
          className="text-gray-500 px-4 py-2 border-b-2 border-gray-400 rounded-md hover:bg-gray-700 hover:text-white mx-2 md:hidden"
          onClick={toggleMobileMenu}
        >
          Menu
        </button>
        <div className={`md:grid md:grid-cols-5 ${isMobileMenuOpen ? 'grid' : 'hidden'} md:justify-center mt-4 md:mt-0`}>
          <Link
            to="all"
            className="text-gray-500 px-4 py-2 border-b-2 border-gray-400 rounded-md hover:bg-gray-700 hover:text-white mx-2"
          >
            All
          </Link>
          <Link
            to="mens"
            className="text-blue-500 px-4 py-2 border-b-2 border-blue-700 rounded-md hover:bg-blue-700 hover:text-white mx-2"
          >
            Mens
          </Link>
          <Link
            to="womens"
            className="text-pink-500 px-4 py-2 border-b-2 border-pink-700 rounded-md hover:bg-pink-700 hover:text-white mx-2"
          >
            Womens
          </Link>
          <Link
            to="jewelery"
            className="text-yellow-600 px-4 py-2 border-b-2 border-yellow-500 rounded-md hover:bg-yellow-500 hover:text-white mx-2"
          >
            Jewelry
          </Link>
          <Link
            to="electronics"
            className="text-blue-700 px-4 py-2 border-b-2 border-blue-900 rounded-md hover:bg-blue-900 hover:text-white mx-2"
          >
            Electronics
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Product;
