import EventList from '../../components/EventList.jsx'
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";


const EventPage = ({Token,setToken}) =>{

  return (
    <div>
      <Navbar Token={Token} setToken={setToken} />
      <EventList setToken={setToken} />
      <Footer />
    </div>
  )
}

export default EventPage;
