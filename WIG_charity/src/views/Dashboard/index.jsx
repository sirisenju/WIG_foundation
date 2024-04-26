import React from "react";
import Board from "./Board";
import Project from "./Project";
import Reports from "./Reports";
import { useState } from "react";

function Dashboard() {
  const [activeComponent, setActiveComponent] = useState("Board");

  const getComponent = () => {
    switch (activeComponent) {
      case "Board":
        return <Board />;
      case "Project":
        return <Project />;
      case "Report":
        return <Reports />;
      default:
        return <Board />;
    }
  };

  return (
    <section className="w-full h-full">
      <h1 className="text-center text-4xl font-bold">User Dashboard</h1>
      <div className="h-full grid grid-cols-5 p-2">
        {/* left dashboard */}
        <div className="col-span-1 rounded-lg bg-white shadow-md">
          <div className="w-full text-center mb-5 mt-5">
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
          <div className="p-2 flex flex-col justify-between h-auto">
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
        {getComponent()}

        {/* right column(last) */}
        <div className="bg-purple-400 col-span-1 ml-2 rounded-lg shadow-md">
          <h2>other side stiff</h2>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
