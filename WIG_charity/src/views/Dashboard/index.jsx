import React, { useState, useEffect } from "react";
import Board from "./Board";
import Project from "./Project";
import DHamburger from "./DHamburger";
import axiosInstance from "../../api";
import { useAuth } from "../../AuthContext";
import { useNavigate } from "react-router-dom";
import SideBar from "./SideBar";

function Dashboard() {
  const [activeComponent, setActiveComponent] = useState("Board");
  const [userProfile, setUserProfile] = useState({});

  const { user_logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    { id: 1, title: "Project 1", description: "Description of Project 1" },
    { id: 2, title: "Project 2", description: "Description of Project 2" },
    { id: 3, title: "Project 3", description: "Description of Project 3" },
  ];

  const handleLinkClick = (link) => {
    setSelectedLink(link);
    setSelectedProject(null);
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setActiveComponent("ProjectDetails");
  };

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    try {
      user_logout();
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axiosInstance.get("api/user/profile/");
        setUserProfile(response.data);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchUserProfile();
  }, [isAuthenticated]);

  const changeScreen = (screenName) => {
    switch (screenName) {
      case "Board":
        setActiveComponent("Board");
        break;
      case "Project":
        setActiveComponent("Project");
        break;
      case "ProjectDetails":
        setActiveComponent("ProjectDetails");
        break;
      default:
        setActiveComponent("Board");
        break;
    }
  };

  return (
    <section className="w-full h-full">
      <div className="block md:hidden 2xl:max-w-7xl">
        <DHamburger onChangeScreen={changeScreen} />
      </div>
      <div className=" min-h-screen flex flex-row p-2 gap-4 flex-wrap">
        {/* left dashboard */}
        <SideBar onLinkClick={changeScreen} />

        {/* render component */}
        <div className="basis-[60%] bg-white shadow-md rounded-lg flex-grow 2xl:max-w-7xl">
          {activeComponent === "Board" && (
            <Board projects={projects} onProjectClick={handleProjectClick} />
          )}
          {activeComponent === "ProjectDetails" && selectedProject && (
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-4">
                {selectedProject.title}
              </h2>
              <p>{selectedProject.description}</p>
              <button
                onClick={() => setActiveComponent("Board")}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Back to Board
              </button>
            </div>
          )}
          {activeComponent === "Project" && <Project />}
        </div>

        {/* right column(last) */}
        <div className="bg-white rounded-lg shadow-md sm:basis-[100px] lg:basis-[200px] flex-grow hidden 2xl:block 2xl:max-w-7xl">
          <div className="w-full text-center mb-5 mt-5  pt-28">
            <div className="w-full h-full">
              <img
                className="w-[100px] h-[100px] rounded-full mx-auto"
                src={userProfile.profile_pic}
                alt=""
              />
            </div>
            <h1 className="pt-4 text-2xl">
              {userProfile.first_name} {userProfile.last_name}
            </h1>
            <h3 className="pt-2 pb-2">{userProfile.role}</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
