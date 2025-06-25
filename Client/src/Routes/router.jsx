import { createBrowserRouter } from 'react-router';
import HomeLayout from '../Layouts/HomeLayout';
import HomePage from './../Pages/HomePage';
import AuthLayout from '../Layouts/AuthLayout';
import NotFound from './../Components/Error/NotFound';
import Login from './../Pages/Login';
import Register from './../Pages/Register';
import MyGroups from '../Pages/MyGroups';
import CreateGroup from './../Pages/CreateGroup';
import AllGroups from './../Pages/AllGroups';
import PrivateRoute from '../Provider/PrivateRoute';
import GroupDetails from '../Pages/GroupDetails';
import UpdateGroup from '../Pages/UpdateGroup';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'groups',
        element: <AllGroups />,
      },
      {
        path: 'groups/:id',
        element: <GroupDetails></GroupDetails>,
      },
      {
        path: 'my-groups',
        element: (
          <PrivateRoute>
            <MyGroups />
          </PrivateRoute>
        ),
      },
      {
        path: 'create-group',
        element: (
          <PrivateRoute>
            <CreateGroup />
          </PrivateRoute>
        ),
      },
      {
        path: 'update/:id',
        element: (
          <PrivateRoute>
            <UpdateGroup></UpdateGroup>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: 'auth',
    element: <AuthLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
