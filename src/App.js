import "./App.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { BsMoon } from "react-icons/bs";

//Components and Pages
import Search from "./pages/search";
import "./components/css/nav.css";
import SignIn from "./components/signIn";
import Footer from "./components/footer";
import Results from "./pages/searchResults";
import LandingPage from "./pages/landingPage";
import Terms from "./components/ToC";
import Admin from "./pages/admin/dashboard";
import Logo from "./img.sec1/Logo.png";

function Header() {
  return (
    <>
      {/* Navigation Bar  */}
      <nav className="h-[3.875rem] w-full px-[1.25rem] font-bold border-b-2 border-azure-500">
        {/* Brand Name */}
        <Link to="/">
         <div className="">
          <img src={Logo} alt="Logo" style={{ height: '40px' }} />
         </div>
        </Link>

        {/* Search Bar */}
        <div className="flex flex-row items-center text-2xl gap-x-5">
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

function App() {
  return (
    <>
      <head>
        <title>GabAI</title>
      </head>

      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/searchResults" element={<Results />} />
          <Route path="ToC" element={<Terms />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

function Home() {
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
}

export default App;
