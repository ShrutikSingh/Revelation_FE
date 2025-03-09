import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import EventPage from './pages/EventPage/EventPage'
function App() {
  

  return (
    <div>
      <Routes>
        <Route path= "/eventpage" element = {<EventPage />} />
      </Routes>  
    </div>
  )
}

export default App
