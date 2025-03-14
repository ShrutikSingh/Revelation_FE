import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import topArrow from "../../assets/top-arrow.webp"; 

const Footer = () => {
 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };

  return (
    <footer className="bg-black text-gray-300 py-8 px-6 w-full fixed bottom-0">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        
        {/* Left Section - Logo & Description */}
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h2 className="text-2xl font-bold text-white flex items-center">
            <span className="text-red-600">R</span>EVELATION
          </h2>
          <p className="mt-4 text-lg text-left">
            The premier technical fest crafted by the Academic Society of Computer Engineers, Department of Computer Science and Technology at IIEST Shibpur.
          </p>
        </div>

        {/* Middle Section - Quick Links */}
        <div className="w-full md:w-1/4 text-left">
          <h3 className="text-lg font-semibold text-red-600">QUICK LINKS</h3>
          <ul className="mt-4 space-y-2">
            {["HOME", "EVENTS", "TEAM", "ABOUT US"].map((link, index) => (
              <li key={index} className="hover:text-red-400 transition duration-300 cursor-pointer">
                • {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section - Contact Info */}
        <div className="w-full md:w-1/3 text-left">
          <h3 className="text-lg font-semibold text-red-600">CONTACT INFO</h3>
          <p className="mt-6 text-sm">
            📍 Indian Institute of Engineering Science and Technology Shibpur, Howrah, West Bengal 711103 India
          </p>
          <p className="mt-2">📞 +91 9083045947</p>
          <p className="mt-2">📧 gs.cs@cs.iiests.ac.in</p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-sm mt-6 border-t border-gray-700 pt-4">
        © 2025 Revelation. All rights reserved.
      </div>

      {/* Social Media Icons - Positioned at Rightmost Side */}
      <div className="fixed bottom-[80px] right-14 flex flex-col space-y-3">
    {/* Facebook Icon */}
    <a 
      href="#" 
      className="bg-gray-800 p-4 rounded-full shadow-lg shadow-black relative hover:bg-red-500 transition duration-300 transform hover:scale-105 active:scale-"
      target="_blank" rel="noopener noreferrer"
    >
      <FaFacebookF className="text-white text-xl relative z-10" />
      <div className="absolute bottom-0 right-0 bg-black w-5 h-5 rounded-br-full transform rotate-45"></div>
    </a>

    {/* Instagram Icon */}
    <a 
      href="https://www.instagram.com/asce.iiests?igsh=MW95YmJmdzk4cG85Nw==" 
      className="bg-gray-800 p-4 rounded-full shadow-lg shadow-black relative hover:bg-red-500 transition duration-300 transform hover:scale-105 active:scale-95"
      target="_blank" rel="noopener noreferrer"
    >
      <FaInstagram className="text-white text-xl relative z-10" />
      <div className="absolute bottom-0 right-0 bg-black w-5 h-5 rounded-br-full transform rotate-45"></div>
    </a>

    {/* LinkedIn Icon */}
    <a 
      href="https://www.linkedin.com/company/academic-society-of-computer-engineers-asce-iiest-shibpur/posts/?feedView=all" 
      className="bg-gray-800 p-4 rounded-full shadow-lg shadow-black relative hover:bg-red-500 transition duration-300 transform hover:scale-105 active:scale-95"
      target="_blank" rel="noopener noreferrer"
    >
      <FaLinkedinIn className="text-white text-xl relative z-10" />
      <div className="absolute bottom-0 right-0 bg-black w-5 h-5 rounded-br-full transform rotate-45"></div>
    </a>
  </div>


      {/* Back to Top Button - Functional */}
      <div className="fixed bottom-4 right-6">
        <button 
          onClick={scrollToTop} 
          className="bg-red-600 p-2 rounded-full shadow-lg hover:bg-red-700 transition duration-300 flex items-center justify-center"
        >
          <img src={topArrow} alt="Back to Top" className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;