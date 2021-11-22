import React from 'react';
import { HeroContainer, TextWrapper } from './HeroSection.styled';

const HeroSection: React.FC = () => {
  return (
    <>
      <HeroContainer>
        <TextWrapper>
          <h1>
            Hi. Vasil here. <br />I build things for the web.
          </h1>
          <h4>
            I’m a web-developer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I’m focused
            on building accessible, human-centered products.
          </h4>
        </TextWrapper>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
