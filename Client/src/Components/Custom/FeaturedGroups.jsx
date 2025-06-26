import React from 'react';
import { Slide } from 'react-awesome-reveal';
import { Link } from 'react-router';

const FeaturedGroups = ({ groups = [] }) => {
  return (
    <div className="w-11/12 mx-auto my-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold">Featured Groups</h2>
        <p className="text-lg mt-2 text-base-content text-opacity-80">
          Discover communities that share your passion.
        </p>
      </div>

      {/* --- Responsive 4-Column Grid --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        {groups.map(group => (
          <Slide direction="up" triggerOnce key={group._id}>
            <div className="card bg-base-100 shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col">
              <figure className="h-52">
                <img
                  src={group.image}
                  alt={group.groupName}
                  className="w-full h-full object-cover"
                />
              </figure>

              {/* Card content with flex-grow to push the button to the bottom */}
              <div className="card-body p-6 flex flex-col flex-grow">
                <h2 className="card-title text-2xl font-bold mb-2">
                  {group.groupName}
                </h2>
                <p className="text-base-content text-opacity-70 flex-grow">
                  {/* Truncating the description to keep cards neat */}
                  {group.description.length > 90
                    ? `${group.description.substring(0, 90)}...`
                    : group.description}
                </p>
                <div className="card-actions justify-end mt-4">
                  {/* The "See More" button now links to the detailed page */}
                  <Link to={`/groups/${group._id}`}>
                    <button className="btn btn-primary">See More</button>
                  </Link>
                </div>
              </div>
            </div>
          </Slide>
        ))}
      </div>

      <div className="text-center mt-16">
        <Link to="/groups">
          <button className="btn btn-outline btn-primary btn-wide">
            View All Groups
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedGroups;
