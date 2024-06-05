import React, { useState, useEffect } from 'react';
import Board from "./Board";
import Project from "./Project";
import Reports from "./Reports";
import DHamburger from "./DHamburger";
import axiosInstance from '../../api';
import { useAuth } from '../../AuthContext';
import { useNavigate } from 'react-router-dom';


function Dashboard() {
  const [activeComponent, setActiveComponent] = useState("Board");
  const [userProfile, setUserProfile] = useState({})

  const { user_logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();


  const handleLogout = (e) => {
    e.preventDefault();
    try {
      user_logout();
      setTimeout(() => {
        navigate('/');
      }, 3000);
    } catch (error) {
      console.error('Logout failed', error);
    }

  };

  useEffect(() => {
      const fetchUserProfile = async () => {
        try {
          const response = await axiosInstance.get('api/user/profile/');
          setUserProfile(response.data);
        } catch (error) {
          console.error('Error fetching user profile:', error);
        }
      };

      fetchUserProfile();

      
  }, [isAuthenticated]);

  const changeScreen = (screenName) => {
    switch (screenName) {
      case "Board":
        setActiveComponent("Board");
      break;
      case "Project":
        setActiveComponent("Project");
      break;
      default:
          setActiveComponent("Board");
        break;
    }
  }

  return (
    <section className="w-full h-full">
      <div className="block md:hidden 2xl:max-w-7xl">
        <DHamburger onChangeScreen={changeScreen}/>
      </div>
      <div className=" min-h-screen flex flex-row p-2 gap-4 flex-wrap">
        {/* left dashboard */}
        <div className="sm:basis-[100px] lg:basis-[200px] rounded-lg bg-white shadow-md flex-grow hidden md:block 2xl:max-w-7xl">
          <div className="p-2 flex flex-col justify-between h-auto pt-28">
            <ul className="list-none flex flex-col gap-4">
              <li className="h-10 flex items-center px-4 gap-2 text-lg hover:bg-[#EDF7F5] rounded-md">
                <img className="h-6 w-6" src="./assets/shild.png" alt="" />
                <button onClick={() => setActiveComponent("Board")}>
                  Dashboard
                </button>
              </li>
              <li className="h-10 flex items-center px-4 gap-2 text-lg hover:bg-[#EDF7F5] rounded-md">
                <img className="h-6 w-6" src="./assets/shild.png" alt="" />
                <button onClick={() => setActiveComponent("Project")}>
                  Project
                </button>
              </li>
              <li className="h-10 flex items-center px-4 gap-2 text-lg hover:bg-[#EDF7F5] rounded-md">
                <img className="h-6 w-6" src="./assets/shild.png" alt="" />
                <button onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </ul>
            <div className="mt-[120px]">
              <p>Any trouble?</p>
              <button className="text-base mt-1 px-7 py-2 rounded-full border-2 border-green-500 hover:bg-green-600 hover:text-white">
                Contact admin
              </button>
            </div>
          </div>
        </div>
        
        {/* render component */}
        <div className="basis-[60%] flex-grow 2xl:max-w-7xl">
          {activeComponent === "Board" && <Board/>}
          {activeComponent === "Project" && <Project/>}
        </div>

        {/* right column(last) */}
        <div className="bg-white rounded-lg shadow-md sm:basis-[100px] lg:basis-[200px] flex-grow hidden 2xl:block 2xl:max-w-7xl">
          <div className="w-full text-center mb-5 mt-5  pt-28">
            <div className="w-full h-full">
              <img
                className="w-[100px] h-[100px] rounded-full mx-auto"
                src= {userProfile.profile_pic}
                alt=""
              />
            </div>
            <h1 className="pt-4 text-2xl">{userProfile.first_name} {userProfile.last_name}</h1>
            <h3 className="pt-2 pb-2">{userProfile.role}</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
