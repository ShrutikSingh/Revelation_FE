import React, { useState, useEffect } from "react";
import DashboardButton from "./DashboardButton.jsx";
import { FaUserFriends} from "react-icons/fa";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import {motion} from "framer-motion";
import { Link } from "react-router-dom";
import EventData from "../data/EventData.jsx";
import { useParams } from "react-router-dom";


const DashboardPage = () => {


  const [showForm, setShowForm] = useState(false);
  const [teamName, setTeamName] = useState("");
  const [isNonIIESTian, setIsNonIIESTian] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState(0);
  const [paymentScreenshot, setPaymentScreenshot] = useState(null);
  const [qrCode, setQrCode] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedTeam, setExpandedTeam] = useState(null);
  const [userTeam, setUserTeam] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const {eventName} = useParams();
    if (!eventName) {
        return <h1>Loading...</h1>;  // or redirect to a proper page
    }
    

    
    const eventData = EventData.find(event => event.title.replace(/\s+/g,"-").toLowerCase() === eventName.toLowerCase())
    // Need to fetch the complete data of event from the backend or we can just give it here 
    if (!eventData) {
        return <h1>Event Not Found</h1>;
    }
  
  const teams = [
    { 
      name: "Alpha", 
      members: ["Foobar1", "Foobar2", "Foobar3"], 
      leader: "Random xyz" 
    },
    { 
      name: "Beta", 
      members: ["MemberA", "MemberB", "MemberC", "MemberD"], 
      leader: "Leader Beta" 
    },
    { 
      name: "Gamma", 
      members: ["X1", "X2"], 
      leader: "Gamma Leader" 
    }
  ];

  useEffect(() => {
    // Using demo data instead of fetching from backend
    const demoData = {
      isNonIIESTian: false, // Change to false to test
      paymentAmount: 200,
      qrCode: "qr.png",
    };

    setIsNonIIESTian(demoData.isNonIIESTian);
    setPaymentAmount(demoData.paymentAmount);
    setQrCode(demoData.qrCode);
  }, []);

  const handleCreateClick = () => {
    setShowForm((prev) => !prev);
  };

  const handleJoinClick = () => {
    setShowForm(false);
  };

  const handleScreenshotUpload = (e) => {
    setPaymentScreenshot(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isNonIIESTian && !paymentScreenshot) {
      alert("Please upload a payment screenshot!");
      return;
    }
    alert(`Team "${teamName}" created successfully!`);
    setShowForm(false);
    setUserTeam({ name: teamName, members: ["You","sf"] });
    setTeamName("");
    setPaymentScreenshot(null);
  };

  const toggleDropdown = (teamName) => {
    setExpandedTeam(expandedTeam === teamName ? null : teamName);
  };
  const dashName = "/event/"+eventData.title.replace(/\s+/g,"-").toLowerCase();

  return (
    <motion.div initial={{ opacity: 0, y: 20, scale: 0.9 }} // Start slightly below and scaled down
    animate={{ opacity: 1, y: 0, scale: 1 }} // Bring to normal position
    exit={{ opacity: 0, y: -20, scale: 0.9 }} // Animate out upwards
    transition={{ duration: 0.6, ease: "easeInOut" }} // Smooth transition
    className="bg-transparent text-white p-6 relative w-[900px] h-[1500px] mx-auto">
      <div className="relative w-full max-w-4xl h-full mx-auto">
        <svg
          className="absolute top-5 left-0 w-full h-full z-0"
          viewBox="0 0 900 1500"
          preserveAspectRatio="none"
        >
          <polygon
            points="0,0 900,0 900,1450 620,1450 520,1498 0,1498"
            className="fill-black-600"
            stroke="#8D8D8D"
            strokeWidth="2"
          />
        </svg>


        <svg
          className="absolute top-0 left-5 w-full h-full z-10 fill-black-600"
          viewBox="0 0 900 1500"
          preserveAspectRatio="none"
        >
          <clipPath id="clipper">
            <polygon points="0,0 900,0 900,1450 600,1450 500,1498 0,1498" />
          </clipPath>
          <rect width="100%" height="100%" fill="black" clipPath="url(#clipper)" />
          <image
                        href={eventData.bgUrl}
                        width="100%"
                        height="100%"
                        preserveAspectRatio="xMidYMid slice"
                        clipPath="url(#clipper)"
                        border="1 solid white"
                        opacity="10%"
                        stroke="#8D8D8D" strokeWidth="2"
                    />
          <polygon
            points="0,0 900,0 900,1450 600,1450 500,1498 0,1498"
            fill="none"
            stroke="#8D8D8D"
            strokeWidth="2"
          />
        </svg>
        <div className="absolute left-10 top-[-15px] text-4xl font-bold bg-red-800 px-4 py-2 inline-block border-2 border-red-600 rounded-lg z-10">
            {eventData.title}
          </div>

        
        <div className="relative z-10 p-6 h-full flex flex-col items-center">
          <div className="bg-red-800 px-4 py-2 inline-block border-2 border-red-600 mb-10 ml-20 mt-10 rounded-lg"><h1 className="text-2xl font-bold mb-0 text-white">Dashboard</h1></div>
          <div className="absolute mt-10 right-0"><Link to={dashName}>
                  <DashboardButton  content="Event " />
                </Link></div>


          {!userTeam ? (

                <div className="self-start">

                  <DashboardButton link="#" content="Create a Team" onClick={handleCreateClick} />

                </div>

                ) : (

                  <div  className="bg-black text-white p-1 rounded-lg border border-red-500 mb-2 w-full">
                        <div className="flex items-center justify-between">
                        <span className="ml-3">{userTeam.name}</span>
                        <span className="flex absolute left-80">
                            <FaUserFriends className="text-red-500 mr-1" /> {userTeam.members.length} Member{userTeam.members.length===1?"":"s"}
                        </span>
                        <div className="flex items-center">
                            <button className="bg-red-500 hover:bg-red-700 text-white px-4 rounded-lg text-sm" onClick={() => setShowSearch(!showSearch)}>
                            ADD
                            </button>
                            <button onClick={() => toggleDropdown(userTeam.name)} className="ml-2 text-white">
                            {expandedTeam === userTeam.name ? <FiChevronUp /> : <FiChevronDown />}
                            </button>
                        </div>
                        </div>
                        {/* search bar for team members */}
        {showSearch && (
          <div className="mt-2">
            <input
              type="text"
              placeholder="Search for members..."
              className="w-full p-2 rounded-lg bg-gray-800 text-white border border-red-500"
            />
          </div> )}

                        {/* Dropdown content for the team  */}
                        {expandedTeam === userTeam.name && (
                        <div className="mt-2 bg-black p-3 rounded-lg flex flex-col items-start">
                            <div><p><strong>Team Leader:</strong> {userTeam.members[0]}</p>
                            </div>
                            <div><p><strong>Members:</strong></p>
                            <ul className="ml-4 list-disc">
                            {userTeam.members.map((member, i) => (
                                <li key={i}>{member}</li>
                            ))}
                            </ul>
                            </div>
                        </div>
                        )}
                    </div>

                )}





          
          {showForm && (
            <form onSubmit={handleSubmit} className="mt-10 bg-gray-800 p-6 rounded-lg shadow-md w-180">
              <label className="block text-lg mb-2 font-semibold">Enter Team Name:</label>
              <input
                type="text"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                required
                className="w-full p-2 border rounded-md text-black"
                placeholder="Team Name"
              />

              {/* Payment Section for Non-IIESTians */}
              {isNonIIESTian && (
                <div className="mt-4">
                  <p className="text-yellow-400 text-sm mb-2">
                    Pay <strong>₹{paymentAmount}</strong> using the QR code below and upload the payment screenshot.
                  </p>
                  {qrCode && <img src={qrCode} alt="Payment QR Code" className="w-32 mx-auto mb-4" />}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleScreenshotUpload}
                    required
                    className="w-full p-2 border rounded-md text-black"
                  />
                </div>
              )}

              <button
                type="submit"
                className="mt-4 w-full bg-red-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
              >
                Submit
              </button>
            </form>
          )}

          {/* Join Team Button  */}
          <div className="self-start mt-20">
            <DashboardButton link="#" content="Join a Team" onClick={handleJoinClick} />
          </div>

          {/* Search Bar */}
          <div className="mt-6 w-full">
            <input
              type="text"
              placeholder="Search for a team..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-50 p-2 border rounded-md text-black"
            />
            <ul className="mt-2 text-white">
                {teams
                    .filter((team) => team.name.toLowerCase().includes(searchQuery.toLowerCase()))
                    .map((team, index) => (
                    <li key={index} className="bg-black text-white p-1 rounded-lg border border-red-500 mb-2">
                        <div className="flex items-center justify-between">
                        <span className="">{index + 1}. {team.name}</span>
                        <span className="flex absolute left-80">
                            <FaUserFriends className="text-red-500 mr-1" /> {team.members.length + 1} Members
                        </span>
                        <div className="flex items-center">
                            <button className="bg-red-500 hover:bg-red-700 text-white px-4 rounded-lg text-sm">
                            JOIN
                            </button>
                            <button onClick={() => toggleDropdown(team.name)} className="ml-2 text-white">
                            {expandedTeam === team.name ? <FiChevronUp /> : <FiChevronDown />}
                            </button>
                        </div>
                        </div>

                        {expandedTeam === team.name && (
                        <div className="mt-2 bg-black p-3 rounded-lg flex flex-col items-start">
                            <div><p><strong>Team Leader:</strong> {team.leader}</p>
                            </div>
                            <div><p><strong>Members:</strong></p>
                            <ul className="ml-4 list-disc">
                            {team.members.map((member, i) => (
                                <li key={i}>{member}</li>
                            ))}
                            </ul>
                            </div>
                        </div>
                        )}
                    </li>
                    ))}
                </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DashboardPage;

