//Images and Icons
import { Link } from "react-router-dom";
import Logo from "../img/Logo.png";
import { FaSearch } from "react-icons/fa";
import { BsMoon } from "react-icons/bs";

// Components
import SignIn from "./sign-in/signIn";

const toggle = () => {
  var element = document.body;
  element.classList.toggle("dark-mode");
};

function Header() {
  return (
    <>
      {/* Navigation Bar  */}
      <nav
        className="py-3 w-full px-[20%] 
      font-bold border-b-2 border-azure fixed z-10 bg-white
      flex flex-row justify-between items-center
       max-md:px-2 max-md:h-16
      "
      >
        {/* Brand Name */}
        <Link to="/">
          <div className="">
            <img src={Logo} alt="Logo" style={{ height: "25px" }} />
          </div>
        </Link>
        <div
          className="flex flex-row items-center gap-x-5
        max-md:hidden
        "
        >
          <ul className="flex flex-row gap-20 text-xl">
            <li
              className="hover:ease-in-out duration-300 
            hover:bg-azure 
            hover:text-white"
            >
              Home
            </li>
            <li
              className="hover:ease-in-out duration-300 
            hover:bg-azure 
            hover:text-white"
            >
              Search
            </li>
            <li
              className="hover:ease-in-out duration-300 
            hover:bg-azure 
            hover:text-white"
            >
              Chat
            </li>
          </ul>
        </div>
        {/* Search Bar */}
        <div
          className="flex flex-row items-center text-md gap-x-5
        max-md:hidden
        "
        >
          {/* Login Btn */}
          <SignIn />

          {/* Toggle Night Mode */}

          <BsMoon onClick={toggle} />
        </div>
      </nav>
    </>
  );
}

export default Header;
