import React, { useState, useEffect } from 'react';
import axiosInstance from '../../api';

const PostList = (props) => {
  
  const [data, setData] = useState([]);

  useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await axiosInstance.get('api/admin-summary/');
              setData(response.data.projects); // Assuming response.data.projects is the array of projects
          } catch (error) {
              console.error('Error fetching posts:', error);
              // Handle error at component level if needed
          }
      };

      fetchData();
  }, []);

  if (!data || data.length === 0) {
    return <div className="p-4">No posts available.</div>;
  }

  return (
    <div className="w-3/4 p-4">
      <h2 className="text-xl font-semibold mb-4">Posts</h2>
      {data.map((project, index) => (
        <div key={project.id} className="mb-4 p-4 border rounded-md bg-gray-100">
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <p className="text-gray-700">{project.sub_header}</p>
          <p className="text-gray-500 text-sm">{project.date}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
