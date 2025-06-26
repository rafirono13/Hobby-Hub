// src/pages/Contact.jsx

import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="bg-base-100 py-12 sm:py-16 lg:py-20 w-11/12 mx-auto">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-primary mb-4">
            Get In Touch
          </h1>
          <p className="text-lg text-base-content max-w-2xl mx-auto">
            Have a question or some feedback? I'd love to hear from you! Drop me
            a line.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-base-200 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            <form>
              {/* Form fields remain the same */}
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Jane Doe"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Your Email</span>
                </label>
                <input
                  type="email"
                  placeholder="jane.doe@example.com"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control mb-6">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea
                  className="textarea textarea-bordered h-32"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-full">
                Submit
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-2xl text-primary" />
              <div>
                <h3 className="text-xl font-semibold">Email</h3>
                <a
                  href="mailto:farhanmahbubrafi@gmail.com"
                  className="link link-hover"
                >
                  farhanmahbubrafi@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaPhone className="text-2xl text-primary" />
              <div>
                <h3 className="text-xl font-semibold">Phone</h3>
                <a href="tel:+8801688803013" className="link link-hover">
                  +880 1688 803013
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-2xl text-primary" />
              <div>
                <h3 className="text-xl font-semibold">Office</h3>
                <p>Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
