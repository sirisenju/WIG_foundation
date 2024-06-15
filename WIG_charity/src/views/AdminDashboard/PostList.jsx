import React, { useState, useEffect } from "react";
import axiosInstance from "../../api";

const PostList = ({ user, projects, onBack }) => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axiosInstance.get("api/admin-summary/");
  //       setData(response.data.projects); // Assuming response.data.projects is the array of projects
  //     } catch (error) {
  //       console.error("Error fetching posts:", error);
  //       // Handle error at component level if needed
  //     }
  //   };

  //   fetchData();
  // }, []);

  // if (!data || data.length === 0) {
  //   return <div className="p-4">No posts available Yet!!!</div>;
  // }

  return (
    <div className="w-full p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">
        Projects for {user.firstName} {user.lastName}
      </h2>
      <ul>
        {projects.length === 0 ? (
          <div className="p-4 text-gray-700">No projects found.</div>
        ) : (
          <ul>
            {projects.map((project) => (
              <li
                key={project.id}
                className="mb-2 p-2 border rounded-md bg-gray-100"
              >
                <p>
                  <strong>Title:</strong> {project.title}
                </p>
                <p>
                  <strong>Description:</strong> {project.description}
                </p>
              </li>
            ))}
          </ul>
        )}
      </ul>
      <button
        onClick={onBack}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none"
      >
        Back
      </button>
    </div>
  );
};

export default PostList;
