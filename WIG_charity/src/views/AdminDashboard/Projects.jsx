import React, { useState, useEffect } from "react";
import axiosInstance from "../../api";
import Users from "./Users";
import PostList from "./PostList";

function Projects() {
  // const [users, setUsers] = useState({});
  // const [projects, setProjects] = useState({});

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


  const users = [
    { id: 1, firstName: "John", lastName: "Doe", role: "Developer" },
    { id: 2, firstName: "Jane", lastName: "Smith", role: "Designer" },
    { id: 3, firstName: "Bob", lastName: "Johnson", role: "Manager" },
  ];

  // the main content is the message, display it and read

  const projects = [
    {
      id: 1,
      userId: 1,
      title: "Project A",
      description: "Description of Project A",
      maincontent: "content 1"
    },
    {
      id: 2,
      userId: 1,
      title: "Project B",
      description: "Description of Project B",
      maincontent: "content 2"
    },
    {
      id: 3,
      userId: 2,
      title: "Project C",
      description: "Description of Project C",
      maincontent: "content 3"
    },
    {
      id: 4,
      userId: 3,
      title: "Project D",
      description: "Description of Project D",
      maincontent: "content 4"
    },
  ];

  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const handleBack = () => {
    setSelectedUser(null);
  };

  // const userProjects = selectedUser ? projects.filter(project => project.user.email === selectedUser.email) : [];
  const userProjects = selectedUser ? projects.filter(project => project.userId === selectedUser.id) : [];

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
