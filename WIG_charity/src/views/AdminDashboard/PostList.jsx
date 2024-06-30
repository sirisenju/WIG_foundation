import React, { useState, useEffect } from "react";
import axiosInstance from "../../api";
import 'react-toastify/dist/ReactToastify.css';
import Toasts from "../../components/Toasts";

const PostList = ({ user, projects, onBack }) => {
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");

  const triggerApproveToast = () => {
    setMessage("Project Approved");
    setType("success");
  };

  const triggerRejectToast = () => {
    setMessage("Project Rejected");
    setType("success");
  };

  const triggerErrorToast = () => {
    setMessage("An Error Occurred, Please Try Again");
    setType("error");
  };

  useEffect(() => {
    const initialStatus = projects.reduce((acc, project) => {
      acc[project.id] = { status: project.is_approved ? "approved" : "" };
      return acc;
    }, {});
    setProjectStatus(initialStatus);
  }, [projects]);

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

  const handleSubmit = async () => {
    for (const projectId in projectStatus) {
      const { status } = projectStatus[projectId];
      if (status === "approved") {
        await axiosInstance.post(`/api/admin/projects/${projectId}/approve/`);
        triggerApproveToast();
      } else if (status === "rejected") {
        await axiosInstance.delete(`/api/admin/projects/${projectId}/delete/`);
        triggerRejectToast();
      }
    }
    onBack(); // Call the onBack function to navigate back
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
                  <strong>Description:</strong> {project.sub_header}
                </p>
                <p>
                  <strong>Main content:</strong> {project.content}
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
                  <Toasts message={message} type={type} />
                </div>
              </li>
            ))}
          </ul>
        )}
      </ul>
      <button
        onClick={handleSubmit}
        className="mb-4 px-7 py-2 bg-green-500 text-white rounded-md hover:bg-green-700 focus:outline-none"
      >
        Submit
      </button>
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
