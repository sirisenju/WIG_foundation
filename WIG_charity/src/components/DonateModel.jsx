import React from "react";
import { useEffect } from "react";
import { FaTimes, FaUser } from "react-icons/fa";

function DonateModel({ isVisible, onClose }) {
  // useEffect(() => {
  //   if (isVisible) {
  //     document.body.style.overflow = "hidden"; // Prevent scrolling
  //   } else {
  //     document.body.style.overflow = "visible"; // Enable scrolling
  //   }

  //   // Cleanup function to ensure scrolling is enabled when the component unmounts
  //   return () => {
  //     document.body.style.overflow = "visible";
  //   };
  // }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-2 h-full bg-gray-800 bg-opacity-40 flex items-center justify-center text-black">
      <div className="p-2 sm:p-6 rounded shadow-md bg-[#EDF7F5] w-full">
        {/* div for close of model*/}
        <div className="w-full flex justify-end">
          <FaTimes
            onClick={onClose}
            className="hover:cursor-pointer hover:scale-125"
          />
        </div>
        <h2 className="text-xl font-semibold mb-4 border-gray-300 border-b-[2px] pb-1 text-start">
          Your Donations.
        </h2>
        {/*donation text field */}
        <div className="">
          <div className="flex items-center justify-evenly bg-primary_theme max-w-md">
            <span className="w-[10%]">
              <FaUser
                size={26}
                color="white"
                className="ml-[1px] sm:ml-[10px]"
              />
            </span>
            <input
              type="text"
              className=" ml-2 sm:ml-0 pl-2 pr-2 py-2 w-[60%] border focus:outline-none focus:border-blue-500"
              placeholder="Enter your username"
            />
            <p className="w-[30%] text-white">Custom Amount.</p>
          </div>
          {/* various donations */}
          <div className="w-full max-w-md flex flex-wrap gap-4 mt-6">
            {/* using buttons */}
            <button className="px-5 py-2 border-2 border-green-500 hover:bg-green-600 hover:text-white flex-grow">
              $100.00
            </button>
            <button className="px-5 py-2 border-2 border-green-500 hover:bg-green-600 hover:text-white flex-grow">
              $200.00
            </button>
            <button className="px-5 py-2 border-2 border-green-500 hover:bg-green-600 hover:text-white flex-grow">
              $300.00
            </button>
            <button className="px-5 py-2 border-2 border-green-500 hover:bg-green-600 hover:text-white flex-grow">
              $400.00
            </button>
          </div>
        </div>

        {/* Form field! */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4 border-gray-300 border-b-[2px] pb-1 text-start">
            Personal Information
          </h2>
          <div>
            <div className="h-full flex flex-col flex-grow">
              <form action="" className="flex flex-col gap-3">
                <div className="flex gap-2 w-full">
                  <div className="block w-full">
                    <input
                      placeholder="First Name"
                      className="w-full mt-2 py-2 px-2"
                      type="text"
                    />
                  </div>
                  <div className="block w-full">
                    <input
                      placeholder="Last Name"
                      className="w-full mt-2 py-2 px-2"
                      type="text"
                    />
                  </div>
                </div>
                <div className="block w-full">
                  <input
                    placeholder="Your Email"
                    className="w-full mt-2 py-2 px-2"
                    type="text"
                  />
                </div>
                <div className="flex gap-2 w-full">
                  <textarea
                    className="w-full mt-2 py-2 px-2"
                    name="text"
                    rows="3"
                  ></textarea>
                </div>
                <div className="w-full">
                  <button className="w-full py-2 mt-4 mb-4 border-2 border-green-500 hover:bg-green-600 hover:text-white">
                    Send Donations
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonateModel;
