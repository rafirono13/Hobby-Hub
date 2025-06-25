import React from 'react';
import Navbar from '../Components/Common/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default AuthLayout;
