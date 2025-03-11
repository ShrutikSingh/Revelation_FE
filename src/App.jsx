import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Sponsorship from './components/Sponsors/Sponsorship'
import Gallery from './components/Gallery/Gallery'



function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Sponsorship/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
    </Routes>
    </BrowserRouter>
     
  )
}

export default App
