import React from 'react';
import { FaArrowLeft, FaArrowRight, FaUsersCog } from 'react-icons/fa';
import useAuth from '../Hooks/useAuth';
import Swal from 'sweetalert2';
import { Link } from 'react-router';

const CreateGroup = () => {
  const { user } = useAuth();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const groupData = {
      groupName: form.groupName.value,
      category: form.category.value,
      location: form.location.value,
      maxMembers: parseInt(form.maxMembers.value, 10),
      startDate: form.startDate.value,
      createdAt: new Date().toISOString(),
      image: form.image.value,
      description: form.description.value,
      creatorName: user?.displayName || '',
      creatorEmail: user?.email || '',
    };
    console.log(groupData);

    fetch('https://hobby-hub-server-lemon.vercel.app/groupInformation', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(groupData),
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(errorData => {
            throw new Error(errorData.message || `Server error: ${res.status}`);
          });
        }
        return res.json();
      })
      .then(data => {
        console.log(data);
        if (data.acknowledged) {
          Swal.fire({
            icon: 'success',
            title: 'Group Created!',
            text: 'Your new hobby group has been successfully created.',
            confirmButtonColor: '#3085d6',
          });
          form.reset();
        } else {
          throw new Error(
            data.message || 'Group creation failed. Please try again.'
          );
        }
      })
      .catch(error => {
        console.error('Error creating group:', error);
        Swal.fire({
          icon: 'error',
          title: 'Oops... Something went wrong!',
          text:
            error.message ||
            'Failed to create the group. Please try again later.',
          confirmButtonColor: '#d33',
        });
      });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 rounded-2xl shadow-2xl mt-10">
      <div className="flex justify-between items-center mb-6">
        <Link to="/groups" className="flex items-center gap-2 hover:underline">
          <FaArrowLeft /> All Groups
        </Link>
        <Link
          to="/my-groups"
          className="flex items-center gap-2 hover:underline"
        >
          My Groups <FaArrowRight />
        </Link>
      </div>
      {/* Title with Icon */}
      <h2 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-2">
        <FaUsersCog className="text-blue-500 text-4xl" />
        Create a Hobby Group
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
            placeholder="Enter group name"
            required
            className="input input-bordered w-full"
          />
        </div>

        {/* Hobby Category */}
        <div>
          <label className="block mb-1 font-medium">Hobby Category</label>
          <select
            name="category"
            required
            className="select select-bordered w-full"
          >
            <option disabled selected>
              Select category
            </option>
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
            placeholder="e.g., Dhaka Central Park"
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
            placeholder="e.g., 20"
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
            placeholder="https://example.com/group.jpg"
            required
            className="input input-bordered w-full"
          />
        </div>

        {/* Description */}
        <div className="col-span-1 md:col-span-2">
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            name="description"
            rows="4"
            className="textarea textarea-bordered w-full"
            required
            placeholder="Tell people what this group is about..."
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

        {/* Submit Button */}
        <div className="col-span-1 md:col-span-2 text-center mt-4">
          <button type="submit" className="btn shadow w-full md:w-1/2">
            Create Group
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateGroup;
