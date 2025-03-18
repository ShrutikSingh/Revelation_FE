import './TeamPage.css';
import Teams from '../../components/Teams';
import HeroSection from '../../components/HeroSection';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function TeamPage({Token,setToken}) {
  return (
    <div className='TeamsPage-Container'>
      <Navbar Token={Token} setToken={setToken}/>
      <HeroSection />
      <Teams />
      <Footer/>
    </div>
  );
}

export default TeamPage;
