import React from 'react';

const ContactPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Contact SnazzyMart</h1>
      <p className="mb-6 text-gray-700">
        We would love to hear from you! If you have any questions, concerns, or feedback, please don't hesitate to get in touch with us using the contact form below. Our team will get back to you as soon as possible.
      </p>

      {/* Contact Form */}
      <form className="max-w-md">
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="name">Name</label>
          <input
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600"
            type="text"
            id="name"
            name="name"
            placeholder="John Doe"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="email">Email</label>
          <input
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600"
            type="email"
            id="email"
            name="email"
            placeholder="johndoe@example.com"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="message">Message</label>
          <textarea
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600"
            id="message"
            name="message"
            rows="4"
            placeholder="Your message here..."
            required
          ></textarea>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactPage;
