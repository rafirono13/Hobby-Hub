import React from 'react';

const HomeLoader = () => {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <div class="animate-pulse flex flex-col gap-4 w-60">
        <div>
          <div class="w-48 h-6 bg-slate-400 rounded-md"></div>
          <div class="w-28 h-4 bg-slate-400 mx-auto mt-3 rounded-md"></div>
        </div>
        <div class="h-7 bg-slate-400 w-full rounded-md"></div>
        <div class="h-7 bg-slate-400 w-full rounded-md"></div>
        <div class="h-7 bg-slate-400 w-full rounded-md"></div>
        <div class="h-7 bg-slate-400 w-1/2 rounded-md"></div>
      </div>
    </div>
  );
};

export default HomeLoader;
