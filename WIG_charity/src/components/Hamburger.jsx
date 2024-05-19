import React from "react";
import { Sling as Hamburger } from 'hamburger-react'
import { useState, useEffect } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { NavLink, Link } from 'react-router-dom';
import { FaAngleDoubleRight } from "react-icons/fa";


const HamburgerMenu = ({propData}) => {

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    } else {
      document.body.style.overflow = 'visible'; // Enable scrolling
    }

    // Cleanup function to ensure scrolling is enabled when the component unmounts
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [isOpen]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  

  return (
    <>
    <OutsideClickHandler
        onOutsideClick={() => {
          setIsOpen(false);
        }}
      >
        <div className="overflow-auto text-white">
          <Hamburger 
            toggled={isOpen} 
            toggle={setIsOpen} 
            size={32}
            rounded
            distance="sm"
            color="white"
            />
            {isOpen && (
              <div className="fixed z-10 hamburger-style h-full bg-primary_theme w-[70%] top-0 right-0 p-4" data-aos="slide-down">
                <div className="w-full flex justify-start pr-4">
                  <FaAngleDoubleRight className="hover:cursor-pointer hover:scale-105" onClick={handleToggle} size={26}/>
                </div>
                <div className="grid place-content-start gap-y-5 pt-10 pb-10">
                  {propData.map((item) => (
                    <NavLink
                    to={item.href}
                    key={item.id}
                    className={({ isActive }) => {
                      return (
                        "hover:text-slate-600 hover:scale-110 text-lg transition ease-in delay-75 border-b-[#d4cfcc] border-b-2" +
                        (isActive ? "text-[#2C2C2C]" : " text-white")
                      );
                    }}
                    >
                      {item.name}
                    </NavLink>
                  ))
                  }
                </div>
                {/* sign up and login buttons */}
                <div className="gap-2 px-2 flex justify-between flex-wrap">
                <Link to={"/login"}>
                  <button className="text-base px-6 py-1 rounded-full border-2 border-green-500 hover:bg-green-600 hover:text-white flex-grow">
                    Login
                  </button>
                </Link>
                <Link to={"/signup"}>
                  <button className="text-base px-6 py-1 rounded-full border-2 border-green-500 hover:bg-green-600 hover:text-white flex-grow">
                    Sign Up
                  </button>
                </Link>
              </div>
              </div>
            )}
        </div>
      </OutsideClickHandler>  
    </>
  );
};

export default HamburgerMenu;
