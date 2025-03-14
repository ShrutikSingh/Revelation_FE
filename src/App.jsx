import {BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import EventPage from './pages/EventPage/EventPage'
import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import './App.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path= "/eventpage" element = {<EventPage />} />
      </Routes>
    </Router>
  );
};

export default App;
