import React, { useState, useEffect } from "react";
import axiosInstance from "../../api";
import { useAuth } from "../../AuthContext";
import { Link } from "react-router-dom";

function Board({ onProjectClick }) {
  const [userProfile, setUserProfile] = useState({});
  const [projects, setProjects] = useState([]);
  const { isAuthenticated } = useAuth();
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axiosInstance.get("api/user/profile/");
        setUserProfile(response.data);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    const fetchProjects = async () => {
      try {
        const response = await axiosInstance.get("api/user/projects/");
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
    fetchUserProfile();
  }, [isAuthenticated]);

  return (
    <div className="min-h-screen col-span-3 p-2">
      {/* john doe div */}
      <div className="w-full bg-white flex flex-wrap justify-between items-center p-3 shadow-lg rounded-md">
        <div className="hover:text-green-700 flex-grow basis-[200px]">
          <h2 className="text-3xl pt-2 pb-1">Hello, {userProfile.first_name} {userProfile.last_name}!</h2>
          <p className="text-xl">Lets get creative, start writing.</p>
        </div>

        <div className="flex-grow md:flex-shrink w-52 h-52">
          <img
            className="w-full h-full object-contain object-center"
            src="./assets/dash-writing.jpg"
            alt=""
          />
        </div>
      </div>

      {/* stats div */}
      <div className="w-full mt-2 flex flex-wrap gap-2">
        <div className="hover:bg-[#EDF7F5] flex-grow basis-[200px] p-4 shadow-lg rounded-md">
          <div className="text-center p-2">
            <h2 className="text-2xl">Number of projects made:  {projects.length}</h2>
            <h3 className="font-semibold text-3xl">56</h3>
          </div>
        </div>
        <div className="hover:bg-[#EDF7F5] flex-grow basis-[200px] p-4 shadow-lg rounded-md">
          <div className="text-center p-2">
            <h2 className="text-2xl">Role:</h2>
            <h3 className="font-semibold text-3xl">{userProfile.role}</h3>
          </div>
        </div>
      </div>

      {/* project div */}
      <div className="mt-4 block md:flex p-2 gap-2 h-full">
        <div className="w-full md:w-[70%] overflow-auto">
          <p className="text-2xl pb-1">Project:</p>
          <p>List of projects</p>
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
      </div>
    </div>
  );
}

export default Board;
