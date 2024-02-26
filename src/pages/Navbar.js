import React from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="bg-transparent w-auto">
      <nav className="px-12 flex flex-row justify-center items-center">
        <div className="text-3xl font-black text-center text-gray-800 border-b border-gray-200">
          <ul className="flex justify-between -mb-px border-gray-800">
            <li className="">
              <NavLink
                to="/Summary"
                className={`inline-block px-12 py-4 border-b-8 rounded-t-lg hover:text-gray-600 ${
                  location.pathname === '/Summary' ? 'text-blue-500 border-blue-500' : 'border-gray-800'
                }`}
                aria-current={location.pathname === '/Summary' ? 'page' : undefined}
              >
                Summary
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to="/Markets"
                className={`inline-block px-12 py-4 border-b-8 rounded-t-lg hover:text-gray-600 ${
                  location.pathname === '/Markets' ? 'text-blue-500 border-blue-500' : 'border-gray-800'
                }`}
                aria-current={location.pathname === '/Markets' ? 'page' : undefined}
              >
                Markets
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to="/Social"
                className={`inline-block px-12 py-4 border-b-8 rounded-t-lg hover:text-gray-600 ${
                  location.pathname === '/Social' ? 'text-blue-500 border-blue-500' : 'border-gray-800'
                }`}
                aria-current={location.pathname === '/Social' ? 'page' : undefined}
              >
                Social
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to="/EducationalCourses"
                className={`inline-block px-12 py-4 border-b-8 rounded-t-lg hover:text-gray-600 ${
                  location.pathname === '/EducationalCourses' ? 'text-blue-500 border-blue-500' : 'border-gray-800'
                }`}
                aria-current={location.pathname === '/EducationalCourses' ? 'page' : undefined}
              >
                Educational Courses
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/AnalyticsReports"
                className={`inline-block px-12 py-4 border-b-8 rounded-t-lg hover:text-gray-600 ${
                  location.pathname === '/AnalyticsReports' ? 'text-blue-500 border-blue-500' : 'border-gray-800'
                }`}
                aria-current={location.pathname === '/AnalyticsReports' ? 'page' : undefined}
              >
                Analytics Reports
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
