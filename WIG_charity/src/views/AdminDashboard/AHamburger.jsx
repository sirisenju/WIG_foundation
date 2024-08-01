import React from "react";
import Hamburger from "hamburger-react";
import OutsideClickHandler from "react-outside-click-handler";
import { useState } from "react";
import { useEffect } from "react";
import AdminProfilePicture from "./AdminProfilePicture";
import { useAuth } from "../../AuthContext";
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import Toasts from "../../components/Toasts";

function AHamburger({ onChangeScreen }) {
  const [isOpen, setIsOpen] = useState(false);
  const [userProfile, setUserProfile] = useState({});
  const navigate = useNavigate();
  const { user_logout } = useAuth();
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");

  const handleLogout = (e) => {
    e.preventDefault();
    try {
      user_logout();
      triggerSuccessToast();
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      triggerErrorToast();
      console.error("Logout failed", error);
    }
  };

  const triggerSuccessToast = () => {
    setMessage("Logout Successful");
    setType("success");
  };

  const triggerErrorToast = () => {
    setMessage("An Error Occurred, Please Try Again");
    setType("error");
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
          color="#219D80"
        />
        {isOpen && (
          <div className="fixed z-10 text-white hamburger-style h-full bg-footer_theme w-[70%] top-0 right-0">
            <div className="basis-[250px] flex-grow">
              <div className="w-full text-center mb-2">
                {/* for the profile picture */}
                <AdminProfilePicture/>
              </div>
            </div>
            <div className="p-2 flex flex-col justify-between h-auto">
              <ul className="list-none flex flex-col gap-4">
                <li className="h-10 flex items-center px-4 gap-2 text-lg hover:bg-primary_theme rounded-md">
                  <img className="h-6 w-6" src="./assets/shild.png" alt="" />
                  <button onClick={() => onChangeScreen("Board")}>
                    Dashboard
                  </button>
                </li>
                <li className="h-10 flex items-center px-4 gap-2 text-lg hover:bg-primary_theme rounded-md">
                  <img className="h-6 w-6" src="./assets/shild.png" alt="" />
                  <button onClick={() => onChangeScreen("Users")}>Users</button>
                </li>
                <li className="h-10 flex items-center px-4 gap-2 text-lg hover:bg-primary_theme rounded-md">
                  <img className="h-6 w-6" src="./assets/shild.png" alt="" />
                  <button onClick={() => onChangeScreen("Projects")}>
                    Projects
                  </button>
                </li>
                <li className="h-10 flex items-center px-4 gap-2 text-lg hover:bg-primary_theme rounded-md">
                  <img className="h-6 w-6" src="./assets/shild.png" alt="" />
                  <button onClick={() => onChangeScreen("Blog")}>Blog</button>
                </li>
                <li className="h-10 flex items-center px-4 gap-2 text-lg hover:bg-primary_theme rounded-md">
                  <img className="h-6 w-6" src="./assets/shild.png" alt="" />
                  <button onClick={handleLogout}>Logout</button>
                  <Toasts message={message} type={type} />
                </li>
              </ul>
            </div>
          </div>
        )}
      </OutsideClickHandler>
    </div>
  );
}

export default AHamburger;
