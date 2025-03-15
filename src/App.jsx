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

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/event/:id" element={
          <div className="bg-[url('public/grid.png')] bg-cover bg-center">
            <EventDetailsPage />
            <EventRules />
          </div>
        } />
        <Route path="/dashboard/:id" element={<UserDashboard />} />
        <Route path="/teams" element={<TeamLeadsPage />} />
      </Routes>
    </div> 
  );
}

export default App;
