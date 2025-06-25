import React, { useEffect, useState } from 'react';
import useAuth from '../Hooks/useAuth';
import { FaArrowLeft, FaEdit, FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { Link } from 'react-router';

const MyGroups = () => {
  const { user } = useAuth();
  const [myGroups, setMyGroups] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://hobby-hub-server-lemon.vercel.app/groupInformation/user?email=${user.email}`
      )
        .then(res => res.json())
        .then(data => {
          console.log('Fetched Data:', data);
          setMyGroups(data);
          setLoading(false);
        });
    }
  }, [user]);

  const handleDelete = id => {
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
          {
            method: 'DELETE',
          }
        )
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
              const remainingGroups = myGroups.filter(
                group => group._id !== id
              );
              setMyGroups(remainingGroups);
            }
          })
          .catch(error => {
            console.error('Error deleting group:', error);
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
            });
          });
      }
    });
  };

  if (loading)
    return <p className="text-center mt-10">Loading your groups...</p>;

  if (myGroups.length === 0)
    return <p className="text-center mt-10">No groups found.</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex justify-start mb-6">
        <Link to="/groups" className="flex items-center gap-2 hover:underline">
          <FaArrowLeft /> Back to All Groups
        </Link>
      </div>
      <h2 className="text-3xl font-bold mb-8 text-center">My Created Groups</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead className="text-left text-sm uppercase text-gray-500">
            <tr>
              <th>#</th>
              <th>Group Name</th>
              <th>Category</th>
              <th>Start Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {myGroups.map((group, index) => (
              <tr key={group._id}>
                <td>{index + 1}</td>
                <td>{group.groupName}</td>
                <td>{group.category}</td>
                <td>{new Date(group.startDate).toLocaleDateString()}</td>
                <td className="flex gap-2">
                  <Link
                    className="btn btn-sm btn-warning"
                    to={`/update/${group._id}`}
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
    </div>
  );
};

export default MyGroups;
