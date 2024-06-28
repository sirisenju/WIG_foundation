import React, { useState, useEffect } from "react";
import axiosInstance from "../../api";
import { FaPlus } from "react-icons/fa";

function ProfilePictureDisplay() {
  const [image, setImage] = useState(null);
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axiosInstance.get("api/user/profile/");
        setUserProfile(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };
    fetchUserProfile();
  }, []);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("profile_pic", file);

      try {
        const response = await axiosInstance.post("api/user/profile/upload/", formData);
        setUserProfile(response.data);
        console.log("Image uploaded successfully:", response.data);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  return (
    <div className="w-full text-center mb-5 mt-5 pt-10">
      <div className="flex flex-col justify-center items-center">
        <div className="relative">
          <div className="w-[150px] h-[150px] rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
            {userProfile.profile_pic ? (
              <img
                src={userProfile.profile_pic}
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
          <h1 className="pt-4 text-2xl">{userProfile.first_name} {userProfile.last_name}</h1>
          <h3 className="pt-2 pb-2">{userProfile.role}</h3>
        </div>
      </div>
    </div>
  );
}

export default ProfilePictureDisplay;
