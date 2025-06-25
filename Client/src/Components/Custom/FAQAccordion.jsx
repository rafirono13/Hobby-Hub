import React from 'react';
import { Fade } from 'react-awesome-reveal';

const FAQAccordion = () => {
  return (
    <div className="w-11/12 mx-auto my-16">
      <Fade triggerOnce direction="up">
        <h2 className="text-3xl font-bold text-center mb-8">
          ❓ Frequently Asked Questions
        </h2>
      </Fade>

      <div className="join join-vertical w-full space-y-2">
        <Fade triggerOnce direction="left">
          <div className="collapse collapse-arrow bg-base-200">
            <input type="checkbox" />
            <div className="collapse-title text-lg font-medium">
              What is HobbyHub?
            </div>
            <div className="collapse-content">
              <p>
                HobbyHub is a platform where people can create or join
                hobby-based groups to collaborate, learn, and grow their passion
                together.
              </p>
            </div>
          </div>
        </Fade>

        <Fade triggerOnce direction="right" delay={100}>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="checkbox" />
            <div className="collapse-title text-lg font-medium">
              Who can create a group?
            </div>
            <div className="collapse-content">
              <p>
                Any registered user can create a group and invite others who
                share similar hobbies or interests.
              </p>
            </div>
          </div>
        </Fade>

        <Fade triggerOnce direction="left" delay={200}>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="checkbox" />
            <div className="collapse-title text-lg font-medium">
              Can I update or delete my group? view my groups section for that!
            </div>
            <div className="collapse-content">
              <p>
                Yes. In the "My Groups" section, you can manage, edit, or delete
                any group that you’ve created.
              </p>
            </div>
          </div>
        </Fade>

        <Fade triggerOnce direction="right" delay={300}>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="checkbox" />
            <div className="collapse-title text-lg font-medium">
              How do I join an existing group?
            </div>
            <div className="collapse-content">
              <p>
                You can browse through the list of available groups on the
                "Explore Groups" page and click "Join" on any group that
                interests you. Some groups might require admin approval.
              </p>
            </div>
          </div>
        </Fade>

        <Fade triggerOnce direction="left" delay={400}>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="checkbox" />
            <div className="collapse-title text-lg font-medium">
              Is there a mobile app for HobbyHub?
            </div>
            <div className="collapse-content">
              <p>
                Currently, HobbyHub is a web-based platform. We are working on a
                mobile app to enhance your experience, so stay tuned for
                updates!
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default FAQAccordion;
