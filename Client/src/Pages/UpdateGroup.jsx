import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import useAuth from '../Hooks/useAuth';
import { FaUsersCog } from 'react-icons/fa';
import Swal from 'sweetalert2';

const UpdateGroup = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [group, setGroup] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetching the group details
  useEffect(() => {
    fetch(`https://hobby-hub-server-lemon.vercel.app/groupInformation/${id}`)
      .then(res => res.json())
      .then(data => {
        setGroup(data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, [id]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;

    const updatedData = {
      groupName: form.groupName.value,
      category: form.category.value,
      location: form.location.value,
      maxMembers: parseInt(form.maxMembers.value, 10),
      startDate: form.startDate.value,
      image: form.image.value,
      description: form.description.value,
      // These remain unchanged
      creatorName: user?.displayName || '',
      creatorEmail: user?.email || '',
    };

    fetch(`https://hobby-hub-server-lemon.vercel.app/groupInformation/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    })
      .then(res => {
        if (!res.ok) throw new Error('Update failed');
        return res.json();
      })
      .then(data => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: 'Group updated successfully',
          });
          navigate('/my-groups');
        }
      })
      .catch(error => {
        console.error('Update error:', error);
        Swal.fire({
          icon: 'error',
          title: 'Update Failed',
          text: 'Failed to update group. Please try again.',
        });
      });
  };

  if (loading) {
    return <p className="text-center mt-10 text-xl">Loading group info...</p>;
  }

  if (!group) {
    return <p className="text-center text-red-600 mt-10">Group not found.</p>;
  }

  return (
    <div>
      <div className="max-w-4xl mx-auto p-6 rounded-2xl shadow-2xl mt-10">
        <h2 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-2">
          <FaUsersCog className="text-blue-500 text-4xl" />
          Update Group
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Group Name */}
          <div className="col-span-1 md:col-span-2">
            <label className="block mb-1 font-medium">Group Name</label>
            <input
              type="text"
              name="groupName"
              defaultValue={group.groupName}
              required
              className="input input-bordered w-full"
            />
          </div>

          {/* Hobby Category */}
          <div>
            <label className="block mb-1 font-medium">Hobby Category</label>
            <select
              name="category"
              defaultValue={group.category}
              className="select select-bordered w-full"
              required
            >
              <option>Drawing & Painting</option>
              <option>Photography</option>
              <option>Video Gaming</option>
              <option>Fishing</option>
              <option>Running</option>
              <option>Cooking</option>
              <option>Reading</option>
              <option>Writing</option>
            </select>
          </div>

          {/* Meeting Location */}
          <div>
            <label className="block mb-1 font-medium">Meeting Location</label>
            <input
              type="text"
              name="location"
              defaultValue={group.location}
              required
              className="input input-bordered w-full"
            />
          </div>

          {/* Max Members */}
          <div>
            <label className="block mb-1 font-medium">Max Members</label>
            <input
              type="number"
              name="maxMembers"
              defaultValue={group.maxMembers}
              required
              className="input input-bordered w-full"
            />
          </div>

          {/* Start Date */}
          <div>
            <label className="block mb-1 font-medium">Start Date</label>
            <input
              type="date"
              name="startDate"
              defaultValue={group.startDate.split('T')[0]}
              required
              className="input input-bordered w-full"
            />
          </div>

          {/* Image URL */}
          <div className="col-span-1 md:col-span-2">
            <label className="block mb-1 font-medium">Group Image URL</label>
            <input
              type="url"
              name="image"
              defaultValue={group.image}
              required
              className="input input-bordered w-full"
            />
          </div>

          {/* Description */}
          <div className="col-span-1 md:col-span-2">
            <label className="block mb-1 font-medium">Description</label>
            <textarea
              name="description"
              defaultValue={group.description}
              rows="4"
              className="textarea textarea-bordered w-full"
              required
            ></textarea>
          </div>

          {/* Readonly User Info */}
          <div>
            <label className="block mb-1 font-medium">Your Name</label>
            <input
              type="text"
              value={user?.displayName || ''}
              readOnly
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Your Email</label>
            <input
              type="email"
              value={user?.email || ''}
              readOnly
              className="input input-bordered w-full"
            />
          </div>

          <div className="col-span-1 md:col-span-2 text-center mt-4">
            <button type="submit" className="btn btn-primary w-full md:w-1/2">
              Update Group
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateGroup;
