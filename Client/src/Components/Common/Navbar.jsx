import { Link, NavLink } from 'react-router';
import { FaCircleNodes } from 'react-icons/fa6';
import useAuth from '../../Hooks/useAuth';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import useTheme from '../../Hooks/useTheme';

const Navbar = () => {
  const { user, logOut } = useAuth();
  const { theme, toggleTheme } = useTheme();

  const handleLogout = async () => {
    try {
      await logOut();
      Swal.fire({
        icon: 'success',
        title: 'Logged Out!',
        text: 'You have been successfully logged out.',
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      toast.error(`Logout failed: ${error.message}`);
    }
  };

  // Define a style for active links
  const activeLinkStyle = {
    color: '#FF6B6B',
    borderBottom: '2px solid #FF6B6B',
    paddingBottom: '2px',
    fontWeight: 'bold',
  };

  // Links for logged-out users
  const publicLinks = (
    <>
      <li>
        <NavLink to="/" activeStyle={activeLinkStyle} exact>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/groups" activeStyle={activeLinkStyle}>
          All Groups
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" activeStyle={activeLinkStyle}>
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" activeStyle={activeLinkStyle}>
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink to="/support" activeStyle={activeLinkStyle}>
          Support
        </NavLink>
      </li>
    </>
  );

  // Links for logged-in users
  const privateLinks = (
    <>
      <li>
        <NavLink to="/" activeStyle={activeLinkStyle} exact>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/groups" activeStyle={activeLinkStyle}>
          All Groups
        </NavLink>
      </li>
      <li>
        <NavLink to="/create-group" activeStyle={activeLinkStyle}>
          Create Group
        </NavLink>
      </li>
      <li>
        <NavLink to="/my-groups" activeStyle={activeLinkStyle}>
          My Groups
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard" activeStyle={activeLinkStyle}>
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink to="/support" activeStyle={activeLinkStyle}>
          Support
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 w-11/12 mx-auto py-5 rounded-full px-4 sm:px-6 lg:px-8 border-b-2 shadow-md sticky top-2 z-50">
      {/* Brand Logo */}
      <div className="navbar-start">
        <div className="dropdown">
          <button
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-lg"
          >
            {user ? privateLinks : publicLinks}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost text-2xl font-bold flex items-center gap-2"
        >
          <FaCircleNodes className="text-[#4f32ff] text-3xl animate-pulse" />
          <span className="font-bold text-2xl hidden sm:inline">HobbyHub</span>
        </Link>
      </div>

      {/* Desktop Navigation Links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex items-center gap-8 text-lg">
          {user ? privateLinks : publicLinks}
        </ul>
      </div>

      {/* User & Theme Section */}
      <div className="navbar-end flex items-center gap-2">
        {/* Dark mode toggle */}
        <label className="swap swap-rotate btn btn-ghost btn-circle">
          <input
            type="checkbox"
            onChange={toggleTheme}
            checked={theme === 'dark'}
          />
          <svg
            className="swap-on fill-current w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>
          <svg
            className="swap-off fill-current w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>

        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                {user.photoURL ? (
                  <img alt="User Avatar" src={user.photoURL} />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-10 h-10"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
            >
              <li className="px-4 pt-2 pb-1 font-bold text-lg">
                {user.displayName || 'User'}
              </li>
              <li className="px-4 pb-2 text-xs text-gray-500">{user.email}</li>
              <div className="divider my-0"></div>
              <li>
                <button
                  className="text-red-500 font-semibold"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link
            to="/auth/login"
            className="btn btn-primary btn-outline hidden sm:flex"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
