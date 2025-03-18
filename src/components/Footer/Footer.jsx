import topArrow from "../../assets/top-arrow.webp";
import facebookIcon from "../../assets/facebook.png";
import instagramIcon from "../../assets/instagram.png";
import linkedinIcon from "../../assets/linkedin.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const links = [{name:"HOME",to:"/"},{name:"EVENTS",to:"/events"},{name:"SPONSORS",to:"/#sponsors-section"},{name:"TEAM",to:"/teams"}];

  return (
    <footer className="bg-black text-gray-300 py-6 px-4 w-full mt-100px">
      <div className="container mx-auto flex flex-col md:flex-row flex-wrap justify-between items-start gap-6">
        
        {/* Left Section - Logo & Description */}
        <div className="w-full md:w-1/3 text-center md:text-left">
          <h2 className="text-2xl font-bold text-white flex justify-center md:justify-start">
            REVELATION
          </h2>
          <p className="mt-4 text-lg">
          The esteemed technical fest curated by the Academic Society of Computer Engineers, 
          Department of Computer Science and Technology, IIEST Shibpur.
          </p>
        </div>

        {/* Middle Section - Quick Links */}
        <div className="w-full md:w-1/4 text-center md:text-left">
          <h3 className="text-lg font-semibold text-red-600">QUICK LINKS</h3>
          <ul className="mt-4 space-y-2 flex flex-col">
            {links.map((link, index) => (
              <a href={link.to} key={`Link${index}`} className="hover:text-red-400 transition duration-300 cursor-pointer">
                {link.name}
              </a>
            ))}
          </ul>
        </div>

        {/* Right Section - Contact Info & Social Icons */}
        <div className="w-full md:w-1/3 flex flex-col md:flex-row justify-between items-center md:items-start">
          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-red-600">CONTACT INFO</h3>
            <p className="mt-6 text-sm">
              📍 Indian Institute of Engineering Science and Technology Shibpur, 
              Howrah, West Bengal 711103 India
            </p>
            <p className="mt-2">📞 +91 9830196251</p>
            <p className="mt-2">📧 gs.cs@cs.iiests.ac.in</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex flex-row md:flex-col gap-4 mt-6 md:mt-0 md:ml-16 md:pl-2">
            {[
              { img: facebookIcon, link: "https://www.facebook.com/revelationiiest?sfnsn=wiwspwa&mibextid=RUbZ1f", alt: "Facebook" },
              { img: instagramIcon, link: "https://www.instagram.com/asce.iiests?igsh=MW95YmJmdzk4cG85Nw==", alt: "Instagram" },
              { img: linkedinIcon, link: "https://www.linkedin.com/company/academic-society-of-computer-engineers-asce-iiest-shibpur/posts/?feedView=all", alt: "LinkedIn" }
            ].map((item, index) => (
              <a
              key={index}
              href={item.link}
              className="relative bg-gray-700 w-12 h-12 flex-shrink-0 rounded-full transition duration-300 flex items-center justify-center shadow-none 
                        hover:bg-red-600 hover:-translate-y-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img 
                src={item.img} 
                alt={item.alt} 
                className="w-10 h-10 hover:drop-shadow-[8px_8px_2px_black]" 
              />
            </a>
            ))}
          </div>
        </div>
      </div>

      {/* Red Line & Copyright */}
      <div className="mt-6">
        <div className="w-full h-[1px] bg-red-500 opacity-75"></div> {/* Single Red Line */}
        <div className="text-center text-sm pt-4">
          © 2025 Revelation. All rights reserved.
        </div>
      </div>

      {/* Back to Top Button */}
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
