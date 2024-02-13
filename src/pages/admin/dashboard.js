//modules
import React from "react";
import { Helmet } from "react-helmet";

//components and pages
import Sidebar from "../../components/admin/sidebar";
import UserDemographics from "../../components/admin/demographics";

//icon sets
import { FaUsers } from "react-icons/fa6";
import { LiaBalanceScaleSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';

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

            <Link to= "/admin/users">
            <li className="flex flex-row gap-2 text-2xl">
              <FaUsers />
              Users
            </li>
            </Link >

            <Link to= "/admin/cases">
            <li className="flex flex-row gap-2 text-2xl">
              <LiaBalanceScaleSolid />
              Cases
            </li>
            </Link >

            <Link to= "/admin/feedbacks">
            <li className="flex flex-row gap-2 text-2xl">
              <VscFeedback />
              Feedbacks
            </li>
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
import { FaRegUser } from "react-icons/fa";

/**
 * AdminDashboard page component that renders the admin dashboard UI.
 * Displays welcome message, user/case/feedback counts.
 */

function AdminDashboard() {
  const name = "Admin";
  const userCount = 0;
  const caseCount = 0;
  const feedbackCount = 0;
  return (
    <>
      <Helmet>
        {/* Title of the Page */}
        <title>Admin Dashboard - GabAI</title>
      </Helmet>
      <div className="flex flex-row h-screen">
        <div>
          <Sidebar />
        </div>

        <div>
          {/* Contents */}
          <div>
            <h1>Welcome, {name}!</h1>
          </div>
          {/* Shows the Number of Users, Cases, etc. */}
          <div className="flex flex-row gap-1 items-center justify-center w-[75vw] text-azure">
            {/* Start */}
            <div className="flex flex-row border-2 rounded-xl border-azure-400 h-[8rem] w-[20rem] p-3 justify-between items-center">
              {" "}
              <div>
                {/* User Count */}
                Total No. of Users
                <br />
                <span className="text-5xl">{userCount}</span>
              </div>
              <div>
                <FaRegUser className="text-7xl" />
              </div>
            </div>{" "}
            {/* End */}
            {/* Start */}
            <div className="flex flex-row border-2 rounded-xl border-azure-400 h-[8rem] w-[20rem] p-3 justify-between items-center">
              {" "}
              <div>
                {/* Case Count */}
                Total No. of Cases
                <br />
                <span className="text-5xl">{caseCount}</span>
              </div>
              <div>
                <LiaBalanceScaleSolid className="text-7xl" />
              </div>
            </div>{" "}
            {/* End */}
            {/* Start */}
            <div className="flex flex-row border-2 rounded-xl border-azure-400 h-[8rem] w-[20rem] p-3 justify-between items-center">
              {" "}
              <div>
                {/* Feedback Count */}
                Total No. of Feedback
                <br />
                <span className="text-5xl">{feedbackCount}</span>
              </div>
              <div>
                <VscFeedback className="text-7xl" />
              </div>
            </div>{" "}
            {/* End */}
          </div>

          {/* Shows the Graph */}
          <UserDemographics />
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
