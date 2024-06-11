import React, { useState, useEffect } from 'react';
import axiosInstance from '../../api';

function Dashboard() {
  const [data, setData] = useState({});

  useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await axiosInstance.get('api/admin-summary/');
              setData(response.data);
              console.log(response.data)
          } catch (error) {
            console.error('Error fetching users:', error);
          }
      };

      fetchData();
  }, []);
  return (
    <div className="col-span-3 p-2 bg-white rounded-lg min-h-screen shadow-md 2xl:max-w-7xl">
      <h1 className="text-center text-4xl font-bold">Admin Dashboard</h1>
      <h2 className="pt-4 pb-4 text-xl font-semibold">Stats Overview</h2>
      <div className="flex flex-wrap gap-3">
        <div className="text-center text-lg basis-[200px] bg-[#EDF7F5] p-11 rounded-md shadow-md flex-grow">
          Projects <br />{" "}
          <span className=" text-3xl text-blue-500 font-semibold">{data.num_projects}</span>
        </div>
        <div className="text-center basis-[200px] bg-[#EDF7F5] p-11 rounded-md shadow-md flex-grow">
          Users <br />
          <span className=" text-3xl text-blue-500 font-semibold">{data.num_users}</span>
        </div>
        <div className="text-center basis-[200px] bg-[#EDF7F5] p-11 rounded-md shadow-md flex-grow">
          Blog Posts <br />
          <span className=" text-3xl text-blue-500 font-semibold">{data.num_blogs}</span>
        </div>
      </div>
      <h2 className="pt-4 pb-4 text-xl font-semibold">List of users.</h2>
      <div className="overflow-x-auto w-[300px] sm:w-full">
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
            {data.users && data.users.length > 0 && (
              data.users.map((user, index) => (
                  <tr key={user.email}>
                      <td className="text-nowrap text-center">{user.first_name}</td>
                      <td className="text-nowrap text-center">{user.last_name}</td>
                      <td className="text-nowrap text-center">{user.email}</td>
                      <td className="text-nowrap text-center">{user.role}</td>
                      <td className="text-nowrap text-center">{user.phone_number}</td>
                  </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
