import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import EventsPage from "./pages/EventPage/EventPage.jsx";
import TeamLeadsPage from "./pages/TeamPage/TeamPage.jsx";
import UserDashboard from "./components/DashboardPage.jsx";
import EventDetailsPage from "./components/EventBoard.jsx";
import EventRules from "./components/Rules.jsx";
import "./App.css";
import { useState, useEffect } from "react";
import ProfilePage from "./pages/ProfilePage/profilepage.jsx";
import PageNotFound from "./pages/PageNotFound/PageNotFound.jsx";
import Faqs from "./pages/FAQs/Faqs.jsx";
import Login from "./components/Login/Login.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";

function App() {
  const [token, setToken] = useState(localStorage.getItem("Token"));

  useEffect(() => {
    const storedToken = localStorage.getItem("Token");
    if (storedToken) setToken(storedToken);
  }, []);

  console.log(token);
  // statusCode();

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<HomePage Token={token} setToken={setToken} />}
        />
        <Route
          path="/events"
          element={<EventsPage Token={token} setToken={setToken} />}
        />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/profile" element={<ProfilePage setToken={setToken} />} />
        <Route path="/event/:id" element={
          <div className="bg-[url('/grid.png')] bg-cover bg-center bg-fixed">
            <Navbar Token={token} setToken={setToken} />
            <EventDetailsPage />
            <EventRules />
            <Footer />
          </div>
        } />
        <Route path="/dashboard/:id" element= {
            <ProtectedRoute Token={token}>
              <UserDashboard Token={token} setToken={setToken} />
            </ProtectedRoute>
          } />
        <Route path="/teams" element={<TeamLeadsPage Token={token} setToken={setToken} />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
