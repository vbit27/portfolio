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
`;

export const LineContainer = styled.div`
  width: 100%;
  margin-top: 4rem;
  border-bottom: 1px solid #545461;
`;

export const CircleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  z-index: 5;
`;

export const Circle = styled.span`
  position: absolute;
  bottom: 30px;
  left: 50%;
  height: 15px;
  width: 15px;
  background-color: #ff3644;
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
`;
