import React from 'react'
import { Outlet, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='bg-gray-800'>
      <nav className=" p-4 justify-center text-center items-center">
      <ul className="flex justify-center items-center gap-x-5">
        <li>
          <NavLink to="/" className="text-white hover:text-gray-300">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="text-white hover:text-gray-300">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/product" className="text-white hover:text-gray-300">
            Product
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="text-white hover:text-gray-300">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
      <Outlet />
    </div>
  )
};

export default Navbar;
