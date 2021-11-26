import gsap from 'gsap';
import React, { MutableRefObject, useEffect, useRef } from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import InfoSection from '../components/InfoSection/InfoSection';
import SkillsSection from '../components/SkillsSection/SkillsSection';
import Form from '../Form/Form';
import { homeObjOne, homeObjThree, homeObjTwo } from './Data';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Home: React.FC = () => {
  const ref1 = React.createRef<HTMLDivElement>();
  const ref2 = React.createRef<HTMLDivElement>();
  const ref3 = React.createRef<HTMLDivElement>();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const elements = [ref1, ref2, ref3];

    elements.forEach((box) => {
      gsap.from(box.current, {
        duration: 3,
        y: '100',
        opacity: 0,
        ease: 'ease-in',
        scrollTrigger: {
          trigger: box.current,
          start: 'top 90%',
          end: 'bottom 60%',
          scrub: true,
          toggleActions: 'restart complete reverse reset',
        },
      });
    });
  }, []);

  return (
    <>
      <HeroSection />
      <section id="projects">
        <h3>
          projects<span style={{ color: 'red' }}>.</span>
        </h3>
        <InfoSection {...homeObjOne} ref={ref1} />
        <InfoSection {...homeObjThree} ref={ref2} />
      </section>
      <section id="about">
        <h3>
          about me<span style={{ color: 'red' }}>.</span>
        </h3>
        <InfoSection {...homeObjTwo} ref={ref3} />
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
