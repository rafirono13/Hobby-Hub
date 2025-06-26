// src/Layouts/DashboardLayout.jsx

import React from 'react';
import { NavLink, Outlet, Link } from 'react-router';

import {
  FaTachometerAlt,
  FaUsers,
  FaPlusCircle,
  FaLayerGroup,
  FaHome,
} from 'react-icons/fa';
import useAuth from '../Hooks/useAuth';
import useTheme from '../Hooks/useTheme';

const DashboardLayout = () => {
  const { user } = useAuth();
  useTheme();

  const navLinks = (
    <>
      <li>
        <NavLink to="/dashboard" end className="text-lg">
          <FaTachometerAlt /> Overview
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/my-groups" className="text-lg">
          <FaLayerGroup /> My Groups
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/add-group" className="text-lg">
          <FaPlusCircle /> Add Group
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/all-groups" className="text-lg">
          <FaUsers /> All Groups
        </NavLink>
      </li>
      <div className="divider"></div>
      <li>
        <Link to="/" className="text-lg">
          <FaHome /> Back to Home
        </Link>
      </li>
    </>
  );

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center p-4 sm:p-8 bg-base-200">
        {/* Page content here */}
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden fixed bottom-4 right-4 z-50"
        >
          Menu
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-100 text-base-content">
          {/* Sidebar content here */}
          <div className="p-4 mb-4">
            <h1 className="text-2xl font-bold text-primary">HobbyHub</h1>
            <p className="text-sm">Dashboard</p>
          </div>
          {navLinks}
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
