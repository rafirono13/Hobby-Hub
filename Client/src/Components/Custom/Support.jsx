// src/components/Support.jsx
import React from 'react';
import { FaQuestionCircle } from 'react-icons/fa';
import { Link } from 'react-router';

const Support = () => {
  return (
    <div className="bg-base-100 py-12 sm:py-16 lg:py-20 w-11/12 mx-auto">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-primary mb-4">
            Support Center
          </h1>
          <p className="text-lg text-base-content max-w-2xl mx-auto">
            We've got your back! Here are answers to some common questions.
          </p>
        </div>

        {/* FAQ Section */}
        <div className="space-y-4">
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              How do I create a new group?
            </div>
            <div className="collapse-content">
              <p>
                It's super easy! Just log in, navigate to the{' '}
                <Link to="/create-group" className="link link-primary">
                  Create Group
                </Link>{' '}
                page, fill out the details about your hobby, and hit "Create".
                Your group will be live instantly!
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              How can I join an existing group?
            </div>
            <div className="collapse-content">
              <p>
                Head over to the "All Groups" page, find a group that sparks
                your interest, and click "See More". On the details page, you'll
                find a "Join Group" button. Remember, you need to be logged in
                for this!
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Can I update or delete a group I created?
            </div>
            <div className="collapse-content">
              <p>
                Absolutely! Go to "My Groups" from the navigation bar. You'll
                see a list of all the groups you've created with "Update" and
                "Delete" buttons for each one. You're in complete control!
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold">Still need help?</h3>
          <p className="mt-2 mb-4">Don't hesitate to reach out to our team.</p>
          <Link to="/contact" className="btn btn-primary">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Support;
