import React from 'react';

const HeroSection = ({ scrollToRef }) => {
  return (
    <header className="hero">
      <h1>Discover Vinyl Tailored to Your Taste</h1>
      <button className="cta-button" onClick={scrollToRef}>
        Get started
      </button>
      <div className="arrow-container">
        <svg
          className="arrow"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </header>
  );
};

export default HeroSection;
