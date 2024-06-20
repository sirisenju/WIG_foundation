import React, { useState } from "react";
import axiosInstance from './../../api';
import { useNavigate } from 'react-router-dom';

function Blog() {
  const [title, setTitle] = useState("");
  const [sub_header, setSubheading] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState([]);
  const [post_date, setPostDate] = useState("");
  const [category, setCategory] = useState("");
  const [read_duration, setReadDuration] = useState("");
  const navigate = useNavigate();



  const handleSubmit = (e) => {
    // Handle form submission
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('sub_header', sub_header);
    formData.append('author', author);
    formData.append('content', content);
    formData.append('post_date', post_date);
    formData.append('category', category);
    formData.append('read_duration', read_duration);
    formData.append('image', image);

    try {
      const response = axiosInstance.post('api/admin/create_blog/', formData);
      console.log(response)
      setTimeout(() => {
        navigate('/admin');
      }, 3000);
    } catch(error){
      console.error("post failed", error)
    }
  };
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

          <div className="flex w-full gap-4">
          <div className="mb-4 w-full">
            <label className="block text-gray-700">Authors name</label>
            <input
              type="text"
              className="w-full mt-2 p-2 border rounded-md"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </div>

          <div className="mb-4 w-full">
            <label className="block text-gray-700">Category</label>
            <input
              type="text"
              className="w-full mt-2 p-2 border rounded-md"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Upload Image</label>
            <input
              type="file"
              className="w-full mt-2 p-2 border rounded-md"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
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
            <label className="block text-gray-700">Read Duration</label>
            <input
              placeholder="10 minutes"
              type="number"
              className="w-full mt-2 p-2 border rounded-md"
              value={read_duration}
              onChange={(e) => setReadDuration(e.target.value)}
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

export default Blog;
