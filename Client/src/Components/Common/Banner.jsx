// src/Components/Common/Banner.jsx

import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router';

// 1. Import Swiper React components and modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';

// 2. Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

// 3. Using your new, beautiful images!
const image1 = 'https://i.ibb.co/ynzyBfK7/Team-work-amico.png'; // Team Work
const image2 = 'https://i.ibb.co/dJGtP2gQ/Making-art-bro.png'; // Making Art
const image3 = 'https://i.ibb.co/2YfgJ5Tn/Gaming-amico.png'; // Gaming

const images = [image1, image2, image3];

const Banner = () => {
  return (
    <div className="w-11/12 mx-auto my-16">
      <div className="relative bg-base-100 rounded-2xl shadow-xl overflow-hidden p-8 lg:p-0">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          {/* Text Content Section */}
          <div className="relative z-10 p-0 lg:pl-12 text-center lg:text-left">
            <Fade direction="left" triggerOnce>
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                Find Your People.
                <br />
                <span className="text-primary">
                  <Typewriter
                    words={['Explore.', 'Create.', 'Connect.']}
                    loop
                    cursor
                    cursorStyle="_"
                    typeSpeed={100}
                    deleteSpeed={70}
                    delaySpeed={1500}
                  />
                </span>
              </h2>
              <p className="text-lg md:text-xl text-base-content text-opacity-70 mb-8 max-w-lg mx-auto lg:mx-0">
                Dive into a world of creativity and community. Your next
                adventure and your new best friends are waiting for you.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/groups">
                  <button className="btn btn-primary btn-wide shadow-lg">
                    Explore Groups
                  </button>
                </Link>
                <Link to="/create-group">
                  <button className="btn btn-secondary btn-outline btn-wide">
                    Create a Group
                  </button>
                </Link>
              </div>
            </Fade>
          </div>

          {/* Fixed Swiper.js Image Slider Section */}
          <div className="relative h-[300px] md:h-[450px] mt-8 lg:mt-0">
            {/* The <Fade> wrapper was removed from here! */}
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              effect={'fade'}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation, EffectFade]}
              className="w-full h-full rounded-lg"
            >
              {/* Looping through your images to create slides */}
              {images.map((image, index) => (
                // Added a background color to each slide for robustness
                <SwiperSlide key={index} className="bg-base-100">
                  <img
                    src={image}
                    alt={`HobbyHub slide ${index + 1}`}
                    className="block w-full h-full object-contain"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
