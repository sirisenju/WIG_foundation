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

  const [projectStatus, setProjectStatus] = useState(
    projects.reduce((acc, project) => {
      acc[project.id] = { status: "" }; // status can be 'approved' or 'rejected'
      return acc;
    }, {})
  );

  const handleRadioChange = (projectId, status) => {
    setProjectStatus((prevStatus) => ({
      ...prevStatus,
      [projectId]: { status },
    }));
  };

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
                {/* display contents */}
                <p>
                  <strong>Title:</strong> {project.title}
                </p>
                <p>
                  <strong>Description:</strong> {project.description}
                </p>
                <p>
                  <strong>Main content:</strong> {project.maincontent}
                </p>

                {/* checkbox divs */}
                <div className="flex gap-4 mt-2">
                  <div className="flex flex-col gap-2 justify-center items-center">
                    <p className="text-green-400 text-lg">Approved</p>
                    <input
                      className="form-radio text-green-400"
                      type="radio"
                      name={`status-${project.id}`}
                      checked={projectStatus[project.id].status === "approved"}
                      onChange={() => handleRadioChange(project.id, "approved")}
                    />
                  </div>

                  <div className="flex flex-col gap-2 justify-center items-center">
                    <p className=" text-red-600 text-lg">Rejected</p>
                    <input
                      type="radio"
                      className="form-radio text-red-500"
                      name={`status-${project.id}`}
                      checked={projectStatus[project.id].status === "rejected"}
                      onChange={() => handleRadioChange(project.id, "rejected")}
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </ul>
      <button
        onClick={onBack}
        className="mb-4 px-7 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none"
      >
        Back
      </button>
    </div>
  );
};

export default PostList;
