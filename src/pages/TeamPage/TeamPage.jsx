import { useState } from 'react'
import './TeamPage.css'
import Teams from '../../components/Teams'
import HeroSection from '../../components/HeroSection'
function TeamPage() {
  return <div className='TeamsContainer'>
    <HeroSection/>
    <Teams />
  </div>
}
export default TeamPage