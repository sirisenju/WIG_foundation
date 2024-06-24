import React, { useState, useEffect } from 'react';
import axiosInstance from '../../api';


function Users({ users, onUserClick }) {
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
    <div className="w-full min-h-screen p-2 bg-white shadow-md rounded-lg 2xl:max-w-7xl">
      <h2 className="pt-4 pb-4 text-xl font-semibold bg-transparent">
        List of users present.
      </h2>
      <div className="w-full flex flex-wrap gap-2">
        {/* simple card */}
        {/* {data.users && data.users.length > 0 && (
          data.users.map((user, index) => (
          <div key={user.email} className="bg-[#EDF7F5] shadow-md rounded-lg h-full flex-grow basis-[270px] p-4">
            <div className="w-full flex justify-center">
              <img
                className="w-[100px] h-[100px] object-cover rounded-full"
                src={user.profile_pic}
                alt=""
              />
            </div>
            <div className=" text-center w-full">
              <button onClick={() => onUserClick(user)}>
                <h2 className="text-xl font-semibold">
                {user.first_name} {user.last_name}
                </h2>
              </button>
              <p className="text-lg">{user.email}</p>
              <p className="text-lg">{user.role}</p>
              <p className="text-base">{user.number}</p>
            </div>
          </div>
          ))
        )} */}
      </div>
      <div className="overflow-x-auto mt-2">
        <table className="table-auto w-full">
          <thead className="text-center">
            <tr>
              <th className="text-nowrap text-center">First name</th>
              <th className="text-nowrap text-center">Surname</th>
              {/* <th className="text-nowrap text-center">Email address</th> */}
              <th className="text-nowrap text-center">Role</th>
              {/* <th className="text-nowrap text-center">Phone number</th> */}
            </tr>
          </thead>
          <tbody> 
          {/* {data.users && data.users.length > 0 && (
            data.users.map((user, index) => (
              <tr key={user.id} className="text-center cursor-pointer hover:bg-green-300" onClick={() => onUserClick(user)}>
                <td className="text-nowrap text-center">{user.first_name}</td>
                <td className="text-nowrap text-center">{user.last_name}</td>
                <td className="text-nowrap text-center">{user.email}</td>
                <td className="text-nowrap text-center">{user.role}</td>
                <td className="text-nowrap text-center">{user.number}</td>
              </tr>
            ))
          )} */}
          {
            users.map((item) => (
              <tr key={item.id} className='cursor-pointer' onClick={() => onUserClick(item)}>
                <td className="text-nowrap text-center">{item.firstName}</td>
                <td className="text-nowrap text-center">{item.lastName}</td>
                {/* <td className="text-nowrap text-center">{item.email}</td> */}
                <td className="text-nowrap text-center">{item.role}</td>
                {/* <td className="text-nowrap text-center">{item.number}</td> */}
              </tr>
            ))
          }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
