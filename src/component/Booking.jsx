export default function BookForm() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-7xl mx-auto mt-6 ml-75">
      <h2 className="text-2xl font-semibold mb-4">Book Information</h2>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Book Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Book Title *
          </label>
          <input
            type="text"
            placeholder="Book name here"
            className="mt-1 block w-full border rounded-md p-2"
          />
        </div>

        {/* Author */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Author(s) *
          </label>
          <select className="mt-1 block w-full border rounded-md p-2">
            <option>Select from list</option>
          </select>
        </div>

        {/* Genre/Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Genre/Category *
          </label>
          <select className="mt-1 block w-full border rounded-md p-2">
            <option>Choose a Category</option>
          </select>
        </div>

        {/* Language */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Language *
          </label>
          <select className="mt-1 block w-full border rounded-md p-2">
            <option>Select Language</option>
          </select>
        </div>

        {/* Total Copies */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Total Copies *
          </label>
          <input
            type="number"
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
                <input type="radio" name="status" value={status} />
                <span>{status}</span>
              </label>
            ))}
          </div>
        </div>

        {/* File Upload */}
        <div>
          
          <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">
            File Attachment
          </label>
            <div className="relative">
              <input
                type="file"
                id="fileUpload"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div className="bg-white border border-gray-300 rounded px-4 py-2 w-full text-gray-500">
                  Upload File
              </div>
            </div>
          </div>
        </div>

        {/* Book Published Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Book Published Date
          </label>
          <input
            type="date"
            className="mt-1 block w-full border rounded-md p-2"
          />
        </div>
      </form>

      {/* Buttons */}
      <div className="mt-6 flex justify-end space-x-4">
        <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
          Cancel
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Add Book
        </button>
      </div>
    </div>
  );
}
