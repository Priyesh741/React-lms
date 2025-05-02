import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const AddPage = () => {
  // Initial form state
  const navigate = useNavigate();
  const initialFormState = {
    title: '',
    author: '',
  };

  // Component state
  const [formData, setFormData] = useState(initialFormState);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);

  const handleNavigate = (e=null) => {
    if (e) e.preventDefault();
    navigate("/manage-books",{state:formData}); 
  };

  const handleCancel = () => {
    setFormData(initialFormState);
  };

  // Handle form submission
  const handleAddPage = () => {
    const { title, author } = formData;

    if (!title || !author) {
      setShowErrorToast(true);
      setTimeout(() => setShowErrorToast(false), 3000);
      return;
    }

    // Assume form submission logic here
    setShowSuccessToast(true);
    handleCancel();
    setTimeout(() => {
      setShowSuccessToast(false);
      handleNavigate();
    }, 1600);
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Book added:", { title, author });
    // You can later add logic to POST this to a backend or update state
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white rounded shadow">
      {/* Error Toast */}
      {showErrorToast && (
        <div className="absolute top-4 right-4 bg-red-300 text-white px-4 py-2 rounded shadow">
          ❌ Please fill all the required fields.
        </div>
      )}

      {/* Success Toast */}
      {showSuccessToast && (
        <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow">
          ✅ Book added successfully.
        </div>
      )}

      <h2 className="text-2xl font-semibold mb-4">Add New Book</h2>
      <form onSubmit={handleSubmit}>
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Book Title *</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full mb-3 px-3 py-2 border rounded"
            required
          />
        </div>

        {/* Author */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Author *</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="w-full mb-3 px-3 py-2 border rounded"
            required
          />
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-end space-x-4">
          <button
            type="button"
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            type="button"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={handleAddPage}
          >
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPage;
