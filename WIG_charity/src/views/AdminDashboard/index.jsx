import React from "react";
import { useState } from "react";
import Dashboard from "./Dashboard";
import Users from "./Users";
import Projects from "./Projects";
import Blog from "./Blog";
import AHamburger from "./AHamburger";

function Admin() {
    const [activeComponent, setActiveComponent] = useState("Dashboard");

    const users = [
      {
          id: 1,
          fname: "John",
          lname: "Doe",
          email: "johndoe@gmail.com",
          role: "cook",
          number: "+234768776652"
      },
      {
          id: 2,
          fname: "Peter",
          lname: "Quill",
          email: "peter@gmail.com",
          role: "cook",
          number: "+234768776652"
      },
      {
          id: 3,
          fname: "Thanos",
          lname: "Festus",
          email: "johndoe@gmail.com",
          role: "cook",
          number: "+234768776652"
      }
    ];

    const changeScreen = (screenName) => {
        switch (screenName) {
          case "Dashboard":
            setActiveComponent("Dashboard");
          break;
          case "Users":
            setActiveComponent("Users");
          break;
          case "Projects":
            setActiveComponent("Projects");
          break;
          case "Blog":
            setActiveComponent("Blog");
          break;
          default:
              setActiveComponent("Dashboard");
            break;
        }
      }


  return (
    <section className="w-full h-full">
      <div className=" block md:hidden 2xl:max-w-7xl">
        <AHamburger onChangeScreen={changeScreen}/>
      </div>
      <div className="h-full flex flex-row p-2 gap-4 flex-wrap">
        {/* left dashboard */}
        <div className="sm:basis-[100px] lg:basis-[200px] rounded-lg bg-white shadow-md flex-grow hidden md:block 2xl:max-w-7xl">
          <div className="p-2 flex flex-col justify-between h-auto pt-28">
            <ul className="list-none flex flex-col gap-4">
              <li className="h-10 flex items-center px-4 gap-2 text-lg hover:bg-[#EDF7F5] rounded-md">
                <img className="h-6 w-6" src="./assets/shild.png" alt="" />
                <button onClick={() => setActiveComponent("Dashboard")}>
                  Dashboard
                </button>
              </li>
              <li className="h-10 flex items-center px-4 gap-2 text-lg hover:bg-[#EDF7F5] rounded-md">
                <img className="h-6 w-6" src="./assets/shild.png" alt="" />
                <button onClick={() => setActiveComponent("Users")}>
                  Users
                </button>
              </li>
              <li className="h-10 flex items-center px-4 gap-2 text-lg hover:bg-[#EDF7F5] rounded-md">
                <img className="h-6 w-6" src="./assets/shild.png" alt="" />
                <button onClick={() => setActiveComponent("Projects")}>
                  Projects
                </button>
              </li>
              <li className="h-10 flex items-center px-4 gap-2 text-lg hover:bg-[#EDF7F5] rounded-md">
                <img className="h-6 w-6" src="./assets/shild.png" alt="" />
                <button onClick={() => setActiveComponent("Blog")}>
                  Blog
                </button>
              </li>
              <li className="h-10 flex items-center px-4 gap-2 text-lg hover:bg-[#EDF7F5] rounded-md">
                <img className="h-6 w-6" src="./assets/shild.png" alt="" />
                <button>Logout</button>
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
          {activeComponent === "Dashboard" && <Dashboard/>}
          {activeComponent === "Users" && <Users items={users}/>}
          {activeComponent === "Projects" && <Projects/>}
          {activeComponent === "Blog" && <Blog/>}
        </div>
        {/* right column(last) */}
        <div className="bg-white rounded-lg shadow-md sm:basis-[100px] lg:basis-[200px] flex-grow hidden 2xl:block 2xl:max-w-7xl">
          <div className="w-full text-center mb-5 mt-5  pt-28">
            <div className="w-full h-full">
              <img
                className="w-[100px] h-[100px] rounded-full mx-auto"
                src="./assets/zion-kids.jpg"
                alt=""
              />
            </div>
            <h1 className="pt-4 text-2xl">first name and lastname</h1>
            <h3 className="pt-2 pb-2">Admin</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Admin;
