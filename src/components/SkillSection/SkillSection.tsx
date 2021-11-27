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

const SkillSection: React.FC<SkillSectionProps> = ({ skills }) => {
  const [showIcon, setShowIcon] = useState(true);

  const checkWindowSize = () => {
    if (window.innerWidth < 460) {
      setShowIcon(false);
    } else setShowIcon(true);
  };

  window.addEventListener('resize', checkWindowSize);

  return (
    <>
      <TittleWrapper>
        <h3>technologies I like working with:</h3>
      </TittleWrapper>
      <SkillSec>
        {skills.map((skill, index) => (
          <SkillWrapper key={index}>
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
