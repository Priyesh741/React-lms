import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaPlus } from "react-icons/fa";

const ActionDropdown = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left ml-2">
      <button
        onClick={() => setOpen(!open)}
        className="bg-cyan-300 px-4 py-2 rounded mr-6"
      >
        Actions ▼
      </button>
      {open && (
        <div className="absolute mt-2 w-38 bg-white border rounded shadow z-10">
          <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
            Deactivate User
          </button>
          <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
            Delete User
          </button>
        </div>
      )}
    </div>
  );
};

const members = [
  {
    id: "U001",
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Standard User",
    membership: "English",
    lending: "The Great Gatsby",
    fine: "5.00",
  },
  {
    id: "U002",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    role: "Admin",
    membership: "English",
    lending: "To Kill a Mockingbird, Hamlet",
    fine: "5.00",
  },
  // Add more members...
];

const MembersPage = () => {
  const [search, setSearch] = useState("");

  const filteredMembers = members.filter((m) =>
    m.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-7xl mx-auto mt-6">
      <div className="flex justify-between items-center mb-4">
        <div className="relative w-full max-w-lg">
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search Username"
            className="border px-8 py-2 rounded w-md text-base"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <Link to="/addmember">
            <button className="flex items-center space-x-2 bg-indigo-600 text-white px-2 py-2 rounded-md hover:bg-indigo-700 transition">
              <FaPlus />
              <span>Add Member</span>
            </button>
          </Link>
          <div className="flex justify-end mb-4 relative">
            <ActionDropdown />
          </div>
        </div>
      </div>

      <table className="w-full border text-sm text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3">User Id</th>
            <th className="p-3">User Name</th>
            <th className="p-3">Email</th>
            <th className="p-3">Role</th>
            <th className="p-3">Membership Type</th>
            <th className="p-3">Lending History</th>
            <th className="p-3">Fine</th>
          </tr>
        </thead>
        <tbody>
          {filteredMembers.map((member) => (
            <tr key={member.id} className="border-t">
              <td className="p-3">{member.id}</td>
              <td className="p-3 text-purple-700 hover:underline cursor-pointer">
                {member.name}
              </td>
              <td className="p-3">{member.email}</td>
              <td className="p-3">{member.role}</td>
              <td className="p-3">{member.membership}</td>
              <td className="p-3">{member.lending}</td>
              <td className="p-3">{member.fine}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between items-center mt-4">
        <div>Total User : {filteredMembers.length}</div>
        <div className="flex items-center space-x-2">
          <button className="px-3 py-1 border rounded">⟨⟨</button>
          <button className="px-3 py-1 border rounded bg-purple-600 text-white">
            1
          </button>
          <button className="px-3 py-1 border rounded">2</button>
          <button className="px-3 py-1 border rounded">⟩⟩</button>
          <select className="ml-2 border px-2 py-1 rounded">
            <option>Show 10</option>
            <option>Show 15</option>
            <option>Show 20</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default MembersPage;
