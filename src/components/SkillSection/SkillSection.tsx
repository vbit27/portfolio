import React from 'react';
import {
  SkillItem,
  SkillSec,
  SkillText,
  SkillWrapper,
  SkillIcon,
} from './SkillSection.styled';
import { ReactComponent as JSIcon } from '../../assets/images/JSicon.svg';
import { ReactComponent as ReactIcon } from '../../assets/images/react.svg';
import { ReactComponent as TSIcon } from '../../assets/images/typescript.svg';

const SkillSection: React.FC = () => {
  return (
    <>
      <SkillSec>
        <SkillWrapper>
          <SkillItem>
            <SkillIcon>
              <JSIcon />
            </SkillIcon>
            <SkillText>JavaScript</SkillText>
          </SkillItem>
        </SkillWrapper>
        <SkillWrapper>
          <SkillItem>
            <SkillIcon>
              <ReactIcon />
            </SkillIcon>
            <SkillText>React</SkillText>
          </SkillItem>
        </SkillWrapper>
        <SkillWrapper>
          <SkillItem>
            <SkillIcon>
              <TSIcon />
            </SkillIcon>
            <SkillText>TypeScript</SkillText>
          </SkillItem>
        </SkillWrapper>
        <SkillWrapper>
          <SkillItem>
            <SkillIcon />
            <SkillText>JavaScript</SkillText>
          </SkillItem>
        </SkillWrapper>
        <SkillWrapper>
          <SkillItem>
            <SkillIcon />
            <SkillText>JavaScript</SkillText>
          </SkillItem>
        </SkillWrapper>
      </SkillSec>
    </>
  );
};

export default SkillSection;
