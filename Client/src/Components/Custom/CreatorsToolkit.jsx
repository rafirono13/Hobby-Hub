// src/Components/Custom/CreatorsToolkit.jsx

import React from 'react';
import { Link } from 'react-router';
import { Fade } from 'react-awesome-reveal';
import useAuth from '../../Hooks/useAuth'; // Assuming path to your auth hook

// Using sleek, professional SVG icons as components for a polished look
const IconRocket = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.3.05-3.05-.64-.75-2.17-.8-3.05-.05z" />
    <path d="M19 19c1.5-1.5 2.16-4.24 1.5-6.5C19.84 8.76 17 7 15 5c-2.3-2.3-4.4-3.1-6.5-2.5C6.26 3.16 3.5 4.5 2 6l12 12c1.5-1.5 2.84-4.26 2.5-6.5Z" />
  </svg>
);
const IconSettings = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 0 2l-.15.08a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1 0-2l.15-.08a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);
const IconMegaphone = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m3 11 18-5v12L3 14v-3z" />
    <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
  </svg>
);

const CreatorsToolkit = () => {
  const { user } = useAuth();

  return (
    <div className="bg-base-200 py-16 sm:py-20 lg:py-24">
      <div className="w-11/12 mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Side: Text Content */}
        <Fade direction="left" triggerOnce>
          <div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-primary mb-4">
              Become a Creator
            </h2>
            <p className="text-lg text-base-content text-opacity-80 mb-10">
              Have a passion you want to share? We give you the tools and the
              platform to build a thriving community around it. It’s simple,
              powerful, and incredibly rewarding.
            </p>

            {/* Benefit Pillars */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-primary text-primary-content p-3 rounded-full">
                  <IconRocket />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Effortless Setup</h3>
                  <p className="text-base-content text-opacity-70 mt-1">
                    Our simple, step-by-step form means you can go from idea to
                    live group in minutes.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-primary text-primary-content p-3 rounded-full">
                  <IconSettings />
                </div>
                <div>
                  <h3 className="text-xl font-bold">You're in Control</h3>
                  <p className="text-base-content text-opacity-70 mt-1">
                    Your personal dashboard lets you easily update details,
                    manage members, and steer your community.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-primary text-primary-content p-3 rounded-full">
                  <IconMegaphone />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Reach and Connect</h3>
                  <p className="text-base-content text-opacity-70 mt-1">
                    We help put your group in front of passionate people in your
                    area. Watch your community grow!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>

        {/* Right Side: Visual Hook */}
        <Fade direction="right" triggerOnce className="hidden lg:block">
          <div className="relative">
            {/* Stylized Screenshot Card */}
            <div className="bg-base-100 p-6 rounded-2xl shadow-2xl transform rotate-3 w-full max-w-md mx-auto border-2 border-primary border-opacity-20">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-4 h-4 bg-red-500 rounded-full"></span>
                <span className="w-4 h-4 bg-yellow-400 rounded-full"></span>
                <span className="w-4 h-4 bg-green-500 rounded-full"></span>
              </div>

              {/* Mock Form Fields */}
              <div className="space-y-4">
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-base-content text-opacity-60">
                    Group Name
                  </p>
                  <div className="w-full h-10 bg-base-200 rounded-lg flex items-center px-4 text-base-content text-opacity-50">
                    Bookworm's Paradise
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-base-content text-opacity-60">
                    Hobby Category
                  </p>
                  <div className="w-full h-10 bg-base-200 rounded-lg flex items-center px-4 text-base-content text-opacity-50">
                    Reading
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-base-content text-opacity-60">
                    Description
                  </p>
                  <div className="w-full h-20 bg-base-200 rounded-lg flex items-start p-4 text-base-content text-opacity-50">
                    A cozy group for...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>

      {/* Smart Call to Action Button */}
      <div className="text-center mt-16">
        <Link to={user ? '/create-group' : '/auth/login'}>
          <button className="btn btn-primary btn-lg shadow-lg animate-pulse">
            {user ? 'Create Your Group Now' : 'Join to Create a Group'}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CreatorsToolkit;
