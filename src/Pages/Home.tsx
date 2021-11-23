import React from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import InfoSection from '../components/InfoSection/InfoSection';
import { homeObjOne } from './Data';

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <h2>projects</h2>
      <InfoSection {...homeObjOne} />
    </>
  );
};

export default Home;
