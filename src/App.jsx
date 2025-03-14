import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import TeamPage from './pages/TeamPage/TeamPage.jsx'
function App() {
  

  return (
    <div>
      {/* <Routes> */}
        {/* <Route path= "/teampage" element = {<TeamPage />} /> */}
      {/* </Routes>   */}
      <TeamPage></TeamPage>
    </div>
  )
}

export default App