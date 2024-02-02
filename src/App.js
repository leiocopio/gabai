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

function App() {
  return (
    <>
      <head>
        <title>GabAI</title>
      </head>

      <Router>
        {/* Navigation Bar  */}
        <nav className="h-[3.875rem] w-full px-[1.25rem] font-bold border-b-2 border-azure-500">
          {/* Brand Name */}
          <Link to="/">
            <div className="text-2xl">GabAI</div>
          </Link>

          {/* Search Bar */}
          <div className="flex flex-row items-center gap-x-5">
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

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/searchResults" element={<Results />} />
        </Routes>
      </Router>

      <Footer></Footer>
    </>
  );
}

function Home() {
  return (
    <>
      {/* Main Content */}
      <div className="flex flex-col h-screen">
        {/* Landing Page here!!! */}

        <LandingPage></LandingPage>
      </div>
    </>
  );
}

export default App;
