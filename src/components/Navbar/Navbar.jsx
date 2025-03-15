


import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaBars, FaHome, FaCalendarAlt, FaUsers, FaHandshake, FaTimes } from "react-icons/fa";
import revelation from "../../assets/revelation.png";
import iiestLogo from "../../assets/iiest_logo.png";
import ascLogo from "../../assets/asce_logo.png";

const Navbar = ({ userData }) => {
  const [hovered, setHovered] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const activeSection = location.pathname === "/profile" ? null : location.pathname;

  const handleNavigation = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <>
      
      <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white flex items-center justify-between px-2 lg:px-2 sm:px-1 py-1 border-2 border-gray-600 rounded-lg shadow-lg z-50">

        <div className="flex items-center gap-4 sm:gap-6">
          <img src={revelation} alt="Revelation Logo" className="w-36 sm:w-40 md:w-48 h-auto" />
          <img src={iiestLogo} alt="IIEST Logo" className="w-8 sm:w-10 md:w-12 cursor-pointer" />
          <img src={ascLogo} alt="ASC Logo" className="w-8 sm:w-10 md:w-12 cursor-pointer" />
        </div>

        <div className="hidden lg:flex items-center gap-6">
          {[
            { id: "/", icon: <FaHome size={26} />, label: "Home" },
            { id: "/events", icon: <FaCalendarAlt size={26} />, label: "Events" },
            { id: "/sponsors", icon: <FaHandshake size={26} />, label: "Sponsors" },
            { id: "/teams", icon: <FaUsers size={26} />, label: "Teams" },
          ].map(({ id, icon, label }) => (
            <button
              key={id}
              onClick={() => handleNavigation(id)}
              onMouseEnter={() => setHovered(id)}
              onMouseLeave={() => setHovered(null)}
              className={`px-4 py-2 text-lg rounded-lg flex items-center gap-2 transition-all duration-300 
                ${
                  activeSection === id
                    ? "bg-red-700 text-white px-5 py-2 font-bold"
                    : hovered === id
                    ? "bg-red-700 text-white px-5 py-2 font-bold"
                    : "bg-transparent text-white hover:text-gray-400"
                }`}
            >
              <span className="text-xl font-bold">{icon}</span>
              {(hovered === id || activeSection === id) && <span>{label}</span>}
            </button>
          ))}
        </div>
        
        <div className="hidden lg:block pr-3">
          <div
            onClick={() => handleNavigation("/profile")}
            className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-black border-2 border-red-600 shadow-neon flex items-center justify-center text-white text-lg font-bold cursor-pointer transition-transform duration-300 hover:scale-110 hover:shadow-[0_0_15px_#ff0000]"
          >
            {userData?.name ? userData.name.charAt(0).toUpperCase() : "?"}
          </div>
        </div>

        <div className="lg:hidden flex items-center">
          <button onClick={() => setMenuOpen(true)} className="text-2xl transition-transform duration-300 hover:scale-110">
            <FaBars />
          </button>
        </div>
      </nav>

      <div
        className={`fixed top-0 right-0 h-full w-56 bg-gray-900 text-white transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 shadow-lg z-50`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setMenuOpen(false)} className="text-2xl">
            <FaTimes />
          </button>
        </div>

        <div className="flex flex-col items-center gap-5 mt-8">
          <div
            onClick={() => handleNavigation("/profile")}
            className="w-10 h-10 rounded-full bg-black border-2 border-red-600 shadow-neon flex items-center justify-center text-white text-lg font-bold cursor-pointer hover:shadow-[0_0_15px_#ff0000]"
          >
            {userData?.name ? userData.name.charAt(0).toUpperCase() : "?"}
          </div>
          {[
            { id: "/", icon: <FaHome />, label: "Home" },
            { id: "/events", icon: <FaCalendarAlt />, label: "Events" },
            { id: "/sponsors", icon: <FaHandshake />, label: "Sponsors" },
            { id: "/teams", icon: <FaUsers />, label: "Teams" },
          ].map(({ id, icon, label }) => (
            <button
              key={id}
              onClick={() => handleNavigation(id)}
              className={`text-lg flex items-center gap-2 w-full px-5 py-2 transition duration-200 ${
                activeSection === id ? "bg-red-600" : "hover:bg-red-600"
              }`}
            >
              {icon} {label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;






