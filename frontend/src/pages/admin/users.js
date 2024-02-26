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
                  <button className="text-black py-1 px-1 bg-gray-200 hover:bg-azure  rounded-full ...  ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                        </svg>

                    </button>
                    
                    <button className="text-black py-1 px-1 bg-gray-200 hover:bg-azure   rounded-full ... ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                         </svg>
                            </button>
                            
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
