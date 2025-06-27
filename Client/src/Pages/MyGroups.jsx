import React, { useEffect, useState } from 'react';
import useAuth from '../Hooks/useAuth';
import {
  FaArrowLeft,
  FaEdit,
  FaTrash,
  FaUsers,
  FaUserPlus,
} from 'react-icons/fa';
import Swal from 'sweetalert2';
import { Link } from 'react-router';
import HomeLoader from '../Components/Custom/HomeLoader';

const MyGroups = () => {
  const { user } = useAuth();
  const [createdGroups, setCreatedGroups] = useState([]);
  const [joinedGroups, setJoinedGroups] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      const fetchAllMyGroups = async () => {
        setLoading(true);
        try {
          // Fetch created and joined groups at the same time
          const [createdRes, joinedRes] = await Promise.all([
            fetch(
              `https://hobby-hub-server-lemon.vercel.app/groupInformation/user?email=${user.email}`
            ),
            fetch(
              `https://hobby-hub-server-lemon.vercel.app/groupInformation/joined?email=${user.email}`
            ),
          ]);

          const createdData = await createdRes.json();
          const joinedData = await joinedRes.json();

          setCreatedGroups(createdData);
          setJoinedGroups(joinedData);
        } catch (error) {
          console.error("Failed to fetch user's groups:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchAllMyGroups();
    }
  }, [user]);

  const handleDelete = id => {
    // ... (your existing delete logic is perfect!)
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        fetch(
          `https://hobby-hub-server-lemon.vercel.app/groupInformation/${id}`,
          { method: 'DELETE' }
        )
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              Swal.fire('Deleted!', 'Your group has been deleted.', 'success');
              const remainingGroups = createdGroups.filter(
                group => group._id !== id
              );
              setCreatedGroups(remainingGroups);
            }
          });
      }
    });
  };

  if (loading) return <HomeLoader />;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 w-full">
      <div className="flex justify-start mb-6">
        <Link to="/groups" className="btn btn-ghost">
          <FaArrowLeft /> Back to All Groups
        </Link>
      </div>

      {/* Created Groups Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center flex items-center justify-center gap-3">
          <FaUsers /> My Created Groups
        </h2>
        {createdGroups.length > 0 ? (
          <div className="overflow-x-auto bg-base-100 rounded-xl shadow-lg">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Group Name</th>
                  <th>Category</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {createdGroups.map((group, index) => (
                  <tr key={group._id} className="hover">
                    <td>{index + 1}</td>
                    <td>{group.groupName}</td>
                    <td>{group.category}</td>
                    <td className="flex gap-2">
                      <Link
                        className="btn btn-sm btn-info"
                        to={`/update-group/${group._id}`}
                      >
                        <FaEdit /> Update
                      </Link>
                      <button
                        onClick={() => handleDelete(group._id)}
                        className="btn btn-sm btn-error"
                      >
                        <FaTrash /> Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center p-8 bg-base-100 rounded-xl shadow">
            You haven't created any groups yet.
          </p>
        )}
      </div>

      {/* Joined Groups Section */}
      <div>
        <h2 className="text-3xl font-bold mb-6 text-center flex items-center justify-center gap-3">
          <FaUserPlus /> My Joined Groups
        </h2>
        {joinedGroups.length > 0 ? (
          <div className="overflow-x-auto bg-base-100 rounded-xl shadow-lg">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Group Name</th>
                  <th>Category</th>
                  <th>Creator</th>
                </tr>
              </thead>
              <tbody>
                {joinedGroups.map((group, index) => (
                  <tr key={group._id} className="hover">
                    <td>{index + 1}</td>
                    <td>
                      <Link
                        to={`/groups/${group._id}`}
                        className="link link-hover"
                      >
                        {group.groupName}
                      </Link>
                    </td>
                    <td>{group.category}</td>
                    <td>{group.creatorName}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center p-8 bg-base-100 rounded-xl shadow">
            You haven't joined any groups yet.{' '}
            <Link to="/groups" className="link link-primary">
              Go explore!
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default MyGroups;
