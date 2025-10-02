import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/register');
  };

  return (
    <nav className="relative z-50 flex items-center justify-between bg-red-800 p-6 text-white">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold text-yellow-300">LOGO</h1>
      </div>
      <div className="hidden md:flex items-center space-x-4">
        <ul className="flex space-x-4">
          <li className="hover:text-black hover:bg-yellow-300 p-2 font-bold rounded-lg ease-in-out transition duration-300">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-black hover:bg-yellow-300 p-2 font-bold rounded-lg ease-in-out transition duration-300">
            <Link to="/products">Products</Link>
          </li>
          <li className="hover:text-black hover:bg-yellow-300 p-2 font-bold rounded-lg ease-in-out transition duration-300">
            <Link to="/about">About US</Link>
          </li>
          <li className="hover:text-black hover:bg-yellow-300 p-2 font-bold rounded-lg ease-in-out transition duration-300">
            <Link to="/services">Services</Link>
          </li>
          <li className="hover:text-black hover:bg-yellow-300 p-2 font-bold rounded-lg ease-in-out transition duration-300">
            <Link to="/blog">Blogs</Link>
          </li>
          <li className="hover:text-black hover:bg-yellow-300 p-2 font-bold rounded-lg ease-in-out transition duration-300">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <button
          onClick={handleClick}
          className="bg-yellow-300 hover:bg-yellow-400 text-black p-2 font-bold rounded-lg ease-in-out transition duration-300"
        >
          Sign Up
        </button>
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            ></path>
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-red-800">
          <ul className="flex flex-col items-center space-y-4 p-4">
            <li className="hover:text-black hover:bg-yellow-300 p-2 font-bold rounded-lg ease-in-out transition duration-300">
              <Link to="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li className="hover:text-black hover:bg-yellow-300 p-2 font-bold rounded-lg ease-in-out transition duration-300">
              <Link to="/products" onClick={() => setIsOpen(false)}>
                Products
              </Link>
            </li>
            <li className="hover:text-black hover:bg-yellow-300 p-2 font-bold rounded-lg ease-in-out transition duration-300">
              <Link to="/about" onClick={() => setIsOpen(false)}>
                About US
              </Link>
            </li>
            <li className="hover:text-black hover:bg-yellow-300 p-2 font-bold rounded-lg ease-in-out transition duration-300">
              <Link to="/services" onClick={() => setIsOpen(false)}>
                Services
              </Link>
            </li>
            <li className="hover:text-black hover:bg-yellow-300 p-2 font-bold rounded-lg ease-in-out transition duration-300">
              <Link to="/blog" onClick={() => setIsOpen(false)}>
                Blogs
              </Link>
            </li>
            <li className="hover:text-black hover:bg-yellow-300 p-2 font-bold rounded-lg ease-in-out transition duration-300">
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
          <div className="flex justify-center p-4">
            <button
              onClick={() => {
                handleClick();
                setIsOpen(false);
              }}
              className="bg-yellow-300 hover:bg-yellow-400 text-black p-2 font-bold rounded-lg ease-in-out transition duration-300"
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

