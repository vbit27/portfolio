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
  ImgWrapper,
  Img,
} from './InfoSection.styled';

const InfoSection: React.FC<InfoSectionProps> = ({
  imgStart,
  headline,
  description,
  subtittle,
  primaryBtnLabel,
  secondaryBtnLabel,
  img,
  alt,
  start,
}) => {
  return (
    <>
      <InfoSec>
        <InfoRow imgStart={imgStart}>
          <InfoColumn>
            <TextWrapper>
              <h3>{headline} </h3>
              <Description>{description}</Description>
              {subtittle && <h5>{subtittle}</h5>}
              <Link to="/">
                <ButtonContainer>
                  {primaryBtnLabel && (
                    <Button primary big>
                      {primaryBtnLabel}
                    </Button>
                  )}
                  {secondaryBtnLabel && (
                    <Button primary={false} big>
                      {secondaryBtnLabel}
                    </Button>
                  )}
                </ButtonContainer>
              </Link>
            </TextWrapper>
          </InfoColumn>
          <InfoColumn>
            <ImgWrapper start={start}>
              <Img src={img} alt={alt} />
            </ImgWrapper>
          </InfoColumn>
        </InfoRow>
      </InfoSec>
    </>
  );
};

interface InfoSectionProps {
  imgStart: boolean;
  headline: string;
  description: string;
  subtittle?: string;
  img: string;
  alt: string;
  start: boolean;
  primaryBtnLabel: string;
  secondaryBtnLabel: string;
}

export default InfoSection;
