import React from 'react';

const PostList = (props) => {
  const { posts } = props;
  if (!posts.length) {
    return <div className="p-4">No posts available.</div>;
  }

  return (
    <div className="w-3/4 p-4">
      <h2 className="text-xl font-semibold mb-4">Posts</h2>
      {posts.map((post) => (
        <div key={post.id} className="mb-4 p-4 border rounded-md bg-gray-100">
          <h3 className="text-lg font-semibold">{post.topic}</h3>
          <p className="text-gray-700">{post.body}</p>
          <p className="text-gray-500 text-sm">{post.date}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
