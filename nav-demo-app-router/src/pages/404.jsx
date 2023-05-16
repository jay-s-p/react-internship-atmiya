import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-4xl font-extrabold text-red-300 mt-4">ERROR</div>
      <div className="text-6xl font-extrabold text-red-500 mt-4">404</div>
      <img
        src="https://via.placeholder.com/1200X800?text=Page+not+found"
        alt="Cactus"
        className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 mt-10 rounded-xl"
      />
      <div className="mt-10">
        <Link
          to="/"
          className="bg-blue-500 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg mr-5"
        >
          Home
        </Link>
        <Link
          to="/contact"
          className="bg-green-500 hover:bg-green-700 active:bg-green-800 text-white font-bold py-3 px-6 rounded-lg"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
