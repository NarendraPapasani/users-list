import React from "react";
import { useDarkMode } from "../context/DarkModeContext";
import { useNavigate } from "react-router-dom";

const UserCard = ({ user }) => {
  const { darkMode } = useDarkMode();
  const navigate = useNavigate();
  return (
    <li
      className={`${
        darkMode
          ? "bg-gray-800 text-gray-100 border-gray-700"
          : "bg-gray-50 text-gray-900 border-gray-300"
      } user-card cursor-pointer max-w-3xl m-5 mx-auto shadow-lg rounded-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 border`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center px-6 py-4">
        <div className="flex-shrink-0">
          <div className="h-16 w-16 rounded-full bg-slate-600 flex items-center justify-center text-white text-2xl">
            {user.name.charAt(0)}
          </div>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left flex-1">
          <p className="text-2xl leading-tight">{user.name}</p>
          <p className="text-sm leading-tight text-gray-600">{user.email}</p>
          <p className="text-sm leading-tight text-gray-600">{user.city}</p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-auto text-center sm:text-right">
          <button
            className="bg-green-700 text-white px-4 py-2 rounded"
            onClick={() => {
              navigate(`/user/${user.id}`);
            }}
          >
            Click Here
          </button>
        </div>
      </div>
    </li>
  );
};

export default UserCard;
