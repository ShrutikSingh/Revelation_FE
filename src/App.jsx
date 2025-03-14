
import {BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import EventPage from './pages/EventPage/EventPage'
import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import './App.css'
import Rules from './components/Rules.jsx'
import EventBoard from './components/EventBoard.jsx'
import DashboardPage from "./components/DashboardPage.jsx"
import TeamPage from './pages/TeamPage/TeamPage.jsx'
import ProfilePage from './pages/ProfilePage/ProfilePage.jsx'
function App() {
  const eventData = {
    title: "CODESTORM",
    venue: "CSD-205 Seminar Hall",
    prize: "INR 4K", 
    time: "05:00 PM - 07:00 PM",
    date: "10th March, 2025",
    description:
      "Gear up with your laptops and get ready for the second edition of Fresher’s Contest presented by CodeIIEST. Whether you conquered the first edition or are just stepping into CP, this contest is for YOU! Step into the limelight, capture the beauty of coding and most importantly have fun racking your brains!",
    registerTeam: "/team-register",
    joinTeam: "/solo-register",
    dashboardLink: "/dashboard",
    imageUrl: "/event-image.jpg",
    bgUrl: "/Ganitam.jpg",
    dayText: "DAY 1",
  };

  return ( 
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path= "/events" element = {<EventPage />} />
        <Route path="/individualeventpage" element={<><EventBoard eventData={eventData} /> <Rules /> </>} />
        <Route path="/dashboard" element={<DashboardPage eventData={eventData}/>} />
        <Route path="/teams" element={<TeamPage />} />
        {/* <Route path="/profile" element={<ProfilePage />} /> */}
      </Routes>
    </div>
  )
}

export default App;
