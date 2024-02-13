import React from 'react';

const userList = [
  {
    id: 1,
    name: 'Olivia Rodriguez',
    sex: 'Female',
    age: 28,
    province: 'Bulacan',
    city: 'Malolos',
    mobileNumber: '09123456789',
    password: 'c4a81f6b32e59...',
  },
  // ... other users in the list
];

const formatNumber = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
function UserList() {
  return (
    <div className="bg-gray-100 h-screen">
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-medium">Admin Dashboard</h1>
        </div>

        <div className="flex justify-between items-center mt-4">
          <p className="text-xl text-gray-600">List Of Users <span className="text-blue-500">{userList.length}</span></p>
         
        </div>
      </div>

      <div className="bg-gray-200 p-4">
        <div className=" border border-sky-800 overflow-x-auto">
          <table className="w-full table-auto">
            <thead className=" px-10 border border-sky-800 bg-azure">
              <tr>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Sex/ Age</th>
                <th className="px-4 py-2 text-left">Province/City</th>
                <th className="px-4 py-2 text-left">Mobile Number</th>
                <th className="px-4 py-2 text-left">Password</th>
                <th className="px-4 py-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {userList.map((user) => (
                <tr key={user.id} className="border-b last:border-b-0 border-gray-200">
                  <td className="px-4 py-2">{user.name}</td>
                  <td className="px-4 py-2">{`${user.sex} / ${user.age}`}</td>
                  <td className="px-4 py-2">{`${user.province} / ${user.city}`}</td>
                  <td className="px-4 py-2">{user.mobileNumber}</td>
                  <td className="px-4 py-2">{user.password}</td>
                  <td className="px-4 py-2">
                    <button className="bg-blue-500 text-white py-1 px-2 rounded mr-2">Update</button>
                    <button className="bg-red-500 text-white py-1 px-2 rounded">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UserList;
