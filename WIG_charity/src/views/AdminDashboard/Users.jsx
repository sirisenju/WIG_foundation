import React from "react";

function Users(props) {
  const { items, onUserClick } = props;
  return (
    <div className="w-full h-screen p-2 bg-white shadow-md rounded-lg">
      <h2 className="pt-4 pb-4 text-xl font-semibold bg-transparent">
        List of users present.
      </h2>
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
            {items.map((item) => (
              <tr key={item.id} className="text-center">
                <td className="text-nowrap text-center"><button onClick={() => onUserClick(item)}>{item.fname}</button></td>
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

export default Users;
