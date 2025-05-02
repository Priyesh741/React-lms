import React from 'react';
import { useLocation,useNavigate } from 'react-router-dom';

const BookingDetail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  if (!state) {
    return <p>No booking details provided.</p>;
  }

  const handleBack = () => {
    navigate("/booking"); 
  };

  return (
    
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6">Booking Details</h2>
      <table className="min-w-full table-auto border border-gray-300">
        <tbody>
          <tr className="bg-gray-100">
            <td className="border px-4 py-2 font-semibold">Title</td>
            <td className="border px-4 py-2">{state.title}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-semibold">Author</td>
            <td className="border px-4 py-2">{state.author}</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border px-4 py-2 font-semibold">Genre</td>
            <td className="border px-4 py-2">{state.genre}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-semibold">Language</td>
            <td className="border px-4 py-2">{state.language}</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border px-4 py-2 font-semibold">Copies</td>
            <td className="border px-4 py-2">{state.copies}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-semibold">Status</td>
            <td className="border px-4 py-2">{state.status}</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border px-4 py-2 font-semibold">Date</td>
            <td className="border px-4 py-2">{state.date}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-semibold">File</td>
            <td className="border px-4 py-2">{state.file?.name}</td>
          </tr>
        </tbody>
      </table>
      <div className="flex space-x-4">
      <button
          onClick={handleBack}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default BookingDetail;
