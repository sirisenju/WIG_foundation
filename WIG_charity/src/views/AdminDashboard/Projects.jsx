import React, { useState, useEffect } from "react";
import axiosInstance from "../../api";
import Users from "./Users";
import PostList from "./PostList";

function Projects() {
  const [users, setUsers] = useState({});
  const [projects, setProjects] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("api/admin-summary/");
        setUsers(response.data.users);
        setProjects(response.data.projects);
        console.log(response.data.users);
        console.log(response.data.projects);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchData();
  }, []);


  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const handleBack = () => {
    setSelectedUser(null);
  };

  const userProjects = selectedUser ? projects.filter(project => project.user.email === selectedUser.email) : [];

  return (
    <div className="w-full h-full  sm:min-h-screen p-2 bg-white shadow-md rounded-lg 2xl:max-w-7xl">
      <h2>Projects created.</h2>
      <div className="min-h-screen bg-gray-100">
        {selectedUser ? (
          <PostList
            user={selectedUser}
            projects={userProjects}
            onBack={handleBack}
          />
        ) : (
          <Users users={users} onUserClick={handleUserClick} />
        )}
      </div>
    </div>
  );
}

export default Projects;
