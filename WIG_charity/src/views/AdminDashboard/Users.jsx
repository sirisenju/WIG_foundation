import React from "react";

function Users(props) {
  const { items, onUserClick } = props;

  const users = [
    {
      id: 1,
      fname: "John",
      lname: "Doe",
      email: "johndoe@gmail.com",
      role: "cook",
      number: "+234768776652",
      imgUrl: "/assets/faceskinModel.jpg",
    },
    {
      id: 2,
      fname: "Peter",
      lname: "Quill",
      email: "peter@gmail.com",
      role: "cook",
      number: "+234768776652",
      imgUrl: "/assets/faceskinModel.jpg",
    },
    {
      id: 3,
      fname: "Thanos",
      lname: "Festus",
      email: "johndoe@gmail.com",
      role: "cook",
      number: "+234768776652",
      imgUrl: "/assets/faceskinModel.jpg",
    },
    {
      id: 4,
      fname: "Thanos",
      lname: "Festus",
      email: "johndoe@gmail.com",
      role: "cook",
      number: "+234768776652",
      imgUrl: "/assets/faceskinModel.jpg",
    },
    {
      id: 5,
      fname: "Thanos",
      lname: "Festus",
      email: "johndoe@gmail.com",
      role: "cook",
      number: "+234768776652",
      imgUrl: "/assets/faceskinModel.jpg",
    },

  ];
  return (
    <div className="w-full min-h-screen p-2 bg-white shadow-md rounded-lg 2xl:max-w-7xl">
      <h2 className="pt-4 pb-4 text-xl font-semibold bg-transparent">
        List of users present.
      </h2>
      <div className="w-full flex flex-wrap gap-2">
        {/* simple card */}
        {users.map((item) => (
          <div key={item.id} className="bg-[#EDF7F5] shadow-md rounded-lg h-full flex-grow basis-[270px] p-4">
            <div className="w-full flex justify-center">
              <img
                className="w-[100px] h-[100px] object-cover rounded-full"
                src={item.imgUrl}
                alt=""
              />
            </div>
            <div className=" text-center w-full">
              <button onClick={() => onUserClick(item)}>
                <h2 className="text-xl font-semibold">
                  {item.fname} {item.lname}
                </h2>
              </button>
              <p className="text-lg">{item.email}</p>
              <p className="text-lg">{item.role}</p>
              <p className="text-base">{item.number}</p>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="overflow-x-auto mt-2">
        <h2>User list table</h2>
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
            {users.map((item) => (
              <tr key={item.id} className="text-center">
                <td className="text-nowrap text-center">
                  <button onClick={() => onUserClick(item)}>
                    {item.fname}
                  </button>
                </td>
                <td className="text-nowrap text-center">{item.lname}</td>
                <td className="text-nowrap text-center">{item.email}</td>
                <td className="text-nowrap text-center">{item.role}</td>
                <td className="text-nowrap text-center">{item.number}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
    </div>
  );
}

export default Users;
