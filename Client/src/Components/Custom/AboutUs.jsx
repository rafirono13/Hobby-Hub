// src/components/AboutUs.jsx
import React from 'react';
import { FaHeart, FaUsers, FaLightbulb } from 'react-icons/fa';
import { Link } from 'react-router';

const AboutUs = () => {
  return (
    <div className="bg-base-100 py-12 sm:py-16 lg:py-20 w-11/12 mx-auto">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-primary mb-4">
          About HobbyHub
        </h1>
        <p className="text-lg text-base-content max-w-2xl mx-auto mb-10">
          Welcome to the place where passions connect and communities grow!
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Our Mission */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
              <FaHeart className="text-red-500" />
              Our Mission
            </h2>
            <p className="text-base-content leading-relaxed">
              At HobbyHub, our mission is simple: to bring people together
              through the magic of shared interests. We believe that hobbies are
              the threads that weave vibrant social tapestries. Whether you're a
              painter, a hiker, a gamer, or a bookworm, HobbyHub is your local
              launchpad for finding your crew and building lasting friendships
              around your passions.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071"
              alt="People connecting"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>

        {/* What We Do */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-10">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
              <FaLightbulb className="text-yellow-400" />
              What We Do
            </h2>
            <p className="text-base-content leading-relaxed">
              HobbyHub is a platform designed for you to discover local
              hobby-based groups or take the lead and create your own. From book
              clubs to hiking crews and painting circles, you can find an
              amazing variety of activities. It’s all about creating a space for
              social engagement and community building, right in your
              neighborhood.
            </p>
            <Link to="/create-group">
              <button className="btn btn-primary mt-6">
                Start Your Own Group
              </button>
            </Link>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070"
              alt="Team working on a project"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
