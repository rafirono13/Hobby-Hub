import React from 'react';
import { Fade } from 'react-awesome-reveal';

const FAQAccordion = () => {
  const faqData = [
    {
      question: 'What is HobbyHub?',
      answer:
        'HobbyHub is a platform where people can create or join hobby-based groups to collaborate, learn, and grow their passion together.',
    },
    {
      question: 'Who can create a group?',
      answer:
        'Any registered user can create a group and invite others who share similar hobbies or interests.',
    },
    {
      question: 'Can I update or delete my group?',
      answer:
        'Yes. In the "My Groups" section, you can manage, edit, or delete any group that you’ve created.',
    },
    {
      question: 'How do I join an existing group?',
      answer:
        'You can browse through the list of available groups on the "Explore Groups" page and click "Join" on any group that interests you. Some groups might require admin approval.',
    },
    {
      question: 'Is there a mobile app for HobbyHub?',
      answer:
        'Currently, HobbyHub is a web-based platform. We are working on a mobile app to enhance your experience, so stay tuned for updates!',
    },
  ];

  return (
    <div className="w-11/12 mx-auto my-16">
      <Fade triggerOnce direction="up" cascade damping={0.1}>
        <h2 className="text-3xl font-bold text-center mb-8">
          ❓ Frequently Asked Questions
        </h2>

        <div className="join join-vertical w-full space-y-2">
          {faqData.map((item, index) => (
            <div key={index} className="collapse collapse-arrow bg-base-200">
              <input type="checkbox" id={`faq-${index}`} />
              <div className="collapse-title text-lg font-medium">
                {item.question}
              </div>
              <div className="collapse-content">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </Fade>
    </div>
  );
};

export default FAQAccordion;
