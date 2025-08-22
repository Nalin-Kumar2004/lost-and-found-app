import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Lost &amp; Found Portal</h1>
      <p className="text-lg text-gray-700 mb-8 text-center max-w-xl">
        Welcome! This is your campus hub for lost and found items. Search, post, and claim items easily. Start by browsing recent posts or creating your own.
      </p>
      <div className="flex gap-4">
        <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Browse Items</button>
        <button className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">Post Lost/Found</button>
      </div>
    </div>
  );
};

export default Home;
