import React, { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';


const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-gray-800">
      <nav className="p-4 flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-500 px-4 py-2 border-b-2 border-gray-400 rounded-md hover:bg-gray-700 hover:text-white mx-2 md:hidden"
          >
            ☰
          </button>
          <ul
            className={`${
              isMobileMenuOpen ? 'flex flex-col' : 'hidden'
            } md:flex md:gap-x-5 md:mt-0`}
          >
            <li>
              <NavLink
                to="/"
                className="text-white hover:text-gray-300"
                onClick={() => {setMobileMenuOpen(false)}}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="text-white hover:text-gray-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/product"
                className="text-white hover:text-gray-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Product
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="text-white hover:text-gray-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
