import React from 'react';
import Navbar from '../components/navbar';
import HeroSection from '../components/HeroSection';
import HowItWorks from '../components/HowItWorks';

const LandingPage = () => {
  return (
    <div>
      <Navbar variant='landing'/>
      <HeroSection/>
      <HowItWorks/>
    </div>
  );
};

export default LandingPage;
