import React from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import InfoSection from '../components/InfoSection/InfoSection';
import SkillsSection from '../components/SkillsSection/SkillsSection';
import { homeObjOne, homeObjThree, homeObjTwo } from './Data';

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <h3>
        skills<span style={{ color: 'red' }}>.</span>
      </h3>
      <SkillsSection />
      <h3>
        projects<span style={{ color: 'red' }}>.</span>
      </h3>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
      <h3>
        about me<span style={{ color: 'red' }}>.</span>
      </h3>
      <InfoSection {...homeObjTwo} />
    </>
  );
};

export default Home;
