import React from 'react';

const Cases = [
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
function CasesList() {
  return (
    <div className="bg-gray-100 h-screen">
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-medium">Admin Dashboard</h1>
        </div>

        <div className="flex justify-between items-center mt-4">
          <p className="text-xl text-gray-600">List Of Cases <span className="text-blue-500">{Cases.length}</span></p>
         
        </div>
      </div>

      <div className="bg-gray-200 p-4">
        <div className=" border border-sky-800 overflow-x-auto">
          <table className="w-full table-auto">
            <thead className=" px-10 border border-sky-800 bg-azure">
              <tr>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Case</th>
                <th className="px-4 py-2 text-left">Date</th>
                <th className="px-6 py-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {Cases.map((cases) => (
                <tr key={Cases.id} className="border-b last:border-b-0 border-gray-200">
                  <td className="px-4 py-2">{cases.name}</td>
                  <td className="px-4 py-2">{`${Cases.cases} / `}</td>
                  <td className="px-4 py-2">{`${Cases.date} / `}</td>
                  <td className="px-4 py-2">
                    <button className="bg-blue-500 text-white py-1 px-1 rounded mr-2">Update</button>
                    <button className="bg-red-500 text-white py-1 px-1 rounded">Delete</button>
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

export default CasesList;
