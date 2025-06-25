import React, { useEffect, useState } from 'react';
import { FaMapMarkerAlt, FaUserFriends, FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router';
import HomeLoader from '../Components/Custom/HomeLoader';

const AllGroups = () => {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [totalImages, setTotalImages] = useState(0);

  const preloadImages = imageUrls => {
    return new Promise(resolve => {
      let loadedCount = 0;
      const totalCount = imageUrls.length;
      setTotalImages(totalCount);

      if (totalCount === 0) {
        resolve();
        return;
      }

      imageUrls.forEach(url => {
        const img = new Image();
        img.onload = img.onerror = () => {
          loadedCount++;
          setImagesLoaded(loadedCount);
          if (loadedCount === totalCount) {
            resolve();
          }
        };
        img.src = url;
      });
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://hobby-hub-server-lemon.vercel.app/groupInformation'
        );
        const data = await response.json();

        setGroups(data);
        console.log('Group data:', data);

        const imageUrls = data.map(group => group.image).filter(Boolean);

        await preloadImages(imageUrls);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching group data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <HomeLoader />
        {totalImages > 0 && (
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Loading images... {imagesLoaded}/{totalImages} ✨
            </p>
            <div className="w-64 bg-gray-200 rounded-full h-2 mt-2">
              <div
                className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(imagesLoaded / totalImages) * 100}%` }}
              ></div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-4xl font-bold text-center mb-10">
          Explore All Hobbies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {groups.map(group => (
            <div
              key={group._id}
              className="card bg-base-100 shadow-xl border border-zinc-200 dark:border-zinc-700"
            >
              <figure>
                <img
                  src={group.image}
                  alt={group.groupName}
                  className="w-full h-56 object-cover"
                  loading="lazy"
                />
              </figure>
              <div className="card-body">
                <h3 className="text-xl font-semibold mb-1">
                  {group.groupName}
                </h3>
                <span className="text-sm text-blue-600 dark:text-blue-400 mb-3">
                  {group.category}
                </span>
                <p className="text-sm mb-3 line-clamp-3">{group.description}</p>

                <div className="text-sm flex flex-col gap-1 mb-3">
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt /> {group.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <FaUserFriends /> Max Members: {group.maxMembers}
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt /> Start Date:{' '}
                    {new Date(group.startDate).toLocaleDateString()}
                  </div>
                </div>

                <div className="card-actions justify-end">
                  <Link
                    to={`/groups/${group._id}`}
                    className="btn btn-sm btn-primary"
                  >
                    See Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllGroups;
