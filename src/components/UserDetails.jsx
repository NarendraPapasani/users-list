import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faPhone,
  faGlobe,
  faMapMarkerAlt,
  faBuilding,
  faQuoteRight,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import Skeleton from "../skeletons/UserDetailsSkeleton";
import { useDarkMode } from "../context/DarkModeContext";
import { useNavigate } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const { darkMode, toggleDarkMode } = useDarkMode();
  const navigate = useNavigate();

  const getUserDetails = async () => {
    try {
      const url = `https://jsonplaceholder.typicode.com/users/${id}`;
      const response = await fetch(url);
      const data = await response.json();
      setUser(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col p-10 pt-3 animate-fadeIn h-screen bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="flex justify-between mb-6">
        <h1 className="text-3xl font-extrabold text-gray-800 dark:text-gray-200">
          User Details
        </h1>
        <div className="flex items-center -ml-1.5 space-x-4">
          <button
            onClick={goBack}
            className="bg-neutral-800 text-white px-4 py-2 rounded"
          >
            Go Back
          </button>
          <div>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-600 border-1 dark:bg-gray-600 text-gray-900 dark:text-gray-100 transition-transform duration-500 ease-in-out transform hover:scale-110"
            >
              {darkMode ? "🌙" : "☀️"}
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row h-full">
        <div className="w-full lg:w-1/3 flex flex-col items-center mb-6 lg:mb-0">
          {loading ? (
            <Skeleton className="w-48 h-48 lg:w-96 lg:h-96 rounded-full" />
          ) : (
            <div className="relative w-48 h-48 lg:w-96 lg:h-96 md:mt-6 rounded-full bg-gray-400 dark:bg-gray-700">
              <img
                src="https://cdn.vectorstock.com/i/500p/26/21/bronze-membership-icon-default-avatar-profile-vector-54532621.jpg"
                alt="Profile"
                className="w-full h-full rounded-full bg-slate-800 object-cover"
              />
            </div>
          )}
          {loading ? (
            <Skeleton className="w-32 h-8 mt-4" />
          ) : (
            <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 dark:text-gray-200 mt-4">
              {user.name}
            </h2>
          )}
        </div>
        <div className="w-full lg:w-2/3 max-h-9/10 overflow-y-auto pr-4">
          {/* User details form */}
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <FontAwesomeIcon icon={faUser} className="text-blue-500 mr-2" />
              <label className="block text-lg font-medium text-gray-700 dark:text-gray-300">
                Username:
              </label>
            </div>
            {loading ? (
              <Skeleton className="w-full h-10" />
            ) : (
              <input
                type="text"
                value={user.username}
                readOnly
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              />
            )}
          </div>
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-red-500 mr-2"
              />
              <label className="block text-lg font-medium text-gray-700 dark:text-gray-300">
                Email:
              </label>
            </div>
            {loading ? (
              <Skeleton className="w-full h-10" />
            ) : (
              <input
                type="text"
                value={user.email}
                readOnly
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              />
            )}
          </div>
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <FontAwesomeIcon icon={faPhone} className="text-green-500 mr-2" />
              <label className="block text-lg font-medium text-gray-700 dark:text-gray-300">
                Phone:
              </label>
            </div>
            {loading ? (
              <Skeleton className="w-full h-10" />
            ) : (
              <input
                type="text"
                value={user.phone}
                readOnly
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              />
            )}
          </div>
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <FontAwesomeIcon
                icon={faGlobe}
                className="text-purple-500 mr-2"
              />
              <label className="block text-lg font-medium text-gray-700 dark:text-gray-300">
                Website:
              </label>
            </div>
            {loading ? (
              <Skeleton className="w-full h-10" />
            ) : (
              <input
                type="text"
                value={user.website}
                readOnly
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              />
            )}
          </div>
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
              Address
            </h2>
            <div className="mb-2">
              <div className="flex items-center mb-2">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="text-yellow-500 mr-2"
                />
                <label className="block text-lg font-medium text-gray-700 dark:text-gray-300">
                  Street:
                </label>
              </div>
              {loading ? (
                <Skeleton className="w-full h-10" />
              ) : (
                <input
                  type="text"
                  value={user.address?.street}
                  readOnly
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                />
              )}
            </div>
            <div className="mb-2">
              <div className="flex items-center mb-2">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="text-yellow-500 mr-2"
                />
                <label className="block text-lg font-medium text-gray-700 dark:text-gray-300">
                  Suite:
                </label>
              </div>
              {loading ? (
                <Skeleton className="w-full h-10" />
              ) : (
                <input
                  type="text"
                  value={user.address?.suite}
                  readOnly
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                />
              )}
            </div>
            <div className="mb-2">
              <div className="flex items-center mb-2">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="text-yellow-500 mr-2"
                />
                <label className="block text-lg font-medium text-gray-700 dark:text-gray-300">
                  City:
                </label>
              </div>
              {loading ? (
                <Skeleton className="w-full h-10" />
              ) : (
                <input
                  type="text"
                  value={user.address?.city}
                  readOnly
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                />
              )}
            </div>
            <div className="mb-2">
              <div className="flex items-center mb-2">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="text-yellow-500 mr-2"
                />
                <label className="block text-lg font-medium text-gray-700 dark:text-gray-300">
                  Zipcode:
                </label>
              </div>
              {loading ? (
                <Skeleton className="w-full h-10" />
              ) : (
                <input
                  type="text"
                  value={user.address?.zipcode}
                  readOnly
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                />
              )}
            </div>
            <div className="mb-2">
              <div className="flex items-center mb-2">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="text-yellow-500 mr-2"
                />
                <label className="block text-lg font-medium text-gray-700 dark:text-gray-300">
                  Geo:
                </label>
              </div>
              {loading ? (
                <Skeleton className="w-full h-10" />
              ) : (
                <input
                  type="text"
                  value={`Lat: ${user.address?.geo?.lat}, Lng: ${user.address?.geo?.lng}`}
                  readOnly
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                />
              )}
            </div>
          </div>
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
              Company
            </h2>
            <div className="mb-2">
              <div className="flex items-center mb-2">
                <FontAwesomeIcon
                  icon={faBuilding}
                  className="text-blue-500 mr-2"
                />
                <label className="block text-lg font-medium text-gray-700 dark:text-gray-300">
                  Name:
                </label>
              </div>
              {loading ? (
                <Skeleton className="w-full h-10" />
              ) : (
                <input
                  type="text"
                  value={user.company?.name}
                  readOnly
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                />
              )}
            </div>
            <div className="mb-2">
              <div className="flex items-center mb-2">
                <FontAwesomeIcon
                  icon={faQuoteRight}
                  className="text-red-500 mr-2"
                />
                <label className="block text-lg font-medium text-gray-700 dark:text-gray-300">
                  Catch Phrase:
                </label>
              </div>
              {loading ? (
                <Skeleton className="w-full h-10" />
              ) : (
                <input
                  type="text"
                  value={user.company?.catchPhrase}
                  readOnly
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                />
              )}
            </div>
            <div className="mb-2">
              <div className="flex items-center mb-2">
                <FontAwesomeIcon
                  icon={faBriefcase}
                  className="text-green-500 mr-2"
                />
                <label className="block text-lg font-medium text-gray-700 dark:text-gray-300">
                  BS:
                </label>
              </div>
              {loading ? (
                <Skeleton className="w-full h-10" />
              ) : (
                <input
                  type="text"
                  value={user.company?.bs}
                  readOnly
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
