import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import EventsPage from "./pages/EventPage/EventPage.jsx";
import TeamLeadsPage from "./pages/TeamPage/TeamPage.jsx";
import UserDashboard from "./components/DashboardPage.jsx";
import EventDetailsPage from "./components/EventBoard.jsx";
import EventRules from "./components/Rules.jsx";
import "./App.css";
import ProfilePage from "./pages/ProfilePage/profilepage.jsx";

const eventDetails = {
  title: "CODESTORM",
  venue: "CSD-205 Seminar Hall",
  prize: "INR 4K",
  time: "05:00 PM - 07:00 PM",
  date: "10th March, 2025",
  description:
    "Gear up with your laptops and get ready for the second edition of Fresher’s Contest presented by CodeIIEST. Whether you conquered the first edition or are just stepping into CP, this contest is for YOU! Step into the limelight, capture the beauty of coding and most importantly have fun racking your brains!",
  teamRegistrationLink: "/register-team",
  soloRegistrationLink: "/register-solo",
  dashboardLink: "/dashboard",
  eventImage: "/event-image.jpg",
  background: "/Ganitam.jpg",
  day: "DAY 1",
};

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route
          path="/event-details"
          element={
            <>
              <EventDetailsPage eventData={eventDetails} />
              <EventRules />
            </>
          }
        />
        <Route path="/dashboard" element={<UserDashboard eventData={eventDetails} />} />
        <Route path="/teams" element={<TeamLeadsPage />} />
      </Routes>
    </div>
  );
}

export default App;
