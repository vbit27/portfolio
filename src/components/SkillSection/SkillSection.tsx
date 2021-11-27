import React from 'react';
import {
  SkillItem,
  SkillSec,
  SkillText,
  SkillWrapper,
  SkillIcon,
} from './SkillSection.styled';

const SkillSection: React.FC<SkillSectionProps> = ({ skills }) => {
  console.log(skills);
  return (
    <>
      <SkillSec>
        {skills.map((skill) => (
          <SkillWrapper>
            <SkillItem>
              <SkillIcon>
                <img src={skill.img} alt={skill.tittle} />
              </SkillIcon>
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
