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
        duration: 1,
      })
      .from('.animation-line', {
        opacity: 0,
        y: 50,
      })
      .from('.animation-circle', {
        opacity: 0,
        y: 50,
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
        <LineContainer className="animation-line" />
        <Circle className="animation-circle" />
      </HeroContainer>
    </>
  );
};

export default HeroSection;
