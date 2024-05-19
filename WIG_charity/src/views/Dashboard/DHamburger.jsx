import React from "react";
import { Sling as Hamburger } from "hamburger-react";
import { useState, useEffect } from "react";
import OutsideClickHandler from "react-outside-click-handler";

function DHamburger({ onChangeScreen }) {
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
            <div className="w-full text-center mt-8 mb-5">
              <div className="w-full h-full">
                <img
                  className="w-[100px] h-[100px] rounded-full mx-auto"
                  src="./assets/girlHolder.jpg"
                  alt=""
                />
              </div>
              <h1 className="pt-4 text-2xl">Adolf Hitler</h1>
              <h3 className="pt-2 pb-2">user status</h3>
            </div>
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
                <button onClick={() => onChangeScreen("Report")}>Report</button>
              </li>

              <li className="h-10 flex items-center px-4 gap-2 text-lg hover:bg-[#EDF7F5] rounded-md">
                <img className="h-6 w-6" src="./assets/shild.png" alt="" />
                <button onClick={() => onChangeScreen("Project")}>
                  Project
                </button>
              </li>
              <li className="h-10 flex items-center px-4 gap-2 text-lg hover:bg-[#EDF7F5] rounded-md">
                <img className="h-6 w-6" src="./assets/shild.png" alt="" />
                <button onClick={() => onChangeScreen("Report")}>Report</button>
              </li>


            </ul>
            <div className="mt-[120px] mx-[20px]">
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
