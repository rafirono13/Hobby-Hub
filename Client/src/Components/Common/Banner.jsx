import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { Fade } from 'react-awesome-reveal';
import BannerImg from '../../assets/BannerImg.jpg';
const Banner = () => {
  return (
    <div className="w-11/12 mx-auto mb-10">
      <div
        className="w-full h-[700px] max-w-[1600px] md:h-[400px] mx-auto bg-cover bg-center rounded-2xl shadow-lg flex items-center justify-start px-8"
        style={{
          backgroundImage: `url(${BannerImg})`,
        }}
      >
        <Fade direction="left" duration={1000} triggerOnce>
          <div className="max-w-xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Welcome to{' '}
              <span className="text-yellow-400">
                <Typewriter
                  words={['HobbyHub.', 'New Ideas.', 'Creativity.']}
                  loop
                  cursor
                  cursorStyle="_"
                  typeSpeed={90}
                  deleteSpeed={50}
                  delaySpeed={1200}
                />
              </span>
            </h1>
            <p className="text-lg md:text-xl font-medium">
              Discover, create, and connect with hobby groups around you.
              Whether it's painting or gaming, your community is just one click
              away.
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Banner;
