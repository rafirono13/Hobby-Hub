import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import axios from 'axios';
import { FaLayerGroup, FaUsers } from 'react-icons/fa';

const api = axios.create({
  baseURL: 'https://hobby-hub-server-lemon.vercel.app',
});

const DashboardOverview = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState({ totalGroups: 0, myGroups: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      if (!user?.email) {
        setLoading(false);
        return;
      }

      try {
        const [totalGroupsResponse, myGroupsResponse] = await Promise.all([
          api.get('/groupInformation'),
          api.get(`/groupInformation/user?email=${user.email}`),
        ]);

        setStats({
          totalGroups: totalGroupsResponse.data.length || 0,
          myGroups: myGroupsResponse.data.length || 0,
        });
      } catch (error) {
        console.error('Failed to fetch stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [user]);

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* User Welcome Card */}
      <div className="card lg:card-side bg-base-100 shadow-xl mb-8">
        <figure className="p-8">
          <img
            src={user?.photoURL || 'https://avatar.iran.liara.run/public'}
            alt="User"
            className="rounded-full w-32 h-32 ring ring-primary ring-offset-base-100 ring-offset-4"
          />
        </figure>
        <div className="card-body justify-center">
          <h2 className="card-title text-3xl">
            Welcome back, {user?.displayName || 'Creator'}!
          </h2>
          <p className="text-base-content text-opacity-70">
            Ready to build and explore communities?
          </p>
          <p className="text-sm font-mono mt-2">{user?.email}</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="stat bg-base-100 shadow-xl rounded-2xl">
          <div className="stat-figure text-primary">
            <FaUsers className="inline-block w-8 h-8 stroke-current" />
          </div>
          <div className="stat-title">Total Groups</div>
          <div className="stat-value">
            {loading ? '...' : stats.totalGroups}
          </div>
          <div className="stat-desc">Across the entire platform</div>
        </div>

        <div className="stat bg-base-100 shadow-xl rounded-2xl">
          <div className="stat-figure text-secondary">
            <FaLayerGroup className="inline-block w-8 h-8 stroke-current" />
          </div>
          <div className="stat-title">My Groups</div>
          <div className="stat-value">{loading ? '...' : stats.myGroups}</div>
          <div className="stat-desc">Groups you have created</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
