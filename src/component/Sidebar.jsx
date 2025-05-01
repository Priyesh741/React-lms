import { Link } from "react-router-dom";
import { FaBook, FaUser, FaCog, FaBell, FaBookmark, FaPlus } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="w-32 bg-gray-100 h-screen p-4">
      <h2 className="text-sm font-semibold mb-2">Library System</h2>
      <ul className="space-y-3">
        <li>
          <Link to="/manage-books" className="block px-4 py-2 rounded hover:bg-purple-200">
          <FaBook />
          </Link>
          <Link to="/booking" className="block px-4 py-2 rounded hover:bg-purple-200">
            <FaBookmark/>
          </Link>
        </li>
        <li>
          <Link to="/members" className="block px-4 py-2 rounded hover:bg-purple-200">
            <FaUser />
          </Link>
        </li>
        {/* Add other nav items similarly */}
      </ul>
    </div>
  );
};

export default Sidebar;
