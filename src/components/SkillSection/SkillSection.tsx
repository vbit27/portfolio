import gsap from 'gsap';
import React, { useEffect, useState } from 'react';
import {
  SkillItem,
  SkillSec,
  SkillText,
  SkillWrapper,
  SkillIcon,
  TittleWrapper,
} from './SkillSection.styled';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const SkillSection: React.FC<SkillSectionProps> = ({ skills }) => {
  const [showIcon, setShowIcon] = useState(true);

  const checkWindowSize = () => {
    if (window.innerWidth < 460) {
      setShowIcon(false);
    } else setShowIcon(true);
  };

  window.addEventListener('resize', checkWindowSize);

  gsap.from('.main-animation', {
    opacity: 0,
    y: -50,
    duration: 2,
    delay: 1,
    scrollTrigger: {
      trigger: '.animation',
      start: 'top 90%',
      end: 'bottom 60%',

      scrub: true,
      toggleActions: 'restart complete reverse reset',
    },
  });

  return (
    <>
      <TittleWrapper>
        <h3>technologies I like working with:</h3>
      </TittleWrapper>
      <SkillSec className="main-animation">
        {skills.map((skill, index) => (
          <SkillWrapper key={index} className="animation">
            <SkillItem>
              {showIcon && (
                <SkillIcon>
                  <img src={skill.img} alt={skill.tittle} />
                </SkillIcon>
              )}
              <SkillText>{skill.tittle}</SkillText>
            </SkillItem>
          </SkillWrapper>
        ))}
      </SkillSec>
    </>
  );
};

interface SkillSectionProps {
  skills: {
    img: string;
    tittle: string;
  }[];
}

export default SkillSection;
