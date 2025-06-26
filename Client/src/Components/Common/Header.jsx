import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { Fade } from 'react-awesome-reveal';

const Header = () => {
  return (
    <Fade direction="down" duration={800} triggerOnce>
      <div className="py-16 sm:py-20 lg:py-24">
        <div className="w-11/12 mx-auto text-center">
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
            Welcome to <span className="text-primary">HobbyHub</span>
          </h1>

          {/* Introductory Paragraph */}
          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-base-content text-opacity-80 leading-relaxed mb-12">
            This is your new social launchpad! A place where your passions pave
            the way for real connections. Discover local groups for everything
            from painting to programming, or take the lead and start a community
            of your own.
          </p>

          {/* Standout Quote Section */}
          <div className="max-w-2xl mx-auto p-8 bg-base-100 rounded-2xl shadow-xl border-l-4 border-primary relative">
            <FaQuoteLeft className="absolute top-4 left-4 text-primary text-2xl opacity-30" />
            <blockquote className="text-xl sm:text-2xl italic font-medium text-base-content">
              The secret to happiness is not in doing what one likes, but in
              liking what one does.
            </blockquote>
            <FaQuoteRight className="absolute bottom-4 right-4 text-primary text-2xl opacity-30" />
            <cite className="block text-right mt-4 text-base-content text-opacity-70 not-italic">
              — James M. Barrie
            </cite>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Header;
