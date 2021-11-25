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

gsap.registerPlugin(ScrollTrigger);

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
  gsap.from('.content-main', {
    duration: 3,
    y: '100',
    opacity: 0,
    ease: 'easy-in',
    scrollTrigger: {
      trigger: 'content',
      start: 'top 90%',
      end: 'bottom 60%',
      markers: true,
      toggleActions: 'restart complete reverse reset',
    },
  });

  return (
    <>
      <InfoSec className="content-main">
        <InfoRow imgStart={imgStart}>
          <InfoColumn>
            <TextWrapper>
              <h3 className="content">{headline} </h3>
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
          <InfoColumn className="content">
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
