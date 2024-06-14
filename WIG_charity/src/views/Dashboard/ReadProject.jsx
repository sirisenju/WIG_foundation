import React, { useEffect, useState } from "react";
import axiosInstance from "../../api";
import { useParams } from "react-router-dom"; // Import useParams to access URL parameters

function ProjectDetails() {
  const { projectTitle } = useParams(); // Extract project ID from URL params
  const [project, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axiosInstance.get(
          `api/user/projects/${projectTitle}/`
        );
        setProject(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProject();
  }, [projectTitle]); // Re-run useEffect when projectId changes

  return (
    <div>
      {isLoading && <p>Loading project details...</p>}
      {error && <p>Error: {error.message}</p>}
      {project && (
        <div>
          <h2>{project.title}</h2>
          <p>{project.sub_header}</p>
          <p>{project.content}</p>
          <p>{project.date}</p>
          {/* Render other project details as needed */}
        </div>
      )}
    </div>

    // <div className="w-full p-4 bg-white shadow-md rounded-lg">
    //   <h1>Project details</h1>
    //   <button
    //     onClick={onBack}
    //     className="mb-4 px-4 py-2 bg-blue-500 text-black rounded-md hover:bg-blue-700 focus:outline-none"
    //   >
    //     Back
    //   </button>
    //   <h2 className="text-xl font-semibold mb-4">
    //     Projects for {user.firstName} {user.lastName}
    //   </h2>
    //   <ul>
    //     {projects.map((project) => (
    //       <li
    //         key={project.id}
    //         className="mb-2 p-2 border rounded-md bg-gray-100"
    //       >
    //         <p>
    //           <strong>Title:</strong> {project.title}
    //         </p>
    //         <p>
    //           <strong>Description:</strong> {project.description}
    //         </p>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  );
}

export default ProjectDetails;
