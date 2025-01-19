import { useState, useEffect } from "react";
import { useDarkMode } from "../context/DarkModeContext";
import UserCard from "./UserCard";
import UserCardSkeleton from "../skeletons/UserCardSkeleton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortKey, setSortKey] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);
  const { darkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    getUsersData();
  }, []);

  const getUsersData = async () => {
    try {
      const url = "https://jsonplaceholder.typicode.com/users";
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      const data = await response.json();
      setUsers(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error.message);
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSort = (e) => {
    const [key, order] = e.target.value.split("-");
    setSortKey(key);
    setSortOrder(order);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const filteredUsers = users
    .filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (!sortKey) return 0;
      if (sortOrder === "asc") {
        return a[sortKey] > b[sortKey] ? 1 : -1;
      } else {
        return a[sortKey] < b[sortKey] ? 1 : -1;
      }
    });

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  return (
    <div
      className={`p-4 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
      } h-screen`}
    >
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 space-y-4 md:space-y-0">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full md:w-1/2 p-2 rounded border border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-100 transition-all duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex items-center space-x-4">
          <select
            onChange={handleSort}
            className="px-4 py-2 rounded bg-transparent border border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-100 transition-all duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="name-asc">A to Z</option>
            <option value="name-desc">Z to A</option>
          </select>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-600 border-1 dark:bg-gray-600 text-gray-900 dark:text-gray-100 transition-transform duration-500 ease-in-out transform hover:scale-110"
          >
            {darkMode ? "🌙" : "☀️"}
          </button>
        </div>
      </div>

      {loading ? (
        <ul>
          {Array.from({ length: usersPerPage }).map((_, index) => (
            <UserCardSkeleton key={index} />
          ))}
        </ul>
      ) : error ? (
        <div className="text-red-500">{error}</div>
      ) : (
        <ul>
          {currentUsers.map((user) => (
            <UserCard user={user} key={user.id} />
          ))}
        </ul>
      )}

      <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 mx-1 rounded ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
