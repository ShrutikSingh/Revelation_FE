import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import background from "../../assets/grid.png";

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);
  const [registeredEvents, setRegisteredEvents] = useState([]);
  const [joinRequests, setJoinRequests] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setUserData({
        name: "ABC",
        email: "abc@gmail.com",
        phone: "Not set",
        role: "IIESTian",
      });

      setRegisteredEvents([
        { id: 1, name: "Alpha", members: 4 },
        { id: 2, name: "Beta", members: 5 },
        { id: 3, name: "Gamma", members: 3 },
      ]);

      setJoinRequests([
        { id: 4, name: "Delta", members: 2 },
        { id: 5, name: "Epsilon", members: 6 },
      ]);
    }, 1000);
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center pt-20 p-4"
      style={{ backgroundImage: `url(${background})` }}
    >
      <Navbar userData={userData} />

      <div className="relative w-full max-w-lg p-6 rounded-lg mt-6 h-auto flex flex-col items-center">
        <div className="absolute inset-0 bg-red-600 rounded-lg blur-lg opacity-75 animate-pulse"></div>

        <div className="relative bg-gray-900 border-2 border-red-600 p-6 md:p-8 w-full rounded-lg text-center">
          <div className="w-24 h-24 md:w-28 md:h-28 mx-auto rounded-full bg-red-600 flex items-center justify-center text-white text-3xl font-bold">
            {userData?.name ? userData.name.charAt(0).toUpperCase() : "?"}
          </div>

          <h2 className="text-xl md:text-2xl text-white font-bold mt-4">
            {userData ? userData.name : "Loading..."}
          </h2>
          <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm font-medium">
            {userData ? userData.role : "Loading..."}
          </span>

          <div className="mt-6 space-y-3">
            <div className="bg-gray-700 p-3 rounded-md text-sm md:text-base">
              <span className="font-semibold text-white">Email: </span>
              <span className="text-gray-300">{userData ? userData.email : "Loading..."}</span>
            </div>
            <div className="bg-gray-700 p-3 rounded-md text-sm md:text-base">
              <span className="font-semibold text-white">Phone: </span>
              <span className="text-gray-300">{userData ? userData.phone : "Loading..."}</span>
            </div>
          </div>

          <button className="mt-6 bg-red-600 text-white px-5 py-2 rounded-lg border-2 border-red-600 transition-all duration-300 hover:bg-black hover:shadow-red-500 shadow-md">
            Edit Profile
          </button>
        </div>
      </div>

      <div className="mt-6 w-full max-w-lg flex flex-col items-center h-auto">
        <div className="w-full">
          <h2 className="text-lg font-bold text-red-500">Registered Events</h2>
          <div className="mt-3 space-y-2">
            {registeredEvents.map((event) => (
              <div key={event.id} className="bg-gray-800 border border-red-500 text-white p-3 rounded-md flex justify-between items-center w-full">
                <span className="font-medium">{event.name}</span>
                <span className="text-sm text-gray-300">{event.members} Members</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 w-full">
          <h2 className="text-lg font-bold text-red-500">Join Requests</h2>
          <div className="mt-3 space-y-2">
            {joinRequests.map((request) => (
              <div key={request.id} className="bg-gray-800 border border-red-500 text-white p-3 rounded-md flex justify-between items-center w-full">
                <span className="font-medium">{request.name}</span>
                <span className="text-sm text-gray-300 ml-2">{request.members} Members</span>
                <button className="bg-red-600 text-white px-4 py-1 rounded-lg border-2 border-red-600 transition-all duration-300 hover:bg-black hover:shadow-red-500 shadow-md">
                  JOIN
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
