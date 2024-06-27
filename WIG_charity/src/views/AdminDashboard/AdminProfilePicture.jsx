import React from 'react'
import { useState } from "react";
import { FaPlus } from "react-icons/fa";

function AdminProfilePicture() {

    const [image, setImage] = useState(null);

    const handleImageUpload = (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImage(reader.result);
        };
        reader.readAsDataURL(file);
      }
    };


    return (
        <div className="w-full text-center mb-5 mt-5 pt-10">
        <div className="flex flex-col justify-center items-center">
          <div className="relative">
            <div className="w-[150px] h-[150px] rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
              {image ? (
                <img
                  src={image}
                  alt="Profile"
                  className="object-cover w-full h-full"
                />
              ) : (
                <div className="flex flex-col items-center justify-center">
                  <FaPlus className="text-gray-700" size={30} />
                  <p className="text-sm text-gray-500 mt-1">No Profile Pic</p>
                </div>
              )}
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
          </div>
  
          {/* profile */}
          <div>
            <h1 className="pt-4 text-2xl">Amrohore Emuesiri</h1>
            <h3 className="pt-2 pb-2">Communtiy Manager.</h3>
          </div>
        </div>
      </div>
    )
}

export default AdminProfilePicture
