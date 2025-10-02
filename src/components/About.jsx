import React from 'react';
import { useNavigate } from 'react-router-dom';
const About = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/register');
  }

  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-gray-100 py-16 px-6 md:px-20 text-center">
        <h1 className="text-4xl font-bold text-red-500 mb-4">About Elegant Packages</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We craft packaging that transforms brands and elevates customer experience from first glance to final unboxing.
        </p>
      </section>

      {/* Mission & Story */}
      <section className="py-12 px-6 md:px-20 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl font-bold text-red-500 mb-4">Our Mission</h2>
          <p className="text-gray-700 text-sm">
            At Elegant Packages, our mission is to deliver premium packaging, printing, and advertising solutions that help businesses stand out. We believe packaging is more than protection—it's your brand’s first impression.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-red-500 mb-4">Our Story</h2>
          <p className="text-gray-700 text-sm">
            Founded in Lahore, Pakistan, we started with a simple goal: to make packaging elegant, functional, and unforgettable. Over the years, we've grown into a trusted partner for brands across industries, offering custom boxes, labels, bags, and more.
          </p>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="bg-gray-900 text-white py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-8 text-red-500">Why Choose Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            'Custom Designs with full flexibility',
            'Fast Turnaround & reliable delivery',
            'Eco-Friendly, high-quality materials',
            'No die plate or shipping fees',
            'Expert guidance & support',
            'Free 3D sampling & prototyping',
          ].map((item, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <span className="text-red-500 text-2xl mb-2 block">✔</span>
              <p className="text-gray-300 text-sm">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-500 text-white py-12 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Let’s Build Something Beautiful</h2>
        <p className="mb-6">Reach out to us today and discover how Elegant Packages can elevate your brand.</p>
        <button onClick={handleClick} className="bg-white text-red-500 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition">
          CONTACT US
        </button>
      </section>
    </div>
  );
};

export default About;