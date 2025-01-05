import React, { useRef } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import HowItWorks from '../components/HowItWorks';

const LandingPage = () => {
  const howItWorksRef = useRef<HTMLDivElement>(null); // Type ref as HTMLDivElement

  const scrollToHowItWorks = () => {
    howItWorksRef.current?.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to HowItWorks
  };

  return (
    <div>
      <Navbar variant="landing" />
      <HeroSection scrollToRef={scrollToHowItWorks} /> {/* Pass scroll function */}
      <div ref={howItWorksRef}>
        <HowItWorks />
      </div>
    </div>
  );
};

export default LandingPage;
