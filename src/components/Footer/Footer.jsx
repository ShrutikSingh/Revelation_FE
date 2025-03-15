import topArrow from "../../assets/top-arrow.webp";
import facebookIcon from "../../assets/facebook.png";
import instagramIcon from "../../assets/instagram.png";
import linkedinIcon from "../../assets/linkedin.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-black text-gray-300 py-6 px-4 w-full">
      <div className="container mx-auto flex flex-col md:flex-row flex-wrap justify-between items-start gap-6">
        
        {/* Left Section - Logo & Description */}
        <div className="w-full md:w-1/3 text-center md:text-left">
          <h2 className="text-2xl font-bold text-white flex justify-center md:justify-start">
            <span className="text-red-600">R</span>EVELATION
          </h2>
          <p className="mt-4 text-lg">
            The premier technical fest crafted by the Academic Society of Computer Engineers, 
            Department of Computer Science and Technology at IIEST Shibpur.
          </p>
        </div>

        {/* Middle Section - Quick Links */}
        <div className="w-full md:w-1/4 text-center md:text-left">
          <h3 className="text-lg font-semibold text-red-600">QUICK LINKS</h3>
          <ul className="mt-4 space-y-2">
            {["HOME", "EVENTS", "SPONSORS", "TEAM", "ABOUT US"].map((link, index) => (
              <li key={index} className="hover:text-red-400 transition duration-300 cursor-pointer">
                {link}
              </li>
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
            <p className="mt-2">📞 +91 9083045947</p>
            <p className="mt-2">📧 gs.cs@cs.iiests.ac.in</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex flex-col space-y-4 mt-6 md:mt-0 md:ml-10 md:pl-6">
  {[
    { icon: facebookIcon, link: "https://www.facebook.com/revelationiiest?sfnsn=wiwspwa&mibextid=RUbZ1f", alt: "Facebook" },
    { icon: instagramIcon, link: "https://www.instagram.com/asce.iiests?igsh=MW95YmJmdzk4cG85Nw==", alt: "Instagram" },
    { icon: linkedinIcon, link: "https://www.linkedin.com/company/academic-society-of-computer-engineers-asce-iiest-shibpur/posts/?feedView=all", alt: "LinkedIn" }
  ].map((item, index) => (
    <a
      key={index}
      href={item.link}
      className="relative bg-gray-700 p-1 rounded-full transition duration-300 flex items-center justify-center shadow-none 
                hover:bg-red-600 hover:-translate-y-1"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={item.icon} alt={item.alt} className="w-10 h-10 drop-shadow-md hover:drop-shadow-lg" />
    </a>
  ))}
</div>

        </div>
      </div>

      {/* Red Line & Copyright */}
      <div className="mt-6">
        <div className="w-full h-[0.5px] bg-red-500 opacity-75 mb-4"></div> {/* Thin Red Line */}
        <div className="text-center text-sm border-t border-gray-700 pt-4">
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
