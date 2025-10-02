import React from 'react';
import banner1 from '../assets/packagingunlimited.png';
import { useNavigate } from 'react-router-dom';

const CustomElegentPackages = () => {
  const navigate = useNavigate();

  const handleRequestNow = () => {
    navigate('/contact');
  };

  return (
    <div
      id="customboxes"
      className="w-full h-auto flex flex-col lg:flex-row justify-center px-6 lg:px-20 mt-12 bg-gray-300 mb-12"
    >
      <div className="lg:w-1/2 flex flex-col justify-center items-start text-center lg:text-left">
        <h3 className="text-lg lg:text-xl font-bold text-red-700 mt-4 lg:mt-8">
          We are Leading packaging provider in the world
        </h3>
        <h1 className="font-bold text-black text-2xl lg:text-4xl mt-4 lg:mt-6">
          Custom & Elegant Packaging Solutions
        </h1>
        <p className="mt-6 lg:mt-8 text-sm lg:text-base">
          At Elegant Packages, we specialize in providing custom and elegant packaging solutions tailored to enhance your
          brand’s identity. Whether you’re a startup or an established business, our premium packaging options will make
          your products stand out and leave a lasting impression.
        </p>
        <button
          onClick={handleRequestNow}
          className="mt-8 lg:mt-10 bg-red-600 hover:bg-red-700 text-white px-4 py-2 font-bold rounded-lg ease-in-out transition duration-300"
        >
          Get Request Now
        </button>
      </div>

      <div className="lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0">
        <img
          src={banner1}
          alt="Packaging Banner"
          className="w-full max-w-md lg:max-w-full rounded-bl-full rounded-tl-[50px] h-auto lg:h-[77vh]"
        />
      </div>
    </div>
  );
};

export default CustomElegentPackages;