import React, { useState } from "react";
import axiosInstance from "./../../api";
import 'react-toastify/dist/ReactToastify.css';
import Toasts from "../../components/Toasts";

function Blog() {
  const [title, setTitle] = useState("");
  const [sub_header, setSubheading] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState([]);
  const [post_date, setPostDate] = useState("");
  const [category, setCategory] = useState("");
  const [read_duration, setReadDuration] = useState("");

  const [message, setMessage] = useState("");
  const [type, setType] = useState("");

  const triggerSuccessToast = () => {
    setMessage("Blog Submitted Successfully");
    setType("success");
  };

  const triggerErrorToast = () => {
    setMessage("An Error Occurred, Please Try Again");
    setType("error");
  };


  const categories = [
    "Education",
    "Food",
    "Medical",
    "Home",
  ];

  const handleImageChange = (e) => {
    setImage([...e.target.files]);
  };

  const handleSubmit = (e) => {
    // Handle form submission
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("sub_header", sub_header);
    formData.append("author", author);
    formData.append("content", content);
    formData.append("post_date", post_date);
    formData.append("category", category);
    formData.append("read_duration", read_duration);
    image.forEach((file) => {
      formData.append('image', file);
    });

    try {
      const response = axiosInstance.post('api/admin/create_blog/', formData);
      triggerSuccessToast();
      setTimeout(() => {
        window.location.reload();
      }, 1000);
      
    } catch (error) {
        triggerErrorToast();
    }
  };
  return (
    <div className="w-full min-h-screen p-2 bg-white shadow-md rounded-lg 2xl:max-w-7xl">
      <h2 className="text-2xl font-bold pt-2 pb-4">Create Blog Posts.</h2>
      <div className="">
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
              <label className="block text-gray-700" htmlFor="name">
                Cetegory
              </label>
              <select
                name=""
                id=""
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full mt-2 p-2 border rounded-md outline-none"
                required
              >
                <option value="" disabled>
                  Select a cetegory
                </option>
                {categories.map((name, index) => (
                  <option key={index} value={name}>
                    {name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Upload Image</label>
            <input
              type="file"
              className="w-full mt-2 p-2 border rounded-md"
              onChange={handleImageChange}
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
          <Toasts message={message} type={type} />
        </form>
      </div>
    </div>
  );
}

export default Blog;
