import React from 'react';
import { Slide } from 'react-awesome-reveal';
import { Link } from 'react-router';
import {
  FaBook,
  FaCamera,
  FaGamepad,
  FaLeaf,
  FaPaintBrush,
  FaPenFancy,
} from 'react-icons/fa';

const iconMap = {
  'Drawing & Painting': <FaPaintBrush className="text-xl" />,
  Photography: <FaCamera className="text-xl" />,
  'Video Gaming': <FaGamepad className="text-xl" />,
  Reading: <FaBook className="text-xl" />,
  Writing: <FaPenFancy className="text-xl" />,
  Fishing: <FaLeaf className="text-xl" />,
};

const FeaturedGroups = ({ groups = [] }) => {
  return (
    <div className="w-11/12 mx-auto my-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Featured Groups</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map(group => (
          <Slide direction="up" triggerOnce key={group._id}>
            <div className="bg-base-100 rounded-xl shadow-md shadow-gray-400 overflow-hidden hover:shadow-xl transition">
              <img
                src={group.image}
                alt={group.groupName}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <div className="flex items-center gap-3 mb-2">
                  {iconMap[group.category] || (
                    <FaLeaf className="text-xl text-gray-400" />
                  )}
                  <h3 className="text-xl font-semibold">{group.groupName}</h3>
                </div>
                <p className="text-sm text-gray-500">
                  Location: {group.location}
                </p>
                <p className="text-sm text-gray-500">
                  Start: {new Date(group.startDate).toLocaleDateString()}
                </p>
              </div>
            </div>
          </Slide>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link to="/groups">
          <button className="btn btn-outline btn-primary px-8">
            View All Groups
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedGroups;
