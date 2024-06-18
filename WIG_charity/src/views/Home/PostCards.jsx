import React from "react";
import { useState } from "react";

function PostCards({ title, subHeading, mainContent, image, milestone }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const previewContent = mainContent.slice(0, 100); // Adjust the slice value as needed

  return (
    <div className="h-max w-full sm:basis-[280px] shadow-lg drop-shadow-xl mb-4 flex-grow ">
      <div className="h-[50%] w-full">
        <img
          className="w-full h-fit object-center object-cover"
          src={image}
          alt=""
        />
      </div>
      <div className="w-full h-max p-3">
        <h3 className="text-lg pb-3">{title}</h3>
        <p className=" pb-3">{subHeading}</p>
        <p className=" pb-3">
          {isExpanded ? mainContent : `${previewContent}...`}
        </p>
        <div className="">
          <div className="flex justify-between pt-2">
            <p>Raised:{milestone}</p> <p>Goal:$600</p>
          </div>
          <div className="h-3 w-full bg-green-400"></div>
        </div>
        <button
          onClick={toggleExpand}
          className="mt-2 text-white rounded-md focus:outline-none bg-green-600 px-5 py-2"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      </div>
    </div>
  );
}

export default PostCards;
