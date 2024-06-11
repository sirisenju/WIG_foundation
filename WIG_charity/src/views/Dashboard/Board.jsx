import React, { useState, useEffect } from "react";
import axiosInstance from "../../api";
import { useAuth } from "../../AuthContext";
import { Link } from "react-router-dom";

function Board({ projects, onProjectClick }) {
  const [userProfile, setUserProfile] = useState({});
  // const [projects, setProjects] = useState([]);
  // const { isAuthenticated } = useAuth();
  // useEffect(() => {
  //   const fetchUserProfile = async () => {
  //     try {
  //       const response = await axiosInstance.get("api/user/profile/"); // Adjust the endpoint URL as per your project setup
  //       setUserProfile(response.data);
  //       console.log(response.data);
  //     } catch (error) {
  //       console.error("Error fetching user profile:", error);
  //     }
  //   };

  //   const fetchProjects = async () => {
  //     try {
  //       const response = await axiosInstance.get("api/user/projects/");
  //       setProjects(response.data);
  //       console.log(response.data);
  //     } catch (error) {
  //       console.error("Error fetching projects:", error);
  //     }
  //   };

  //   fetchProjects();
  //   fetchUserProfile();
  // }, [isAuthenticated]);

  return (
    <div className="min-h-screen col-span-3 p-2">
      <h1 className="text-center text-4xl font-bold">User Dashboard</h1>
      <h2 className="text-3xl pt-2 pb-2">
        Hello, {userProfile.first_name} {userProfile.last_name}.
      </h2>
      <div className="h-[320px] w-full">
        <img
          className="h-full w-full object-cover object-center rounded-xl"
          src="./assets/peopleIllu.jpg"
          alt=""
        />
      </div>
      <div className="mt-4 block md:flex p-2 gap-2">
        {/* project div */}
        <div className="w-full md:w-[70%]">
          <p className="text-2xl pb-1">Recent Project:</p>
          <p>Projects</p>
          <ul>
            {projects.map((project) => (
              <li key={project.id} className="mb-2">
                <button
                  onClick={() => onProjectClick(project)}
                  className="w-full text-left p-2 bg-gray-200 hover:bg-gray-300 rounded-md"
                >
                  {project.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-[30%] h-auto p-2 mb-2 mt-2 rounded-lg">
          <p className="text-2xl pb-1">Filter by:</p>
          <button className="text-base mt-2 mr-2 px-6 py-1 rounded-full border-2 border-green-500 hover:bg-green-600 hover:text-white">
            Recent Post
          </button>
          <button className="text-base mt-2 px-6 py-1 rounded-full border-2 border-green-500 hover:bg-green-600 hover:text-white">
            Add Project
          </button>
        </div>
      </div>
    </div>
  );
}

export default Board;
