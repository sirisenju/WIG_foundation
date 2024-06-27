import React from "react";
import { Sling as Hamburger } from "hamburger-react";
import { useState, useEffect } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { useAuth } from "../../AuthContext";
import axiosInstance from "../../api";
import { useNavigate } from "react-router-dom";
import ProfilePictureDisplay from "./ProfilePictureDisplay";

function DHamburger({ onChangeScreen }) {
  const [isOpen, setIsOpen] = useState(false);
  const [userProfile, setUserProfile] = useState({});
  const navigate = useNavigate();
  const { user_logout, isAuthenticated } = useAuth();

  const handleLogout = (e) => {
    e.preventDefault();
    try {
      user_logout();
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      document.body.style.overflow = "visible"; // Enable scrolling
    }

    // Cleanup function to ensure scrolling is enabled when the component unmounts
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isOpen]);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axiosInstance.get("api/user/profile/");
        setUserProfile(response.data);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchUserProfile();
  }, [isAuthenticated]);

  return (
    <div>
      <OutsideClickHandler
        onOutsideClick={() => {
          setIsOpen(false);
        }}
      >
        <Hamburger
          toggled={isOpen}
          toggle={setIsOpen}
          size={32}
          rounded
          distance="sm"
          color="green"
        />
        {isOpen && (
          <div className="fixed z-10 text-black hamburger-style h-full bg-purple-100 w-[70%] top-0 right-0">
            <div className="basis-[250px] flex-grow">
              <ProfilePictureDisplay />
            </div>
            <div className="p-2 flex flex-col justify-between h-auto">
              <ul className="list-none flex flex-col gap-4">
                <li className="h-10 flex items-center px-4 gap-2 text-lg hover:bg-[#EDF7F5] rounded-md">
                  <img className="h-6 w-6" src="./assets/shild.png" alt="" />
                  <button onClick={() => onChangeScreen("Board")}>
                    Dashboard
                  </button>
                </li>
                <li className="h-10 flex items-center px-4 gap-2 text-lg hover:bg-[#EDF7F5] rounded-md">
                  <img className="h-6 w-6" src="./assets/shild.png" alt="" />
                  <button onClick={() => onChangeScreen("Project")}>
                    Project
                  </button>
                </li>
                <li className="h-10 flex items-center px-4 gap-2 text-lg hover:bg-[#EDF7F5] rounded-md">
                  <img className="h-6 w-6" src="./assets/shild.png" alt="" />
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </ul>
              <div className="mt-[80px] mx-[20px]">
                <p>Any trouble?</p>
                <button className="text-[13px] sm:text-base mt-1 px-7 py-2 rounded-full border-2 border-green-500 hover:bg-green-600 hover:text-white">
                  Contact admin
                </button>
              </div>
            </div>
          </div>
        )}
      </OutsideClickHandler>
    </div>
  );
}

export default DHamburger;
