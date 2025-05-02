import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Dummy members array (replace with real data)
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
    role: "Premium User",
    membership: "Hindi",
    lending: "1984",
    fine: "0.00",
  },
];

const MembersPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeMembershipTab, setActiveMembershipTab] = useState("All");
  const [fineFilter, setFineFilter] = useState("All");

  const navigate = useNavigate();

  // Filtering logic using regular function
  function matchesFilters(member) {
    const nameEmailMatch =
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.email.toLowerCase().includes(searchQuery.toLowerCase());

    const membershipMatch =
      activeMembershipTab === "All" ||
      member.membership.toLowerCase() === activeMembershipTab.toLowerCase();

    const fineMatch =
      fineFilter === "All" ||
      (fineFilter === "No Fine" && parseFloat(member.fine) === 0) ||
      (fineFilter === "Due Fine" && parseFloat(member.fine) > 0);

    return nameEmailMatch && membershipMatch && fineMatch;
  }

  const filteredMembers = members.filter(matchesFilters);

  const handleNavigate = (e = null) => {
    if (e) e.preventDefault();
    navigate("/addmember");
  };

  return (
    <div className="p-4">
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by name or email"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border p-2 rounded w-64"
        />
        <select
          value={activeMembershipTab}
          onChange={(e) => setActiveMembershipTab(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="All">All Memberships</option>
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
        </select>
        <select
          value={fineFilter}
          onChange={(e) => setFineFilter(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="All">All Fines</option>
          <option value="No Fine">No Fine</option>
          <option value="Due Fine">Due Fine</option>
        </select>
        <button
          onClick={handleNavigate}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Member
        </button>
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Membership</th>
            <th className="p-2 border">Lending</th>
            <th className="p-2 border">Fine</th>
          </tr>
        </thead>
        <tbody>
          {filteredMembers.map((member) => (
            <tr key={member.id} className="hover:bg-gray-50">
              <td className="p-2 border">{member.name}</td>
              <td className="p-2 border">{member.email}</td>
              <td className="p-2 border">{member.membership}</td>
              <td className="p-2 border">{member.lending}</td>
              <td className="p-2 border">{member.fine}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MembersPage;
