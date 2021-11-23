import styled from 'styled-components';

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 60px);
  justify-content: center;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h4 {
    max-width: 65ch;
  }

  @media screen and (max-width: 767px) {
    h1 {
      font-size: 50px;
      line-height: 67px;
      letter-spacing: 0.02em;
    }

    h4 {
      font-size: 1.2rem;
      font-weight: 400;
      line-height: 1.75;
    }
  }

  @media screen and (max-width: 481px) {
    h1 {
      font-size: 38px;
      font-weight: 700;
      line-height: 51px;
    }

    h4 {
      font-size: 1.2rem;
      font-weight: 400;
      line-height: 1.75;
    }
  }
`;

export const LineContainer = styled.div`
  width: 100%;
  margin-top: 4rem;
  border-bottom: 1px solid #bdbdbd;

  @media screen and (max-width: 360px) {
    display: none;
  }
`;

export const Circle = styled.span`
  position: absolute;
  bottom: 30px;
  left: 50%;
  height: 12px;
  width: 12px;
  background-color: #000;
  border-radius: 50%;
  display: inline-block;
  //animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-name: bounce-2;
  animation-timing-function: ease;

  @keyframes bounce-2 {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-50px);
    }
    100% {
      transform: translateY(0);
    }
  }

  @media screen and (max-width: 960px) {
    bottom: 10px;
  }

  @media screen and (max-width: 481px) {
    @keyframes bounce-2 {
      50% {
        transform: translateY(-30px);
      }
    }
  }
`;
