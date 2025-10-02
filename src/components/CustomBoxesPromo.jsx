import React from 'react';
import { useNavigate } from 'react-router-dom';


const CustomBoxesPromo = () => {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/customelegentpackages');
  }
  

  return (
    <section className="bg-gray-900 text-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Box Images */}
        <div className="space-y-6">
          <img
            src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=600&q=80"
            alt="Cube Box"
            className="rounded-lg shadow-lg"
          />
          
        </div>

        {/* Right Side: Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-red-500">
            Create Top-End Branding and Unboxing Experience
          </h2>
          <p className="text-gray-300 mb-6">
            Looking to create custom boxes with an elegant, premium finish to transform your customer's experience into high-class branding from the first interaction to unboxing? You are at the right place. We specialize in crafting custom boxes with high-class branding and a premium unboxing experience. With a vast array of design, printing, finishing, and material options, along with our customer-focused policies.
          </p>

          <ul className="space-y-4 mb-8">
            {[
              'Free design adjustments',
              'Physical prototype & free 3D sampling',
              'Expert help to pick right stock, printing, style',
              'No die plate & shipping fee on all order size',
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-red-500 text-xl mr-3">✔</span>
                <span className="text-gray-300">{item}</span>
              </li>
            ))}
          </ul>

          <button onClick={handleClick} className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
            GET A QUOTE
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomBoxesPromo;