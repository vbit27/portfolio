import React from 'react';
import {
  SkillsColumn,
  SkillsRow,
  SkillsSec,
  TextWrapper,
} from './SkillsSection.styled';

const SkillsSection: React.FC = () => {
  return (
    <>
      <SkillsSec>
        <SkillsRow>
          <SkillsColumn>
            <TextWrapper>
              <h4>
                Technologies <br />I work with:
              </h4>
            </TextWrapper>
          </SkillsColumn>
          <SkillsColumn>
            <TextWrapper>
              <p>
                JavaScript Typescript ReactJs HTML CSS SASS npm webpack
                JavaScript Typescript ReactJs HTML CSS SASS npm webpack{' '}
              </p>
            </TextWrapper>
          </SkillsColumn>
        </SkillsRow>
      </SkillsSec>
    </>
  );
};

export default SkillsSection;
