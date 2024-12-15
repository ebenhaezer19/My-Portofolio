import React from 'react';
import Hero from '../../components/Hero';
import About from '../../components/About';
import Portfolio from '../../components/Portfolio';
import Contact from '../../components/Contact';
import SmokeScene from '../../components/effects/SmokeScene';
import MouseTrail from '../../components/effects/MouseTrail';
import PageTransition from '../../components/effects/PageTransition';

const Home = () => {
  return (
    <div className="bg-black text-white relative">
      <SmokeScene />
      <MouseTrail />
      <PageTransition>
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </PageTransition>
    </div>
  );
};

export default Home; 