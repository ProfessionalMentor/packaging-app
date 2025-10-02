import React from 'react';

const services = [
  {
    title: 'Custom Packaging Design',
    description: 'Tailored box designs that reflect your brand identity and elevate customer experience.',
    icon: '🎨',
  },
  {
    title: 'Printing Solutions',
    description: 'High-quality CMYK and digital printing for vibrant, durable packaging.',
    icon: '🖨️',
  },
  {
    title: 'Eco-Friendly Materials',
    description: 'Sustainable packaging options that reduce environmental impact.',
    icon: '🌱',
  },
  {
    title: 'Brand Consulting',
    description: 'Expert guidance to align packaging with your brand strategy.',
    icon: '💼',
  },
  {
    title: 'Rapid Prototyping',
    description: 'Physical samples and 3D mockups to visualize your packaging before production.',
    icon: '📦',
  },
  {
    title: 'Global Shipping',
    description: 'Reliable delivery across all order sizes with no die plate or shipping fees.',
    icon: '🚚',
  },
];

const ServicesPage = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-gray-100 py-16 px-6 md:px-20 text-center">
        <h1 className="text-4xl font-bold text-red-500 mb-4">Our Services</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover how Elegant Packages transforms packaging into powerful brand experiences.
        </p>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-6 md:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 p-6 text-center"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-red-500 mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="bg-red-500 text-white py-12 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Brand?</h2>
        <p className="mb-6">Let’s create packaging that speaks volumes. Get in touch today.</p>
        <button className="bg-white text-red-500 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition">
          CONTACT US
        </button>
      </section>
    </div>
  );
};

export default ServicesPage;