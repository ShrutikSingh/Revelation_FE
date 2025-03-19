import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import axios from "axios";
import { API_URL } from "../../config/config";

import revelation from "../../assets/revelationlogo1.png";
import iiestLogo from "../../assets/iiest_logo.png";
import ascLogo from "../../assets/asce_logo.png";
import homeIcon from "../../assets/icons/home.png";
import eventsIcon from "../../assets/icons/calendar.png";
import sponsorsIcon from "../../assets/icons/sponsor.png";
import teamsIcon from "../../assets/icons/teams.png";

const Navbar = ({ Token }) => {
  const [hovered, setHovered] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [userData, setUserData] = useState({});
  const [isValidToken, setIsValidToken] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navigate = useNavigate();
  const location = useLocation();
  const activeSection =
    location.pathname === "/profile" ? null : location.pathname;

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    const token = localStorage.getItem("Token");
    if (token) {
      try {
        const userResponse = await axios.get(`${API_URL}/api/auth/status`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        // Only set user data if response status is 200
        if (userResponse.status === 200) {
          setUserData(userResponse.data.user);
          setIsValidToken(true);
        } else {
          setIsValidToken(false);
          localStorage.removeItem("Token");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsValidToken(false);
        localStorage.removeItem("Token");
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleNavigation = (path) => {
    if (path === "/sponsors") {
      if (location.pathname === "/") {
        document
          .getElementById("sponsors-section")
          ?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/#sponsors");
        setTimeout(() => {
          document
            .getElementById("sponsors-section")
            ?.scrollIntoView({ behavior: "smooth" });
        }, 500);
      }
    } else {
      navigate(path);
      setMenuOpen(false);
    }
  };

  return (
    <>

      {/* <nav className="fixed top-1 left-0 w-full bg-gray-900 text-white flex items-center justify-between px-3 py-3 border-2 border-gray-600 rounded-lg shadow-lg z-50 bg-opacity-0 backdrop-blur-lg "> */}
      <nav
        className={`fixed top-2 left-2 right-3 w-[96dvw] md:w-[98.5dvw] bg-gray-900 text-white flex items-center justify-between px-3 py-1 border-2 border-gray-600 rounded-lg shadow-lg z-50 bg-opacity-0 backdrop-blur-lg transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-[115%]"
        }`}
      >
        {/* Logos Section */}
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="flex items-center justify-center flex-grow">
            <a
              href="https://revelation2k25.tech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={revelation}
                alt="Revelation Logo"
                className="w-28 sm:w-36 md:w-44 h-auto cursor-pointer hover:scale-110 transition-transform"
              />
            </a>
          </div>
          <a
            href="https://www.iiests.ac.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={iiestLogo}
              alt="IIEST Logo"
              className="w-7 sm:w-8 md:w-10 cursor-pointer hover:scale-110 transition-transform"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/academic-society-of-computer-engineers-asce-iiest-shibpur/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={ascLogo}
              alt="ASC Logo"
              className="w-7 sm:w-8 md:w-10 cursor-pointer hover:scale-110 transition-transform"
            />
          </a>
        </div>
        {/* //       <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white flex items-center justify-between px-3 py-3 border-2 border-gray-600 rounded-lg shadow-lg z-50 bg-opacity-0 backdrop-blur-lg">

        <div className="flex items-center gap-2 sm:gap-4">
          <div className="flex items-center justify-center flex-grow"> */}
        {/* <img
              src={revelation}
              alt="Revelation Logo"
              className="w-28 sm:w-36 md:w-44 h-auto"
            />
          </div>
          <a
            href="https://www.iiests.ac.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={iiestLogo}
              alt="IIEST Logo"
              className="w-6 sm:w-8 md:w-10 cursor-pointer hover:scale-110 transition-transform"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/academic-society-of-computer-engineers-asce-iiest-shibpur/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={ascLogo}
              alt="ASC Logo"
              className="w-6 sm:w-8 md:w-10 cursor-pointer hover:scale-110 transition-transform"
            />
           */}

        {/* Desktop Menu */}

        <div className="hidden lg:flex items-center gap-6">
          {[
            { id: "/", icon: homeIcon, label: "Home" },
            { id: "/events", icon: eventsIcon, label: "Events" },
            { id: "/sponsors", icon: sponsorsIcon, label: "Sponsors" },
            { id: "/teams", icon: teamsIcon, label: "Teams" },
          ].map(({ id, icon, label }) => (
            <button
              key={id}
              onClick={() => handleNavigation(id)}
              onMouseEnter={() => setHovered(id)}
              onMouseLeave={() => setHovered(null)}
              className={`px-3 py-2 text-lg rounded-lg flex items-center gap-2 transition-all duration-300 
                ${
                  activeSection === id
                    ? "bg-red-700 text-white px-4 py-2 font-serif font-medium"
                    : hovered === id
                    ? "bg-red-700 text-white px-4 py-2 font-serif font-medium"
                    : "bg-transparent text-white hover:text-gray-400"
                }
              `}
            >
              <img
                src={icon}
                alt={label}
                className="w-6 sm:w-8 h-auto filter brightness-200 contrast-200 drop-shadow-md"
              />
              {(hovered === id || activeSection === id) && <span>{label}</span>}
            </button>
          ))}
        </div>

        {/* Profile/Login Button (Desktop) */}
        <div className="hidden lg:block pr-3">
          {Token !== null && isValidToken ? (
            <div
              onClick={() => handleNavigation("/profile")}
              className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-black border-2 border-red-600 flex items-center justify-center cursor-pointer transition-transform hover:scale-110"
            >
              {userData.picture && (
                <img
                  src={userData.picture}
                  alt="Profile"
                  className="w-full h-full rounded-full"
                />
              )}
            </div>
          ) : (

            // <button onClick={() => handleNavigation("/login")}>Login</button>
            <button
              className=" mr-4 bg-black-600 text-white px-5 py-2 rounded-lg border-2 border-red-600 transition-all duration-300 hover:bg-black hover:shadow-red-500 shadow-md"
              onClick={() => handleNavigation("/login")}
            >
              Login
            </button>

          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(true)}
            className="text-2xl transition-transform hover:scale-110"
          >
            <FaBars />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-56 bg-gray-950 text-white transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 shadow-lg z-50`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setMenuOpen(false)} className="text-2xl">
            <FaTimes />
          </button>
        </div>

        {/* Mobile Profile/Login */}
        <div className="flex flex-col items-center gap-4 mt-6">
          {Token !== null && isValidToken ? (
            <div
              onClick={() => handleNavigation("/profile")}
              className="w-10 h-10 rounded-full bg-black border-2 border-red-600 flex items-center justify-center cursor-pointer transition-transform hover:scale-110"
            >
              {userData.picture && (
                <img
                  src={userData.picture}
                  alt="Profile"
                  className="w-full h-full rounded-full"
                />
              )}
            </div>
          ) : (

            // <button onClick={() => handleNavigation("/login")}>Login</button>
            <button
              className=" mr-4 bg-black-600 text-white px-5 py-2 rounded-lg border-2 border-red-600 transition-all duration-300 hover:bg-black hover:shadow-red-500 shadow-md"

              onClick={() => handleNavigation("/login")}
            >
              Login
            </button>
          )}
          {[
            { id: "/", icon: homeIcon, label: "Home" },
            { id: "/events", icon: eventsIcon, label: "Events" },
            { id: "/sponsors", icon: sponsorsIcon, label: "Sponsors" },
            { id: "/teams", icon: teamsIcon, label: "Teams" },
          ].map(({ id, icon, label }) => (
            <button
              key={id}
              onClick={() => handleNavigation(id)}
              className="text-lg flex items-center gap-2 w-full px-4 py-2 transition duration-200 hover:bg-red-600"
            >
              <img
                src={icon}
                alt={label}
                className="w-6 sm:w-8 h-auto filter brightness-200 contrast-200 drop-shadow-md"
              />
              {label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;