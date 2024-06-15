import React from "react";
import { useState } from "react";
import Dashboard from "./Dashboard";
import Users from "./Users";
import Projects from "./Projects";
import Blog from "./Blog";
import AHamburger from "./AHamburger";
import SideBar from "./SideBar";

function Admin() {
    const [activeComponent, setActiveComponent] = useState("Dashboard");

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

      const users = [
        { id: 1, firstName: "John", lastName: "Doe", role: "Developer" },
        { id: 2, firstName: "Jane", lastName: "Smith", role: "Designer" },
        { id: 3, firstName: "Bob", lastName: "Johnson", role: "Manager" },
      ];

  return (
    <section className="w-full h-full">
      <div className=" block md:hidden 2xl:max-w-7xl">
        <AHamburger onChangeScreen={changeScreen}/>
      </div>
      <div className="h-full flex flex-row p-2 gap-4 flex-wrap">
        {/* left dashboard */}
        <SideBar onLinkClick={changeScreen}/>

        {/* render component */}
        <div className="basis-[60%] flex-grow 2xl:max-w-7xl">
          {activeComponent === "Dashboard" && <Dashboard/>}
          {activeComponent === "Users" && <Users users={users}/>}
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
