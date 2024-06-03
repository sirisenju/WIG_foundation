import React from "react";

function Blog() {
  return (
    <div className="w-full min-h-screen p-2 bg-white shadow-md rounded-lg 2xl:max-w-7xl">
      <h2 className="text-2xl font-bold pt-2 pb-4">Create Blog Posts.</h2>
      <div className="">
        <form>
          {/* div for title and subheading */}
          <div className="flex w-full gap-4">
            <div className="mb-4 w-full">
              <label className="block text-gray-700">Title</label>
              <input
                type="text"
                className="w-full mt-2 p-2 border rounded-md"
                required
              />
            </div>

            <div className="mb-4 w-full">
              <label className="block text-gray-700">Subheading</label>
              <input
                type="text"
                className="w-full mt-2 p-2 border rounded-md"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Main Content</label>
            <textarea
              className="w-full mt-2 p-2 border rounded-md"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Authors name</label>
            <input
              type="text"
              className="w-full mt-2 p-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Upload Images</label>
            <input
              type="file"
              multiple
              className="w-full mt-2 p-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Post Date</label>
            <input
              type="date"
              className="w-full mt-2 p-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Read Duration</label>
            <input
              placeholder="10 minutes"
              type="number"
              className="w-full mt-2 p-2 border rounded-md"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Blog;
