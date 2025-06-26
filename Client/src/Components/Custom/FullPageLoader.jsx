import React from 'react';
import { FaCircleNodes } from 'react-icons/fa6';
import useTheme from '../../Hooks/useTheme';

const FullPageLoader = () => {
  useTheme();
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-base-100 bg-opacity-90 backdrop-blur-sm">
      <div className="flex items-center gap-4 text-3xl font-bold text-primary">
        <FaCircleNodes className="text-5xl animate-pulse" />
        <span>HobbyHub</span>
      </div>
      <p className="mt-4 text-lg text-base-content text-opacity-70">
        Getting things ready for you...
      </p>
      <span className="loading loading-dots loading-md text-primary mt-2"></span>
    </div>
  );
};

export default FullPageLoader;
