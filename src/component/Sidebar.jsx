// src/components/Sidebar.jsx
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-100 h-screen p-4">
      <h2 className="text-xl font-bold mb-4">Library System</h2>
      <ul className="space-y-3">
        <li>
          <Link to="/manage-books" className="block px-4 py-2 rounded hover:bg-purple-200">
            Manage Books
          </Link>
        </li>
        <li>
          <Link to="/members" className="block px-4 py-2 rounded hover:bg-purple-200">
            Members
          </Link>
        </li>
        {/* Add other nav items here */}
      </ul>
    </div>
  );
};

export default Sidebar;
