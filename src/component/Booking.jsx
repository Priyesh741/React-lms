import React, { useState } from "react";

const BookForm = () => {
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);

  /// Initial form state
  const initialFormState = {
    title: "",
    author: "",
    genre: "",
    language: "",
    copies: "",
    status: "",
    date: "",
    file: null,
  };

  // Component state
  const [formData, setFormData] = useState(initialFormState);

  // Cancel/reset handler
  const handleCancel = () => {
    setFormData(initialFormState);
  };

  const handleAddBook = () => {
    const { title, author, genre, language, copies, status, date, file } =
      formData;

    if (
      !title ||
      !author ||
      !genre ||
      !language ||
      !copies ||
      !status ||
      !date ||
      !file
    ) {
      setShowErrorToast(true);
      setTimeout(() => setShowErrorToast(false), 3000);
      return;
    }

    // Assume form submission logic here
    console.log("Book added");
    setShowSuccessToast(true);
    setTimeout(() => setShowSuccessToast(false), 3000);
    handleCancel();
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  return (
    <div className="relative bg-white p-4 rounded-md shadow-lg max-w-7xl mx-auto mt-2">
      {/* Toast */}
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

      <h2 className="text-2xl font-semibold mb-4">Book Information</h2>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Book Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Book Title *
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Book name here"
            className="mt-1 block w-full border rounded-md p-2"
          />
        </div>

        {/* Author */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Author(s) *
          </label>
          <select
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="mt-1 block w-full border rounded-md p-2"
          >
            <option value="">Select from list</option>
            <option value="Author A">Author A</option>
            <option value="Author B">Author B</option>
          </select>
        </div>

        {/* Genre */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Genre/Category *
          </label>
          <select
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            className="mt-1 block w-full border rounded-md p-2"
          >
            <option value="">Choose a Category</option>
            <option value="Fiction">Fiction</option>
            <option value="Nonfiction">Nonfiction</option>
          </select>
        </div>

        {/* Language */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Language *
          </label>
          <select
            name="language"
            value={formData.language}
            onChange={handleChange}
            className="mt-1 block w-full border rounded-md p-2"
          >
            <option value="">Select Language</option>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
          </select>
        </div>

        {/* Total Copies */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Total Copies *
          </label>
          <input
            type="number"
            name="copies"
            value={formData.copies}
            onChange={handleChange}
            placeholder="Enter no of Copies"
            className="mt-1 block w-full border rounded-md p-2"
          />
        </div>

        {/* Status */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Status *
          </label>
          <div className="mt-1 flex space-x-4">
            {["Available", "Reserved", "Out of Stock"].map((status) => (
              <label key={status} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="status"
                  value={status}
                  checked={formData.status === status}
                  onChange={handleChange}
                />
                <span>{status}</span>
              </label>
            ))}
          </div>
        </div>

        {/* File Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            File Attachment
          </label>
          <div className="relative mt-1">
            <input
              type="file"
              name="file"
              onChange={handleChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <div className="bg-white border border-gray-300 rounded px-4 py-2 w-full text-gray-500">
              {formData.file ? formData.file.name : "Upload File"}
            </div>
          </div>
        </div>

        {/* Published Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Book Published Date
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="mt-1 block w-full border rounded-md p-2"
          />
        </div>
      </form>

      {/* Buttons */}
      <div className="mt-6 flex justify-end space-x-4">
        <button
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          onClick={handleCancel}
          type="button"
        >
          Cancel
        </button>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={handleAddBook}
          type="button"
        >
          Add Book
        </button>
      </div>
    </div>
  );
};

export default BookForm;
