import React from 'react';
import { Link, Outlet } from "react-router-dom";

const Product = (props) => {
  return (
    <div className="p-4 bg-white text-center">
      <Link to='mens' className="text-blue-500 hover:underline mr-4">Mens</Link>
      <Link to="womens" className="text-pink-500 hover:underline mr-4">Womens</Link>
      <Link to="jewelery" className="text-yellow-600 hover:underline mr-4">Jewelery</Link>
      <Link to="electronics" className="text-blue-700 hover:underline">Electronics</Link>
      <Outlet />
    </div>
  );
};

export default Product;
