import { useState } from "react";
import {
  FaSearch,
  FaBook,
  FaUser,
  FaCog,
  FaBell,
  FaBookmark,
  FaPlus,
} from "react-icons/fa";

const ManageBooksPage = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const books = [
    {
      id: "Job-B0-01",
      title: "The Great Galaxy",
      author: "F. Scott Fitzgerald",
      status: "Available",
    },
    {
      id: "Job-B0-02",
      title: "The Star Mockingbird",
      author: "George Orwell",
      status: "Available",
    },
    {
      id: "Job-B0-03",
      title: "Present of the Caribbean",
      author: "John Austin",
      status: "Reserved",
    },
    {
      id: "Job-B0-04",
      title: "Pinks and Pinquicks",
      author: "J.G. Safinger",
      status: "Available",
    },
    {
      id: "Job-B0-05",
      title: "Journey to the Moon",
      author: "Arthur C. Clarke",
      status: "Damaged",
    },
    {
      id: "Job-B0-06",
      title: "The Dark Knight Rises",
      author: "Christopher Nolan",
      status: "Available",
    },
    {
      id: "Job-B0-07",
      title: "The Infinite War",
      author: "Frank Herbert",
      status: "Reserved",
    },
    {
      id: "Job-B0-08",
      title: "Science in the Stars",
      author: "Isaac Asimov",
      status: "Damaged",
    },
    {
      id: "Job-B0-09",
      title: "The Lost City",
      author: "Agatha Christie",
      status: "Available",
    },
    {
      id: "Job-B0-10",
      title: "The Silent Sea",
      author: "Jules Verne",
      status: "Reserved",
    },
    {
      id: "Job-B0-11",
      title: "Winds of Time",
      author: "H.G. Wells",
      status: "Damaged",
    },
    {
      id: "Job-B0-12",
      title: "The Final Countdown",
      author: "Ray Bradbury",
      status: "Available",
    },
    {
      id: "Job-B0-13",
      title: "Under the Red Sky",
      author: "Neil Gaiman",
      status: "Available",
    },
    {
      id: "Job-B0-14",
      title: "The Glass Castle",
      author: "Jeannette Walls",
      status: "Reserved",
    },
    {
      id: "Job-B0-15",
      title: "Echoes in the Void",
      author: "Douglas Adams",
      status: "Damaged",
    },
  ];

  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab =
      activeTab === "all" ||
      book.status.toLowerCase() === activeTab.toLowerCase();
    return matchesSearch && matchesTab;
  });

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Main Content */}
      <div className="ml-64 p-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Manage Books</h2>
          <button className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
            <FaPlus />
            <span>Add New Book</span>
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 rounded shadow text-center">
            <h3 className="text-lg font-medium text-gray-600">Total Books</h3>
            <p className="text-2xl font-bold text-indigo-700">1,000</p>
          </div>
          <div className="bg-white p-4 rounded shadow text-center">
            <h3 className="text-lg font-medium text-gray-600">Available</h3>
            <p className="text-2xl font-bold text-indigo-700">850</p>
          </div>
          <div className="bg-white p-4 rounded shadow text-center">
            <h3 className="text-lg font-medium text-gray-600">Checked Out</h3>
            <p className="text-2xl font-bold text-indigo-700">120</p>
          </div>
          <div className="bg-white p-4 rounded shadow text-center">
            <h3 className="text-lg font-medium text-gray-600">Reserved</h3>
            <p className="text-2xl font-bold text-indigo-700">30</p>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <div className="flex items-center justify-between space-x-4 mt-4 pb-2">
            {/* Filter Tabs */}
            <div className="flex space-x-4 mt-4 overflow-x-auto pb-2">
              {["All", "Available", "Reserved", "Damaged"].map((tab) => (
                <button
                  key={tab}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                    activeTab === tab.toLowerCase()
                      ? "text-white " +
                        (tab === "Available"
                          ? "bg-green-600"
                          : tab === "Reserved"
                          ? "bg-yellow-600"
                          : tab === "Damaged"
                          ? "bg-red-600"
                          : "bg-indigo-600")
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                  onClick={() => setActiveTab(tab.toLowerCase())}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative w-1/3">
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search books by title or author..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Books Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left text-gray-500">
              <thead className="bg-gray-50 text-xs uppercase text-gray-700">
                <tr>
                  <th className="text-xl font-semibold text-gray-700 px-6 py-3">ID</th>
                  <th className="text-xl font-semibold text-gray-700 px-6 py-3">Title</th>
                  <th className="text-xl font-semibold text-gray-700 px-6 py-3">Author</th>
                  <th className="text-xl font-semibold text-gray-700 px-6 py-3">Status</th>
                  <th className="text-xl font-semibold text-gray-700 px-6 py-3">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredBooks.length > 0 ? (
                  filteredBooks.map((book) => (
                    <tr key={book.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">
                        {book.id}
                      </td>
                      <td className="px-6 py-4 font-medium text-gray-900">
                        {book.title}
                      </td>
                      <td className="px-6 py-4">{book.author}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            book.status === "Available"
                              ? "bg-green-100 text-green-800"
                              : book.status === "Reserved"
                              ? "bg-yellow-100 text-yellow-800"
                              : book.status === "Damaged"
                              ? "bg-red-100 text-red-800"
                              : ""
                          }`}
                        >
                          {book.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        <div className="flex space-x-3">
                          <button className="px-4 py-2 rounded-full text-sm font-medium transition bg-blue-100 text-blue-700 hover:bg-blue-200">
                            Edit
                          </button>
                          <button className="px-4 py-2 rounded-full text-sm font-medium transition bg-red-100 text-red-700 hover:bg-red-200">
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="5"
                      className="px-6 py-4 text-center text-gray-500"
                    >
                      No books found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        <div className="text-xl font-semibold text-gray-700 mt-4 flex justify-between items-center">
          Total Books: {filteredBooks.length}
        </div>
      </div>
    </div>
  );
};

export default ManageBooksPage;
