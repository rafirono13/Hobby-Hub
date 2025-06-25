import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { FaCircleNodes } from 'react-icons/fa6';
import useAuth from '../../Hooks/useAuth';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [imageError, setImageError] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    if (user && user.photoURL) {
      setImageError(false);
    }
  }, [user, user?.photoURL]);

  const handleToggle = e => {
    if (e.target.checked) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  const handleLogout = async () => {
    try {
      await logOut();
      Swal.fire({
        icon: 'success',
        title: 'Logged Out',
        text: 'You have been successfully logged out.',
        showConfirmButton: false,
        timer: 1400,
      });
    } catch (error) {
      console.error('Logout failed:', error);
      toast.error(`Logout failed: ${error.message}`);
    }
  };

  const links = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/groups">All Groups</Link>
      </li>
      <li>
        <Link to="/create-group">Create Group</Link>
      </li>
      <li>
        <Link to="/my-groups">My Groups</Link>
      </li>
    </>
  );

  return (
    <div>
      <nav className="navbar bg-base-100 w-11/12 mx-auto my-5 rounded-full px-4 sm:px-6 lg:px-8 border-b-1 shadow-sm">
        {/* Brand Logo */}
        <div className="navbar-start sm:pl-4 lg:pl-6">
          <div className="dropdown px-5 lg:hidden">
            <button tabIndex={0} role="button" className="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 mt-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>

            {/* Mobile Menu Items */}
            <ul
              tabIndex={0}
              className="menu menu-lg dropdown-content rounded-box z-1 mt-4 w-40 p-2 shadow flex flex-col gap-2 text-xl bg-base-100"
            >
              {links}
            </ul>
          </div>

          <Link to="/">
            <button className="bg-transparent border-none text-2xl font-bold flex items-center gap-2">
              <FaCircleNodes className="text-red-500 text-2xl animate-pulse" />
              <span className="font-bold text-2xl">HobbyHub</span>
            </button>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="navbar-center hidden lg:flex lg:ml-5">
          <ul className="menu menu-horizontal px-1 flex gap-10 text-lg">
            {links}
          </ul>
        </div>

        {/* User Section with Static Avatar */}
        <div className="navbar-end ml-auto pr-2 sm:pr-4 lg:pr-6">
          {/* Dark mode toggle */}
          <label className="swap swap-rotate h-12 w-12 bg-base-100 rounded-full cursor-pointer">
            <input
              type="checkbox"
              onChange={handleToggle}
              checked={theme === 'dark'}
              className="hidden"
            />
            {/* Sun icon */}
            <svg
              className="swap-on fill-current h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
            {/* Moon icon */}
            <svg
              className="swap-off fill-current h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>

          {/* User Avatar */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="cursor-pointer avatar w-10 lg:w-12"
            >
              <div className="rounded-full w-full h-full">
                {user?.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt="User Avatar"
                    className="w-full h-full object-cover"
                    key={user.uid}
                  />
                ) : (
                  <svg
                    className={`fallback-svg w-full h-full object-cover ${
                      theme === 'dark' ? 'stroke-white' : 'stroke-black'
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                )}
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 z-[100] p-2 shadow bg-base-200 rounded-box w-64"
            >
              {user ? (
                <>
                  <li className="px-4 pt-2 pb-1">
                    <span className="font-bold text-lg block">
                      {user.displayName || 'User Name'}
                    </span>
                  </li>
                  <li className="px-4 pb-2">
                    <span className="text-xs text-gray-500 block">
                      {user.email || 'user@example.com'}
                    </span>
                  </li>
                  <li>
                    <div className="divider my-0 mx-2"></div>
                  </li>
                  <li className="py-2 mx-2 ">
                    <button className="text-red-500" onClick={handleLogout}>
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <li>
                  <Link to="/auth/login" className="py-2 mx-2">
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
