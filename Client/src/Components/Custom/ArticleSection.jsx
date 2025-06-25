import React from 'react';
import { Fade } from 'react-awesome-reveal';

const ArticleSection = () => {
  return (
    <div className="w-11/12 mx-auto my-20">
      <Fade direction="up" triggerOnce>
        <h2 className="text-3xl font-bold text-center mb-10">
          🧠 Learn & Explore
        </h2>
      </Fade>

      <div className="flex flex-col lg:flex-row gap-6">
        <Fade direction="left" triggerOnce className="flex-1 h-full">
          <div className="card bg-base-200 rounded-box p-6 h-full min-h-[290px] flex flex-col justify-center shadow-md shadow-gray-400 hover:shadow-xl transition">
            <div>
              <h3 className="text-xl font-semibold mb-3">
                Why Join a Hobby Group?
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Being part of a group can ignite your passion like nothing else.
                Whether it's the sense of accountability, shared joy, or simply
                the fun of learning with others — a hobby group can elevate your
                skills and keep you inspired for the long run. Find like-minded
                folks and grow together in a creative community. So don't wait
                jump in!
              </p>
            </div>
          </div>
        </Fade>

        <Fade delay={100} triggerOnce>
          <div className="divider lg:divider-horizontal font-bold text-gray-400 md:mt-30">
            OR
          </div>
        </Fade>

        <Fade direction="right" triggerOnce className="flex-1 h-full">
          <div className="card bg-base-200 rounded-box p-6 h-full min-h-[290px] flex flex-col justify-center shadow-md shadow-gray-400 hover:shadow-xl transition">
            <div>
              <h3 className="text-xl font-semibold mb-3">
                Tips for Starting a New Hobby
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Starting something new can be scary, but it’s also thrilling.
                Start small, stay consistent, and follow your curiosity. Don't
                wait for perfect tools — just begin. Track your progress,
                celebrate tiny wins, and remember: mastery is a journey, not a
                race.
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default ArticleSection;
