import gsap from 'gsap';
import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import InfoSection from '../components/InfoSection/InfoSection';
import SkillsSection from '../components/SkillsSection/SkillsSection';
import Form from '../components/Form/Form';
import {
  homeObjAbout,
  homeObjOne,
  homeObjSkills,
  homeObjThree,
  homeObjTwo,
} from './Data';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SkillSection from '../components/SkillSection/SkillSection';

const Home: React.FC = () => {
  const ref1 = React.createRef<HTMLDivElement>();
  const ref2 = React.createRef<HTMLDivElement>();
  const ref3 = React.createRef<HTMLDivElement>();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const elements = [ref1, ref2, ref3];

    let spec = [0, 1, 2, 3];
    let n = 10;

    n.toString()
      .split('')
      .forEach((num) => {
        if (spec.includes(Number(num))) return 'Not!!';
      });

    elements.forEach((box) => {
      gsap.from(box.current, {
        duration: 3,
        y: '50',
        opacity: 0,
        ease: 'ease-in',
        scrollTrigger: {
          trigger: box.current?.querySelector('.main'),
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
        <InfoSection {...homeObjTwo} />
        <InfoSection {...homeObjThree} />
      </section>
      <section id="about">
        <h3>
          about me<span style={{ color: 'red' }}>.</span>
        </h3>
        <InfoSection {...homeObjAbout} ref={ref3} />
        <SkillSection skills={homeObjSkills} />
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
