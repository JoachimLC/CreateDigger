import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: 'Connect Spotify',
      description: 'Connect your Spotify account and choose a playlist.',
    },
    {
      id: 2,
      title: 'Generate a Crate',
      description: 'We’ll create a digital crate for you.',
    },
    {
      id: 3,
      title: 'Save It',
      description: 'Your crate is automatically exported to your account.',
    },
    {
      id: 4,
      title: 'Discover Vinyl',
      description: 'Listen and find records you’ll love owning.',
    },
    {
      id: 5,
      title: 'Find Assurance',
      description: 'Ensure every album exists on vinyl before you buy.',
    },
  ];

  return (
    <section className="how-it-works">
      <div className="intro">
        <h2>Enjoy digging through crates - Anytime, Anywhere</h2>
        <p>
            Have you ever stumbled across an incredible song or band, only to find out it’s not available on vinyl? It’s a frustrating reality for music lovers everywhere. Maybe the record was never pressed, sold out decades ago, or simply hard to find. With CrateDigger, you’ll never have to face that disappointment again. Imagine a playlist made just for you, filled with music you love—and the assurance that every album is available on vinyl. Fall in love with new albums, knowing they can join your collection in their purest form. Welcome to the world of CrateDigger!
        </p>
        <p>
            This is where modern convenience meets the timeless joy of crate digging. We help you stream music on Spotify through personalized recommendations, while still being able to discover vinyl-ready albums effortless. It’s more than just a playlist — it’s your personal vinyl roadmap, crafted with care and precision. Say goodbye to looking up if an album is on vinyl and hello to the thrill of finding your next favorite record, anytime and anywhere.
        </p>
        </div>
        <h2>How it works</h2>
      <div className="steps">
        {steps.map((step) => (
          <div key={step.id} className="step">
            <div className="circle">{step.id}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>

      {/* Try It Button */}
      <div className="try-it-container">
        <a href="/create-crates" className="try-it-button">Try It!</a>
      </div>
    </section>
  );
};

export default HowItWorks;
