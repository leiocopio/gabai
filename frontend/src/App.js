import React from "react";

//Modules
import Helmet from "react-helmet";

//icons
import { BsMoon } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";

//images
import Logo from "./img/Logo.png";

//Components and Pages
import "./css/nav.css";
import Admin from "./pages/admin/dashboard";
import CasesList from "./pages/admin/cases";
import FeedbacksList from "./pages/admin/feedbacks";
import Footer from "./components/footer";
import LandingPage from "./pages/landingPage";
import Results from "./pages/search/results";
import Search from "./pages/search/search";
import SignIn from "./components/sign-in/signIn";
import Terms from "./components/terms";
import UserList from "./pages/admin/users";
import Chat from "./pages/chat/chat";
import Testing from "./pages/testing/testing";

//Modules
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//CSS
import "./css/App.css";

//Login Popup Component

function Header() {
  return (
    <>
      {/* Navigation Bar  */}
      <nav className="bg-gray-200 fixed h-[3.875rem] w-full px-[1.25rem] font-bold border-b-2 border-azure-500 ">
        {/* Brand Name */}
        <Link to="/">
          <div className="">
            <img src={Logo} alt="Logo" style={{ height: "25px" }} />
          </div>
        </Link>

        {/* Search Bar */}
        <div className="flex flex-row items-center text-md gap-x-5">
          {/* Login Btn */}
          <SignIn />

          {/* Search Icon */}
          <Link to="/search">
            <FaSearch className="text-2xl" />
          </Link>

          {/* Toggle night mode */}
          <BsMoon className="text-2xl" />
        </div>
      </nav>
    </>
  );
}

const App = () => {
  return (
    <>
      <Helmet>
        <title>GabAI</title>
      </Helmet>

      <Router>
        <Header />
        <Routes>
          {/*  Landing Page Route  */}
          <Route path="/" element={<Home />} />
          {/* Search Route */}
          <Route path="/search" element={<Search />} />
          <Route path="/searchResults" element={<Results />} />
          <Route path="ToC" element={<Terms />} />
          {/*  Admin Page Route  */}
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/users" element={<UserList />} />
          <Route path="/admin/cases" element={<CasesList />} />
          <Route path="/admin/feedbacks" element={<FeedbacksList />} />
          {/* Chat Interface */}
          <Route path="/chat" element={<Chat />} />
          {/* Testing Route for testing components */}
          <Route path="/testing" element={<Testing />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

const Home = () => {
  return (
    <>
      {/* Main Content */}
      <div className="flex flex-col">
        {/* Landing Page here!!! */}
        <div className="flex flex-col items-center justify-center">
          <LandingPage />
        </div>
      </div>
    </>
  );
};

export default App;
