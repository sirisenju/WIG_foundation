import React, { useEffect, useState } from 'react';
import axiosInstance from '../../api';
import { useParams } from 'react-router-dom'; // Import useParams to access URL parameters

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
        const response = await axiosInstance.get(`api/user/projects/${projectTitle}/`);
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
  );
}

export default ProjectDetails;
