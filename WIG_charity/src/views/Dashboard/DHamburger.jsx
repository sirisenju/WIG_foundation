import React from "react";
import { Sling as Hamburger } from "hamburger-react";
import { useState } from "react";

function DHamburger({ onChangeScreen }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Hamburger
        toggled={isOpen} 
        toggle={setIsOpen} 
        size={32}
        rounded
        distance="sm"
        color="green"
        />
        {isOpen && (
          <div className="fixed z-10 text-black hamburger-style h-full bg-purple-400 w-[70%] top-0 right-0 p-4">
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
                  <button onClick={() => onChangeScreen("Report")}>
                    Report
                  </button>
                </li>
              </ul>
              <div className="mt-[80%]">
                <p>Any trouble?</p>
                <button className="text-base mt-1 px-7 py-2 rounded-full border-2 border-green-500 hover:bg-green-600 hover:text-white">
                  Contact admin
                </button>
              </div>
            </div>
          </div>
        )}
    </div>
  );
}

export default DHamburger;
