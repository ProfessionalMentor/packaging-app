import React from 'react';


const features = [
  {
    title: 'Custom Designs',
    description: 'Unique packaging tailored to your brand vision with full design flexibility.',
  },
  {
    title: 'Fast Turnaround',
    description: 'Streamlined production ensures quick delivery without compromising quality.',
  },
  {
    title: 'High-Quality Materials',
    description: 'Eco-friendly and durable materials that protect products and convey luxury.',
  },
  {
    title: 'Sustainability Commitment',
    description: 'We reduce carbon footprint and promote environmentally conscious packaging.',
  },
  {
    title: 'Competitive Pricing',
    description: 'Affordable pricing for businesses of all sizes without sacrificing quality.',
  },
  {
    title: 'Print in All Colors',
    description: 'CMYK printing technology offers unlimited color options for vibrant results.',
  },
];

const Features = () => {
  return (
    <section className="bg-gray-900 text-white py-14 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((features, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-3 text-red-500">{features.title}</h3>
              <p className="text-gray-300">{features.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;