import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import EventsPage from "./pages/EventPage/EventPage.jsx";
import TeamLeadsPage from "./pages/TeamPage/TeamPage.jsx";
import UserDashboard from "./components/DashboardPage.jsx";
import EventDetailsPage from "./components/EventBoard.jsx";
import EventRules from "./components/Rules.jsx";
import "./App.css";
import { useState,useEffect } from "react";
import ProfilePage from "./pages/ProfilePage/profilepage.jsx";
import PageNotFound from "./pages/PageNotFound/PageNotFound.jsx";
// import IndividualEvent from "./pages/IndividualEvent/IndividualEvent.jsx";
import DashboardPage from "./components/DashboardPage.jsx";
import Faqs from "./pages/FAQs/Faqs.jsx";
import Login from "./components/Login/Login.jsx"


// const eventDetails = {
//   title: "CODESTORM",
//   venue: "CSD-205 Seminar Hall",
//   prize: "INR 4K",
//   time: "05:00 PM - 07:00 PM",
//   date: "10th March, 2025",
//   description:
//     "Gear up with your laptops and get ready for the second edition of Fresher’s Contest presented by CodeIIEST. Whether you conquered the first edition or are just stepping into CP, this contest is for YOU! Step into the limelight, capture the beauty of coding and most importantly have fun racking your brains!",
//   teamRegistrationLink: "/register-team",
//   soloRegistrationLink: "/register-solo",
//   dashboardLink: "/dashboard",
//   eventImage: "/event-image.jpg",
//   background: "/Ganitam.jpg",
//   day: "DAY 1",
// };

function App() {

  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) setToken(storedToken);
  }, []);

  console.log(token);

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage Token={token} setToken={setToken} />} />
        <Route path="/events" element={<EventsPage Token={token} setToken={setToken}/>} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/profile" element={<ProfilePage setToken={setToken} />} />
        <Route path="/event/:id" element={
          <div className="bg-[url('/grid.png')] bg-cover bg-center bg-fixed">
            <EventDetailsPage />
            <EventRules />
          </div>
        } />
        <Route path="/dashboard/:id" element={<UserDashboard  Token={token} setToken={setToken}/>} />
        <Route path="/teams" element={<TeamLeadsPage Token={token} setToken={setToken} />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
