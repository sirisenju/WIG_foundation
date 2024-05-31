import React from "react";

function Dashboard() {
  return (
    <div className="col-span-3 p-2 bg-white shadow-md rounded-lg h-screen">
      <h1 className="text-center text-4xl font-bold">Admin Dashboard</h1>
      <h2 className=" pt-4 pb-4 text-xl font-semibold">Stats Overview</h2>
      <div className="flex justify-between">
        <div className="text-center basis-[300px] bg-gray-100 p-11 rounded-md shadow-md">
          Projects <br /> 48
        </div>
        <div className="text-center basis-[300px] bg-gray-100 p-11 rounded-md shadow-md">
          Users <br />
          21
        </div>
        <div className="text-center basis-[300px] bg-gray-100 p-11 rounded-md shadow-md">
          Blog Posts <br />
          14
        </div>
      </div>
      <h2 className=" pt-4 pb-4 text-xl font-semibold">List of users.</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <thead className="text-center">
            <tr>
              <th className="text-nowrap text-center">First name</th>
              <th className="text-nowrap text-center">Surname</th>
              <th className="text-nowrap text-center">Email address</th>
              <th className="text-nowrap text-center">Role</th>
              <th className="text-nowrap text-center">Phone number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-nowrap text-center">Peter</td>
              <td className="text-nowrap text-center">James</td>
              <td className="text-nowrap text-center">peter@gmail.com</td>
              <td className="text-nowrap text-center">chef</td>
              <td className="text-nowrap text-center">08067890957</td>
            </tr>
            <tr>
              <td className="text-nowrap text-center">John</td>
              <td className="text-nowrap text-center">Kennedy</td>
              <td className="text-nowrap text-center">kennedy@gmail.com</td>
              <td className="text-nowrap text-center">manager</td>
              <td className="text-nowrap text-center">08067890957</td>
            </tr>
            <tr>
              <td className="text-nowrap text-center">Stacy</td>
              <td className="text-nowrap text-center">UptownGirl</td>
              <td className="text-nowrap text-center">stacy@gmail.com</td>
              <td className="text-nowrap text-center">product designer</td>
              <td className="text-nowrap text-center">08067890957</td>
            </tr>
            <tr>
              <td className="text-nowrap text-center">John</td>
              <td className="text-nowrap text-center">Kennedy</td>
              <td className="text-nowrap text-center">kennedy@gmail.com</td>
              <td className="text-nowrap text-center">manager</td>
              <td className="text-nowrap text-center">08067890957</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
