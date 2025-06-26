import { createBrowserRouter } from 'react-router';
import HomeLayout from '../Layouts/HomeLayout';
import AuthLayout from '../Layouts/AuthLayout';
import PrivateRoute from '../Provider/PrivateRoute';

// Pages
import HomePage from './../Pages/HomePage';
import Login from './../Pages/Login';
import Register from './../Pages/Register';
import MyGroups from '../Pages/MyGroups';
import CreateGroup from './../Pages/CreateGroup';
import AllGroups from './../Pages/AllGroups';
import GroupDetails from '../Pages/GroupDetails';
import UpdateGroup from '../Pages/UpdateGroup';

// Error/Fallback Component
import NotFound from './../Components/Error/NotFound';
import AboutUs from '../Components/Custom/AboutUs';
import Contact from '../Components/Custom/Contact';
import Support from '../Components/Custom/Support';
import DashboardLayout from '../Layouts/DashboardLayout';
import DashboardOverview from '../Pages/DashboardOverview';

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
        // This route should be protected if only logged-in users can see details
        path: 'groups/:id',
        element: (
          <PrivateRoute>
            <GroupDetails />
          </PrivateRoute>
        ),
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
        // Renamed from 'update' to be more specific, as per convention
        path: 'update-group/:id',
        element: (
          <PrivateRoute>
            <UpdateGroup />
          </PrivateRoute>
        ),
      },
      // --- New Routes Added Below ---
      {
        path: 'about',
        element: <AboutUs />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'support',
        element: <Support />,
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
    path: 'dashboard',
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <DashboardOverview />,
      },
      {
        path: 'my-groups',
        element: <MyGroups />,
      },
      {
        path: 'add-group',
        element: <CreateGroup />,
      },
      {
        path: 'all-groups',
        element: <AllGroups />,
      },
    ],
  },
  {
    // Catch-all 404 route
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
