import React from 'react';
import main from '../assets/main.png';
import { useNavigate } from 'react-router-dom';
import CustomElegantPackages from './CustomElegentPackages';
import CountUp from 'react-countup';
import Features from './Features';
import CustomBoxPromo from './CustomBoxesPromo';

const services = [
  {
    title: 'Printing Choices',
    icon: '🖨️',
    description:
      'Choose from minimalist to ornate designs, radiant effects, and a variety of printing and finishing options to make your boxes stand out.',
    bgColor: 'bg-white',
    textColor: 'text-gray-800',
  },
  {
    title: 'Material Options',
    icon: '🛍️',
    description:
      'Select premium materials that offer high-end aesthetics and superior protection for your custom packaging needs.',
    bgColor: 'bg-white',
    textColor: 'text-gray-800',
  },
  {
    title: 'Methodologies',
    icon: '⚙️',
    description:
      'Enjoy additional perks and cost-effective solutions to achieve your desired custom box look without breaking the bank.',
    bgColor: 'bg-red-600',
    textColor: 'text-white',
  },
];

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/customelegentpackages');
  };

  return (
    <>
      {/* Hero Banner */}
    <div className="relative w-full">
  <div className="aspect-w-16 aspect-h-9">
    <img
      src={main}
      alt="Main Banner"
      className="w-full h-full object-cover"
    />
  </div>
</div>

      {/* CTA Button */}
      <div className="text-center py-8">
        <button
          onClick={handleClick}
          className="bg-red-600 hover:bg-red-700 text-white py-3 px-8 rounded-full text-lg font-semibold transition duration-300"
        >
          Get A Quote
        </button>
      </div>

      {/* Services Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 ${service.bgColor} ${service.textColor}`}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Custom Packages Component */}
      <CustomElegantPackages />

      {/* Impact Section */}
      <section
        className="relative bg-cover bg-center text-white py-16 px-4 sm:px-6 lg:px-8"
        style={{ backgroundImage: "url('/your-world-map.jpg')" }}
      >
        <div className="bg-red-700 bg-opacity-60 p-8 rounded-lg max-w-4xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 sm:mb-0">
              We are your best <span className="text-black">Solution</span> for Packaging Material.
            </h1>
            <button
              onClick={handleClick}
              className="bg-red-600 hover:bg-red-700 text-white py-3 px-8 rounded-full text-lg font-semibold transition duration-300 sm:ml-4 mt-4 sm:mt-0"
            >
              Get A Quote
            </button>
          </div>
          <p className="text-xl sm:text-2xl mt-6 mb-10">
            Never worry about going to multiple sources to get your dream packaging.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <h2 className="text-4xl font-bold text-black">
                <CountUp end={15000} duration={2.9} separator="," />+
              </h2>
              <p className="mt-2 text-lg">Projects Realized</p>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-black">
                <CountUp end={1250} duration={2.9} separator="," />+
              </h2>
              <p className="mt-2 text-lg">Experts Joined</p>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-black">
                <CountUp end={141} duration={2.9} />+
              </h2>
              <p className="mt-2 text-lg">Awards Won</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Promo */}
      <Features />
      <CustomBoxPromo />
    </>
  );
};

export default Home;