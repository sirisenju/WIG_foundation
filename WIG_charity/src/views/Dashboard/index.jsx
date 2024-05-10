import React from "react";
import Board from "./Board";
import Project from "./Project";
import Reports from "./Reports";
import { useState } from "react";
import DHamburger from "./DHamburger";

function Dashboard() {
  const [activeComponent, setActiveComponent] = useState("Board");

  const changeScreen = (screenName) => {
    switch (screenName) {
      case "Board":
        setActiveComponent("Board");
      break;
      case "Project":
        setActiveComponent("Project");
      break;
      case "Report":
        setActiveComponent("Report");
      break;
      default:
          setActiveComponent("Board");
        break;
    }
  }

  return (
    <section className="w-full h-screen">
      <div className=" block md:hidden">
        <DHamburger onChangeScreen={changeScreen}/>
      </div>
      <div className="h-full flex flex-row p-2 gap-4 flex-wrap">
        {/* left dashboard */}
        <div className="basis-[250px] rounded-lg bg-white shadow-md flex-grow hidden md:block">
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
                <button onClick={() => setActiveComponent("Report")}>
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
        
        {/* render component */}
        <div className="basis-[60%] flex-grow">
          {activeComponent === "Board" && <Board/>}
          {activeComponent === "Project" && <Project/>}
          {activeComponent === "Report" && <Reports/>}
        </div>

        {/* right column(last) */}
        <div className="bg-white rounded-lg shadow-md basis-[250px] flex-grow hidden 2xl:block">
          <div className="w-full text-center mb-5 mt-5  pt-28">
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
      </div>
    </section>
  );
}

export default Dashboard;
