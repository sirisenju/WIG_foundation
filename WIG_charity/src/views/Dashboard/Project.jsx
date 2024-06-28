import React, { useState } from "react";
import axiosInstance from './../../api';

function Project() {
  const [title, setTitle] = useState("");
  const [sub_header, setSubheading] = useState("");
  const [volunteer, setVolunteer] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState([]);
  const [post_date, setPostDate] = useState("");
  const [post_time, setPostTime] = useState("");

  const handleImageChange = (e) => {
    setImage([...e.target.files]);
  };

  const handleSubmit = (e) => {
    // Handle form submission
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('sub_header', sub_header);
    formData.append('volunteer', volunteer);
    formData.append('content', content);
    formData.append('post_date', post_date);
    formData.append('post_time', post_time);
    image.forEach((file) => {
      formData.append('image', file);
    });
    try {
      const response = axiosInstance.post('api/user/create_project/', formData);
      console.log(response)
      window.location.reload();
   
    } catch(error){
      console.error("post failed", error)
    }
  };

  return (
    <div className="col-span-3 p-2 bg-white shadow-md rounded-lg h-full">
      <div className="max-w-3xl mx-auto p-4">
        <h2 className="text-2xl font-semibold mb-4">
          Upload Images and Content
        </h2>
        <form onSubmit={handleSubmit}>
            {/* div for title and subheading */}
          <div className="flex w-full gap-4">
            <div className="mb-4 w-full">
              <label className="block text-gray-700">Title</label>
              <input
                type="text"
                className="w-full mt-2 p-2 border rounded-md"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div className="mb-4 w-full">
              <label className="block text-gray-700">Subheading</label>
              <input
                type="text"
                className="w-full mt-2 p-2 border rounded-md"
                value={sub_header}
                onChange={(e) => setSubheading(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Main Content</label>
            <textarea
              className="w-full mt-2 p-2 border rounded-md"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Volunteer names</label>
            <input
              type="text"
              className="w-full mt-2 p-2 border rounded-md"
              value={volunteer}
              onChange={(e) => setVolunteer(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Upload Images</label>
            <input
              type="file"
              className="w-full mt-2 p-2 border rounded-md"
              onChange={handleImageChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Post Date</label>
            <input
              type="date"
              className="w-full mt-2 p-2 border rounded-md"
              value={post_date}
              onChange={(e) => setPostDate(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Post Time</label>
            <input
              type="time"
              className="w-full mt-2 p-2 border rounded-md"
              value={post_time}
              onChange={(e) => setPostTime(e.target.value)}
              required
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

export default Project;
