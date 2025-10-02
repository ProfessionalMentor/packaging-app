import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Mission */}
        <div>
          <div className="flex items-center mb-4">
            <div className="bg-red-500 text-white font-bold text-xl w-10 h-10 flex items-center justify-center rounded-md">EP</div>
            <span className="ml-3 text-lg font-semibold">Elegant Packages</span>
          </div>
          <p className="text-gray-400 text-sm">
            At Elegant Packages, our mission is to deliver premium packaging, printing, and advertising solutions that elevate brands...
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-red-500 font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/blog">Blogs</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-red-500 font-semibold mb-4">Products</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#">Stickers</a></li>
            <li><a href="#">Labels & Tags</a></li>
            <li><a href="#">Paper Bag</a></li>
            <li><a href="#">Rigid Boxes</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-red-500 font-semibold mb-4">Newsletter</h3>
          <p className="text-gray-400 text-sm mb-4">
            Subscribe to our Newsletter & Event right now to be updated.
          </p>
          <form className="space-y-3">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-500"
            />
            <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded"
            >
              SIGN UP NEWSLETTER
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
        <p>© 2025 Elegant Packages. All rights reserved.</p>
        <p>Designed By: Tech Aur Code YT | CEO</p>
        <div className="mt-2 space-x-4">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;