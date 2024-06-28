import React from "react";
import { useNavigate } from "react-router-dom";

function PostCards({ post }) {
  const navigate = useNavigate();

  const navigateToProject = () => {
    navigate("/displayProject", { state: { post } });
  };

  const previewContent = post.content.slice(0, 100); // Adjust the slice value as needed

  return (
    <div className="h-max w-full sm:basis-[270px] mx-auto shadow-lg drop-shadow-xl mb-4 flex-grow">
      <div className="h-[50%] w-full">
        <img
          className="w-full h-fit object-center object-cover"
          src={post.image}
          alt=""
        />
      </div>
      <div className="w-full h-max p-3">
        <h3 className="text-lg pb-3">{post.title}</h3>
        <p className="pb-3">{post.subHeading}</p>
        <p className="pb-3">{previewContent}...</p>
        <div className="">
          <div className="flex justify-between pt-2">
            <p>Raised:{post.milestone}</p> <p>Goal:$600</p>
          </div>
          <div className="h-3 w-full bg-green-400"></div>
        </div>
        <button
          onClick={navigateToProject}
          className="mt-2 text-white rounded-md focus:outline-none bg-green-600 px-5 py-2"
        >
          Read More
        </button>
      </div>
    </div>
  );
}

export default PostCards;
