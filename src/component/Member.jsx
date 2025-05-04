import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

// Dummy data
const members = [
  {
    id: "U001",
    name: "John Doe",
    email: "john.doe@example.com",
    language: "English",
    lending: "The Great Gatsby",
    fine: "5.00",
    issuedDate: "2024-12-01",
    submittedDate: "2024-12-10",
  },
  {
    id: "U002",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    language: "Hindi",
    lending: "1984",
    fine: "0.00",
    issuedDate: "2025-01-05",
    submittedDate: "2025-01-12",
  },
  {
    id: "U003",
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    language: "English",
    lending: "To Kill a Mockingbird",
    fine: "2.50",
    issuedDate: "2025-02-15",
    submittedDate: "2025-02-25",
  },
  {
    id: "U004",
    name: "Rahul Mehra",
    email: "rahul.mehra@example.com",
    language: "Hindi",
    lending: "Shantaram",
    fine: "0.00",
    issuedDate: "2025-03-01",
    submittedDate: "2025-03-10",
  },
  {
    id: "U005",
    name: "Emily Brown",
    email: "emily.brown@example.com",
    language: "English",
    lending: "Pride and Prejudice",
    fine: "1.00",
    issuedDate: "2025-04-10",
    submittedDate: "2025-04-17",
  },
  {
    id: "U006",
    name: "Anjali Gupta",
    email: "anjali.gupta@example.com",
    language: "Hindi",
    lending: "Godaan",
    fine: "0.00",
    issuedDate: "2025-04-15",
    submittedDate: "2025-04-22",
  },
  {
    id: "U007",
    name: "Robert King",
    email: "robert.king@example.com",
    language: "English",
    lending: "Moby Dick",
    fine: "3.25",
    issuedDate: "2025-01-12",
    submittedDate: "2025-01-22",
  },
  {
    id: "U008",
    name: "Priya Sharma",
    email: "priya.sharma@example.com",
    language: "Hindi",
    lending: "Gaban",
    fine: "0.00",
    issuedDate: "2025-03-05",
    submittedDate: "2025-03-12",
  },
  {
    id: "U009",
    name: "Samuel Wilson",
    email: "samuel.wilson@example.com",
    language: "English",
    lending: "1984",
    fine: "4.00",
    issuedDate: "2025-02-01",
    submittedDate: "2025-02-08",
  },
  {
    id: "U010",
    name: "Meena Rani",
    email: "meena.rani@example.com",
    language: "Hindi",
    lending: "Nirmala",
    fine: "0.50",
    issuedDate: "2025-03-20",
    submittedDate: "2025-03-27",
  },
  {
    id: "U011",
    name: "Chris Evans",
    email: "chris.evans@example.com",
    language: "English",
    lending: "War and Peace",
    fine: "2.00",
    issuedDate: "2025-02-25",
    submittedDate: "2025-03-05",
  },
  {
    id: "U012",
    name: "Kiran Joshi",
    email: "kiran.joshi@example.com",
    language: "Hindi",
    lending: "Rashmirathi",
    fine: "0.00",
    issuedDate: "2025-01-18",
    submittedDate: "2025-01-25",
  },
  {
    id: "U013",
    name: "Natalie Green",
    email: "natalie.green@example.com",
    language: "English",
    lending: "Little Women",
    fine: "1.75",
    issuedDate: "2025-03-10",
    submittedDate: "2025-03-20",
  },
  {
    id: "U014",
    name: "Vikas Dubey",
    email: "vikas.dubey@example.com",
    language: "Hindi",
    lending: "Karmabhoomi",
    fine: "0.00",
    issuedDate: "2025-04-01",
    submittedDate: "2025-04-08",
  },
  {
    id: "U015",
    name: "Sophia Clark",
    email: "sophia.clark@example.com",
    language: "English",
    lending: "Jane Eyre",
    fine: "0.00",
    issuedDate: "2025-01-28",
    submittedDate: "2025-02-04",
  },
];


const MembersPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeLanguageTab, setActiveLanguageTab] = useState("All");
  const [fineFilter, setFineFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  const navigate = useNavigate();

  function matchesFilters(member) {
    const nameEmailMatch =
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.email.toLowerCase().includes(searchQuery.toLowerCase());

    const languageMatch =
      activeLanguageTab === "All" ||
      member.language.toLowerCase() === activeLanguageTab.toLowerCase();

    const fineMatch =
      fineFilter === "All" ||
      (fineFilter === "No Fine" && parseFloat(member.fine) === 0) ||
      (fineFilter === "Due Fine" && parseFloat(member.fine) > 0);

    return nameEmailMatch && languageMatch && fineMatch;
  }

  const filteredMembers = members.filter(matchesFilters);
  const totalPages = Math.ceil(filteredMembers.length / usersPerPage);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredMembers.slice(indexOfFirstUser, indexOfLastUser);

  const handleNavigate = (e = null) => {
    if (e) e.preventDefault();
    navigate("/addmember");
  };

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden mt-8">
      <div className="overflow-x-auto m-5">
        <div className="flex gap-4 mb-4">
          <input
            type="text"
            placeholder="Search by name or email"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border p-2 rounded w-64"
          />
          <select
            value={activeLanguageTab}
            onChange={(e) => setActiveLanguageTab(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="All">All Languages</option>
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
            className="flex items-center space-x-2 bg-indigo-600 text-white px-2 py-2 rounded-md hover:bg-indigo-700 transition"
          >
            <FaPlus />
            <span>Add Member</span>
          </button>
        </div>

        <table className="min-w-full text-md text-left text-gray-500">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700">
            <tr className="bg-gray-100 text-left">
              <th className="text-md font-bold text-gray-900 px-6 py-3">Name</th>
              <th className="text-md font-bold text-gray-900 px-6 py-3">Email</th>
              <th className="text-md font-bold text-gray-900 px-6 py-3">Language</th>
              <th className="text-md font-bold text-gray-900 px-6 py-3">Lending</th>
              <th className="text-md font-bold text-gray-900 px-6 py-3">Issued Date</th>
              <th className="text-md font-bold text-gray-900 px-6 py-3">Submitted Date</th>
              <th className="text-md font-bold text-gray-900 px-6 py-3">Fine</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((member) => (
              <tr key={member.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-700">{member.name}</td>
                <td className="px-6 py-4 font-medium text-gray-700">{member.email}</td>
                <td className="px-6 py-4 font-normal text-gray-500">{member.language}</td>
                <td className="px-6 py-4 font-medium text-gray-700">{member.lending}</td>
                <td className="px-6 py-4 font-normal text-gray-500">{member.issuedDate}</td>
                <td className="px-6 py-4 font-normal text-gray-500">{member.submittedDate}</td>
                <td className="px-6 py-4 font-normal text-gray-500">{member.fine}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="text-md font-semibold text-gray-700 mt-4 flex justify-between items-center px-6 pb-4">
          Total Users: {filteredMembers.length}
          <div className="mt-4 flex justify-center gap-4">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 border rounded disabled:opacity-50"
            >
              Previous
            </button>
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 border rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembersPage;
