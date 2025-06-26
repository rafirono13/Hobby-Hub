// src/Components/Custom/CommunitySpotlight.jsx

import React from 'react';
import Marquee from 'react-fast-marquee';
import { FaStar } from 'react-icons/fa';

// Let's create some vibrant, fake testimonials!
const testimonials = [
  {
    name: 'Aisha Rahman',
    hobby: 'Book Club Enthusiast',
    avatar: 'https://avatar.iran.liara.run/public/girl?username=Aisha',
    stars: 5,
    comment:
      'I found my tribe! HobbyHub connected me with the most wonderful group of readers. Our weekly discussions are the highlight of my week.',
  },
  {
    name: 'Ben Carter',
    hobby: 'Urban Gardener',
    avatar: 'https://avatar.iran.liara.run/public/boy?username=Ben',
    stars: 5,
    comment:
      "Starting my rooftop gardening group was a breeze. Now I'm sharing tips and fresh herbs with amazing people from my neighborhood.",
  },
  {
    name: 'Chloe Lee',
    hobby: 'Indie Gamer',
    avatar: 'https://avatar.iran.liara.run/public/girl?username=Chloe',
    stars: 4,
    comment:
      "The variety of gaming groups is insane! I finally found a crew that loves obscure indie games as much as I do. It's been epic.",
  },
  {
    name: 'David Ortiz',
    hobby: 'Marathon Runner',
    avatar: 'https://avatar.iran.liara.run/public/boy?username=David',
    stars: 5,
    comment:
      "HobbyHub's platform is so intuitive. I organized a training group for the city marathon and the response was overwhelming. Highly recommend!",
  },
  {
    name: 'Emily White',
    hobby: 'Watercolor Painter',
    avatar: 'https://avatar.iran.liara.run/public/girl?username=Emily',
    stars: 5,
    comment:
      "I was too shy to join an art class, but my little watercolor group from HobbyHub feels like a supportive family. I've learned so much.",
  },
  {
    name: 'Frank Miller',
    hobby: 'Film Photography',
    avatar: 'https://avatar.iran.liara.run/public/boy?username=Frank',
    stars: 4,
    comment:
      'A fantastic way to meet fellow creatives. Sharing darkroom techniques and going on photo walks has completely reignited my passion.',
  },
  {
    name: 'Grace Kim',
    hobby: 'Baking Club Founder',
    avatar: 'https://avatar.iran.liara.run/public/girl?username=Grace',
    stars: 5,
    comment:
      'From sourdough to macarons, our baking club does it all! Thank you, HobbyHub, for making it so easy to connect with other foodies.',
  },
];

// Reusable Star Rating Component
const StarRating = ({ rating }) => (
  <div className="flex gap-1 text-yellow-400">
    {[...Array(rating)].map((_, i) => (
      <FaStar key={i} />
    ))}
    {[...Array(5 - rating)].map((_, i) => (
      <FaStar key={i} className="text-gray-300" />
    ))}
  </div>
);

// The Main Component
const CommunitySpotlight = () => {
  return (
    <div className="py-16 sm:py-20 lg:py-24">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-primary">
          Community Spotlight
        </h2>
        <p className="text-lg mt-2 text-base-content text-opacity-80">
          See what our amazing members are saying about their journey.
        </p>
      </div>

      {/* The Marquee */}
      <Marquee
        pauseOnHover={true}
        speed={40}
        gradient={true}
        gradientColor={[255, 255, 255]} // You can change this to match your theme's base color
        gradientWidth={100}
      >
        {testimonials.map((testimonial, index) => (
          // The Testimonial Card
          <div
            key={index}
            className="card w-80 sm:w-96 bg-base-100 shadow-xl mx-4 my-4 border border-gray-200"
          >
            <div className="card-body p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="avatar">
                  <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={testimonial.avatar} alt={testimonial.name} />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-sm opacity-70">{testimonial.hobby}</p>
                </div>
              </div>
              <StarRating rating={testimonial.stars} />
              <blockquote className="italic text-base-content text-opacity-80 mt-2">
                "{testimonial.comment}"
              </blockquote>
            </div>
          </div>
        ))}
      </Marquee>

      {/* Dashed Border Separator */}
      <div className="w-11/12 mx-auto mt-20">
        <div className="border-t-2 border-dashed border-gray-300"></div>
      </div>
    </div>
  );
};

export default CommunitySpotlight;
