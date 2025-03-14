import { useState } from 'react';
import './TeamPage.css';
import Teams from '../../components/Teams';
import HeroSection from '../../components/HeroSection';
import Navbar from "../../components/Navbar/Navbar";

function TeamPage() {
  return (
    <div className='TeamsPage-Container'>
      <Navbar />
      <HeroSection />
      <Teams />
    </div>
  );
}

export default TeamPage;
