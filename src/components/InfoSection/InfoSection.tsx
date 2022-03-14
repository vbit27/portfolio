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

const InfoSection = React.forwardRef<HTMLDivElement, InfoSectionProps>(
  (
    {
      imgStart,
      headline,
      description,
      subtittle,
      primaryBtnLabel,
      secondaryBtnLabel,
      img,
      alt,
      start,
      secondaryBtnLink,
      primaryBtnLink,
    },
    ref
  ) => {
    return (
      <>
        <InfoSec className="content">
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <h3>{headline} </h3>
                <Description>{description}</Description>
                {subtittle && <h5>{subtittle}</h5>}
                <ButtonContainer>
                  {primaryBtnLabel && (
                    <a href={primaryBtnLink!} target="_blank" rel="noreferrer">
                      <Button primary big>
                        {primaryBtnLabel}
                      </Button>
                    </a>
                  )}
                  {secondaryBtnLabel && (
                    <a
                      href={secondaryBtnLink!}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button primary={false} big>
                        {secondaryBtnLabel}
                      </Button>
                    </a>
                  )}
                </ButtonContainer>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn className="content" ref={ref}>
              <ImgWrapper start={start} className="main">
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </InfoSec>
      </>
    );
  }
);

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
  ref?: React.MutableRefObject<HTMLDivElement | null>;
  secondaryBtnLink?: string;
  primaryBtnLink?: string;
}

export default InfoSection;
