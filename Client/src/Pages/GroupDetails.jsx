import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Swal from 'sweetalert2';
import useAuth from '../Hooks/useAuth';
import axios from 'axios';
import {
  FaMapMarkerAlt,
  FaUserFriends,
  FaCalendarAlt,
  FaUserCircle,
  FaTag,
  FaRegClock,
} from 'react-icons/fa';
import HomeLoader from '../Components/Custom/HomeLoader';

const api = axios.create({
  baseURL: 'https://hobby-hub-server-lemon.vercel.app',
});

const GroupDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [group, setGroup] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const fetchGroupDetails = async () => {
      try {
        const response = await api.get(`/groupInformation/${id}`);
        setGroup(response.data);
      } catch (err) {
        setError(
          err.response?.data?.message ||
            err.message ||
            'Failed to fetch group details.'
        );
      } finally {
        setLoading(false);
      }
    };
    fetchGroupDetails();
  }, [id]);

  const handleJoinGroup = async () => {
    if (!user) {
      Swal.fire({
        icon: 'error',
        title: 'Not Logged In',
        text: 'You must be logged in to join a group.',
      });
      return;
    }

    if (user?.email === group?.creatorEmail) {
      Swal.fire({
        icon: 'info',
        title: 'Heads up!',
        text: "You can't join a group that you've created.",
      });
      return;
    }

    const result = await Swal.fire({
      title: 'Confirm Join',
      text: `Are you sure you want to join "${group.groupName}"?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, join it!',
    });

    if (result.isConfirmed) {
      try {
        const response = await api.patch(`/groupInformation/${id}/join`, {
          userEmail: user.email,
        });

        const data = response.data;

        if (data.message) {
          Swal.fire('Already a Member', data.message, 'info');
        } else {
          Swal.fire(
            'Joined!',
            'You have successfully joined the group. Welcome!',
            'success'
          );
        }
      } catch (err) {
        console.error('Join group error:', err);
        Swal.fire(
          'Error!',
          err.response?.data?.message || 'Could not process your request.',
          'error'
        );
      }
    }
  };

  if (loading) return <HomeLoader />;
  if (error)
    return <div className="text-center py-20 text-error">Error: {error}</div>;
  if (!group) return <div className="text-center py-20">Group not found.</div>;

  const isJoinable = new Date(group.startDate) >= new Date();
  const placeholderImage = `https://placehold.co/800x600/2A303C/E9E9E9?text=${group.groupName
    .split(' ')
    .join('\\n')}`;

  return (
    <div className="bg-base-200 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left Column: All Text Information */}
          <div className="lg:col-span-3">
            <div className="mb-8">
              <p className="text-lg font-semibold text-primary mb-2">
                {group.category}
              </p>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-base-content leading-tight">
                {group.groupName}
              </h1>
            </div>
            <div className="prose max-w-none text-base-content text-opacity-80 mb-8">
              <p className="text-lg leading-relaxed">{group.description}</p>
            </div>
            <div className="divider"></div>
            <div className="bg-base-100 p-6 rounded-2xl shadow-md mb-8">
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
            <div className="text-center mt-10">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Join the Fun?
              </h3>
              {isJoinable ? (
                <button
                  onClick={handleJoinGroup}
                  className="btn btn-primary btn-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-pulse"
                >
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
          {/* Right Column: Just the Image */}
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
