import React, { useState, useEffect } from 'react';
import axiosInstance from '../../api';
import Users from "./Users";
import PostList from "./PostList";

function Projects() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axiosInstance.get('api/admin-summary/');
            setData(response.data);
            console.log(response.data)
        } catch (error) {
          console.error('Error fetching users:', error);
        }
    };

    fetchData();
}, []);


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
