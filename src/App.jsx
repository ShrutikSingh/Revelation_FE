<<<<<<< HEAD
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import EventPage from './pages/EventPage/EventPage'
function App() {
  
=======
import React from "react";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import './App.css'

>>>>>>> 41c02c7bb194447b03deecb32885e8d075ffeea1



const App = () => {
  return (
<<<<<<< HEAD
    <div>
      <Routes>
        <Route path= "/eventpage" element = {<EventPage />} />
      </Routes>  
    </div>
  )
}
=======
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};
>>>>>>> 41c02c7bb194447b03deecb32885e8d075ffeea1

export default App;
