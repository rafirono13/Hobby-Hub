import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import {
  FaMapMarkerAlt,
  FaUserFriends,
  FaCalendarAlt,
  FaInfoCircle,
  FaRegClock,
} from 'react-icons/fa';

const GroupDetails = () => {
  const { id } = useParams();
  const [group, setGroup] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      setError('Group ID not found in URL.');
      setLoading(false);
      return;
    }

    const fetchGroupDetails = async () => {
      try {
        const response = await fetch(
          `https://hobby-hub-server-lemon.vercel.app/groupInformation/${id}`
        );
        if (!response.ok) {
          throw new Error(
            `Failed to fetch group details: ${response.statusText}`
          );
        }
        const data = await response.json();
        setGroup(data);
      } catch (err) {
        console.error('Error fetching group details:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGroupDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg"></span>
        <p className="text-xl ml-2 ">Loading group details Please wait...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600 text-xl mt-10 bg-gray-100 p-8 rounded-lg shadow-md">
        <p>Error: {error}</p>
        <p>Could not load group details. Please try again later. 😔</p>
      </div>
    );
  }

  if (!group) {
    return (
      <div className="text-center text-xl mt-10 bg-gray-100 p-8 rounded-lg shadow-md">
        <p>No group found with this ID. 🤔</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl shadow-2xl shadow-gray-600 overflow-hidden">
          <img
            src={group.image}
            alt={group.groupName}
            className="w-full h-96 object-cover object-center"
          />
          <div className="p-8 sm:p-12">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-700 to-purple-700 text-transparent bg-clip-text">
              {group.groupName}
            </h1>
            <p className="text-2xl font-semibold text-blue-600 mb-6">
              Category: {group.category}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg mb-8">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-blue-500 text-2xl flex-shrink-0 mt-1" />

                <span className="font-medium flex-shrink-0">Location:</span>
                <span className="break-words min-w-0">{group.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <FaUserFriends className="text-purple-500 text-2xl" />
                <span className="font-medium">Max Members:</span>
                {group.maxMembers}
              </div>
              <div className="flex items-center gap-3">
                <FaCalendarAlt className="text-green-500 text-2xl" />
                <span className="font-medium">Start Date:</span>
                {new Date(group.startDate).toLocaleDateString()}
              </div>
              <div className="flex items-center gap-3">
                <FaRegClock className="text-orange-500 text-2xl" />
                <span className="font-medium">Created:</span>
                {new Date(group.createdAt).toLocaleDateString()}
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
                <FaInfoCircle /> Description
              </h2>
              <p className="text-lg leading-relaxed">{group.description}</p>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <p className="text-md ">
                <span className="font-semibold">Creator:</span>
                {group.creatorName} ({group.creatorEmail})
              </p>
            </div>

            <div className="text-center mt-10">
              <button className="btn btn-primary btn-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                Join Group! 🎉
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupDetails;
