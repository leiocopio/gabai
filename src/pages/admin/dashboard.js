import React from "react";

function Sidebar() {
  return (
    <>
      <div className="w-[20rem] bg-gray-300 h-screen p-5">
        <div>
          <h1 className="text-bold text-2xl">Admin Dashboard</h1>
          <br />
          <div className="my-5"></div>
          <nav className="flex flex-col gap-10 list-none items-start text-black">
            <li>Users</li>
            <li>Cases</li>
            <li>Feedbacks</li>
          </nav>
        </div>
      </div>
    </>
  );
}

function AdminDashboard() {
  return (
    <>
      <div className="flex flex-col justify-center h-screen">
        <div>
          <Sidebar />
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
