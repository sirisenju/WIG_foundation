import React from "react";

function Dashboard() {
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
                <span>Dashboard</span>
              </li>
              <li className="h-10 flex items-center px-4 gap-2 text-lg hover:bg-[#EDF7F5] rounded-md">
                <img className="h-6 w-6" src="./assets/shild.png" alt="" />
                <span>Project</span>
              </li>
              <li className="h-10 flex items-center px-4 gap-2 text-lg hover:bg-[#EDF7F5] rounded-md">
                <img className="h-6 w-6" src="./assets/shild.png" alt="" />
                <span>Report</span>
              </li>
            </ul>
            <div className="mt-[80%]">
              <p>Any trouble?</p>
              <button className="text-base mt-1 px-7 py-2 rounded-full border-2 border-green-500 hover:bg-green-600 hover:text-white">Contact admin</button>
            </div>
          </div>
        </div>

        {/* center dashboard */}
        <div className="col-span-3 p-2 bg-white shadow-md rounded-lg ml-2">
          <h2 className="text-3xl pt-2 pb-2">Hello, Adolf Hitler.</h2>
          <div className="h-[320px] w-full">
            <img
              className="h-full w-full object-cover object-center rounded-xl"
              src="./assets/peopleIllu.jpg"
              alt=""
            />
          </div>
          <div className="mt-4 flex p-2 gap-2">

            {/* project div */}
            <div className="w-[70%]">
              <p className="text-2xl pb-1">Recent Projects:</p>
              <div className="flex gap-2 p-1 w-full max-h-max bg-purple-100 rounded-xl mb-2">
                <img
                  className="h-full w-20 rounded-xl"
                  src="./assets/girlHolder.jpg"
                  alt=""
                />
                <div>
                  <h2 className="text-xl">Project title</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus dolores aspernatur, magni soluta ipsum modi?
                  </p>
                  <p className="text-end">25th June, 2024.</p>
                </div>
              </div>
              <div className="flex gap-2 p-1 w-full max-h-max bg-purple-100 rounded-xl mb-2">
                <img
                  className="h-full w-20 rounded-xl"
                  src="./assets/girlHolder.jpg"
                  alt=""
                />
                <div>
                  <h2 className="text-xl">Project title</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus dolores aspernatur, magni soluta ipsum modi?
                  </p>
                  <p className="text-end">25th June, 2024.</p>
                </div>
              </div>
              <div className="flex gap-2 p-1 w-full max-h-max bg-purple-100 rounded-xl mb-2">
                <img
                  className="h-full w-20 rounded-xl"
                  src="./assets/girlHolder.jpg"
                  alt=""
                />
                <div>
                  <h2 className="text-xl">Project title</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus dolores aspernatur, magni soluta ipsum modi?
                  </p>
                  <p className="text-end">25th June, 2024.</p>
                </div>
              </div>
            </div>
            <div className="w-[30%] h-auto p-2 mb-2 mt-2 rounded-lg">
                <p className="text-2xl pb-1">Filter by:</p>
                <button className="text-base mt-2 px-6 py-1 rounded-full border-2 border-green-500 hover:bg-green-600 hover:text-white">Recent Post</button>
            </div>
          </div>
        </div>

        {/* right column(last) */}
        <div className="bg-purple-400 col-span-1 ml-2 rounded-lg shadow-md">
          <h2>other side stiff</h2>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
