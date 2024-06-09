import React from 'react';

const InfiniteLoopComponent = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative w-32 h-32">
        <div className="absolute inset-0 flex justify-center items-center bg-blue-500 rounded-lg animate-spin-x" />
        <div className="absolute inset-0 flex justify-center items-center bg-red-500 rounded-lg animate-spin-x-reverse" />
        <div className="absolute inset-0 flex justify-center items-center bg-green-500 rounded-lg animate-spin-x" />
        <div className="absolute inset-0 flex justify-center items-center bg-yellow-500 rounded-lg animate-spin-x-reverse" />
        <div className="absolute inset-0 flex justify-center items-center bg-purple-500 rounded-lg animate-spin-x" />
        <div className="absolute inset-0 flex justify-center items-center bg-pink-500 rounded-lg animate-spin-x-reverse" />
      </div>
    </div>
  );
};

export default InfiniteLoopComponent;
