import React from "react";
import { FaUsers } from "react-icons/fa6";
import { LiaBalanceScaleSolid } from "react-icons/lia";

import { VscFeedback } from "react-icons/vsc";
function Sidebar() {
  return (
    <>
      <div className="w-[20rem] bg-gray-300 h-screen p-5">
        <div className="my-5">
          <h1 className="font-bold text-2xl">Admin Dashboard</h1>
          <br />
          <div className="my-[10rem]"></div>
          <nav className="flex flex-col gap-10 list-none items-start text-black">
            <li className="flex flex-row gap-2 text-2xl">
              <FaUsers />
              Users
            </li>

            <li className="flex flex-row gap-2 text-2xl">
              <LiaBalanceScaleSolid />
              Cases
            </li>

            <li className="flex flex-row gap-2 text-2xl">
              <VscFeedback />
              Feedbacks
            </li>
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

        <div>{/* Contents */}</div>
      </div>
    </>
  );
}

export default AdminDashboard;
