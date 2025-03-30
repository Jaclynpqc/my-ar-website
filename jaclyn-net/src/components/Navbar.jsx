import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600';
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-8">
            <Link to="/" className={`${isActive('/')} font-medium`}>
              Home
            </Link>
            <Link to="/about" className={`${isActive('/about')} font-medium`}>
              About
            </Link>
            <Link to="/resume" className={`${isActive('/resume')} font-medium`}>
              Resume
            </Link>
            <Link to="/work" className={`${isActive('/work')} font-medium`}>
              Work
            </Link>
            <Link to="/playground" className={`${isActive('/playground')} font-medium`}>
              Playground
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 