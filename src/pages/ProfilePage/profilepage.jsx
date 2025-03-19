import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import background from "../../assets/grid.png";
import { API_URL } from '../../config/config';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const ProfilePage = ({setToken}) => {
  const [request, setRequest] = useState([]);
  const [userData, setUserData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    name: '',
    phoneNumber: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [requestloading, setRequestLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUserData();
    fetchRequestData();
  }, []);

  const fetchUserData = async () => {
    const token = localStorage.getItem("Token");
    if (token) {
      try {
        const userResponse = await axios.get(`${API_URL}/api/auth/status`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        
        setUserData(userResponse.data.user);
        console.log(userResponse.data.user);
        setEditForm({
          name: userResponse.data.user.name,
          phoneNumber: userResponse.data.user.phoneNumber || ''
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setRequestLoading(false);
      }
    }
  };

  const fetchRequestData = async () => {
    // setLoading(true);
    const token = localStorage.getItem("Token");
    if (token) {
      try {
        const userResponse = await axios.get(`${API_URL}/api/users/get-requests`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        
        setRequest(userResponse.data);
        console.log(userResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }finally {
        setLoading(false);
      }
    }
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("Token");
    
    try {
      const response = await axios.put(
        `${API_URL}/api/users/update-profile`,
        editForm,
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      setUserData(response.data.user);
      console.log(response.data)
      setIsEditing(false);
      setError('');
    } catch (error) {
      setError(error.response?.data?.message || 'Error updating profile');
    }
  };

  const handleRequestReply = async (e,isAccepted,requestId) => {
    e.preventDefault();
    if(isAccepted!==undefined){
      const isConfirmed = window.confirm(`Are you sure you want to ${isAccepted?"accept":"decline"} request?`);
      if(!isConfirmed) return;
    }

    const token = localStorage.getItem("Token");
    try {
      const response = await axios.post(
        `${API_URL}/api/events/reply-request`,
        {
          requestId,
          isAccepted
        },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      console.log(response.data);
      window.location.reload();
    } catch (error) {
      setError(error.response?.data?.message || 'Error updating profile');
    }
  };

  const handleDeleteRequest= async(e, reqId)=>{
    e.preventDefault();
    const isConfirmed = window.confirm("Are you sure you want to delete request?");
    if(!isConfirmed) return;
    const token = localStorage.getItem("Token");
    try {
      const response = await axios.delete(
        `${API_URL}/api/requests/delete/${reqId}`,
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );

      console.log(response.data);
      // window.location.reload();
    } catch (error) {
      setError(error.response?.data?.message || 'Error updating profile');
    }
    fetchRequestData();
  }

  const handleLogout = () => {
    localStorage.removeItem("Token");
    setToken(null);
    navigate("/");
  };

  const renderRegisteredEvents = () => (
    <div className="registered-events">
      <div className="events-list">
         {userData.eventsRegistered.map((event) => (
              <div key={event.id._id} className="cursor-pointer bg-gray-800 border border-red-500 text-white p-3 rounded-md flex justify-between items-center w-full" onClick={() => navigate(`/event/${event.id._id}`)}>
                <span className="font-medium">{event.id.name}</span>
                <span className="text-sm text-gray-300">{event.team === true ? (
                  <>
                    <span className="team-label">Team:</span> {event.teamId.name}
                  </>
                ) : (
                  <span className="individual-label">Individual Registration</span>
                )}</span>
              </div>
          ))}

      </div>
    </div>
  );
  const renderYourRequests = () => (
    <div className="registered-events">
      <div className="events-list">
          {request.yourRequests.map((req) => (
              <div key={request.id} className="bg-gray-800 border border-red-500 text-white p-3 rounded-md flex max-sm:flex-wrap max-sm:justify-between items-center w-full">
                {console.log(req)}
                <span className="font-medium mr-5 max-sm:text-[10px]">{req.event.name}</span>
                <span className="text-sm mr-5 text-gray-300 max-sm:text-[10px]">{req.team.name}</span>
                <span className="text-sm mr-5 text-gray-300 max-sm:text-[10px]">{req.receiver.name}</span>
                <span className="text-sm mr-5 text-gray-300 max-sm:text-[10px]">{req.status.toUpperCase()}</span>
                <button className=" mr-4 bg-red-600 text-white px-5 py-2 rounded-lg border-2 border-red-600 transition-all duration-300 hover:bg-black hover:shadow-red-500 shadow-md max-sm:text-[10px] max-sm:px-2 max-sm:py-0" onClick={(e) => handleDeleteRequest(e, req._id)} >DELETE</button>
              </div>
          ))}
      </div>
    </div>
  );
  const rendermyRequests = () => (
    <div className="registered-events">
      <div className="events-list">
          {request.requestsForYou.map((req) => (
              <div key={request.id} className="bg-gray-800 border border-red-500 text-white p-3 rounded-md flex items-center w-full max-sm:flex-wrap max-sm:justify-between">
                {console.log(req)}
                <span className="font-medium mr-5 max-sm:text-[10px]">{req.event.name}</span>
                <span className="text-sm mr-5 text-gray-300 max-sm:text-[10px]">{req.team.name}</span>
                <span className="text-sm mr-8 text-gray-300 max-sm:text-[10px]">{req.sender.name}</span>
                {req.status==='pending'?<><button className=" mr-4 bg-green-600 text-white px-5 py-2 rounded-lg border-2 border-green-600 transition-all duration-300 hover:bg-black hover:shadow-red-500 shadow-md max-sm:text-[10px] max-sm:px-2 max-sm:py-0" onClick={(e) => handleRequestReply(e,true,req._id)}>
                Accept
                </button>
                <button className=" mr-4 bg-red-600 text-white px-5 py-2 rounded-lg border-2 border-red-600 transition-all duration-300 hover:bg-black hover:shadow-red-500 shadow-md max-sm:text-[10px] max-sm:px-2 max-sm:py-0" onClick={(e) => handleRequestReply(e,false,req._id)}>
                Decline
                </button></>:req.status.toUpperCase()}
              </div>
          ))}
      </div>
    </div>
  );

  if (loading || requestloading) return <div>Loading...</div>;
  if (!userData) return <div>Error loading profile</div>;

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center pt-20 p-4 overflow-hidden"
      style={{ backgroundImage: `url(${background})` }}
    >
      <Navbar userData={userData} />

      <div className="relative w-full max-w-lg p-6 rounded-lg mt-6 h-auto flex flex-col items-center">
        <div className="absolute inset-0 bg-red-600 rounded-lg blur-lg opacity-75 animate-pulse"></div>

        <div className="relative bg-gray-900 border-2 border-red-600 p-6 md:p-8 w-full rounded-lg text-center">
          <div className="w-24 h-24 md:w-28 md:h-28 mx-auto rounded-full bg-red-600 flex items-center justify-center text-white text-3xl font-bold">
          {userData.picture && (
              <img 
                src={userData.picture} 
                alt="Profile" 
                className="w-24 h-24 md:w-28 md:h-28 mx-auto rounded-full bg-red-600 flex items-center justify-center text-white text-3xl font-bold"
              />
            )}
          </div>

          <h2 className="text-xl md:text-2xl text-white font-bold mt-4">
            {userData ? userData.name : "Loading..."}
          </h2>
          <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm font-medium">
          {userData.email.endsWith('@students.iiests.ac.in') ? 'IIESTian' : 'Non-IIESTian'}
          </span>

          {!isEditing ? (
            <>
              <div className="mt-6 space-y-3">
                <div className="bg-gray-700 p-3 rounded-md text-sm md:text-base break-words">
                  <span className="font-semibold text-white">{userData ? "" : "Email:"} </span>
                  <span className="text-gray-300">{userData ? userData.email : "Loading..."}</span>
                </div>
               <div className="bg-gray-700 p-3 rounded-md text-sm md:text-base">
                  <span className="text-gray-300">{userData.phoneNumber ? userData.phoneNumber : "Phone : Not set"}</span>
                </div>
              </div>

              <button className="mt-6 mr-4 bg-red-600 text-white px-5 py-2 rounded-lg border-2 border-red-600 transition-all duration-300 hover:bg-black hover:shadow-red-500 shadow-md max-sm:py-1 max-sm:text-sm max-sm:px-1" onClick={() => setIsEditing(true)}>
                Edit Profile
              </button>
            <button className="mt-6 bg-red-600 text-white px-5 py-2 rounded-lg border-2 border-red-600 transition-all duration-300 hover:bg-black hover:shadow-red-500 shadow-md max-sm:py-1 max-sm:text-sm max-sm:px-1" onClick={handleLogout}>
              Logout
            </button>
        </>
          ) : (
            <form onSubmit={handleEditSubmit} className="edit-profile-form">
              <div className="mt-6 space-y-3 flex flex-col">
                  <input
                  type="text"
                  value={editForm.name}
                  onChange={(e) => setEditForm(prev => ({
                    ...prev,
                    name: e.target.value
                  }))}
                  required
                  placeholder="Enter your name"
                  className="bg-gray-700 p-3 rounded-md text-sm md:text-base text-white"
                />
               <input
                  type="tel"
                  value={editForm.phoneNumber}
                  onChange={(e) => setEditForm(prev => ({
                    ...prev,
                    phoneNumber: e.target.value
                  }))}
                  pattern="[0-9]{10}"
                  placeholder="Enter 10-digit phone number"
                  className="bg-gray-700 p-3 rounded-md text-sm md:text-base text-white"
                />
              </div>
              {error && <p className="error">{error}</p>}
              <button className="mt-6 mr-4 bg-red-600 text-white px-5 py-2 rounded-lg border-2 border-red-600 transition-all duration-300 hover:bg-black hover:shadow-red-500 shadow-md">
                Save Changes
              </button>
            <button className="mt-6 bg-red-600 text-white px-5 py-2 rounded-lg border-2 border-red-600 transition-all duration-300 hover:bg-black hover:shadow-red-500 shadow-md" onClick={() => {
                    setIsEditing(false);
                    setError('');
                  }}>
              Cancel
            </button>
            </form>
          )}
      </div>
      </div>
      <div className="mt-6 w-full max-w-lg flex flex-col items-center h-auto">
        <div className="w-full">
          <h2 className="text-lg font-bold text-red-500">My Registrations</h2>
          <div className="mt-3 space-y-2">
          {userData.eventsRegistered.length === 0 && <div className="bg-gray-800 border border-red-500 text-white p-3 rounded-md flex justify-center items-center w-full">
          <span className="font-medium">No Registrations</span>
            </div>}
          {userData.eventsRegistered.length > 0 && renderRegisteredEvents()}
          </div>
        </div>
        <div className="mt-6 w-full">
          <h2 className="text-lg font-bold text-red-500">Your Requests</h2>
          <div className="mt-3 space-y-2">
            {request.yourRequests.length>0 ? <div className="events-list">
              <div className="bg-gray-800 border border-red-500 text-white p-3 rounded-md flex items-center w-full max-sm:hidden">
                <span className="font-medium max-sm:text-sm mr-5">Event Name</span>
                <span className="text-sm max-sm:text-[10px] mr-5 text-gray-300">Team Name</span>
                <span className="text-sm max-sm:text-[10px] mr-20 text-gray-300">Requested Person Name</span>
                <span className="text-sm max-sm:text-[10px] mr-5 text-gray-300">Status</span>
                <span className="text-sm max-sm:text-[10px] mr-5 text-gray-300">Action</span>
              </div>
          </div>:<div className="bg-gray-800 border border-red-500 text-white p-3 rounded-md flex justify-center items-center w-full">
          <span className="font-medium">No Data</span>
            </div>}
            {request.yourRequests.length>0 && renderYourRequests()}
          </div>
        </div>
        <div className="mt-6 w-full">
          <h2 className="text-lg font-bold text-red-500">Requests for you</h2>
          <div className="mt-3 space-y-2">
            {request.requestsForYou.length>0?<div className="events-list">
              <div key={request.id} className="bg-gray-800 border border-red-500 text-white p-3 rounded-md flex items-center w-full max-sm:hidden">
                <span className="font-medium mr-5 max-sm:text-[10px]">Event Name</span>
                <span className="text-sm mr-5 text-gray-300 max-sm:text-[10px]">Team Name</span>
                <span className="text-sm mr-5 text-gray-300 max-sm:text-[10px]">Requesters Name</span>
                <span className="text-sm mr-5 text-gray-300 max-sm:text-[10px]">Accept/Decline</span>
              </div>
          </div>:<div className="bg-gray-800 border border-red-500 text-white p-3 rounded-md flex justify-center items-center w-full">
          <span className="font-medium">No Data</span>
            </div>}
            {request.requestsForYou.length>0 && rendermyRequests()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
