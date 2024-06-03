import React from "react";
import { useState } from "react";
import Users from "./Users";
import PostList from "./PostList";

function Projects() {
  const users = [
    {
      id: 1,
      fname: "John",
      lname: "Doe",
      email: "johndoe@gmail.com",
      role: "cook",
      number: "+234768776652",
      imgUrl: "/assets/faceskinModel.jpg",
    },
    {
      id: 2,
      fname: "Peter",
      lname: "Quill",
      email: "peter@gmail.com",
      role: "cook",
      number: "+234768776652",
      imgUrl: "/assets/faceskinModel.jpg"
    },
    {
      id: 3,
      fname: "Thanos",
      lname: "Festus",
      email: "johndoe@gmail.com",
      role: "cook",
      number: "+234768776652",
      imgUrl: "/assets/faceskinModel.jpg"
    },
  ];

  const posts = [
    {
      id: 1,
      userId: 1,
      topic: "Post 1 by User One",
      body: "Content of post 1 by User One.",
      date: "2023-05-01",
    },
    {
      id: 2,
      userId: 1,
      topic: "Post 2 by User One",
      body: "Content of post 2 by User One.",
      date: "2023-05-02",
    },
    {
      id: 3,
      userId: 2,
      topic: "Post 1 by User Two",
      body: "Content of post 1 by User Two.",
      date: "2023-05-03",
    },
    {
      id: 4,
      userId: 3,
      topic: "Post 1 by User Three",
      body: "Content of post 1 by User Three.",
      date: "2023-05-04",
    },
    {
      id: 5,
      userId: 5,
      topic: "Post 1 by User Three",
      body: "Content of post 1 by User Three.",
      date: "2023-05-04",
    },
  ];

  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const userPosts = selectedUser
    ? posts.filter((post) => post.userId === selectedUser.id)
    : [];

  return (
    <div className="w-full h-full p-2 bg-white shadow-md rounded-lg 2xl:max-w-7xl">
      <h2>Projects created.</h2>
      <div className="flex flex-wrap">
        <div className="flex-grow basis-[200px]">
        <Users items={users} onUserClick={handleUserClick} />
        </div>
        <div className="flex-grow basis-[200px]">
        <PostList posts={userPosts} />
        </div>
      </div>
    </div>
  );
}

export default Projects;
