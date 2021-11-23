import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../globalStyle';
import {
  InfoSec,
  InfoColumn,
  InfoRow,
  TextWrapper,
  Description,
  ButtonContainer,
} from './InfoSection.styled';

const InfoSection: React.FC<InfoSectionProps> = ({
  imgStart,
  headline,
  description,
  subtittle,
}) => {
  return (
    <>
      <InfoSec>
        <InfoRow imgStart={imgStart}>
          <InfoColumn>
            <TextWrapper>
              <h3>{headline} </h3>
              <Description>{description}</Description>
              <h5>{subtittle}</h5>
              <Link to="/">
                <ButtonContainer>
                  <Button primary big>
                    Live
                  </Button>
                  <Button primary={false} big>
                    View Code
                  </Button>
                </ButtonContainer>
              </Link>
            </TextWrapper>
          </InfoColumn>
        </InfoRow>
      </InfoSec>
      ;
    </>
  );
};

interface InfoSectionProps {
  imgStart: boolean;
  headline: string;
  description: string;
  subtittle?: string;
}

export default InfoSection;
