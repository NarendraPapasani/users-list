import React from "react";

const UserCardSkeleton = () => {
  return (
    <li className="bg-gray-200 dark:bg-gray-700 user-card cursor-pointer max-w-3xl m-5 mx-auto shadow-lg rounded-lg overflow-hidden animate-pulse list-style-none">
      <div className="flex flex-col sm:flex-row sm:items-center px-6 py-4">
        <div className="flex-shrink-0">
          <div className="h-16 w-16 rounded-full bg-gray-300 dark:bg-gray-600"></div>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
          <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-24 mb-2"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-32 mb-2"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-20"></div>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-auto text-center sm:text-right">
          <div className="h-10 bg-gray-300 dark:bg-gray-600 rounded w-24"></div>
        </div>
      </div>
    </li>
  );
};

export default UserCardSkeleton;
