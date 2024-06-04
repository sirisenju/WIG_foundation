import React from "react";

function Dashboard() {
  const users = [
    {
      id: 1,
      fname: "John",
      lname: "Doe",
      email: "johndoe@gmail.com",
      role: "",
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
      role: "manager",
      number: "+234768776652",
      imgUrl: "/assets/faceskinModel.jpg",
    },
    {
      id: 4,
      fname: "Emmanuel",
      lname: "Festus",
      email: "emmaf@gmail.com",
      role: "admin",
      number: "+234768776652",
      imgUrl: "/assets/faceskinModel.jpg",
    },
    {
      id: 5,
      fname: "Jessica",
      lname: "Jones",
      email: "jessicaJ@gmail.com",
      role: "clerk",
      number: "+234768776652",
      imgUrl: "/assets/faceskinModel.jpg",
    },
  ];

  return (
    <div className="col-span-3 p-2 bg-white rounded-lg min-h-screen shadow-md 2xl:max-w-7xl">
      <h1 className="text-center text-4xl font-bold">Admin Dashboard</h1>
      <h2 className="pt-4 pb-4 text-xl font-semibold">Stats Overview</h2>
      <div className="flex flex-wrap gap-3">
        <div className="text-center text-lg basis-[200px] bg-[#EDF7F5] p-11 rounded-md shadow-md flex-grow">
          Projects <br />{" "}
          <span className=" text-3xl text-blue-500 font-semibold">48</span>
        </div>
        <div className="text-center basis-[200px] bg-[#EDF7F5] p-11 rounded-md shadow-md flex-grow">
          Users <br />
          <span className=" text-3xl text-blue-500 font-semibold">21</span>
        </div>
        <div className="text-center basis-[200px] bg-[#EDF7F5] p-11 rounded-md shadow-md flex-grow">
          Blog Posts <br />
          <span className=" text-3xl text-blue-500 font-semibold">14</span>
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
            {users.map((item) => (
              <tr key={item.id}>
                <td className="text-nowrap text-center">{item.fname}</td>
                <td className="text-nowrap text-center">{item.lname}</td>
                <td className="text-nowrap text-center">{item.email}</td>
                <td className="text-nowrap text-center">{item.role}</td>
                <td className="text-nowrap text-center">{item.number}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
