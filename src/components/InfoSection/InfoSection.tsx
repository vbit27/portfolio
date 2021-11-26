import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../globalStyle';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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
import gsap from 'gsap';

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
                    <Link to="/">
                      <Button primary big>
                        {primaryBtnLabel}
                      </Button>
                    </Link>
                  )}
                  {secondaryBtnLabel && (
                    <Link to="/">
                      <Button primary={false} big>
                        {secondaryBtnLabel}
                      </Button>
                    </Link>
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
}

export default InfoSection;
