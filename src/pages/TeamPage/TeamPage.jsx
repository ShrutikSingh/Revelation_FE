import { useState } from 'react';
import './TeamPage.css';
import Teams from '../../components/Teams';
import HeroSection from '../../components/HeroSection';

function TeamPage() {
  return (
    <div className='TeamsPage-Container'>
      <HeroSection />
      <Teams />
    </div>
  );
}

export default TeamPage;
