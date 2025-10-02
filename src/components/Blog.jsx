import React from 'react';
import { useNavigate } from 'react-router-dom';

const blogs = [
  {
    title: '5 Packaging Trends to Watch in 2025',
    image: 'https://media.licdn.com/dms/image/v2/D4D12AQHQVV684dEAig/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1736484254382?e=2147483647&v=beta&t=Oqp9fa7yu7ZdiqCiaxtsZVqA5Adtt3IiedZWY0KwmXg',
    date: 'October 1, 2025',
    excerpt: 'Discover the latest innovations in packaging design, sustainability, and customer experience.',
  },
  {
    title: 'How Custom Boxes Boost Brand Loyalty',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1l0kMjjM50Hn8G4ZwyoQ_IqsHPqf3Qlmm4g&s',
    date: 'September 20, 2025',
    excerpt: 'Learn how premium packaging creates memorable unboxing moments and drives repeat purchases.',
  },
  {
    title: 'Eco-Friendly Materials: What You Need to Know',
    image: 'https://www.customproductpackaging.com/blog-images/environmentally-friendly-packaging-material.jpg',
    date: 'September 5, 2025',
    excerpt: 'Explore sustainable packaging options and how they impact your brand image and the planet.',
  },
];

const Blog = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/register');
  };

  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-gray-100 py-16 px-6 md:px-20 text-center">
        <h1 className="text-4xl font-bold text-red-500 mb-4">Latest Blogs</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Stay updated with insights, trends, and tips from the world of packaging and branding.
        </p>
      </section>

      {/* Blog Cards */}
      <section className="py-12 px-6 md:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
          >
            <img src={blog.image} alt={blog.title} className="w-full h-55 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-red-500 mb-2">{blog.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
              <p className="text-gray-600 text-sm">{blog.excerpt}</p>
            </div>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="bg-red-500 text-white py-12 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Want More Insights?</h2>
        <p className="mb-6">Subscribe to our newsletter and never miss an update.</p>
        <button onClick={handleClick} className="bg-white text-red-500 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition">
          SIGN UP
        </button>
      </section>
    </div>
  );
};

export default Blog;