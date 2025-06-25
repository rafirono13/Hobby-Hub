import React from 'react';

const Loader = ({ spinnerOnly, size = 'loading-xl' }) => {
  if (spinnerOnly) {
    return <span className={`loading loading-spinner ${size}`}></span>;
  }

  return (
    <div>
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    </div>
  );
};

export default Loader;
