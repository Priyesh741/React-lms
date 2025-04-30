import React, { useState } from "react";

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
        <input
          type="text"
          placeholder="Search Username"
          className="border px-4 py-2 rounded w-1/3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="flex gap-2">
          <button className="bg-purple-600 text-white px-4 py-2 rounded">+ Add Member</button>
          <div className="relative">
            <button className="bg-gray-200 px-4 py-2 rounded">Actions ▼</button>
            {/* Dropdown menu could go here */}
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
              <td className="p-3 text-purple-700 hover:underline cursor-pointer">{member.name}</td>
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
          <button className="px-3 py-1 border rounded bg-purple-600 text-white">1</button>
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
