// src/pages/AddMember.jsx
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const AddMember = () => {
  const navigate = useNavigate();
   const initialFormState = {
      username:'',
      emailid: '',
    };
  
    // Component state
    const [formData, setFormData] = useState(initialFormState);
    const [showSuccessToast, setShowSuccessToast] = useState(false);
    const [showErrorToast, setShowErrorToast] = useState(false);
  
    // Cancel/reset handler
    const handleCancel = () => {
      setFormData(initialFormState);
    };

    const handleNavigate = (e=null) => {
      if (e) e.preventDefault();
      navigate("/members"); 
    };
  
    // Handle form submission
    const handleAddMember = () => {
      const { username, emailid } = formData;
  
      if (!username || !emailid) {
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
        {showErrorToast && (
        <div className="absolute top-4 right-4 bg-red-300 text-white px-4 py-2 rounded shadow">
          ❌ Please fill all the required fields.
        </div>
      )}

      {/* Success Toast */}
      {showSuccessToast && (
        <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow">
          ✅ User added successfully.
        </div>
      )}
      <h2 className="text-xl font-bold mb-4">Add New Member</h2>
      <form onSubmit={handleSubmit}>
      <label className="block text-sm font-medium text-gray-700">
            Username *
          </label>
        <input
          type="text"
          name="username"
          placeholder="Full Name"
          className="w-full mb-3 px-3 py-2 border rounded"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <label className="block text-sm font-medium text-gray-700">
            Email *
          </label>
        <input
          type="email"
          name="emailid"
          placeholder="example@gmail.com"
          className="w-full mb-3 px-3 py-2 border rounded"
          value={formData.emailid}
          onChange={handleChange}
          required
        />
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
            onClick={handleAddMember}
          >
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMember;
