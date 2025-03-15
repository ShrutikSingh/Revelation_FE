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
        <Route path="/profile" element={<ProfilePage setToken={setToken} />} />
        <Route path="/event/:id" element={
          <>
            <EventDetailsPage />
            <EventRules />
          </>
        } />
        <Route path="/dashboard/:id" element={<UserDashboard  Token={token} setToken={setToken}/>} />
        <Route path="/teams" element={<TeamLeadsPage Token={token} setToken={setToken} />} />
      </Routes>
    </div> 
  );
}

export default App;
