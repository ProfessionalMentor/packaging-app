import React from 'react';

const Contact = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-gray-100 py-16 px-6 md:px-20 text-center">
        <h1 className="text-4xl font-bold text-red-500 mb-4">Contact Us</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We'd love to hear from you! Whether you have a question, need a quote, or want to collaborate—reach out today.
        </p>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
        {/* Contact Form */}
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              rows="5"
              placeholder="Your Message"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-md transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="space-y-6 text-gray-700">
          <div>
            <h3 className="text-xl font-semibold text-red-500 mb-2">Office Address</h3>
            <p>Elegant Packages, Lahore, Pakistan</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-red-500 mb-2">Phone</h3>
            <p>+92 300 1234567</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-red-500 mb-2">Email</h3>
            <p>info@elegantpackages.com</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-red-500 mb-2">Business Hours</h3>
            <p>Mon–Sat: 9:00 AM – 6:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;