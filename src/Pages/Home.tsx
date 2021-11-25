import React from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import InfoSection from '../components/InfoSection/InfoSection';
import SkillsSection from '../components/SkillsSection/SkillsSection';
import Form from '../Form/Form';
import { homeObjOne, homeObjThree, homeObjTwo } from './Data';

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <section id="projects">
        <h3>
          projects<span style={{ color: 'red' }}>.</span>
        </h3>

        <InfoSection {...homeObjOne} />
        <InfoSection {...homeObjThree} />
      </section>
      <section id="about">
        <h3>
          about me<span style={{ color: 'red' }}>.</span>
        </h3>
        <InfoSection {...homeObjTwo} />
        <SkillsSection />
      </section>
      <section id="contact">
        <h3>
          let's talk<span style={{ color: 'red' }}>.</span>
        </h3>
        <Form />
      </section>
    </>
  );
};

export default Home;
