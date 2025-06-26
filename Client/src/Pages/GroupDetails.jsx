// src/Pages/GroupDetails.jsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import {
  FaMapMarkerAlt,
  FaUserFriends,
  FaCalendarAlt,
  FaUserCircle,
  FaTag,
  FaRegClock,
} from 'react-icons/fa';
import HomeLoader from '../Components/Custom/HomeLoader';

const GroupDetails = () => {
  const { id } = useParams();
  const [group, setGroup] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    // ... (Your existing fetch logic remains the same)
    const fetchGroupDetails = async () => {
      try {
        const response = await fetch(
          `https://hobby-hub-server-lemon.vercel.app/groupInformation/${id}`
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.statusText}`);
        }
        const data = await response.json();
        setGroup(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchGroupDetails();
  }, [id]);

  if (loading) return <HomeLoader />;
  if (error)
    return <div className="text-center py-20 text-error">Error: {error}</div>;
  if (!group) return <div className="text-center py-20">Group not found.</div>;

  const isJoinable = new Date(group.startDate) >= new Date();
  const placeholderImage = `https://placehold.co/800x600/2A303C/E9E9E9?text=${group.groupName
    .split(' ')
    .join('\\n')}`;

  return (
    <div className="bg-base-200 py-12 sm:py-16 rounded-box border-2 border-gray-300 ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <div className="mb-8">
              <p className="text-lg font-semibold text-primary mb-2">
                {group.category}
              </p>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-base-content leading-tight">
                {group.groupName}
              </h1>
            </div>

            {/* Description */}
            <div className="text-base-content text-opacity-80 mb-8">
              <p className="text-lg leading-relaxed">{group.description}</p>
            </div>

            <div className="divider divide-amber-100 divide-dashed"></div>

            {/* Fast Facts Section */}
            <div className="bg-base-100 p-6 rounded-2xl shadow-2xl mb-8">
              <h3 className="text-2xl font-bold mb-4">Fast Facts</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-primary" />{' '}
                  <span>{group.location}</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaUserFriends className="text-primary" />{' '}
                  <span>Up to {group.maxMembers} members</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaCalendarAlt className="text-primary" />{' '}
                  <span>
                    Starts: {new Date(group.startDate).toLocaleDateString()}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <FaUserCircle className="text-primary" />{' '}
                  <span>Creator: {group.creatorName}</span>
                </li>
              </ul>
            </div>

            {/* Join Button Section */}
            <div className="text-center mt-10">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Join the Fun?
              </h3>
              {isJoinable ? (
                <button className="btn btn-primary btn-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-pulse">
                  Join This Group! 🎉
                </button>
              ) : (
                <div className="alert alert-warning shadow-lg justify-center">
                  <div>
                    <FaRegClock />
                    <span>This group's start date has passed.</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column (2/5 width): Just the Image */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl overflow-hidden shadow-2xl sticky top-24">
              <img
                src={imageError ? placeholderImage : group.image}
                alt={group.groupName}
                className="w-full h-auto object-cover aspect-square"
                onError={() => setImageError(true)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupDetails;
