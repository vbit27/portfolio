import gsap from 'gsap';
import React, { useEffect } from 'react';
import {
  HeroContainer,
  TextWrapper,
  LineContainer,
  Circle,
} from './HeroSection.styled';

const HeroSection: React.FC = () => {
  useEffect(() => {
    gsap
      .timeline({})
      .from('.animation-tittle', {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.04,
      })
      .from('.animation-subtittle', {
        opacity: 0,
        x: -50,
        duration: 0.7,
      })
      .from('.animation-circle', {
        opacity: 0,
      });

    gsap.to('.animation-circle', {
      duration: 3,
      ease: 'ease-in',
      opacity: 0,
      scrollTrigger: {
        trigger: '.animation-circle',
        start: 'top 90%',
        end: 'bottom 30%',
        scrub: true,
        toggleActions: 'restart complete reverse reset',
      },
    });
  }, []);

  return (
    <>
      <HeroContainer>
        <TextWrapper>
          <h1 className="animation-tittle">
            Hi, I'm Vasil. <br />I build things for the web.
          </h1>
          <h4 className="animation-subtittle">
            I’m a web-developer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I’m focused
            on building accessible, human-centered products.
          </h4>
        </TextWrapper>
        <Circle className="animation-circle" />
      </HeroContainer>
    </>
  );
};

// <LineContainer className="animation-line" /> delete style component if not used

export default HeroSection;
