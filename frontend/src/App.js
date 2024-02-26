import React from "react";

//Modules
import Helmet from "react-helmet";

//icons
import { BsMoon } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";

//images

//Components and Pages
import "./css/nav.css";
import Admin from "./pages/admin/dashboard";
import CasesList from "./pages/admin/cases";
import FeedbacksList from "./pages/admin/feedbacks";
import Footer from "./components/footer";
import LandingPage from "./pages/landingPage";
import Results from "./pages/search/results";
import Terms from "./components/terms";
import UserList from "./pages/admin/users";
import Chat from "./pages/chat/chat";
import Testing from "./pages/testing/testing";
import Header from "./components/header";
import Search from "./pages/search/search";

//Modules
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//CSS
import "./css/App.css";

//Login Popup Component

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
      <div
        className="flex flex-col
      max-md:mx-1"
      >
        {/* Landing Page here!!! */}
        <div className="flex flex-col items-center justify-center">
          <LandingPage />
        </div>
      </div>
    </>
  );
};

export default App;
