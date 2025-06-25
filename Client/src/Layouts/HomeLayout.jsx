import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../Components/Common/Navbar';
import Footer from '../Components/Common/Footer';
import Loader from './../Components/Error/Loader';

const HomeLayout = () => {
  const navigation = useNavigation();
  return (
    <div>
      <nav className="sticky top-0 z-50">
        <Navbar></Navbar>
      </nav>
      <main className="min-h-screen w-11/12 mx-auto p-5">
        {navigation.state === 'loading' ? <Loader></Loader> : <Outlet></Outlet>}
      </main>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default HomeLayout;
