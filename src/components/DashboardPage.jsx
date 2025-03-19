import React, { useState, useEffect } from "react";
import DashboardButton from "./DashboardButton.jsx";
import { FaUser  } from "react-icons/fa";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// import EventData from "../data/EventData.jsx";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { API_URL } from '../config/config';
import { responsiveFontSizes } from "@mui/material";
import Navbar from "./Navbar/Navbar.jsx";
import Footer from "./Footer/Footer.jsx";

const DashboardPage = ({Token, setToken}) => {
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
  const [phoneNumber, setPhoneNumber] = useState("");
  const { id } = useParams();
  if (!id) {
    return <h1>Loading...</h1>; // or redirect to a proper page
  }

  // const { id } = useParams();
  const [eventData, setEvent] = useState({backgroundImage: { url: '' }});


  useEffect(() => {
    fetchEvents();
    fetchParticipantsData();
  }, [id, userTeam, eventData.type]);

  useEffect(() => {
      fetchUserData();
      fetchPendingRequest();
    }, []);
    
  const fetchEvents = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/events/${id}`);
      setEvent(response.data.body);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  const [userData, setUserData] = useState(null);
  
  
  const token = localStorage.getItem("Token");
  const fetchUserData = async () => {
    if (token) {
      try {
        const userResponse = await axios.get(`${API_URL}/api/auth/status`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        
        setUserData(userResponse.data.user);
        console.log(userResponse.data.user);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };

  const [isPendingReq, setIsPendingReq]= useState(null);

  const fetchPendingRequest= async ()=>{
    if (token) {
      try {
        const userResponse = await axios.get(`${API_URL}/api/requests/pending-via-user/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if(userResponse.status===200){
          setIsPendingReq(userResponse.data.body);
        }else setIsPendingReq(false);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  }
  
  const [teamParticipants, setTeamParticipants] = useState(null);
  const [participantsData, setParticipantsData] = useState(null);
  const [teamsList, setTeamsList] = useState([]);
  const [myTeamSize, setMyTeamSize] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [individualData,setIndividualData] = useState([]);

  const fetchParticipantsData = async () => {
    if (token) {
      try {
        setIsLoading(true);
        const userResponse = await axios.get(`${API_URL}/api/events/${id}/participants`, {
          headers: { Authorization: `Bearer ${token}` },
        });        

        let responseData = userResponse.data.body;

        if (eventData.type === "Team" && userTeam) {
          if (responseData.teams.you && responseData.teams.you.length > 0) {
            const myTeam = responseData.teams.you[0];
            console.log("My team data:", myTeam);
            setTeamParticipants(myTeam);
            setParticipantsData(responseData);
            
            
          }
        }
        setTeamsList(responseData.teams.others || []);

        if (eventData.type === "Single" ) {
          if (responseData.individuals) {
            setIndividualData(responseData.individuals);
            console.log(responseData.individuals);

          }
        }

        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    }
  };

  console.log(eventData)
  console.log(userData)
  console.log(participantsData)
  console.log(userTeam)

  const [currentPage, setCurrentPage] = useState(1);
  const teamsPerPage = 10; // Number of teams per page

  const teams = [
    { name: "Alpha", members: ["Foobar1", "Foobar2", "Foobar3"], leader: "Random xyz" },
    { name: "Beta", members: ["MemberA", "MemberB", "MemberC", "MemberD"], leader: "Leader Beta" },
    { name: "Gamma", members: ["X1", "X2"], leader: "Gamma Leader" },
    { name: "Delta", members: ["D1", "D2", "D3", "D4"], leader: "Delta Leader" },
    { name: "Epsilon", members: ["E1", "E2", "E3"], leader: "Epsilon Leader" },
    { name: "Zeta", members: ["Z1", "Z2", "Z3"], leader: "Zeta Leader" },
    { name: "Eta", members: ["Eta1", "Eta2"], leader: "Eta Leader" },
    { name: "Theta", members: ["Theta1", "Theta2"], leader: "Theta Leader" },
  ];

  useEffect(() => {
    if (userData) { // Add check for userData
      setIsNonIIESTian(!userData.isIIESTian);
      setPaymentAmount(eventData.registrationAmount);
      setQrCode("/qr.jpg");
      if(userData.phoneNumber){
        setPhoneNumber(userData.phoneNumber);
      }
    }
  }, [userData, eventData]); // Add dependencies

  useEffect(() => {
    if (userData && userData.eventsRegistered) {
      const registration = userData.eventsRegistered.find(
        reg => reg.id._id === id
      );
      
      if (registration && registration.teamId) {
        setUserTeam({
          name: registration.teamId.name,
          members: registration.teamId.teamMembers,
          size: registration.teamId.teamMembers.length + 1,
          id: registration.teamId._id
        });
      }
    }
  }, [userData, id]);
  

  const handleCreateClick = () => {
    setShowForm((prev) => !prev);
  };

  const handleJoinClick = () => {
    setShowForm(false);
  };

  const handleScreenshotUpload = (e) => {
    setPaymentScreenshot(e.target.files[0]);
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    if (isNonIIESTian&&eventData.registrationAmount!==0 && !paymentScreenshot) {
      alert("Please upload a payment screenshot!");
      return;
    }
    if (!token) {
      alert("Please login first!");
      return;
    }
    if(phoneNumber.length!==10){
      alert("Please enter a valid phone number!");
      return;
    }
    let formData = new FormData();
    if(eventData.type==="Team"){
      const teamData={
        name: teamName,
        phoneNumber
      }
      formData.append("teamData", JSON.stringify(teamData));
    }
    else{
      const participantData={
        phoneNumber
      };
      formData.append("participantData", JSON.stringify(participantData));
    }
    formData.append("paymentProof", paymentScreenshot);

    const response = await axios.post(
      `${API_URL}/api/events/${id}/register`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      }
    );

    console.log(response.data);
    // alert(`Team "${teamName}" created successfully!`);
    setShowForm(false);
    setUserTeam({ name: teamName});
    setTeamName("");
    setPaymentScreenshot(null);

    fetchEvents();
    fetchParticipantsData();
    fetchUserData();

    window.location.reload();
  };
  const handleDeleteTeam =async (e, teamId) => {
    e.preventDefault();
    const isConfirmed = window.confirm("Are you sure you want to delete your Team?");
    if(!isConfirmed) return;

    const response = await axios.delete(
      `${API_URL}/api/teams/delete/${teamId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      }
    );

    console.log("DELETE TEAM RESPONSE", response.data);
    setUserTeam(null);

    fetchEvents();
    fetchParticipantsData();
    fetchUserData();
  };

  const toggleDropdown = (teamName) => {
    setExpandedTeam(expandedTeam === teamName ? null : teamName);
  };
  const dashName = `/event/${id}`;

  const filteredTeams = teams.filter((team) =>
    team.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    setCurrentPage(1); // Reset to first page on search
  }, [searchQuery]);

  const indexOfLastTeam = currentPage * teamsPerPage;
  const indexOffirstTeam = indexOfLastTeam - teamsPerPage;


  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const filteredTeamsList = teamsList.filter((team) => {
    const query = searchQuery.toLowerCase();
    return (
      team.name.toLowerCase().startsWith(query)
    );
  });

  const currentTeams = filteredTeamsList.slice(indexOffirstTeam, indexOfLastTeam);
  // Add these new states after other useState declarations
  const [memberSearchQuery, setMemberSearchQuery] = useState("");
  const [memberSearchResults, setMemberSearchResults] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [showSearchContainer, setShowSearchContainer] = useState(false);

  // Add this new function to fetch all users once
  const fetchAllUsers = async () => {
    let resp;
    if(token){
      try{
       resp=  await axios.get(`${API_URL}/api/auth/status`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        console.log(resp)
      }catch(error){
        console.error("Error fetching users:", error);
     }
    }
    if(token && resp.status===200){
        try {
          const response = await axios.get(`${API_URL}/api/users/${id}/get-all`, {
            headers: { Authorization: `Bearer ${token}` }
          });
          console.log("Raw users data:", response.data);
          if (Array.isArray(response.data.body)) {
            setAllUsers(response.data.body);
            console.log("Set users:", response.data.body);
          } else {
            console.error("Received data is not an array:", response.data);
          }
        } catch (error) {
          console.error("Error fetching users:", error);
        }
      }
  };

  // Add this useEffect after other useEffect declarations
  useEffect(() => {
    fetchAllUsers();
  }, []); // Run once when component mounts

  // Replace the searchMembers function with this new one
  const searchMembers = (query) => {
    console.log("Current query:", query);
    console.log("All users available:", allUsers);
    
    if (!query.trim()) {
      setMemberSearchResults([]);
      return;
    }

    const lowerQuery = query.toLowerCase();
    const filtered = allUsers.filter(user => 
      user?.email?.toLowerCase().startsWith(lowerQuery)
    );

    console.log("Filtered results:", filtered);
    setMemberSearchResults(filtered);
  };

  // Add this new function after your other function declarations
const handleSendRequest = async (userId, flag, teamId) => {
  try {
    // console.log(userId);
    if(flag!==undefined && !flag){
      alert("This member already have a pending request");
      return;
    }

    let pendingReq;
    if(eventData.type==="Team"){
      pendingReq= await axios.get(`${API_URL}/api/requests/pending/${teamId?teamId:userTeam.id}`);
      if((pendingReq.data.body.requests.length)+(pendingReq.data.body.team.teamMembers.length)+1>=eventData.teamSize.max){
        alert("Team is Full");
        return;
      }
    }

    const response = await axios.post(
      `${API_URL}/api/events/${id}/make-request`,
      {
        teamId: teamId===null?userTeam.id:teamId,
        userId: userId
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }
    );
    
    if (response.data) {
      alert("Request sent successfully!");
    }
  } catch (error) {
    console.error("Error sending request:", error);
    alert(error.response?.data?.message || "Failed to send request. Please try again.");
  }
};

  return (
    <>
    <Navbar Token={Token} setToken={setToken} />
    <div className="bg-[url('/grid.png')] bg-cover bg-center bg-fixed pt-[120px] pb-4">
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.9 }} // Start slightly below and scaled down
        animate={{ opacity: 1, y: 0, scale: 1 }} // Bring to normal position
        exit={{ opacity: 0, y: -20, scale: 0.9 }} // Animate out upwards
        transition={{ duration: 0.6, ease: "easeInOut" }} // Smooth transition
        className="bg-transparent text-white p-6 relative w-full max-w-4xl mx-auto"
      >
        <div className="relative w-full h-full mx-auto pb-5">
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
              href={eventData?.backgroundImage?.url || ''} // Add optional chaining and fallback
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid slice"
              clipPath="url(#clipper)"
              border="1 solid white"
              opacity="10%"
              stroke="#8D8D8D"
              strokeWidth="2"
            />
            <polygon
              points="0,0 900,0 900,1450 600,1450 500,1498 0,1498"
              fill="none"
              stroke="#8D8D8D"
              strokeWidth="2"
            />
          </svg>
          <div className="absolute left-10 top-[-15px] text-4xl font-bold bg-red-800 px-4 py-2 inline-block border-2 border-red-600 rounded-lg z-10 shadow-[0_0_10px_3px_white] transition-shadow duration-300 hover:shadow-[0_0_20px_6px_white] max-sm:text-[21px] max-sm:px-1 max-sm:left-5">
            {eventData.name}
          </div>

          <div className="relative z-10 p-6 h-full flex flex-col items-center gap-6">
            <div className="bg-red-800 px-4 py-2 inline-block border-2 border-red-600 mb-10 ml-8 mt-10 rounded-lg">
              <h1 className="text-2xl font-bold mb-0 text-white max-md:text-base text-center">Dashboard</h1>
            </div>
            <div className="absolute mt-10 right-0 max-md:mt-[-35px] max-md:right-[-20px]">
              <Link to={dashName}>
                <DashboardButton content="Event " />
              </Link>
            </div>

            {!userTeam ? (
              <>
              {console.log(isPendingReq)}
              {!isPendingReq && eventData.type==="Team" && eventData.isRegistrationOpen &&
              <div className="self-start ">
                <DashboardButton link="#" content= "Create a Team" onClick={handleCreateClick} />
              </div>
              }
              </>
            ) : (
              <>
                <div className="bg-black text-white p-1 rounded-lg border border-red-500 mb-2 w-[105%] ml-10">
                  {isLoading ? (
                    <div className="text-center py-4">Loading team data...</div>
                  ) : teamParticipants ? (
                    <div className="flex items-center justify-between flex-wrap">
                      <span className="ml-3 text-sm md:text-base">{teamParticipants.name}</span>
                      <span className="flex items-center">
                        <FaUser className="text-red-500 mr-1" />
                        <span className="text-sm md:text-base max-sm:mr-4">
                          {(teamParticipants.teamMembers?.length || 0) + 1} Members
                        </span>
                      </span>
                      <div className="flex items-center max-sm:w-full">
                        {userData && teamParticipants.teamLeader._id === userData._id && eventData.isRegistrationOpen && (
                          <div className="w-full flex flex-row justify-between max-sm:my-1" >
                            <button 
                              className="bg-red-500 hover:bg-red-700 text-white px-4 rounded-lg mr-4 text-sm ml-2 max-sm:mt-1 max-sm:mb-1 max-sm:text-[10px] max-sm:px-2" 
                              onClick={() => setShowSearchContainer(!showSearchContainer)}
                            >
                              ADD
                            </button>
                            <button 
                              className="bg-red-500 hover:bg-red-700 text-white px-4 max-sm:px-2 rounded-lg text-sm max-sm:text-[10px] mr-2 max-sm:mt-1 max-sm:mb-1" 
                              onClick={(e) => handleDeleteTeam(e, teamParticipants._id)}
                            >
                              DELETE TEAM
                            </button>
                          </div>
                        )}
                        <button onClick={() => toggleDropdown(userTeam.name)} className="ml-2 text-white max-sm:absolute max-sm:top-[180px] max-sm:right-0">
                          {expandedTeam === userTeam.name ? <FiChevronUp /> : <FiChevronDown />}
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-4">Error loading team data</div>
                  )}

                  {/* Team members dropdown */}
                  {expandedTeam === userTeam.name && teamParticipants && (
                    <div className="mt-2 bg-black p-3 rounded-lg flex flex-col items-start">
                      <div>
                        <p><strong>Team Leader:</strong> {teamParticipants.teamLeader.name}</p>
                      </div>
                      <div>
                        <p><strong>Members:</strong></p>
                        <ul className="ml-4 list-disc">
                          {teamParticipants.teamMembers && teamParticipants.teamMembers.length > 0 ? 
                            teamParticipants.teamMembers.map((member, i) => (
                              <li key={i}>{member.name}</li>
                            ))
                            : <div>No Members</div>
                          }
                        </ul>
                      </div>
                    </div>
                  )}
                </div>

                {/* Search container outside the team card */}
                {showSearchContainer && userData && teamParticipants.teamLeader._id === userData._id && (
                  <div className="w-[105%] ml-10 bg-black p-4 rounded-lg border border-red-500 mt-4">
                    <input
                      type="text"
                      placeholder="Search by email..."
                      value={memberSearchQuery}
                      onChange={(e) => {
                        setMemberSearchQuery(e.target.value);
                        searchMembers(e.target.value);
                      }}
                      className="w-full p-2 rounded-lg bg-gray-800 text-white border border-red-500"
                    />
                    <div className="relative">
                      {memberSearchResults.length > 0 && (
                        <div className="mt-2 max-h-48 overflow-y-auto bg-gray-800 border border-red-500 rounded-lg custom-scrollbar">
                          {memberSearchResults.map((user, index) => (
                            <div 
                              key={user._id || index}
                              className="p-2 hover:bg-gray-700 text-white border-b border-gray-700 last:border-b-0 flex max-sm:flex-col max-sm:items-center justify-between items-center"
                            >
                              <div className="flex flex-col justify-center">
                                <div className="font-medium max-sm:text-[10px]">{user.name}</div>
                                <div className="text-sm text-gray-400 max-sm:text-[10px]">{user.email}</div>
                              </div>
                              {user._id !== userData._id && (
                                <button
                                  onClick={() => {
                                    handleSendRequest(user._id, user.flag, null);
                                    setShowSearchContainer(false);
                                  }}
                                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm transition-colors"
                                >
                                  Send Request
                                </button>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                      {memberSearchQuery && memberSearchResults.length === 0 && (
                        <div className="mt-2 p-2 bg-gray-800 border border-red-500 rounded-lg text-white text-center">
                          No results found
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </>
            )}

          {eventData.type === "Single" && (
              <>
                {eventData.isRegistrationOpen && (!individualData.find((user)=>(user._id)===userData._id)) ? <div className="self-start">
                  <DashboardButton link="#" content= "Register" onClick={handleCreateClick} />
                </div>:<p>Already registered</p>}
              </>
            )}
            {showForm && (
              <form onSubmit={handleSubmit} className="mt-10 bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-md">
                {eventData.type==='Team' && <><label className="block text-lg mb-2 font-semibold">Enter Team Name:</label>
                <input
                  type="text"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  required
                  className="w-full p-2 border rounded-md text-black mb-2"
                  placeholder="Team Name"
                /></>}
                {!userData.phoneNumber &&
                <>
                <label className="block text-lg mb-2 font-semibold">Enter your phone number:</label>
                <input
                  type="phone"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                  className="w-full p-2 border rounded-md text-black"
                  placeholder="Phone Number"
                />
                </>}
                {/* Payment Section for Non-IIESTians */}
                {isNonIIESTian &&( eventData.registrationAmount!==0 && (
                  <div className="mt-4">
                    <p className="text-yellow-400 text-sm mb-2">
                      Pay <strong>₹{paymentAmount}</strong> using the QR code below and upload the payment screenshot.
                    </p>
                    <p className="text-yellow-400 text-sm mb-2">
                      Add event name in the notes while paying.
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
                ))}

                <button
                  type="submit"
                  className="mt-4 w-full bg-red-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
                >
                  Register
                </button>
              </form>
            )}

            {eventData.type === "Single" && (
              <>
                {individualData.length>0 && <div className="ml-3 text -sm md:text-base">All Participants</div>}
                {individualData.map((indiv,index)=>   <div key={`individual${index}`} className="w-full flex items-center justify-between flex-wrap">
                <div className=" flex justify-between items-center bg-black text-white p-2  rounded-lg border border-red-500 mb-2 w-full">
                      <span className="ml-3 text-sm md:text-base">{indiv.email}</span>    
                      {indiv._id===userData._id &&
                      <span className="mr-3 text-3xl text-red-500">*</span>
                      }
                </div>
                  </div>)}
              </>
            )}

            {/* Join Team Button  */}
            {
              eventData.type === "Team" && !userTeam && 
             (eventData.isRegistrationOpen ? <div className="self-start mt-20">
                <DashboardButton link="#" content={isPendingReq?"pending request (check profile)":"Join a Team"} onClick={handleJoinClick} />
              </div>:<div className="self-start mt-20">
                <DashboardButton link="#" content="Registrations are Not Live" onClick={handleJoinClick} />
              </div>)
            }

            {/* Search Bar */}
           { teamsList.length>0 &&
            <div className="mt-6 w-full flex flex-col justify-center">
              <input
                type="text"
                placeholder="Search for a team..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-50 p-2 border rounded-md text-black self-center mb-5"
              />
              {currentTeams.length > 0 ? (
                <ul className="mt-2 text-white">
                  {currentTeams.map((team, index) => (
                    <li key={index} className="bg-black text-white p-1 rounded-lg border border-red-500 mb-2 ml-2">
                      <div className="flex items-center justify-between flex-wrap">
                        <span className="">{indexOffirstTeam+index + 1}.{team.name}</span>
                        <span className="flex items-center">
                          <FaUser className="text-red-500 mr-1" />
                          <span className="text-sm md:text-base">
                            {team.teamMembers.length + 1} Member{team.teamMembers.length === 0 ? "" : "s"}
                          </span>
                        </span>
                        <div className="flex items-center">
                          { !userTeam && userData?.isIIESTian===team.teamLeader?.isIIESTian && eventData.isRegistrationOpen && !isPendingReq &&(
                            <button className="bg-red-500 hover:bg-red-700 text-white px-4 rounded-lg text-sm"  onClick={() => handleSendRequest(team.teamLeader._id, undefined, team._id)}>
                              JOIN
                            </button>
                          )}
                          <button onClick={() => toggleDropdown(team.name)} className="ml-2 text-white">
                            {expandedTeam === team.name ? <FiChevronUp /> : <FiChevronDown />}
                          </button>
                        </div>
                      </div>
                  
                      {expandedTeam === team.name && (
                        <div className="mt-2 bg-black p-3 rounded-lg flex flex-col items-start">
                          <div>
                            <p><strong>Team Leader:</strong> {team.teamLeader.name}</p>
                          </div>
                          <div>
                            <p><strong>Members:</strong></p>
                            <ul className="ml-4 list-disc">
                              {team.teamMembers.length > 0 ? 
                                team.teamMembers.map((member, i) => (
                                  <li key={i}>{member.name}</li>
                                ))
                                : (
                                  <div className="text-white text-center">
                                    {team.teamMembers.length===0 ? "No Members" : "Loading teams..."}
                                  </div>
                                )}
                            </ul>
                          </div>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="text-white text-center">
                  {searchQuery ? "No teams found matching your search" : "Loading teams..."}
                </div>
              )}
              {/* Pagination Controls */}
              <div className="flex justify-center mt-4 space-x-2 mb-4">
                <button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`px-3 py-1 border-2 rounded-lg ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "border-red-600 hover:bg-red-600"}`}
                >
                  Prev
                </button>

                {Array.from({ length: Math.ceil(filteredTeamsList.length / teamsPerPage) }, (_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => paginate(i + 1)}
                    className={`px-3 py-1 border-2 rounded-lg ${currentPage === i + 1 ? "bg-red-600" : "border-red-600 hover:bg-red-600"}`}
                  >
                    {i + 1}
                  </button>
                ))}

                <button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={indexOfLastTeam >= filteredTeams.length}
                  className={`px-3 py-1 border-2 rounded-lg ${indexOfLastTeam >= filteredTeams.length ? "opacity-50 cursor-not-allowed" : "border-red-600 hover:bg-red-600"}`}
                >
                  Next
                </button>
              </div>
            </div>
            }
          </div>
        </div>
      </motion.div>
    </div>
    <Footer/>
    </>
  );
};

export default DashboardPage;