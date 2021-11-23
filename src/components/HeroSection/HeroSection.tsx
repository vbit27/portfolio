import React from 'react';
import {
  HeroContainer,
  TextWrapper,
  LineContainer,
  Circle,
} from './HeroSection.styled';

const HeroSection: React.FC = () => {
  return (
    <>
      <HeroContainer>
        <TextWrapper>
          <h1>
            Hi, I'm Vasil. <br />I build things for the web.
          </h1>
          <h4>
            I’m a web-developer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I’m focused
            on building accessible, human-centered products.
          </h4>
        </TextWrapper>
        <LineContainer />
        <Circle />
      </HeroContainer>
    </>
  );
};

export default HeroSection;
