"use client";
import Button from '@/Component/Button';
import React from 'react';
import { MdLocationPin, MdEmail, MdPhone } from 'react-icons/md';
 
const ContactUs = () => {
  return (
    <section className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-8 rounded-md shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-center">Contact Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-bold mb-2">Find Us</h3>
          <div className="flex flex-col items-center mt-4">
            <div className="flex items-center gap-2 mb-2">
              <MdLocationPin size={20} />
              <span>123 Main Street, Cityville, CA 90210</span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <MdEmail size={20} />
              <span>info@example.com</span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <MdPhone size={20} />
              <span>(123) 456-7890</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-bold mb-2">Send Us a Message</h3>
          <form className="flex flex-col gap-2 mt-4">
            <input
              type="text"
              className="bg-transparent border border-white px-3 py-2 rounded-md focus:outline-none"
              placeholder="Your Name"
            />
            <input
              type="email"
              className="bg-transparent border border-white px-3 py-2 rounded-md focus:outline-none"
              placeholder="Your Email"
            />
            <textarea
              className="bg-transparent border border-white px-3 py-2 rounded-md resize-none focus:outline-none h-24"
              placeholder="Your Message"
            />
            <Button variant="primary">Send Message</Button> {/* Using the Button component */}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;