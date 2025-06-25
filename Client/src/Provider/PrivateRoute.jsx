import React from 'react';
import useAuth from './../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router';
import Loader from '../Components/Error/Loader';

const PrivateRoute = ({ children }) => {
  const { user, loading, setRedirectPath } = useAuth();
  const location = useLocation();
  console.log(location.pathname);

  if (loading) {
    return <Loader></Loader>;
  }

  if (!user) {
    setRedirectPath(location.pathname);
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
