import React, { useEffect, useState, useMemo } from 'react';
import {
  FaMapMarkerAlt,
  FaUserFriends,
  FaCalendarAlt,
  FaFilter,
  FaSortAmountDown,
  FaSortAmountUp,
} from 'react-icons/fa';
import { Link } from 'react-router';
import HomeLoader from '../Components/Custom/HomeLoader';

const AllGroups = () => {
  const [allGroups, setAllGroups] = useState([]);
  const [loading, setLoading] = useState(true);

  // States for filtering and sorting
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [sortBy, setSortBy] = useState('groupName');
  const [sortOrder, setSortOrder] = useState('asc');

  const categories = [
    'All',
    'Drawing & Painting',
    'Photography',
    'Video Gaming',
    'Fishing',
    'Running',
    'Cooking',
    'Reading',
    'Writing',
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://hobby-hub-server-lemon.vercel.app/groupInformation'
        );
        const data = await response.json();
        setAllGroups(data);
      } catch (error) {
        console.error('Error fetching group data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // useMemo will re-calculate the filtered and sorted groups only when dependencies change
  const displayedGroups = useMemo(() => {
    let filtered = [...allGroups];

    // 1. Apply category filter
    if (categoryFilter !== 'All') {
      filtered = filtered.filter(group => group.category === categoryFilter);
    }

    // 2. Apply sorting
    filtered.sort((a, b) => {
      let valA, valB;

      if (sortBy === 'startDate') {
        valA = new Date(a.startDate);
        valB = new Date(b.startDate);
      } else {
        // Default to sorting by groupName
        valA = a.groupName.toLowerCase();
        valB = b.groupName.toLowerCase();
      }

      if (valA < valB) {
        return sortOrder === 'asc' ? -1 : 1;
      }
      if (valA > valB) {
        return sortOrder === 'asc' ? 1 : -1;
      }
      return 0;
    });

    return filtered;
  }, [allGroups, categoryFilter, sortBy, sortOrder]);

  if (loading) {
    return <HomeLoader />;
  }

  return (
    <div className="bg-base-200 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          Explore All Hobbies
        </h2>
        <p className="text-center text-lg text-base-content text-opacity-70 mb-10">
          Find your community. Your next adventure awaits.
        </p>

        {/* Controls Section for Filtering and Sorting */}
        <div className="bg-base-100 p-4 rounded-xl shadow-md mb-10 flex flex-col sm:flex-row gap-4 items-center justify-between">
          {/* Filter by Category */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <FaFilter className="text-primary" />
            <select
              value={categoryFilter}
              onChange={e => setCategoryFilter(e.target.value)}
              className="select select-bordered w-full max-w-xs"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Sort By and Order */}
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="select select-bordered w-full max-w-xs"
            >
              <option value="groupName">Sort by Name</option>
              <option value="startDate">Sort by Start Date</option>
            </select>
            <button
              onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
              className="btn btn-ghost"
            >
              {sortOrder === 'asc' ? <FaSortAmountDown /> : <FaSortAmountUp />}
            </button>
          </div>
        </div>

        {/* Display Groups */}
        {displayedGroups.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedGroups.map(group => (
              <div
                key={group._id}
                className="card bg-base-100 shadow-xl border border-transparent hover:border-primary transition-all duration-300 flex flex-col"
              >
                <figure className="h-56">
                  <img
                    src={group.image}
                    alt={group.groupName}
                    className="w-full h-full object-cover"
                  />
                </figure>
                <div className="card-body flex-grow flex flex-col">
                  <h3 className="card-title">{group.groupName}</h3>
                  <span className="badge badge-primary badge-outline mb-3">
                    {group.category}
                  </span>
                  <p className="text-sm text-base-content text-opacity-70 flex-grow">
                    {group.description.substring(0, 100)}...
                  </p>
                  <div className="card-actions justify-end mt-4">
                    <Link
                      to={`/groups/${group._id}`}
                      className="btn btn-primary"
                    >
                      See Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-2xl font-semibold">No groups found!</p>
            <p className="text-base-content text-opacity-70 mt-2">
              Try adjusting your filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllGroups;
